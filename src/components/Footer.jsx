import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-secondary/30 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Shashi Kumar. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://github.com/shashi-kumar62/portfolio-/tree/main" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                            <FaGithub size={24} />
                        </a>
                        <a href="http://www.linkedin.com/in/shashi-kumar-54890333b" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://wa.me/1234567890?text=Hello,%20my%20name%20is%20Shashi%20Kumar%20.%20I%20visited%20your%20portfolio%20and%20want%20to%20connect." target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                            <FaWhatsapp size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
