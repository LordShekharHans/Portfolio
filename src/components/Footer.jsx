import React from "react";
import { socialMedia } from "../data/project";
import SoundOnHoverAndClick from "./design/Sound/SoundOnHoverAndClick";
import {  FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full px-10 pb-5" id="contact">
            <div className="flex md:flex-row flex-col justify-between items-center gap-3">
                <p className="text-base md:font-normal font-light flex items-center gap-2">
                    Copyright<span><FaRegCopyright/>{" "}</span>2024 Shekhar Hans
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <SoundOnHoverAndClick>
                            <div
                                key={info.id}
                                className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200  border border-purple-400 rounded-full h5"
                            >
                                <a
                                    href={info.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {info.img}
                                </a>
                            </div>
                        </SoundOnHoverAndClick>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
