import React from 'react';

function BmiForm({
  gender, setGender,
  age, setAge,
  weight, setWeight,
  height, setHeight,
  activity, setActivity,
  handleSubmit,
  goToNutrientPage,
  bmi
}) {
  return (
    <form onSubmit={handleSubmit} className="bmi-informetion">
      <h2 className="section-title">คำนวณ BMI</h2>
      <div className="gg">
        {/* ... Label ทั้งหมดเหมือนเดิม */}
      </div>

      <button type="submit">คำนวณ</button>
      {bmi !== null && (
        <button type="button" onClick={goToNutrientPage} className="next-button" style={{ marginTop: '1rem' }}>
          ถัดไป: ดูสารอาหาร
        </button>
      )}
    </form>
  );
}

export default BmiForm;
