import React, { useRef, useReducer, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Physics,
    RigidBody,
    CuboidCollider,
    BallCollider,
} from "@react-three/rapier";
import { easing } from "maath";
import * as THREE from "three";
import { Environment, Lightformer } from "@react-three/drei";
import SoundOnHoverAndClick from "../design/Sound/SoundOnHoverAndClick";
import { Link } from "react-router-dom";
import Button from "../Button";
import heroBackground from "../../assets/hero/hero-background.jpg"; // Assuming heroBackground is the image path
import { BackgroundCircles, Rings } from "../design/Hero";
import { ScrollParallax } from "react-just-parallax";
const accents = ["#4060ff", "#20ffa0", "#ff4060", "#ffcc00"];
const shuffle = (accent = 0) => [
    { color: "#444", roughness: 0.1 },
    { color: "#444", roughness: 0.75 },
    { color: "#444", roughness: 0.75 },
    { color: "white", roughness: 0.1 },
    { color: "white", roughness: 0.75 },
    { color: "white", roughness: 0.1 },
    { color: accents[accent], roughness: 0.1, accent: true },
    { color: accents[accent], roughness: 0.75, accent: true },
    { color: accents[accent], roughness: 0.1, accent: true },
];

const BallScene = ({ numberOfBalls = 10 }) => {
    const [accent, click] = useReducer((state) => ++state % accents.length, 0);
    const connectors = useMemo(() => shuffle(accent), [accent]);

    // Generate positions for the balls
    const ballPositions = useMemo(() => {
        const positions = [];
        for (let i = 0; i < numberOfBalls; i++) {
            positions.push([
                THREE.MathUtils.randFloatSpread(10),
                THREE.MathUtils.randFloatSpread(10),
                THREE.MathUtils.randFloatSpread(10),
            ]);
        }
        return positions;
    }, [numberOfBalls]);

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
            }}
        >
            <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[54%]">
                    <div className="relative max-w-[25rem] mx-auto md:max-w-5xl xl:mb-20">
                        <img
                            src={heroBackground}
                            className="w-full opacity-70"
                            width={1440}
                            height={1800}
                            alt="hero"
                        />
                        <Rings />
                    </div>

            </div>
            <Canvas
                onClick={click}
                shadows
                dpr={[1, 1.5]}
                gl={{ antialias: false }}
                camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
            >
                <ambientLight intensity={0.4} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={1}
                    castShadow
                />
                <Physics gravity={[0, 0, 0]}>
                    <Pointer />
                    {connectors.map((props, i) => (
                        <Connector key={i} {...props} />
                    ))}
                    {ballPositions.map((position, index) => (
                        <Connector key={index} position={position}>
                            <Model />
                        </Connector>
                    ))}
                </Physics>
                <Environment resolution={256}>
                    <group rotation={[-Math.PI / 3, 0, 1]}>
                        <Lightformer
                            form="circle"
                            intensity={4}
                            rotation-x={Math.PI / 2}
                            position={[0, 5, -9]}
                            scale={2}
                        />
                        <Lightformer
                            form="circle"
                            intensity={2}
                            rotation-y={Math.PI / 2}
                            position={[-5, 1, -1]}
                            scale={2}
                        />
                        <Lightformer
                            form="circle"
                            intensity={2}
                            rotation-y={Math.PI / 2}
                            position={[-5, -1, -1]}
                            scale={2}
                        />
                        <Lightformer
                            form="circle"
                            intensity={2}
                            rotation-y={-Math.PI / 2}
                            position={[10, 1, 0]}
                            scale={8}
                        />
                    </group>
                </Environment>
            </Canvas>
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <SoundOnHoverAndClick>
                    <Link to="/homepage">
                        <Button>Enter</Button>
                    </Link>
                </SoundOnHoverAndClick>
            </div>
        </div>
    );
};

function Connector({
    position,
    children,
    vec = new THREE.Vector3(),
    scale,
    r = THREE.MathUtils.randFloatSpread,
    accent,
    ...props
}) {
    const api = useRef();
    const pos = useMemo(() => position || [r(10), r(10), r(10)], []);
    useFrame((state, delta) => {
        delta = Math.min(0.1, delta);
        api.current?.applyImpulse(
            vec.copy(api.current.translation()).negate().multiplyScalar(0.2)
        );
    });
    return (
        <RigidBody
            linearDamping={4}
            angularDamping={1}
            friction={0.1}
            position={pos}
            ref={api}
            colliders={false}
        >
            <CuboidCollider args={[0.38, 1.27, 0.38]} />
            <CuboidCollider args={[1.27, 0.38, 0.38]} />
            <CuboidCollider args={[0.38, 0.38, 1.27]} />
            {children ? children : <Model {...props} />}
            {accent && (
                <pointLight intensity={4} distance={2.5} color={props.color} />
            )}
        </RigidBody>
    );
}

function Pointer({ vec = new THREE.Vector3() }) {
    const ref = useRef();
    useFrame(({ mouse, viewport }) => {
        ref.current?.setNextKinematicTranslation(
            vec.set(
                (mouse.x * viewport.width) / 2,
                (mouse.y * viewport.height) / 2,
                0
            )
        );
    });
    return (
        <RigidBody
            position={[0, 0, 0]}
            type="kinematicPosition"
            colliders={false}
            ref={ref}
        >
            <BallCollider args={[1]} />
        </RigidBody>
    );
}

function Model({
    children,
    color = "white",
    roughness = 0,
    scale = 0.4,
    ...props
}) {
    const ref = useRef();

    useFrame((state, delta) => {
        easing.dampC(ref.current.material.color, color, 0.2, delta);
    });

    return (
        <mesh
            ref={ref}
            castShadow
            receiveShadow
            scale={[scale, scale, scale]}
        >
            <meshStandardMaterial
                // metalness={0.2}
                color="#fff8eb"
                polygonOffset
                polygonOffsetFactor={-10}
                flatShading
                // roughness={roughness}
                // color={color}
            />
            <sphereGeometry args={[1, 6, 6]} />
            {children}
        </mesh>
    );
}

export default BallScene;
