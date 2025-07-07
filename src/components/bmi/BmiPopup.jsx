function BmiPopup({ imagePath, bmi, level, setShowPopup }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h1>ผลประเมินระดับ BMI</h1>
        <img src={imagePath} alt={level} className="bmi-image" />
        <h2>BMI: {bmi?.toFixed(2)}</h2>
        <h3>ระดับ: {level}</h3>
        <button onClick={() => setShowPopup(false)} className="next-button">ปิด</button>
      </div>
    </div>
  );
}

export default BmiPopup;
