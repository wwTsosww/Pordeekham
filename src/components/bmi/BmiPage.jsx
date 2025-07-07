import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../context/UserDataContext';
import BmiForm from './BmiForm';
import BmiResult from './BmiResult';
import BmiPopup from './BmiPopup';
import '../../styles/BmiPage.css';

function BmiPage() {
  // state และ logic เหมือนเดิม
  // ... เช่น bmi, bmr, tdee, imagePath, handleSubmit ฯลฯ

  return (
    <div className="background">
      <div className="body-box">
        <h1 className="body-text">ข้อมูลร่างกาย</h1>
      </div>

      <div className="bmi-box">
        <BmiForm
          gender={gender} setGender={setGender}
          age={age} setAge={setAge}
          weight={weight} setWeight={setWeight}
          height={height} setHeight={setHeight}
          activity={activity} setActivity={setActivity}
          handleSubmit={handleSubmit}
          goToNutrientPage={goToNutrientPage}
          bmi={bmi}
        />

        {bmi !== null && (
          <BmiResult
            gender={gender}
            age={age}
            weight={weight}
            height={height}
            bmi={bmi}
            bmr={bmr}
            tdee={tdee}
          />
        )}
      </div>

      {showPopup && (
        <BmiPopup
          imagePath={imagePath}
          bmi={bmi}
          level={level}
          setShowPopup={setShowPopup}
        />
      )}
    </div>
  );
}

export default BmiPage;
