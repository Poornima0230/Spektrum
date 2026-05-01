import "../styles/services.css";
import looseGemStone from "../assets/GemStones.jpeg";
import looseDiamond from "../assets/LooseDimonds.jpeg";
// import hero from "../assets/hero.jpeg";
import plainGold from "../assets/PlainGold.jpg";
import silverJew from "../assets/SilverJewellery.jpeg";
import bead from "../assets/Beads.jpeg";
import astrologyStone from "../assets/AstrologyStones.jpeg";
import gemStone from "../assets/gemStone.jpeg";
import diamond from "../assets/Diamond.jpeg";
// import diamondSupply from "../assets/diamondSupply.jpeg";
import diamondSupply from "../assets/diamondSupplyy.png";

export const Services = () => {
  const services = [
    {
      id: 1,
      img: looseGemStone,
      title: "Loose Gem Stones",
      description:
        "Wholesale and retail supply of loose precious and semi-precious gemstones from trusted origins.",
    },
    {
      id: 2,
      img: gemStone,
      title: "Gemstone Jewellery Manufacturing",
      description:
        " Custom jewellery crafted to order in Silver, Gold, and Platinum with your choice of gemstone settings.",
    },
    {
      id: 3,
      img: looseDiamond,
      title: "Loose Diamond Sale",
      description:
        "Wholesale and retail natural loose diamonds — certified and graded to international standards.",
    },
    {
      id: 4,
      img: diamond,
      title: "Diamond Jewellery Order Making",
      description:
        "Gold & Platinum jewellery with Round Diamonds, Flat Polki, and Chakri — to your exact specifications.",
    },
    {
      id: 5,
      img: diamondSupply,
      title: "Lab Grown Diamond Supply",
      description:
        " Loose lab grown diamonds and complete jewellery supply — certified and CVD-tested for authenticity.",
    },
    {
      id: 6,
      img: plainGold,
      title: "Plain Gold Jewellery",
      description:
        "Custom plain gold jewellery order making — traditional craftsmanship with modern finishing.",
    },
    {
      id: 7,
      img: silverJew,
      title: "Silver Jewellery & Articles",
      description:
        "Fine silver jewellery and decorative silver articles — wholesale and retail.",
    },
    {
      id: 8,
      img: bead,
      title: "Gemstone Beads, Chains & Malas",
      description:
        "Custom plain gold jewellery order making — traditional craftsmanship with modern finishing.",
    },
    {
      id: 9,
      img: astrologyStone,
      title: "Astrology & Remedies",
      description:
        "Astrologer consultation and personalised remedies — gemstone recommendations based on your horoscope.",
    },
  ];
  return (
    <section className="services" id="services">
      <div className="section-header" data-aos="zoom-in">
        <p className="section-tag">What We Offer</p>
        <h2 className="section-title">Gems & Jewellery Services</h2>
        <div className="section-line"></div>
      </div>

      <div className="service-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index} data-aos="fade-up">
            <img
              className="service-card-img"
              src={item.img}
              alt={item.title}
              loading="lazy"
            />
            <p className="service-title">{item.title}</p>
            <p className="service-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
