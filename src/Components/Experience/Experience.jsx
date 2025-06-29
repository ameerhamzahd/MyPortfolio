import React from 'react';
import { motion } from "motion/react"
import { FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {

    const experiences = [
        {
            title: "Frontend Developer",
            company: "WearVault",
            period: "August 2024 - December 2024",
            location: "Remote",
            description: "Spearheading the creation of scalable, enterprise-level web applications using modern HTML, CSS, and JavaScript technologies.",
            responsibilities: [
                "Developed responsive user interfaces using React, ensuring seamless experiences across mobile, tablet, and desktop devices.",
                "Implemented product listing and filtering features for efficient product discovery and navigation.",
                "Integrated Stripe payment gateway on the front-end for secure, user-friendly checkout flows.",
                "Utilized HTML, CSS and Vanila Javascript for clean, consistent styling across all pages, ensuring a modern aesthetic aligned with branding.",
            ],
            technologies: ["HTML", "CSS", "JavaScript"],
            liveUrl: "https://wearvault.au/",
        }
    ]

    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-special">Experience</h2>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Left Column - Job Info */}
                                <div className="lg:col-span-1">
                                    <h3 className="text-xl font-bold text-black mb-2">{exp.title}</h3>
                                    <div className="flex gap-5 mb-1">
                                        <h4 className="text-lg font-semibold text-gray-700">{exp.company}</h4>

                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={exp.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-200"
                                        >
                                            <FaExternalLinkAlt />
                                            <span>Live</span>
                                        </motion.a>
                                    </div>
                                    <p className="text-gray-500 font-medium mb-1">{exp.period}</p>
                                    <p className="text-gray-500 text-sm">{exp.location}</p>
                                    <p className="text-gray-600 mt-4">{exp.description}</p>

                                    <div className="mt-4">
                                        <h5 className="font-semibold text-black mb-3">Technologies Used:</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, techIndex) => (
                                                <motion.span
                                                    key={techIndex}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-300 hover:bg-black hover:text-white transition-colors duration-200"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Middle Column - Responsibilities */}
                                <div className="lg:col-span-1 justify">
                                        <h5 className="font-semibold text-black mb-3">Key Responsibilities:</h5>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((responsibility, respIndex) => (
                                                <li key={respIndex} className="text-gray-600 flex items-start">
                                                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                    <span className="text-sm">{responsibility}</span>
                                                </li>
                                            ))}
                                        </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;