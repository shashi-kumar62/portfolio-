import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-white mb-8 border-b border-secondary pb-4">About Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src={`${import.meta.env.BASE_URL}profile.jpg`}
                            alt="Profile"
                            className="rounded-xl shadow-2xl border-4 border-secondary/50"
                        />
                    </div>
                    <div>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            My name is Shashi Kumar, an AIML engineering student with a strong interest in building smart systems and practical applications.
                            I enjoy working on Machine Learning models, Python applications, and modern web technologies.
                            Over time, I’ve developed hands-on skills in data analysis,Various ML algorithms,Generative Ai, LLMs(AI Agent) frontend development, and project building.
                        </p>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            I have participated in university-level competitions such as Web Weavers, where I secured the 1st Runner-Up position for my web development skills.
                            I constantly explore new technologies and love learning how AI can improve real-world systems
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-secondary/30 p-4 rounded-lg">
                                <h3 className="text-accent font-bold text-xl mb-1">Fresher</h3>
                                <p className="text-gray-400 text-sm">Years Experience</p>
                            </div>
                            <div className="bg-secondary/30 p-4 rounded-lg">
                                <h3 className="text-accent font-bold text-xl mb-1">10+</h3>
                                <p className="text-gray-400 text-sm">Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
