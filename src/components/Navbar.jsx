import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const links = [
        { name: 'Home', path: '/', id: 'home' },
        { name: 'About', path: '/about', id: 'about' },
        { name: 'Skills', path: '/skills', id: 'skills' },
        { name: 'Projects', path: '/projects', id: 'projects' },
        { name: 'Certification', path: '/certification', id: 'certification' },
        { name: 'Contact', path: '/contact', id: 'contact' },
        { name: 'Resume', path: '/resume', id: 'resume' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (e, link) => {
        // Define which links are sections on the home page vs separate routes
        const homePageSections = ['home', 'about', 'skills'];
        const isHomePageSection = homePageSections.includes(link.id);

        // If we are on the home page and clicking a home page section, scroll to it
        if (location.pathname === '/' && isHomePageSection) {
            e.preventDefault();
            const element = document.getElementById(link.id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else if (link.path === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
        // For all other cases (separate pages or navigating from other pages),
        // let React Router handle the navigation normally
        setIsOpen(false);
    };

    return (
        <nav className="fixed w-full z-50 bg-primary/90 backdrop-blur-sm border-b border-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link
                        to="/"
                        className="text-2xl font-bold text-accent"
                        onClick={(e) => handleNavClick(e, { name: 'Home', path: '/', id: 'home' })}
                    >
                        Shashi<span className="text-white">.dev</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${location.pathname === link.path
                                        ? 'text-accent bg-secondary/50'
                                        : 'text-gray-300 hover:text-white hover:bg-secondary/30'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary border-b border-secondary overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                        ? 'text-accent bg-secondary/50'
                                        : 'text-gray-300 hover:text-white hover:bg-secondary/30'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
