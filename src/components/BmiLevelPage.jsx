import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserDataContext';
import '../styles/BmiLevelPage.css';

function Bmi_level_page() {
  const navigate = useNavigate();
  const { userData } = useContext(UserDataContext);
  const { bmi } = userData;

  let level = '';
  let imagePath = '';

  if (bmi < 18.5) {
    level = 'น้ำหนักต่ำกว่าเกณฑ์';
    imagePath = require('../assets/bmi/18.png');
  } else if (bmi < 23) {
    level = 'น้ำหนักอยู่ในเกณฑ์ปกติ';
    imagePath = require('../assets/bmi/22.png');
  } else if (bmi < 25) {
    level = 'น้ำหนักเกินเกณฑ์';
    imagePath = require('../assets/bmi/24.png');
  } else if (bmi < 30) {
    level = 'ภาวะโรคอ้วน - Class I';
    imagePath = require('../assets/bmi/29.png');
  } else {
    level = 'ภาวะโรคอ้วน - Class II หรือ III';
    imagePath = require('../assets/bmi/30.png');
  }

  const goToTDEE = () => {
    navigate('/tdee');
  };

  return (
    <div className="background center-container">
      <div className="bmi-result-box">
        <h1>ผลประเมินระดับ BMI</h1>
        <img src={imagePath} alt={level} className="bmi-image" />
        <h2>BMI: {bmi?.toFixed(2)}</h2>
        <h3>ระดับ: {level}</h3>
        <button onClick={goToTDEE} className="next-button">ถัดไป: คำนวณ TDEE</button>
      </div>
    </div>
  );
}

export default Bmi_level_page;
