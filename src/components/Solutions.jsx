import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <section className="bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] py-8 md:py-16">
      <div className="relative overflow-hidden w-full">
        <div className="flex transition-transform duration-500" style={{ transform: "translateX(0%)" }}>
          <div className="min-w-full">
            <img src="PowerChunk.jpg" alt="Power Chuck" className="w-full h-[200px] md:h-[600px] object-cover" />
          </div>
          <div className="min-w-full">
            <img src="PowerChunk.jpg" alt="Slider Image 2" className="w-full h-[200px] md:h-[400px] object-cover" />
          </div>
          <div className="min-w-full">
            <img src="PowerChunk.jpg" alt="Slider Image 3" className="w-full h-[200px] md:h-[400px] object-cover" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6">
          <span className="text-[#1842B6]">Our Solutions</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-2">Reconditioning Power Chucks</h3>
            <p className="text-gray-600 text-sm md:text-base">
              We recondition power chucks of any make, size, Indian or imported, ensuring optimal performance.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-2">Custom Chuck Solutions</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Specialized design and manufacturing of chucks for unique applications, tailored to your needs.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-2">Tailored Engineering Services</h3>
            <p className="text-gray-600 text-sm md:text-base">
              From concept to delivery, including precision four-jaw chuck manufacturing for various industries.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6">
          <span className="text-[#1842B6]">Our Industrial Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {[
            { title: "Power Chucks", img: "Icon1.png", desc: "High-performance power chucks designed for precision and efficiency in machining operations." },
            { title: "Cylinder Rotary Power Chuck", img: "https://www.mgworkholding.com/cdn/shop/products/3H-206_1024x1024.jpg?v=1545527015", desc: "Advanced rotary power chucks with high gripping force and smooth operation for various applications." },
            { title: "Preci Chuck", img: "Icon3.png", desc: "Precision-engineered chucks providing exceptional accuracy and reliability for machining needs." },
            { title: "Jaws Eccentric Compensating Chuck", img: "Icon4.png", desc: "Innovative chucking solutions with eccentric compensation for improved clamping accuracy." },
            { title: "Soft Jaws", img: "Icon5.png", desc: "High-quality soft jaws for precision gripping and reduced workpiece damage in machining processes." },
            { title: "Pneumatic Rotary Cylinder", img: "Icon6.png", desc: "Efficient pneumatic rotary cylinders delivering smooth and consistent power for automation." },
          ].map((service, index) => (
            <div key={index} className="p-6 rounded-lg flex flex-col bg-white h-full shadow-md">
              <div className="flex items-center mb-4">
                {/* <img src={`${service.img}`} alt="" className="w-10 h-10 mr-3" /> */}
                <h3 className="text-xl md:text-2xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600 flex-grow mb-4 text-sm md:text-base">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-right mt-6">
          <Link to="/contact-us" className="bg-[#1842B6] text-white py-2 px-4 rounded">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default Solutions;