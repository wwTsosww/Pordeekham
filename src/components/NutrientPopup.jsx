import "../styles/NutrientPopup.css";

function NutrientPopup({
  foodData,
  selectedTab,
  setSelectedTab,
  compareIndex,
  setCompareIndex,
  onClose,
}) {
  const handlePrev = () => {
    setCompareIndex(
      (prev) =>
        (prev - 1 + foodData[selectedTab].compare.length) %
        foodData[selectedTab].compare.length
    );
  };
  const handleNext = () => {
    setCompareIndex(
      (prev) => (prev + 1) % foodData[selectedTab].compare.length
    );
  };

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
              style={{
                backgroundColor:
                  selectedTab === type ? foodData[type].color : "#eee",
                color: selectedTab === type ? "white" : "black",
                borderRadius: "10px",
                padding: "10px 20px",
                marginRight: "1rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              {foodData[type].title}
            </button>
          ))}
        </div>

        <div className="popup-content-1">
          <div className="popup-box">
            <img
              src={`${process.env.PUBLIC_URL}${foodData[selectedTab].base.image}`}
              alt={foodData[selectedTab].base.name}
            />
            <h4>{foodData[selectedTab].base.name}</h4>
            <p>{foodData[selectedTab].base.energy}</p>
          </div>

          <div className="popup-box">
            <img
              src={`${process.env.PUBLIC_URL}${foodData[selectedTab].compare[compareIndex].image}`}
              alt={foodData[selectedTab].compare[compareIndex].name}
            />
            <h4>{foodData[selectedTab].compare[compareIndex].name}</h4>
            <p>{foodData[selectedTab].compare[compareIndex].energy}</p>
            <div className="popup-arrows">
              <button onClick={handlePrev}>⬆</button>
              <button onClick={handleNext}>⬇</button>
            </div>
          </div>
        </div>

        <button className="popup-close" onClick={onClose}>
          ปิด
        </button>
      </div>
    </div>
  );
}

export default NutrientPopup;
