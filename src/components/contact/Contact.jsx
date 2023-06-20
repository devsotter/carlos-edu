import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="container-contact">
        <img src="assets/shake.svg" alt="ícone aperto de mãos" />
        <div className="txt-contact">
          <h2>Thank You</h2>
          <p>let's work together?</p>
          <a href="mailto:carlos.4piih@gmail.com">carlos.4piih@gmail.com</a>

        </div>
      </div>
      <div className="copy"><p>Feito à base de cafeína por <a href="https://github.com/devsotter" target="_blank" rel="noopener noreferrer">Nicholas Sotter</a>.</p></div>
    </div>
  );
}
