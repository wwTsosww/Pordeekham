import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserDataContext';
import '../styles/Bmi_page.css';

function Bmi_page() {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const { setUserData } = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const w = Number(weight);
    const h = Number(height);
    if (w > 0 && h > 0) {
      const bmi = w / Math.pow(h / 100, 2);
      setBmiResult(bmi);
      setUserData({ gender, age, weight, height, bmi }); // <== บันทึกข้อมูล
    }
  };

  const handleEvaluate = () => {
    if (bmiResult !== null) {
      navigate('/bmi-level'); // <== ไม่ต้องส่ง state
    }
  };

  return (
    <div className='background'>
      <div className='body-box'>
        <h1 className='body-text'>ข้อมูลร่างกาย</h1>
      </div>
      <div className='bmi-box'>
        <form onSubmit={handleSubmit} className="bmi-informetion">
          {/* เพศ */}
          <label className='informetion-box'>
            <h1 className='informetion-text'>เพศ</h1>
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
              <option value="">-- เลือกเพศ --</option>
              <option value="ชาย">ชาย</option>
              <option value="หญิง">หญิง</option>
              <option value="อื่นๆ">อื่นๆ</option>
            </select>
          </label>
          <br />
          {/* อายุ */}
          <label className='informetion-box'>
            <h1 className='informetion-text'>อายุ</h1>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
          </label>
          <br />
          {/* น้ำหนัก */}
          <label className='informetion-box'>
            <h1 className='informetion-text'>น้ำหนัก (kg)</h1>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
          </label>
          <br />
          {/* ส่วนสูง */}
          <label className='informetion-box'>
            <h1 className='informetion-text'>ส่วนสูง (cm)</h1>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
          </label>
          <br />
          <button type="submit">คำนวณ</button>
        </form>

        <div className='bmi-result'>
          {bmiResult !== null && (
            <div className="section-box">
              <h2 className="section-title">ผลลัพธ์ BMI</h2>
              <div className="result-group"><strong>เพศ:</strong> {gender}</div>
              <div className="result-group"><strong>อายุ:</strong> {age}</div>
              <div className="result-group"><strong>น้ำหนัก:</strong> {weight} kg</div>
              <div className="result-group"><strong>ส่วนสูง:</strong> {height} cm</div>
              <div className="result-group"><strong>BMI:</strong> {bmiResult.toFixed(2)}</div>
              <button onClick={handleEvaluate}>ถัดไป</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bmi_page;
