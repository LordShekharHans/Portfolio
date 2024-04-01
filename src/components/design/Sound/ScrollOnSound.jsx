import { useSound } from 'use-sound';
import React, { useRef, useEffect, useState } from 'react';
import scrollUpSound from "../../../assets/sound/scrollUp.mp3";
import scrollDownSound from "../../../assets/sound/scrollDown.mp3";

const SoundOnScroll = ({ children }) => {
    const [playScrollUp] = useSound(scrollUpSound, { volume: 0.3 }); // Set volume to 0.5 for scroll up sound
    const [playScrollDown] = useSound(scrollDownSound, { volume: 0.3 });
    const lastScrollTop = useRef(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (!isPlaying) {
                setIsPlaying(true);
                if (scrollTop > lastScrollTop.current) {
                    playScrollDown();
                } else {
                    playScrollUp();
                }
                setTimeout(() => {
                    setIsPlaying(false);
                }, 500); // Adjust the timeout period as needed
            }
            lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [playScrollUp, playScrollDown, isPlaying]);

    return (
        <div className="sound-element">
            {children}
        </div>
    );
};

export default SoundOnScroll;
