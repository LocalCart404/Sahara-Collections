import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Header() {
  const { getCartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#82CFFF] to-[#5AB8F5] rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#82CFFF] to-[#5AB8F5] bg-clip-text text-transparent">
              Sahara
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#82CFFF] transition-colors font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-[#82CFFF] transition-colors font-medium">
              Products
            </Link>
            <Link to="/products?category=Men" className="text-gray-700 hover:text-[#82CFFF] transition-colors font-medium">
              Men
            </Link>
            <Link to="/products?category=Women" className="text-gray-700 hover:text-[#82CFFF] transition-colors font-medium">
              Women
            </Link>
            <Link to="/products?category=Kids" className="text-gray-700 hover:text-[#82CFFF] transition-colors font-medium">
              Kids
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Search className="w-5 h-5 text-gray-700" />
            </button>

            <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5 text-gray-700" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#82CFFF] text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {getCartCount()}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-4 animate-in slide-in-from-top">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-6 py-3 rounded-2xl border-2 border-[#82CFFF] focus:outline-none focus:ring-2 focus:ring-[#82CFFF] focus:ring-opacity-50"
            />
          </div>
        )}
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-in slide-in-from-top">
          <nav className="flex flex-col space-y-1 p-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-gray-700 hover:bg-[#82CFFF] hover:text-white rounded-xl transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-gray-700 hover:bg-[#82CFFF] hover:text-white rounded-xl transition-colors"
            >
              Products
            </Link>
            <Link
              to="/products?category=Men"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-gray-700 hover:bg-[#82CFFF] hover:text-white rounded-xl transition-colors"
            >
              Men
            </Link>
            <Link
              to="/products?category=Women"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-gray-700 hover:bg-[#82CFFF] hover:text-white rounded-xl transition-colors"
            >
              Women
            </Link>
            <Link
              to="/products?category=Kids"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-gray-700 hover:bg-[#82CFFF] hover:text-white rounded-xl transition-colors"
            >
              Kids
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
