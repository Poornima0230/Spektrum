import "../styles/contact.css";
import owner from "../assets/spekturm.png";

export const Contact = () => {
  return (
    <section className="contact">
      <div className="section-header" data-aos="zoom-in">
        <p className="section-tag">Get In Touch</p>
        <h2 className="section-title">Visit Us Today</h2>
        <p className="section-sub-tag">
          We'd love to assist you with your gems, jewellery, or certification
          needs
        </p>
      </div>
      <div className="contact-full" data-aos="fade-up">
        <div className="contact-grid">
          <p className="contact-name">
            <strong>M. Srinivasa Rao</strong>
          </p>
          <p className="contact-tag">
            Gemologist · SGL Certified · IGI / GIA / IDI
          </p>
          <div className="contact-info">
            <p>
              BUSINESS <span>Spektrum Gems & Jewellers</span>
            </p>
            <p>
              EMAIL{" "}
              <span>
                <a
                  href="
                spectrum.hyd@gmail.com"
                >
                  spectrum.hyd@gmail.com
                </a>
              </span>
            </p>
            <p>
              CITY <span>Hyderabad, Telangana, India</span>
            </p>
          </div>
        </div>
        <img
          src={owner}
          alt="owner logo"
          className="owner"
          // data-aos="fade-up"
        />
      </div>
    </section>
  );
};
