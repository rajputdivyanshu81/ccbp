export interface FAQItem {
    id: number;
    category: "training" | "eligibility" | "placement" | "irc" | "fee";
    question: string;
    answer: string;
}

export const faqCategories = [
    { id: "training", label: "Training Details" },
    { id: "eligibility", label: "Eligibility" },
    { id: "placement", label: "Placement Support" },
    { id: "irc", label: "IRC" },
    { id: "fee", label: "Fee" },
] as const;

export const faqs: FAQItem[] = [
    {
        id: 1,
        category: "training",
        question: "What is the duration of the program?",
        answer: "The Fundamentals phase usually takes 2 months, followed by a 6-month job track, either MERN Full Stack or Java Full Stack. While learning, you'll work on multiple real-world projects to build a portfolio that you can showcase to recruiters, and you'll also receive continuous placement support until you secure a job, including resume guidance, mock interviews, and interview preparation. The program is self-paced, so you can learn at your own convenience.",
    },
    {
        id: 2,
        category: "training",
        question: "What is the NxtWave Intensive curriculum? Why is it so successful in getting tech jobs?",
        answer: "The NxtWave Intensive curriculum is a reverse-engineered, industry-aligned program created by gathering insights from 3,000+ hiring companies to understand the exact skills they look for. It takes you from zero coding knowledge to building real-world projects, starting with Fundamentals and then moving to a job track, either MERN Full Stack or Java Full Stack, based on your fundamentals exam. You'll build projects like a mini-Zomato app, a social feed app, and a portfolio website, while coding practice, assessments, and mock tests prepare you for interviews.",
    },
    {
        id: 3,
        category: "training",
        question: "Why is NxtWave's Intensive program so effective?",
        answer: "NxtWave is not just about classes. It's a complete learning ecosystem designed to make you job-ready, not just course completed. Here's how it works: Learn → Practice → Apply. Every concept is followed by hands-on coding practice in 24x7 labs. Live doubt support (11 AM – 8 PM) ensures you don't stay stuck. You get a dedicated Success Coach for personal guidance, vernacular learning for easy understanding, and cheat sheets & summary notes for quick revision.",
    },
    {
        id: 4,
        category: "training",
        question: "How flexible are the timings of NxtWave Intensive program?",
        answer: "You have the flexibility to learn at your convenient time and pace. However, we suggest you stick to a consistent time every day. Only when online live webinars happen, you need to attend them at a particular time. Mostly such webinars happen during weekends or in the evenings of working days. All the learning modules are very interactive.",
    },
    {
        id: 5,
        category: "training",
        question: "How can I clarify my doubts while learning?",
        answer: "It's natural to have doubts while learning. At NxtWave, you can get help through live doubt sessions and the discussion forum, with domain experts available from 11 AM to 8 PM. You can post questions anytime and also refer to other learners' discussions to understand concepts quickly.",
    },
    {
        id: 6,
        category: "eligibility",
        question: "Why anyone looking for a tech job can join the program without worrying about their background?",
        answer: "NxtWave Intensive program is designed to get anyone ready for a tech job within a short time. Your degree, branch, marks, or backlogs — nothing is a barrier to join the program and get a tech job. You need not have any previous coding knowledge. You'll learn everything from scratch.",
    },
    {
        id: 7,
        category: "eligibility",
        question: "Why is it recommended that you learn right from fundamentals at NxtWave Intensive?",
        answer: "In any skill, when you're strong with the fundamentals, you learn quickly and master it faster. And software development is no exception. If you build solid foundations, you can learn advanced concepts, languages and frameworks easily. We recommend that you learn right from fundamentals at NxtWave Intensive even though you have undergone training at another learning program.",
    },
    {
        id: 8,
        category: "eligibility",
        question: "How can I learn along with my college or office?",
        answer: "Learning in NxtWave Intensive is self-paced. You can join the program and learn after your working hours/regular college hours and on weekends.",
    },
    {
        id: 9,
        category: "placement",
        question: "How does NxtWave help with placements?",
        answer: "NxtWave provides comprehensive placement support including resume preparation, aptitude training, soft skills training, AI-powered mock interviews, mock interviews by tech and HR panels, access to 300+ senior interview experiences, scheduling interviews, access to the placement portal, mega offline placement drives, and negotiation with companies for higher salaries.",
    },
    {
        id: 10,
        category: "placement",
        question: "What is the placement record of NxtWave?",
        answer: "2000+ companies have hired NxtWave learners with the highest package being ₹38 LPA. 100+ companies come to hire from NxtWave every month, and thousands of students have already landed tech jobs.",
    },
    {
        id: 11,
        category: "placement",
        question: "What types of companies hire NxtWave learners?",
        answer: "NxtWave learners get placed in a wide variety of companies ranging from startups to large enterprises, product companies to service companies. Our hiring partners include companies across various domains including fintech, e-commerce, healthcare tech, edtech, and more.",
    },
    {
        id: 12,
        category: "irc",
        question: "What is IRC?",
        answer: "IRC stands for Industry Ready Certification. Unlike any other study certificate, IRC represents your readiness for a job and approves that you have skills that companies look for. NxtWave is one of the very few EdTech companies that is an Official Partner for NSDC, under the Ministry of Skill Development & Entrepreneurship, Govt. of India. Your skills will be jointly certified by NxtWave and NSDC.",
    },
    {
        id: 13,
        category: "irc",
        question: "Why is IRC more powerful than regular study certificates?",
        answer: "It's because an individual gets an IRC only after completing industry-aligned projects, assignments and tests designed by world-class developers in the NxtWave curriculum. NxtWave is an Official Partner for NSDC, under the Ministry of Skill Development & Entrepreneurship, Govt. of India. Governments recognize only those training programs that are proven to bring results after an extensive evaluation process.",
    },
    {
        id: 14,
        category: "fee",
        question: "Is there an EMI option to pay the fee for NxtWave Intensive?",
        answer: "Yes, EMI support is available for credit cards. Please select the EMI option while making payment for more information.",
    },
    {
        id: 15,
        category: "fee",
        question: "What are the terms of the refund?",
        answer: "Please check the refund policy on our terms and conditions page for detailed information about the refund terms and conditions.",
    },
    {
        id: 16,
        category: "fee",
        question: "What payment plans are available?",
        answer: "We offer two payment plans: Pre-paid plan where you pay upfront with a discounted fee, and Post-paid plan where you pay a portion upfront and the rest after placement. Both plans include full access to the program, placement support, and all other benefits.",
    },
];
