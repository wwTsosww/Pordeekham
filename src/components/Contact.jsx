import "../styles/Contact.css";

function Contact({ onClose }) {
  return (
    <div className="contact-main-box">
      <div className="contact-second-box">
        <button className="contact-exit-button" onClick={onClose}>
          X
        </button>
        <div className="contact-title-box">
          <h1 className="contact-title">ติดต่อสอบถาม</h1>
          <div className="contact-second-box1"></div>
        </div>
        <div className="contact-details">
          <h1 className="contact-box">ห้องตรวจโภชนบำบัด โทร.</h1>
          <h1 className="contact-mobile">02-534-7504</h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
