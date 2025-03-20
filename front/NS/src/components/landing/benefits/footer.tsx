import { memo, useState, useEffect } from "react";
import { Link } from "react-router"; 
import { Dinn, Facbook, Insta, Twit } from "../../../assets/assets";
import { motion } from "framer-motion";

const AboutContent = [
    { text: "About", url: "" },
    { text: "Help Center", url: "" },
    { text: "Privacy", url: "" },
    { text: "Accessibility", url: "" },
    { text: "Terms", url: "" },
    { text: "Copyright", url: "" },
];

const ServiceLinks = [
    { text: "Furniture", url: "" },
    { text: "Decoration", url: "" },
    { text: "Lighting", url: "" },
    { text: "Accessories", url: "" },
];

const ContactInfo = [
    { text: "info@noblenurturing.com", url: "mailto:info@noblenurturing.com" },
    { text: "+1 (800) 123-4567", url: "tel:+18001234567" },
    { text: "123 Elegant Street, Design District", url: "" },
];

export const Footer = memo(() => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const docHeight = document.body.offsetHeight;
            
            if (position > docHeight - windowHeight - 300) {
                setIsVisible(true);
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 3000);
            setEmail("");
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const socialVariants = {
        hover: { 
            scale: 1.15, 
            rotate: 3,
            transition: { type: "spring", stiffness: 400 }
        }
    };

    const linkVariants = {
        hover: { 
            x: 8, 
            transition: { type: "spring", stiffness: 300, damping: 10 }
        }
    };

    return (
        <motion.footer 
            className="bg-gradient-to-r from-[#F5EDDD] to-[#E8DBC9] pt-16 pb-8 overflow-hidden"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                    variants={containerVariants}
                >
                    {/* Brand Column */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <motion.h3 
                            className="text-3xl font-serif text-[#876D49]"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Noble Nurturing
                        </motion.h3>
                        <motion.p 
                            className="text-[#876D49] text-sm leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            Elevating your living spaces with timeless elegance and sophisticated design. Our commitment to quality craftsmanship brings classic luxury to modern homes.
                        </motion.p>
                        <motion.div 
                            className="flex space-x-5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            {[
                                { 
                                    icon: <Twit />, 
                                    url: "",
                                    hoverColor: "#1DA1F2",
                                    label: "Twitter"
                                },
                                { 
                                    icon: <Dinn />, 
                                    url: "",
                                    hoverColor: "#0077B5",
                                    label: "LinkedIn"
                                },
                                { 
                                    icon: <Insta />, 
                                    url: "",
                                    hoverColor: "#E1306C",
                                    label: "Instagram"
                                },
                                { 
                                    icon: <Facbook />, 
                                    url: "",
                                    hoverColor: "#4267B2",
                                    label: "Facebook"
                                }
                            ].map((social, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover="hover"
                                    variants={socialVariants}
                                    className="relative group"
                                    aria-label={social.label}
                                >
                                    <div className="absolute inset-0 bg-[#876D49] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                                    <Link 
                                        to={social.url} 
                                        className="flex items-center justify-center w-10 h-10 text-[#876D49] group-hover:text-[#5D4B33] transition-colors duration-300 relative z-10"
                                    >
                                        {social.icon}
                                    </Link>
                                    <motion.div 
                                        className="absolute -inset-0.5 bg-gradient-to-tr from-[#876D49] to-[#5D4B33] rounded-full opacity-0 group-hover:opacity-20 blur-sm"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 0.2 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h4 className="text-xl font-medium text-[#876D49]">About</h4>
                        <ul className="space-y-3">
                            {AboutContent.map((item, index) => (
                                <motion.li 
                                    key={index}
                                    whileHover="hover"
                                    variants={linkVariants}
                                >
                                    <Link 
                                        to={item.url} 
                                        className="text-[#876D49] hover:text-[#5D4B33] transition-colors duration-300 flex items-center group"
                                    >
                                        <motion.span 
                                            className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            initial={{ x: -5, opacity: 0 }}
                                            whileHover={{ x: 0, opacity: 1 }}
                                        >
                                            ›
                                        </motion.span>
                                        {item.text}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h4 className="text-xl font-medium text-[#876D49]">Services</h4>
                        <ul className="space-y-3">
                            {ServiceLinks.map((item, index) => (
                                <motion.li 
                                    key={index}
                                    whileHover="hover"
                                    variants={linkVariants}
                                >
                                    <Link 
                                        to={item.url} 
                                        className="text-[#876D49] hover:text-[#5D4B33] transition-colors duration-300 flex items-center group"
                                    >
                                        <motion.span 
                                            className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            initial={{ x: -5, opacity: 0 }}
                                            whileHover={{ x: 0, opacity: 1 }}
                                        >
                                            ›
                                        </motion.span>
                                        {item.text}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                        <div className="pt-4">
                            <h4 className="text-xl font-medium text-[#876D49]">Contact</h4>
                            <ul className="space-y-3 mt-3">
                                {ContactInfo.map((item, index) => (
                                    <motion.li 
                                        key={index}
                                        whileHover="hover"
                                        variants={linkVariants}
                                    >
                                        <Link 
                                            to={item.url} 
                                            className="text-[#876D49] hover:text-[#5D4B33] transition-colors duration-300 text-sm flex items-center group"
                                        >
                                            <motion.span 
                                                className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                initial={{ x: -5, opacity: 0 }}
                                                whileHover={{ x: 0, opacity: 1 }}
                                            >
                                                ›
                                            </motion.span>
                                            {item.text}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h4 className="text-xl font-medium text-[#876D49]">Stay Classy</h4>
                        <p className="text-[#876D49] text-sm">
                            Join our newsletter for exclusive offers, design tips, and new collection announcements.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="relative overflow-hidden rounded-lg group">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full border border-[#876D49] border-opacity-30 rounded-lg px-4 py-3 bg-transparent text-[#876D49] placeholder-[#876D49] placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-[#876D49] focus:border-transparent transition-all duration-300"
                                    placeholder="Your email address"
                                    required
                                />
                                <motion.button
                                    type="submit"
                                    className="absolute right-2 top-2 bg-[#876D49] text-white px-4 py-1 rounded-md hover:bg-[#5D4B33] transition-all duration-300"
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: "0 0 8px rgba(135, 109, 73, 0.5)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Join
                                </motion.button>
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#876D49] to-transparent opacity-0 group-hover:opacity-10 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                />
                            </div>
                            {isSubmitted && (
                                <motion.p 
                                    className="text-green-600 text-sm"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    Thank you for subscribing!
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="mt-16 pt-8 border-t border-[#876D49] border-opacity-20"
                    variants={itemVariants}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <motion.p 
                            className="text-[#876D49] text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            © {new Date().getFullYear()} Noble Nurturing. All rights reserved.
                        </motion.p>
                        <motion.div 
                            className="flex space-x-6 mt-4 md:mt-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            {["Privacy Policy", "Terms of Service", "Cookies"].map((text, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link 
                                        to="" 
                                        className="text-[#876D49] text-sm hover:text-[#5D4B33] transition-colors duration-300 relative group"
                                    >
                                        {text}
                                        <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-[#876D49] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
});