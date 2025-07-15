import { useState, useContext } from "react";
import { UserDataContext } from "../context/UserDataContext";
import { useNavigate } from "react-router-dom";
import { useBmiForm } from "../hooks/useBmiForm";
import "../styles/BmiPage.css";
import BmiPopup from "../components/BmiPopup";
import BMR from "../components/BMR";
import BBmi from "../components/BBmi";

function BmiPage() {
  const { setUserData, userData } = useContext(UserDataContext);
  const navigate = useNavigate();

  const {
    gender,
    setGender,
    age,
    setAge,
    weight,
    setWeight,
    height,
    setHeight,
    activity,
    setActivity,
    bmi,
    bmr,
    tdee,
    level,
    imagePath,
    showPopup,
    setShowPopup,
    handleSubmit,
  } = useBmiForm(userData, setUserData);

  const goToNutrientPage = () => {
    navigate("/nutrient", { state: { bmr, tdee } });
  };
  const [showBMR, setShowBMR] = useState(false);
  const [showBBmi, setShowBBmi] = useState(false);

  const handlePopupNext = () => {
  setShowPopup(false);       // ปิด popup แรก
  setTimeout(() => {
    setShowBBmi(true);       // รอจนปิดก่อนแล้วค่อยเปิดอันใหม่
  }, 100);                   // delay สั้นๆ ป้องกันซ้อน
};

  return (
    <div className="background">
      <div className="body-box">
        <h1 className="body-text">ข้อมูลร่างกาย</h1>
      </div>

      <div className="bmi-box">
        <form onSubmit={handleSubmit} className="bmi-informetion">
          <h2 className="section-title">คำนวณ BMI</h2>
          <div className="gg">
            <label className="informetion-box">
              <h1 className="informetion-text">เพศ</h1>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">-- เลือกเพศ --</option>
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
              </select>
            </label>

            <label className="informetion-box">
              <h1 className="informetion-text">อายุ</h1>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </label>

            <label className="informetion-box">
              <h1 className="informetion-text">น้ำหนัก (kg)</h1>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </label>

            <label className="informetion-box">
              <h1 className="informetion-text">ส่วนสูง (cm)</h1>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </label>

            <label className="informetion-box">
              <h1 className="informetion-text">กิจกรรม</h1>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                required
              >
                <option value="">-- เลือกระดับ --</option>
                <option value="none">ไม่ออกกำลังกายหรือกิจกรรมเบามาก</option>
                <option value="light">
                  ออกกำลังกายเบาๆ (1-2 ครั้ง/สัปดาห์)
                </option>
                <option value="moderate">
                  ออกกำลังกายปานกลาง (3-5 ครั้ง/สัปดาห์)
                </option>
                <option value="heavy">
                  ออกกำลังกายหนัก (6-7 ครั้ง/สัปดาห์)
                </option>
                <option value="very_heavy">
                  ออกกำลังกายหนักมาก (วันละ 2 ครั้งขึ้นไป)
                </option>
              </select>
            </label>
          </div>

          <button className="bmi-button-0">คำนวณ</button>
          
          {bmi !== null && (
            <button
              type="button"
              onClick={() => setShowBMR(true)}
              className="bmi-button-1"
            >
              คำอธิบายเกณฑ์
            </button>
          )}
        </form>

        {bmi !== null && (
          <div className="bmi-result">
            <h2 className="section-title">ผลลัพธ์</h2>

            <div className="gg">
              <div className="result-group">
                <strong>เพศ:</strong> {gender}
              </div>
              <div className="result-group">
                <strong>อายุ:</strong> {age}
              </div>
              <div className="result-group">
                <strong>น้ำหนัก:</strong> {weight} kg
              </div>
              <div className="result-group">
                <strong>ส่วนสูง:</strong> {height} cm
              </div>
              <div className="result-group">
                <strong>BMI:</strong> {bmi.toFixed(2)}
              </div>
              <div className="result-group">
                <strong>BMR:</strong> {bmr.toFixed(2)} kcal
              </div>
              <div className="result-group">
                <strong>TDEE:</strong> {tdee.toFixed(2)} kcal
              </div>
            </div>
          </div>
        )}
        {showBMR && <BMR onClose={() => setShowBMR(false)} />}
        {showBBmi && <BBmi onClose={() => setShowBBmi(false)} />}
      </div>
      {bmi !== null && (
              <button
                type="button"
                onClick={goToNutrientPage}
                className="bmi-button-2"
              >
                ถัดไป
              </button>
            )}

      {showPopup && (
        <BmiPopup
          bmi={bmi}
          level={level}
          imagePath={imagePath}
          onClose={() => setShowPopup(false)}
          onNext={handlePopupNext}
        />
      )}
    </div>
  );
}

export default BmiPage;
