import {
    backend,
    web,
    javascript,
    expressjs,
    python,
    cpp,
    sql,
    firebase,
    msazure,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    jethi,
    threads,
    tshirt,
    metro,
    threejs,
    gfg,
    gmail,
    leetcode,
    linkedin,
    github1
} from "../assets";




export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    }
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    // {
    //     name: "ExpressJS",
    //     icon: expressjs,
    // },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "SQL",
        icon: sql,

    },
    {
        name: "Firebase",
        icon: firebase
    },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "Microsoft Azure",
        icon: msazure,
    },



];

const experiences = [
    {
        title: "Software Engineer intern",
        company_name: "Jethi Tech Solutions",
        icon: jethi,
        iconBg: "#383E56",
        date: "March 2022 - May 2022",
        points: [
            "Translated Figma design concepts into functional components through a blend of logic and coding skills.",
            "Utilized ReactJS for seamless integration of diverse features, prioritizing enhanced user experiences.",
            "Streamlined code performance, achieving a notable 40% reduction in page load time.",
            "Developed robust server-side functionalities using NodeJS and Firebase for efficient backend operations.",
            "Proficiently managed API interaction through Postman.",
            "Actively resolved incidents and bugs, ensuring uninterrupted system functionality and performance."
        ],
    },

];

const testimonials = [
    {
        testimonial:
            "......",
        name: ".....",
        designation: "....",
        company: "....",
        image: "....",
    },

];

const projects = [
    {
        name: "Threads Clone",
        description:
            "Developed a dynamic Full-stack project promoting community engagement, leveraging Next.js for high-performance Server-Side Rendering. MongoDB manages data efficiently. The user-friendly layout, designed with Tailwind CSS, ensures responsiveness. Clerk enhances authentication security. ",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "typescript",
                color: "pink-text-gradient",
            },
        ],
        image: threads,
        source_code_link: "https://github.com/Kshitijvajpayee/threadsApp",
    },
    {
        name: "AI & Metaverse fussed 3D Tshirt customizer",
        description:
            "Web application that is a 3D SaaS website merging metaverse and AI for t-shirt customization. Leveraged React.js, Tailwind CSS, and animations. Users personalize designs with colors and AI-generated textures.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "threejs",
                color: "green-text-gradient",
            },
            {
                name: "api",
                color: "pink-text-gradient",
            },
        ],
        image: tshirt,
        source_code_link: "https://github.com/Kshitijvajpayee/Tshirt-customization-AI",
    },
    {
        name: "Pune-City Metro App",
        description:
            "A comprehensive travel program that will take the info of the source station and the destination station, of Pune Metro, from the user and display the fare and shortest metro route to reach the destination. With Data Structures & Algorithms [DSA] using Cpp ",
        tags: [
            {
                name: "c++",
                color: "blue-text-gradient",
            },
            {
                name: "graph",
                color: "green-text-gradient",
            },
            {
                name: "algorithm",
                color: "pink-text-gradient",
            },
        ],
        image: metro,
        source_code_link: "https://github.com/Kshitijvajpayee/Pune-Metro-",
    },
];

export const profiles = [
    {
        name: "gmail",
        image: gmail,
        link: 'mailto:bkshitij189@gmail.com',
    },
    {
        name: "linkedin",
        image: linkedin,
        link: "linkedin.com/in/kshitij-vajpayee-2a6a121a5",

    },
    {
        name: "github",
        image: github1,
        link: "https://github.com/kshitijvajpayee",

    },
    {
        name: "gfg",
        image: gfg,
        link: "https://auth.geeksforgeeks.org/user/bkshitij189/practice/",
    },
    {
        name: "leetcode",
        image: leetcode,
        link: "https://leetcode.com/upcoming_major/",
    },


];



export { services, technologies, experiences, testimonials, projects };