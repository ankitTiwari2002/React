import React from 'react';
import { Link } from 'react-router-dom';
import image from'../utils/image/ankit.png'
function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center items-center">
            <img src={image} alt="About Us" className="w-72 rounded-full shadow-lg" />
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-6">Welcome to our food ordering app! We are passionate about providing delicious meals and exceptional service to our customers.</p>
            <p className="text-lg text-gray-700 mb-6">Our team consists of talented chefs, dedicated delivery drivers, and friendly customer service representatives who work together to ensure a seamless experience for you.</p>
            <p className="text-lg text-gray-700 mb-6">Whether you're craving comfort food classics or exploring new culinary delights, we have a diverse menu to satisfy your cravings.</p>
            <p className="text-lg text-gray-700 mb-6">We value quality, convenience, and customer satisfaction above all else. Join us on this delicious journey!</p>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link to="/contact" className="bg-indigo-500 text-white px-8 py-3 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 shadow-md">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default About;
