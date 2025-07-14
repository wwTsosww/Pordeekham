import React from "react";
import { useNavigate } from "react-router-dom";

function BmiPopup({ bmi, level, imagePath, onClose }) {

  const navigate = useNavigate();

  const bbmi = () => {
    navigate("/bbmi");
  };
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="contact-exit-button" onClick={onClose}>
          X
        </button>
        <h1>ผลประเมินระดับ BMI</h1>
        <img src={imagePath} alt={level} className="bmi-image" />
        <h2>BMI: {bmi?.toFixed(2)}</h2>
        <h3>ระดับ: {level}</h3>
        <button onClick={bbmi} className="next-button">
          ถัดไป
        </button>
      </div>
    </div>
  );
}

export default BmiPopup;
