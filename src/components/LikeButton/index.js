import './LikeButton.css';
import { useState } from 'react';

function LikeButton() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [likes1, setLikes1] = useState(0);
  const [color1] = useState(colors);
  const [colorIndex1, setColorIndex1] = useState(0);

  function contador1() {
    setLikes1(likes1 + 1);
    setColorIndex1(colorIndex1 + 1);
    if (colorIndex1 === 5) {
      setColorIndex1(0);
    }
  }

  return (
    <button
      className="like-button"
      style={{ backgroundColor: color1[colorIndex1] }}
      onClick={contador1}
    >
      {likes1} Likes
    </button>
  );
}

export default LikeButton;
