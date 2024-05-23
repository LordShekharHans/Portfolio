import React from "react";
import { HeroHighlight, Highlight } from "../components/ui/HeroHighlight";
import { motion } from "framer-motion";
import Image from "../assets/image.png";
import Preview from "../components/Preview";
import { heroBackground } from "../assets";
import EducationEditor from "../components/EducationEditor";

const AboutPage = () => {
    const words = `Hey there! I'm Shekhar, a MERN stack developer proficient in crafting end-to-end web solutions. Currently pursuing a degree in Computer Science at Meghnad Saha Institute of Technology, Kolkata.\n\nWith a knack for both frontend and backend development, I thrive on collaborating, communicating, and coding. I bring to the table a blend of technical expertise and creative flair, making me an asset to any team.\n\nI'm enthusiastic, eager to learn, and open to exciting job opportunities that align with my skills and aspirations. If you have a great opportunity waiting, let's connect and explore possibilities together!`;

    const paragraphs = words.split("\n\n");

    return (
        <div className=" px-10 flex flex-col gap-10 overflow-hidden">
            <div className="absolute -top-[64%] left-1/2 w-[100%] -translate-x-1/2 md:-top-[46%] md:w-[100%] lg:-top-[104%] -z-50 bg-no-repeat ">
                <img
                    src={heroBackground}
                    className="w-full"
                    width={1440}
                    height={1800}
                    alt="hero"
                />
            </div>
            <HeroHighlight>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="h2 font-bold text-n-2 max-w-8xl leading-relaxed lg:leading-snug text-center"
                >
                    Passionate Full-Stack Developer blending creativity and
                    technology. Open to opportunities to{" "}
                    <Highlight className="text-black dark:text-white">
                        innovate, learn, and grow.
                    </Highlight>
                </motion.h1>
            </HeroHighlight>
            <div className="flex justify-center lg:justify-around items-center flex-col md:flex-col lg:flex-row gap-10">
                <div className="text-2xl text-n-3/100 max-w-3xl">
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className="mb-4">
                            {paragraph}
                        </p>
                    ))}
                </div>
                <div className="flex  items-center justify-self-center row-start-1 md:visible lg:col-start-2 lg:col-end-3 ">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full size-[17rem] md:size-[22rem] lg:size-[30rem] z-20">
                        <img
                            className="aspect-square h-full w-full object-cover bg-opacity-20 bg-purple-300 dark:bg-opacity-20 shadow-2xl backdrop-filter backdrop-blur-[3px] shekhar"
                            alt="Shekhar Hans"
                            src={Image}
                        />
                    </span>
                </div>

                <div className="absolute top-56 right-0 w-[100%] h-[100%] overflow-hidden  invisible lg:visible -z-10">
                    <span className="rotate-[90deg] text-purple-300/45 font-poppins font-bold text-[15rem] absolute top-[27rem] right-[-13rem]  ">
                        About
                    </span>
                    <span className="rotate-[90deg] text-purple-300/45 font-poppins font-bold text-[12rem] absolute top-[18rem] lg:right-[20rem]">
                        Me
                    </span>
                </div>
            </div>
            <Preview />
            <EducationEditor/>
        </div>
    );
};

export default AboutPage;
