import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-6xl font-bold text-white mb-4"
                >
                    Hi, I'm <span className="text-accent">Shashi Kumar</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
                >
                    I’m currently pursuing B.Tech CSE (AI & ML) at Lamrin Tech Skills University.
                    I work on Machine Learning, Python development, and modern web technologies.
                    I love building smart and user-friendly digital solutions
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center space-x-4"
                >
                    <Link
                        to="/projects"
                        className="px-8 py-3 bg-accent text-primary font-bold rounded-full hover:bg-accent/90 transition-colors"
                    >
                        View Work
                    </Link>
                    <Link
                        to="/contact"
                        className="px-8 py-3 border-2 border-accent text-accent font-bold rounded-full hover:bg-accent/10 transition-colors"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
