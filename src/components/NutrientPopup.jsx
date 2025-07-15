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
    hasCompare && compareIndex === foodData[selectedTab].compare.length - 1;

  return (
    <div className="popup-overlay">
      <div className="popup-window">
        <div className="popup-tabs">
          {["protein", "carb", "fat"].map((type) => (
            <button
              key={type}
              onClick={() => {
                setSelectedTab(type);
                setCompareIndex(0);
              }}
              className={`popup-tab ${
                selectedTab === type ? "active" : ""
              } ${type}`}
            >
              {foodData[type].title}
            </button>
          ))}
        </div>

        {hasCompare && (
          <div className="popup-content-compare">
            <div className="popup-box">
              <img
                src={`${process.env.PUBLIC_URL}${foodData[selectedTab].base.image}`}
                alt={foodData[selectedTab].base.name}
              />
              <h4>{foodData[selectedTab].base.name}</h4>
              <p>{foodData[selectedTab].base.energy}</p>
            </div>

            <div className="popup-box popup-right-big">
              <img
                src={`${process.env.PUBLIC_URL}${foodData[selectedTab].compare[compareIndex].image}`}
                alt={foodData[selectedTab].compare[compareIndex].name}
                className="popup-big-image"
              />

              <div className="popup-arrows-side">
                {!isFirst && (
                  <button className="arrow-btn left" onClick={handlePrev}>
                    ⬅
                  </button>
                )}

                {!isLast && (
                  <button className="arrow-btn right" onClick={handleNext}>
                    ➡
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {selectedTab === "fat" && (
          <div className="popup-fat-layout">
            <div className="fat-title-box">
              <h3 className="fat-title">
                น้ำมัน 1 ส่วน = 1 ช้อนชา (โดยประมาณ) ไม่มีคาร์โบไฮเดรต และโปรตีน
              </h3>
              <h3 className="fat-title">
                มีไขมัน 5 กรัม ให้พลังงาน 45 kcal (กิโลแคลอรี่)
              </h3>
            </div>
            <div className="fat-two-column">
              <div className="fat-side">
                <h3 className="fat-side-title">ไขมันดี (HDL)</h3>
                <h1 className="fat-side-title-1">Hight Density Lipoprotein</h1>
                <p className="fat-side-desc">
                  มีประโยชน์ต่อร่างกายทำหน้าที่กำจัดคอเลสเตอรอลชนิดไม่ดีที่สะสมอยู่ตามหลอดเลือด
                  ลดความเสี่ยงโรคหัวใจ ภาวะกล้ามเนื้อหัวใจขาดเลือด
                  และโรคหลอดเลือดหัวใจได้
                </p>

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
                      </div>
                    ))}
                  </div>
                </div>

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
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="fat-side">
                <h3 className="fat-side-title">ไขมันไม่ดี (LDL)</h3>
                <h1 className="fat-side-title-1">Low Density Lipoprotein</h1>
                <p className="fat-side-desc">
                  หากสะสมมากจะทำให้เกิดตะกอนในหลอดเลือดซึ่งอาจส่งผลทำให้เลือดไปเลี้ยงหัวใจไม่เพียงพอเป็นสาเหตุทำให้เสียชีวิตกระทันหันหรือเป็นอัมพาตได้
                </p>

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
                      </div>
                    ))}
                  </div>
                </div>

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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <button className="popup-close-btn" onClick={onClose}>
          ปิด
        </button>
      </div>
    </div>
  );
}

export default NutrientPopup;
