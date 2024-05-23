import React, { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { cvContent } from "../data/cvContent";
import cv from "../assets/cv.pdf";
import SoundOnHoverAndClick from "./design/Sound/SoundOnHoverAndClick";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DownloadIcon from "@mui/icons-material/Download";
import CodeIcon from "@mui/icons-material/Code";
import CloseIcon from "@mui/icons-material/Close";

const CVModal = ({ toggleCVModal }) => {
    const [showPDF, setShowPDF] = useState(false);

    useEffect(() => {
        disablePageScroll();
        return () => {
            enablePageScroll();
        };
    }, []);

    const togglePDFView = () => {
        setShowPDF(!showPDF);
    };

    return (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-opacity-50 flex justify-center items-center scrollbar-width-none overflow-y-auto cvmodal">
            <div className="relative p-4 w-full max-w-4xl max-h-full scrollbar-width-none">
                <div className="relative border border-slate-500/30 rounded-lg px-8 py-1 bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="w-full flex justify-between flex-row mb-1">
                        <div className="flex gap-2 p-3 border-b border-slate-500/30">
                            <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                            <div className="w-2.5 h-2.5 bg-yellow-600 rounded-full"></div>
                            <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                        </div>
                        <SoundOnHoverAndClick>
                            <button
                                onClick={toggleCVModal}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <CloseIcon />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </SoundOnHoverAndClick>
                    </div>
                    <div className="w-full bg-transparent code-container overflow-hidden -top-[0.5rem] relative">
                        {showPDF ? (
                            <div
                                style={{ width: "100%", height: "600px" }}
                                className="pdf-container"
                            >
                                <object
                                    data={`${cv}#toolbar=0`}
                                    type="application/pdf"
                                    width="100%"
                                    height="100%"
                                    aria-label="CV"
                                >
                                    <p>
                                        It appears you don't have a PDF plugin
                                        for this browser. You can{" "}
                                        <a href={cv}>
                                            click here to download the PDF file.
                                        </a>
                                    </p>
                                </object>
                                <div
                                    className="absolute top-4  right-16 text-gray-400 hover:text-gray-200 cursor-pointer"
                                    onClick={togglePDFView}
                                >
                                    <SoundOnHoverAndClick>
                                        <CodeIcon className=" text-blue-900" />
                                    </SoundOnHoverAndClick>
                                </div>
                            </div>
                        ) : (
                            <SyntaxHighlighter
                                language="javascript"
                                style={vscDarkPlus}
                                showLineNumbers

                            >
                                {cvContent}
                            </SyntaxHighlighter>
                        )}
                        {!showPDF && (
                            <div
                                className="absolute top-4 right-16 text-gray-400 hover:text-gray-200 cursor-pointer"
                                onClick={togglePDFView}
                            >
                                <SoundOnHoverAndClick>
                                    <OpenInNewIcon className=" text-blue-900" />
                                </SoundOnHoverAndClick>
                            </div>
                        )}
                        <a
                            href={cv}
                            download="CV.pdf"
                            className="absolute top-4 right-8 text-gray-400 hover:text-gray-200"
                        >
                            <SoundOnHoverAndClick>
                                <DownloadIcon className=" text-blue-900" />
                            </SoundOnHoverAndClick>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CVModal;
