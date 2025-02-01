import React from "react";

// Sample product data array
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of product 1. This is an awesome product that can help you with X, Y, and Z.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of product 2. It provides solutions for ABC and is highly efficient.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of product 3. A game-changer in the industry with feature 1, 2, and 3.",
    image: "https://via.placeholder.com/300",
  },
];

const Product = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-16 mt-10">
      <h1 className="text-3xl font-bold text-center text-[#1842B6]">Our Products</h1>
      <p className="text-center text-gray-600 mt-4">Explore our wide range of innovative products.</p>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="transform transition-transform duration-300 ease-in-out hover:scale-105 bg-white"
          >
            <div className="border p-4 shadow-lg rounded-lg hover:shadow-2xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-[#1842B6]">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <button className="mt-4 px-4 py-2 bg-[#1842B6] text-white rounded-md hover:bg-[#0f3196] transition duration-200">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
