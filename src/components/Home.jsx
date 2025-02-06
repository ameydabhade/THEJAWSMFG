import React from "react";

// Products Data
const products = [
  { id: 1, name: "Power Chuck", description: "A high-quality Power Chuck for machining precision.", img: "/product1.jpg" },
  { id: 2, name: "Hydraulic Cylinder", description: "Efficient hydraulic cylinders for industrial use.", img: "/product2.jpg" },
  { id: 3, name: "Soft Jaws", description: "Soft jaws for enhanced gripping power in chucks.", img: "/product3.jpg" },
  { id: 4, name: "Power Pack", description: "Reliable power packs for various industrial applications.", img: "/product4.jpg" },
];

// Clients Logos
const clientLogos = [
  "archies.png", "birla.png", "bombay-shaving.png", "deloitte.png", "ey.png",
  "firstcry.png", "freecharge.png", "hcl.png", "justdial.png", "kpmg.png",
  "marico.png", "mmt.png", "mobikwik.png", "monster.png", "nvidia.png",
  "ola.png", "oyo.png", "paytm.png", "royal-enfield.png", "spicejet.png",
  "titan.png", "truecaller.png", "uber.png", "viacom18.png"
];

// Subcomponent for Product Cards
const ProductCard = ({ product }) => (
  <div className="transform transition-transform duration-300 ease-in-out hover:scale-105 bg-white p-4 shadow-lg rounded-lg hover:shadow-2xl">
    <div className="w-full flex justify-center">
      <img
        src={product.img}
        alt={product.name}
        className="w-full max-w-[300px] h-auto object-cover rounded-lg mb-4"
      />
    </div>
    <h3 className="text-xl font-semibold text-[#1842B6]">{product.name}</h3>
    <p className="text-gray-600 mt-2">{product.description}</p>
    <button className="mt-4 px-4 py-2 bg-[#1842B6] text-white rounded-md hover:bg-[#0f3196] transition duration-200">
      View Details
    </button>
  </div>
);

// Subcomponent for Client Logos Marquee
const ClientLogos = ({ logos }) => (
  <div className="relative overflow-hidden py-4">
    <div className="marquee">
      <div className="marquee-row flex items-center justify-around">
        {logos.map((img, index) => (
          <div key={index} className="marquee-item">
            <img
              src={`https://training-comp-uploads.internshala.com/full-stack-web-development-specialization-v2/${img}`}
              alt={img.split(".")[0]}
              className="object-contain w-48 md:w-48 lg:w-64"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Home = () => (
  <>
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] flex items-center justify-center py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 p-6 md:p-8 rounded-md">
        <div className="md:w-1/2 w-full text-center md:text-left space-y-6">
          <h2 className="text-sm font-semibold text-white bg-[#1842B6] p-2 rounded-full inline-block px-5">ISO 9001 : 2015 Certified</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-black">Welcome to The Jaws Manufacturing Company</h1>
          <p className="text-lg text-gray-600">
            We manufacture high-quality accessories for the machine tool industry, including Power Chucks, Hydraulic and Pneumatic Cylinders, Power Packs, Soft & Hard Jaws, Chuck Spares, and more. Custom solutions available.
          </p>
          <a href="/contact-us">
            <button className="px-8 py-3 bg-[#1842B6] text-white rounded-full hover:bg-blue-700 transition-all duration-300">
              Check Our Products
            </button>
          </a>
        </div>
        <div className="md:w-1/2 w-full flex justify-center ">
          <img src="/homepage 1.jpg" alt="Jaws Manufacturing" className="lg:max-w-[550px] md:max-w-[400px] rounded-lg shadow-lg object-cover" />
        </div>
      </div>
    </div>

    {/* About Section */}
    <div className="py-2 px-6 ">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0">
        <div className="md:w-1/2 w-full flex justify-center">
          <img src="/PowerChunk.jpg" alt="About Us" className="w-full max-w-[600px] md:max-w-[600px] rounded-lg shadow-xl object-cover" />
        </div>
        <div className="md:w-1/2 w-full text-center md:text-left md:pl-10">
          <h3 className="text-sm font-semibold text-[#1842B6] mb-2">About Us</h3>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">Your Trusted <span className="text-[#1842B6]">Jaws Manufacturing Company</span></h1>
          <p className="text-lg text-gray-600 mb-6">
            We understand the challenges businesses face. Our team of seasoned professionals offers a suite of consulting services founded on innovation, integrity, and excellence.
          </p>
          <a href="/service">
            <button className="px-6 py-3 bg-[#1842B6] text-white rounded-full mb-6 md:mb-8">
              Contact Us
            </button>
          </a>
          <div className="flex justify-center md:justify-start space-x-6 sm:space-x-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold">20+</h2>
              <p className="text-gray-600 text-sm sm:text-base">Satisfied Customers</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold">7+</h2>
              <p className="text-gray-600 text-sm sm:text-base">Years Experience</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold">25+</h2>
              <p className="text-gray-600 text-sm sm:text-base">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Stats Section */}
    <section className="pt-6 pb-6 px-4 mt-2 bg-black">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
          <div><h2 className="text-4xl font-bold">20+</h2><p>Satisfied Customers</p></div>
          <div><h2 className="text-4xl font-bold">7+</h2><p>Years Experience</p></div>
          <div><h2 className="text-4xl font-bold">2+</h2><p>Branch Offices</p></div>
          <div><h2 className="text-4xl font-bold">25+</h2><p>Projects Completed</p></div>
        </div>
      </div>
    </section>

    {/* Products Section */}
    <div className="py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-10">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>

    {/* Clients Section */}
    <div className="my-4 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
      <ClientLogos logos={clientLogos} />
    </div>
  </>
);

export default Home;
