import { motion } from "motion/react"

const Hero = () => {
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
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-2xl md:text-3xl text-white font-mono text-center lg:text-start"
                    >
                        Full Stack Developer
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold leading-tight text-center lg:text-start"
                    >
                        Hello, I'm <br /> <span className="text-accent font-mono">Ameer Hamzah Daiyan</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-lg max-w-lg mx-auto lg:mx-0 text-gray-300 text-center lg:text-start"
                    >
                        Passionate about creating innovative web solutions and bringing ideas to life through clean, efficient code.
                        I specialize in modern web technologies and love solving complex problems.
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
                            onClick={() => document.querySelector("#contact").scrollIntoView({ behavior: "smooth" })}
                            className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-200 font-medium cursor-pointer"
                        >
                            Get In Touch
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Right Content - Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="relative">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-4 border-black border-dashed"
                            style={{ width: "320px", height: "320px" }}
                        />
                        <motion.div
                            className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-accent"
                        >
                            <img
                                src="/placeholder.svg?height=320&width=320"
                                alt="Ameer Hamzah"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;