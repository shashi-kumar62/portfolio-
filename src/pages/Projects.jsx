import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: "AI-Powered Customer Interaction Agent for E-Commerce",
            description: "Developed an intelligent AI agent designed for e-commerce businesses to communicate with customers, understand their queries, analyze buying behavior, and gather feedback to recommend improvements.",
            image: `${import.meta.env.BASE_URL}1st pic.png`,
            tags: ["AI", "Python", "NLP", "E-commerce"],
            github: "https://github.com",
            demo: "https://demo.com"
        },
        {
            title: "Credit Scoring & Risk Assessment",
            description: "Developed a credit scoring and risk assessment system using machine learning algorithms to predict creditworthiness based on customer data.",
            image: `${import.meta.env.BASE_URL}2nd pic.png`,
            tags: ["Machine Learning", "Python", "Risk Analysis"],
            github: "https://github.com",
            demo: "https://demo.com"
        },
        {
            title: "Fraud Detection Model",
            description: "Built a machine learning model to detect fraudulent transactions using Python and ML algorithms, improving accuracy in identifying anomalies.",
            image: `${import.meta.env.BASE_URL}3rd pic.png`,
            tags: ["Machine Learning", "Python", "Data Science"],
            github: "https://github.com",
            demo: "https://demo.com"
        },
        {
            title: "Responsive Web Development Project",
            description: "Developed a fully responsive and modern website with clean UI/UX, optimized navigation, and mobile-first design. The project focused on improving user experience and ensuring smooth performance across all devices.",
            image: `${import.meta.env.BASE_URL}4th pic.png`,
            tags: ["React", "Tailwind CSS", "Responsive Design"],
            github: "https://github.com",
            demo: "https://demo.com"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-3xl font-bold text-white mb-12 border-b border-secondary pb-4">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        {...project}
                        delay={index * 0.1}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
