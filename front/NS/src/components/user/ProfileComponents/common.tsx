import { motion } from 'framer-motion';
import { Save } from 'lucide-react';
import React from 'react';

type LoadingButtonProps = {
    isLoading: boolean;
    text: string;
    loadingText?: string;
    icon?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
};

export const LoadingButton: React.FC<LoadingButtonProps> = ({
    isLoading,
    text,
    loadingText = 'Updating...',
    icon = <Save size={16} className="mr-2" />,
    type = 'submit',
    onClick
}) => {
    return (
        <motion.button
            type={type}
            className="flex items-center justify-center px-6 py-2 bg-[#A68A64] text-white rounded-lg hover:bg-[#8a7353] transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading}
            onClick={onClick}
        >
            {isLoading ? (
                <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {loadingText}
                </span>
            ) : (
                <span className="flex items-center">
                    {icon}
                    {text}
                </span>
            )}
        </motion.button>
    );
};

type SectionHeaderProps = {
    title: string;
    description: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-[#A68A64] mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
        </div>
    );
};

export const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
};