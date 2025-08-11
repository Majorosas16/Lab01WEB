import "./questions.css";

function FAQItem({ question }) {
  return (
    <div className="faq-item">
      <div className="faq-question">
        <span>{question}</span>
        <span className="arrow">⌄</span>
      </div>
    </div>
  );
}

export default FAQItem;

