import { motion } from "motion/react"
import CountUp from "react-countup"
import { useInView } from "motion/react"
import { useRef } from "react"

const AboutMe = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const stats = [
        { number: 5, label: "Projects Completed", suffix: "+" },
        { number: 2, label: "Years Experience", suffix: "+" },
        { number: 1000, label: "Total Contribution", suffix: "+" },
        { number: 18, label: "Technologies", suffix: "" },
    ]

    return (
        <section id="about-me" className="py-20 px-4 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-special">About Me</h2>
                    <div className="w-24 h-1 bg-accent mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-center lg:text-start"
                    >
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Driven by a passion for building clean, dynamic, and user-friendly web applications, I have nearly completed a MERN stack web development course, focusing on front-end development while implementing backend CRUD operations to strengthen my practical skills. Alongside this, I am actively developing my problem-solving mindset, allowing me to approach challenges with analytical thinking and adaptability.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            With a commitment to continuous learning and professional growth, I aim to specialize in DevOps to enhance operational efficiency and later expand into SEO to optimize digital presence effectively. My goal is to make a meaningful impact in the tech industry through innovation, dedication, and the drive to turn ideas into reality on the web.
                        </p>
                    </motion.div>

                    {/* Right Content - Stats */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-200"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                                    {isInView && <CountUp end={stat.number} duration={2} suffix={stat.suffix} />}
                                </div>
                                <p className="text-gray-600 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;