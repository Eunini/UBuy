import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBtn = () => {
    const state = useSelector((state) => state.addItem);
    
    return (
        <NavLink 
            to="/cart" 
            className="relative inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 group"
        >
            <svg 
                className="w-5 h-5 mr-2 group-hover:text-blue-600 transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l1.5-6M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" 
                />
            </svg>
            
            <span className="font-medium">Cart</span>
            
            {state.length > 0 && (
                <span className="ml-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full min-w-[1.25rem] h-5 flex items-center justify-center">
                    {state.length}
                </span>
            )}
        </NavLink>
    );
};

export default CartBtn;