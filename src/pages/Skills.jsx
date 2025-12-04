import { FaCode, FaServer, FaTools, FaDatabase, FaLaptopCode, FaBrain, FaLayerGroup } from 'react-icons/fa';
import SkillsCard from '../components/SkillsCard';
import { FaBullhorn } from 'react-icons/fa6';

const Skills = () => {
    const skillCategories = [
        {
            title: "PROGRAMMING LANGUAGES",
            icon: FaCode,
            skills: ["C++", "JAVA", "PYTHON",]
        },
        {
            title: "WEB DEVELOPMENT",
            icon: FaLaptopCode,
            skills: ["HTML", "CSS", "JAVASCRIPT", "REACT",]
        },
        {
            title: "AI & ML",
            icon: FaBrain,
            skills: ["DL(ANN,CNN,RNN)", "NLP", "GENERATIVE AI", "AGENTIC AI", "LLMs",]
        },
        {
            title: "LIBRARIES",
            icon: FaLayerGroup,
            skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "PyTorch",]
        },
        {
            title: "FRAMWORKS",
            icon: FaTools,
            skills: ["jupyter Notebook", "Git & GitHub", "VS Code", "OpenAi/LLms APIs", "Google Colab",]
        },
        {
            title: "DIGITAL MARKETING",
            icon: FaBullhorn,
            skills: ["SEO", "SMM", "SEM", "Google Analytics", "Google Ads", "Canva Designing", "Content Creation", "Meta Ads Manager",]
        },

    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-3xl font-bold text-white mb-12 border-b border-secondary pb-4">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                    <SkillsCard
                        key={category.title}
                        {...category}
                        delay={index * 0.1}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;
