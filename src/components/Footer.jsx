import React from 'react';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        
            <footer className="bg-black text-gray-300 py-10 ">
  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 ">
    
  <div>
      <h2 className="text-2xl font-bold text-white mb-3">GameHub</h2>
      <p className="text-sm">
        Your ultimate destination for gaming news, reviews, and updates.
        Stay connected, stay ahead — only on GameHub.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="">Home</a></li>
        <li><a href="">Games</a></li>
        <li><a href="">News</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
      <ul className="space-y-2">
        <li><a href="">Help Center</a></li>
        <li><a href="">Terms of Service</a></li>
        <li><a href="">Privacy Policy</a></li>
        <li><a href="">FAQs</a></li>
      </ul>
    </div>

    
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Social Media Links</h3>
       <ul className="space-y-2">
        <li><a href="">Facebook</a>
        </li>
        <li><a href="">Isnstagram</a></li>
        <li><a href="">X</a></li>
        <li><a href=""></a></li>
      </ul>
    </div>
  </div>

  
  <p className='text-center text-sm mt-5 border-t-1 '>Allright Preserved</p>
  
</footer>

            
        
    );
};

export default Footer;