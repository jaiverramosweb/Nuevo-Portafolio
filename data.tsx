import { BellPlus, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound } from "lucide-react";

import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaLaravel, FaNode } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssLine  } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";



export const itemsNavbar = [
    {
        id: 1,
        title: "Inico",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    // {
    //     id: 3,
    //     title: "Book",
    //     icon: <BookText size={20} />,
    //     link: "#services",
    // },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development  💄",
        experience: [
            {
                name: "HTML",
                icon: <FaHtml5 />
            },
            {
                name: "CSS",
                icon: <FaCss3Alt />
            },
            {
                name: "JavaScript",
                icon: <RiJavascriptFill />
            },   
            {
                name: "VueJs",
                icon: <FaVuejs />
            },
            {
                name: "Bootstrap",
                icon: <FaBootstrap />
            },
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "Tailwind CSS",
                icon: <RiTailwindCssLine />
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🥷",
        experience: [
            {
                name: "PHP",
                icon: <SiPhp />
            },
            {
                name: "Laravel",
                icon: <FaLaravel />
            },
            {
                name: "MySQL",
                icon: <GrMysql />
            },
            {
                name: "PostgreSql",
                icon: <BiLogoPostgresql />
            },
            {
                name: "NodeJs",
                icon: <FaNode />
            },
        ],
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/portafolio/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Web Créditos",
        image: "/portafolio/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Web reserva de coche",
        image: "/portafolio/manage-car.png",
        urlGithub: "https://github.com/jaiverramosweb/Renta-de-coches",
        urlDemo: "https://renta-de-coches.vercel.app/",
    }
];

export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+57 304 385 06 85",
        link: "tel:+573043850685",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/jaiverramosweb",
        link: "github.com/jaiverramosweb",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "jaiver.ramos7942@gmail.com",
        link: "mailto:jaiver.ramos7942@gmail.com",
        icon: <Inbox />,
    },
];

