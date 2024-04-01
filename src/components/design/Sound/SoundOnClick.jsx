import { useSound } from "use-sound";
import React from "react";
import ClickSound from "../../../assets/sound/click.mp3";
const SoundOnClick = ({ children }) => {
    const [play] = useSound(ClickSound);

    const handleClick = () => {
        play();
    };

    return <div onClick={handleClick}>{children}</div>;
};

export default SoundOnClick;
