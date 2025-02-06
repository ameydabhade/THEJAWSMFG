import React from "react";
import { useParams, Link } from "react-router-dom";
import { useProducts } from "./ProductContext";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product id from the URL
  const { products } = useProducts(); // Access products from context

  // Find the product based on the id from the URL
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div>
        <h1>No Product Found</h1>
        <Link to="/" className="text-[#1842B6] hover:text-[#0f3196]">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mt-12"> {/* Added margin-top to push down content */}
        <Link to="/" className="mt-6 inline-block text-[#1842B6] hover:text-[#0f3196] m-10 border-2 border-[#1842B6] rounded-full px-4 py-2 hover:bg-[#1842B6] hover:text-white transition-all duration-300">
          Back to Products
        </Link>
        <div className="max-w-6xl mx-auto p-4 flex items-center justify-between mt-8">
          <img
            src={product.img}
            alt={product.name}
            className="w-1/3 h-64 object-cover rounded-lg"
          />
          <div className="w-2/3 ml-6">
            <h2 className="text-3xl font-semibold text-[#1842B6] mt-4">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-gray-700 mt-4">{product.detailedDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
