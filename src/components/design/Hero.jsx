import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import PlusSvg from "../../assets/svg/PlusSvg";
import react from "../../assets/techIcons/react.svg";
import next from "../../assets/techIcons/nextjs.svg";
import mongoDB from "../../assets/techIcons/mongodb.svg";
import javascript from "../../assets/techIcons/javascript.svg";
import nodejs from "../../assets/techIcons/nodejs.svg";
import typescript from "../../assets/techIcons/typescript.svg";
import express from "../../assets/techIcons/express.svg";

export const Gradient = () => {
    return (
        <>
            <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
            <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
        </>
    );
};

export const BottomLine = () => {
    return (
        <>
            <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

            <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

            <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
        </>
    );
};

export const Rings = () => {
    return (
        <>
            <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-1/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-1/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-1/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-1/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </>
    );
};

export const BackgroundCircles = ({ parallaxRef }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
            <Rings />

            {/* Moving background colored circle balls */}
            <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
                <img
                    src={react}
                    alt="reactjs"
                    className={`h-15 w-15 right-40 absolute top-2 transition-transform duration-500 ease-out ${
                        mounted
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                    } `}
                />

                <img
                    src={next}
                    alt="nextjs"
                    className={`w-10 h-10 left-5 top-20 absolute transition-transform  duration-500 ease-out  ${
                        mounted
                            ? "translate-x-0 opacity-100"
                            : "translate-x-10 opacity-0"
                    }`}
                />

                <img
                    src={mongoDB}
                    alt="MongoDB"
                    className={`w-8 h-8 left-40 top-14 -ml-1 mt-[12.9rem]  xl:block origin-bottom absolute transit transition-transform duration-500 ease-out ${
                        mounted
                            ? "translate-x-0 opacity-100"
                            : "translate-x-10 opacity-0"
                    }`}
                />
                <img
                    src={javascript}
                    alt="javascript"
                    className={`w-6 h-6 -ml-1.5 mt-52 absolute right-48 bottom-2/3 transition-transform duration-500 ease-out ${
                        mounted
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                    }`}
                />
                <img
                    src={express}
                    alt="express"
                    className={` absolute right-10 bottom-1/2 w-10 h-10 -ml-3 -mt-3 bg-slate-100 p-2 rounded-full  duration-500 ease-out ${
                        mounted
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                    }`}
                />
                <img
                    src={nodejs}
                    alt="nodejs"
                    className={` absolute left-0 bottom-[42rem] w-6 h-6 -ml-3 -mt-10  duration-500 ease-out ${
                        mounted
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                    }`}
                />
                <img
                    src={typescript}
                    alt="typescript"
                    className={`h-8 w-8 right-1 absolute top-48 transition-transform duration-500 ease-out ${
                        mounted
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                    } `}
                />
                
            </MouseParallax>
        </div>
    );
};
