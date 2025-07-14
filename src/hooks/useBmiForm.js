// src/hooks/useBmiForm.js
import { useState, useEffect } from "react";
import {
  calculateBmi,
  calculateBmr,
  getActivityMultiplier,
  getBmiLevelAndImage,
} from "../utils/bmiUtils";

export const useBmiForm = (userData, setUserData) => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmr, setBmr] = useState(null);
  const [tdee, setTdee] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [level, setLevel] = useState("");
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    if (userData) {
      setGender(userData.gender || "");
      setAge(userData.age || "");
      setWeight(userData.weight || "");
      setHeight(userData.height || "");
      setActivity(userData.activity || "");
      setBmi(userData.bmi || null);
      setBmr(userData.bmr || null);
      setTdee(userData.tdee || null);
    }
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const w = Number(weight);
    const h = Number(height);
    const a = Number(age);

    if (w > 0 && h > 0 && a > 0 && activity !== "") {
      const bmiValue = calculateBmi(w, h);
      const bmrValue = calculateBmr(gender, w, h, a);
      const multiplier = getActivityMultiplier(activity);
      const tdeeValue = bmrValue * multiplier;

      setBmi(bmiValue);
      setBmr(bmrValue);
      setTdee(tdeeValue);
      setUserData({
        gender,
        age,
        weight,
        height,
        activity,
        bmi: bmiValue,
        bmr: bmrValue,
        tdee: tdeeValue,
      });

      const { level, imagePath } = getBmiLevelAndImage(bmiValue, gender);
      setLevel(level);
      setImagePath(imagePath);

      setShowPopup(true);
    }
  };

  return {
    gender,
    setGender,
    age,
    setAge,
    weight,
    setWeight,
    height,
    setHeight,
    activity,
    setActivity,
    bmi,
    bmr,
    tdee,
    level,
    imagePath,
    showPopup,
    setShowPopup,
    handleSubmit,
  };
};
