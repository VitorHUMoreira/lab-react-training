import './IdCard.css';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="idcard-container">
      <div className="idcard-picture">
        <img src={picture} alt="" />
      </div>
      <div className="idcard-infos">
        <h3>
          First name: <span>{firstName}</span>
        </h3>
        <h3>
          Last name: <span>{lastName}</span>
        </h3>
        <h3>
          Gender: <span>{gender}</span>
        </h3>
        <h3>
          Height: <span>{height}</span>
        </h3>
        <h3>
          Birth: <span>{birth}</span>
        </h3>
      </div>
    </div>
  );
}

export default IdCard;
