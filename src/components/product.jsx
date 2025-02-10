import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "./ProductContext"; // Import the custom hook to get products from context
import { useEffect } from "react";

const ProductCard = ({ product }) => (
  <div className="transform transition-transform duration-300 ease-in-out hover:scale-105 bg-white shadow-md rounded-lg overflow-hidden hover:cursor-pointer">
     <Link to={`/product/${product.id}`}>
    <div className="p-4 ">
      <img
        src={product.img}
        alt={product.name}
        loading="lazy"
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="text-xl font-semibold text-[#1842B6] mt-4">{product.name}</h2>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <Link to={`/product/${product.id}`}>
        <button className="mt-4 px-4 py-2  bg-[#1842B6] text-white rounded-md hover:bg-[#0f3196] transition duration-200">
          View Details
        </button>
      </Link>
    </div>
    </Link>
  </div>
);

const ProductList = () => {
  const { products } = useProducts(); // Fetch products from ProductContext
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-16 mt-10">
      <h1 className="text-3xl font-bold text-center text-[#1842B6]">Our Products</h1>
      <p className="text-center text-gray-600 mt-4">Explore our wide range of innovative products.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {products.length === 0 ? (
          <p className="text-center text-gray-600 col-span-4">No products available at the moment.</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
};

export default ProductList;
