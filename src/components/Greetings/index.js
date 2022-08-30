import './Greetings.css';

function Greetings({ lang, children }) {
  if (lang === 'de') {
    return (
      <div className="greetings-container">
        <h2>Hallo {children}</h2>
      </div>
    );
  }

  if (lang === 'en') {
    return (
      <div className="greetings-container">
        <h2>Hello {children}</h2>
      </div>
    );
  }

  if (lang === 'es') {
    return (
      <div className="greetings-container">
        <h2>Hola {children}</h2>
      </div>
    );
  }

  if (lang === 'fr') {
    return (
      <div className="greetings-container">
        <h2>Bonjour {children}</h2>
      </div>
    );
  }
}

export default Greetings;
