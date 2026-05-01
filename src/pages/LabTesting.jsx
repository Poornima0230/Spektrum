import { Slider } from "../components/Slider";
import "../styles/labTesting.css";

export const LabTesting = () => {
  return (
    <section className="labTesting" id="labTesting">
      <div className="section-header" data-aos="zoom-in">
        <p className="section-tag">Spectrum Gem Testing Lab</p>
        <h2 className="section-title">Lab Certification Services</h2>
        <div className="section-line"></div>
      </div>

      <Slider />
    </section>
  );
};
