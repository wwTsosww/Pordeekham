import "../styles/Credits.css";

function Credits({ onClose }) {
  return (
    <div className="credits-main-box">
      <div className="credits-second-box">
        <button className="credits-exit-button" onClick={onClose}>
          X
        </button>
        <div className="credits-title-box">
          <h1 className="credits-title">จัดทำโดย</h1>
        </div>
        <div className="member-box">
          <div className="member-details">
            <img
              className="member-img"
              src={`${process.env.PUBLIC_URL}/images/member/toprathap_thurarat.png`}
              alt="นพอ.กอปรทรัพย์ ธุรารัตน์"
            ></img>
            <h1>นพอ.กอปรทรัพย์ ธุรารัตน์</h1>
          </div>
        </div>

        <div className="member-box">
          <div className="member-details">
            <img
              className="member-img"
              src={`${process.env.PUBLIC_URL}/images/member/toprathap_thurarat.png`}
              alt="นพอ.กอปรทรัพย์ ธุรารัตน์"
            ></img>
            <h1>นพอ.กอปรทรัพย์ ธุรารัตน์</h1>
          </div>
          <div className="member-details">
            <img
              className="member-img"
              src={`${process.env.PUBLIC_URL}/images/member/thanyaphat_chirochanitkan.png`}
              alt="นพอ.ธันยาภัทร์ จิโรชนิธิกาญจน์"
            ></img>
            <h1>นพอ.ธันยาภัทร์ จิโรชนิธิกาญจน์</h1>
          </div>
          <div className="member-details">
            <img
              className="member-img"
              src={`${process.env.PUBLIC_URL}/images/member/nonthicha_saengtal.png`}
              alt="นพอ.นนทิชา แสงตาล"
            ></img>
            <h1>นพอ.นนทิชา แสงตาล</h1>
          </div>
          <div className="member-details">
            <img
              className="member-img"
              src={`${process.env.PUBLIC_URL}/images/member/nisarat_pluakjai.png`}
              alt="นพอ.นิศารัตน์  ปลุกใจ"
            ></img>
            <h1>นพอ.นิศารัตน์ ปลุกใจ</h1>
          </div>
        </div>

        <div className="member-box">
          <div className="member-details">
            <img
              className="member-img"
              src={`${process.env.PUBLIC_URL}/images/member/benyaporn_bunsomporn.png`}
              alt="นพอ.เบญญภรณ์ บุญสมพร"
            ></img>
            <h1>นพอ.เบญญภรณ์ บุญสมพร</h1>
          </div>
          <div className="member-details">
            <img
              className="member-img"
              src={`${process.env.PUBLIC_URL}/images/member/paphada_keyurwan.png`}
              alt="นพอ.ปภาดา เกยูรวรรณ"
            ></img>
            <h1>นพอ.ปภาดา เกยูรวรรณ</h1>
          </div>
          <div className="member-details">
            <img
              className="member-img"
              src={`${process.env.PUBLIC_URL}/images/member/peerapat_saengyaimani.png`}
              alt="นพอ.พีรพัฒน์ แสงใยมณี"
            ></img>
            <h1>นพอ.พีรพัฒน์ แสงใยมณี</h1>
          </div>
          <div className="member-details">
            <img
              className="member-img"
              src={`${process.env.PUBLIC_URL}/images/member/anany_khorasrisuk.png`}
              alt="นพอ.อนัญญา ขอประเสริฐสุข"
            ></img>
            <h1>นพอ.อนัญญา ขอประเสริฐสุข</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credits;
