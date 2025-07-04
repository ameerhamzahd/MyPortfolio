import { motion } from "motion/react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import img from "../../assets/IMG_1911.JPG"

const Hero = () => {

    const socialLinks = [
        {
            icon: FaLinkedin,
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/ameerhamzahd/",
        },
        {
            icon: FaGithub,
            name: "GitHub",
            url: "https://github.com/ameerhamzahd",
        }
    ]

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-0">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold leading-tight text-center lg:text-start"
                    >
                        Hello, I'm <br /> <span className="text-accent font-special">Ameer Hamzah Daiyan</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-2xl md:text-3xl text-white font-special text-center lg:text-start"
                    >
                        Frontend Developer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-lg max-w-lg mx-auto lg:mx-0 text-gray-300 text-center lg:text-start"
                    >
                        Specializing in crafting elegant, responsive interfaces that bring ideas to life through meaningful user experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.querySelector("#projects").scrollIntoView({ behavior: "smooth" })}
                            className="bg-white text-black px-8 py-3 rounded-full hover:bg-accent transition-colors duration-200 font-medium cursor-pointer"
                        >
                            View My Work
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.querySelector("#contact-me").scrollIntoView({ behavior: "smooth" })}
                            className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-200 font-medium cursor-pointer"
                        >
                            Get In Touch
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <div className="border-t-2 w-full border-t-gray-300 pt-5 flex flex-col items-center lg:items-start ">
                            <h4 className="font-semibold text-gray-300 mb-5">Follow Me</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-accent p-3 rounded-full hover:bg-white transition-colors duration-200 text-black"
                                    >
                                        <social.icon className="text-xl" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Content - Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="relative w-80 h-80">
                        {/* Static Image */}
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-accent">
                            <img src={img} alt="Ameer Hamzah Daiyan" className="w-full h-full object-cover" />
                        </div>

                        {/* Animated Dashed Border */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 10,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                            className="absolute inset-0 rounded-full border-6 border-dashed border-black pointer-events-none"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;