import { useNavigate } from "react-router-dom";
import "../styles/BakeryPage.css";



function BakeryPage() {
  const navigate = useNavigate();

  const goToDrinksPage = () => {
    navigate("/drinks");
  };

  return (
<div className="nutrient-background">
  <h1 className="nutrient-title">พลังงานในเบเกอรี่และเครื่องดื่ม</h1>

  <div className="nutrient-grid-bakery">
    <div className="nutrient-card-bakery">
      <img src={`${process.env.PUBLIC_URL}/images/food_data/bakery/IMG_6420.JPG`} alt="ของว่าง" />
      <p>คุกกี้เนย/ช็อกโกแลต 200-250 kcal</p>
      <p>คาร์บ:25-30 g</p>
      <p>น้ำตาล:15-20 g (4-5 ช้อนชา)</p>
    </div>

    <div className="nutrient-card-bakery">
      <img src={`${process.env.PUBLIC_URL}/images/food_data/bakery/IMG_6405.JPG`} alt="ของว่าง" />
      <p>ขนมปีงปิ้งเนยนม 220-280 kcal</p>
      <p>คาร์บ:30-40 g</p>
      <p>น้ำตาล:18-25 g (4-6 ช้อนชา)</p>
    </div>

    <div className="nutrient-card-bakery">
      <img src={`${process.env.PUBLIC_URL}/images/food_data/bakery/IMG_6406.JPG`} alt="ของว่าง" />
      <p>บราวนี่ช็อกโกแลต 250-350 kcal</p>
      <p>คาร์บ:30-40 g</p>
      <p>น้ำตาล:20-30 g (5-7 ช้อนชา)</p>
    </div>

    <div className="nutrient-card-bakery">
      <img src={`${process.env.PUBLIC_URL}/images/food_data/bakery/IMG_6407.JPG`} alt="ของว่าง" />
      <p>ฮันนี่โทสต์ 650-1000 kcal</p>
      <p>คาร์บ:80-120 g</p>
      <p>น้ำตาล:40-60 g (10-15 ช้อนชา)</p>
    </div>

    <div className="nutrient-card-bakery">
      <img src={`${process.env.PUBLIC_URL}/images/food_data/bakery/IMG_6419.JPG`} alt="ของว่าง" />
      <p>โดนัทน้ำตาล 250-300 kcal</p>
      <p>คาร์บ:30-35 g</p>
      <p>น้ำตาล:15-20 g (4-5 ช้อนชา)</p>
    </div>

    <div className="nutrient-card-bakery">
      <img src={`${process.env.PUBLIC_URL}/images/food_data/bakery/IMG_6410.JPG`} alt="ของว่าง" />
      <p>ครัวซองต์เนย 400-500 kcal</p>
      <p>คาร์บ:25-35 g</p>
      <p>น้ำตาล:4-8 g (1-2 ช้อนชา)</p>
    </div>

    <div className="nutrient-card-bakery">
      <img src={`${process.env.PUBLIC_URL}/images/food_data/bakery/IMG_6411.JPG`} alt="ของว่าง" />
      <p>คัพเค้ก 300-400 kcal</p>
      <p>คาร์บ:40-50 g</p>
      <p>น้ำตาล:25-35 g (6-9 ช้อนชา)</p>
    </div>

    <div className="nutrient-card-bakery">
      <img src={`${process.env.PUBLIC_URL}/images/food_data/bakery/IMG_6412.JPG`} alt="ของว่าง" />
      <p>ชีสเค้ก 320-450 kcal</p>
      <p>คาร์บ:25-35 g</p>
      <p>น้ำตาล:20-30 g (5-7.5 ช้อนชา)</p>
    </div>

    <div className="nutrient-card-bakery">
      <img src={`${process.env.PUBLIC_URL}/images/food_data/bakery/IMG_6413.JPG`} alt="ของว่าง" />
      <p>เอแคลร์ 200-280 kcal</p>
      <p>คาร์บ:25-35 g</p>
      <p>น้ำตาล:15-25 g (4-6 ช้อนชา)</p>
    </div>

    <div className="nutrient-card-bakery">
      <img src={`${process.env.PUBLIC_URL}/images/food_data/bakery/IMG_6429.JPG`} alt="ของว่าง" />
      <p>ไอศรีม 160-180 kcal/ลูก</p>
      <p>คาร์บ:14-20 g</p>
      <p>น้ำตาล:12-16 g (3-4 ช้อนชา)</p>
    </div>
  </div>

  <button type="button" onClick={goToDrinksPage} className="Nutrient-button-end">
    ถัดไป
  </button>
</div>

  );
}

export default BakeryPage;
