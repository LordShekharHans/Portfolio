import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave, CV } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import SoundOnHoverAndClick from "./design/Sound/SoundOnHoverAndClick";
import cv from "../assets/cv.pdf";

const Header = ({ toggleCVModal }) => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full z-[999999] border-b border-n-6 lg:bg-n-8/90  lg:backdrop-blur-sm ${
                openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
            }`}
        >
            <div className="flex justify-around px-5 lg:px-7.5 xl:px-10 py-4">
                <SoundOnHoverAndClick>
                    <Link className="block w-[12rem] xl:mr-8" to="/home">
                        <img
                            src={brainwave}
                            width={190}
                            height={40}
                            alt="Brainwave"
                        />
                    </Link>
                </SoundOnHoverAndClick>
                <nav
                    className={`fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent ${
                        openNavigation ? "flex" : "hidden"
                    }`}
                >
                    <div className="relative z-2 flex flex-col gap-5 items-center justify-center m-auto lg:flex-row lg:gap-6 xl:gap-8 ">
                        {navigation.map((item) => (
                            <SoundOnHoverAndClick>
                                <Link
                                    key={item.id}
                                    to={item.url}
                                    onClick={handleClick}
                                    className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                                        item.onlyMobile ? "lg:hidden" : ""
                                    } lg:text-base lg:font-semibold ${
                                        item.url === pathname.hash
                                            ? "z-2 lg:text-n-1"
                                            : "lg:text-n-1/50"
                                    } lg:leading-5 lg:hover:text-n-1`}
                                >
                                    {item.title}
                                </Link>
                            </SoundOnHoverAndClick>
                        ))}
                        {openNavigation && (
                            <a
                                href={CV}
                                download="cv.pdf"
                                className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 lg:text-xs lg:font-semibold lg:text-n-1/50 lg:leading-5 lg:hover:text-n-1"
                            >
                                Download CV
                            </a>
                        )}
                    </div>
                    <SoundOnHoverAndClick>
                        <HamburgerMenu />
                    </SoundOnHoverAndClick>
                </nav>

                <SoundOnHoverAndClick>
                    <Button
                        className="hidden lg:flex text-base"
                        onClick={toggleCVModal}
                    >
                        Download CV
                    </Button>
                </SoundOnHoverAndClick>
                <SoundOnHoverAndClick>
                    <Button
                        className="ml-auto lg:hidden px-3"
                        onClick={toggleNavigation}
                    >
                        <MenuSvg openNavigation={openNavigation} />
                    </Button>
                </SoundOnHoverAndClick>
            </div>
        </div>
    );
};

export default Header;
