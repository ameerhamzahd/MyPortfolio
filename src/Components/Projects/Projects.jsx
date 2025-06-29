import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Modal from "react-modal"
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa"

if (typeof window !== "undefined") {
    Modal.setAppElement("#root")
}

const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showOverlayId, setShowOverlayId] = useState(null);


    const projects = [
        {
            id: 1,
            title: "Muqaddas",
            shortDescription: "A seamless and trustworthy platform offering halal travel bookings and guided spiritual journeys to Makkah and Madinah.",
            fullDescription:
                "Muqaddas is a sacred travel booking platform that simplifies spiritual journeys to Makkah and Madinah. Explore detailed packages, guided tours, and seamless bookings — all in one place. Designed with modern tech and a peaceful UI to offer a trustworthy, halal travel experience for every pilgrim.",
            image: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1751136098/muqaddas_grumvd.png",
            technologies: ["Reactjs", "Nodejs", "Expressjs", "MongoDB", "Firebase Authentication", "JWT"],
            githubUrl: "https://github.com/ameerhamzahd/Muqaddas.git",
            liveUrl: "https://safar-e-muqaddas.web.app/",
            features: [
                "View curated Hajj & Umrah packages",
                "Advanced filtering by date, price, location, and duration",
                "Real-time booking system with availability tracking",
                "Detailed package information and itinerary",
                "Secure login, registration & user dashboard",
                "Embedded Google Maps for destination guidance",
                "Booking statistics and dynamic counts"
            ],
            challenges: "Managing dynamic bookings securely was challenging, but using React dynamic routes and protected APIs ensured a seamless, secure user experience.",
            plans: "Adding Stripe payments, AI-based personalized package suggestions, and admin analytics dashboards to enhance user experience and operational efficiency."
        },
        {
            id: 2,
            title: "DwellMate",
            shortDescription: "A full-stack platform that connects users with ideal roommates and rental spaces through secure listings and real-time search.",
            fullDescription:
                "DwellMate is a modern full-stack Roommate Finder platform that connects individuals seeking shared living spaces. Featuring user authentication, listing management, real-time search, and secure CRUD operations, it offers a seamless, user-friendly experience for finding ideal roommates and rental spaces efficiently.",
            image: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1751137590/dwellmate_t6shib.png",
            technologies: ["Reactjs", "Expressjs", "Nodejs", "MongoDB", "Firebase Authentication"],
            githubUrl: "https://github.com/ameerhamzahd/DwellMate.git",
            liveUrl: "https://dwellmate-org.web.app/",
            features: [
                "Each listing includes user name, email, photo, contact info, lifestyle preferences, and room type.",
                "Search and view all available accommodations with rich details and responsive cards.",
                "Users can express interest in a post (except their own); each like is counted and displayed in real-time.",
                "See how many people are interested in each accommodation directly on the listing and details page.",
                "See full descriptions, rent, availability, and lifestyle info in a clean, focused layout.",
                "Add and manage roommate listings",
                "Optimized for all devices."
            ],
            challenges:
                "A challenge was maintaining consistent row indexing and smooth toggling in the “See More / Show Less” feature, which was solved by dynamically adjusting the displayed slice and recalculating the index based on the current view.",
            plans: "Adding pagination with server-side filtering for scalability, with future plans to integrate AI-based personalized properties suggestions to enhance user experience and operational efficiency."
        },
        {
            id: 3,
            title: "Nuvica",
            shortDescription: "A responsive platform that simplifies doctor appointments by offering real-time availability and easy booking.",
            fullDescription:
                "Nuvica is a sleek, responsive doctor appointment platform designed to streamline healthcare access. Users can explore doctor profiles, check real-time availability, and book consultations with ease. Built with modern web tech, Nuvica ensures a smooth, intuitive, and professional user experience.",
            image: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1751138475/nuvica_hxo3tj.png",
            technologies: ["Reactjs", "Local Storage", "TailwindCSS"],
            githubUrl: "https://github.com/ameerhamzahd/Nuvica.git",
            liveUrl: "https://ameerhamzahd-nuvica.netlify.app/",
            features: [
                "Current weather conditions for any location",
                "7-day weather forecast with hourly details",
                "Interactive weather maps",
                "Favorite locations management",
                "Weather alerts and notifications",
                "Historical weather data charts",
                "Geolocation-based weather detection",
                "Dark/light theme toggle",
            ],
            challenges: "A key challenge was handling React Router dynamic routing and loader states on Netlify, which was solved by configuring a _redirects file and implementing structured loader-based data fetching for smooth navigation without reload issues.",
            plans: "Adding user authentication and real-time notifications, with future plans to integrate secure payments and AI-powered appointment suggestions for enhanced user experience."
        },
        {
            id: 4,
            title: "EnglishJanala",
            shortDescription: "An interactive platform offering engaging English lessons and vocabulary exercises for learners at all levels.",
            fullDescription:
                "EnglishJanala is an interactive platform to enhance English skills, featuring engaging lessons and vocabulary exercises for all levels. With a user-friendly experience, it seamlessly integrates data via API fetch requests for a smooth, responsive learning journey. Users can start easily and learn at their own pace.",
            image: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1751139291/englishjanala_i1n1ly.png",
            technologies: ["HTML", "TailwindCSS", "Javascript"],
            githubUrl: "https://github.com/ameerhamzahd/EnglishJanala.git",
            liveUrl: "https://ameerhamzahd-englishjanala.netlify.app/",
            features: [
                "User login with validation",
                "Real-time API data fetching for vocabulary lessons",
                "Dynamic lesson buttons & modal-based content view",
                "Responsive design for all screen sizes",
                "Smooth scroll & navigation experience"
            ],
            challenges: "The main challenge was integrating real-time API data while maintaining responsiveness, which was solved by optimizing fetch logic and modularizing components for a smoother, device-friendly experience.",
            plans: "Adding user progress tracking, implementing Firebase authentication, and expanding lesson content to enhance personalized learning and engagement."
        }
    ]

    const openModal = (project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedProject(null)
    }

    return (
        <section id="projects" className="py-20 px-4 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-special">Projects</h2>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden border border-none group"
                        >
                            <div
                                className="relative overflow-hidden cursor-pointer group"
                                onClick={() => {
                                    // If already shown, do nothing
                                    if (showOverlayId === project.id) return;
                                    // Show overlay for this project on tap (mobile)
                                    setShowOverlayId(project.id);
                                }}
                            >
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-1/3 object-cover transition-transform duration-300 group-hover:scale-110"
                                />

                                {/* Overlay + Button */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity:
                                            showOverlayId === project.id
                                                ? 1 // Show on tap on mobile
                                                : 0, // Hide otherwise
                                    }}
                                    whileHover={{ opacity: 1 }} // Show on hover on desktop
                                    className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${showOverlayId === project.id ? "opacity-100" : "sm:opacity-0 sm:group-hover:opacity-100"}`}
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent parent onClick
                                            openModal(project);
                                            setShowOverlayId(null); // Reset after opening modal
                                        }}
                                        className="bg-white text-black px-6 py-2 rounded-full font-medium"
                                    >
                                        Details
                                    </motion.button>
                                </motion.div>
                            </div>


                            <div className="p-6">
                                <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.shortDescription}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-medium">
                                            +{project.technologies.length - 4} more
                                        </span>
                                    )}
                                </div>

                                <div className="flex space-x-4">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-200"
                                    >
                                        <FaGithub />
                                        <span>Client</span>
                                    </motion.a>

                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-200"
                                    >
                                        <FaExternalLinkAlt />
                                        <span>Live</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Project Detail Modal */}
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Project Details"
                    className="max-w-4xl mx-auto mt-20 bg-white rounded-lg shadow-2xl outline-none overflow-y-auto max-h-[80vh]"
                    overlayClassName="fixed inset-0 bg-black/75 bg-opacity-50 flex items-start justify-center p-4 z-50 overflow-y-auto"
                >
                    <AnimatePresence>
                        {selectedProject && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="relative"
                            >
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 z-10 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
                                >
                                    <FaTimes />
                                </button>

                                <div className="px-5 pt-15 pb-5">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        <div>
                                            <img
                                                src={selectedProject.image || "/placeholder.svg"}
                                                alt={selectedProject.title}
                                                className="w-full h-64 object-cover rounded-lg"
                                            />
                                        </div>

                                        <div>
                                            <h2 className="text-3xl font-bold text-black mb-4">{selectedProject.title}</h2>
                                            <p className="text-gray-600 mb-6">{selectedProject.fullDescription}</p>

                                            <div className="flex flex-wrap gap-4 mb-6">
                                                <motion.a
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    href={selectedProject.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-black text-white px-3 py-1 rounded-full hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2"
                                                >
                                                    <FaGithub />
                                                    <span>Client</span>
                                                </motion.a>
                                                
                                                <motion.a
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    href={selectedProject.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="border-2 border-black text-black px-3 py-1 rounded-full hover:bg-accent hover:border-accent transition-colors duration-200 flex items-center space-x-2"
                                                >
                                                    <FaExternalLinkAlt />
                                                    <span>Live</span>
                                                </motion.a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-black mb-3">Technologies Used</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.technologies.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-black mb-3">Key Features</h3>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                {selectedProject.features.map((feature, index) => (
                                                    <li key={index} className="text-gray-600 flex items-start">
                                                        <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-black mb-3">Challenges & Solutions</h3>
                                            <p className="text-gray-600">{selectedProject.challenges}</p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-black mb-3">Future Plans</h3>
                                            <p className="text-gray-600">{selectedProject.plans}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Modal>
            </div>
        </section>
    );
};

export default Projects;