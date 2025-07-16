// NutrientPage.jsx
import { useContext, useState } from "react";
import { UserDataContext } from "../context/UserDataContext";
import "../styles/NutrientPage.css";
import foodData from "../data/foodData";
import { calcMacro } from "../utils/calc";
import NutrientPopup from "../components/NutrientPopup";
import { useNavigate } from "react-router-dom";

function NutrientPage() {
  const { userData } = useContext(UserDataContext);
  const { bmr, tdee } = userData || {};
  const navigate = useNavigate();

  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState("protein");
  const [compareIndex, setCompareIndex] = useState(0);

  if (!bmr || !tdee) {
    return <h2>ไม่พบข้อมูล BMR และ TDEE</h2>;
  }

  const openPopup = (type) => {
    setSelectedTab(type);
    setCompareIndex(0);
    setPopupVisible(true);
  };

  const goToFoodPage = () => {
    navigate("/FoodPage");
  };

  return (
    <div className="nutrient-background">
      <h1 className="nutrient-title">สัดส่วนพลังงานจากสารอาหาร (ต่อวัน)</h1>
      <div className="nutrient-row">
        {["protein", "carb", "fat"].map((type) => (
          <div
            key={type}
            className="nutrient-card"
            onClick={() => openPopup(type)}
            style={{
              borderTop: `10px solid ${foodData[type].color}`,
              cursor: "pointer",
            }}
          >
            <div className="nutrient-image-wrapper">
              <img
                src={`${process.env.PUBLIC_URL}${foodData[type].image}`}
                alt={foodData[type].title}
                className="nutrient-image"
              />
            </div>
            <h3>{foodData[type].title}</h3>
            <p>
              BMR:{" "}
              {calcMacro(
                bmr,
                type === "protein" ? 30 : type === "carb" ? 55 : 15
              )}{" "}
              kcal
            </p>
            <p>
              TDEE:{" "}
              {calcMacro(
                tdee,
                type === "protein" ? 30 : type === "carb" ? 55 : 15
              )}{" "}
              kcal
            </p>
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

      <button type="button" onClick={goToFoodPage} className="Nutrient-button">
        ถัดไป
      </button>
    </div>
  );
}

export default NutrientPage;
