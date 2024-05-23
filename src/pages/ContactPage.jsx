import React from "react";
import BackgroundCellCore from "../components/ui/BackgroundCellCore";

const ContactPage = () => {
    return (
        <div>
            <div className="relative h-screen bg-slate-950 flex justify-center overflow-hidden">
                <BackgroundCellCore />
                <div className="relative z-50 mt-40 pointer-events-none select-none">
                    <h1 className="md:text-2xl lg:text-7xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pointer-events-none">
                        Background cell animation <br />
                        with framer motion
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
