import { motion } from "framer-motion";
import { 
    FaReact, FaNodeJs, FaJsSquare, FaPython, FaGitAlt, FaHtml5, FaCss3Alt
} from "react-icons/fa";
import { 
    SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiFigma, SiCplusplus, SiDart, SiQt 
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

const Skills = () => {

    const skills = [
        { name: "C/C++", icon: SiCplusplus, color: "#00599C" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "Dart", icon: SiDart, color: "#0175C2" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
        { name: "Microsoft SQL Server", icon: DiMsqlServer, color: "#CC2927" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "Qt", icon: SiQt, color: "#41CD52" },
        { name: "React.js", icon: FaReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }
    ];

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{
                                delay: index * 0.05,
                                duration: 0.4,
                                hover: { duration: 0.2 },
                            }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center group cursor-pointer"
                        >
                            <div className="flex flex-col items-center space-y-3">
                                <skill.icon className="text-4xl transition-colors duration-300" style={{ color: skill.color }} />
                                <h4 className="font-semibold text-gray-800 group-hover:text-black transition-colors duration-300">
                                    {skill.name}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
