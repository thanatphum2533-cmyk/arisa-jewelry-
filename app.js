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
            <div style="padding-top: 10px; text-align: right;">
              <button type="button" onclick="openInfoGuide('size')" style="font-size: 12px; color: #9B783B; text-decoration: underline;">
                ดูคู่มือการวัดขนาดสร้อยและแหวน
              </button>
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

window.openInfoGuide = function(tab) {
  let content = '';
  if (tab === 'size') {
    content = `
      <div style="padding: 36px 32px; max-height: 82vh; overflow-y: auto;">
        <h2 style="font-size: 22px; font-weight: 500; margin-bottom: 6px; color: #121110;">คู่มือการวัดขนาดสร้อยคอและแหวน</h2>
        <p style="font-size: 13.5px; color: #7B7266; margin-bottom: 24px;">เปรียบเทียบขนาดมาตรฐานเพื่อเลือกเครื่องประดับ ARISA JEWELRY ให้พอดีกับคุณ</p>

        <h3 style="font-size: 15.5px; font-weight: 600; color: #9B783B; margin-bottom: 12px;">1. แผนภาพและตารางเทียบความยาวสร้อยคอเงินแท้</h3>
        <div style="background: #F3EDE2; border: 1px solid #DFD5C5; padding: 18px; margin-bottom: 16px; display: flex; justify-content: center;">
          <svg viewBox="0 0 420 250" style="max-width: 380px; width: 100%; height: auto; font-family: 'Anuphan', sans-serif;">
            <!-- Neck & Shoulders Silhouette -->
            <path d="M165,15 C168,52 162,78 145,92 C110,108 55,118 35,148 L35,240 L385,240 L385,148 C365,118 310,108 275,92 C258,78 252,52 255,15" fill="#FBF9F5" stroke="#B8914E" stroke-width="1.6"/>
            <!-- Collarbones -->
            <path d="M120,112 Q175,122 202,118 M300,112 Q245,122 218,118" fill="none" stroke="#D4C8B4" stroke-width="1.4" stroke-linecap="round"/>
            <!-- 16 inch curve -->
            <path d="M161,80 Q210,138 259,80" fill="none" stroke="#9B783B" stroke-width="2" stroke-dasharray="3,2"/>
            <circle cx="210" cy="109" r="3" fill="#9B783B"/>
            <text x="275" y="108" font-size="11.5" fill="#121110" font-weight="600">16" (40 ซม.)</text>
            <!-- 18 inch curve -->
            <path d="M155,84 Q210,168 265,84" fill="none" stroke="#121110" stroke-width="2.2"/>
            <circle cx="210" cy="126" r="3.5" fill="#121110"/>
            <text x="282" y="130" font-size="11.5" fill="#9B783B" font-weight="600">18" (45 ซม.) · ยอดนิยม</text>
            <!-- 20 inch curve -->
            <path d="M148,89 Q210,202 272,89" fill="none" stroke="#9B783B" stroke-width="2"/>
            <circle cx="210" cy="146" r="3" fill="#9B783B"/>
            <text x="286" y="152" font-size="11.5" fill="#121110" font-weight="600">20" (50 ซม.)</text>
            <!-- 22-24 inch curve -->
            <path d="M140,94 Q210,256 280,94" fill="none" stroke="#7B7266" stroke-width="1.8" stroke-dasharray="4,3"/>
            <circle cx="210" cy="175" r="3" fill="#7B7266"/>
            <text x="288" y="180" font-size="11.5" fill="#4A443C" font-weight="500">22"–24" (55–60 ซม.)</text>
          </svg>
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 26px;">
          <thead>
            <tr style="background: #F3EDE2; text-align: left;">
              <th style="padding: 9px 12px; border: 1px solid #DFD5C5;">ความยาว (นิ้ว)</th>
              <th style="padding: 9px 12px; border: 1px solid #DFD5C5;">ความยาว (ซม.)</th>
              <th style="padding: 9px 12px; border: 1px solid #DFD5C5;">ระดับเมื่อสวมใส่</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #DFD5C5; font-weight: 500;">16 นิ้ว</td>
              <td style="padding: 8px 12px; border: 1px solid #DFD5C5;">40 ซม.</td>
              <td style="padding: 8px 12px; border: 1px solid #DFD5C5;">พอดีฐานลำคอ / ไหปลาร้าบน (ลุคมินิมอล)</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #DFD5C5; font-weight: 500;">18 นิ้ว</td>
              <td style="padding: 8px 12px; border: 1px solid #DFD5C5;">45 ซม.</td>
              <td style="padding: 8px 12px; border: 1px solid #DFD5C5;">ระดับไหปลาร้า (ขนาดมาตรฐานยอดนิยม ใส่คู่กับจี้สวยที่สุด)</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #DFD5C5; font-weight: 500;">20 นิ้ว</td>
              <td style="padding: 8px 12px; border: 1px solid #DFD5C5;">50 ซม.</td>
              <td style="padding: 8px 12px; border: 1px solid #DFD5C5;">ต่ำกว่าไหปลาร้าลงมาเล็กน้อย (เหมาะห้อยจี้พระ หรือผู้ชายสวมใส่)</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #DFD5C5; font-weight: 500;">22 – 24 นิ้ว</td>
              <td style="padding: 8px 12px; border: 1px solid #DFD5C5;">55 – 60 ซม.</td>
              <td style="padding: 8px 12px; border: 1px solid #DFD5C5;">ระดับกลางอก (สวมหัวได้โดยไม่ต้องปลดตะขอในรุ่น 24 นิ้ว)</td>
            </tr>
          </tbody>
        </table>

        <h3 style="font-size: 15.5px; font-weight: 600; color: #9B783B; margin-bottom: 12px;">2. แผนภาพและวิธีวัดขนาดแหวน (มาตรฐานเบอร์ 48 – 60)</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-bottom: 16px;">
          <div style="background: #F3EDE2; border: 1px solid #DFD5C5; padding: 14px; text-align: center;">
            <div style="font-size: 12.5px; font-weight: 600; color: #121110; margin-bottom: 8px;">วิธีที่ 1: วัดเส้นผ่านศูนย์กลางด้านใน</div>
            <svg viewBox="0 0 220 130" style="max-width: 190px; width: 100%; height: auto; font-family: 'Anuphan', sans-serif;">
              <!-- Outer Ring -->
              <circle cx="110" cy="62" r="46" fill="none" stroke="#B8914E" stroke-width="8"/>
              <!-- Inner Ring Boundary -->
              <circle cx="110" cy="62" r="42" fill="#FBF9F5" stroke="#121110" stroke-width="1.2"/>
              <!-- Diameter Arrow -->
              <line x1="68" y1="62" x2="152" y2="62" stroke="#9B783B" stroke-width="2"/>
              <polygon points="68,62 75,58 75,66" fill="#9B783B"/>
              <polygon points="152,62 145,58 145,66" fill="#9B783B"/>
              <!-- Dashed guide lines -->
              <line x1="68" y1="62" x2="68" y2="115" stroke="#7B7266" stroke-width="1" stroke-dasharray="3,2"/>
              <line x1="152" y1="62" x2="152" y2="115" stroke="#7B7266" stroke-width="1" stroke-dasharray="3,2"/>
              <text x="110" y="54" text-anchor="middle" font-size="10.5" fill="#121110" font-weight="600">วัดเฉพาะขอบด้านใน (มม.)</text>
              <text x="110" y="122" text-anchor="middle" font-size="10" fill="#7B7266">ไม่รวมความหนาตัวเรือนแหวน</text>
            </svg>
          </div>
          <div style="background: #F3EDE2; border: 1px solid #DFD5C5; padding: 14px; text-align: center;">
            <div style="font-size: 12.5px; font-weight: 600; color: #121110; margin-bottom: 8px;">วิธีที่ 2: วัดความยาวรอบโคนนิ้ว</div>
            <svg viewBox="0 0 220 130" style="max-width: 190px; width: 100%; height: auto; font-family: 'Anuphan', sans-serif;">
              <!-- Finger Illustration -->
              <path d="M88,118 L88,34 C88,18 132,18 132,34 L132,118" fill="#FBF9F5" stroke="#B8914E" stroke-width="1.8"/>
              <path d="M98,28 C98,21 122,21 122,28 L122,38 C122,42 98,42 98,38 Z" fill="none" stroke="#D4C8B4" stroke-width="1.2"/>
              <!-- Paper Strip Wrapped Around Finger -->
              <rect x="83" y="64" width="54" height="14" rx="2" fill="#EAE0CF" stroke="#121110" stroke-width="1.5"/>
              <line x1="118" y1="62" x2="118" y2="80" stroke="#9B783B" stroke-width="2"/>
              <!-- Ruler at bottom -->
              <rect x="35" y="96" width="150" height="16" fill="#FBF9F5" stroke="#7B7266" stroke-width="1.2"/>
              <path d="M45,96 L45,103 M60,96 L60,101 M75,96 L75,103 M90,96 L90,101 M105,96 L105,103 M120,96 L120,101 M135,96 L135,103 M150,96 L150,101 M165,96 L165,103" stroke="#7B7266" stroke-width="1"/>
              <text x="110" y="125" text-anchor="middle" font-size="10" fill="#4A443C">พันกระดาษรอบนิ้ว ขีดเส้น แล้ววัด (มม.)</text>
            </svg>
          </div>
        </div>
        <p style="font-size: 13px; color: #4A443C; margin-bottom: 12px;">
          <strong>วิธีที่ 1 (วัดเส้นผ่านศูนย์กลางแหวนวงเดิม):</strong> นำไม้บรรทัดวัดความกว้างด้านในของแหวน (ไม่รวมขอบตัวเรือน) เป็นหน่วยมิลลิเมตร<br>
          <strong>วิธีที่ 2 (วัดรอบนิ้ว):</strong> ใช้กระดาษตัดเป็นเส้นเล็กพันรอบโคนนิ้วพอดี ขีดเส้นบรรจบแล้ววัดความยาวเป็นมิลลิเมตร
        </p>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 10px;">
          <thead>
            <tr style="background: #F3EDE2; text-align: left;">
              <th style="padding: 8px 12px; border: 1px solid #DFD5C5;">ไซส์แหวน</th>
              <th style="padding: 8px 12px; border: 1px solid #DFD5C5;">รอบนิ้ว (มม.)</th>
              <th style="padding: 8px 12px; border: 1px solid #DFD5C5;">เส้นผ่านศูนย์กลางด้านใน (มม.)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="padding: 7px 12px; border: 1px solid #DFD5C5; font-weight: 500;">Size 48</td><td style="padding: 7px 12px; border: 1px solid #DFD5C5;">48 มม.</td><td style="padding: 7px 12px; border: 1px solid #DFD5C5;">15.3 มม.</td></tr>
            <tr><td style="padding: 7px 12px; border: 1px solid #DFD5C5; font-weight: 500;">Size 50</td><td style="padding: 7px 12px; border: 1px solid #DFD5C5;">50 มม.</td><td style="padding: 7px 12px; border: 1px solid #DFD5C5;">15.9 มม.</td></tr>
            <tr><td style="padding: 7px 12px; border: 1px solid #DFD5C5; font-weight: 500;">Size 52</td><td style="padding: 7px 12px; border: 1px solid #DFD5C5;">52 มม.</td><td style="padding: 7px 12px; border: 1px solid #DFD5C5;">16.5 มม.</td></tr>
            <tr><td style="padding: 7px 12px; border: 1px solid #DFD5C5; font-weight: 500;">Size 54</td><td style="padding: 7px 12px; border: 1px solid #DFD5C5;">54 มม.</td><td style="padding: 7px 12px; border: 1px solid #DFD5C5;">17.2 มม.</td></tr>
            <tr><td style="padding: 7px 12px; border: 1px solid #DFD5C5; font-weight: 500;">Size 56</td><td style="padding: 7px 12px; border: 1px solid #DFD5C5;">56 มม.</td><td style="padding: 7px 12px; border: 1px solid #DFD5C5;">17.8 มม.</td></tr>
            <tr><td style="padding: 7px 12px; border: 1px solid #DFD5C5; font-weight: 500;">Size 58</td><td style="padding: 7px 12px; border: 1px solid #DFD5C5;">58 มม.</td><td style="padding: 7px 12px; border: 1px solid #DFD5C5;">18.4 มม.</td></tr>
            <tr><td style="padding: 7px 12px; border: 1px solid #DFD5C5; font-weight: 500;">Size 60</td><td style="padding: 7px 12px; border: 1px solid #DFD5C5;">60 มม.</td><td style="padding: 7px 12px; border: 1px solid #DFD5C5;">19.1 มม.</td></tr>
          </tbody>
        </table>
      </div>
    `;
  } else if (tab === 'care') {
    content = `
      <div style="padding: 36px 32px; max-height: 82vh; overflow-y: auto;">
        <h2 style="font-size: 22px; font-weight: 500; margin-bottom: 8px; color: #121110;">การดูแลรักษาเครื่องประดับเงินแท้ 92.5%</h2>
        <p style="font-size: 13.5px; color: #7B7266; margin-bottom: 20px;">เคล็ดลับดูแลเครื่องประดับเงินแท้ให้เงางามเหมือนใหม่อยู่เสมอ</p>
        <div style="font-size: 14px; color: #4A443C; line-height: 1.85; display: flex; flex-direction: column; gap: 12px;">
          <div><strong>1. สวมใส่ได้ทุกวันและโดนน้ำได้:</strong> เนื้อเงินแท้ 92.5% สามารถใส่อาบน้ำหรือล้างมือได้ตามปกติ ไม่ลอกเป็นแผ่นเหมือนงานชุบทั่วไป</div>
          <div><strong>2. การทำความสะอาดหลังสวมใส่:</strong> หากโดนเหงื่อ ครีม หรือน้ำหอม แนะนำให้ล้างด้วยน้ำสะอาดหรือน้ำยาล้างจานอ่อนๆ ซับให้แห้ง แล้วใช้ผ้าเช็ดเงินขัดเบาๆ ความเงางามจะกลับคืนมาทันที</div>
          <div><strong>3. การเก็บรักษาเมื่อไม่ได้สวมใส่:</strong> ควรเก็บใส่ซองซิปล็อกหรือกล่องเครื่องประดับที่มิดชิด เพื่อลดการสัมผัสกับออกซิเจนในอากาศซึ่งเป็นสาเหตุที่ทำให้เงินหมองช้าลง</div>
        </div>
      </div>
    `;
  } else {
    content = `
      <div style="padding: 36px 32px; max-height: 82vh; overflow-y: auto;">
        <h2 style="font-size: 22px; font-weight: 500; margin-bottom: 8px; color: #121110;">มาตรฐานเนื้อเงินแท้ 92.5% (Sterling Silver)</h2>
        <p style="font-size: 13.5px; color: #7B7266; margin-bottom: 20px;">การรับประกันคุณภาพชิ้นงานทุกชิ้นจาก ARISA JEWELRY</p>
        <div style="font-size: 14px; color: #4A443C; line-height: 1.85; display: flex; flex-direction: column; gap: 12px;">
          <div><strong>สัดส่วนเงินบริสุทธิ์มาตรฐานสากล:</strong> เครื่องประดับเงินแท้ 92.5% ประกอบด้วยแร่เงินบริสุทธิ์ 92.5% ผสมโลหะอัลลอยคุณภาพสูงอีก 7.5% เพื่อให้ตัวเรือนมีความแข็งแรงคงรูป ไม่บุบหรือบิดงอง่าย และประทับตรา <strong>925</strong> บนตัวเรือน</div>
          <div><strong>ปราศจากนิกเกิล (Nickel-Free):</strong> อ่อนโยนต่อผู้ที่มีผิวบอบบางหรือแพ้เครื่องประดับง่าย ไม่ก่อให้เกิดอาการคันหรือระคายเคืองผิว</div>
          <div><strong>งานเลี่ยมกรอบพระเงินแท้กันน้ำ 100%:</strong> สำหรับหมวดจี้พระ ทุกองค์เลี่ยมในกรอบเงินแท้ 92.5% อัดพลาสติกกันน้ำอย่างประณีตโดยช่างฝีมือ</div>
        </div>
      </div>
    `;
  }

  modalBody.innerHTML = content;
  productModal.classList.add('open');
};

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
