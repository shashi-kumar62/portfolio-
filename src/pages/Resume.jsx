import { FaDownload } from 'react-icons/fa';

const Resume = () => {
    // Use BASE_URL for correct path in GitHub Pages deployment
    const resumeUrl = "updated_reusme.pdf";

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 h-screen flex flex-col">
            <div className="flex justify-between items-center mb-8 border-b border-secondary pb-4">
                <h2 className="text-3xl font-bold text-white">My Resume</h2>
                <a
                    href={resumeUrl}
                    download=""
                    className="flex items-center px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors"
                >
                    <FaDownload className="mr-2" />
                    Download PDF
                </a>
            </div>

            <div className="flex-grow bg-secondary/20 rounded-xl overflow-hidden border border-secondary">
                <iframe
                    src={resumeUrl}
                    className="w-full h-full"
                    title="Resume PDF"
                >
                    <p className="text-center text-gray-400 p-8">
                        Your browser does not support PDF embedding.
                        <a href={resumeUrl} className="text-accent underline ml-1">Download the PDF</a> to view it.
                    </p>
                </iframe>
            </div>
        </div>
    );
};

export default Resume;
