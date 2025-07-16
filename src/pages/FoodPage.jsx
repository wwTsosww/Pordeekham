import { useNavigate } from "react-router-dom";
import "../styles/FoodPage.css";



function FoodPage() {
  const navigate = useNavigate();

  const BakeryPage = () => {
    navigate("/bakery");
  };

  return (
<div className="nutrient-background">
  <h1 className="nutrient-title">แนะนำเมนูอาหาร</h1>
  <h2 className="nutrient-subtitle">ครบมื้อ ครบแคล (1200 - 1400/วัน) kcal</h2>

  <div className="nutrient-grid">
    <div className="nutrient-card">
      <h3>อาหารเช้า</h3>
      <h4>300-500 kcal</h4>
      <img src="/images/food/breakfast.jpg" alt="อาหารเช้า" />
      <p>ข้าวต้มหมู + ไข่ต้ม 280 kcal</p>
      <p>หรือ</p>
      <p>แซน</p>
      <p>ข้าวต้มหมู + ไข่ต้ม 280 kcal</p>
      <p>ข้าวต้มหมู + ไข่ต้ม 280 kcal</p>
    </div>

    <div className="nutrient-card">
      <h3>อาหารกลางวัน</h3>
      <h4>300-500 kcal</h4>
      <img src="/images/food/lunch.jpg" alt="อาหารกลางวัน" />
      <p>ข้าวต้มหมู + ไข่ต้ม 280 kcal</p>
      <p>หรือ</p>
      <p>แซน</p>
      <p>ข้าวต้มหมู + ไข่ต้ม 280 kcal</p>
      <p>ข้าวต้มหมู + ไข่ต้ม 280 kcal</p>
    </div>

    <div className="nutrient-card">
      <h3>ของว่าง</h3>
      <h4>300-500 kcal</h4>
      <img src="/images/food/snack.jpg" alt="ของว่าง" />
      <p>ข้าวต้มหมู + ไข่ต้ม 280 kcal</p>
      <p>หรือ</p>
      <p>แซน</p>
      <p>ข้าวต้มหมู + ไข่ต้ม 280 kcal</p>
      <p>ข้าวต้มหมู + ไข่ต้ม 280 kcal</p>
    </div>

    <div className="nutrient-card">
      <h3>อาหารเย็น</h3>
      <h4>300-500 kcal</h4>
      <img src="/images/food/dinner.jpg" alt="อาหารเย็น" />
      <p>ข้าวต้มหมู + ไข่ต้ม 280 kcal</p>
      <p>หรือ</p>
      <p>แซน</p>
      <p>ข้าวต้มหมู + ไข่ต้ม 280 kcal</p>
      <p>ข้าวต้มหมู + ไข่ต้ม 280 kcal</p>
    </div>
  </div>

     <div className="nutrient-info-box">
    <p>
      ปกติเราจะทานได้ประมาณ 1200-2500 แคลอรี่ต่อวัน
      ขึ้นอยู่กับเพศ และไลฟ์สไตล์ของแต่ละคน
    </p>
  </div>

  <button type="button" onClick={BakeryPage} className="Nutrient-button-end">
    หากว่าต้องการทานอาหารนอกเหนือจากนี้. . .  ถัดไป
  </button>
</div>

  );
}

export default FoodPage;
