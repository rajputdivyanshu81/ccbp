export interface JobTrack {
    id: number;
    title: string;
    duration: string;
    salaryRange: string;
    description: string;
    status: "available" | "filling-fast" | "seats-filled";
    courses: string[];
    curriculumUrl: string;
}

export const jobTracks: JobTrack[] = [
    {
        id: 1,
        title: "MERN Full Stack Developer",
        duration: "6 months",
        salaryRange: "₹3-12 LPA",
        description: "Master MongoDB, Express.js, React.js, and Node.js to become a complete Full Stack Developer.",
        status: "available",
        courses: [
            "React.js Fundamentals",
            "Node.js & Express.js",
            "MongoDB & Database Design",
            "REST APIs & Authentication",
            "Deployment & DevOps Basics",
        ],
        curriculumUrl: "#",
    },
    {
        id: 2,
        title: "Java Full Stack Developer",
        duration: "6 months",
        salaryRange: "₹3-12 LPA",
        description: "Learn Java, Spring Boot, and modern frontend technologies to become an enterprise-ready Full Stack Developer.",
        status: "available",
        courses: [
            "Core Java & OOP",
            "Spring Boot Framework",
            "Hibernate & JPA",
            "REST APIs & Microservices",
            "React.js Frontend",
        ],
        curriculumUrl: "#",
    },
    {
        id: 3,
        title: "QA & Automation Testing",
        duration: "3 months",
        salaryRange: "₹2-7 LPA",
        description: "Learn manual testing, automation frameworks, and quality assurance practices used in the industry.",
        status: "filling-fast",
        courses: [
            "Manual Testing Fundamentals",
            "Selenium WebDriver",
            "Test Automation Frameworks",
            "API Testing",
            "Performance Testing Basics",
        ],
        curriculumUrl: "#",
    },
    {
        id: 4,
        title: "Data Analytics",
        duration: "3 months",
        salaryRange: "₹3-8 LPA",
        description: "Master data analysis, visualization, and business intelligence tools to become a skilled Data Analyst.",
        status: "filling-fast",
        courses: [
            "Excel & Advanced Excel",
            "SQL & Database Querying",
            "Python for Data Analysis",
            "Data Visualization (Tableau/Power BI)",
            "Statistics & Business Analytics",
        ],
        curriculumUrl: "#",
    },
];

export const fundamentalsCourses = [
    "Programming Constructs with Instruction Flows",
    "Programming with Python",
    "Fundamentals of Computer Science",
    "Data Structures",
    "Problem Solving Techniques",
];
