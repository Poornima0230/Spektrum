import { SpritualGemCards } from "../components/ui/SpritualGemCards";
import "../styles/spritualGem.css";

export const SpiritualGem = () => {
  return (
    <section className="spiritual" id="gems">
      <div className="section-header" data-aos="zoom-in">
        <p className="section-tag">Spiritual & Wellness</p>
        <h2 className="section-title">Sacred Stones & Spiritual Items</h2>
        <div className="section-line"></div>
      </div>
      <SpritualGemCards />
    </section>
  );
};
