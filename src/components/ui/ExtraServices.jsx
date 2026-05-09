import extra from "../../data/extraServices.json";

export const ExtraServices = () => {
  return (
    <div className="extra-section">
      <h2 className="extra-title" data-aos="zoom-in">
        More Details
      </h2>

      <ul className="extra">
        {extra.map((curr, index) => (
          <li key={index}>
            <div className="extra-card" data-aos="fade-up">
              <h3>{curr.title}</h3>
              <p>{curr.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
