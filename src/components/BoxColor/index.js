import './BoxColor.css';

function BoxColor({ r, g, b }) {
  function colorToHex(color) {
    let hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? '0' + hexadecimal : hexadecimal;
  }

  function rgbToHex(red, green, blue) {
    return '#' + colorToHex(red) + colorToHex(green) + colorToHex(blue);
  }

  return (
    <div
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
      className="boxcolor-container"
    >
      <h2>
        rgb({r}, {g}, {b})
      </h2>
      <h2>{rgbToHex(r, g, b)}</h2>
    </div>
  );
}

export default BoxColor;
