import { motion } from 'framer-motion';
import { Save } from 'lucide-react';
import React, { useState } from 'react';
import { SectionHeader, contentVariants } from './common';

type BillingProps = {};

export const Billing: React.FC<BillingProps> = () => {
    // Billing State
    const [billingAddress, setBillingAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');

    return (
        <motion.div 
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
        >
            <SectionHeader 
                title="Billing Information" 
                description="Manage your billing details and payment methods"
            />
            
            <form className="space-y-4">
                <div>
                    <label htmlFor="billingAddress" className="block text-sm font-medium text-[#5D4037] mb-1">Billing Address</label>
                    <input
                        type="text"
                        id="billingAddress"
                        value={billingAddress}
                        onChange={(e) => setBillingAddress(e.target.value)}
                        className="w-full px-4 py-2 border border-[#E6D7C3] rounded-lg focus:ring-[#A68A64] focus:border-[#A68A64] outline-none transition"
                        placeholder="Enter your billing address"
                    />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-[#5D4037] mb-1">City</label>
                        <input
                            type="text"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full px-4 py-2 border border-[#E6D7C3] rounded-lg focus:ring-[#A68A64] focus:border-[#A68A64] outline-none transition"
                            placeholder="Enter your city"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-[#5D4037] mb-1">Zip Code</label>
                        <input
                            type="text"
                            id="zipCode"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            className="w-full px-4 py-2 border border-[#E6D7C3] rounded-lg focus:ring-[#A68A64] focus:border-[#A68A64] outline-none transition"
                            placeholder="Enter your zip code"
                        />
                    </div>
                </div>
                
                <div>
                    <label htmlFor="country" className="block text-sm font-medium text-[#5D4037] mb-1">Country</label>
                    <select
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-4 py-2 border border-[#E6D7C3] rounded-lg focus:ring-[#A68A64] text-[#5D4037] focus:border-[#A68A64] outline-none transition"
                    >
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="IT">Italy</option>
                        <option value="ES">Spain</option>
                        <option value="JP">Japan</option>
                    </select>
                </div>
                
                <div className="pt-4">
                    <h3 className="text-lg font-semibold text-[#A68A64] mb-4">Payment Methods</h3>
                    <div className="bg-gray-50 p-4 rounded-lg border border-[#E6D7C3]">
                        <p className="text-gray-600 text-center">Payment methods will be available in future updates</p>
                    </div>
                </div>
                
                <div className="pt-2">
                    <motion.button
                        type="submit"
                        className="flex items-center justify-center px-6 py-2 bg-[#A68A64] text-white rounded-lg hover:bg-[#8a7353] transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="flex items-center">
                            <Save size={16} className="mr-2" />
                            Save Billing Information
                        </span>
                    </motion.button>
                </div>
            </form>
        </motion.div>
    );
};