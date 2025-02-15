import React from "react";
import { useParams, Link } from "react-router-dom";
import { useProducts } from "./ProductContext";
import { Phone, MessageCircle } from "lucide-react"; // Import icons
import { useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product id from the URL
  const { products } = useProducts(); // Access products from context
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the product based on the id from the URL
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center pt-24">
        <h1 className="text-2xl font-semibold text-red-600">No Product Found</h1>
        <Link
          to="/products"
          className="text-[#1842B6] hover:text-[#0f3196] inline-block mt-4"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-24 px-6">
      {/* Back to Products Button */}
      <Link
        to="/products"
        className="inline-block text-[#1842B6] hover:text-white border-2 border-[#1842B6] rounded-full px-4 py-1 
        hover:bg-[#1842B6] transition-all duration-300"
      >
        Back to Products
      </Link>

      {/* Product Display Section */}
      <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row items-start justify-between mt-8 gap-6">
        {/* Image Div */}
        <div className="w-full md:w-1/3 h-64 mt-8 ">
          <img
            src={product.img}
            alt={product.name}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text and Buttons Div */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-semibold text-[#1842B6] mt-4">
            {product.name}
          </h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-gray-700 mt-4">{product.detailedDescription}</p>

          {/* Call and WhatsApp Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="tel:9158866113">
              <button className="flex items-center gap-2 px-6 py-3 bg-[#1842B6] text-white rounded-full hover:bg-blue-700 transition-all duration-300">
                <Phone size={20} /> Call Now
              </button>
            </a>

            <a href="https://wa.me/9371002117">
              <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-green-600 transition-all duration-300">
                <MessageCircle size={20} /> Chat on WhatsApp
              </button>
            </a>
          </div>

          {/* Features Section */}
          {product.features && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-[#1842B6]">Key Features & Benefits:</h3>
              <ul className="list-disc list-inside mt-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-700 mt-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Types Section */}
          {product.types && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-[#1842B6]">Types & Applications:</h3>
              <ul className="list-disc list-inside mt-2">
                {product.types.map((type, index) => (
                  <li key={index} className="text-gray-700 mt-2">
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;