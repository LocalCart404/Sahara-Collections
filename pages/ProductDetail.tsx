import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, ArrowLeft, Truck, Shield, RefreshCw } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link to="/products" className="text-[#82CFFF] hover:underline">
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize);
    }

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-[#82CFFF] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden sticky top-24">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right duration-700">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-[#82CFFF] bg-[#82CFFF]/10 px-4 py-2 rounded-full">
                  {product.category}
                </span>
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#82CFFF] hover:text-white transition-colors">
                  <Heart className="w-6 h-6" />
                </button>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-baseline space-x-4 mb-6">
                <p className="text-5xl font-bold text-[#82CFFF]">${product.price}</p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">{product.description}</p>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Select Size</h3>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 rounded-xl font-semibold transition-all duration-300 ${
                        selectedSize === size
                          ? 'bg-[#82CFFF] text-white shadow-lg scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 bg-gray-100 rounded-xl font-bold hover:bg-[#82CFFF] hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold text-gray-900 w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 bg-gray-100 rounded-xl font-bold hover:bg-[#82CFFF] hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-[#82CFFF] text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 mb-4"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>Add to Cart</span>
              </button>

              {showSuccess && (
                <div className="bg-green-100 border-2 border-green-500 text-green-700 px-6 py-4 rounded-2xl mb-4 animate-in fade-in slide-in-from-top">
                  Item added to cart successfully!
                </div>
              )}

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <Truck className="w-6 h-6 text-[#82CFFF] mx-auto mb-2" />
                  <p className="text-xs text-gray-600 font-medium">Free Shipping</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <Shield className="w-6 h-6 text-[#82CFFF] mx-auto mb-2" />
                  <p className="text-xs text-gray-600 font-medium">Secure Payment</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <RefreshCw className="w-6 h-6 text-[#82CFFF] mx-auto mb-2" />
                  <p className="text-xs text-gray-600 font-medium">Easy Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-80 overflow-hidden bg-gray-100">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#82CFFF] transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-2xl font-bold text-[#82CFFF]">${relatedProduct.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
