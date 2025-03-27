import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { LoadingButton, SectionHeader, contentVariants } from './common';

const API_URL = import.meta.env.VITE_API_URL;

type PersonalInfoProps = {
    user: any;
};

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ user }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);

    // Personal Info State
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState("")

    // Password Change State
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        if (user) {
            setName(user.name || '');
            setEmail(user.email || '');
            setTel(user.tel || '')
        }
    }, [user]);

    const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response1 = await axios.post(`${API_URL}/profile/reset_userName`, {
                email: user.email,
                newUserName: name
            });

            if (response1.data.success) {
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to update profile');
        } finally {
            setIsLoading(false);
        }

        try {
            if (isNaN(parseFloat(tel))) {
                toast.error('tel is not a number')
            } else {
                await axios.post(`${API_URL}/profile/resetTel`, { email: user.email, tel })
                toast.success('Profile updated successfully');
            }

        } catch (error: any) {
            toast.error(error.response2?.data?.message || 'Failed to change Tel');

        } finally {
            setIsLoading(false)
        }
    };

    //* Hndel Tel Change




    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            toast.error('New passwords do not match');
            return;
        }

        setIsLoading2(true);

        try {
            const response = await axios.post(`${API_URL}/profile/reset_userPassword`, {
                email: user.email,
                currentPassword,
                newPassword
            });

            if (response.data.success) {
                toast.success('Password changed successfully');
                setCurrentPassword('');
                setNewPassword('');
                setConfirmPassword('');
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to change password');
        } finally {
            setIsLoading2(false);
        }
    };

    return (
        <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
        >
            <SectionHeader
                title="Personal Information"
                description="Update your personal details and manage your account"
            />

            <form onSubmit={handleUpdateProfile} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#5D4037] mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-[#E6D7C3] rounded-lg focus:ring-[#A68A64] focus:border-[#A68A64] outline-none transition"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#5D4037] mb-1">Phone Number</label>
                    <input
                        type="string"
                        id="tel"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        className="w-full px-4 py-2 border border-[#E6D7C3] rounded-lg focus:ring-[#A68A64] focus:border-[#A68A64] outline-none transition"
                        required
                        minLength={8}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#5D4037] mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        disabled
                        className="w-full px-4 py-2 border border-[#E6D7C3] rounded-lg bg-gray-100 text-gray-600"
                        placeholder='Test'
                    />
                    <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                </div>



                <div className="pt-2">
                    <LoadingButton
                        isLoading={isLoading}
                        text="Save Changes"
                        loadingText="Updating..."
                    />
                </div>
            </form>

            <div className="border-t border-[#E6D7C3] pt-6 mt-6">
                <h3 className="text-lg font-semibold text-[#A68A64] mb-4">Change Password</h3>

                <form onSubmit={handleChangePassword} className="space-y-4">
                    <div className="relative">
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-[#5D4037] mb-1">Current Password</label>
                        <div className="relative">
                            <input
                                type={showCurrentPassword ? "text" : "password"}
                                id="currentPassword"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-[#E6D7C3] rounded-lg focus:ring-[#A68A64] focus:border-[#A68A64] outline-none transition pr-10"
                                required
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            >
                                {showCurrentPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>


                    <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-[#5D4037] mb-1">New Password</label>
                        <div className="relative">
                            <input
                                type={showNewPassword ? "text" : "password"}
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-[#E6D7C3] rounded-lg focus:ring-[#A68A64] focus:border-[#A68A64] outline-none transition pr-10"
                                required
                                minLength={6}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5D4037] hover:text-gray-700"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                            >
                                {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#5D4037] mb-1">Confirm New Password</label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-[#E6D7C3] rounded-lg focus:ring-[#A68A64] focus:border-[#A68A64] outline-none transition pr-10"
                                required
                                minLength={6}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>



                    <div className="pt-2">
                        <LoadingButton
                            isLoading={isLoading2}
                            text="Change Password"
                            loadingText="Updating..."
                        />
                    </div>
                </form>
            </div>
        </motion.div>
    );
};