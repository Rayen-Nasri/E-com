import React, { useState } from 'react';
import { useCartStore } from '../global/cartStore';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import NavBar from '../components/landing/home/navBar';
import { motion } from 'framer-motion';
import { z } from 'zod';

// Define validation schema with Zod
const checkoutSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  zipCode: z.string().min(4, "Zip code must be at least 4 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
  cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
  cardName: z.string().min(2, "Name on card must be at least 2 characters"),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry date must be in MM/YY format"),
  cvv: z.string().regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits")
});

const CheckoutPage: React.FC = () => {
  const { items, getTotal, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [shippingCost] = useState(10.00);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = getTotal();
  const total = subtotal + shippingCost;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateField = (name: string, value: string) => {
    try {
      const fieldSchema = z.object({ [name]: checkoutSchema.shape[name as keyof typeof checkoutSchema.shape] });
      fieldSchema.parse({ [name]: value });
      return '';
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.errors[0].message;
      }
      return 'Invalid input';
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const errorMessage = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: errorMessage }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate all form data
      checkoutSchema.parse(formData);

      // If validation passes, proceed with order
      toast.success('Order placed successfully!', {
        icon: '🎉',
        style: {
          background: '#F5EDDD',
          color: '#8a7353',
          border: '1px solid #A68A64',
        },
      });
      clearCart();
      navigate('/order-confirmation');
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          const path = err.path[0] as string;
          newErrors[path] = err.message;
        });
        setErrors(newErrors);

        toast.error('Please check the form for errors', {
          style: {
            background: '#FFF1F0',
            color: '#CF1322',
            border: '1px solid #FFCCC7',
          },
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#F5EDDD]">
        <NavBar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-16 text-center"
        >
          <h1 className="text-3xl font-serif font-semibold mb-4 text-[#5D4037]">Your cart is empty</h1>
          <p className="mb-6 text-[#8D6E63]">Add some products to your cart before checking out.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/products')}
            className="bg-[#A68A64] text-white px-8 py-3 rounded-md hover:bg-[#8a7353] transition-all duration-300 shadow-md"
          >
            Browse Products
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="min-h-screen ">


        <div className="container mx-auto px-4 py-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-serif font-bold mb-8 text-center text-[#A68A64]"
          >
            Complete Your Order
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-white/30 p-8 rounded-lg shadow-lg border border-[#E6D7C3]">
                <h2 className="text-2xl font-serif font-semibold mb-6 text-[#A68A64] border-b border-[#E6D7C3] pb-3">Shipping Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#5D4037]">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full p-3 border ${errors.firstName ? 'border-red-500' : 'border-[#E6D7C3]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#A68A64] transition-all duration-200`}
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#5D4037]">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full p-3 border ${errors.lastName ? 'border-red-500' : 'border-[#E6D7C3]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#A68A64] transition-all duration-200`}
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#5D4037]">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-[#E6D7C3]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#A68A64] transition-all duration-200`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#5D4037]">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full p-3 border ${errors.address ? 'border-red-500' : 'border-[#E6D7C3]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#A68A64] transition-all duration-200`}
                    />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#5D4037]">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full p-3 border ${errors.city ? 'border-red-500' : 'border-[#E6D7C3]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#A68A64] transition-all duration-200`}
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#5D4037]">Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full p-3 border ${errors.zipCode ? 'border-red-500' : 'border-[#E6D7C3]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#A68A64] transition-all duration-200`}
                    />
                    {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#5D4037]">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full p-3 border ${errors.country ? 'border-red-500' : 'border-[#E6D7C3]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#A68A64] transition-all duration-200`}
                    />
                    {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                  </div>
                </div>

                <h2 className="text-2xl font-serif font-semibold mb-6 text-[#A68A64] border-b border-[#E6D7C3] pb-3">Payment Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2 text-[#5D4037]">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      placeholder="XXXX XXXX XXXX XXXX"
                      className={`w-full p-3 border ${errors.cardNumber ? 'border-red-500' : 'border-[#E6D7C3]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#A68A64] transition-all duration-200`}
                    />
                    {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#5D4037]">Name on Card</label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full p-3 border ${errors.cardName ? 'border-red-500' : 'border-[#E6D7C3]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#A68A64] transition-all duration-200`}
                    />
                    {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#5D4037]">Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        placeholder="MM/YY"
                        className={`w-full p-3 border ${errors.expiryDate ? 'border-red-500' : 'border-[#E6D7C3]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#A68A64] transition-all duration-200`}
                      />
                      {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#5D4037]">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        placeholder="XXX"
                        className={`w-full p-3 border ${errors.cvv ? 'border-red-500' : 'border-[#E6D7C3]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#A68A64] transition-all duration-200`}
                      />
                      {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#A68A64] text-white py-4 rounded-md font-medium hover:bg-[#8a7353] transition-all duration-300 shadow-md relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span>Complete Purchase</span>
                  )}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white/30 p-6 rounded-lg shadow-lg border border-[#E6D7C3] sticky top-6">
                <h2 className="text-2xl font-serif font-semibold mb-6 text-[#A68A64] border-b border-[#E6D7C3] pb-3">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {items.map((item, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      key={item.id}
                      className="flex justify-between items-center py-2 border-b border-[#F0E6D6] last:border-b-0"
                    >
                      <div>
                        <div className="font-medium text-[#5D4037]">{item.name}</div>
                        <div className="text-sm text-[#8D6E63]">Qty: {item.quantity}</div>
                      </div>
                      <div className="font-medium text-[#5D4037]">${(item.price * item.quantity).toFixed(2)}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-[#E6D7C3] pt-4">
                  <div className="flex justify-between mb-2 text-[#5D4037]">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2 text-[#5D4037]">
                    <span>Shipping</span>
                    <span>${shippingCost.toFixed(2)}</span>
                  </div>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t border-[#E6D7C3] text-[#5D4037]"
                  >
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </motion.div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6D7C3]">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#F0E6D6] p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8D6E63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#8D6E63]">Secure checkout</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#F0E6D6] p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8D6E63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#8D6E63]">We accept all major credit cards</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>

  );
};

export default CheckoutPage;