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
      <img
        src={image ? max : maxGlass}
        alt=""
        onClick={glasses}
        className="max"
      />
    </div>
  );
}

export default ClickablePicture;
