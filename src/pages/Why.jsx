import "../styles/why.css";

import { WhyCards } from "../components/ui/WhyCards";
export const Why = () => {
  return (
    <section className="why" id="why">
      <div className="section-header" data-aos="zoom-in">
        <p className="section-tag">Why Choose Us</p>
        <h2 className="section-title">Our Commitments</h2>
        <div className="section-line"></div>
      </div>
      <WhyCards />
    </section>
  );
};
