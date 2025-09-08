import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import DATA from '../Data';

const ProductCard = ({ product, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    setIsAdding(true);
    
    // Add item to cart
    dispatch(addItem(product));
    
    // Show feedback animation
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div
      className={`group bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Product Image Container */}
      <div className="relative bg-gray-50 rounded-t-3xl p-8 lg:p-12 group-hover:bg-gray-100 transition-colors duration-500">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-64 lg:h-80 object-contain group-hover:scale-105 transition-transform duration-700"
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className="p-6 lg:p-8">
        <div className="text-center">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2">
            {product.title}
          </h3>
          
          <p className="text-lg text-gray-600 mb-6">
            ${product.price}
          </p>

          <div className="flex flex-col gap-3">
            <Link
              to={`/products/${product.id}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              Learn more
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
            
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`px-6 py-3 font-medium transition-all duration-300 rounded-full ${
                isAdding
                  ? 'bg-green-600 text-white'
                  : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              {isAdding ? 'Added to Cart!' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  // Filter to show only first 6 products for homepage
  const products = DATA.slice(0, 6);

  return (
    <div className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Apple-style Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Our Products
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Discover the latest iPhone models with cutting-edge technology
          </p>
        </div>

        {/* Apple-style Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;