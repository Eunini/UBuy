import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  TruckIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon,
  StarIcon,
  ArrowRightIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

// FadeInUp Animation Component
const FadeInUp = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transform transition-all duration-1000 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <FadeInUp delay={delay}>
    <div className="text-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </FadeInUp>
);

// Product Showcase Component
const ProductShowcase = ({ delay }) => (
  <FadeInUp delay={delay}>
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-light text-gray-900 mb-2">iPhone Collection</h3>
          <p className="text-gray-600">Discover the latest models</p>
        </div>
        <DevicePhoneMobileIcon className="w-12 h-12 text-gray-300 group-hover:text-blue-500 transition-colors duration-300" />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
          <span className="text-gray-400 text-sm">iPhone 14</span>
        </div>
        <div className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
          <span className="text-gray-400 text-sm">iPhone 14 Pro</span>
        </div>
      </div>
      
      <Link 
        to="/products" 
        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-all duration-300"
      >
        Explore Collection
        <ArrowRightIcon className="w-4 h-4 ml-2" />
      </Link>
    </div>
  </FadeInUp>
);

const Home = () => {
  const features = [
    {
      icon: TruckIcon,
      title: "Free Delivery",
      description: "Fast and reliable shipping on all orders over $99"
    },
    {
      icon: ShieldCheckIcon,
      title: "Secure Payment",
      description: "Your payment information is protected with industry-leading security"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Best Price",
      description: "Competitive pricing with price match guarantee"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Phone Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('/assets/images/phonelogo.jpg')`,
            filter: 'blur(1px)'
          }}
        />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeInUp>
              <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
                Think different.
                <br />
                <span className="text-blue-600">Buy different.</span>
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Discover the latest iPhone models with cutting-edge technology, 
                elegant design, and unmatched performance.
              </p>
            </FadeInUp>
            
            <FadeInUp delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/products"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Shop iPhone
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 rounded-full hover:border-gray-400 transition-all duration-300 font-medium hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">
                Why choose UBuy?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience premium service with every purchase
              </p>
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={600 + (index * 200)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeInUp delay={200}>
                <h2 className="text-4xl font-light text-gray-900 mb-6">
                  The perfect iPhone
                  <br />
                  for everyone.
                </h2>
              </FadeInUp>
              
              <FadeInUp delay={400}>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  From the compact iPhone mini to the powerful iPhone Pro Max, 
                  find the perfect device that fits your lifestyle and needs.
                </p>
              </FadeInUp>
              
              <FadeInUp delay={600}>
                <div className="flex items-center space-x-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-3 text-gray-600">4.9/5 Customer Rating</span>
                </div>
              </FadeInUp>
            </div>
            
            <div>
              <ProductShowcase delay={800} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
