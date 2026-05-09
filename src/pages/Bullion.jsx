import { BullionCard } from "../components/ui/BullionCard";
import "../styles/bullion.css";

export const Bullion = () => {
  return (
    <section className="bullion" id="Bullion">
      <div className="section-header" data-aos="zoom-in">
        <p className="section-tag">Bullion Services</p>
        <h2 className="section-title">Gold · Silver · Platinum</h2>
        <div className="section-line"></div>
      </div>
      <BullionCard />
    </section>
  );
};
