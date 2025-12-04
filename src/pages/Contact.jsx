import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-white mb-12 border-b border-secondary pb-4">Get In Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
                        <p className="text-gray-400 mb-8">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4 text-gray-300">
                                <FaEnvelope className="text-accent text-xl" />
                                <span>23100010103.uset.@ltsu.ac.in</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300">
                                <FaPhone className="text-accent text-xl" />
                                <span>+91 7719713524</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300">
                                <FaMapMarkerAlt className="text-accent text-xl" />
                                <span>Bihar, India</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a
                                href="https://wa.me/1234567890?text=Hello,%20i%20name%20just%20Shashi%20Kumar%20.%20I%20visited%20your%20portfolio%20and%20want%20to%20connect."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#128C7E] transition-colors"
                            >
                                <FaWhatsapp className="mr-2 text-xl" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 bg-secondary/30 border border-secondary rounded-lg focus:outline-none focus:border-accent text-white"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 bg-secondary/30 border border-secondary rounded-lg focus:outline-none focus:border-accent text-white"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-2 bg-secondary/30 border border-secondary rounded-lg focus:outline-none focus:border-accent text-white"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
