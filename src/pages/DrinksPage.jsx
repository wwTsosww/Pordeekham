import { useNavigate } from "react-router-dom";
import "../styles/DrinksPage.css";

function DrinksPage() {
  const navigate = useNavigate();

  const goToNutrientPage = () => {
    navigate("/nutrient");
  };

  return (
<div className="nutrient-background">
  <h1 className="nutrient-title">พลังงานในเบเกอรี่และเครื่องดื่ม</h1>

  <div className="nutrient-grid-drinks">
    <div className="nutrient-card-drinks">
      <img src={`${process.env.PUBLIC_URL}/images/food_data/drinks/IMG_6399.JPG`} alt="ของว่าง" />
      <p>ชานมไข่มุก 300-450 kcal</p>
      <p>คาร์บ:60-75 g</p>
      <p>น้ำตาล:35-50 g (9-15 ช้อนชา)</p>
    </div>

    <div className="nutrient-card-drinks">
      <img src={`${process.env.PUBLIC_URL}/images/food_data/drinks/IMG_6400.JPG`} alt="ของว่าง" />
      <p>น้ำอัดลม 140-160 kcal</p>
      <p>คาร์บ:35-40 g</p>
      <p>น้ำตาล:35-39 g (9-10 ช้อนชา)</p>
    </div>

    <div className="nutrient-card-drinks">
      <img src={`${process.env.PUBLIC_URL}/images/food_data/drinks/IMG_6402.JPG`} alt="ของว่าง" />
      <p>น้ำผลไม้ 90-110 kcal</p>
      <p>คาร์บ:22-26 g</p>
      <p>น้ำตาล:18-22 g (4.5-5 ช้อนชา)</p>
    </div>

    <div className="nutrient-card-drinks">
      <img src={`${process.env.PUBLIC_URL}/images/food_data/drinks/IMG_6416.JPG`} alt="ของว่าง" />
      <p>ชาเขียวเย็น 180-250 kcal</p>
      <p>คาร์บ:45-55 g</p>
      <p>น้ำตาล:30-45 g (8-11 ช้อนชา)</p>
    </div>

    <div className="nutrient-card-drinks">
      <img src={`${process.env.PUBLIC_URL}/images/food_data/drinks/IMG_6417.JPG`} alt="ของว่าง" />
      <p>กาแฟเย็นไทย 160-250 kcal</p>
      <p>คาร์บ:30-40 g</p>
      <p>น้ำตาล:20-35 g (5-9 ช้อนชา)</p>
    </div>

    <div className="nutrient-card-drinks">
      <img src={`${process.env.PUBLIC_URL}/images/food_data/drinks/IMG_6418.JPG`} alt="ของว่าง" />
      <p>โกโก้เย็น 250-400 kcal</p>
      <p>คาร์บ:40-60 g</p>
      <p>น้ำตาล:30-45 g (8-11 ช้อนชา)</p>
    </div>
  </div>

  <button type="button" onClick={goToNutrientPage} className="Nutrient-button-end">
    กลับสู่หน้าหลัก
  </button>
</div>

  );
}

export default DrinksPage;
