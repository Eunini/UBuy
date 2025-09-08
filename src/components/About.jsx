import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-4">
            At UBuy, we're passionate about connecting people with the perfect phone to match their unique lifestyle. Our mission is to provide a seamless and enjoyable shopping experience, offering a wide range of high-quality phones from top brands at competitive prices. UBuy was founded by a team of tech enthusiasts who were frustrated with the traditional phone buying experience. We believed that buying a phone should be easy, convenient, and hassle-free. With years of experience in the industry, we set out to create a platform that would revolutionize the way people buy phones.
          </p>
          <NavLink to="/contact" className="btn btn-primary">
            Contact Us
          </NavLink>
        </div>
        <div>
          <img src="/assets/images/about.png" alt="About Us" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default About;