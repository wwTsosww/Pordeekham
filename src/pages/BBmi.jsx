import "../styles/HomePage.css";
import "../styles/HomePage.css";

function BBmi() {
  return (
    <div className="credits-main-box">
      <div className="credits-second-box">
        <button className="credits-exit-button" >
          X
        </button>
        <div className="credits-title-box">
            <h className="credits-title">การคำนวณดัชนีมวลกาย</h>
        </div>
        <div className="member-details">
          <img className="member-img"
            src={`${process.env.PUBLIC_URL}/images/bmi/bmi_table.JPG`}
            alt="ตารางคำนวณค่าbmi"
          />
        </div>
        <div className="end-text">
            <h>ค่า BMI ของผู้ใหญ่ควรมีค่าอยู่ระหว่าง "18.5 - 22.9 กิโลกรัมต่อตารางเมตร"</h>
            <h>กรณีที่พบว่า ดัชนีมวลกายอยู่ในเกณฑ์ผิดปกติ ควรปรึกษาแพทย์หรือทีม</h>
            <h>สหสาขา เพื่อพิจารณาการปรับอาหาร รวมถึงการเพิ่มหรือลดจำนวนคาร์โบไฮเดรต</h>
            <h>ในแต่ละวันได้</h>
        </div>
      </div>

      
    </div>

    

  );
}

export default BBmi;
