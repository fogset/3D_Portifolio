import { dappWorks, QHR, Chat, Portfolio } from "../assets/images";
import {
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    firebase,
    cSharp,
    StyledComponent,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: firebase,
        name: "firebase",
        type: "Database",
    },

    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: cSharp,
        name: "cSharp",
        type: "language",
    },
    {
        imageUrl: StyledComponent,
        name: "StyledComponent",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Front End Software Engineer",
        company_name: "DappWorks, Vancouver BC",
        icon: dappWorks,
        iconBg: "#accbe1",
        date: "July 2021 - June 2022",
        points: [
            "Develop the complete front end UI change for the Cryptocurrency Excahnge website using Vue.",
            "Develop a browser-based collaboration paint on the whiteboard with automated generated random secured UUID for private drawing-room, using react and socket.IO.",
            "Develop the front end UI change for Goverment project using React.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "QHR technologies, Kelowna BC",
        icon: QHR,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Help to implement different staff permission access level depends on the role (doctor have permission to delete documents from patient's chart but nursedoes not have this permission)",
            "Write unit test to test out existing large code base.",
            "Develop Java library that interacts with the database such as prescription or appointment information on the desktop application called Accuro EMR.",
            "Use Git for version control and Kanban for project management to increase tickets efficiency Develop Spring Boot server bridging between desktop and web applications as known as.",
        ],
    },
];

export const socialLinks = [
    {
        name: "Contact",
        iconUrl: contact,
        link: "/contact",
    },
    {
        name: "GitHub",
        iconUrl: github,
        link: "https://github.com/YourGitHubUsername",
    },
    {
        name: "LinkedIn",
        iconUrl: linkedin,
        link: "https://www.linkedin.com/in/YourLinkedInUsername",
    },
];

export const projects = [
    {
        iconUrl: Chat,
        theme: "btn-back-red",
        name: "Chat Application",
        description: "Developed a web application that can Chat with other people when login.",
        link: "https://chat-react-sigma-tawny.vercel.app",
    },
    {
        iconUrl: Portfolio,
        theme: "btn-back-green",
        name: "Framer-Motion-Portfolio",
        description: "Created a Portfolio with Framer Motion in Next JS",
        link: "https://framer-motion-portfolio-red.vercel.app",
    },

    {
        iconUrl: snapgram,
        theme: "btn-back-pink",
        name: "Full Stack Instagram Clone",
        description:
            "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
        link: "https://github.com/adrianhajdin/social_media_app",
    },
    {
        iconUrl: estate,
        theme: "btn-back-black",
        name: "Real-Estate Application",
        description:
            "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
        link: "https://github.com/adrianhajdin/projects_realestate",
    },
    {
        iconUrl: summiz,
        theme: "btn-back-yellow",
        name: "AI Summarizer Application",
        description:
            "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
        link: "https://github.com/adrianhajdin/project_ai_summarizer",
    },
];
