import "../styles/why.css";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { SiVerizon } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { FaTv } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { RxViewGrid } from "react-icons/rx";
export const Why = () => {
  const whys = [
    {
      id: 1,
      icon: AiOutlineSafetyCertificate,
      title: "Since 1998",
      desc: "26+ years of trusted expertise in gems, jewellery, and gemology",
    },
    {
      id: 2,
      icon: SiVerizon,
      title: "Triple Certified",
      desc: "IGI, GIA, and IDI credentials — internationally recognised standards",
    },
    {
      id: 3,
      icon: IoIosSearch,
      title: "CVD Detection",
      desc: "Advanced lab testing to identify lab-grown vs natural diamonds",
    },
    {
      id: 4,
      icon: FaTv,
      title: "Full Reports",
      desc: "Big certificates and credit card model reports for all gem services",
    },
    {
      id: 5,
      icon: BsCurrencyDollar,
      title: "Transparent Pricing",
      desc: "Fair market rates for bullion, jewellery, and all trade services",
    },
    {
      id: 6,
      icon: RxViewGrid,
      title: "In-House Lab",
      desc: "Spectrum Gem Testing Lab offering 12 specialised services under one roof",
    },
  ];
  return (
    <section className="why" id="why">
      <div className="section-header" data-aos="zoom-in">
        <p className="section-tag">Why Choose Us</p>
        <h2 className="section-title">Our Commitments</h2>
        <div className="section-line"></div>
      </div>
      <div className="why-grid">
        {whys.map((curr) => {
          const Icon = curr.icon;
          return (
            <div className="why-card" key={curr.id} data-aos="fade-up">
              <div className="why-icon">
                <Icon />
              </div>
              <p className="why-title">{curr.title}</p>
              <p className="why-desc">{curr.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
