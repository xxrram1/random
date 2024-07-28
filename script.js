const randomizeBtn = document.getElementById('randomize');
const randomFoodDisplay = document.getElementById('random-food');
const randomFoodName = document.getElementById('random-food-name');
const foodTypeSelect = document.getElementById('food-type');
const backToTopButton = document.getElementById("backToTop");

const spicyFoods = [
    "แกงเขียวหวานไก่", "พริกแกงหมู", "ผัดกะเพราเนื้อ", "ต้มยำกุ้ง", "ส้มตำ",
    "แกงเผ็ดเป็ดย่าง", "ผัดพริกแกงปลาดุก", "ผัดเผ็ดไก่", "น้ำพริกปลาทู", "ผัดเผ็ดกุ้ง",
    "ผัดเผ็ดหมูป่า", "แกงเผ็ดเนื้อ", "ผัดพริกแกงหน่อไม้", "ผัดพริกแกงหมู", "ปลาราดพริก",
    "แกงส้มผักรวม", "ยำวุ้นเส้น", "ยำแหนม", "ลาบหมู", "ลาบเนื้อ",
    "ลาบไก่", "ลาบปลาดุก", "ส้มตำไทย", "ส้มตำปู", "ยำมาม่า",
    "ยำปลาทู", "ยำไข่ดาว", "ยำรวมมิตรทะเล", "ยำผักกระเฉด", "ยำปลากระป๋อง",
    "ยำวุ้นเส้นทะเล", "ยำมะม่วง", "ยำถั่วพู", "ยำปลาหมึก", "ยำไส้กรอก",
    "ยำสาหร่ายทะเล", "ยำหอยแครง", "ยำกุ้งสด", "ยำปูม้า", "ยำไข่ปลาหมึก",
    "ยำหอยนางรม", "ยำไก่แซ่บ", "ยำหมูยอ", "ยำลูกชิ้น", "ยำไข่เจียว",
    "ยำแหนมสด", "ยำหมูกรอบ", "ยำปลาดุกฟู", "ยำขนมจีน", "ยำไข่ต้ม"
];

const nonSpicyFoods = [
    "ข้าวมันไก่", "ผัดไทย", "ข้าวผัด", "ก๋วยเตี๋ยว", "ไข่เจียว",
    "ผัดผักรวมมิตร", "หมูทอดกระเทียม", "แกงจืดเต้าหู้หมูสับ", "ไข่พะโล้", "ข้าวหมูแดง",
    "ข้าวหมูกรอบ", "ข้าวขาหมู", "ข้าวหน้าเป็ด", "ก๋วยจั๊บ", "บะหมี่เกี๊ยวหมูแดง",
    "ข้าวหน้าไก่", "บะหมี่น้ำ", "ราดหน้า", "ผัดซีอิ๊ว", "สุกี้น้ำ",
    "สุกี้แห้ง", "ก๋วยเตี๋ยวหลอด", "ก๋วยเตี๋ยวคั่วไก่", "ข้าวหน้าไข่ข้น", "ข้าวผัดหมู",
    "ข้าวผัดปู", "ข้าวผัดกุ้ง", "ข้าวผัดแหนม", "ข้าวผัดกุนเชียง", "ข้าวผัดปลาเค็ม",
    "ข้าวผัดพริกเผา", "ข้าวผัดแกงเขียวหวาน", "ข้าวผัดต้มยำ", "ข้าวผัดไข่", "ข้าวผัดพริกแกง",
    "ข้าวผัดน้ำพริก", "ข้าวผัดปลาทู", "ข้าวผัดปูเค็ม", "ข้าวผัดกุ้งสด", "ข้าวผัดหมูย่าง",
    "ข้าวผัดเนื้อ", "ข้าวผัดหมูกรอบ", "ข้าวผัดไข่เค็ม", "ข้าวผัดหมูกระเทียม", "ข้าวผัดผักกระเฉด",
    "ข้าวผัดแหนมสด", "ข้าวผัดหมูสับ", "ข้าวผัดหมูยอ", "ข้าวผัดแหนมไข่เค็ม", "ข้าวผัดพริกแกงหมู"
];

const desserts = [
    "บัวลอย", "ขนมถ้วย", "สังขยา", "ทองหยิบ", "ฝอยทอง",
    "ลอดช่อง", "ขนมชั้น", "ขนมต้ม", "ข้าวเหนียวมะม่วง", "ข้าวเหนียวทุเรียน",
    "ขนมตาล", "ขนมกล้วย", "ขนมเปียกปูน", "ขนมใส่ไส้", "ขนมมัน",
    "ขนมครก", "ขนมชั้นใบเตย", "ขนมเผือก", "ขนมสาลี่", "ขนมตาลใบเตย",
    "ขนมครองแครง", "ขนมโสมนัส", "ขนมเบื้องไทย", "ขนมทองเอก", "ขนมจ่ามงกุฎ",
    "ขนมเกสรลำเจียก", "ขนมละอองเกสร", "ขนมถั่วแปบ", "ขนมบ้าบิ่น", "ขนมข้าวตอก",
    "ขนมช่อม่วง", "ขนมถ้วยฟู", "ขนมถั่วตัด", "ขนมดอกจอก", "ขนมทองม้วน",
    "ขนมปลากริม", "ขนมปั้นสิบ", "ขนมเปียกสาคู", "ขนมโพรงแสม", "ขนมผิง",
    "ขนมเปียกปูนใบเตย", "ขนมเม็ดขนุน", "ขนมเสน่ห์จันทน์", "ขนมลืมกลืน", "ขนมต้มแดง",
    "ขนมลำเจียก", "ขนมลูกชุบ", "ขนมหม้อแกง", "ขนมเรไร", "ขนมกลีบลำดวน"
];

randomizeBtn.addEventListener('click', () => {
    const foodType = foodTypeSelect.value;
    let foodList;
    if (foodType === 'spicy') {
        foodList = spicyFoods;
    } else if (foodType === 'nonSpicy') {
        foodList = nonSpicyFoods;
    } else {
        foodList = desserts;
    }
    const randomIndex = Math.floor(Math.random() * foodList.length);
    const randomFood = foodList[randomIndex];
    randomFoodName.textContent = randomFood;
    randomFoodDisplay.classList.remove('hidden');
});

document.getElementById('randomize-nav').addEventListener('click', () => {
    document.getElementById('random-food-section').classList.remove('hidden');
    document.getElementById('all-menus-section').classList.add('hidden');
});

document.getElementById('viewAll-nav').addEventListener('click', () => {
    document.getElementById('all-menus-section').classList.remove('hidden');
    document.getElementById('random-food-section').classList.add('hidden');
});

function populateMenuList(menuId, menuItems) {
    const menuList = document.getElementById(menuId);
    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        menuList.appendChild(li);
    });
}

populateMenuList('spicy-menus', spicyFoods);
populateMenuList('non-spicy-menus', nonSpicyFoods);
populateMenuList('dessert-menus', desserts);
