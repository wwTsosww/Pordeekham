import { useContext } from "react";
import { UserDataContext } from "../context/UserDataContext"; // อย่าลืม path
import "../styles/BMR.css";

function BMR({ onClose }) {
  const { userData } = useContext(UserDataContext);
  const { bmi, bmr, tdee } = userData || {};
  return (
    <div className="credits-main-box">
      <div className="credits-second-box">
        <button className="credits-exit-button" onClick={onClose}>
          X
        </button>
        <div className="credits-title-box">
          <h1 className="credits-title">BMR</h1>
        </div>
        <div>
          <div className="BMR-dcotext">
            <h>วันนี้ขอเสอน. . . .</h>
          </div>
          <div className="hyper-box">
            <img
              className="BMR-doc"
              src={`${process.env.PUBLIC_URL}/images/food_data/logo/nurse.PNG`}
              alt="doc"
            ></img>
            <div className="BMR-box">
              <div className="BMR-box-details">
                <h>BMI:</h>
                <h></h>
                {bmi.toFixed(2)}
              </div>
              <div className="BMR-box-details">
                <h>BMR:</h>
                <h></h>
                {bmr.toFixed(2)}
              </div>
              <div className="BMR-box-details">
                <h>TDEE:</h>
                <h></h>
                {tdee.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        <div className="end-text">
          <h>
            หากต้องการลดน้ำหนัก
            แนะนำให้ลดปริมาณพลังงานให้น้อยกว่าที่ร่างกายใช้วันละ
          </h>
          <h>
            ประมาณ 500 แคลอรี่ แต่เมื่อลบออก 500 แคลอรี่แล้ว ห้ามน้อยกว่าค่าBMR
            เพราะจะทำให้
          </h>
          <h>
            ร่างกายได้รับพลังงานน้อยเกินไป
            เมื่อร่างกายเรียนรู้ว่าได้รับพลังงานน้อยมาก ก็จะไม่ยอมใช้
          </h>
          <h>พลังงานตามปกติ อาจส่งผลต่อระบบเผาผลาญ</h>
        </div>
      </div>
    </div>
  );
}

export default BMR;
