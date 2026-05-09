import spiritual from "../../data/spritualgem.json";

export const SpritualGemCards = () => {
  return (
    <div className="spiritual-grid">
      {spiritual.map((curr) => {
        return (
          <div className="spiritual-card" key={curr.id} data-aos="fade-up">
            <p className="spiritual-title">
              <strong>{curr.title}</strong>
            </p>
            <ul>
              {curr.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
