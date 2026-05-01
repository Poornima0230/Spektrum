export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content" data-aos="fade-up">
        <p className="hero1">Trusted Diamond & Gemstone Testing Lab</p>
        <h1 className="hero2">Precision in Every</h1>
        <h1 className="hero3">Facet & Carat</h1>
        <p className="hero-sub">
          {" "}
          International-standard grading, certification, and authentication for
          diamonds and precious gemstones.
        </p>

        <div className="badge-row">
          <span className="badge">IGI Certified</span>
          <span className="badge">GIA Certified</span>
          <span className="badge">IDI · Surat</span>
          <span className="badge">SGL Certified</span>
          <span className="badge">Since 1998</span>
        </div>
        <button className="hero-cta">
          <a href="#services">Explore Our Services</a>
        </button>
      </div>
    </div>
  );
};
