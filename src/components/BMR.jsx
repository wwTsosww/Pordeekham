import { useContext } from "react";
import { UserDataContext } from "../context/UserDataContext";
import "../styles/BMR.css";

function BMR({ onClose }) {
  const { userData } = useContext(UserDataContext);
  const { bmi, bmr, tdee } = userData || {};

  return (
    <div className="BMR-main-box">
      <div className="BMR-second-box">
        <button className="BMR-exit-button" onClick={onClose}>
          X
        </button>

        <div className="BMR-title-box">
          <h1 className="BMR-title-text">คำอธิบายเกณฑ์</h1>
        </div>

        <div className="BMR-bubble">
          <h>วันนี้ขอเสนอ. . . .</h>
        </div>

        <div className="BMR-third-box">
          <div className="BMR-third-box-1">
            <img
              className="BMR-img"
              src={`${process.env.PUBLIC_URL}/images/food_data/logo/nurse.PNG`}
              alt="BMR-img"
            />
          </div>

          <div className="BMR-info-box">
            <div className="BMR-box">
              <div className="BMR-box-details">BMI (Body Mass Index) เป็นการวัดทางสถิติที่ใช้ประเมินน้ำหนักตัวเทียบกับส่วนสูง</div>
              <div className="BMR-box-details">BMR (Basal Metabolic Rate)คือ อัตราการเผาผลาญพื้นฐาน เป็นตัวบ่งบอกถึงปริมาณพลังงานพื้นฐานที่ร่างกายต้องการในแต่ละวัน</div>
              <div className="BMR-box-details">TDEE (Total Daily Energy Expenditure) ซึ่งหมายถึงปริมาณพลังงานที่ร่างกายต้องการทั้งหมดในแต่ละวัน รวมกับกิจกรรมที่ทำในแต่ละวันนั่นเอง</div>
            </div>
            <div className="BMR-end-text">
              <p>
                -การลดน้ำหนักควรลดพลังงานลงวันละประมาณ 500 แคลอรี่
              </p>
              <p>
                -ห้ามลดพลังงานน้อยกว่าค่า BMR ของร่างกาย
              </p>
              <p>
                -หากได้รับพลังงานน้อยเกินไปร่างกายจะลดการเผาผลาญทำให้ลดน้ำหนักยากขึ้น
              </p>
            </div>
          </div>
        </div>
        <div className="BMR-more-button" onClick={() => window.open("https://nutrilite.co.th/th/article/what-is-bmr#:~:text=...", "_blank")}>
          <h>เพิ่มเติม</h>
        </div>
      </div>
    </div>
  );
}

export default BMR;
