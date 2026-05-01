import "../styles/about.css";

export const About = () => {
  const certifications = [
    {
      title: "IGI — International Gemological Institute",
      desc: "Certified lab and grading authority for diamonds and coloured gemstones worldwide.",
    },
    {
      title: "GIA — Gemological Institute of America",
      desc: "The world's foremost authority in gemology — Diploma Diamond Grader.",
    },
    {
      title: "IDI — Indian Diamond Institute, Surat",
      desc: "India's premier diamond trade certification body.",
    },
    {
      title: "SGL — Spektrum Gem Lab",
      desc: "Our in-house certified testing lab maintaining international grading standards since 1998.",
    },
  ];
  return (
    <section className="about" id="about">
      <div className="section-header" data-aos="zoom-in">
        <p className="section-tag">Our Legacy</p>
        <h2 className="section-title">Trusted Gemology Since 1998</h2>
        <div className="section-line"></div>
      </div>

      <div className="about-grid" data-aos="fade-up">
        <div className="about-text">
          <p>
            Spektrum Gems & Jewellers is one of Hyderabad's most trusted names
            in the gem and jewellery trade. Founded in 1998 by
            <strong> M. Srinivasa Rao</strong>, a certified gemologist with
            credentials from IGI, GIA, and IDI (Surat), Spektrum brings
            international standards to every service — from gem testing and
            diamond certification to custom jewellery manufacturing and bullion
            trading.
            <br />
            <br />
            Our in-house <strong>Spectrum Gem Testing Lab</strong> is equipped
            for 12 specialised services including CVD detection, Rudraksha
            certification, and full diamond grading — all maintained to
            international standards since 1998.
          </p>
        </div>
        <div className="about-certs">
          {certifications.map((item, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-title">{item.title}</div>
              <div className="cert-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
