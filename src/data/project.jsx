import p1 from "../assets/project/p1.png";
import p2 from "../assets/project/p2.png";
import p3 from "../assets/project/p3.png";
import p4 from "../assets/project/p4.png";
import p5 from "../assets/project/p5.png";
import p6 from "../assets/project/p6.png";
import next from "../assets/project/next.svg";
import react from "../assets/project/re.svg";
import famer from "../assets/project/fm.svg";
import scroll from "../assets/project/scroll.svg";
import ts from "../assets/project/ts.svg";
import tailwindcss from "../assets/project/tail.svg";
import bootstrap from "../assets/project/Bootstrap.svg";
import c from "../assets/project/c.svg";
import mui from "../assets/project/mui.png";
import apex from "../assets/project/apex.png";
import html from "../assets/project/html.svg";
import css from "../assets/project/css.svg";
import js from "../assets/project/js.svg";
import bg4 from "../assets/project/b4.svg";
import bg1 from "../assets/project/b1.png";
import grid from "../assets/project/grid.svg";
import sih from "../assets/project/sih.jpg";
import communication from "../assets/project/communication.jpg";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";

export const projects = [
    {
        id: 1,
        header: "Portfolio",
        title: "Responsive Portfolio",
        des: "A personal portfolio website showcasing projects, skills, and experiences.",
        img: p1,
        iconLists: [html, css, js, bootstrap, scroll],
        link: "https://shekharhans-portfolio.netlify.app",
        githublink: "",
    },
    {
        id: 2,
        header: "SM Portfolio",
        title: "SM Service Consultancy",
        des: "A professional consultancy service website, simplifying video conferencing and connecting seamlessly.",
        img: p2,
        iconLists: [react, css, bootstrap, mui],
        link: "https://sm-consultency.netlify.app/",
        githublink: "",
    },
    {
        id: 3,
        header: "BlogHunt",
        title: "BlogHunt",
        des: "A modern blogging platform with a sleek design and user-friendly interface.",
        img: p3,
        iconLists: [react, css, bootstrap],
        link: "https://blog-hunt-six.vercel.app/",
        githublink: "",
    },
    {
        id: 4,
        header: "Crypto",
        title: "Crypto Currency Dashboard",
        des: "A cryptocurrency dashboard application featuring dynamic data visualizations and modern UI components.",
        img: p4,
        iconLists: [next, tailwindcss, ts, apex, mui],
        link: "https://currency-dashboard.netlify.app/",
        githublink: "",
    },
    {
        id: 5,
        header: "FOTOGRAPHY",
        title: "Photographer Portfolio",
        des: "A portfolio website for photographers, showcasing work and services with an elegant design.",
        img: p5,
        iconLists: [html, css, js],
        link: "https://shekharhans.github.io/FOTOGRAFI/",
        githublink: "",
    },
    {
        id: 6,
        header: "Musicfy",
        title: "Music Player",
        des: "A web-based music player application with a clean interface and easy-to-use controls.",
        img: p6,
        iconLists: [html, css, js],
        link: "https://shekharhans.github.io/musicplayer/",
        githublink: "",
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
        title: "SIH'23 Finalist",
        description: "Team AIDevMind",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: sih,
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

export const socialMedia = [
    {
        id: 1,
        img: <IoLogoGithub />,
        link: "https://github.com/ShekharHans",
    },
    {
        id: 2,
        img: <IoLogoInstagram />,
        link: "https://www.instagram.com/crazy_painter__/",
    },
    {
        id: 3,
        img: <IoLogoLinkedin />,
        link: "https://www.linkedin.com/in/shekhar-hans-560822246/",
    },
];
