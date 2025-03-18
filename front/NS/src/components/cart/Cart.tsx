import React, { useState } from 'react';
import { X, ShoppingBag, Minus, Plus, Trash2, Lock, Truck } from 'lucide-react';
import { useCartStore } from '../../global/cartStore';
import { Link ,useNavigate } from 'react-router';

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotal, toggleCart , isOpen } = useCartStore();
  const [shippingCost] = useState(10.00);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity);
    }
  };

  const subtotal = getTotal();
  const total = subtotal + shippingCost;

  const handleCheckout = () => {
    toggleCart();
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end backdrop-blur-sm bg-black/30 transition-opacity duration-300">
      <div className="h-full w-full max-w-md bg-[#F5EDDD] shadow-xl flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between p-4 bg-[#A68A64] text-white">
          <div className="flex items-center gap-2">
            <ShoppingBag size={22} />
            <h2 className="text-xl font-semibold">Your Cart</h2>
          </div>
          
          <button 
            onClick={toggleCart}
            className="text-white hover:text-gray-200 p-1 rounded-full hover:bg-[#8a7353] transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4 text-sm font-medium text-white/80 bg-[#A68A64]">
          {items.length === 0 ? 'Your cart is empty' : 
            items.length === 1 ? '1 item in your cart' : 
            `${items.length} items in your cart`}
        </div>
        
        
        
        <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-[#A68A64] scrollbar-track-gray-100">
          {items.length === 0 ? (
            <div className="text-center py-12 flex flex-col items-center">
              <ShoppingBag size={64} className="text-gray-300 mb-4" />
              <p className="text-gray-500 mb-2">Your shopping cart is empty</p>
              <button 
                onClick={toggleCart}
                className="mt-4 text-[#A68A64] hover:underline font-medium"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4 text-[#A68A64]">
              {items.map((item) => (
                <div key={item.id} className="flex  rounded-lg p-3 shadow-sm hover:shadow-sm transition-shadow">
                  {item.image ? (
                    <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden mr-4">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center mr-4">
                      <ShoppingBag size={32} className="text-gray-300" />
                    </div>
                  )}
                  <div className="flex-1 text-[#A68A64]">
                    <div className="font-medium  ">{item.name}</div>
                    <div className="text-sm  mb-2">
                      {item.category} {item.subcategory && `• ${item.subcategory}`}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-[#A68A64] rounded-md overflow-hidden ">
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 transition-colors  "
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-3 py-1 font-medium text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="p-5 border-t border-[#A68A64]/60 bg-transparent text-[#A68A64]">
          <div className="space-y-3 mb-4">
            <div className="flex justify-between ">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between =">
              <span>Shipping</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>
            <div className="h-px bg-[#A68A64]/60 my-2"></div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          
          <button 
            onClick={handleCheckout}
            className="w-full bg-[#A68A64] text-white py-3 rounded-lg font-medium hover:bg-[#8a7353] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={items.length === 0}
          >
            Checkout <span className="ml-1">→</span>
          </button>
          
          <div className="text-center mt-4">
            <button 
              onClick={toggleCart} 
              className="text-[#A68A64]/70 hover:text-[#A68A64] hover:underline transition-colors"
            >
              or Continue Shopping
            </button>
          </div>
        </div>
        
        <div className="p-4 flex justify-center space-x-6 text-xs text-[#A68A64]  ">
          <div className="flex items-center">
            <span className="mr-1"><Lock/></span> Secure payment
          </div>
          <div className="flex items-center">
            <span className="mr-1"><Truck/></span> Fast delivery
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;