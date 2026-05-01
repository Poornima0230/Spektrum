import "../styles/spritualGem.css";

export const SpiritualGem = () => {
  const Spiritual = [
    {
      id: 1,
      title: "Rudraksha Collection",
      points: [
        "Rudraksha Malas — wholesale & retail",
        "Rudraksha Mukhis — certified",
        "Rudraksha certification available",
      ],
    },
    {
      id: 2,
      title: "Spiritual Malas",
      points: [
        "Spatik (Crystal Quartz) Malas",
        "Tulasi Malas",
        "Karanguli Malas",
      ],
    },
    {
      id: 3,
      title: "Astrology Services",
      points: [
        "Horoscope consultation",
        "Gemstone recommendations",
        "Astrological remedies",
        "Personalised guidance",
      ],
    },
  ];
  return (
    <section className="spiritual" id="gems">
      <div className="section-header" data-aos="zoom-in">
        <p className="section-tag">Spiritual & Wellness</p>
        <h2 className="section-title">Sacred Stones & Spiritual Items</h2>
        <div className="section-line"></div>
      </div>
      <div className="spiritual-grid">
        {Spiritual.map((curr) => {
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
    </section>
  );
};
