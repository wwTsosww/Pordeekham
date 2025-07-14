import "../styles/BBmi.css";

function BBmi({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h1>การคำนวณดัชนีมวลกาย</h1>
        <div className="bbmi-image-box">
        <img className="bbmi-image" src={`${process.env.PUBLIC_URL}/images/bmi/bmi_table.JPG`} alt="ตารางคำนวณค่าbmi"/>
        </div>

      <div className="end-text">
        <h>
          ค่า BMI ของผู้ใหญ่ควรมีค่าอยู่ระหว่าง "18.5 - 22.9
          กิโลกรัมต่อตารางเมตร"
        </h>
        <h>กรณีที่พบว่า ดัชนีมวลกายอยู่ในเกณฑ์ผิดปกติ ควรปรึกษาแพทย์หรือทีม</h>
        <h>
          สหสาขา เพื่อพิจารณาการปรับอาหาร รวมถึงการเพิ่มหรือลดจำนวนคาร์โบไฮเดรต
        </h>
        <h>ในแต่ละวันได้</h>
      </div>
          <button className="next-button" onClick={onClose}>
        ปิด
        </button>
        </div>
    </div>
  );
}

export default BBmi;
