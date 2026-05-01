import {
  FaGem,
  FaHeart,
  FaCertificate,
  FaGlobe,
  FaStar,
  FaLayerGroup,
  FaCubes,
  FaSearch,
  FaTh,
  FaSun,
  FaShieldAlt,
  FaBezierCurve,
} from "react-icons/fa";
import "../styles/labTesting.css";
import { useState, useEffect, useRef } from "react";

export const Slider = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const services = [
    {
      icon: FaGem,
      number: "01",
      title: "Natural Diamond Certification",
      desc: "Full grading and certification of natural loose diamonds — cut, colour, clarity, and carat weight assessed.",
      tag: "Natural · Certified",
    },
    {
      icon: FaHeart,
      number: "02",
      title: "Natural Diamond Jewellery",
      desc: "Certification for natural diamond jewellery including Round brilliant, Flat Polki, and Chakri.",
      tag: "Round · Polki · Chakri",
    },
    {
      icon: FaCertificate,
      number: "03",
      title: "Lab Grown Diamond Certification",
      desc: "Certified grading for CVD and HPHT lab grown diamonds with full documentation.",
      tag: "CVD · HPHT",
    },
    {
      icon: FaGlobe,
      number: "04",
      title: "Lab Grown Diamond Jewellery",
      desc: "Complete jewellery certification for lab grown diamond pieces with authenticity reports.",
      tag: "Lab Grown · Jewellery",
    },
    {
      icon: FaStar,
      number: "05",
      title: "Coloured Gemstone Certification",
      desc: "Expert certification for Ruby, Sapphire, Emerald, and other gemstones.",
      tag: "Ruby · Sapphire · Emerald",
    },
    {
      icon: FaLayerGroup,
      number: "06",
      title: "Coloured Gemstone Jewellery",
      desc: "Full certification for jewellery set with coloured gemstones.",
      tag: "Jewellery Grading",
    },
    {
      icon: FaCubes,
      number: "07",
      title: "Loose Gemstone Certification",
      desc: "Individual loose gemstone certification with precise grading and documentation.",
      tag: "Loose · All Varieties",
    },
    {
      icon: FaSearch,
      number: "08",
      title: "Rough Diamond Evaluation",
      desc: "Professional evaluation of rough diamonds including quality and yield analysis.",
      tag: "Rough · Evaluation",
    },
    {
      icon: FaTh,
      number: "09",
      title: "Rough Colour Stone Evaluation",
      desc: "Evaluation of rough coloured gemstones for quality, origin, and value.",
      tag: "Rough · Colour Stones",
    },
    {
      icon: FaSun,
      number: "10",
      title: "Rudraksha Certification",
      desc: "Authentication for Rudraksha, Spatik, Tulasi, and Karango with grading reports.",
      tag: "Spatik · Tulasi · Karango",
    },
    {
      icon: FaShieldAlt,
      number: "11",
      title: "Coloured Gemstone Beads",
      desc: "Certification for gemstone bead strands including malas and jewellery beads.",
      tag: "Beads · Malas",
    },
    {
      icon: FaBezierCurve,
      number: "12",
      title: "CVD Detection Testing",
      desc: "Advanced testing to identify lab-grown vs natural diamonds with reports.",
      tag: "CVD · Lab Testing",
    },
  ];

  // next
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % services.length);
  };
  // prev
  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const stopAuto = () => {
    clearInterval(intervalRef.current);
  };

  // auto slide
  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  return (
    <div className="slider" onMouseEnter={stopAuto} onMouseLeave={startAuto}>
      <div className="slider-window">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <div className="lab-card" key={i}>
                <div className="icon">
                  <Icon />
                </div>
                <h3 className="lab-title">{item.title}</h3>
                <p className="lab-desc" accordion>
                  {item.desc}
                </p>
                <p className="lab-tag">{item.tag}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* arrows */}
      <button className="arrow left" onClick={prevSlide}>
        ‹
      </button>
      <button className="arrow right" onClick={nextSlide}>
        ›
      </button>

      {/* dots */}
      <div className="dots">
        {services.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};
