import './CreditCard.css';
import visaLogo from '../../assets/images/visa.png';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const cardNumber = '**** **** **** ' + number.substr(-4);

  if (type === 'Visa') {
    return (
      <div
        style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
        className="card-container"
      >
        <div className="type-container">
          <img src={visaLogo} alt="" />
        </div>
        <span>{cardNumber}</span>
        <span>
          Expires {expirationMonth}/{expirationYear} {bank}
        </span>
        <span>{owner}</span>
      </div>
    );
  }
}

export default CreditCard;
