
import yuktiImage from "@/assets/project-yukti.jpg";
import hostelHubImage from "@/assets/project-hostelhub.jpg";
import studentHubImage from "@/assets/project-studenthub.jpg";

export const profile = {
    name: "Rahul Birajadar",
    firstName: "Rahul",
    initials: "RB",
    role: "Aspiring Full-Stack Developer",
    tagline: "Computer Science Student",
    location: "Maharashtra, India",
    email: "rbirajadar96@gmail.com",
    github: "https://github.com/rahul-birajadar-developer",
    githubHandle: "rahul-birajadar-developer",
    linkedin: "https://www.linkedin.com/in/rahulbirajdar07",
    linkedinHandle: "rahulbirajdar07",
    resumeUrl: "/resume.pdf",
    resumeFileName: "Rahul-Birajadar-Resume.pdf",
    availability: "Open to internship opportunities",
    intro: "I'm a Computer Science student who enjoys turning everyday problems into working software. I build full-stack web applications with React, Node.js, Express and MongoDB — focusing on clean interfaces, solid fundamentals and code that's easy to maintain.",
};

export const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
];

export const aboutParagraphs = [
    "I'm currently pursuing a B.Sc. in Computer Science at Sangameshwar College, Solapur, graduating in 2027. My coursework gave me a strong base in programming with C and Java, and it's where I first got hooked on building things that other people can actually use.",
    "Outside the classroom, I'm on a focused full-stack learning journey — from HTML, CSS and JavaScript to React on the frontend, and Node.js, Express and MongoDB on the backend. I'm also exploring React Native to bring the same ideas to mobile.",
    "I'm especially curious about AI and modern developer tooling, and how they can make software smarter and more helpful. My goal is to grow into a Full-Stack Developer / Software Engineer who ships practical, reliable applications.",
];

export const aboutHighlights = [
    { title: "Education", value: "B.Sc. Computer Science", detail: "Sangameshwar College, Solapur" },
    { title: "Focus", value: "Full-Stack Development", detail: "React · Node.js · MongoDB" },
    { title: "Exploring", value: "AI & Modern Tech", detail: "Practical, real-world apps" },
];

export const skillCategories = [
    {
        id: "programming",
        title: "Programming",
        description: "Core languages and problem-solving fundamentals.",
        icon: "code",
        skills: ["C", "Java", "JavaScript (ES6+)"],
    },
    {
        id: "frontend",
        title: "Frontend",
        description: "Building responsive, accessible user interfaces.",
        icon: "layout",
        skills: ["HTML5", "CSS3", "React.js"],
    },
    {
        id: "backend",
        title: "Backend",
        description: "APIs and server-side application logic.",
        icon: "server",
        skills: ["Node.js", "Express.js"],
    },
    {
        id: "database",
        title: "Database",
        description: "Modelling and storing application data.",
        icon: "database",
        skills: ["MongoDB"],
    },
    {
        id: "mobile",
        title: "Mobile",
        description: "Cross-platform mobile app development.",
        icon: "smartphone",
        skills: ["React Native"],
    },
];

export const projects = [
    {
        id: "yukti",
        name: "YUKTI",
        summary: "A collaborative coding and practice platform built for college students.",
        features: [
            "Collaborative coding rooms",
            "Programming practice",
            "Mock technical interviews",
            "Student progress tracking",
        ],
        tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
        status: "In Development",
        image: yuktiImage,
        imageAlt: "Preview of a collaborative code editor with a problem panel and participant chat",
        repoUrl: null,
    },
    {
        id: "hostelhub",
        name: "HostelHub",
        summary: "A hostel and PG management platform for owners and wardens.",
        features: [
            "Student management",
            "Hostel information",
            "Room management",
            "Management dashboard",
        ],
        tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
        status: "In Development",
        image: hostelHubImage,
        imageAlt: "Preview of a hostel dashboard with room occupancy tiles and a student list",
        repoUrl: null,
    },
    {
        id: "studenthub",
        name: "StudentHub",
        summary: "A student management system for maintaining student records.",
        features: [
            "Student registration",
            "Create, read, update and delete records",
            "Search and student information management",
        ],
        tech: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
        status: "Personal Project",
        image: studentHubImage,
        imageAlt: "Preview of a student registration form next to a searchable records table",
        repoUrl: null,
    },
];

export const education = {
    degree: "B.Sc. Computer Science",
    institution: "Sangameshwar College, Solapur",
    location: "Solapur, Maharashtra",
    expectedGraduation: "2027",
    status: "Currently pursuing",
    note: "Building a strong foundation in programming and computer science while applying it through hands-on full-stack projects.",
};

export const journey = [
    {
        id: "independent",
        title: "Independent Project Development",
        label: "Ongoing",
        description: "Designing and building full-stack applications on my own, from idea and data model to UI and API.",
        points: ["YUKTI — collaborative coding platform", "HostelHub — hostel & PG management"],
        icon: "rocket",
    },
    {
        id: "practical",
        title: "Practical Development Experience",
        label: "Hands-on",
        description: "Applying concepts by shipping working features: forms, validation, CRUD operations and search.",
        points: ["StudentHub — student management system", "REST APIs with Node.js and Express"],
        icon: "terminal",
    },
    {
        id: "learning",
        title: "Technical Learning",
        label: "Continuous",
        description: "Growing step by step — from programming fundamentals to modern JavaScript frameworks.",
        points: ["C and Java fundamentals", "JavaScript, React and Node.js", "MongoDB and React Native"],
        icon: "book",
    },
    {
        id: "exploring",
        title: "Exploring AI & Modern Technologies",
        label: "Curious",
        description: "Following how AI and new tools are changing software, and looking for practical ways to use them.",
        points: ["AI-assisted development", "Modern web tooling and best practices"],
        icon: "sparkles",
    },
];
