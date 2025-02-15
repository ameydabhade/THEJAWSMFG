import React, { createContext, useContext, useState } from 'react';

// Create a Context for the products
const ProductContext = createContext();

// Create a Provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      "id": 1,
      "name": "Power Chucks",
      "description": "High-Performance Power Chucks for Precision Machining",
      "img": "/powerChuck.jpg",
      "detailedDescription": "At The Jaws Mfg. Co., we manufacture high-precision Power Chucks engineered for superior clamping force, accuracy, and durability. Designed for CNC turning centers and special-purpose machines, our power chucks ensure exceptional performance in demanding machining environments.",
      "features": [
        "✅ Superior Clamping Efficiency – Delivers high gripping force with minimal deformation.",
        "✅ Exceptional Accuracy & Repeatability – Ensures precision in every operation.",
        "✅ Robust Construction – Built from premium materials for extended lifespan.",
        "✅ High-Speed Capability – Optimized for stability at elevated RPMs.",
        "✅ Low Maintenance & Easy Servicing – Designed for smooth operation and long-term reliability.",
        "✅ Customizable Solutions – Available in multiple configurations to fit unique machining needs."
      ],
      "types": [
        "2-Jaw, 3-Jaw, 4-Jaw, 5-jaw, 6-jaw, 8-jaw, 12-jaw & Special-Purpose Power Chucks",
        "Wedge-Style & Scroll-Type Chucks",
        "Quick-Change Chucks for Faster Setup",
        "Large-Diameter & Heavy-Duty Power Chucks",
        "Sizes upto 1 metre"
      ]
    },
    {
      "id": 2,
      "name": "Built-in Cylinder Rotary Power Chuck",
      "description": "Seamless Power Workholding for Enhanced Efficiency",
      "img": "/builtInCylinder.jpg",
      "detailedDescription": "Upgrading from a manual chucking system to a power-operated one can often be costly and complex due to the need for an external hydraulic setup. JATO Rotary Power Chucks, exclusively offered by The Jaws Mfg. Co., provide an integrated, cost-effective solution by eliminating the need for a separate rotary cylinder.",
      "features": [
        "✅ Built-in Cylinder Design – Eliminates the need for an external hydraulic system, simplifying installation and reducing costs.",
        "✅ Quick & Easy Setup – Enables seamless conversion of manual lathes into semi-automatic systems or integration into special-purpose machines.",
        "✅ Quick-Change Jaw/Collet System – Enhances flexibility by accommodating workpieces of varying dimensions.",
        "✅ Multiple Actuation Options – Available in both air and hydraulic models to suit different machining needs.",
        "✅ Compact & Space-Saving – Designed for efficient performance without additional setup hassles.",
        "✅ Versatile Sizing – Offered in a range of sizes, from compact to large, to fit diverse applications."
      ],
      "types": [
        "Retrofitting manual lathes into power-operated setups.",
        "Special-purpose machine construction requiring an integrated power workholding system.",
        "Precision machining applications where fast jaw/collet changes enhance productivity."
      ]
    },
    {
      "id": 3,
      "name": "Preci Chuck",
      "description": "High-precision chucks designed for accurate clamping in machining.",
      "img": "/preciChuck.jpg",
      "detailedDescription": "These chucks were earlier manufactured by M/S Batliboi & Co. in collaboration with Reishauer of Switzerland. These chucks are unique in design and accuracy with no scroll, no cams but with screw, rack, and pinion drive. They offer quick jaw change for reducing downtime and provide high clamping accuracy.",
      "features": [
        "✅ Innovative Design – Unlike conventional chucks, Preci Chucks operate with no scrolls or cams, utilizing a screw, rack, and pinion drive for enhanced precision.",
        "✅ Quick Jaw Change System – Minimizes downtime by allowing fast and efficient jaw replacement.",
        "✅ Superior Clamping Accuracy – Ensures consistent and precise workholding for high-quality machining.",
        "✅ Rugged & Durable Construction – Designed for long-lasting performance in demanding machining environments.",
        "✅ Versatile Applications – Suitable for CNC and conventional lathes, grinding machines, and special-purpose machines."
      ],
      "types": [
        "Engineered for Precision – Ideal for high-tolerance machining where accuracy is critical.",
        "Reduced Setup Time – Quick jaw change improves operational efficiency."
      ]
    },
    {
      "id": 4,
      "name": "Hard Jaws",
      "description": "At The Jaws Mfg. Co., our Hard Jaws are designed for heavy-duty machining and high-strength clamping, ensuring superior grip and durability in demanding applications.",
      "img": "/hardJaws.jpg",
      "detailedDescription": "Hard Jaws share certain characteristics of soft jaws. They are made of case-hardened steel - EN353 and hardened up to 50-55 HRC. They are usually used for first-operation roughing, where gripping is a more important criterion than concentricity. The ground gripping surface of the jaw provides a secure true grip.",
      "features": [
        "✅ High-Strength Material – Made from case-hardened EN353 steel, ensuring excellent wear resistance.",
        "✅ Optimal Hardness – Heat-treated to 50-55 HRC for durability and longevity.",
        "✅ Superior Grip & Stability – Precision-ground gripping surfaces provide a true and secure hold.",
        "✅ Ideal for Roughing Operations – Designed for first-operation machining, where gripping force is prioritized over concentricity.",
        "✅ Versatile Applications – Suitable for CNC turning centers, milling machines, and special-purpose machining setups.",
        "✅ Custom & Standard Designs – Available in multiple configurations to fit diverse chuck types."
      ],
      "types": [
        "Engineered for Maximum Performance – Perfect for high-torque and high-load machining.",
        "Extended Tool Life – Wear-resistant construction reduces jaw replacement frequency.",
        "Compatible with Leading Chuck Brands – Designed for seamless integration."
      ]
    },
    {
      "id": 5,
      "name": "Soft Jaws",
      "description": "Soft jaws ideal for delicate surfaces requiring non-damaging clamping.",
      "img": "/softJaws.jpg",
      "detailedDescription": "Soft Jaws provide machinable surfaces customized by the end user for accurate component clamping. They can be cut and reused in place of fixtures, reducing setup time and increasing efficiency. We manufacture soft jaws in Mild Steel (MS), EN9, and Aluminum as per customer requirements.",
      "features": [
        "✅ Custom Machinable Surface – Allows users to machine the jaws to fit unique workpiece profiles.",
        "✅ Ideal for Delicate & Precision Components – Prevents marring or deformation of sensitive surfaces.",
        "✅ Reusable & Cost-Effective – Can be cut, re-machined, and reused, eliminating the need for dedicated fixtures.",
        "✅ Reduces Setup Time – Simplifies workholding, improving efficiency in machining operations.",
        "✅ Available in Multiple Materials – Manufactured in Mild Steel (MS), EN9, and Aluminum as per customer requirements.",
        "✅ Compatible with CNC & Manual Lathes – Suitable for a wide range of turning applications."
      ],
      "types": [
        "Precision Machining & Custom Workholding",
        "Aerospace, Automotive & Medical Industries",
        "Workpieces Requiring a Secure but Non-Marking Grip"
      ]
    },
    {
      "id": 6,
      "name": "Jaws Eccentric Compensating Chuck",
      "description": "Chucks designed to compensate for eccentric workpieces for optimal grip.",
      "img": "/eccentricCompensatingChuck.jpg",
      "detailedDescription": "JAWS Eccentric Compensating Chucks have been designed to hold workpieces in between centers with eccentricity or irregularity. The compensating chuck provides a total solution to any chucking problem requiring jaw movement to match the eccentricity or irregularity of the workpiece. These chucks are actuated either by Pneumatic Cylinders or Hydraulic Cylinders and are ideal for irregular-shaped workpieces. JPCE is offered with centering inserts and spring-loaded or solid centers.",
      "features": [
        "✅ Improved Accuracy – Ensures precise and concentric jaw boring for better workholding performance.",
        "✅ Time-Saving & Efficient – Eliminates the need for improvised setup pieces, reducing preparation time.",
        "✅ Even Pressure Distribution – Applies uniform force to all jaws, ensuring consistent results.",
        "✅ Quick & Tool-Free Installation – Easily mounts on jaws without additional tools.",
        "✅ Extends Jaw Life – Minimizes uneven wear, increasing the longevity of soft jaws."
      ],
      "types": [
        "Machining soft jaws on CNC and manual lathes.",
        "Enhancing jaw gripping accuracy for better workpiece holding.",
        "Reducing setup time and improving machining consistency."
      ]
    },
    {
      "id": 7,
      "name": "Base Jaws",
      "description": "Reliable base jaws for secure fitting in power chucks.",
      "img": "/softJaws.jpg",
      "detailedDescription": "Precision-manufactured base jaws designed for seamless compatibility with power chucks, ensuring a stable and secure grip. Crafted from durable materials, these jaws provide a reliable foundation for workholding applications",
      "features": [
        "✅ High-Precision Manufacturing – Ensures a perfect fit and seamless compatibility with power chucks.",
        "✅ Durable & Wear-Resistant – Made from hardened, high-strength materials for extended service life.",
        "✅ Stable & Secure Clamping – Provides a rigid foundation for soft and hard jaws, ensuring accuracy.",
        "✅ Optimized for CNC & Manual Lathes – Designed for high-performance workholding solutions.",
        "✅ Customizable to Requirements – Available in various sizes and configurations to suit different chucks."
      ],
      "types": [
        "CNC & Manual Lathe Chucks",
        "Heavy-Duty & High-Precision Machining",
        "Custom Workholding Applications"
      ]
    },
    {
      "id": 8,
      "name": "Chuck Spares",
      "description": "Essential spare parts for maintaining chuck performance and longevity.",
      "img": "/softJaws.jpg",
      "detailedDescription": "A comprehensive range of spare parts essential for maintaining and extending the lifespan of chucks. These spares ensure smooth operation and optimal performance in machining applications.",
      "features": [
        "✅ High-Quality Materials – Manufactured for durability, wear resistance, and long-term use.",
        "✅ Precision-Engineered Components – Ensures seamless compatibility with various chuck models.",
        "✅ Enhanced Chuck Longevity – Regular maintenance with quality spares extends chuck life.",
        "✅ Optimized Performance – Reduces downtime and maintains consistent clamping force.",
        "✅ Available for Various Chuck Types – Compatible with power chucks, manual chucks, collet chucks, and special chucks."
      ],
      "types": [
        "Hard & Soft Jaws",
        "Base Jaws",
        "Wedges & Draw Tubes",
        "Pistons & Seals",
        "Scroll Plates & Pinions",
        "Springs, Nuts, and Other Accessories"
      ]
    },
    {
      "id": 9,
      "name": "Special Chucks and CNC Jaws",
      "description": "Specialized chucks and CNC-compatible jaws for custom machining needs.",
      "img": "/powerChuck.jpg",
      "detailedDescription": "Engineered for specialized machining applications, these chucks and jaws offer enhanced precision and customization for CNC and manual lathe operations. Designed to meet unique workholding requirements.",
      "features": [
        "✅ Custom Workholding Solutions – Tailored for unique machining applications across various industries.",
        "✅ High Precision & Repeatability – Ensures secure and accurate gripping of workpieces.",
        "✅ Enhanced Flexibility – Compatible with multiple CNC machines and manual lathes.",
        "✅ Robust Construction – Built from high-grade materials for long-lasting performance.",
        "✅ Specialized Jaw Configurations – Designed for irregular, oversized, or delicate components.",
        "✅ Improved Productivity – Optimized for efficient part handling and reduced cycle times."
      ],
      "types": [
        "Special Chucks – Custom-designed to fit unique machining setups and operational needs.",
        "CNC Jaws – Engineered for enhanced grip, stability, and precision in CNC applications.",
        "Large-Diameter & Heavy-Duty Chucks – Designed for extreme workholding challenges.",
        "Soft & Hard Jaws – Custom-configured for various material and clamping needs."
      ]
    },
    {
      "id": 10,
      "name": "Hydraulic Rotary Cylinder",
      "description": "Hydraulic rotary cylinders for automated clamping in industrial processes.",
      "img": "/hydraulicRotaryCylinder.jpg",
      "detailedDescription": "High-performance hydraulic rotary cylinders designed for automated clamping in machining operations. Ensures powerful and precise workholding with smooth hydraulic actuation.",
      "features": [
        "✅ Robust Hydraulic Actuation – Provides consistent and powerful clamping force for secure workholding.",
        "✅ High-Speed & High-Torque Performance – Designed to operate at elevated speeds with minimal vibration.",
        "✅ Leak-Proof & Durable Design – Constructed with high-grade materials for long-lasting and maintenance-free performance.",
        "✅ Compact & Space-Saving – Optimized for easy integration with CNC machines, turning centers, and special-purpose machines.",
        "✅ Reliable & Smooth Operation – Ensures precise and repeatable clamping, reducing machining errors.",
        "✅ Compatible with Various Chucks – Ideal for use with power chucks, collet chucks, and other workholding systems."
      ],
      "types": [
        "CNC Lathes & Turning Centers – Enables fast and efficient workpiece clamping.",
        "Special-Purpose Machines – Provides customized clamping solutions for unique applications."
      ]
    },
    {
      "id": 11,
      "name": "Pneumatic Rotary Cylinder",
      "description": "Pneumatic rotary cylinders designed for efficient air-powered clamping.",
      "img": "/pneumaticRotaryCylinder.jpg",
      "detailedDescription": "Efficient and reliable pneumatic rotary cylinders for air-powered clamping applications. Designed to provide consistent pressure and high-speed operation in industrial machining processes.",
      "features": [
        "✅ High-Speed Operation – Enables rapid clamping and unclamping, improving cycle times.",
        "✅ Consistent & Stable Air Pressure – Ensures uniform clamping force for precision machining.",
        "✅ Lightweight & Compact Design – Easy to integrate into CNC lathes, turning centers, and special-purpose machines.",
        "✅ Low Maintenance & Cost-Effective – Air-powered systems require minimal upkeep, reducing long-term operational costs.",
        "✅ Vibration-Free Performance – Provides smooth rotation and enhanced workpiece stability.",
        "✅ Compatible with Various Workholding Systems – Ideal for use with power chucks, collet chucks, and other pneumatic fixtures."
      ],
      "types": [
        "CNC, VMC & Conventional Lathes – Improves automation for faster machining.",
        "Assembly & Special-Purpose Machines – Ideal for custom industrial automation setups."
      ]
    },
    {
      "id": 12,
      "name": "Jaws Boring Rings",
      "description": "Precision boring rings to assist in accurate jaw machining.",
      "img": "/boringRing.png",
      "detailedDescription": "These are used to bore soft jaws on manual lathes and CNC machines. This replaces the current method people use for boring soft jaws using setup pieces they find on their shop floor. Jaw Boring Rings save time looking for these pieces and apply pressure equally to all jaws. They are quick to install and no tools are required. Jaws Boring Rings help obtain high accuracy and performance, increasing the life of jaws.",
      "features": [
        "✅ Improved Accuracy – Ensures precise and concentric jaw boring for better workholding performance.",
        "✅ Time-Saving & Efficient – Eliminates the need for improvised setup pieces, reducing preparation time.",
        "✅ Even Pressure Distribution – Applies uniform force to all jaws, ensuring consistent results.",
        "✅ Quick & Tool-Free Installation – Easily mounts on jaws without additional tools.",
        "✅ Extends Jaw Life – Minimizes uneven wear, increasing the longevity of soft jaws."
      ],
      "types": [
        "Machining soft jaws on CNC and manual lathes.",
        "Enhancing jaw gripping accuracy for better workpiece holding.",
        "Reducing setup time and improving machining consistency."
      ]
    }
  ]);

  const [brandInfo, setBrandInfo] = useState({
    logo: "/logo.png", // Path to the logo image
    brandName: "The Jaws Mfg. Co.",
    certification: "BSI Certified ISO 9001:2015 Company",
    tagline: "We provide workholding solutions and services."
  });

  return (
    <ProductContext.Provider value={{ products, setProducts, brandInfo, setBrandInfo }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to access the product data
export const useProducts = () => {
  return useContext(ProductContext);
};