let PRODUCTS = [
  {
    id: 'AJ-N01',
    category: 'necklaces',
    name: 'สร้อยคอเงินแท้ ลายบ็อกซ์เชนอิตาลี',
    sub: 'เงินแท้ 92.5%, ขัดเงาโรเดียม',
    price: 890,
    weight: '4.5 กรัม',
    sizing: 'ความยาว 16 / 18 / 20 นิ้ว',
    badge: 'ขายดี',
    image: 'assets/p1.jpg',
    desc: 'สร้อยคอเงินแท้ 92.5% ลายบ็อกซ์เชนนำเข้าจากอิตาลี ข้อต่อเหลี่ยมละเอียดเล่นแสงเงางาม แข็งแรงไม่พันกัน เหมาะทั้งใส่เดี่ยวและใส่คู่กับจี้'
  },
  {
    id: 'AJ-N02',
    category: 'necklaces',
    name: 'สร้อยคอเงินแท้ ลายกระดูกงูกลม',
    sub: 'เงินแท้ 92.5%, ผิวเรียบเงา',
    price: 1290,
    weight: '7.2 กรัม',
    sizing: 'ความยาว 16 / 18 / 20 นิ้ว',
    badge: 'แนะนำ',
    image: 'assets/p2.jpg',
    desc: 'สร้อยคอเงินแท้ลายกระดูกงู ผิวเรียบลื่นแนบรับกับลำคออย่างนุ่มนวล ไม่บาดผิว ไม่ดึงเส้นผม ให้ลุคที่ดูเรียบหรูเหนือกาลเวลา'
  },
  {
    id: 'AJ-N03',
    category: 'necklaces',
    name: 'สร้อยคอเงินแท้ ลายโซ่ฝรั่งเจียระไน',
    sub: 'เงินแท้ 92.5%, เจียระไนเหลี่ยมรับแสง',
    price: 1590,
    weight: '11.0 กรัม',
    sizing: 'ความยาว 18 / 20 / 22 / 24 นิ้ว',
    badge: '',
    image: 'assets/p3.jpg',
    desc: 'สร้อยคอเงินแท้ลายโซ่ฝรั่งแบน เจียระไนเหลี่ยมรับแสงสะท้อนทุกองศา เส้นหนาแข็งแรง สวมใส่ได้ทั้งชายและหญิง'
  },
  {
    id: 'AJ-E01',
    category: 'earrings',
    name: 'ต่างหูทรงหยดน้ำมินิมอล',
    sub: 'เงินแท้ 92.5%, ก้านเงินแท้สำหรับผิวแพ้ง่าย',
    price: 750,
    weight: '3.4 กรัม / คู่',
    sizing: 'ความยาว 16 มม.',
    badge: 'ใหม่',
    image: 'assets/p4.jpg',
    desc: 'ต่างหูเงินแท้ 92.5% ทั้งตัวเรือนและก้าน ทรงโค้งมนรับใบหน้า อ่อนโยนต่อผู้ที่แพ้ต่างหูง่าย'
  },
  {
    id: 'AJ-R01',
    category: 'rings',
    name: 'แหวนทรงโดมหน้าเรียบ',
    sub: 'เงินแท้ 92.5%, ตัวเรือนตันขัดเงา',
    price: 990,
    weight: '5.4 กรัม',
    sizing: 'Size 48 – 60',
    badge: 'ขายดี',
    image: 'assets/p5.jpg',
    desc: 'แหวนเงินแท้ 92.5% ทรงโค้งมนเรียบหรู ตัวเรือนตันขัดเงาแวววาว สวมใส่สบายนิ้วในทุกวัน'
  },
  {
    id: 'AJ-R02',
    category: 'rings',
    name: 'แหวนเส้นคู่ดีไซน์มินิมอล',
    sub: 'เงินแท้ 92.5%, ขัดเงา',
    price: 850,
    weight: '3.6 กรัม',
    sizing: 'Size 48 – 58',
    badge: '',
    image: 'assets/p6.jpg',
    desc: 'แหวนเงินแท้เส้นสายเรียบคม ช่วยให้นิ้วดูเรียวสวย สามารถใส่เดี่ยวหรือใส่แมตช์กับแหวนวงอื่นได้ง่าย'
  },
  {
    id: 'AJ-E02',
    category: 'earrings',
    name: 'ต่างหูห่วงมินิมอล ตัวล็อกคลิก',
    sub: 'เงินแท้ 92.5%, ขนาด 15 มม.',
    price: 790,
    weight: '3.8 กรัม / คู่',
    sizing: 'เส้นผ่านศูนย์กลาง 15 มม.',
    badge: '',
    image: 'assets/p7.jpg',
    desc: 'ต่างหูห่วงเงินแท้ตัวล็อกแบบคลิกแน่นหนา ไม่ต้องใช้แป้นด้านหลัง น้ำหนักเบาใส่ติดหูได้ทุกวัน'
  },
  {
    id: 'AJ-B01',
    category: 'bracelets',
    name: 'สร้อยข้อมือลายโซ่ละเอียด',
    sub: 'เงินแท้ 92.5%, ปรับความยาวได้',
    price: 890,
    weight: '3.8 กรัม',
    sizing: 'ความยาว 16 – 18.5 ซม.',
    badge: 'ใหม่',
    image: 'assets/p8.jpg',
    desc: 'สร้อยข้อมือเงินแท้เส้นละเอียดเล่นไฟสวย มีห่วงทดความยาวปรับให้พอดีกับข้อมือได้'
  }
];

const CATEGORY_META = {
  all: {
    title: 'เครื่องประดับ',
    desc: 'เติมเต็มสไตล์ในทุกวันด้วยเครื่องประดับเงินแท้ 92.5% ดีไซน์ประณีตเหนือกาลเวลา คัดสรรตั้งแต่สร้อยคอเงินแท้ จี้พระเลี่ยมเงินแท้ แหวน ต่างหู ไปจนถึงสร้อยข้อมือที่สะท้อนความงดงามอย่างมีระดับ'
  },
  necklaces: {
    title: 'สร้อยคอเงินแท้',
    desc: 'โดดเด่นด้วยสร้อยคอเงินแท้ 92.5% ถักทอและเจียระไนอย่างประณีต สวมใส่สบายผิวในทุกวัน ทั้งแบบใส่เดี่ยวและใส่คู่กับจี้พระหรือจี้ชิ้นโปรดของคุณ'
  },
  amulets: {
    title: 'จี้พระเลี่ยมเงินแท้',
    desc: 'จี้พระและกรอบพระเงินแท้มาตรฐาน 92.5% งานแกะลายและขอบเกลี้ยงมินิมอล เลี่ยมกันน้ำอย่างประณีต เหมาะสำหรับสวมใส่คู่กับสร้อยคอเงินแท้เพื่อความเป็นสิริมงคลในทุกวัน'
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

  productGrid.innerHTML = list.map(p => {
    const isSaved = wishlist.has(p.id);
    return `
      <article class="sw-card" data-id="${p.id}">
        <div class="sw-tile-media">
          ${p.badge ? `<span class="sw-badge">${p.badge}</span>` : ''}
          <button class="sw-wish-btn ${isSaved ? 'saved' : ''}" data-wish="${p.id}" type="button" title="บันทึกในรายการโปรด">
            ${isSaved ? '♥' : '♡'}
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
