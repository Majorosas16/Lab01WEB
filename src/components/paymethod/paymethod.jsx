import './paymethod.css';

const PaymentMethod = ({ imgSrc, alt }) => {
  return (
    <div className="payment-method">
      <img src={imgSrc} alt={alt} />
    </div>
  );
};

export default PaymentMethod;
