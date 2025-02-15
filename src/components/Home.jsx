import React, { useEffect } from "react";
import { useProducts } from "./ProductContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`} className="block h-full">
    <div className="transform transition duration-300 ease-in-out hover:scale-105 bg-white p-4 shadow-lg rounded-lg hover:shadow-2xl hover:cursor-pointer flex flex-col h-full">
      <div className="w-full flex justify-center">
        <img
          src={product.img}
          alt={product.name}
          className="w-full max-w-[300px] h-auto object-cover rounded-lg mb-4"
        />
      </div>
      <h3 className="text-xl font-semibold text-[#1842B6]">{product.name}</h3>
      <p className="text-gray-600 mt-2  flex-grow">{product.description}</p>
      <div className="mt-2">
        <button className="w-full px-4 py-2 bg-[#1842B6] text-white rounded-md hover:bg-[#0f3196] transition duration-200 cursor-pointer">
          View Details
        </button>
      </div>
    </div>
  </Link>
);

const Home = () => {
  const { products } = useProducts();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const firstFourProducts = products.slice(0, 4);

  // Array of client logo file names
  const logoFiles = [
    "cummins-vector-logo.svg",
    "Alfa_Laval.svg",
    "Ashok_Leyland.svg",
    "bajaj-auto-logo.svg",
    "Bharat Forge BFL Kalyani.svg",
    "BHEL.svg",
    "Escorts_Group.svg",
    "Force-Motors-01.svg",
    "hyundai-motor-company-2.svg",
    "kbx.svg",
    "kirloskar-logo-vector.svg",
    "KSB.svg",
    "L&T infotech.svg",
    "lml.svg",
    "lmw.svg",
    "mahindra rise.svg",
    "mahindra.svg",
    "micromatic grinding.svg",
    "Premier_Ltd.svg",
    "Sandvik.svg",
    "Shanthi Gears.svg",
    "sulzer.svg",
    "tata-motors.svg",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] flex items-center justify-center py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 p-6 md:p-8 rounded-md">
          <div className="md:w-1/2 w-full text-center md:text-left space-y-6">
            <h2 className="text-sm font-semibold text-white bg-[#1842B6] p-2 rounded-full inline-block px-5">
              BSI Certified ISO 9001:2015 Company
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Precision. Innovation. Excellence.
            </h1>
            <p className="text-lg text-gray-600">
              At <strong>Jaws Manufacturing Company</strong>, we specialize in high-performance accessories for the machine tool industry. From precision <strong>Power Chucks</strong> and <strong>Hydraulic Cylinders</strong> to custom-engineered <strong>Soft & Hard Jaws</strong>, our solutions enhance productivity and reliability.
            </p>
            <Link to="/products">
              <button className="px-8 py-3 bg-[#1842B6] cursor-pointer text-white rounded-full hover:bg-blue-700 transition-all duration-300">
                Explore Our Products
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 w-full flex justify-center">
            <img src="/homepage 1.jpg" alt="Jaws Manufacturing" className="lg:max-w-[550px] md:max-w-[400px] rounded-lg shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0">
        <div className="md:w-1/2 w-full flex justify-center">
          <img src="/PowerChunk.jpg" alt="About Us" className="w-full max-w-[600px] md:max-w-[600px] rounded-lg shadow-xl object-cover" />
        </div>
        <div className="md:w-1/2 w-full text-center md:text-left md:pl-10">
          <h3 className="text-sm font-semibold text-[#1842B6] mb-2">About Us</h3>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">We Never Let Off...</h1>
          <p className="text-lg text-gray-600 mb-6">
            With <strong>46+ years</strong> of expertise, we are a trusted manufacturer of high-quality workholding solutions. Our precision-engineered chucks, jaws, and hydraulic components are designed to elevate your machining efficiency and precision.
          </p>
          <Link to="/service">
            <button className="px-6 py-3 bg-[#1842B6] cursor-pointer text-white rounded-full mb-6 md:mb-8">Get in Touch</button>
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="my-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {firstFourProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-right mt-6">
          <Link to="/products">
            <button className="px-8 py-3 bg-[#1842B6] cursor-pointer text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
              View More
            </button>
          </Link>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="my-12 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Clients</h2>
        <div className="relative overflow-hidden py-4">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {logoFiles.map((img, index) => (
              <div key={index} className="mx-8 flex-shrink-0">
                <img
                  src={`/Logos/${img}`}
                  alt={img.split(".")[0]}
                  className="w-48 h-24 object-contain" // Adjusted size and alignment
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-black">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
            <div>
              <h2 className="text-4xl font-bold">1978</h2>
              <p>Establishment of Jaws Mfg.</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">46+</h2>
              <p>Years Experience</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">23+</h2>
              <p>Clients Satisfied</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">500+</h2>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;