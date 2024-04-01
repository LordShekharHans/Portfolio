import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import SoundOnHoverAndClick from "./design/Sound/SoundOnHoverAndClick";

const Enter = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <SoundOnHoverAndClick>
                <Link to="/homepage">
                    <Button>Enter</Button>
                </Link>
            </SoundOnHoverAndClick>
        </div>
    );
};

export default Enter;
