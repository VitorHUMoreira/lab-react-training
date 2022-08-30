import './DriverCard.css';
import Rating from '../Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driver-card-container">
      <div className="driver-card-img">
        <img src={img} alt="" />
      </div>
      <div className="driver-card-infos">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <span>
          {car.model} - {car.licensePlate}
        </span>
      </div>
    </div>
  );
}

export default DriverCard;
