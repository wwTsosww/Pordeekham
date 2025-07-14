export function calculateBmi(weight, height) {
  return weight / Math.pow(height / 100, 2);
}

export function calculateBmr(gender, weight, height, age) {
  if (gender === "หญิง") {
    return 665 + 9.6 * weight + 1.9 * height - 4.7 * age;
  } else if (gender === "ชาย") {
    return 66 + 13.7 * weight + 5 * height - 6.8 * age;
  }
  return (
    (665 + 66) / 2 +
    ((9.6 + 13.7) / 2) * weight +
    ((1.9 + 5) / 2) * height -
    ((4.7 + 6.8) / 2) * age
  );
}

export function getActivityMultiplier(activity) {
  const levels = {
    none: 1.2,
    light: 1.375,
    moderate: 1.55,
    heavy: 1.725,
    very_heavy: 1.9,
  };
  return levels[activity] || 1.2;
}

export function getBmiLevelAndImage(bmi, gender) {
  let level = "";
  let file = "";

  if (bmi < 18.5) {
    level = "น้ำหนักต่ำกว่าเกณฑ์";
    file = "18.PNG";
  } else if (bmi < 22.9) {
    level = "น้ำหนักอยู่ในเกณฑ์ปกติ";
    file = "22.PNG";
  } else if (bmi < 24.9) {
    level = "น้ำหนักเกินเกณฑ์";
    file = "24.PNG";
  } else if (bmi < 34.9) {
    level = "ภาวะโรคอ้วน - Class I";
    file = "34.PNG";
  } else if (bmi < 39.9) {
    level = "ภาวะโรคอ้วน - Class II";
    file = "39.PNG";
  } else {
    level = "ภาวะโรคอ้วน - Class III";
    file = "40.PNG";
  }

  const genderFolder =
    gender === "ชาย" ? "male" : gender === "หญิง" ? "female" : "other";

  let imagePath;
  try {
    imagePath = require(`../assets/bmi/${genderFolder}/${file}`);
  } catch {
    imagePath = require(`../assets/bmi/${file}`);
  }

  return { level, imagePath };
}
