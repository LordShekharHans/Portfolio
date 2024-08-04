import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "../data/project";
import { PinContainer } from "../components/ui/Pin";
import bg from "../assets/project/bg.png";
import SoundOnHoverAndClick from "../components/design/Sound/SoundOnHoverAndClick";
import TextGenerateEffect from "../components/ui/TextGenerateEffect";
import Grid from "../components/Grid";
import { HeroHighlight, Highlight } from "../components/ui/HeroHighlight";
import { motion } from "framer-motion";
import { heroBackground } from "../assets";
import { Testimonials } from "../components/Testimonials";

const ProjectPage = () => {
    const words = "A small selection of recent projects";

    return (
        <div className="py-14 flex flex-col justify-center items-center">
            <div className="absolute -top-[54%] left-1/2 w-[100%] -translate-x-1/2 md:-top-[46%] md:w-[100%] lg:-top-[104%] -z-50 overflow-hidden">
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
                    Embark on a journey through my innovative tech and creative
                    endeavors,{" "}
                    <Highlight className="text-black dark:text-white">
                        waiting to inspire and captivate.
                    </Highlight>
                </motion.h1>
            </HeroHighlight>
            <Grid />

            <TextGenerateEffect words={words} className="h1 text-center" />
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                {projects.map((item) => (
                    <div
                        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                        key={item.id}
                    >
                        <PinContainer
                            title={item.header}
                            href={item.link}
                        >
                            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                    style={{ backgroundColor: "#13162D" }}
                                >
                                    <img src={bg} alt="bgimg" />
                                </div>
                                <img
                                    src={item.img}
                                    alt="cover"
                                    className="z-10 absolute "
                                />
                            </div>

                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {item.title}
                            </h1>

                            <p
                                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                }}
                            >
                                {item.des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${
                                                    5 * index + 2
                                                }px)`,
                                            }}
                                        >
                                            <img
                                                src={icon}
                                                alt="icon5"
                                                className="p-2"
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* <SoundOnHoverAndClick>
                                    <div className="flex justify-center items-center">
                                        <a
                                            href={item.githublink}
                                            target={"_blank"}
                                            className="flex lg:text-xl md:text-xs text-sm text-purple"
                                        >
                                            Check GitHub
                                        </a>
                                        <FaLocationArrow
                                            className="ms-3"
                                            color="#CBACF9"
                                        />
                                    </div>
                                </SoundOnHoverAndClick> */}
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
            <p className=" mt-5 h2 font-bold text-n-2 max-w-8xl leading-relaxed lg:leading-snug text-center">What My Clients and Friends Think ?</p>
            <Testimonials/>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </div>
    );
};

export default ProjectPage;
