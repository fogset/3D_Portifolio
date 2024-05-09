import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/sakura.mp3";
function Home() {
    const audioRef = useRef(new Audio(sakura));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;

    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);

    useEffect(() => {
        if (isPlayingMusic === true) {
            audioRef.current.play();
        }
        return () => {
            audioRef.current.pause();
        };
    }, [isPlayingMusic]);

    function adjustIslandForScreenSize() {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];
        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }
        return [screenScale, screenPosition, rotation];
    }
    function adjustPlaneForScreenSize() {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }
        return [screenScale, screenPosition];
    }
    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();
    return (
        <Container>
            <Popup>{currentStage && <HomeInfo currentStage={currentStage} />}</Popup>
            <Canvas
                camera={{ near: 0.1, far: 1000 }}
                className={`${isRotating ? "curosr-grabbing" : "cursor-grab"}`}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
                    <Bird />
                    <Sky isRotating={isRotating} />
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        isRotating={isRotating}
                        scale={planeScale}
                        position={planePosition}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>
            <div className="absolute bottom-2 left-2">
                <img
                    src={!isPlayingMusic ? soundoff : soundon}
                    alt="jukebox"
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                    className="w-10 h-10 cursor-pointer object-contain"
                />
            </div>
        </Container>
    );
}

export default Home;
const Container = styled.div`
    margin-left: 0px;
    width: 100%;
    height: 100vh;
    position: relative;
`;
const Popup = styled.div`
    position: absolute;
    top: 10px;
    left: 0px;
    right: 0px;
    z-index: 10;
    display: flex;
    justify-content: center;
`;
