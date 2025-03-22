import { memo, useState, useEffect } from "react";
import { NsH } from "../../../assets/assets";
import { Link } from "react-router";
import { useAuthStore } from "../../../global/authStore";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ShoppingCart, User, X } from "lucide-react";
import { useCartStore } from "../../../global/cartStore";
import Cart from "../../cart/Cart";
import { useLocation } from "react-router";

const btns = ["Home", "Products", "Features", "Find store"];

const NavBar = memo(() => {
    const { isAuthenticated }: any = useAuthStore();
    const { toggleCart, getItemsCount } = useCartStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const itemCount = getItemsCount();
    const verify = isAuthenticated;
    const location = useLocation();

    // Get current path and set active section based on it
    const currentPath = location.pathname.substring(1) || "home";
    const [activeSection, setActiveSection] = useState(currentPath);

    // Update active section when location changes
    useEffect(() => {
        const path = location.pathname.substring(1).toLowerCase() || "home";

        // Find the matching button or default to home
        const matchingBtn = btns.find(btn => btn.toLowerCase() === path);
        if (matchingBtn) {
            setActiveSection(matchingBtn.toLowerCase());
        } else if (path === "" || path === "/") {
            setActiveSection("home");
        }
    }, [location.pathname]);

    // Handle scroll effect

    const isHomePage = location.pathname === "/home" || location.pathname === "/Home" || location.pathname === "/";

    // Update the navClassName logic
    const navClassName = `flex items-center justify-between px-8 py-5 lg:px-8 relative transition-all duration-300 ${isHomePage ? 'bg-transparent' : 'bg-[#F5EDDD]'}`;
    const menuVariants = {
        closed: { x: "-100%", opacity: 0 },
        open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } }
    };

    return (
        <>
            <nav className={navClassName}>
                <motion.div
                    className="flex items-center "
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link to={"/home"} className="relative group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <NsH />
                        </motion.div>
                    </Link>
                </motion.div>

                <motion.div
                    className="hidden lg:flex items-center space-x-10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    {btns.map((btn, index) => {
                        // Check if this button matches the current path
                        const btnPath = btn.toLowerCase();
                        const isActive = btnPath === activeSection ||
                            (btnPath === "home" && (activeSection === "" || activeSection === "/"));

                        return (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group"
                            >
                                <Link
                                    to={`/${btn}`}
                                    className={`font-medium ${isActive ? 'text-[#A68A64]' : 'text-black'} group-hover:text-[#A68A64] transition-colors duration-300 flex items-center`}
                                    onClick={() => setActiveSection(btnPath)}
                                >
                                    {btn}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#A68A64] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    className="flex items-center space-x-[-10px]  lg:space-x-5"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <motion.button
                        className="lg:hidden text-black p-2 hover:bg-[#A68A64]/10 rounded-full transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Menu size={24} className="text-[#A68A64]" />
                    </motion.button>

                    {verify ? (
                        <>
                            <Link to="/ProfilePage">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="relative cursor-pointer hidden lg:block"
                                >
                                    <User size={20} className="hover:text-[#A68A64] transition-colors" />
                                </motion.div>
                            </Link>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="relative cursor-pointer hidden lg:block"
                                onClick={toggleCart}
                            >
                                <ShoppingCart size={20} className="hover:text-[#A68A64] transition-colors" />
                                <AnimatePresence>
                                    {itemCount > 0 && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                            className="absolute -top-2 -right-2 bg-[#A68A64] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
                                        >
                                            {itemCount}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </>
                    ) : (
                        <div className="hidden lg:flex items-center space-x-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    className="font-semibold py-2 px-8 rounded-[20px] text-center bg-[#A68A64] text-white hover:bg-[#8a7353] transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
                                    to="/authentication/logIn"
                                >
                                    <User size={16} className="mr-2" />
                                    <span>Login</span>
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    className="font-semibold py-2 px-8 border border-[#A68A64] text-[#A68A64] rounded-[20px] text-center bg-transparent hover:bg-[#A68A64]/10 transition-all duration-300 flex items-center"
                                    to="/authentication/register"
                                >
                                    <span>Sign up</span>
                                </Link>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="z-49 fixed top-0 left-0 w-72 h-full bg-[#F9EBD6] backdrop-blur-lg backdrop-filter  lg:hidden overflow-auto"
                        style={{
                            boxShadow: '0 4px 30px rgba(166, 138, 100, 0.1)',
                            border: '1px solid rgba(166, 138, 100, 0.2)'
                        }}
                    >
                        <div className="p-6">
                            <motion.div
                                className="flex justify-between items-center mb-8"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="flex items-center gap-2">
                                    <motion.div
                                        initial={{ rotate: -180 }}
                                        animate={{ rotate: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Menu size={24} className="text-[#A68A64]" />
                                    </motion.div>
                                    <h2 className="text-xl font-semibold text-[#A68A64]">Menu</h2>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 hover:bg-[#A68A64]/10 rounded-full transition-all duration-300"
                                >
                                    <X size={24} className="text-[#A68A64]" />
                                </motion.button>
                            </motion.div>


                            <div className="flex flex-col space-y-6">
                                {verify ? (
                                    <div className="flex flex-col space-y-4 mb-6 p-4 bg-[#A68A64]/10 rounded-lg">
                                        <Link to="/ProfilePage" onClick={() => setIsMenuOpen(false)}>
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="flex items-center space-x-3 text-[#A68A64] p-2 rounded-lg hover:bg-[#A68A64]/20 transition-colors cursor-pointer"
                                            >
                                                <User size={20} />
                                                <span className="font-medium">Profile</span>
                                            </motion.div>
                                        </Link>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex items-center space-x-3 text-[#A68A64] p-2 rounded-lg hover:bg-[#A68A64]/20 transition-colors cursor-pointer"
                                            onClick={toggleCart}
                                        >
                                            <ShoppingCart size={20} />
                                            <span className="font-medium">Cart</span>
                                            {itemCount > 0 && (
                                                <span className="ml-auto bg-[#A68A64] text-white text-xs px-2 py-1 rounded-full">
                                                    {itemCount}
                                                </span>
                                            )}
                                        </motion.div>
                                    </div>
                                ) : (
                                    <div className="space-y-3 mb-6">
                                        <Link
                                            className="flex items-center justify-center font-semibold py-3 px-4 rounded-lg text-center bg-[#A68A64] text-white hover:bg-[#8a7353] transition-colors"
                                            to="/authentication/logIn"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <User size={18} className="mr-2" />
                                            <span>Login</span>
                                        </Link>
                                        <Link
                                            className="flex items-center justify-center font-semibold py-3 px-4 border border-[#A68A64] text-[#A68A64] rounded-lg text-center bg-transparent hover:bg-[#A68A64]/10 transition-colors"
                                            to="/authentication/register"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span>Sign up</span>
                                        </Link>
                                    </div>
                                )}
                                <div className="space-y-2">
                                    {btns.map((btn, index) => {
                                        const btnPath = btn.toLowerCase();
                                        const isActive = btnPath === activeSection ||
                                            (btnPath === "home" && (activeSection === "" || activeSection === "/"));
                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <Link
                                                    to={`/${btn}`}
                                                    className={`group font-medium ${isActive ? 'text-[#8a7353] font-semibold' : 'text-[#A68A64]'} block py-3 px-4 transition-all duration-300 relative overflow-hidden border-b border-[#A68A64]/10 last:border-b-0`}
                                                    onClick={() => {
                                                        setActiveSection(btnPath);
                                                        setIsMenuOpen(false);
                                                    }}
                                                >
                                                    <motion.div
                                                        className="flex items-center gap-2"
                                                        whileHover={{ x: 10, color: "#8a7353" }}
                                                        whileTap={{ scale: 0.95 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <span className="relative">{btn}</span>

                                                    </motion.div>
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        <Cart/>
        </>
    );
});

export default NavBar;