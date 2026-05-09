import bullion from "../../data/bullion.json";

export const BullionCard = () => {
  return (
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
  );
};
