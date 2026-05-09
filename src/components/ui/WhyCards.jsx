import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { SiVerizon } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { FaTv } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { RxViewGrid } from "react-icons/rx";
import whys from "../../data/why.json";

export const WhyCards = () => {
  const iconMap = {
    AiOutlineSafetyCertificate: AiOutlineSafetyCertificate,
    SiVerizon: SiVerizon,
    IoIosSearch: IoIosSearch,
    FaTv: FaTv,
    BsCurrencyDollar: BsCurrencyDollar,
    RxViewGrid: RxViewGrid,
  };

  return (
    <div className="why-grid">
      {whys.map((curr) => {
        const IconComponent = iconMap[curr.icon];
        return (
          <div className="why-card" key={curr.id} data-aos="fade-up">
            <div className="why-icon">
              <IconComponent />
            </div>
            <p className="why-title">{curr.title}</p>
            <p className="why-desc">{curr.desc}</p>
          </div>
        );
      })}
    </div>
  );
};
