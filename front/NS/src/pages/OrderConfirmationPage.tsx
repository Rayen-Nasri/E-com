import React from 'react';
import { NavBarSee } from '../components/seeMore/navBar.See';
import { useNavigate } from 'react-router';
import { CheckCircle } from 'lucide-react';

const OrderConfirmationPage: React.FC = () => {
  const navigate = useNavigate();
  const orderNumber = Math.floor(100000 + Math.random() * 900000); // Generate random order number
  
  return (
    <div className="min-h-screen bg-[#F5EDDD]">
      <NavBarSee />
      
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
          <div className="flex justify-center mb-4">
            <CheckCircle size={64} className="text-green-500" />
          </div>
          
          <h1 className="text-2xl font-semibold mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">Thank you for your purchase</p>
          
          <div className="bg-gray-50 p-4 rounded mb-6">
            <p className="text-sm text-gray-500">Order Number</p>
            <p className="font-semibold"># {orderNumber}</p>
          </div>
          
          <p className="text-sm text-gray-600 mb-6">
            We've sent a confirmation email with your order details and tracking information.
          </p>
          
          <button 
            onClick={() => navigate('/products')}
            className="w-full bg-[#A68A64] text-white py-3 rounded font-medium hover:bg-[#8a7353] transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;