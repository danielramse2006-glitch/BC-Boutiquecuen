const products = [
  {name:'Tenis Urban Black',category:'tenis',image:'assets/shoe-black.jpg'},
  {name:'Tenis Cloud White',category:'tenis',image:'assets/shoe-white.jpg'},
  {name:'Playera BOSS Studs',category:'playeras',image:'assets/shirt-boss-1.jpg'},
  {name:'Playera BOSS Black / Red',category:'playeras',image:'assets/shirt-boss-2.jpg'},
  {name:'Playera Script Black',category:'playeras',image:'assets/shirt-lv-script.jpg'},
  {name:'Playera Graphic Orange',category:'playeras',image:'assets/shirt-lv-orange.jpg'},
  {name:'Playera Black Edition',category:'playeras',image:'assets/shirt-black.jpg'},
  {name:'Playera Cross Edition',category:'playeras',image:'assets/shirt-cross.jpg'},
  {name:'Playera Monogram',category:'playeras',image:'assets/shirt-v.jpg'},
  {name:'Cinto Red Stud',category:'accesorios',image:'assets/belt-red.jpg'},
  {name:'Cinto TR',category:'accesorios',image:'assets/belt-tr.jpg'},
  {name:'Gorras Red Black',category:'gorras',image:'assets/caps-red.jpg'},
  {name:'Gorras Velvet',category:'gorras',image:'assets/caps-velvet.jpg'},
  {name:'Gorras Black Pack',category:'gorras',image:'assets/caps-black.jpg'},
  {name:'Gorras Cross Pack',category:'gorras',image:'assets/caps-cross.jpg'}
];
const grid = document.querySelector('#productGrid');
const modal = document.querySelector('#productModal');
const modalImg = document.querySelector('#modalImg');
const modalName = document.querySelector('#modalName');
const modalCategory = document.querySelector('#modalCategory');
const modalWhatsapp = document.querySelector('#modalWhatsapp');

function render(filter='all'){
  grid.innerHTML='';
  products.filter(p=>filter==='all'||p.category===filter).forEach(p=>{
    const el=document.createElement('article');
    el.className='product-card';
    el.innerHTML=`<div class="image-wrap"><img loading="lazy" src="${p.image}" alt="${p.name}"></div><span class="tag">NUEVO</span><div class="info"><p>${p.category.toUpperCase()}</p><h3>${p.name}<span class="arrow">↗</span></h3><p>Consulta disponibilidad</p></div>`;
    el.addEventListener('click',()=>openProduct(p));
    grid.appendChild(el);
  });
}
function openProduct(p){
  modalImg.src=p.image; modalName.textContent=p.name; modalCategory.textContent=p.category;
  modalWhatsapp.href=`https://wa.me/526862271780?text=${encodeURIComponent('Hola BC Boutiquecuen, quiero información de: '+p.name)}`;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}

document.querySelectorAll('#filters button').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('#filters button').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); render(btn.dataset.filter);
}));
document.querySelectorAll('.category-card').forEach(card=>card.addEventListener('click',()=>{
  const f=card.dataset.filter; document.querySelector('#productos').scrollIntoView({behavior:'smooth'}); document.querySelectorAll('#filters button').forEach(b=>b.classList.toggle('active',b.dataset.filter===f)); render(f);
}));
document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const menuBtn=document.querySelector('#menuBtn'),menu=document.querySelector('#menu');
menuBtn.addEventListener('click',()=>menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
render();
