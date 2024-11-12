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
            <div className="bg-[#020616] mb-8 h-[1px] w-full" />
        </>
    );
};

export default HomePage;
