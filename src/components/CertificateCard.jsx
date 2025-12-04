import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

const CertificateCard = ({ title, issuer, date, link, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
            className="bg-secondary/30 p-6 rounded-xl border border-secondary hover:border-accent/50 transition-colors flex items-start"
        >
            <div className="p-3 bg-primary rounded-lg mr-4">
                <FaAward className="text-accent text-2xl" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
                <p className="text-accent mb-1">{issuer}</p>
                <p className="text-gray-500 text-sm mb-3">{date}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors underline"
                >
                    View Credential
                </a>
            </div>
        </motion.div>
    );
};

export default CertificateCard;
