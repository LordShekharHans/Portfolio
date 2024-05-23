import { useSound } from "use-sound";
import React, { useRef } from "react";
import hoverSound from "../../../assets/sound/hover.mp3";
import clickSound from "../../../assets/sound/click.mp3";

const SoundOnHoverAndClick = ({ children }) => {
    const [playHover] = useSound(hoverSound);
    const [playClick] = useSound(clickSound);
    const isHovered = useRef(false);

    const handleMouseEnter = () => {
        isHovered.current = true;
        playHover();
    };

    const handleMouseLeave = () => {
        isHovered.current = false;
    };

    const handleClick = () => {
        playClick();
    };

    return (
        <div
            className={`sound-element`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {children}
        </div>
    );
};

export default SoundOnHoverAndClick;
