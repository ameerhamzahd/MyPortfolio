import React from 'react';
import { motion } from "motion/react"
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"

const Education = () => {

    const education = {
        degree: "Bachelor of Computer Science",
        institution: "International Islamic University Chittagong",
        period: "2023 - Present",
        location: "Chittagong, Bangladesh",
        description:
            "Currently pursuing my undergraduate studies in computer science, I’m building a strong foundation in data structures, algorithms, and modern web development. I love turning ideas into real projects using React, JavaScript, and contemporary frameworks, striving to balance academic excellence with hands-on learning. Passionate about creating meaningful solutions, I also contribute to open-source and aim to build tools that leave a positive impact."
    }

    return (
        <section id="education" className="py-20 px-4 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-special">Education</h2>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
                    >
                        {/* Header Section */}
                        <div className="bg-white text-black p-8 text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center justify-center w-20 h-20 bg-black text-white rounded-full mb-6"
                            >
                                <FaGraduationCap className="text-3xl" />
                            </motion.div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">{education.degree}</h3>
                            <h4 className="text-xl md:text-2xl font-semibold text-gray-400 mb-4">{education.institution}</h4>

                            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
                                <div className="flex items-center space-x-2">
                                    <FaCalendarAlt className="text-lg" />
                                    <span className="font-medium">{education.period}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaMapMarkerAlt className="text-lg" />
                                    <span className="font-medium">{education.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 bg-black">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="mb-8"
                            >
                                <p className="text-gray-300 text-lg leading-relaxed">{education.description}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;