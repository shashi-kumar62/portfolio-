import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, image, github, demo, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="bg-secondary/30 rounded-xl overflow-hidden border border-secondary hover:border-accent/50 transition-all group"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary rounded-full text-white hover:text-accent transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href={demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary rounded-full text-white hover:text-accent transition-colors">
                        <FaExternalLinkAlt size={20} />
                    </a>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 bg-primary/50 rounded text-xs text-accent"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
