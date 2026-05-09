import services from "../../data/services.json";

import Astrology from "../../assets/Astrology.png";
import silverJew from "../../assets/SilverJewellery.jpeg";
import precious from "../../assets/Precious.jpeg";
import semiPre from "../../assets/semi-precious.png";
import diamond from "../../assets/Diamond.jpeg";
import GemTesting from "../../assets/gemTesting.jpeg";
import GoldJewel from "../../assets/goldJewel.jpeg";
import diamondJewel from "../../assets/diamondJewel.png";

export const ServiceCard = () => {
  const img = {
    Astrology: Astrology,
    silverJew: silverJew,
    precious: precious,
    semiPre: semiPre,
    diamond: diamond,
    GemTesting: GemTesting,
    GoldJewel: GoldJewel,
    diamondJewel: diamondJewel,
  };

  return (
    <div className="service-grid">
      {services.map((item) => {
        const ImgComponent = img[item.img];
        return (
          <div className="service-card" key={item.id} data-aos="fade-up">
            <div className="card-image">
              <img src={ImgComponent} alt={item.title} loading="lazy" />
            </div>

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              {item.gems && (
                <div className="tags">
                  {item.gems.map((gem, index) => (
                    <span key={index}>{gem}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
