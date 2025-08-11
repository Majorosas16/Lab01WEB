import './allPlans.css';

function PremiumBenefits({ benefits }) {
  return (
    <section className="premium-benefits">
      <h2>Todos los planes Premium <br /> incluyen lo siguiente:</h2>
      <ul>
        {benefits.map((item, index) => (
          <li key={index}>
            <span className="check-icon">✔</span> {item.text}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PremiumBenefits;
