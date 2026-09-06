const i18n={
ar:{
top_message:'مرحباً بك في RAVQO Auto — قطع غيار أصلية، أداء يعتمد عليه',search_placeholder:'ابحث عن قطع غيار، موديل، أو رقم القطعة ...',wishlist:'♡ المفضلة',cart:'🛒 سلة المشتريات',
nav_home:'الرئيسية',nav_parts:'قطع الغيار',nav_vehicle:'حسب السيارة',nav_brands:'الماركات',nav_deals:'العروض',nav_services:'خدماتنا',nav_contact:'تواصل معنا',
hero_line1:'قطع غيار أصلية',hero_line2:'لأداء أقوى',shop_now:'تسوق الآن ←',genuine_parts:'قطع أصلية',shop_chevrolet:'تسوق شيفروليه',shop_dodge:'تسوق دودج',shop_ford:'تسوق فورد',shop_hyundai:'تسوق هيونداي',shop_toyota:'تسوق تويوتا',
shop_by_category:'تصفح حسب فئة القطعة',cat_brakes:'فرامل',cat_filters:'فلاتر',cat_lighting:'إضاءة',cat_suspension:'مساعدات',cat_engine:'قطع المحرك',cat_body:'قطع الهيكل',cat_oil:'زيوت وسوائل',cat_electrical:'قطع كهربائية',cat_accessories:'إكسسوارات',
featured_products:'منتجات مميزة',featured_sub:'منتجات مضافة للتجربة',chevy_parts:'قطع شيفروليه الأصلية',details_difference:'التفاصيل تصنع الفرق',special_offers:'عروض خاصة',selected_parts:'على قطع مختارة',premium_oils:'زيوت أصلية',longer_engine_life:'لعمر أطول للمحرك',
service_genuine:'قطع أصلية 100%',service_quality:'جودة مضمونة',service_shipping:'شحن سريع',service_shipping_sub:'لجميع مناطق المملكة',service_support:'دعم فني متخصص',service_support_sub:'نحن دائماً للمساعدة',service_payment:'دفع آمن',service_payment_sub:'خيارات متعددة وآمنة',
quick_links:'روابط سريعة',customer_services:'خدمات العملاء',shipping_policy:'سياسة الشحن',returns:'الاسترجاع والاستبدال',terms:'الشروط والأحكام',faq:'الأسئلة الشائعة',contact_us:'تواصل معنا',
product_name:'كبوت كمارو كاربون فايبر',product_desc:'كبوت أمامي مصنوع من ألياف الكربون عالية الجودة لسيارة شيفروليه كمارو، يمنح السيارة مظهراً رياضياً مميزاً مع وزن أخف وأداء أفضل.',quality_badge:'أصلي عالي الجودة ✓',brand:'الماركة',model:'الموديل',part_type:'نوع القطعة',body_part:'هيكل المركبة',material:'المادة',carbon_fiber:'كاربون فايبر',sar:'ر.س',vat_included:'السعر شامل الضريبة',add_to_cart:'أضف إلى السلة 🛒',contact_whatsapp:'تواصل عبر واتساب ☎',breadcrumbs:'الرئيسية ‹ قطع غيار ‹ Chevrolet ‹ Camaro ‹ هيكل المركبة ‹ كبوت كمارو كاربون فايبر'
},
en:{
top_message:'Welcome to RAVQO Auto — Genuine parts. Trusted performance.',search_placeholder:'Search for parts, model, or part number ...',wishlist:'♡ Wishlist',cart:'🛒 Cart',
nav_home:'Home',nav_parts:'Car Parts',nav_vehicle:'By Vehicle',nav_brands:'Brands',nav_deals:'Deals',nav_services:'Services',nav_contact:'Contact Us',
hero_line1:'Genuine Parts',hero_line2:'Stronger Performance',shop_now:'Shop Now →',genuine_parts:'Genuine Parts',shop_chevrolet:'Shop Chevrolet',shop_dodge:'Shop Dodge',shop_ford:'Shop Ford',shop_hyundai:'Shop Hyundai',shop_toyota:'Shop Toyota',
shop_by_category:'SHOP BY PART CATEGORY',cat_brakes:'Brakes',cat_filters:'Filters',cat_lighting:'Lighting',cat_suspension:'Suspension',cat_engine:'Engine Parts',cat_body:'Body Parts',cat_oil:'Oils & Fluids',cat_electrical:'Electrical',cat_accessories:'Accessories',
featured_products:'Featured Products',featured_sub:'Selected products for the store',chevy_parts:'GENUINE CHEVROLET PARTS',details_difference:'The details make the difference.',special_offers:'SPECIAL OFFERS',selected_parts:'On selected parts',premium_oils:'PREMIUM MOTOR OILS',longer_engine_life:'For longer engine life',
service_genuine:'100% Genuine Parts',service_quality:'Guaranteed Quality',service_shipping:'Fast Shipping',service_shipping_sub:'Across Saudi Arabia',service_support:'Expert Support',service_support_sub:'Always here to help',service_payment:'Secure Payment',service_payment_sub:'Multiple & safe options',
quick_links:'Quick Links',customer_services:'Customer Services',shipping_policy:'Shipping Policy',returns:'Return & Refund',terms:'Terms & Conditions',faq:'FAQs',contact_us:'Contact Us',
product_name:'Camaro Carbon Fiber Hood',product_desc:'High-quality carbon fiber hood for Chevrolet Camaro, designed for a sportier appearance, lighter weight, and improved performance.',quality_badge:'Premium Quality ✓',brand:'Brand',model:'Model',part_type:'Part Type',body_part:'Vehicle Body',material:'Material',carbon_fiber:'Carbon Fiber',sar:'SAR',vat_included:'VAT included',add_to_cart:'Add to Cart 🛒',contact_whatsapp:'Contact via WhatsApp ☎',breadcrumbs:'Home ‹ Car Parts ‹ Chevrolet ‹ Camaro ‹ Vehicle Body ‹ Camaro Carbon Fiber Hood'
}};
let currentLang='ar';
function applyLang(lang){
currentLang=lang;
document.documentElement.lang=lang;
document.documentElement.dir=lang==='ar'?'rtl':'ltr';
document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(i18n[lang][k])el.textContent=i18n[lang][k]});
document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{const k=el.dataset.i18nPlaceholder;if(i18n[lang][k])el.placeholder=i18n[lang][k]});
document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
render(activeFilter);
}
document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.lang)));

const products=[
{brand:'Chevrolet',part:'body',nameAr:'كبوت كمارو كاربون فايبر',nameEn:'Camaro Carbon Fiber Hood',descAr:'هيكل المركبة • كاربون فايبر',descEn:'Vehicle Body • Carbon Fiber',price:'7,500',img:'assets/camaro-carbon-hood.jpg',url:'product-camaro-carbon-hood.html'},
{brand:'Chevrolet',part:'brakes',nameAr:'هوبات وفرامل كمارو',nameEn:'Camaro Brake Kit',descAr:'مجموعة فرامل أمامية',descEn:'Front brake kit',price:'—',img:'assets/promo-brakes.jpg',url:'#'},
{brand:'Dodge',part:'engine',nameAr:'قطع محرك دودج',nameEn:'Dodge Engine Parts',descAr:'قطع مختارة حسب الموديل',descEn:'Selected parts by model',price:'—',img:'assets/dodge.jpg',url:'#'},
{brand:'Ford',part:'electrical',nameAr:'قطع كهربائية فورد',nameEn:'Ford Electrical Parts',descAr:'قطع كهربائية حسب الموديل',descEn:'Electrical parts by model',price:'—',img:'assets/ford.jpg',url:'#'},
{brand:'Hyundai',part:'suspension',nameAr:'مساعدات هيونداي',nameEn:'Hyundai Suspension Parts',descAr:'مساعدات أمامية وخلفية',descEn:'Front and rear suspension parts',price:'—',img:'assets/hyundai.jpg',url:'#'},
{brand:'Toyota',part:'filters',nameAr:'فلاتر تويوتا',nameEn:'Toyota Filters',descAr:'فلاتر خدمة دورية',descEn:'Routine service filters',price:'—',img:'assets/toyota.jpg',url:'#'}
];
const grid=document.getElementById('productGrid');
let activeFilter={type:'all',value:null};
function render(filter={type:'all',value:null}){
activeFilter=filter;
let list=products;
if(filter.type==='brand')list=products.filter(p=>p.brand===filter.value);
if(filter.type==='part')list=products.filter(p=>p.part===filter.value);
grid.innerHTML=list.map(p=>`<article class="productCard"><img src="${p.img}" alt=""><div class="productBody"><h3>${currentLang==='ar'?p.nameAr:p.nameEn}</h3><p>${currentLang==='ar'?p.descAr:p.descEn}</p><span class="price">${p.price==='—'?(currentLang==='ar'?'السعر عند الطلب':'Price on request'):p.price+' '+(currentLang==='ar'?'ر.س':'SAR')}</span><a href="${p.url}">${p.url==='#'?(currentLang==='ar'?'استفسار':'Inquiry'):(currentLang==='ar'?'عرض المنتج':'View Product')}</a></div></article>`).join('');
}
render();
document.querySelectorAll('[data-brand]').forEach(a=>a.addEventListener('click',()=>render({type:'brand',value:a.dataset.brand})));
document.querySelectorAll('[data-part]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-part]').forEach(x=>x.classList.remove('active'));b.classList.add('active');render({type:'part',value:b.dataset.part})}));
document.getElementById('searchBtn')?.addEventListener('click',()=>{const q=document.getElementById('searchInput').value.toLowerCase();const list=products.filter(p=>(p.nameAr+' '+p.nameEn+' '+p.brand+' '+p.descAr+' '+p.descEn).toLowerCase().includes(q));activeFilter={type:'custom',value:null};grid.innerHTML=list.map(p=>`<article class="productCard"><img src="${p.img}"><div class="productBody"><h3>${currentLang==='ar'?p.nameAr:p.nameEn}</h3><p>${currentLang==='ar'?p.descAr:p.descEn}</p><span class="price">${p.price==='—'?(currentLang==='ar'?'السعر عند الطلب':'Price on request'):p.price+' '+(currentLang==='ar'?'ر.س':'SAR')}</span><a href="${p.url}">${p.url==='#'?(currentLang==='ar'?'استفسار':'Inquiry'):(currentLang==='ar'?'عرض المنتج':'View Product')}</a></div></article>`).join('');});
