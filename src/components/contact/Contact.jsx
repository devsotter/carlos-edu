import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="tito">
        <h1>contact</h1>
      </div>
      <div className="con">
        <div className="box-contato">
          <div className="thank">
            <img className="shake" src="assets/shake.svg" alt="ícone aperto de mãos" />
            <div className="txt-thank">
              <h2>Thank You</h2>
              <p>let's work together?</p>
              <a href="mailto:carlos.4piih@gmail.com">carlos.4piih@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
