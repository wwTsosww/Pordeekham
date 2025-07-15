import "../styles/NutrientPopup.css";

function NutrientPopup({
  foodData,
  selectedTab,
  setSelectedTab,
  compareIndex,
  setCompareIndex,
  onClose,
}) {
  // 👉 ป้องกัน error ถ้า selectedTab === fat
  const hasCompare = selectedTab !== "fat";

  const handlePrev = () => {
    if (!hasCompare) return;
    setCompareIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    if (!hasCompare) return;
    setCompareIndex((prev) =>
      Math.min(prev + 1, foodData[selectedTab].compare.length - 1)
    );
  };

  const isFirst = compareIndex === 0;
  const isLast =
    hasCompare &&
    compareIndex === foodData[selectedTab].compare.length - 1;

  return (
    <div className="popup-overlay">
      <div className="popup-window">
        {/* ✅ Tabs */}
        <div className="popup-tabs">
          {["protein", "carb", "fat"].map((type) => (
            <button
              key={type}
              onClick={() => {
                setSelectedTab(type);
                setCompareIndex(0);
              }}
              className={`popup-tab ${selectedTab === type ? "active" : ""} ${type}`}
            >
              {foodData[type].title}
            </button>
          ))}
        </div>

        {/* ✅ Protein / Carb Layout */}
        {hasCompare && (
          <div className="popup-content-compare">
            {/* ฝั่งซ้าย: Base */}
            <div className="popup-box">
              <img
                src={`${process.env.PUBLIC_URL}${foodData[selectedTab].base.image}`}
                alt={foodData[selectedTab].base.name}
              />
              <h4>{foodData[selectedTab].base.name}</h4>
              <p>{foodData[selectedTab].base.energy}</p>
            </div>

            {/* ฝั่งขวา: รูปใหญ่ + ลูกศร */}
            <div className="popup-box popup-right-big">
              <img
                src={`${process.env.PUBLIC_URL}${foodData[selectedTab].compare[compareIndex].image}`}
                alt={foodData[selectedTab].compare[compareIndex].name}
                className="popup-big-image"
              />

              <div className="popup-arrows-side">
                {/* ปุ่มซ้าย โผล่เมื่อไม่ใช่รูปแรก */}
                {!isFirst && (
                  <button className="arrow-btn left" onClick={handlePrev}>
                    ⬅
                  </button>
                )}

                {/* ปุ่มขวา โผล่จนกว่าจะถึงรูปสุดท้าย */}
                {!isLast && (
                  <button className="arrow-btn right" onClick={handleNext}>
                    ➡
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ✅ Fat Layout พิเศษ */}
        {selectedTab === "fat" && (
 <div className="popup-fat-layout">
    <h3 className="fat-title">
      ไขมัน 1 ส่วน = น้ำมันพืช 1 ช้อนชา (45 kcal)
    </h3>

    <div className="fat-two-column">
      {/* ✅ ฝั่งซ้าย HDL */}
      <div className="fat-side">
        <h3 className="fat-side-title">ไขมันดี (HDL)</h3>
        <p className="fat-side-desc">
          ไขมันดีช่วยลดคอเลสเตอรอลในเลือด ลดความเสี่ยงโรคหัวใจ
          พบมากในน้ำมันพืชและถั่วต่างๆ
        </p>

        {/* กล่องบน - Mono */}
        <div className="fat-category">
          <h4>ไขมันอิ่มตัวเชิงเดี่ยว</h4>
          <div className="fat-grid">
            {foodData.fat.mono.map((item, idx) => (
              <div key={idx} className="fat-item">
                <img
                  src={`${process.env.PUBLIC_URL}${item.image}`}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <small>{item.energy}</small>
              </div>
            ))}
          </div>
        </div>

        {/* กล่องล่าง - Poly */}
        <div className="fat-category">
          <h4>ไขมันอิ่มตัวเชิงซ้อน</h4>
          <div className="fat-grid">
            {foodData.fat.poly.map((item, idx) => (
              <div key={idx} className="fat-item">
                <img
                  src={`${process.env.PUBLIC_URL}${item.image}`}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <small>{item.energy}</small>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ ฝั่งขวา LDL */}
      <div className="fat-side">
        <h3 className="fat-side-title">ไขมันเลว (LDL)</h3>
        <p className="fat-side-desc">
          ไขมันเลวเพิ่มความเสี่ยงการอุดตันหลอดเลือดและโรคหัวใจ
          พบในเนื้อสัตว์ติดมัน เนย และของทอด
        </p>

        {/* กล่องบน - Saturated */}
        <div className="fat-category">
          <h4>ไขมันอิ่มตัว</h4>
          <div className="fat-grid">
            {foodData.fat.saturated.map((item, idx) => (
              <div key={idx} className="fat-item">
                <img
                  src={`${process.env.PUBLIC_URL}${item.image}`}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <small>{item.energy}</small>
              </div>
            ))}
          </div>
        </div>

        {/* กล่องล่าง - Trans */}
        <div className="fat-category">
          <h4>ไขมันทรานส์</h4>
          <div className="fat-grid">
            {foodData.fat.trans.map((item, idx) => (
              <div key={idx} className="fat-item">
                <img
                  src={`${process.env.PUBLIC_URL}${item.image}`}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <small>{item.energy}</small>
              </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ปุ่มปิด */}
        <button className="popup-close-btn" onClick={onClose}>
          ปิด
        </button>
      </div>
    </div>
  );
}

export default NutrientPopup;
