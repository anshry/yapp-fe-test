import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

const fragmentShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform float uHovered;
varying vec2 vUv;

// Classic 2D noise implementation
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,
                      0.366025403784439,
                     -0.577350269189626,
                      0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m;
  m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// Fractional Brownian motion
float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 5; ++i) {
        v += a * snoise(x);
        x = rot * x * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

void main() {
    // Pixelation effect (true square pixels using resolution bounds)
    vec2 res = max(uResolution, vec2(1.0));
    float pixelSize = 4.0; // Adjust block size for HALO halftoning
    vec2 blocks = res / pixelSize;
    vec2 pixelatedUv = floor(vUv * blocks) / blocks;
    
    // Slow coordinate animation
    vec2 q = pixelatedUv;
    q.y -= uTime * 0.015;
    q.x -= uTime * 0.005;

    // Domain warping for marble swirls
    vec2 warp = vec2(
        fbm(q * 2.0 + uTime * 0.01),
        fbm(q * 2.0 + vec2(5.2, 1.3) - uTime * 0.01)
    );

    // Generate FBM noise
    float noise = fbm(q * 2.5 + warp * 2.0);
    
    // Normalize noise roughly to 0.0 -> 1.0
    noise = (noise + 1.0) * 0.5;

    // Color palette - less black, more gold, marble cake swirls
    vec3 color1 = vec3(0.01, 0.005, 0.0); // Deep black veins (marble cake)
    vec3 color2 = vec3(0.35, 0.15, 0.0);  // Dark gold/brown
    vec3 color3 = vec3(0.8, 0.45, 0.05);  // Base gold
    vec3 color4 = vec3(1.0, 0.75, 0.1);   // Bright gold highlights
    
    // Mix colors based on noise threshold - black is restricted to the lowest bounds
    vec3 finalColor = mix(color1, color2, smoothstep(0.1, 0.25, noise));
    finalColor = mix(finalColor, color3, smoothstep(0.25, 0.6, noise));
    finalColor = mix(finalColor, color4, smoothstep(0.6, 0.9, noise));

    // Interactive dark circle on hover
    float aspect = uResolution.x / uResolution.y;
    vec2 uvCorrected = vUv;
    uvCorrected.x *= aspect;
    
    // Map uMouse from NDC (-1 -> 1) to UV (0 -> 1)
    vec2 mouseUV = uMouse * 0.5 + 0.5;
    vec2 mouseCorrected = mouseUV;
    mouseCorrected.x *= aspect;
    
    float distToMouse = distance(uvCorrected, mouseCorrected);
    
    // Dark circle mask (0 at center, 1 at edges)
    float darkCircle = smoothstep(0.0, 0.35, distToMouse);
    
    // Blend with hover state so it only smoothly appears when pointer is over
    float shadowStrength = mix(1.0, darkCircle, uHovered);
    finalColor *= shadowStrength;

    gl_FragColor = vec4(finalColor, 1.0);
}
`;

const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const TexturePlane = () => {
    const materialRef = useRef<THREE.ShaderMaterial>(null);
    const targetHover = useRef(0);
    const [hovered, setHovered] = useState(false);

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0, 0) },
            uResolution: { value: new THREE.Vector2(1, 1) },
            uHovered: { value: 0 },
        }),
        [],
    );

    useFrame((state, delta) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
            materialRef.current.uniforms.uMouse.value.copy(state.pointer);
            materialRef.current.uniforms.uResolution.value.set(
                state.size.width,
                state.size.height,
            );

            targetHover.current = THREE.MathUtils.lerp(
                targetHover.current,
                hovered ? 1 : 0,
                delta * 10,
            );
            materialRef.current.uniforms.uHovered.value = targetHover.current;
        }
    });

    return (
        <mesh
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            {/* A plane that perfectly covers the 2D orthographic camera view */}
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                ref={materialRef}
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                depthWrite={false}
                depthTest={false}
            />
        </mesh>
    );
};

export const HeroTexture = () => {
    return (
        <div className="absolute inset-0 w-full h-full bg-base-dark-secondary">
            <Canvas
                orthographic
                camera={{
                    position: [0, 0, 1],
                    left: -1,
                    right: 1,
                    top: 1,
                    bottom: -1,
                    near: 0.1,
                    far: 1000,
                }}
                gl={{ antialias: false, powerPreference: "low-power" }} // Optimize for 2D pixelated look
            >
                <TexturePlane />
            </Canvas>
        </div>
    );
};
