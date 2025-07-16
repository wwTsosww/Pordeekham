import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserDataContext";
import { menuData } from "../data/menuData"; // ✅ นำเข้าข้อมูลเมนู
import "../styles/FoodPage.css";

function FoodPage() {
  const navigate = useNavigate();
  const { userData } = useContext(UserDataContext);

  const BakeryPage = () => navigate("/bakery");

  // ✅ ฟังก์ชันเลือกช่วงแคลอรีจาก BMR
  const getCalorieRange = () => {
    if (!userData?.bmr) return "1200-1400";
    if (userData.bmr < 1500) return "1200-1400";
    if (userData.bmr < 1800) return "1500-1700";
    return "1800-2000";
  };

  const calorieRange = getCalorieRange();
  const selectedMenu = menuData[calorieRange];

  return (
    <div className="nutrient-background">
      {/* ✅ แสดงช่วงแคลอรี */}
      <h1 className="nutrient-title">แนะนำเมนูอาหาร</h1>
      <h2 className="nutrient-subtitle">
        ครบมื้อ ครบแคล ({calorieRange}/วัน) kcal
      </h2>

      {/* ✅ วนลูปเมนูจาก menuData */}
      <div className="nutrient-grid">
        {selectedMenu.map((meal, idx) => (
          <div key={idx} className="nutrient-card">
            <h3>{meal.meal}</h3>
            <h4>{meal.kcal}</h4>
            <img src={`${process.env.PUBLIC_URL}${meal.img}`} alt={meal.meal} />

            {meal.items.map((food, i) => (
              <p key={i}>
                {i === 1 && <span className="or-text">หรือ</span>} {food}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="nutrient-info-box">
        <p>
          ปกติเราจะทานได้ประมาณ 1200-2500 แคลอรี่ต่อวัน
          ขึ้นอยู่กับเพศ และไลฟ์สไตล์ของแต่ละคน
        </p>
      </div>

      <button type="button" onClick={BakeryPage} className="Nutrient-button-end">
        หากต้องการทานอาหารนอกเหนือจากนี้... ถัดไป
      </button>
    </div>
  );
}

export default FoodPage;
