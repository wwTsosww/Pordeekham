import { useLocation } from 'react-router-dom';
import '../styles/NutrientPage.css';

function NutrientPage() {
  const location = useLocation();
  const { bmr, tdee } = location.state || {};

  if (!bmr || !tdee) {
    return <h2>ไม่พบข้อมูล BMR และ TDEE</h2>;
  }

  const calcMacro = (value, percent) => (value * percent / 100).toFixed(2);

  return (
    <div className="background center-container">
      <h1>สัดส่วนพลังงานจากสารอาหาร</h1>
      <div className="nutrient-row">
        <div className="nutrient-card protein">
          <div className="nutrient-color-box"></div>
          <h3>โปรตีน</h3>
          <p>BMR: {calcMacro(bmr, 30)} kcal</p>
          <p>TDEE: {calcMacro(tdee, 30)} kcal</p>
        </div>
        <div className="nutrient-card carb">
          <div className="nutrient-color-box"></div>
          <h3>คาร์โบไฮเดรต</h3>
          <p>BMR: {calcMacro(bmr, 55)} kcal</p>
          <p>TDEE: {calcMacro(tdee, 55)} kcal</p>
        </div>
        <div className="nutrient-card fat">
          <div className="nutrient-color-box"></div>
          <h3>ไขมัน</h3>
          <p>BMR: {calcMacro(bmr, 15)} kcal</p>
          <p>TDEE: {calcMacro(tdee, 15)} kcal</p>
        </div>
      </div>
    </div>
  );
}

export default NutrientPage;
