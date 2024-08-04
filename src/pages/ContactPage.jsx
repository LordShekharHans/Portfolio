import React from "react";
import BackgroundCellCore from "../components/ui/BackgroundCellCore";
import { HeroHighlight, Highlight } from "../components/ui/HeroHighlight";
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import SoundOnHoverAndClick from "../components/design/Sound/SoundOnHoverAndClick";
import { Form } from "../components/Form";

const ContactPage = () => {
    return (
        <div>
            <div className="relative h-full bg-n-8 flex justify-center overflow-hidden">
                <BackgroundCellCore />
                <div className="relative z-50 mt-20 p-10">
                    <p className="h6 font-roboto font-thin text-color-1 text-center">
                        What's next ?
                    </p>
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
                            Don't hesitate to reach out and{" "}
                            <span className="text-purple-300">connect</span>{" "}
                            with me. <br />
                            <Highlight className="text-black dark:text-white">
                                Let's make magic happen together!
                            </Highlight>
                        </motion.h1>
                    </HeroHighlight>
                    <p className="body-1 max-w-4xl mx-auto mb-6 text-n-2 lg:mb-8 text-center">
                        Although I&#39;m currently seeking new opportunities, my
                        inbox is always open. Whether you have questions or just
                        want to say hi, I'll do my best to get back to you!
                    </p>
                    <SoundOnHoverAndClick>
                        <div className="flex flex-col justify-between w-full md:flex-col lg:flex-row items-center lg:items-start md:items-start mt-36 gap-5">
                            <div className="flex flex-col  justify-center items-center text-base lg:text-lg  lg:w-1/3 md:w-1/3 ">
                                <p className="h2 font-bold text-n-2 max-w-7xl leading-relaxed lg:leading-snug text-center">
                                    Contact Here
                                </p>
                                <div className="flex items-start flex-col gap-10 p-5 justify-center ">
                                    <SoundOnHoverAndClick>
                                        <a
                                            href="mailto:shekharhans161@gmail.com"
                                            target={"_blank"}
                                        >
                                            <button className="flex gap-4 items-center py-3 border-b md:w-[17rem] w-[13rem] lg:w-[17rem] lg:hover:w-[20rem] md:hover:w-[20rem] hover:w-[15rem] transition-all [mask-image:linear-gradient(to_bottom,transparent,black)] border-purple-500 ">
                                                <IoMailOutline />
                                                Mail Me
                                            </button>
                                        </a>
                                    </SoundOnHoverAndClick>
                                    <SoundOnHoverAndClick>
                                        <a
                                            href="https://wa.me/916296857738"
                                            target={"_blank"}
                                        >
                                            <button className="flex gap-4 items-center py-3 border-b md:w-[17rem] w-[13rem] lg:w-[17rem] lg:hover:w-[20rem] md:hover:w-[20rem] hover:w-[15rem] transition-all [mask-image:linear-gradient(to_bottom,transparent,black)] border-purple-500">
                                                <IoLogoWhatsapp />
                                                WhatsApp me
                                            </button>
                                        </a>
                                    </SoundOnHoverAndClick>
                                    <SoundOnHoverAndClick>
                                        <a
                                            href=" http://m.me/shekhar.hans.148"
                                            target={"_blank"}
                                        >
                                            <button className="flex gap-4 items-center py-3 border-b md:w-[17rem] w-[13rem] lg:w-[17rem] lg:hover:w-[20rem] md:hover:w-[20rem] hover:w-[15rem] transition-all [mask-image:linear-gradient(to_bottom,transparent,black)] border-purple-500">
                                                <FaFacebookMessenger />
                                                Messenger me
                                            </button>
                                        </a>
                                    </SoundOnHoverAndClick>
                                </div>
                            </div>
                            <Form />
                        </div>
                    </SoundOnHoverAndClick>
                </div>
            </div>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </div>
    );
};

export default ContactPage;
