import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactMe = () => {
    const formRef = useRef();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                "service_jblgx79", // replace with your EmailJS service ID
                "template_vcxqagm", // replace with your EmailJS template ID
                formRef.current,
                "MKLjcB0hm8uD84rvQ" // replace with your EmailJS public key (user ID)
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSubmitStatus("success");
                    setFormData({ name: "", email: "", subject: "", message: "" });
                    setTimeout(() => setSubmitStatus(null), 5000);
                },
                (error) => {
                    console.log(error.text);
                    setSubmitStatus("error");
                }
            )
            .finally(() => setIsSubmitting(false));
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: "Email",
            value: "ameerhamzahdaiyan.02@gmail.com",
            link: "mailto:ameerhamzahdaiyan.02@gmail.com",
        },
        {
            icon: FaPhone,
            title: "Phone",
            value: "+880 1303 994150",
            link: "tel:+8801303994150",
        },
        {
            icon: FaMapMarkerAlt,
            title: "Location",
            value: "CDA Residential Area - Agrabad, Chittagong - 4100, Bangladesh",
            link: null,
        },
    ];

    return (
        <section id="contact-me" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-special">Contact Me</h2>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                            <p className="text-gray-300 text-lg mb-8">
                                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-4"
                                >
                                    <div className="bg-white text-black p-3 rounded-full">
                                        <info.icon className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">{info.title}</h4>
                                        {info.link ? (
                                            <a href={info.link} className="text-gray-300 hover:text-accent transition-colors duration-200">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-300">{info.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-lg"
                    >
                        <h3 className="text-2xl font-bold text-black mb-6">Send Message</h3>

                        {submitStatus === "success" && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
                            >
                                Thank you! Your message has been sent successfully.
                            </motion.div>
                        )}
                        {submitStatus === "error" && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6"
                            >
                                Oops! Something went wrong. Please try again.
                            </motion.div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 text-black"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 text-black"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 text-black"
                                    placeholder="Project Discussion"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 resize-vertical text-black"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
