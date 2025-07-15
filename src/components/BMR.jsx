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
          <h1 className="BMR-title-text">BMR</h1>
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
              <div className="BMR-box-details">BMI: {bmi.toFixed(2)}</div>
              <div className="BMR-box-details">BMR: {bmr.toFixed(2)}</div>
              <div className="BMR-box-details">TDEE: {tdee.toFixed(2)}</div>
            </div>
            <div className="BMR-end-text">
              <h>
                หากต้องการลดน้ำหนัก แนะนำให้ลดปริมาณพลังงานให้น้อยกว่าที่ร่างกายใช้วันละ
              </h>
              <h>
                ประมาณ 500 แคลอรี่ แต่เมื่อลบออก 500 แคลอรี่แล้ว ห้ามน้อยกว่าค่า BMR
                เพราะจะทำให้
              </h>
              <h>
                ร่างกายได้รับพลังงานน้อยเกินไป
                เมื่อร่างกายเรียนรู้ว่าได้รับพลังงานน้อยมาก ก็จะไม่ยอมใช้
              </h>
              <h>
                พลังงานตามปกติ อาจส่งผลต่อระบบเผาผลาญ
              </h>
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
