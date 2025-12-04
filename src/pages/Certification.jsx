import { title } from 'framer-motion/client';
import CertificateCard from '../components/CertificateCard';

const Certification = () => {
    const certificates = [
        {
            title: "Generative Ai (License)",
            
        },
        {
            title: "AI & ML",
            
        },
        {
            title: "Python",
                                            
        },
        {

            title: "Java"
        },
        {

            title: "Git & GitHub"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-3xl font-bold text-white mb-12 border-b border-secondary pb-4">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert, index) => (
                    <CertificateCard
                        key={cert.title}
                        {...cert}
                        delay={index * 0.1}
                    />
                ))}
            </div>
        </div>
    );
};

export default Certification;
