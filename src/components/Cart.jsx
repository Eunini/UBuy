import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem, addItem, decreaseQty } from '../redux/actions/index';
import { Link } from 'react-router-dom';
import { 
  TrashIcon, 
  PlusIcon, 
  MinusIcon, 
  ShoppingBagIcon,
  ArrowLeftIcon 
} from '@heroicons/react/24/outline';

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();
  const [removingItem, setRemovingItem] = useState(null);

  const handleRemove = async (item) => {
    setRemovingItem(item.id);
    setTimeout(() => {
      dispatch(delItem(item));
      setRemovingItem(null);
    }, 300);
  };

  const handleIncreaseQty = (item) => {
    dispatch(addItem(item));
  };

  const handleDecreaseQty = (item) => {
    if (item.qty > 1) {
      dispatch(decreaseQty(item));
    } else {
      handleRemove(item);
    }
  };

  const calculateTotal = () => {
    return state.reduce((total, item) => total + (item.price * item.qty), 0);
  };

  const CartItem = ({ item }) => (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 ${
        removingItem === item.id ? 'opacity-50 scale-95' : 'hover:shadow-md'
      }`}
    >
      <div className="flex items-center gap-6">
        {/* Product Image */}
        <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
          <p className="text-2xl font-light text-blue-600">${item.price}</p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleDecreaseQty(item)}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
          >
            <MinusIcon className="w-4 h-4 text-gray-600" />
          </button>
          
          <span className="text-lg font-medium text-gray-900 min-w-[2rem] text-center">
            {item.qty}
          </span>
          
          <button
            onClick={() => handleIncreaseQty(item)}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
          >
            <PlusIcon className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Item Total */}
        <div className="text-right min-w-[4rem]">
          <p className="text-lg font-semibold text-gray-900">
            ${(item.price * item.qty).toFixed(2)}
          </p>
        </div>

        {/* Remove Button */}
        <button
          onClick={() => handleRemove(item)}
          disabled={removingItem === item.id}
          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  const EmptyCart = () => (
    <div className="text-center py-16">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <ShoppingBagIcon className="w-12 h-12 text-gray-400" />
      </div>
      <h2 className="text-3xl font-light text-gray-900 mb-4">Your cart is empty</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Looks like you haven't added any items to your cart yet. 
        Start shopping to fill it up!
      </p>
      <Link
        to="/products"
        className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 font-medium hover:scale-105"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Continue Shopping
      </Link>
    </div>
  );

  const CartSummary = () => (
    <div className="bg-gray-50 rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h3>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal ({state.reduce((total, item) => total + item.qty, 0)} items)</span>
          <span className="font-medium">${calculateTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium text-green-600">Free</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">${(calculateTotal() * 0.08).toFixed(2)}</span>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between text-lg">
          <span className="font-semibold text-gray-900">Total</span>
          <span className="font-semibold text-gray-900">
            ${(calculateTotal() * 1.08).toFixed(2)}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <Link
          to="/checkout"
          className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium text-center block"
        >
          Proceed to Checkout
        </Link>
        <Link
          to="/products"
          className="w-full border border-gray-300 text-gray-700 py-4 rounded-xl hover:border-gray-400 transition-all duration-300 font-medium text-center block"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link
              to="/products"
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </Link>
            <h1 className="text-3xl font-light text-gray-900">Shopping Cart</h1>
          </div>
          {state.length > 0 && (
            <p className="text-gray-600">
              {state.reduce((total, item) => total + item.qty, 0)} item{state.reduce((total, item) => total + item.qty, 0) !== 1 ? 's' : ''} in your cart
            </p>
          )}
        </div>

        {state.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {state.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <CartSummary />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;