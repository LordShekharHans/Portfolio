import React from "react";
import { motion } from "framer-motion";
import LampContainer from "./ui/Lamp";
import { FlipWords } from "./ui/FlipWord";
import Button from "./Button";
import SoundOnHoverAndClick from "./design/Sound/SoundOnHoverAndClick";
import { Link } from "react-router-dom";
import Section from "./Section";

export default function Enter() {
    const words = ["creative", "innovative", "unique", "dynamic"];

    return (
        <Section>
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-neutral-200 to-neutral-600 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Welcome to My Portfolio, <FlipWords words={words} />
                    <span className="text-purple-300">!</span> <br />
                    <SoundOnHoverAndClick>
                        <Link to="/home">
                            <Button>Enter</Button>
                        </Link>
                    </SoundOnHoverAndClick>
                </motion.h1>
            </LampContainer>
        </Section>
    );
}
