import { motion } from 'framer-motion';
import { User, CreditCard, Settings, ChevronRight, LogOut } from 'lucide-react';
import React from 'react';

type SidebarProps = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    handleLogout: () => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, handleLogout }) => {
    const tabVariants = {
        active: { backgroundColor: '#A68A64', color: 'white' },
        inactive: { backgroundColor: 'transparent', color: '#A68A64' }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-64 bg-white/30 shadow-sm rounded-lg p-4 h-fit border border-[#E6D7C3]"
        >
            <div className="flex flex-col space-y-2">
                <motion.button
                    variants={tabVariants}
                    animate={activeTab === 'personal' ? 'active' : 'inactive'}
                    onClick={() => setActiveTab('personal')}
                    className="flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:bg-[#A68A64]/10"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="flex items-center">
                        <User size={18} className="mr-2" />
                        <span>Personal Info</span>
                    </div>
                    <ChevronRight size={16} />
                </motion.button>
                
                <motion.button
                    variants={tabVariants}
                    animate={activeTab === 'billing' ? 'active' : 'inactive'}
                    onClick={() => setActiveTab('billing')}
                    className="flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:bg-[#A68A64]/10"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="flex items-center">
                        <CreditCard size={18} className="mr-2" />
                        <span>Billing</span>
                    </div>
                    <ChevronRight size={16} />
                </motion.button>
                
                <motion.button
                    variants={tabVariants}
                    animate={activeTab === 'settings' ? 'active' : 'inactive'}
                    onClick={() => setActiveTab('settings')}
                    className="flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:bg-[#A68A64]/10"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="flex items-center">
                        <Settings size={18} className="mr-2" />
                        <span>Settings</span>
                    </div>
                    <ChevronRight size={16} />
                </motion.button>
                
                <div className="border-t border-[#A68A64]/20 my-2 pt-2">
                    <motion.button
                        onClick={handleLogout}
                        className="flex items-center w-full p-3 rounded-lg text-red-500 transition-all duration-200 hover:bg-red-50"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <LogOut size={18} className="mr-2" />
                        <span>Logout</span>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};