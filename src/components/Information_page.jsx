import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Information_page.css';

function Information_page() {
  const navigate = useNavigate();

  const goToBmiPage = () => {
    navigate('/bmi');
  };

  const goToHome_page = () => {
    navigate('/');
  };

  return (
    <body className='background'>
      <div className='main-box'>
          <div className='button-box'>
            <button onClick={goToBmiPage} className='button-text'>ข้อมูลส่วนบุคคล</button>
          </div>
          <div className='button-box'>
            <button onClick={goToBmiPage} className='button-text'>คำนวณ BMI</button>
          </div>
          <div className='button-box'>
            <button onClick={goToBmiPage} className='button-text'>โภชนาการ</button>
          </div>
          <div className='button-box2'>
            <button onClick={goToHome_page} className='button-text'>เมนู</button>
          </div>
      </div>
    </body>
  );
}

export default Information_page;