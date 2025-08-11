import "./card.css";

function PlanCard({ label, labelColor, title, price, subPrice, benefits, primaryBtn, secondaryBtn, terms }) {
  return (
    <div className="plan-card">
      {label && (
        <div
          className="plan-label"
          style={{ backgroundColor: labelColor }}
        >
          {label}
        </div>
      )}

      <h3 className="plan-title">{title}</h3>
      <p className="plan-price">{price}</p>
      {subPrice && <p className="plan-subprice">{subPrice}</p>}

      <ul className="plan-benefits">
        {benefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <button
        className="primary-btn"
        style={{
          backgroundColor: primaryBtn.bg,
          color: primaryBtn.color
        }}
      >
        {primaryBtn.text}
      </button>

      <button className="secondary-btn">
        {secondaryBtn.text}
      </button>

      <p className="plan-terms">{terms}</p>
    </div>
  );
}

export default PlanCard;
