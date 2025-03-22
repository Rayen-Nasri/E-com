import { useState } from 'react';
import { useAuthStore } from '../../global/authStore';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import NavBar from '../landing/home/navBar';
import { Sidebar } from './ProfileComponents/Sidebar';
import { PersonalInfo } from './ProfileComponents/PersonalInfo';
import { Settings } from './ProfileComponents/Settings';
import { Billing } from './ProfileComponents/Billing';


const ProfilePage = () => {
    const { user, logout }: any = useAuthStore();
    const [activeTab, setActiveTab] = useState('personal');
    console.log(user);
    
    const handleLogout = async () => {
        try {
            await logout();
            toast.success('Logged out successfully');
            window.location.href = '/home';
        } catch (error) {
            toast.error('Failed to logout');
        }
    };

    return (
        <div className="min-h-screen ">
            <NavBar />
            
            <div className="container  mx-auto px-4 py-8 max-w-6xl">
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                >
                    <h1 className="text-3xl font-bold text-[#A68A64]">My Profile</h1>
                    <p className="text-gray-600">Manage your account settings and preferences</p>
                </motion.div>
                
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar */}
                    <Sidebar 
                        activeTab={activeTab} 
                        setActiveTab={setActiveTab} 
                        handleLogout={handleLogout} 
                    />
                    
                    {/* Main Content */}
                    <div className="flex-1 bg-white/30 rounded-lg shadow-sm p-6 border border-[#E6D7C3]">
                        {activeTab === 'personal' && <PersonalInfo user={user} />}
                        {activeTab === 'billing' && <Billing />}
                        {activeTab === 'settings' && <Settings />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;