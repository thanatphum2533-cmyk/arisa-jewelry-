let PRODUCTS = [
  {
    "id": "AJ-N01",
    "category": "necklaces",
    "name": "สร้อยคอเงินแท้ ลายบ็อกซ์เชนอิตาลี",
    "sub": "เงินแท้ 92.5%, ขัดเงาโรเดียม",
    "price": 890,
    "weight": "4.5 กรัม",
    "sizing": "ความยาว 16 / 18 / 20 นิ้ว",
    "badge": "ขายดี",
    "image": "assets/p1.jpg",
    "desc": "สร้อยคอเงินแท้ 92.5% ลายบ็อกซ์เชนนำเข้าจากอิตาลี ข้อต่อเหลี่ยมละเอียดเล่นแสงเงางาม แข็งแรงไม่พันกัน เหมาะทั้งใส่เดี่ยวและใส่คู่กับจี้หรือจี้พระ"
  },
  {
    "id": "AJ-N02",
    "category": "necklaces",
    "name": "สร้อยคอเงินแท้ ลายกระดูกงูกลม",
    "sub": "เงินแท้ 92.5%, ผิวเรียบเงา",
    "price": 1290,
    "weight": "7.2 กรัม",
    "sizing": "ความยาว 16 / 18 / 20 นิ้ว",
    "badge": "แนะนำ",
    "image": "assets/p2.jpg",
    "desc": "สร้อยคอเงินแท้ลายกระดูกงู ผิวเรียบลื่นแนบรับกับลำคออย่างนุ่มนวล ไม่บาดผิว ไม่ดึงเส้นผม ให้ลุคที่ดูเรียบหรูเหนือกาลเวลา"
  },
  {
    "id": "AJ-N03",
    "category": "necklaces",
    "name": "สร้อยคอเงินแท้ ลายโซ่ฝรั่งเจียระไน",
    "sub": "เงินแท้ 92.5%, เจียระไนเหลี่ยมรับแสง",
    "price": 1590,
    "weight": "11.0 กรัม",
    "sizing": "ความยาว 18 / 20 / 22 / 24 นิ้ว",
    "badge": "",
    "image": "assets/p3.jpg",
    "desc": "สร้อยคอเงินแท้ลายโซ่ฝรั่งแบน เจียระไนเหลี่ยมรับแสงสะท้อนทุกองศา เส้นหนาแข็งแรง เหมาะสำหรับห้อยจี้พระหรือสวมเดี่ยว"
  },
  {
    "id": "AJ-N04",
    "category": "necklaces",
    "name": "สร้อยคอเงินแท้ ลายฟิกาโร่อิตาลี (Figaro Chain)",
    "sub": "เงินแท้ 92.5%, ลายข้อสั้นสลับยาวเจียระไน",
    "price": 1350,
    "weight": "8.4 กรัม",
    "sizing": "ความยาว 18 / 20 / 22 นิ้ว",
    "badge": "ใหม่",
    "image": "assets/p19.jpg",
    "desc": "สร้อยคอเงินแท้ 92.5% ลายฟิกาโร่คลาสสิก ถักทอจังหวะห่วงสั้นสลับห่วงยาวอย่างลงตัว เจียระไนผิวเรียบเงางาม สวมใส่ได้ทั้งชายและหญิง"
  },
  {
    "id": "AJ-P01",
    "category": "pendants",
    "name": "จี้เงินแท้ 92.5% หัวใจอินฟินิตี้ประดับเพชร CZ",
    "sub": "เงินแท้ 92.5%, เพชร CZ เกรดพรีเมียม",
    "price": 690,
    "weight": "2.4 กรัม",
    "sizing": "ขนาด 1.2 × 1.8 ซม.",
    "badge": "แนะนำ",
    "image": "assets/p11.jpg",
    "desc": "จี้เงินแท้ 92.5% ดีไซน์หัวใจอินฟินิตี้เอกลักษณ์ของ Arisa Jewelry ประดับเพชร CZ เล่นไฟสวยงาม สวมใส่เข้ากับสร้อยเงินแท้ได้ทุกลาย"
  },
  {
    "id": "AJ-P02",
    "category": "pendants",
    "name": "จี้เงินแท้ 92.5% ทรงหยดน้ำมินิมอล",
    "sub": "เงินแท้ 92.5%, ขัดเงาพิเศษ",
    "price": 590,
    "weight": "2.8 กรัม",
    "sizing": "ขนาด 1.0 × 1.6 ซม.",
    "badge": "ใหม่",
    "image": "assets/p12.jpg",
    "desc": "จี้เงินแท้หล่อตันทรงหยดน้ำโค้งมน ผิวขัดเงาสะท้อนแสงนุ่มนวล เรียบหรูใส่ได้ทุกวัน"
  },
  {
    "id": "AJ-P03",
    "category": "pendants",
    "name": "จี้เงินแท้ 92.5% ใบโคลเวอร์ 4 แฉก ประดับเพชร CZ",
    "sub": "เงินแท้ 92.5%, สัญลักษณ์แห่งความโชคดี",
    "price": 750,
    "weight": "2.6 กรัม",
    "sizing": "ขนาด 1.4 × 1.9 ซม.",
    "badge": "ขายดี",
    "image": "assets/p15.jpg",
    "desc": "จี้เงินแท้ 92.5% รูปใบโคลเวอร์ 4 แฉก ฝังเพชร CZ ละเอียดเต็มหน้าเรือน เปล่งประกายระยิบระยับ สื่อถึงความโชคดีในทุกวัน"
  },
  {
    "id": "AJ-P04",
    "category": "pendants",
    "name": "จี้เงินแท้ 92.5% เพชรเดี่ยว CZ ทรงกลมหนามเตย",
    "sub": "เงินแท้ 92.5%, เพชร CZ เจียระไน H&A",
    "price": 650,
    "weight": "1.9 กรัม",
    "sizing": "ขนาด 0.8 × 1.4 ซม.",
    "badge": "แนะนำ",
    "image": "assets/p16.jpg",
    "desc": "จี้เพชรเดี่ยวเม็ดชู 4 หนามเตย ตัวเรือนเงินแท้ 92.5% ชุบโรเดียมเงางาม ประดับเพชร CZ เกรด Hearts & Arrows เล่นไฟเสมือนเพชรแท้"
  },
  {
    "id": "AJ-A01",
    "category": "amulets",
    "name": "จี้พระพุทธชินราช เลี่ยมกรอบเงินแท้ 92.5% ซุ้มพิกุล",
    "sub": "กรอบเงินแท้ 92.5%, เลี่ยมกันน้ำ 100%",
    "price": 1390,
    "weight": "5.5 กรัม",
    "sizing": "ขนาด 2.2 × 3.2 ซม. (รวมห่วง)",
    "badge": "ขายดี",
    "image": "assets/p9.jpg",
    "desc": "จี้พระพุทธชินราชเลี่ยมในกรอบเงินแท้มาตรฐาน 92.5% แกะลายซุ้มพิกุลประณีต อัดพลาสติกกันน้ำอย่างดี สามารถสวมใส่คู่กับสร้อยคอเงินแท้ได้ทุกขนาด"
  },
  {
    "id": "AJ-A02",
    "category": "amulets",
    "name": "จี้หลวงปู่ทวด เลี่ยมกรอบเงินแท้ 92.5% ขอบเกลี้ยง",
    "sub": "กรอบเงินแท้ 92.5%, เลี่ยมกันน้ำ 100%",
    "price": 1190,
    "weight": "4.6 กรัม",
    "sizing": "ขนาด 1.8 × 2.6 ซม. (รวมห่วง)",
    "badge": "ขายดี",
    "image": "assets/p10.jpg",
    "desc": "จี้หลวงปู่ทวดเลี่ยมกรอบเงินแท้ 92.5% ทรงขอบเกลี้ยงขัดเงาสไตล์มินิมอล กันน้ำ 100% เหมาะสำหรับสวมใส่ติดตัวเพื่อความเป็นสิริมงคลและแคล้วคลาดปลอดภัย"
  },
  {
    "id": "AJ-A03",
    "category": "amulets",
    "name": "จี้ท้าวเวสสุวรรณ เลี่ยมกรอบเงินแท้ 92.5% แกะลายไทย",
    "sub": "กรอบเงินแท้ 92.5%, เลี่ยมกันน้ำ 100%",
    "price": 1490,
    "weight": "6.2 กรัม",
    "sizing": "ขนาด 2.0 × 3.4 ซม. (รวมห่วง)",
    "badge": "ใหม่",
    "image": "assets/p13.jpg",
    "desc": "จี้ท้าวเวสสุวรรณเลี่ยมกรอบเงินแท้ 92.5% งานแกะลายไทยคมชัด เลี่ยมกันน้ำอย่างดี เสริมสิริมงคลด้านโชคลาภและการงาน"
  },
  {
    "id": "AJ-A04",
    "category": "amulets",
    "name": "จี้พระพิฆเนศ เลี่ยมกรอบเงินแท้ 92.5% ทรงกลม",
    "sub": "กรอบเงินแท้ 92.5%, เลี่ยมกันน้ำ 100%",
    "price": 1250,
    "weight": "4.9 กรัม",
    "sizing": "เส้นผ่านศูนย์กลาง 2.2 ซม.",
    "badge": "แนะนำ",
    "image": "assets/p14.jpg",
    "desc": "จี้พระพิฆเนศปางประทานพร เลี่ยมกรอบเงินแท้ 92.5% ทรงกลมขัดเงา เลี่ยมกันน้ำพร้อมสวมใส่คู่กับสร้อยคอเงินแท้"
  },
  {
    "id": "AJ-E01",
    "category": "earrings",
    "name": "ต่างหูทรงหยดน้ำมินิมอล",
    "sub": "เงินแท้ 92.5%, ก้านเงินแท้สำหรับผิวแพ้ง่าย",
    "price": 750,
    "weight": "3.4 กรัม / คู่",
    "sizing": "ความยาว 16 มม.",
    "badge": "ใหม่",
    "image": "assets/p4.jpg",
    "desc": "ต่างหูเงินแท้ 92.5% ทั้งตัวเรือนและก้าน ทรงโค้งมนรับใบหน้า อ่อนโยนต่อผู้ที่แพ้ต่างหูง่าย"
  },
  {
    "id": "AJ-E02",
    "category": "earrings",
    "name": "ต่างหูห่วงมินิมอล ตัวล็อกคลิก",
    "sub": "เงินแท้ 92.5%, ขนาด 15 มม.",
    "price": 790,
    "weight": "3.8 กรัม / คู่",
    "sizing": "เส้นผ่านศูนย์กลาง 15 มม.",
    "badge": "ขายดี",
    "image": "assets/p7.jpg",
    "desc": "ต่างหูห่วงเงินแท้ตัวล็อกแบบคลิกแน่นหนา ไม่ต้องใช้แป้นด้านหลัง น้ำหนักเบาใส่ติดหูได้ทุกวัน"
  },
  {
    "id": "AJ-E03",
    "category": "earrings",
    "name": "ต่างหูเม็ดเดี่ยวเพชร CZ 4 หนามเตย",
    "sub": "เงินแท้ 92.5%, ขนาด 4 มม. ก้านเงินแท้",
    "price": 590,
    "weight": "1.8 กรัม / คู่",
    "sizing": "หน้าเพชร 4 มม.",
    "badge": "แนะนำ",
    "image": "assets/p20.jpg",
    "desc": "ต่างหูเงินแท้ 92.5% ประดับเพชร CZ ทรงกลมเจียระไนเหลี่ยมเพชรแท้ ก้านและแป้นเงินแท้ปราศจากนิกเกิล สวมใส่สบายติดหูได้ทุกโอกาส"
  },
  {
    "id": "AJ-R01",
    "category": "rings",
    "name": "แหวนทรงโดมหน้าเรียบ",
    "sub": "เงินแท้ 92.5%, ตัวเรือนตันขัดเงา",
    "price": 990,
    "weight": "5.4 กรัม",
    "sizing": "Size 48 – 60",
    "badge": "ขายดี",
    "image": "assets/p5.jpg",
    "desc": "แหวนเงินแท้ 92.5% ทรงโค้งมนเรียบหรู ตัวเรือนตันขัดเงาแวววาว สวมใส่สบายนิ้วในทุกวัน"
  },
  {
    "id": "AJ-R02",
    "category": "rings",
    "name": "แหวนเส้นคู่ดีไซน์มินิมอล",
    "sub": "เงินแท้ 92.5%, ขัดเงา",
    "price": 850,
    "weight": "3.6 กรัม",
    "sizing": "Size 48 – 58",
    "badge": "",
    "image": "assets/p6.jpg",
    "desc": "แหวนเงินแท้เส้นสายเรียบคม ช่วยให้นิ้วดูเรียวสวย สามารถใส่เดี่ยวหรือใส่แมตช์กับแหวนวงอื่นได้ง่าย"
  },
  {
    "id": "AJ-R03",
    "category": "rings",
    "name": "แหวนแถวประดับเพชร CZ รอบวง (Eternity Ring)",
    "sub": "เงินแท้ 92.5%, ฝังเพชร CZ เรียงแถว",
    "price": 1090,
    "weight": "3.2 กรัม",
    "sizing": "Size 48 – 58",
    "badge": "ใหม่",
    "image": "assets/p18.jpg",
    "desc": "แหวนเงินแท้ 92.5% ฝังเพชร CZ เรียงแถวประณีต เปล่งประกายรอบนิ้ว จะสวมเดี่ยวหรือสวมซ้อนกับแหวนเกลี้ยงก็ดูหรูหราลงตัว"
  },
  {
    "id": "AJ-B01",
    "category": "bracelets",
    "name": "สร้อยข้อมือลายโซ่ละเอียด",
    "sub": "เงินแท้ 92.5%, ปรับความยาวได้",
    "price": 890,
    "weight": "3.8 กรัม",
    "sizing": "ความยาว 16 – 18.5 ซม.",
    "badge": "ขายดี",
    "image": "assets/p8.jpg",
    "desc": "สร้อยข้อมือเงินแท้เส้นละเอียดเล่นไฟสวย มีห่วงทดความยาวปรับให้พอดีกับข้อมือได้"
  },
  {
    "id": "AJ-B02",
    "category": "bracelets",
    "name": "กำไลเงินแท้ 92.5% ทรงคัฟฟ์ขัดเงามินิมอล",
    "sub": "เงินแท้ 92.5%, ตัวเรือนตันปรับขนาดได้เล็กน้อย",
    "price": 1490,
    "weight": "9.5 กรัม",
    "sizing": "รอบวงใน 5.8 ซม. (หน้ากว้าง 3.5 มม.)",
    "badge": "ใหม่",
    "image": "assets/p17.jpg",
    "desc": "กำไลเงินแท้ 92.5% ทรงเปิด (Open Cuff Bangle) ขัดเงาเรียบหรู สวมใส่ง่ายเข้ากับทุกลุคทั้งวันทำงานและวันพักผ่อน"
  }
];

const CATEGORY_META = {
  all: {
    title: 'เครื่องประดับ',
    desc: 'เติมเต็มสไตล์ในทุกวันด้วยเครื่องประดับเงินแท้ 92.5% ดีไซน์ประณีตเหนือกาลเวลา คัดสรรตั้งแต่สร้อยคอเงินแท้ จี้เงินแท้ จี้พระเลี่ยมเงินแท้ แหวน ต่างหู ไปจนถึงสร้อยข้อมือที่สะท้อนความงดงามอย่างมีระดับ'
  },
  necklaces: {
    title: 'สร้อยคอเงินแท้',
    desc: 'โดดเด่นด้วยสร้อยคอเงินแท้ 92.5% ถักทอและเจียระไนอย่างประณีต สวมใส่สบายผิวในทุกวัน ทั้งแบบใส่เดี่ยวและใส่คู่กับจี้พระหรือจี้ชิ้นโปรดของคุณ'
  },
  pendants: {
    title: 'จี้เงินแท้',
    desc: 'จี้เงินแท้ 92.5% ดีไซน์มินิมอลและประดับเพชร CZ เกรดพรีเมียม ออกแบบมาให้จับคู่กับสร้อยคอเงินแท้ได้ทุกลายอย่างลงตัว'
  },
  amulets: {
    title: 'จี้พระเลี่ยมเงินแท้',
    desc: 'จี้พระและกรอบพระเงินแท้มาตรฐาน 92.5% งานแกะลายไทย ซุ้มพิกุล และขอบเกลี้ยงมินิมอล เลี่ยมกันน้ำอย่างประณีต เหมาะสำหรับสวมใส่คู่กับสร้อยคอเงินแท้เพื่อความเป็นสิริมงคลในทุกวัน'
  },
  earrings: {
    title: 'ต่างหู',
    desc: 'ต่างหูเงินแท้ 92.5% ปราศจากนิกเกิล อ่อนโยนต่อผิวแพ้ง่าย ออกแบบให้มีน้ำหนักเบาและรับกับกรอบหน้าอย่างเป็นธรรมชาติ'
  },
  rings: {
    title: 'แหวน',
    desc: 'แหวนเงินแท้ 92.5% ตัวเรือนขัดเงาประณีต ดีไซน์เรียบหรูที่สามารถสวมใส่เดี่ยวหรือสวมซ้อนกันเพื่อสร้างสไตล์ที่เป็นเอกลักษณ์'
  },
  bracelets: {
    title: 'สร้อยข้อมือและกำไล',
    desc: 'เพิ่มประกายความเงางามให้ข้อมือด้วยสร้อยข้อมือและกำไลเงินแท้ 92.5% ที่ออกแบบมาเพื่อความคล่องตัวในชีวิตประจำวัน'
  }
};

let currentCategory = 'all';
let currentSort = 'recommended';
let bag = [];
let wishlist = new Set();

const productGrid = document.getElementById('productGrid');
const resultCount = document.getElementById('resultCount');
const sortSelect = document.getElementById('sortSelect');
const categoryTitle = document.getElementById('categoryTitle');
const categoryDesc = document.getElementById('categoryDesc');
const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');

const productModal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

const bagTrigger = document.getElementById('bagTrigger');
const bagDrawer = document.getElementById('bagDrawer');
const drawerClose = document.getElementById('drawerClose');
const bagItemsList = document.getElementById('bagItemsList');
const bagCount = document.getElementById('bagCount');
const wishCount = document.getElementById('wishCount');
const bagTotalAmount = document.getElementById('bagTotalAmount');
const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');
const checkoutForm = document.getElementById('checkoutForm');
const orderSuccessMsg = document.getElementById('orderSuccessMsg');

function formatSwPrice(n) {
  return n.toLocaleString('th-TH') + ' ฿';
}

function renderCatalog() {
  let list = currentCategory === 'all'
    ? [...PRODUCTS]
    : PRODUCTS.filter(p => p.category === currentCategory);

  if (currentSort === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  }

  resultCount.textContent = `${list.length} ผลลัพธ์`;

  productGrid.innerHTML = list.map((p, idx) => {
    const isSaved = wishlist.has(p.id);
    const delay = (idx % 8) * 60;
    return `
      <article class="sw-card" data-id="${p.id}" style="animation-delay: ${delay}ms">
        <div class="sw-tile-media">
          ${p.badge ? `<span class="sw-badge">${p.badge}</span>` : ''}
          <button class="sw-wish-btn ${isSaved ? 'saved' : ''}" data-wish="${p.id}" type="button" title="บันทึกในรายการโปรด">
            ${isSaved ? 'บันทึกแล้ว' : 'บันทึก'}
          </button>
          <img src="${p.image}" alt="${p.name}" class="sw-tile-img" loading="lazy">
        </div>
        <div class="sw-tile-info">
          <h3 class="sw-tile-title">${p.name}</h3>
          <p class="sw-tile-sub">${p.sub}</p>
          <div class="sw-tile-price">${formatSwPrice(p.price)}</div>
        </div>
      </article>
    `;
  }).join('');
}

function setCategory(cat) {
  currentCategory = cat;
  const meta = CATEGORY_META[cat] || CATEGORY_META.all;
  categoryTitle.textContent = meta.title;
  categoryDesc.textContent = meta.desc;
  breadcrumbCurrent.textContent = meta.title;

  document.querySelectorAll('.sw-nav-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === cat);
  });
  document.querySelectorAll('.sw-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === cat);
  });

  renderCatalog();
}

document.querySelectorAll('[data-category]').forEach(btn => {
  btn.addEventListener('click', () => setCategory(btn.dataset.category));
});

sortSelect.addEventListener('change', (e) => {
  currentSort = e.target.value;
  renderCatalog();
});

function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  modalBody.innerHTML = `
    <div class="sw-modal-grid">
      <img src="${p.image}" alt="${p.name}" class="sw-modal-img">
      <div class="sw-modal-info">
        <div>
          <div style="font-size: 12px; color: #767676; margin-bottom: 6px;">รหัสสินค้า ${p.id}</div>
          <h2 style="font-size: 22px; font-weight: 500; margin-bottom: 4px;">${p.name}</h2>
          <p style="font-size: 13.5px; color: #767676; margin-bottom: 14px;">${p.sub}</p>
          <div style="font-size: 20px; font-weight: 500; padding-bottom: 18px; margin-bottom: 18px; border-bottom: 1px solid #E5E5E5;">
            ${formatSwPrice(p.price)}
          </div>
          <p style="font-size: 14px; color: #545454; line-height: 1.75; margin-bottom: 22px;">${p.desc}</p>
          <div style="border-top: 1px solid #E5E5E5; font-size: 13px; margin-bottom: 28px;">
            <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #E5E5E5;">
              <span style="color: #767676;">วัสดุ</span>
              <span>เงินแท้ 92.5% (Sterling Silver)</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #E5E5E5;">
              <span style="color: #767676;">น้ำหนัก</span>
              <span>${p.weight}</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #E5E5E5;">
              <span style="color: #767676;">ขนาด / ความยาว</span>
              <span>${p.sizing}</span>
            </div>
          </div>
        </div>
        <button class="sw-btn-black" id="modalAddBtn" type="button">
          เพิ่มลงในถุงช้อปปิ้ง
        </button>
      </div>
    </div>
  `;

  productModal.classList.add('open');
  document.getElementById('modalAddBtn').addEventListener('click', () => {
    addToBag(p.id);
    productModal.classList.remove('open');
    bagDrawer.classList.add('open');
  });
}

function addToBag(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const found = bag.find(x => x.id === id);
  if (found) found.qty++;
  else bag.push({ ...p, qty: 1 });
  renderBag();
}

function renderBag() {
  const count = bag.reduce((s, i) => s + i.qty, 0);
  const total = bag.reduce((s, i) => s + i.price * i.qty, 0);
  bagCount.textContent = count;
  bagTotalAmount.textContent = formatSwPrice(total);

  if (bag.length === 0) {
    bagItemsList.innerHTML = `<div style="padding: 64px 0; text-align: center; color: #767676; font-size: 14px;">ถุงช้อปปิ้งของคุณยังว่างอยู่</div>`;
    return;
  }

  bagItemsList.innerHTML = bag.map(i => `
    <div style="display: grid; grid-template-columns: 64px 1fr auto; gap: 14px; padding: 16px 0; border-bottom: 1px solid #E5E5E5; align-items: center;">
      <img src="${i.image}" alt="${i.name}" style="width: 64px; height: 68px; object-fit: cover; background: #F3F2F0;">
      <div>
        <div style="font-size: 14px; font-weight: 500;">${i.name}</div>
        <div style="font-size: 12px; color: #767676;">${i.sub}</div>
        <div style="font-size: 13px; margin-top: 4px;">${formatSwPrice(i.price)} × ${i.qty}</div>
      </div>
      <button data-remove="${i.id}" style="font-size: 12px; color: #767676; text-decoration: underline;">ลบ</button>
    </div>
  `).join('');
}

productGrid.addEventListener('click', (e) => {
  const wishBtn = e.target.closest('[data-wish]');
  if (wishBtn) {
    e.stopPropagation();
    const id = wishBtn.dataset.wish;
    if (wishlist.has(id)) wishlist.delete(id);
    else wishlist.add(id);
    wishCount.textContent = wishlist.size;
    renderCatalog();
    return;
  }
  const card = e.target.closest('.sw-card');
  if (card) openModal(card.dataset.id);
});

modalClose.addEventListener('click', () => productModal.classList.remove('open'));
productModal.addEventListener('click', (e) => {
  if (e.target === productModal) productModal.classList.remove('open');
});

bagTrigger.addEventListener('click', () => bagDrawer.classList.add('open'));
drawerClose.addEventListener('click', () => bagDrawer.classList.remove('open'));
bagDrawer.addEventListener('click', (e) => {
  if (e.target === bagDrawer) bagDrawer.classList.remove('open');
});

bagItemsList.addEventListener('click', (e) => {
  const rm = e.target.closest('[data-remove]');
  if (rm) {
    bag = bag.filter(x => x.id !== rm.dataset.remove);
    renderBag();
  }
});

proceedCheckoutBtn.addEventListener('click', () => {
  if (!bag.length) return;
  orderSuccessMsg.style.display = 'none';
  checkoutForm.style.display = 'flex';
  proceedCheckoutBtn.style.display = 'none';
});

checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('custName').value.trim();
  const total = bag.reduce((s, i) => s + i.price * i.qty, 0);
  const code = 'AJ-' + Math.floor(100000 + Math.random() * 900000);
  bag = [];
  renderBag();
  checkoutForm.reset();
  checkoutForm.style.display = 'none';
  proceedCheckoutBtn.style.display = 'block';
  orderSuccessMsg.style.display = 'block';
  orderSuccessMsg.innerHTML = `ยืนยันคำสั่งซื้อ #${code} เรียบร้อยแล้ว<br>คุณ ${name} · ยอดชำระ ${formatSwPrice(total)}`;
});

async function loadProductsFromServer() {
  try {
    const res = await fetch('products.json?t=' + Date.now());
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        PRODUCTS = data;
      }
    }
  } catch (e) {
    // Fallback to built-in PRODUCTS if opened via file://
  }
  renderCatalog();
  renderBag();
}

loadProductsFromServer();
