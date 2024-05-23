import React from "react";

import { BsClipboardDataFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiSolidReport } from "react-icons/bi";
import { HiMiniDocumentArrowUp } from "react-icons/hi2";
import { HiDocumentReport } from "react-icons/hi";
import {
    RiFilePaper2Fill,
    RiNextjsFill,
    RiTailwindCssFill,
} from "react-icons/ri";

import LampContainer from "./ui/Lamp";
import { IconContainer } from "./ui/IconContainer";
import { Radar } from "./ui/Radar";
import {
    IoLogoCss3,
    IoLogoHtml5,
    IoLogoJavascript,
    IoLogoNodejs,
} from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiExpress, SiMongodb, SiThreedotjs } from "react-icons/si";
import { FaGithub, FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

const Preview = () => {
    return (
        <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
            <div className="mx-auto w-full max-w-3xl">
                <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                    <IconContainer
                        text="Express"
                        delay={0.2}
                        icon={<SiExpress className=" h-8 w-8 text-[#F7DF26]" />}
                    />
                    <IconContainer
                        text="Next Js"
                        delay={0.2}
                        icon={
                            <RiNextjsFill className=" h-8 w-8 text-[#FFFFFF]" />
                        }
                    />
                    <IconContainer
                        delay={0.4}
                        text="Javascript"
                        icon={
                            <IoLogoJavascript className=" h-8 w-8 text-[#F3E024]" />
                        }
                    />
                    <IconContainer
                        text="React Js"
                        delay={0.3}
                        icon={
                            <IoLogoReact className=" h-8 w-8 text-[#08D9FF]" />
                        }
                    />
                </div>
            </div>
            <div className="mx-auto w-full max-w-md">
                <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                    <IconContainer
                        text="Node Js"
                        delay={0.5}
                        icon={
                            <IoLogoNodejs className=" h-8 w-8 text-[#8FC708]" />
                        }
                    />
                    <IconContainer
                        text="Python"
                        delay={0.5}
                        icon={<FaPython className=" h-8 w-8 text-[#FFD448]" />}
                    />
                    <IconContainer
                        text="TailwindCss"
                        delay={0.5}
                        icon={
                            <RiTailwindCssFill className=" h-8 w-8 text-[#3EBFF8]" />
                        }
                    />
                    <IconContainer
                        text="HTML5"
                        icon={
                            <IoLogoHtml5 className=" h-8 w-8 text-[#E5532D]" />
                        }
                        delay={0.8}
                    />
                    <IconContainer
                        text="Three Js"
                        icon={
                            <SiThreedotjs className=" h-8 w-8 text-[#FFFFFF]" />
                        }
                        delay={0.8}
                    />
                </div>
            </div>
            <div className="mx-auto w-full max-w-3xl">
                <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                    <IconContainer
                        delay={0.6}
                        text="CSS3"
                        icon={
                            <IoLogoCss3 className=" h-8 w-8 text-[#265AEA]" />
                        }
                    />
                    <IconContainer
                        delay={0.7}
                        text="GitHub"
                        icon={<FaGithub className=" h-8 w-8 text-[#706FF2]" />}
                    />
                    <IconContainer
                        delay={0.7}
                        text="MySQL"
                        icon={<DiMysql className=" h-8 w-8 text-[#E59208]" />}
                    />
                    <IconContainer
                        delay={0.7}
                        text="MongoDb"
                        icon={<SiMongodb className=" h-8 w-8 text-[#199555]" />}
                    />
                </div>
            </div>

            <Radar className="absolute -bottom-12" />
            <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>
    );
};

export default Preview;
