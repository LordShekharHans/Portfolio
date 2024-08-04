import React, { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import cv from "../assets/Shekhar_Resume.pdf";
import { cvContent } from "../data/cvContent";
import CloseIcon from "@mui/icons-material/Close";
import { Compare } from "./ui/compare";
import DownloadIcon from "@mui/icons-material/Download";

const CVModal = ({ toggleCVModal }) => {
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        disablePageScroll();
        return () => {
            enablePageScroll();
        };
    }, []);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = cv;
        link.download = "Shekhar_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="fixed top-0 left-0 z-[999999] w-full h-full bg-opacity-50 flex justify-center items-center scrollbar-width-none overflow-y-auto cvmodal">
            <div className="relative p-4 w-full max-w-4xl max-h-full scrollbar-width-none">
                <div className="relative border border-slate-500/30 rounded-lg px-8 py-1 bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="w-full flex justify-between flex-row mb-1">
                        <div className="flex gap-2 p-3 border-b border-slate-500/30">
                            <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                            <div className="w-2.5 h-2.5 bg-yellow-600 rounded-full"></div>
                            <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleDownload}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                            >
                                <DownloadIcon />
                                <span className="sr-only">Download PDF</span>
                            </button>
                            <button
                                onClick={toggleCVModal}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                            >
                                <CloseIcon />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                    </div>
                    <div
                        className="w-full bg-transparent code-container overflow-hidden relative"
                        onMouseEnter={() => setAutoplay(false)}
                        onMouseLeave={() => setAutoplay(true)}
                    >
                        <Compare
                            firstContent={
                                <div className="relative h-full">
                                    <object
                                        data={`${cv}#toolbar=0`}
                                        type="application/pdf"
                                        style={{ width: '100%', height: '100%', overflow: 'auto' }}
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
                                </div>
                            }
                            secondContent={
                                <SyntaxHighlighter
                                    language="javascript"
                                    style={vscDarkPlus}
                                    showLineNumbers
                                >
                                    {cvContent}
                                </SyntaxHighlighter>
                            }
                            className="w-full h-[80vh]"
                            initialSliderPercentage={50}
                            slideMode="hover"
                            showHandlebar={true}
                            autoplay={autoplay}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CVModal;
