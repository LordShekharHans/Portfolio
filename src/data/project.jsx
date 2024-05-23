import p1 from "../assets/project/p1.svg";
import p2 from "../assets/project/p2.svg";
import p3 from "../assets/project/p3.svg";
import p4 from "../assets/project/p4.svg";
import next from "../assets/project/next.svg";
import react from "../assets/project/re.svg";
import famer from "../assets/project/fm.svg";
import three from "../assets/project/three.svg";
import ts from "../assets/project/ts.svg";
import tailwindcss from "../assets/project/tail.svg";
import stream from "../assets/project/stream.svg";
import c from "../assets/project/c.svg";
import gsap from "../assets/project/gsap.svg";
import bg5 from "../assets/project/b5.svg";
import bg4 from "../assets/project/b4.svg";
import bg1 from "../assets/project/b1.svg";
import grid from "../assets/project/grid.svg";
import communication from "../assets/project/communication.jpg";

export const projects = [
    {
        id: 1,
        title: "3D Solar System Planets to Explore",
        des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
        img: p1,
        iconLists: [react, tailwindcss, ts, three, famer],
        link: "https://v1.tailwindcss.com/components/buttons",
    },
    {
        id: 2,
        title: "Yoom - Video Conferencing App",
        des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        img: p2,
        iconLists: [next, tailwindcss, ts, stream, c],
        link: "https://ui.aceternity.com/components/animated-tooltip",
    },
    {
        id: 3,
        title: "AI Image SaaS - Canva Application",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: p3,
        iconLists: [react, tailwindcss, ts, three, c],
        link: "https://v1.tailwindcss.com/components/buttons",
    },
    {
        id: 4,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: p4,
        iconLists: [next, tailwindcss, ts, three, gsap],
        link: "https://chatgpt.com/c/782bec86-cac6-4dff-90bb-2d7001c1ee40",
    },
    {
        id: 5,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: p4,
        iconLists: [next, tailwindcss, ts, three, gsap],
        link: "https://v1.tailwindcss.com/components/buttons",
    },
    {
        id: 6,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: p4,
        iconLists: [next, tailwindcss, ts, three, gsap],
        link: "https://v1.tailwindcss.com/components/buttons",
    },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: bg1,
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: communication,
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: grid,
        spareImg: bg4,
    },

    {
        id: 5,
        title: "Currently building a JS Animation library",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: bg5,
        spareImg: grid,
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];
