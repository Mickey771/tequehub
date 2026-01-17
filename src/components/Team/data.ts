import { IconType } from "react-icons";
import {
    SiAdobexd,
    SiMiro,
    SiFigma,
    SiSketch,
    SiAdobephotoshop,
    SiFlutter,
    SiReact,
    SiNodedotjs,
    SiPython,
    SiTensorflow,
    SiSwift,
    SiKotlin,
} from "react-icons/si";
import { FaLaptopCode, FaLightbulb, FaPenNib, FaDatabase, FaServer } from "react-icons/fa";

export interface Skill {
    name: string;
    icon: IconType;
}

export interface TeamMember {
    name: string;
    surname: string;
    role: string;
    image: string;
    description?: string; // For the featured member
    skills?: Skill[];
}

export const teamMembers: TeamMember[] = [
    {
        name: "Favour",
        surname: "Etunwoke",
        role: "Senior Software Engineer/Founder",
        image: "/images/favour.jpg",
        description:
            "Favour is a visionary Senior Software Engineer and Founder with a passion for building scalable solutions. With expertise in full-stack development and cloud architecture, he leads the team in delivering cutting-edge technology products.",
        skills: [
            { name: "Software Arch", icon: FaServer },
            { name: "Web Development", icon: FaLaptopCode },
            { name: "IT Consultancy", icon: FaLightbulb },
        ],
    },
    {
        name: "Uche",
        surname: "Jacob",
        role: "CTO/ Co-founder",
        image: "/images/uche.jpg",
        description:
            "Uche is the CTO and Co-founder, driving the technical strategy and innovation at Teque. His deep knowledge of software architecture and engineering leadership ensures the team builds robust and efficient systems.",
        skills: [
            { name: "Tech Strategy", icon: FaLightbulb },
            { name: "Backend Dev", icon: FaDatabase },
            { name: "System Design", icon: FaServer },
        ]
    },
    {
        name: "Timothy",
        surname: "Ilegbusi",
        role: "UI/UX Designer",
        image: "/images/Timothy.jpg",
        description:
            "Timothy is a seasoned UI/UX designer with over three years of experience in diverse products across various sectors, including Health care, Fintech, Web 3 and other products. He is dedicated to creating intuitive and visually stunning user experiences.",
        skills: [
            { name: "UI/UX Design", icon: FaPenNib },
            { name: "Figma", icon: SiFigma },
            { name: "Adobe XD", icon: SiAdobexd },
            { name: "Miro", icon: SiMiro },
        ],
    },
    {
        name: "Igbagbo",
        surname: "Olaleye",
        role: "Lead Frontend Developer",
        image: "/images/igee.jpg",
        description:
            "Igbagbo is the Lead Frontend Developer, responsible for bringing designs to life with clean and efficient code. He specializes in modern frontend frameworks and ensuring seamless user interactions.",
        skills: [
            { name: "React", icon: SiReact },
            { name: "Web Development", icon: FaLaptopCode },
            { name: "Figma", icon: SiFigma },
        ]
    },
    {
        name: "Jesutoni",
        surname: "Aderibigbe",
        role: "Lead Mobile Engineer",
        image: "/images/toni.jpg",
        description:
            "Jesutoni acts as the Lead Mobile Engineer, focusing on building high performance mobile applications. His expertise spans across iOS and Android platforms, delivering smooth and responsive mobile experiences.",
        skills: [
            { name: "Flutter", icon: SiFlutter },
            { name: "Swift", icon: SiSwift },
            { name: "Kotlin", icon: SiKotlin },
        ]
    },
    {
        name: "Blessed",
        surname: "Oscar",
        role: "Lead Backend Engineer",
        image: "/images/oscar.jpg",
        description:
            "Blessed is the Lead Backend Engineer, architecting the server-side logic and databases that power our applications. He ensures data security, API performance, and system scalability.",
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Database", icon: FaDatabase },
            { name: "Server Mgmt", icon: FaServer },
        ]
    },
    {
        name: "Uzoma",
        surname: "Ike",
        role: "AI/ML Engineer",
        image: "/images/uzor.jpg",
        description:
            "Uzoma is an AI/ML Engineer who integrates artificial intelligence and machine learning models into our products. He works on data analysis, predictive modeling, and intelligent automation features.",
        skills: [
            { name: "Python", icon: SiPython },
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "Data Science", icon: FaDatabase },
        ]
    },
];
