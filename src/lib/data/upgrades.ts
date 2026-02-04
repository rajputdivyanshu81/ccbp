export interface Upgrade {
    id: number;
    title: string;
    description: string;
    icon: string;
    isNew?: boolean;
}

export const upgrades: Upgrade[] = [
    {
        id: 1,
        title: "Live Sessions Mon-Fri",
        description: "Interactive live sessions every weekday with experienced trainers covering key concepts, doubt resolution, and hands-on coding practice.",
        icon: "Video",
        isNew: true,
    },
    {
        id: 2,
        title: "Dedicated Success Coach",
        description: "Get personal guidance from a dedicated success coach who tracks your progress, keeps you motivated, and helps you stay consistent throughout your learning journey.",
        icon: "UserCheck",
    },
    {
        id: 3,
        title: "Placement Manager",
        description: "A dedicated placement manager works with you from resume building to interview preparation, ensuring you're fully prepared for your job search.",
        icon: "Briefcase",
    },
    {
        id: 4,
        title: "Mega Placement Drives",
        description: "Access exclusive mega offline placement drives with 100+ companies visiting NxtWave campuses for recruitment, giving you direct interview opportunities.",
        icon: "Building2",
        isNew: true,
    },
    {
        id: 5,
        title: "AI Mock Interviews",
        description: "Practice interviews with our AI-powered mock interview system that provides instant feedback on your answers, body language, and communication skills.",
        icon: "Bot",
    },
    {
        id: 6,
        title: "Masterclasses",
        description: "Learn from industry leaders through exclusive masterclasses covering advanced topics, career guidance, and industry insights.",
        icon: "GraduationCap",
    },
    {
        id: 7,
        title: "Alumni Mentorship",
        description: "Connect with successful NxtWave alumni who are now working in top tech companies. Get real-world advice and mentorship from those who've been in your shoes.",
        icon: "Users",
    },
    {
        id: 8,
        title: "NxtBytes Reels & Quizzes",
        description: "Bite-sized learning content through engaging reels and interactive quizzes to reinforce concepts and make learning fun and memorable.",
        icon: "Sparkles",
        isNew: true,
    },
];
