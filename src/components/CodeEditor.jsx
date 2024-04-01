import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism"; // Dark theme
import { smallScreenCodeContent, largeScreenCodeContent } from "../data/codeContent";

const CodeEditor = () => {
    const [codeContent, setCodeContent] = useState(largeScreenCodeContent); // Initially set content for large screens

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 767) {
                setCodeContent(smallScreenCodeContent);
            } else {
                setCodeContent(largeScreenCodeContent);
            }
        };

        window.addEventListener('resize', handleResize); // Listen to window resize event
        handleResize(); // Initial call to set content based on screen size

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up event listener
        };
    }, []);

    return (
        <div className="bg-transparent rounded-lg border border-slate-500/30">
            <div className="flex gap-2 p-3 border-b border-slate-500/30">
                <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-yellow-600 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
            </div>
            <div className="w-full bg-transparent code-container overflow-hidden -top-[0.5rem] relative">
                <SyntaxHighlighter
                    language="html"
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
    );
};

export default CodeEditor;
