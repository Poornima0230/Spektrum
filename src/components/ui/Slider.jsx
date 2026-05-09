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
import "../../styles/labTesting.css";
import { useState, useEffect, useRef } from "react";
import services from "../../data/labTestingData.json";
export const Slider = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const icons = {
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
  };

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
            const Icon = icons[item.icon];
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
