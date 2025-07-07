import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../styles/NutrientPage.css';
import foodData from '../data/foodData';
import { calcMacro } from '../utils/calc';
import NutrientPopup from '../components/NutrientPopup';


function NutrientPage() {
  const location = useLocation();
  const { bmr, tdee } = location.state || {};

  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState('protein');
  const [compareIndex, setCompareIndex] = useState(0);

  if (!bmr || !tdee) {
    return <h2>ไม่พบข้อมูล BMR และ TDEE</h2>;
  }

  const openPopup = (type) => {
    setSelectedTab(type);
    setCompareIndex(0);
    setPopupVisible(true);
  };

  return (
    <div className="background">
      <h1>สัดส่วนพลังงานจากสารอาหาร</h1>
      <div className="nutrient-row">
        {['protein', 'carb', 'fat'].map((type) => (
          <div
            key={type}
            className="nutrient-card"
            onClick={() => openPopup(type)}
            style={{ borderTop: `10px solid ${foodData[type].color}`, cursor: 'pointer' }}
          >
            <div className="nutrient-color-box"></div>
            <h3>{foodData[type].title}</h3>
            <p>BMR: {calcMacro(bmr, type === 'protein' ? 30 : type === 'carb' ? 55 : 15)} kcal</p>
            <p>TDEE: {calcMacro(tdee, type === 'protein' ? 30 : type === 'carb' ? 55 : 15)} kcal</p>
          </div>
        ))}
      </div>

      {popupVisible && (
        <NutrientPopup
          foodData={foodData}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          compareIndex={compareIndex}
          setCompareIndex={setCompareIndex}
          onClose={() => setPopupVisible(false)}
        />
      )}
    </div>
  );
}

export default NutrientPage;
