import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Enter from "./components/Enter";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import SoundOnScroll from "./components/design/Sound/ScrollOnSound";
import Header from "./components/Header";
import CVModal from "./components/CVModal";
import navigateSound from "./assets/sound/8_Zoom_Out_3_latestnews.mp3"; // Import the sound file
import Footer from "./components/Footer";

const App = () => {
    const location = useLocation();
    const [isCVModalOpen, setIsCVModalOpen] = useState(false);
    const [, setIsPageScrollEnabled] = useState(true);

    const toggleCVModal = () => {
        setIsCVModalOpen(!isCVModalOpen);
        setIsPageScrollEnabled(!isCVModalOpen);
    };

    const enablePageScroll = () => {
        setIsPageScrollEnabled(true);
    };

    useEffect(() => {
        const handleNavigation = () => {
            const audio = new Audio(navigateSound);
            audio.play();
        };

        handleNavigation(); // Play sound when component mounts

        return () => {}; // No actual unlistening since there's no direct listen method
    }, [location]);

    // Determine if the current route is the Enter page
    const isEnterPage = location.pathname === "/";

    return (
        <>
            {!isEnterPage && <Header toggleCVModal={toggleCVModal} />}
            <SoundOnScroll>
                <div
                    className={`${
                        !isEnterPage ? "pt-[4.75rem] lg:pt-[4.25rem]" : ""
                    } overflow-hidden`}
                >
                    <Routes>
                        <Route path="/" element={<Enter />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/project" element={<ProjectPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                    <ButtonGradient />
                    {isCVModalOpen && !isEnterPage && (
                        <CVModal
                            toggleCVModal={toggleCVModal}
                            enablePageScroll={enablePageScroll}
                        />
                    )}
                </div>
                {!isEnterPage && <Footer />}
            </SoundOnScroll>
        </>
    );
};

export default App;
