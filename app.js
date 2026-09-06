
const D = window.RAVQO_DATA;
const translations = {
 ar:{
  top:'مرحباً بك في RAVQO Auto — قطع غيار سيارات',home:'الرئيسية',brands:'الشركات',cart:'السلة',wishlist:'المفضلة',
  search:'ابحث عن شركة، موديل، أو قطعة ...',shop:'تسوق الآن',chooseBrand:'اختر شركة السيارة',chooseBrandSub:'ابدأ باختيار الشركة ثم الموديل وفئة القطعة',
  viewBrand:'عرض الشركة',models:'الموديلات',vehicleType:'نوع المركبة',years:'سنوات الموديل',parts:'فئات القطع',
  viewParts:'عرض القطع',all:'الكل',selectYear:'اختر سنة/فئة',selectCategory:'اختر فئة القطعة',products:'المنتجات',
  noProducts:'لا توجد منتجات مضافة لهذه الفئة حالياً',viewProduct:'عرض المنتج',addCart:'أضف للسلة',addWish:'أضف للمفضلة',
  remove:'حذف',emptyCart:'السلة فارغة',emptyWish:'المفضلة فارغة',subtotal:'الإجمالي',checkoutWhatsapp:'إكمال الطلب عبر واتساب',
  back:'رجوع',brand:'الشركة',model:'الموديل',category:'الفئة',material:'المادة',priceVat:'السعر شامل الضريبة',
  contactWhatsapp:'تواصل عبر واتساب',body:'هيكل المركبة'
 },
 en:{
  top:'Welcome to RAVQO Auto — Car Parts',home:'Home',brands:'Brands',cart:'Cart',wishlist:'Wishlist',
  search:'Search brand, model, or part ...',shop:'Shop Now',chooseBrand:'Choose Your Car Brand',chooseBrandSub:'Start with the brand, then model and part category',
  viewBrand:'View Brand',models:'Models',vehicleType:'Vehicle Type',years:'Model Years',parts:'Part Categories',
  viewParts:'View Parts',all:'All',selectYear:'Select Year / Range',selectCategory:'Select Part Category',products:'Products',
  noProducts:'No products have been added to this category yet',viewProduct:'View Product',addCart:'Add to Cart',addWish:'Add to Wishlist',
  remove:'Remove',emptyCart:'Your cart is empty',emptyWish:'Your wishlist is empty',subtotal:'Subtotal',checkoutWhatsapp:'Checkout via WhatsApp',
  back:'Back',brand:'Brand',model:'Model',category:'Category',material:'Material',priceVat:'VAT included',
  contactWhatsapp:'Contact via WhatsApp',body:'Vehicle Body'
 }
};
let lang = localStorage.getItem('ravqo_lang') || 'ar';
function t(k){ return translations[lang][k] || k; }
function applyLanguage(){
 document.documentElement.lang=lang; document.documentElement.dir=lang==='ar'?'rtl':'ltr';
 document.querySelectorAll('[data-t]').forEach(el=>{ const k=el.dataset.t; el.textContent=t(k); });
 document.querySelectorAll('[data-t-placeholder]').forEach(el=>{el.placeholder=t(el.dataset.tPlaceholder)});
 document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
 document.querySelectorAll('.lang-btn').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;localStorage.setItem('ravqo_lang',lang);location.reload();});
 updateBadges();
}
function money(v){ return lang==='ar' ? `${Number(v).toLocaleString('en-US')} ر.س` : `${Number(v).toLocaleString('en-US')} SAR`; }
function getBrand(id){ return D.brands.find(b=>b.id===id); }
function getModel(brand,id){ return brand?.models.find(m=>m.id===id); }
function getProduct(id){ return D.products.find(p=>p.id===id); }
function catName(id){ const c=D.categories.find(x=>x.id===id); return c ? (lang==='ar'?c.ar:c.en) : id; }

function cart(){ return JSON.parse(localStorage.getItem('ravqo_cart')||'[]'); }
function wishlist(){ return JSON.parse(localStorage.getItem('ravqo_wishlist')||'[]'); }
function saveCart(v){ localStorage.setItem('ravqo_cart',JSON.stringify(v)); updateBadges(); }
function saveWishlist(v){ localStorage.setItem('ravqo_wishlist',JSON.stringify(v)); updateBadges(); }
function addToCart(id,qty=1){
 const c=cart(); const found=c.find(x=>x.id===id);
 if(found) found.qty+=qty; else c.push({id,qty});
 saveCart(c); openDrawer('cart');
}
function addToWishlist(id){
 const w=wishlist(); if(!w.includes(id)) w.push(id); saveWishlist(w); openDrawer('wishlist');
}
function removeCart(id){ saveCart(cart().filter(x=>x.id!==id)); renderDrawer('cart'); }
function removeWish(id){ saveWishlist(wishlist().filter(x=>x!==id)); renderDrawer('wishlist'); }
function updateBadges(){
 document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=cart().reduce((s,x)=>s+x.qty,0));
 document.querySelectorAll('[data-wish-count]').forEach(el=>el.textContent=wishlist().length);
}
function openDrawer(type){
 const d=document.getElementById('drawer'); if(!d) return; d.hidden=false; d.dataset.type=type; renderDrawer(type);
}
function closeDrawer(){ const d=document.getElementById('drawer'); if(d)d.hidden=true; }
function renderDrawer(type){
 const d=document.getElementById('drawer'); if(!d) return;
 const title=document.getElementById('drawerTitle'), body=document.getElementById('drawerBody');
 title.textContent = type==='cart'?t('cart'):t('wishlist');
 if(type==='cart'){
  const c=cart(); if(!c.length){body.innerHTML=`<div class="empty">${t('emptyCart')}</div>`;return;}
  let total=0; body.innerHTML=c.map(x=>{const p=getProduct(x.id); if(!p)return''; total+=p.price*x.qty; return `<div class="drawerItem"><img src="${p.image}"><div><b>${lang==='ar'?p.nameAr:p.nameEn}</b><small>${x.qty} × ${money(p.price)}</small></div><button class="dangerBtn" onclick="removeCart('${p.id}')">${t('remove')}</button></div>`}).join('')+`<div style="padding:18px 0"><b>${t('subtotal')}: ${money(total)}</b><br><br><a class="greenBtn" style="display:block;text-align:center" target="_blank" href="https://wa.me/966592901998?text=${encodeURIComponent((lang==='ar'?'السلام عليكم، أريد إكمال طلب بقيمة ':'I want to complete an order worth ')+money(total))}">${t('checkoutWhatsapp')}</a></div>`;
 }else{
  const w=wishlist(); if(!w.length){body.innerHTML=`<div class="empty">${t('emptyWish')}</div>`;return;}
  body.innerHTML=w.map(id=>{const p=getProduct(id); if(!p)return''; return `<div class="drawerItem"><img src="${p.image}"><div><b>${lang==='ar'?p.nameAr:p.nameEn}</b><small>${money(p.price)}</small></div><button class="dangerBtn" onclick="removeWish('${p.id}')">${t('remove')}</button></div>`}).join('');
 }
}
function qs(k){ return new URLSearchParams(location.search).get(k); }
document.addEventListener('DOMContentLoaded',()=>{
 applyLanguage();
 document.querySelectorAll('[data-open-cart]').forEach(b=>b.onclick=()=>openDrawer('cart'));
 document.querySelectorAll('[data-open-wishlist]').forEach(b=>b.onclick=()=>openDrawer('wishlist'));
 document.querySelectorAll('[data-close-drawer]').forEach(b=>b.onclick=closeDrawer);
});
