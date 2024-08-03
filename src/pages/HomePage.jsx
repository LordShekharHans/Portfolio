import React from "react";
import Hero from "../components/Hero";
import ButtonGradient from "../assets/svg/ButtonGradient";

const HomePage = () => {
    return (
        <>
            <div className="overflow-hidden">
                <Hero />
            </div>
            <ButtonGradient />
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </>
    );
};

export default HomePage;
