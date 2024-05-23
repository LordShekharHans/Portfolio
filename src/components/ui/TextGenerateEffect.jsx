import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({ words, className }) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.2),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            // change here if idx is greater than 3, change the text color to #CBACF9
                            className={` ${
                                idx > 3 ? "text-purple-300" : "text-n-3/100"
                            } opacity-0`}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className=" leading-snug tracking-wide  mb-6 text-n-3/100">
                {renderWords()}
            </div>
        </div>
    );
};

export default TextGenerateEffect;
