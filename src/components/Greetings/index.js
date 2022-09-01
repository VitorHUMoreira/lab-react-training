import './Greetings.css';

function Greetings({ lang, children }) {
  if (lang === 'de') {
    return (
      <div className="greetings-container">
        <h2>
          <span>Hallo</span> {children}
        </h2>
      </div>
    );
  }

  if (lang === 'en') {
    return (
      <div className="greetings-container">
        <h2>
          <span>Hello</span> {children}
        </h2>
      </div>
    );
  }

  if (lang === 'es') {
    return (
      <div className="greetings-container">
        <h2>
          <span>Hola</span> {children}
        </h2>
      </div>
    );
  }

  if (lang === 'fr') {
    return (
      <div className="greetings-container">
        <h2>
          <span>Bonjour</span> {children}
        </h2>
      </div>
    );
  }
}

export default Greetings;
