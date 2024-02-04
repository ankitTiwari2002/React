import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <div className="container mx-auto px-6 py-12 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center">Contact Us</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-gray-700">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Your Message" className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2"></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button type="submit" className="bg-indigo-500 text-white px-6 py-3 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 shadow-md">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-center items-center">
          <p className="text-sm mr-4">Connect with me:</p>
          <div className="flex space-x-4">
            <Link to="https://www.linkedin.com/in/ankit-tiwari-3bb5b6249/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100">
              <LinkedInIcon sx={{ fontSize: 32 }} />
            </Link>
            <Link to="https://github.com/Github15102002" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100">
              <GitHubIcon sx={{ fontSize: 32 }} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;




