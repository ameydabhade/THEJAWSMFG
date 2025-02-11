import React, { createContext, useContext, useState } from 'react';

// Create a Context for the products
const ProductContext = createContext();

// Create a Provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      "id": 1,
      "name": "Power Chucks",
      "description": "Durable and efficient power chucks for precision machining.",
      "img": "/powerChuck.jpg",
      "detailedDescription": "\"POWER CHUCKS\" and chuck spares manufactured by THE JAWS MFG CO. PUNE have proved its excellent quality and are held in high esteem by our clients. Many reputed industries have their machine shops fitted with \"JAWS\" power chucks on their CNC machines, Capstan, and standard lathe machines. We manufacture our power chucks in 2, 3, 4, 5, 6, 8, and 12 jaw type chucks up to 500mm diameter."
    },
    {
      "id": 2,
      "name": "Built-in Cylinder Rotary Power Chuck",
      "description": "Integrated rotary chucks with built-in cylinders for advanced applications.",
      "img": "/builtInCylinder.jpg",
      "detailedDescription": "It used to be complex for users to convert a manual chucking system to a power one, since setting up a hydraulic system not only is expensive but also troublesome. JATO Rotary Power Chuck is specially designed to help users set up a power workholding system in a low-cost way. With a built-in cylinder, JATO's Rotary Power Chuck allows users to easily and quickly set up a power workholding system, saving costs on purchasing an additional rotary cylinder. JATO Rotary Power Chuck also has quick-change jaw/collet design, helping users cope with parts of various dimensions. It comes with both air and hydraulic models that range from small sizes to large ones, giving users more options to choose from. The chuck is widely applied to convert manual lathes to semi-auto or build special-purpose machines."
    },
    {
      "id": 3,
      "name": "Preci Chuck",
      "description": "High-precision chucks designed for accurate clamping in machining.",
      "img": "/preciChuck.jpg",
      "detailedDescription": "These chucks were earlier manufactured by M/S Batliboi & Co. in collaboration with Reishauer of Switzerland. These chucks are unique in design and accuracy with no scroll, no cams but with screw, rack, and pinion drive. They offer quick jaw change for reducing downtime and provide high clamping accuracy."
    },
    {
      "id": 4,
      "name": "Jaws Eccentric Compensating Chuck",
      "description": "Chucks designed to compensate for eccentric workpieces for optimal grip.",
      "img": "/eccentricCompensatingChuck.jpg",
      "detailedDescription": "JAWS Eccentric Compensating Chucks have been designed to hold workpieces in between centers with eccentricity or irregularity. The compensating chuck provides a total solution to any chucking problem requiring jaw movement to match the eccentricity or irregularity of the workpiece. These chucks are actuated either by Pneumatic Cylinders or Hydraulic Cylinders and are ideal for irregular-shaped workpieces. JPCE is offered with centering inserts and spring-loaded or solid centers."
    },
    {
      "id": 5,
      "name": "Soft Jaws",
      "description": "Soft jaws ideal for delicate surfaces requiring non-damaging clamping.",
      "img": "/softJaws.jpg",
      "detailedDescription": "Soft Jaws provide machinable surfaces customized by the end user for accurate component clamping. They can be cut and reused in place of fixtures, reducing setup time and increasing efficiency. We manufacture soft jaws in Mild Steel (MS), EN9, and Aluminum as per customer requirements."
    },
    {
      "id": 6,
      "name": "Hard Jaws",
      "description": "Robust hard jaws for heavy-duty and secure workholding applications.",
      "img": "/hardJaws.jpg",
      "detailedDescription": "Hard Jaws share certain characteristics of soft jaws. They are made of case-hardened steel - EN353 and hardened up to 50-55 HRC. They are usually used for first-operation roughing, where gripping is a more important criterion than concentricity. The ground gripping surface of the jaw provides a secure true grip."
    },
    {
      "id": 7,
      "name": "Base Jaws",
      "description": "Reliable base jaws for secure fitting in power chucks.",
      "img": "/softJaws.jpg",
      "detailedDescription": "Precision-manufactured base jaws designed for seamless compatibility with power chucks, ensuring a stable and secure grip. Crafted from durable materials, these jaws provide a reliable foundation for workholding applications"
    },
    {
      "id": 8,
      "name": "Chuck Spares",
      "description": "Essential spare parts for maintaining chuck performance and longevity.",
      "img": "/softJaws.jpg",
      "detailedDescription": "A comprehensive range of spare parts essential for maintaining and extending the lifespan of chucks. These spares ensure smooth operation and optimal performance in machining applications."
    },
    {
      "id": 9,
      "name": "Special Chucks and CNC Jaws",
      "description": "Specialized chucks and CNC-compatible jaws for custom machining needs.",
      "img": "/powerChuck.jpg",
      "detailedDescription": "Engineered for specialized machining applications, these chucks and jaws offer enhanced precision and customization for CNC and manual lathe operations. Designed to meet unique workholding requirements."
    },
    {
      "id": 10,
      "name": "Hydraulic Rotary Cylinder",
      "description": "Hydraulic rotary cylinders for automated clamping in industrial processes.",
      "img": "/hydraulicRotaryCylinder.jpg",
      "detailedDescription": "High-performance hydraulic rotary cylinders designed for automated clamping in machining operations. Ensures powerful and precise workholding with smooth hydraulic actuation."
    },
    {
      "id": 11,
      "name": "Pneumatic Rotary Cylinder",
      "description": "Pneumatic rotary cylinders designed for efficient air-powered clamping.",
      "img": "/pneumaticRotaryCylinder.jpg",
      "detailedDescription": "Efficient and reliable pneumatic rotary cylinders for air-powered clamping applications. Designed to provide consistent pressure and high-speed operation in industrial machining processes."
    },
    {
      "id": 12,
      "name": "Jaws Boring Rings",
      "description": "Precision boring rings to assist in accurate jaw machining.",
      "img": "/boringRing.png",
      "detailedDescription": "These are used to bore soft jaws on manual lathes and CNC machines. This replaces the current method people use for boring soft jaws using setup pieces they find on their shop floor. Jaw Boring Rings save time looking for these pieces and apply pressure equally to all jaws. They are quick to install and no tools are required. Jaws Boring Rings help obtain high accuracy and performance, increasing the life of jaws."
    } 
    // Add other products here as needed...
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to access the product data
export const useProducts = () => {
  return useContext(ProductContext);
};
