import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import Contact from "../components/Contact";
import Credits from "../components/Credits";
import BMR from "../components/BMR";
import { useState } from "react";

function Home_page() {
  const navigate = useNavigate();

  const goToInformation_page = () => {
    navigate("/bmi");
  };
  const [showContact, setShowContact] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
  const [showBMR, setShowBMR] = useState(false);

  return (
    <div className="background-home">
      <div className="main-box">
        <div className="logo"></div>
        <div className="secon-box">
          <div className="title-box">
            <h1 className="title-text">พอดีคำ</h1>
          </div>
          <div className="welcome-box">
            <h1 className="welcome-text">
              กินดีทุกวัน แข็งแรงทุกวัย
            </h1>
          </div>
          <div className="button-box-home">
            <button onClick={goToInformation_page} className="button-text-home">
              Start
            </button>
          </div>
          <div className="button-box-orter">
            <button onClick={() => setShowCredits(true)} className="button-a">
              จัดทำโดย
            </button>
            <button onClick={() => setShowContact(true)} className="button-b">
              ติดต่อสอบถาม
            </button>
          </div>
        </div>
      </div>
      {showContact && <Contact onClose={() => setShowContact(false)} />}
      {showCredits && <Credits onClose={() => setShowCredits(false)} />}
      {showBMR && <BMR onClose={() => setShowBMR(false)} />}
    </div>
  );
}

export default Home_page;
