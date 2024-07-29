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
        title: "Web CGR",
        image: "/portafolio/siste-piezometro.png",
        is_public: false,
        details: `Desarrollo que he creado y liderado en la empresa WOLKE S.A.S., donde participe desde la toma de requerimientos, generación del esquema de la base de datos, estructura de desarrollo, consulta a la API privada para obtener información en tiempo real, tratamiento de los datos para mostrar la información calculado y graficada para mayor comprensión de los datos, generación de reportes. Optimización del tiempo de respuesta de un 40% más rápido en reportes y monitoreo en tiempo real.
            tecnologias y recusos usados:        
        `,
        tecnology: [
            {
                id: 1,
                title: "# Backend:",
                url: "https://laravel.com/"
            },
            {
                id: 2,
                title: "# Frontend:",
                url: "https://vuejs.org/"
            },
            {
                id: 3,
                title: "# UI:",
                url: " https://getbootstrap.com/"
            },
            {
                id: 4,
                title: "# BBDD:",
                url: "https://www.mysql.com/"
            },
            {
                id: 5,
                title: "# REPORTES:",
                url: "https://laravel-excel.com/"
            },
            {
                id: 6,
                title: "# API:",
                url: "Privada"
            },
            {
                id: 7,
                title: "# Graficas:",
                url: "https://echarts.apache.org/en/index.html"
            }
        ],
        urlGithub: "",
        urlDemo: "",
    },
    {
        id: 2,
        title: "Web créditos",
        image: "/portafolio/siste-credito.png",
        is_public: false,
        details: `Proyecto desarrollado para el manejo y el control de créditos para empresas en el ámbito agrónomo, creación y registro de usuarios, productos, tasas de interés, amortización de los pagos usando el método francés, periodicidad de pagos de uno, tres y seis meses, control de pagos y más.
            tecnologias y recusos usados:
        `,
        tecnology: [
            {
                id: 1,
                title: "# Backend:",
                url: "https://laravel.com/"
            },
            {
                id: 2,
                title: "# Frontend:",
                url: "https://vuejs.org/"
            },
            {
                id: 3,
                title: "# UI:",
                url: " https://getbootstrap.com/"
            },
            {
                id: 4,
                title: "# BBDD:",
                url: "https://www.mysql.com/"
            },
        ],
        urlGithub: "",
        urlDemo: "",
    },
    {
        id: 3,
        title: "Web reserva",
        image: "/portafolio/manage-car.png",
        is_public: true,
        details: `Proyecto desarrollado para el manejo y el control de la renta de coches, creación y registro de coches y subida de imágenes, poder añadir a favoritos los coches que gustan, reservar por días el uso del coche y pasarela de pago por medio de Stripe. 
            tecnologias y recusos usados:        
        `
        ,
        tecnology: [
            {
                id: 1,
                title: "# Next.js:",
                url: " https://nextjs.org/"
            },
            {
                id: 2,
                title: "# Autenticación:",
                url: " https://clerk.com/"
            },
            {
                id: 3,
                title: "# UI:",
                url: " https://ui.shadcn.com/"
            },
            {
                id: 4,
                title: "# BBDD:",
                url: " https://neon.tech/"
            },
            {
                id: 5,
                title: "# Pasarela de pago:",
                url: " https://stripe.com/es"
            },
            {
                id: 6,
                title: "# Images host:",
                url: " https://uploadthing.com/"
            },
            {
                id: 6,
                title: "# Despliegue:",
                url: " https://vercel.com/"
            }
        ],
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

