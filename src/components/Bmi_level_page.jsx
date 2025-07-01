import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserDataContext';

function Bmi_level_page() {
  const navigate = useNavigate();
  const { userData } = useContext(UserDataContext);
  const { bmi, gender, age, weight, height } = userData;

  let level = '';

  if (bmi < 18.5) level = 'น้ำหนักต่ำกว่าเกณฑ์';
  else if (bmi < 23) level = 'น้ำหนักอยู่ในเกณฑ์ปกติ';
  else if (bmi < 25) level = 'น้ำหนักเกินเกณฑ์';
  else if (bmi < 35) level = 'ภาวะโรคอ้วน - Class I';
  else if (bmi < 40) level = 'ภาวะโรคอ้วน - Class II';
  else level = 'ภาวะโรคอ้วน - Class III';

  const goToTDEE = () => {
    navigate('/tdee');
  };

  return (
    <div className='background'>
      <h1>ผลประเมินระดับ BMI</h1>
      <h2>BMI: {bmi?.toFixed(2)}</h2>
      <h3>ระดับ: {level}</h3>
      <button onClick={goToTDEE}>ถัดไป: คำนวณ TDEE</button>
    </div>
  );
}

export default Bmi_level_page;
