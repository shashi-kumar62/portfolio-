import { motion } from 'framer-motion';

const SkillsCard = ({ title, skills, icon: Icon, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="bg-secondary/30 p-6 rounded-xl border border-secondary hover:border-accent/50 transition-colors"
        >
            <div className="flex items-center mb-4">
                <Icon className="text-accent text-3xl mr-3" />
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 bg-primary rounded-full text-sm text-gray-300 border border-secondary"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillsCard;
