const data = {
  Chevrolet: ["Tahoe","Suburban","Silverado","Camaro","Malibu","Traverse","Captiva","Groove"],
  Dodge: ["Charger","Challenger","Durango","Ram 1500","Journey"],
  Ford: ["F-150","Mustang","Explorer","Expedition","Taurus","Territory","Edge"],
  Hyundai: ["Accent","Elantra","Sonata","Tucson","Santa Fe","Creta","Palisade"],
  Toyota: ["Camry","Corolla","Land Cruiser","Prado","Hilux","Fortuner","Yaris","RAV4"]
};

const brandArabic = {
  Chevrolet:"شيفروليه",
  Dodge:"دودج",
  Ford:"فورد",
  Hyundai:"هيونداي",
  Toyota:"تويوتا"
};

const parts = [
  ["فلاتر","هواء، زيت، مكيف","🧰"],
  ["فرامل","فحمات، هوبات وملحقات","🛞"],
  ["تعليق","مقصات، مساعدات وروابط","🔧"],
  ["كهرباء","حساسات، سويتشات وقطع كهربائية","⚡"],
  ["تبريد","رديتر، ثرموستات ومراوح","❄️"],
  ["محرك","بواجي، سيور وقطع صيانة","⚙️"],
  ["إنارة","لمبات، كشافات وملحقات","💡"],
  ["هيكل","مرايات، شبك وقطع خارجية","🚘"]
];

const products = [
  {brand:"Toyota", model:"Camry", name:"فلتر زيت محرك", price:"45 ر.س", part:"فلاتر"},
  {brand:"Ford", model:"F-150", name:"فحمات فرامل أمامية", price:"210 ر.س", part:"فرامل"},
  {brand:"Chevrolet", model:"Tahoe", name:"فلتر مكيف", price:"75 ر.س", part:"فلاتر"},
  {brand:"Dodge", model:"Charger", name:"بواجي", price:"180 ر.س", part:"محرك"},
  {brand:"Hyundai", model:"Elantra", name:"فلتر هواء", price:"55 ر.س", part:"فلاتر"},
  {brand:"Toyota", model:"Land Cruiser", name:"مساعد أمامي", price:"390 ر.س", part:"تعليق"}
];

const brandSelect = document.getElementById("brandSelect");
const modelSelect = document.getElementById("modelSelect");
const partSelect = document.getElementById("partSelect");
const finderResult = document.getElementById("finderResult");

Object.keys(data).forEach(brand => {
  const o = document.createElement("option");
  o.value = brand;
  o.textContent = brandArabic[brand];
  brandSelect.appendChild(o);
});

parts.forEach(([name]) => {
  const o = document.createElement("option");
  o.value = name;
  o.textContent = name;
  partSelect.appendChild(o);
});

brandSelect.addEventListener("change", () => {
  const brand = brandSelect.value;
  modelSelect.innerHTML = '<option value="">اختر الموديل</option>';
  if (!brand) {
    modelSelect.disabled = true;
    return;
  }
  data[brand].forEach(model => {
    const o = document.createElement("option");
    o.value = model;
    o.textContent = model;
    modelSelect.appendChild(o);
  });
  modelSelect.disabled = false;
});

document.getElementById("searchBtn").addEventListener("click", () => {
  const brand = brandSelect.value;
  const model = modelSelect.value;
  const part = partSelect.value;
  if (!brand || !model || !part) {
    finderResult.textContent = "فضلاً اختر الشركة والموديل ونوع القطعة.";
    return;
  }
  finderResult.innerHTML = `نتيجة البحث: <strong>${brandArabic[brand]} ${model}</strong> — قسم <strong>${part}</strong>. تواصل معنا على واتساب للتأكد من التوفر.`;
});

const brandGrid = document.getElementById("brandGrid");
Object.keys(data).forEach(brand => {
  const card = document.createElement("article");
  card.className = "brand-card";
  card.innerHTML = `
    <div class="brand-logo">${brand[0]}</div>
    <div>
      <h3>${brandArabic[brand]}</h3>
      <p>${data[brand].slice(0,4).join(" • ")} + المزيد</p>
    </div>`;
  brandGrid.appendChild(card);
});

const partsGrid = document.getElementById("partsGrid");
parts.forEach(([name, desc, icon]) => {
  const card = document.createElement("article");
  card.className = "part-card";
  card.innerHTML = `<div class="part-icon">${icon}</div><h3>${name}</h3><p>${desc}</p>`;
  partsGrid.appendChild(card);
});

const productsGrid = document.getElementById("productsGrid");
products.forEach(p => {
  const msg = encodeURIComponent(`السلام عليكم، أريد الاستفسار عن: ${p.name} لسيارة ${brandArabic[p.brand]} ${p.model}`);
  const card = document.createElement("article");
  card.className = "product-card";
  card.innerHTML = `
    <div class="product-image">${p.model}</div>
    <div class="product-body">
      <span class="product-tag">${brandArabic[p.brand]} • ${p.part}</span>
      <h3>${p.name}</h3>
      <div class="product-meta">${brandArabic[p.brand]} ${p.model}</div>
      <div class="product-footer">
        <span class="price">${p.price}</span>
        <a class="mini-btn" href="https://wa.me/966592901998?text=${msg}" target="_blank" rel="noopener">اطلب عبر واتساب</a>
      </div>
    </div>`;
  productsGrid.appendChild(card);
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});
