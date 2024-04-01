import { useSound } from 'use-sound';
import React, { useRef } from 'react';
import hoverSound from "../../../assets/sound/hover.mp3";

const SoundOnHover = ({ children }) => {
    const [play] = useSound(hoverSound);
    const isHovered = useRef(false);

    const handleMouseEnter = () => {
        isHovered.current = true;
        play();
    };

    const handleMouseLeave = () => {
        isHovered.current = false;
    };

    return (
        <div
            className={`${children.props.className || ''} sound-element`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
};

export default SoundOnHover;
