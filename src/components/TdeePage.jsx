import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserDataContext';

function TDEE_page() {
  const navigate = useNavigate();
  const { userData } = useContext(UserDataContext);
  const { gender, age, weight, height } = userData;

  const [activity, setActivity] = useState('');
  const [bmr, setBmr] = useState(null);
  const [tdee, setTdee] = useState(null);

  if (!gender || !age || !weight || !height) {
    return (
      <div className="background">
        <h1>ไม่พบข้อมูลที่ใช้คำนวณ</h1>
        <button onClick={() => navigate('/')}>กลับหน้าหลัก</button>
      </div>
    );
  }

  const calculateBMR = () => {
    const w = Number(weight);
    const h = Number(height);
    const a = Number(age);

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

    setTdee(bmrValue * multiplier);
  };

  const goToNutrientPage = () => {
    navigate('/nutrient', { state: { bmr, tdee } });
  };

  return (
    <div className="background center-container">
      <h1>คำนวณ BMR และ TDEE</h1>
      <p><strong>เพศ:</strong> {gender}</p>
      <p><strong>อายุ:</strong> {age}</p>
      <p><strong>น้ำหนัก:</strong> {weight} kg</p>
      <p><strong>ส่วนสูง:</strong> {height} cm</p>

      <label>
        <h2>เลือกระดับการออกกำลังกาย</h2>
        <select value={activity} onChange={(e) => setActivity(e.target.value)} required>
          <option value="">-- เลือกระดับ --</option>
          <option value="none">ไม่ออกกำลังกายหรือกิจกรรมเบามาก</option>
          <option value="light">ออกกำลังกายเบาๆ (1-2 ครั้ง/สัปดาห์)</option>
          <option value="moderate">ออกกำลังกายปานกลาง (3-5 ครั้ง/สัปดาห์)</option>
          <option value="heavy">ออกกำลังกายหนัก (6-7 ครั้ง/สัปดาห์)</option>
          <option value="very_heavy">ออกกำลังกายหนักมาก (วันละ 2 ครั้งขึ้นไป)</option>
        </select>
      </label>

      <br />
      <button onClick={calculateBMR} disabled={!activity}>คำนวณ</button>

      {bmr !== null && (
        <div>
          <h3>BMR ของคุณคือ: {bmr.toFixed(2)} kcal</h3>
          <h3>TDEE ของคุณคือ: {tdee.toFixed(2)} kcal</h3>
          <button onClick={goToNutrientPage}>ถัดไป: ดูสารอาหาร</button>
        </div>
      )}
    </div>
  );
}

export default TDEE_page;
