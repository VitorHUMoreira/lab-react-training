import './ClickablePicture.css';
import { useState } from 'react';
import max from '../../assets/images/maxence.png';
import maxGlass from '../../assets/images/maxence-glasses.png';

function ClickablePicture({ img, imgClicked }) {
  const [image, setImage] = useState(true);

  function glasses() {
    return setImage(!image);
  }

  return (
    <div>
      <span className="max" onClick={glasses}>
        {image ? (
          <img className="max" src={max} alt=""></img>
        ) : (
          <img className="max" src={maxGlass} alt=""></img>
        )}
      </span>
    </div>
  );
}

export default ClickablePicture;
