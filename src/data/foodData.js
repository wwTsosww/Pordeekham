const foodData = {
  protein: {
    title: 'โปรตีน',
    color: '#a48eeb',
    base: { name: 'เนื้ออกไก่ 60 กรัม', image: '/images/chicken.png', energy: '1 โปรตีน' },
    compare: [
      { name: 'ไข่ 1 ฟอง', image: '/images/egg.png', energy: '1 โปรตีน' },
      { name: 'เต้าหู้แข็ง 1/2 ก้อน', image: '/images/tofu.png', energy: '1 โปรตีน' },
    ]
  },
  carb: {
    title: 'คาร์โบไฮเดรต',
    color: '#e2b05e',
    base: { name: 'ข้าวขาว 1/3 ถ้วยตวง', image: '/images/food_data/carbohydrate/whiterice.jpg', energy: '1 คาร์บ' },
    compare: [
      { name: 'ขนมปังโฮลวีต 1 แผ่น', image: '/images/food_data/carbohydrate/whole_wheat_bread.jpg', energy: '1 คาร์บ' },
      { name: 'ขนมจีน 1/2 ถ้วยตวง', image: '/images/food_data/carbohydrate/khanom_chin.jpg', energy: '1 คาร์บ' },
      { name: 'ข้าวกล้อง 1/2 ถ้วยตวง', image: '/images/food_data/carbohydrate/brown_rice.jpg', energy: '1 คาร์บ' },
      { name: 'ข้าวโพดสุก 1/2 ถ้วยตวง', image: '/images/food_data/carbohydrate/cooked_corn.jpg', energy: '1 คาร์บ' },
      { name: 'ข้าวเหนียว 1/4 ถ้วยตวง', image: '/images/food_data/carbohydrate/sticky_rice.jpg', energy: '1 คาร์บ' },
      { name: 'แครกเกอร์ 6 แผ่น', image: '/images/food_data/carbohydrate/crackers.jpg', energy: '1 คาร์บ' },
      { name: 'บะหมี่ 1/3 ถ้วยตวง', image: '/images/food_data/carbohydrate/noodle.jpg', energy: '1 คาร์บ' },
      { name: 'บะหมี่กึ่งสำเร็จรูปสุก 1/3 ถ้วยตวง', image: '/images/food_data/carbohydrate/instant_noodles.jpg', energy: '1 คาร์บ' },
      { name: 'เผือกต้ม 1/2 ถ้วยตวง', image: '/images/food_data/carbohydrate/boiled_taro.jpg', energy: '1 คาร์บ' },
      { name: 'ฟักทองสุก 1 ถ้วยตวง', image: '/images/food_data/carbohydrate/ripepumpkin.jpg', energy: '1 คาร์บ' },
      { name: 'มักกะโรนี 1/3 ถ้วยตวง', image: '/images/food_data/carbohydrate/macaroni.jpg', energy: '1 คาร์บ' },
      { name: 'มันต้ม 1/2 ถ้วยตวง', image: '/images/food_data/carbohydrate/boiled_potatoes.jpg', energy: '1 คาร์บ' },
      { name: 'ลูกมะเดือย 1/2 ถ้วยตวง', image: '/images/food_data/carbohydrate/fig.jpg', energy: '1 คาร์บ' },
      { name: 'วุ้นเส้นลวก 1/2 ถ้วยตวง', image: '/images/food_data/carbohydrate/boiled_glass_noodles.jpg', energy: '1 คาร์บ' },
      { name: 'เส้นก๋วยจั๊บสุก 1/2 ถ้วยตวง', image: '/images/food_data/carbohydrate/rolled_rice_noodles.jpg', energy: '1 คาร์บ' },
      { name: 'เส้นหมี่สุก 1/2 ถ้วยตวง', image: '/images/food_data/carbohydrate/cooked_rice_vermicelli.jpg', energy: '1 คาร์บ' },
      { name: 'เส้นใหญ่ 1/2 ถ้วยตวง', image: '/images/food_data/carbohydrate/fresh_rice_noodles.jpg', energy: '1 คาร์บ' },
    ]
  },
  fat: {
    title: 'ไขมัน',
    color: '#f27d72',
    base: { name: 'น้ำมันพืช 1 ช้อนชา', image: '/images/oil.png', energy: '1 ไขมัน' },
    compare: [
      { name: 'เนย 1 ช้อนชา', image: '/images/butter.png', energy: '1 ไขมัน' },
      { name: 'อะโวคาโด 1/8 ผล', image: '/images/avocado.png', energy: '1 ไขมัน' },
    ]
  }
};

export default foodData;
