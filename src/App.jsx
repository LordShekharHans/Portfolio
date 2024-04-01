import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import CodeEditor from "./components/CodeEditor";
import Enter from "./components/Enter";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomePage from "./pages/HomePage";
import SoundOnScroll from "./components/design/Sound/ScrollOnSound";
import navigateSound from "./assets/sound/8_Zoom_Out_3_latestnews.mp3"; // Import the sound file

const App = () => {
    const location = useLocation();

    useEffect(() => {
        const handleNavigation = () => {
            const audio = new Audio(navigateSound);
            audio.play();
        };

        const unlisten = () => {}; // Placeholder function as there is no direct unlisten method

        handleNavigation(); // Play sound when component mounts

        return unlisten; // No actual unlistening since there's no direct listen method
    }, [location]);


    return (
        <>
            <SoundOnScroll>
                <Routes>
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/" element={<Enter />} />
                </Routes>
                <ButtonGradient />
            </SoundOnScroll>
        </>
    );
};

export default App;
