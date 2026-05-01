import "../styles/bullion.css";

export const Bullion = () => {
  const bullion = [
    {
      id: 1,
      symbol: "Au",
      title: "Gold Purchasing & Sales",
      desc: "Buy and sell gold bullion at competitive market rates.",
    },
    {
      id: 2,
      symbol: "Ag",
      title: "Silver Purchasing & Sales",
      desc: "Silver bullion trading — wholesale and retail with accurate assaying.",
    },
    {
      id: 3,
      symbol: "Pt",
      title: "Platinum Services",
      desc: "Platinum purchasing and sales with certified purity verification.",
    },
    {
      id: 4,
      symbol: "☉",
      title: "Melting & Testing",
      desc: "Old gold and silver melting, purity testing, and valuation.",
    },
    {
      id: 5,
      symbol: "§",
      title: "Gold & Silver Schemes",
      desc: "Savings and investment schemes — secure and government-compliant.",
    },
  ];
  return (
    <section className="bullion" id="Bullion">
      <div className="section-header" data-aos="zoom-in">
        <p className="section-tag">Bullion Services</p>
        <h2 className="section-title">Gold · Silver · Platinum</h2>
        <div className="section-line"></div>
      </div>
      <div className="bullion-grid">
        {bullion.map((curr) => {
          return (
            <div className="bullion-card" key={curr.id} data-aos="fade-up">
              <div className="bullion-symbol">
                <p>{curr.symbol}</p>
              </div>
              <p className="bullion-title">
                <strong>{curr.title}</strong>
              </p>
              <p className="bullion-desc">{curr.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
