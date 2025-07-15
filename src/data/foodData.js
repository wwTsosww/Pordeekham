const foodData = {
  protein: {
    title: "โปรตีน",
    color: "#a48eeb",
    image: "/images/food_data/logo/pa.png",
    base: {
      name: "เนื้ออกไก่ 60 กรัม",
      image: "/images/food_data/pro/pa_0.jpg",
      energy: "1 โปรตีน",
    },
    compare: [
      {
        name: "เต้าหู้แข็ง 1/2 ก้อน",
        image: "/images/food_data/pro/pa_1.PNG",
        energy: "1 โปรตีน",
      },
      {
        name: "เต้าหู้แข็ง 1/2 ก้อน",
        image: "/images/food_data/pro/pa_2.PNG",
        energy: "1 โปรตีน",
      },
      {
        name: "เต้าหู้แข็ง 1/2 ก้อน",
        image: "/images/food_data/pro/pa_3.PNG",
        energy: "1 โปรตีน",
      },
    ],
  },
  carb: {
    title: "คาร์โบไฮเดรต",
    color: "#e2b05e",
    image: "/images/food_data/logo/car.png",
    base: {
      name: "ข้าวขาว 1/3 ถ้วยตวง",
      image: "/images/food_data/carbohydrate/whiterice.jpg",
      energy: "1 คาร์บ",
    },
    compare: [
      {
        name: "ขนมปังโฮลวีต 1 แผ่น",
        image: "/images/food_data/carbohydrate/whole_wheat_bread.jpg",
        energy: "1 คาร์บ",
      },
      {
        name: "ขนมจีน 1/2 ถ้วยตวง",
        image: "/images/food_data/carbohydrate/khanom_chin.jpg",
        energy: "1 คาร์บ",
      },
      {
        name: "ข้าวกล้อง 1/2 ถ้วยตวง",
        image: "/images/food_data/carbohydrate/brown_rice.jpg",
        energy: "1 คาร์บ",
      },
      {
        name: "ข้าวโพดสุก 1/2 ถ้วยตวง",
        image: "/images/food_data/carbohydrate/cooked_corn.jpg",
        energy: "1 คาร์บ",
      },
      {
        name: "ข้าวเหนียว 1/4 ถ้วยตวง",
        image: "/images/food_data/carbohydrate/sticky_rice.jpg",
        energy: "1 คาร์บ",
      },
      {
        name: "แครกเกอร์ 6 แผ่น",
        image: "/images/food_data/carbohydrate/crackers.jpg",
        energy: "1 คาร์บ",
      },
      {
        name: "บะหมี่ 1/3 ถ้วยตวง",
        image: "/images/food_data/carbohydrate/noodle.jpg",
        energy: "1 คาร์บ",
      },
      {
        name: "บะหมี่กึ่งสำเร็จรูปสุก 1/3 ถ้วยตวง",
        image: "/images/food_data/carbohydrate/instant_noodles.jpg",
        energy: "1 คาร์บ",
      },
      {
        name: "เผือกต้ม 1/2 ถ้วยตวง",
        image: "/images/food_data/carbohydrate/boiled_taro.jpg",
        energy: "1 คาร์บ",
      },
      {
        name: "ฟักทองสุก 1 ถ้วยตวง",
        image: "/images/food_data/carbohydrate/ripepumpkin.jpg",
        energy: "1 คาร์บ",
      },
      {
        name: "มักกะโรนี 1/3 ถ้วยตวง",
        image: "/images/food_data/carbohydrate/macaroni.jpg",
        energy: "1 คาร์บ",
      },
      {
        name: "มันต้ม 1/2 ถ้วยตวง",
        image: "/images/food_data/carbohydrate/boiled_potatoes.jpg",
        energy: "1 คาร์บ",
      },
      {
        name: "ลูกมะเดือย 1/2 ถ้วยตวง",
        image: "/images/food_data/carbohydrate/fig.jpg",
        energy: "1 คาร์บ",
      },
      {
        name: "วุ้นเส้นลวก 1/2 ถ้วยตวง",
        image: "/images/food_data/carbohydrate/boiled_glass_noodles.jpg",
        energy: "1 คาร์บ",
      },
      {
        name: "เส้นก๋วยจั๊บสุก 1/2 ถ้วยตวง",
        image: "/images/food_data/carbohydrate/rolled_rice_noodles.jpg",
        energy: "1 คาร์บ",
      },
      {
        name: "เส้นหมี่สุก 1/2 ถ้วยตวง",
        image: "/images/food_data/carbohydrate/cooked_rice_vermicelli.jpg",
        energy: "1 คาร์บ",
      },
      {
        name: "เส้นใหญ่ 1/2 ถ้วยตวง",
        image: "/images/food_data/carbohydrate/fresh_rice_noodles.jpg",
        energy: "1 คาร์บ",
      },
    ],
  },
fat: {
  title: "ไขมัน",
  color: "#f27d72",
  image: "/images/food_data/logo/ki.PNG",
  base: {
    name: "น้ำมันพืช 1 ช้อนชา",
    image: "/images/oil.png",
    energy: "1 ไขมัน",
  },
  mono: [ // ไขมันอิ่มตัวเชิงเดี่ยว
    { name: "น้ำมันถั่วลิสง", image: "/images/food_data/ki/HDL/a/น้ำมันถั่วลิสง.JPG", energy: "1 ไขมัน" },
    { name: "น้ำมันมะกอก", image: "/images/food_data/ki/HDL/a/น้ำมันมะกอก.JPG", energy: "1 ไขมัน" },
    { name: "น้ำมันเมล็ดองุ่น", image: "/images/food_data/ki/HDL/a/น้ำมันเมล็ดองุ่น.JPG", energy: "1 ไขมัน" },
    { name: "อะโวคาโด", image: "/images/food_data/ki/HDL/a/อะโวคาโด.JPG", energy: "1 ไขมัน" }
  ],
  poly: [ // ไขมันอิ่มตัวเชิงซ้อน
    { name: "น้ำมันข้าวโพด", image: "/images/food_data/ki/HDL/b/น้ำมันข้าวโพด.JPG", energy: "1 ไขมัน" },
    { name: "น้ำมันงา", image: "/images/food_data/ki/HDL/b/น้ำมันงา.JPG", energy: "1 ไขมัน" },
    { name: "น้ำมันถั่วเหลือง", image: "/images/food_data/ki/HDL/b/น้ำมันถั่วเหลือง.JPG", energy: "1 ไขมัน" },
    { name: "น้ำมันทานตะวัน", image: "/images/food_data/ki/HDL/b/น้ำมันทานตะวัน.JPG", energy: "1 ไขมัน" }
  ],
  saturated: [ // ไขมันอิ่มตัว
    { name: "ไขมันมะพร้าว", image: "/images/food_data/ki/LDL/c/ไขมันมะพร้าว.JPG", energy: "1 ไขมัน" },
    { name: "ไขมันสัตว์", image: "/images/food_data/ki/LDL/c/ไขมันสัตว์.JPG", energy: "1 ไขมัน" },
    { name: "ครีมเทียม", image: "/images/food_data/ki/LDL/c/ครีมเทียม.JPG", energy: "1 ไขมัน" },
    { name: "เนย เนยแข็ง", image: "/images/food_data/ki/LDL/c/เนย เนยแข็ง.JPG", energy: "1 ไขมัน" }
  ],
  trans: [ // ไขมันทรานส์
    { name: "ช็อกโกแลต", image: "/images/food_data/ki/LDL/d/ช็อกโกแลต.JPG", energy: "1 ไขมัน" },
    { name: "เนยถั่ว", image: "/images/food_data/ki/LDL/d/เนยถั่ว.JPG", energy: "1 ไขมัน" },
    { name: "มาการีน", image: "/images/food_data/ki/LDL/d/มาการีน.JPG", energy: "1 ไขมัน" },
    { name: "มายองเนส", image: "/images/food_data/ki/LDL/d/มายองเนส.JPG", energy: "1 ไขมัน" }
  ]
}
};

export default foodData;
