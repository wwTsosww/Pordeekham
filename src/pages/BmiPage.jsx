import { useState, useContext, useEffect } from 'react';
import { UserDataContext } from '../context/UserDataContext';
import { useNavigate } from 'react-router-dom';
import '../styles/BmiPage.css';

function BmiPage() {
  const navigate = useNavigate();
  const { setUserData, userData } = useContext(UserDataContext);

  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activity, setActivity] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmr, setBmr] = useState(null);
  const [tdee, setTdee] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (userData) {
      setGender(userData.gender || '');
      setAge(userData.age || '');
      setWeight(userData.weight || '');
      setHeight(userData.height || '');
      setActivity(userData.activity || '');
      setBmi(userData.bmi || null);
      setBmr(userData.bmr || null);
      setTdee(userData.tdee || null);
    }
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const w = Number(weight);
    const h = Number(height);
    const a = Number(age);

    if (w > 0 && h > 0 && a > 0 && activity !== '') {
      const bmiValue = w / Math.pow(h / 100, 2);
      setBmi(bmiValue);

      let bmrValue = 0;
      if (gender === 'หญิง') {
        bmrValue = 665 + (9.6 * w) + (1.9 * h) - (4.7 * a);
      } else if (gender === 'ชาย') {
        bmrValue = 66 + (13.7 * w) + (5 * h) - (6.8 * a);
      } else {
        bmrValue = ((665 + 66) / 2) + ((9.6 + 13.7) / 2) * w + ((1.9 + 5) / 2) * h - ((4.7 + 6.8) / 2) * a;
      }
      setBmr(bmrValue);

      let multiplier = 1.2;
      if (activity === 'light') multiplier = 1.375;
      else if (activity === 'moderate') multiplier = 1.55;
      else if (activity === 'heavy') multiplier = 1.725;
      else if (activity === 'very_heavy') multiplier = 1.9;

      const tdeeValue = bmrValue * multiplier;
      setTdee(tdeeValue);

      setUserData({ gender, age, weight, height, activity, bmi: bmiValue, bmr: bmrValue, tdee: tdeeValue });

      setShowPopup(true);
    }
  };

  let level = '';
let imagePath = '';
if (bmi !== null) {
  let imageFile = '';
  if (bmi < 18.5) {
    level = 'น้ำหนักต่ำกว่าเกณฑ์';
    imageFile = '18.PNG';
  } else if (bmi < 22.9) {
    level = 'น้ำหนักอยู่ในเกณฑ์ปกติ';
    imageFile = '22.PNG';
  } else if (bmi < 24.9) {
    level = 'น้ำหนักเกินเกณฑ์';
    imageFile = '24.PNG';
  } else if (bmi < 34.9) {
    level = 'ภาวะโรคอ้วน - Class I';
    imageFile = '34.PNG';
  } else if (bmi < 39.9) {
    level = 'ภาวะโรคอ้วน - Class II';
    imageFile = '39.PNG';
  } else {
    level = 'ภาวะโรคอ้วน - Class III';
    imageFile = '40.PNG';
  }

  const genderFolder =
    gender === 'ชาย' ? 'male' :
    gender === 'หญิง' ? 'female' :
    'other'; // คุณสามารถสร้างโฟลเดอร์ other/ เพื่อกรณีไม่ระบุเพศ

  try {
    imagePath = require(`../assets/bmi/${genderFolder}/${imageFile}`);
  } catch (err) {
    imagePath = require(`../assets/bmi/${imageFile}`); // fallback
  }
}

  const goToNutrientPage = () => {
    navigate('/nutrient', { state: { bmr, tdee } });
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
              <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">-- เลือกเพศ --</option>
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
                <option value="อื่นๆ">อื่นๆ</option>
              </select>
            </label>

            <label className="informetion-box">
              <h1 className="informetion-text">อายุ</h1>
              <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
            </label>

            <label className="informetion-box">
              <h1 className="informetion-text">น้ำหนัก (kg)</h1>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
            </label>

            <label className="informetion-box">
              <h1 className="informetion-text">ส่วนสูง (cm)</h1>
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
            </label>

            <label className="informetion-box">
              <h1 className="informetion-text">กิจกรรม</h1>
              <select value={activity} onChange={(e) => setActivity(e.target.value)} required>
                <option value="">-- เลือกระดับ --</option>
                <option value="none">ไม่ออกกำลังกายหรือกิจกรรมเบามาก</option>
                <option value="light">ออกกำลังกายเบาๆ (1-2 ครั้ง/สัปดาห์)</option>
                <option value="moderate">ออกกำลังกายปานกลาง (3-5 ครั้ง/สัปดาห์)</option>
                <option value="heavy">ออกกำลังกายหนัก (6-7 ครั้ง/สัปดาห์)</option>
                <option value="very_heavy">ออกกำลังกายหนักมาก (วันละ 2 ครั้งขึ้นไป)</option>
              </select>
            </label>
          </div>

          <button type="submit">คำนวณ</button>
          {bmi !== null && (
            <button type="button" onClick={goToNutrientPage} className="next-button" style={{ marginTop: '1rem' }}>
              ถัดไป: ดูสารอาหาร
            </button>
          )}
        </form>

        {bmi !== null && (
          <div className="bmi-result">
            <div className="section-box">
              <h2 className="section-title">ผลลัพธ์</h2>
              <div className="gg">
                <div className="result-group"><strong>เพศ:</strong> {gender}</div>
                <div className="result-group"><strong>อายุ:</strong> {age}</div>
                <div className="result-group"><strong>น้ำหนัก:</strong> {weight} kg</div>
                <div className="result-group"><strong>ส่วนสูง:</strong> {height} cm</div>
                <div className="result-group"><strong>BMI:</strong> {bmi.toFixed(2)}</div>
                <div className="result-group"><strong>BMR:</strong> {bmr.toFixed(2)} kcal</div>
                <div className="result-group"><strong>TDEE:</strong> {tdee.toFixed(2)} kcal</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h1>ผลประเมินระดับ BMI</h1>
            <img src={imagePath} alt={level} className="bmi-image" />
            <h2>BMI: {bmi?.toFixed(2)}</h2>
            <h3>ระดับ: {level}</h3>
            <button onClick={() => setShowPopup(false)} className="next-button">ปิด</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BmiPage;
