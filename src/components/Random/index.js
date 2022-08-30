import './Random.css';

function Random({ min, max }) {
  const result = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div className="random-container">
      <h2>
        Random value between <span>{min}</span> and <span>{max}</span> ={' '}
        <span>{result}</span>
      </h2>
    </div>
  );
}

export default Random;
