import React from 'react';
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919884039184?text=Hello! I would like to know more about your products.', '_blank');
  };

  const handleFacebook = () => {
    window.open('https://facebook.com/shrinidhipathiyapodi', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/shrinidhipathiyapodi', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="Shrinidhi Pathiya Podi"
                className="h-10 w-10 mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">Shrinidhi Pathiya Podi</h3>
                <p className="text-orange-400 text-sm">Hand prepared, specially for your health</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Authentic, hand-prepared Brahmin-style food powders and nutritional mixes made with love, tradition, and care in Chennai.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleFacebook}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={handleInstagram}
                className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-orange-400" />
                <span className="text-gray-300">+91 98840 39184</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-orange-400" />
                <span className="text-gray-300 text-sm">info@shrinidhipathiyapodi.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-orange-400" />
                <span className="text-gray-300">Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Shrinidhi Pathiya Podi. All rights reserved. | Made with ❤️ in Chennai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;