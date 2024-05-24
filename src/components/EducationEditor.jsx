import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism"; // Dark theme
import {
    MPCodeContent,
    HSCodeContent,
    CollageCodeContent,
} from "../data/codeContent";
import SoundOnHoverAndClick from "./design/Sound/SoundOnHoverAndClick";

const EducationEditor = () => {
    const [codeContent, setCodeContent] = useState(CollageCodeContent); // Initially set content for Collage
    const [activeButton, setActiveButton] = useState("Collage");

    const buttons = [
        { label: "Graduation", content: CollageCodeContent },
        { label: "Higher Secondary", content: HSCodeContent },
        { label: "Secondary", content: MPCodeContent },
    ];

    const handleButtonClick = (label, content) => {
        setActiveButton(label);
        setCodeContent(content);
    };

    return (
        <div className="lg:flex flex-col md:flex gap-10 justify-center items-center overflow-hidden py-14 hidden">
            <h1 className="h1">Want To Know More?</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 lg:w-full w-full">
                <div className="flex flex-row md:flex-row lg:flex-col gap-2  justify-center items-center">
                    {buttons.map(({ label, content }) => (
                        <SoundOnHoverAndClick>
                            <button
                                key={label}
                                className="relative inline-flex  h-12 md:mt-10 overflow-hidden rounded-md p-[1px] w-32 lg:w-48"
                                onClick={() =>
                                    handleButtonClick(label, content)
                                }
                            >
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-conic-gradient opacity-40" />
                                <span
                                    className={`inline-flex h-full  w-full cursor-pointer items-center justify-center rounded-md bg-slate-950  text-sm font-medium  backdrop-blur-3xl gap-2 md:px-5 ${
                                        activeButton === label
                                            ? "text-purple-300"
                                            : "text-white"
                                    }`}
                                >
                                    {label}
                                </span>
                            </button>
                        </SoundOnHoverAndClick>
                    ))}
                </div>
                <div className="w-[45rem] ">
                    <div className="bg-transparent rounded-lg border border-slate-500/30 flex-grow">
                        <div className="flex gap-2 p-3 border-b border-slate-500/30">
                            <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                            <div className="w-2.5 h-2.5 bg-yellow-600 rounded-full"></div>
                            <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                        </div>
                        <div className="w-full bg-transparent code-container overflow-hidden -top-[0.5rem] relative ">
                            <SyntaxHighlighter
                                language="javascript"
                                style={vscDarkPlus}
                                showLineNumbers
                                customStyle={{
                                    background: "transparent !important",
                                    overflow: "hidden",
                                }}
                            >
                                {codeContent.trim()}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationEditor;
