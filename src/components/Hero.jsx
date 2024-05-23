import React, { useRef } from "react";
import Section from "./Section";
import { heroBackground } from "../assets";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { socials } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import Generating from "./Generating";
import CodeEditor from "./CodeEditor";
import SoundOnHover from "./design/Sound/SoundOnHover";
import TextGenerateEffect from "./ui/TextGenerateEffect";

const Hero = () => {
    const parallaxRef = useRef(null);

    const words = `I love exploring new things!`;
    return (
        <Section>
            <div className="container relative" ref={parallaxRef}>
                <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[87%] -z-50">
                    <img
                        src={heroBackground}
                        className="w-full"
                        width={1440}
                        height={1800}
                        alt="hero"
                    />
                </div>
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <p className="h6 mb-1 font-roboto font-thin text-color-1">
                        Hello, my name is
                    </p>
                    <h1 className="h1 mb-1 font-grotesk  font-semibold">
                        Shekhar Hans
                    </h1>
                    <TextGenerateEffect words={words} className="h1" />
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        "Experienced full-stack developer merging creativity and
                        technical expertise. Eager to innovate, collaborate, and
                        excel in web development. Ready for dynamic
                        opportunities."
                    </p>
                </div>
                <div className="relative max-w-[25rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                            <div className="aspect-[30/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <CodeEditor className=" w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%] sm:scale-[0.5]" />

                                <ScrollParallax
                                    isAbsolutelyPositioned
                                    zIndex={1}
                                >
                                    <ul className="hidden absolute -right-[5.5rem] bottom-[11rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex ">
                                        {socials.map((item, index) => (
                                            <li
                                                className="p-5 cursor-pointer relative "
                                                key={index}
                                            >
                                                <SoundOnHover>
                                                    <a
                                                        key={item.id}
                                                        href={item.url}
                                                        target="_blank"
                                                    >
                                                        <img
                                                            src={item.iconUrl}
                                                            width={20}
                                                            height={20}
                                                            alt={item.title}
                                                        />
                                                    </a>
                                                </SoundOnHover>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollParallax>
                                <ScrollParallax isAbsolutelyPositioned>
                                    <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 w-8 " />
                                </ScrollParallax>
                            </div>
                        </div>
                        <Gradient />
                    </div>

                    <BackgroundCircles />
                </div>
            </div>
            <BottomLine />
        </Section>
    );
};

export default Hero;
