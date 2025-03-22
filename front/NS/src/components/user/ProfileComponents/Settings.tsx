import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import { SectionHeader, contentVariants } from './common';

type SettingsProps = {};

export const Settings: React.FC<SettingsProps> = () => {
    // Settings State
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <motion.div 
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
        >
            <SectionHeader 
                title="Account Settings" 
                description="Manage your preferences and account settings"
            />
            
            <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-[#E6D7C3] rounded-lg">
                    <div>
                        <h3 className="font-medium text-[#5D4037]">Email Notifications</h3>
                        <p className="text-sm text-gray-600">Receive email notifications about orders and promotions</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={emailNotifications}
                            onChange={() => setEmailNotifications(!emailNotifications)}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#A68A64]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#A68A64]"></div>
                    </label>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-[#E6D7C3] rounded-lg">
                    <div>
                        <h3 className="font-medium text-[#5D4037]">Dark Mode</h3>
                        <p className="text-sm text-gray-600">Switch between light and dark theme (Coming soon)</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                            disabled
                        />
                        <div className="w-11 h-6 border border-[#E6D7C3] opacity-50 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#A68A64]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#A68A64]"></div>
                    </label>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-[#E6D7C3] rounded-lg">
                    <div>
                        <h3 className="font-medium text-[#5D4037]">Account Privacy</h3>
                        <p className="text-sm text-gray-600">Manage your account privacy settings</p>
                    </div>
                    <motion.button
                        className="px-3 py-1 text-sm border border-[#A68A64] text-[#A68A64] rounded-lg hover:bg-[#A68A64]/10 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Manage
                    </motion.button>
                </div>
                
                <div className="pt-4">
                    <h3 className="text-lg font-semibold text-[#A68A64] mb-4">Account Actions</h3>
                    <div className="space-y-3">
                        <motion.button
                            className="w-full flex items-center justify-between p-3 border border-[#E6D7C3] rounded-lg hover:bg-gray-50 transition-colors"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                        >
                            <span className="text-[#5D4037]">Download Your Data</span>
                            <ChevronRight size={16} className="text-gray-500" />
                        </motion.button>
                        
                        <motion.button
                            className="w-full flex items-center justify-between p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                        >
                            <span className="text-red-500">Delete Account</span>
                            <ChevronRight size={16} className="text-red-500" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};