import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center animate-in fade-in zoom-in duration-700">
          <div className="w-32 h-32 bg-[#82CFFF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-16 h-16 text-[#82CFFF]" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Start adding items to your cart</p>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-[#82CFFF] text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 animate-in fade-in slide-in-from-bottom duration-700">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Shopping Cart</h1>
          <p className="text-xl text-gray-600">{cart.length} items in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={`${item.id}-${item.selectedSize}`}
                  className="bg-white rounded-3xl shadow-lg p-6 animate-in fade-in slide-in-from-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Link
                      to={`/product/${item.id}`}
                      className="w-full sm:w-32 h-32 flex-shrink-0 bg-gray-100 rounded-2xl overflow-hidden group"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </Link>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <Link
                              to={`/product/${item.id}`}
                              className="text-xl font-bold text-gray-900 hover:text-[#82CFFF] transition-colors"
                            >
                              {item.name}
                            </Link>
                            <p className="text-sm text-gray-600 mt-1">
                              Size: <span className="font-semibold">{item.selectedSize}</span>
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id, item.selectedSize)}
                            className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors group"
                          >
                            <Trash2 className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                          </button>
                        </div>

                        <p className="text-2xl font-bold text-[#82CFFF] mb-4">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3 bg-gray-100 rounded-2xl p-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.selectedSize, item.quantity - 1)
                            }
                            className="w-10 h-10 bg-white rounded-xl flex items-center justify-center hover:bg-[#82CFFF] hover:text-white transition-colors shadow-sm"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-lg font-bold text-gray-900 w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.selectedSize, item.quantity + 1)
                            }
                            className="w-10 h-10 bg-white rounded-xl flex items-center justify-center hover:bg-[#82CFFF] hover:text-white transition-colors shadow-sm"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-sm text-gray-600">
                          ${item.price.toFixed(2)} each
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={clearCart}
              className="mt-6 text-red-500 hover:text-red-600 font-semibold flex items-center space-x-2 hover:underline"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear Cart</span>
            </button>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sticky top-24 animate-in fade-in slide-in-from-right duration-700">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span className="font-semibold">${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t-2 border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-900">
                    <span>Total</span>
                    <span className="text-[#82CFFF]">
                      ${(getCartTotal() * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#82CFFF] text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 mb-4">
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="block text-center text-gray-600 hover:text-[#82CFFF] transition-colors font-medium"
              >
                Continue Shopping
              </Link>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Order Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-[#82CFFF] rounded-full"></div>
                    <span>Free shipping on all orders</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-[#82CFFF] rounded-full"></div>
                    <span>30-day return policy</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-[#82CFFF] rounded-full"></div>
                    <span>Secure payment processing</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-[#82CFFF] rounded-full"></div>
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
