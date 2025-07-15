import { useNavigate } from "react-router-dom";
import "../styles/FoodPage.css";



function FoodPage() {
  const navigate = useNavigate();

  const goToInformation_page = () => {
    navigate("/bmi");
  };

  return (
<div className="nutrient-background">
  <h1 className="nutrient-title">แนะนำเมนูอาหาร</h1>
  <h2 className="nutrient-subtitle">1200 - 1400 kcal</h2>

  <div className="nutrient-grid">
    <div className="nutrient-card">
      <h3>อาหารเช้า</h3>
      <img src="/images/food/breakfast.jpg" alt="อาหารเช้า" />
      <p>ข้าวต้มหมู + ไข่ต้ม 1 ฟอง</p>
    </div>

    <div className="nutrient-card">
      <h3>อาหารกลางวัน</h3>
      <img src="/images/food/lunch.jpg" alt="อาหารกลางวัน" />
      <p>ข้าวกล้อง + ไก่ย่าง + ผักลวก</p>
    </div>

    <div className="nutrient-card">
      <h3>ของว่าง</h3>
      <img src="/images/food/snack.jpg" alt="ของว่าง" />
      <p>โยเกิร์ตไขมันต่ำ + กล้วย 1 ลูก</p>
    </div>

    <div className="nutrient-card">
      <h3>อาหารเย็น</h3>
      <img src="/images/food/dinner.jpg" alt="อาหารเย็น" />
      <p>สลัดอกไก่ + ซุปผัก</p>
    </div>
  </div>

     <div className="nutrient-info-box">
    <p>
      ปกติเราจะทานได้ประมาณ 1200-2500 แคลอรี่ต่อวัน
      ขึ้นอยู่กับเพศ และไลฟ์สไตล์ของแต่ละคน
    </p>
  </div>

  <button type="button" onClick={goToInformation_page} className="Nutrient-button-end">กลับสู่หน้าหลัก</button>
</div>

  );
}

export default FoodPage;
