import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#82CFFF] to-[#5AB8F5] rounded-xl rotate-45"></div>
              <span className="text-2xl font-bold">Sahara Collections</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Elevate your style with our curated collection of premium clothing for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#82CFFF] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#82CFFF] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#82CFFF] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-[#82CFFF]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#82CFFF] transition-colors flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#82CFFF] rounded-full"></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-[#82CFFF] transition-colors flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#82CFFF] rounded-full"></span>
                  <span>All Products</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=New" className="text-gray-400 hover:text-[#82CFFF] transition-colors flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#82CFFF] rounded-full"></span>
                  <span>New Arrivals</span>
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-[#82CFFF] transition-colors flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#82CFFF] rounded-full"></span>
                  <span>Shopping Cart</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-[#82CFFF]">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products?category=Men" className="text-gray-400 hover:text-[#82CFFF] transition-colors flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#82CFFF] rounded-full"></span>
                  <span>Men's Collection</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=Women" className="text-gray-400 hover:text-[#82CFFF] transition-colors flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#82CFFF] rounded-full"></span>
                  <span>Women's Collection</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=Kids" className="text-gray-400 hover:text-[#82CFFF] transition-colors flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#82CFFF] rounded-full"></span>
                  <span>Kids' Collection</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-[#82CFFF]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#82CFFF] mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Fashion Avenue, Style City, SC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#82CFFF] flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#82CFFF] flex-shrink-0" />
                <span className="text-gray-400">hello@saharacollections.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Sahara Collections. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#82CFFF] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#82CFFF] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#82CFFF] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
