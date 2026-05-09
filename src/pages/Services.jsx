import "../styles/services.css";

import { ServiceCard } from "../components/ui/ServiceCard";
import { ExtraServices } from "../components/ui/ExtraServices";

export const Services = () => {
  return (
    <section className="services" id="services">
      {/* Header */}
      <div className="section-header" data-aos="zoom-in">
        <p className="section-tag">What We Offer</p>
        <h2 className="section-title">Gems & Jewellery Services</h2>
        <div className="section-line"></div>
      </div>

      {/* Services card */}
      <ServiceCard />

      {/* Extra Section */}
      <ExtraServices />
    </section>
  );
};
