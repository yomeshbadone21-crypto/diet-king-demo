const menu = [
  {id:"rajma",cat:"veg",tag:"VEGETARIAN",name:"Rajma Rice Bowl",img:"assets/rajma-rice-bowl.png",cal:"430",protein:"19 g",carbs:"71 g",fat:"6.5 g",plans:"veg"},
  {id:"paneer",cat:"veg",tag:"VEGETARIAN",name:"Paneer Bhurji with Premium Rice & Exotic Veggies Combo",img:"assets/rajma-rice-bowl.png",plans:"veg"},
  {id:"tofu",cat:"veg",tag:"VEGETARIAN",name:"Masala Tofu with Mexican Rice & Sprouts Energy Salad",img:"assets/healthy-soya-salad.png",cal:"445",protein:"31 g",carbs:"36 g",fat:"19 g",plans:"veg"},
  {id:"pesto",cat:"veg",tag:"VEGETARIAN",name:"Pesto Paneer with Hakka Spaghetti & Ruby Glow Wellness Salad",img:"assets/healthy-soya-salad.png",cal:"605",protein:"35.5 g",carbs:"46 g",fat:"31 g",plans:"veg"},
  {id:"butter",cat:"veg",tag:"VEGETARIAN",name:"Butter Paneer with Premium Rice & Exotic Veggies Combo",img:"assets/rajma-rice-bowl.png",cal:"535",protein:"33 g",carbs:"41 g",fat:"25.5 g",plans:"veg"},
  {id:"soya",cat:"veg",tag:"VEGETARIAN",name:"Soya Keema Brown Rice Bowl",img:"assets/healthy-soya-salad.png",cal:"324",protein:"21 g",carbs:"42 g",fat:"10 g",plans:"veg"},
  {id:"chicken1",cat:"chicken",tag:"CHICKEN",name:"Boneless Tandoori Chicken with Premium Rice and Exotic Veggies Meal",img:"assets/chicken-meal.png",cal:"360",protein:"35 g",carbs:"44 g",fat:"4 g",plans:"chicken"},
  {id:"chicken2",cat:"chicken",tag:"CHICKEN",name:"Chicken Rice Bowl",img:"assets/chicken-meal.png",cal:"360",protein:"35 g",carbs:"44 g",fat:"4 g",plans:"chicken"},
  {id:"chicken3",cat:"chicken",tag:"CHICKEN",name:"Saute Broccoli and Chicken Bowl",img:"assets/chicken-meal.png",plans:"chicken"},
  {id:"fish",cat:"fish",tag:"TILAPIA FISH",name:"Tilapia Fish Nuggets with Hakka Spaghetti and Raw Salad",img:"assets/chicken-meal.png",plans:"fish"},
  {id:"chicken4",cat:"chicken",tag:"CHICKEN",name:"Makhni Chicken & Jeera Rice Bowl",img:"assets/chicken-meal.png",plans:"chicken"},
  {id:"chicken5",cat:"chicken",tag:"CHICKEN",name:"Chicken Keema Rice Bowl",img:"assets/chicken-meal.png",plans:"chicken"},
  {id:"salad1",cat:"salad",tag:"SALAD",name:"Premium Protein Packed Salad",img:"assets/healthy-soya-salad.png",plans:"salad"},
  {id:"salad2",cat:"salad",tag:"SALAD",name:"Quinoa Salad",img:"assets/healthy-soya-salad.png",plans:"salad"},
  {id:"salad3",cat:"salad",tag:"SALAD",name:"Broccoli Corn Tofu Salad",img:"assets/healthy-soya-salad.png",plans:"salad"},
  {id:"salad4",cat:"salad",tag:"SALAD",name:"Healthy Bite Soya Salad",img:"assets/healthy-soya-salad.png",cal:"250",protein:"18 g",carbs:"22 g",fat:"8 g",plans:"salad"},
  {id:"salad5",cat:"salad",tag:"SALAD",name:"Corn Cleanse Salad",img:"assets/healthy-soya-salad.png",plans:"salad"},
  {id:"salad6",cat:"salad",tag:"SALAD",name:"High Protein Tofu Salad",img:"assets/healthy-soya-salad.png",plans:"salad"},
  {id:"salad7",cat:"salad",tag:"SALAD",name:"Low Calorie Vegetable Salad",img:"assets/healthy-soya-salad.png",plans:"salad"},
  {id:"salad8",cat:"salad",tag:"SALAD",name:"Paneer Tikka Salad",img:"assets/healthy-soya-salad.png",plans:"salad"},
  {id:"salad9",cat:"salad",tag:"SALAD",name:"Rainbow Detox Salad",img:"assets/healthy-soya-salad.png",plans:"salad"},
  {id:"salad10",cat:"salad",tag:"SALAD",name:"Asian Crunch Salad",img:"assets/healthy-soya-salad.png",plans:"salad"},
  {id:"salad11",cat:"salad",tag:"SALAD",name:"Mexican Fiesta Salad",img:"assets/healthy-soya-salad.png",plans:"salad"},
  {id:"bev1",cat:"beverage",tag:"BEVERAGE",name:"Strawberry Stardust Milkshake",img:"assets/banana-power-shake.png",plans:"beverage"},
  {id:"bev2",cat:"beverage",tag:"BEVERAGE",name:"Apple Beetroot Carrot Juice",img:"assets/banana-power-shake.png",plans:"beverage"},
  {id:"bev3",cat:"beverage",tag:"BEVERAGE",name:"Banana Power Shake",img:"assets/banana-power-shake.png",plans:"beverage"},
  {id:"bev4",cat:"beverage",tag:"BEVERAGE",name:"Ruby Radiance Juice",img:"assets/banana-power-shake.png",plans:"beverage"},
  {id:"bev5",cat:"beverage",tag:"BEVERAGE",name:"Golden Glow Juice",img:"assets/banana-power-shake.png",plans:"beverage"},
  {id:"bev6",cat:"beverage",tag:"BEVERAGE",name:"Fresh Watermelon Juice",img:"assets/banana-power-shake.png",plans:"beverage"},
  {id:"bev7",cat:"beverage",tag:"BEVERAGE",name:"Peanut Butter Banana Shake",img:"assets/banana-power-shake.png",plans:"beverage"},
  {id:"bev8",cat:"beverage",tag:"BEVERAGE",name:"Super Detox Water",img:"assets/banana-power-shake.png",plans:"beverage"},
  {id:"bev9",cat:"beverage",tag:"BEVERAGE",name:"Premium Dry Fruit Shake",img:"assets/banana-power-shake.png",plans:"beverage"}
];

const plans = {
  veg:[['6 meals','₹1,199'],['26 meals','₹4,799'],['52 meals','₹8,899']],
  chicken:[['6 meals','₹1,299'],['26 meals','₹4,999'],['52 meals','₹9,499']],
  fish:[['6 meals','₹1,499'],['26 meals','₹5,849'],['52 meals','₹10,999']],
  salad:[['6 salads','₹999'],['26 salads','₹3,999']],
  beverage:[['6 beverages','₹599'],['26 beverages','₹2,299']]
};

const groupNames={
  veg:'Vegetarian Lunch / Dinner',
  chicken:'Chicken Lunch / Dinner',
  fish:'Tilapia Fish Lunch / Dinner',
  salad:'Healthy Salads',
  beverage:'Beverages'
};
const groupDesc={
  veg:'Paneer, tofu & soya based meals',
  chicken:'Chicken meals',
  fish:'Tilapia fish meals',
  salad:'Fresh healthy salads',
  beverage:'Shakes, juices & detox water'
};

const grid=document.getElementById('menuGrid');
const planPanel=document.getElementById('planPanel');

function nutrition(c){
  const fields=[['cal','CALORIES'],['protein','PROTEIN'],['carbs','CARBS'],['fat','FAT']];
  const hasAny=fields.some(([key])=>c[key]);
  if(!hasAny) return `<div class="nutrition nutrition-missing"><span>Nutrition details not listed in the supplied menu</span></div>`;
  return `<div class="nutrition">${fields.map(([key,label])=>`<div class="nut ${c[key]?'':'nut-empty'}"><strong>${c[key]||'—'}</strong><span>${label}</span></div>`).join('')}</div>`;
}

function renderMenu(filter='all'){
  const items=menu.filter(x=>filter==='all'||x.cat===filter);
  grid.innerHTML=items.map(c=>`
    <article class="menu-card">
      <div class="menu-image"><img src="${c.img}" alt="${c.name}" loading="lazy"><div class="image-shade"></div></div>
      <div class="menu-body">
        <div class="card-top"><span class="tag">${c.tag}</span><span class="card-dot"></span></div>
        <h3>${c.name}</h3>
        ${nutrition(c)}
        <div class="card-actions"><span class="price">From a subscription</span><button class="btn btn-primary" onclick="openPlans('${c.id}')">Choose Plan <span>→</span></button></div>
      </div>
    </article>`).join('');
}
renderMenu();

document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
  t.classList.add('active');
  renderMenu(t.dataset.filter);
}));

function renderPlanPanel(key='veg'){
  const data=plans[key];
  const title=groupNames[key];
  planPanel.innerHTML=`
    <div class="plan-panel-head">
      <div><span class="plan-kicker">${key==='veg'?'VEGETARIAN':key==='chicken'?'CHICKEN':key==='fish'?'TILAPIA FISH':key==='salad'?'SALADS':'BEVERAGES'}</span><h3>${title}</h3><p>${groupDesc[key]}</p></div>
      <div class="plan-panel-note">${key==='salad'||key==='beverage'?'Simple short-term options':'26-day subscription options'}</div>
    </div>
    <div class="plan-cards">${data.map((p,i)=>{
      const [count,price]=p;
      const number=count.split(' ')[0];
      const unit=count.split(' ').slice(1).join(' ');
      const perMeal=(parseInt(price.replace(/[^0-9]/g,''),10)/parseInt(number,10)).toFixed(0);
      const label=number==='26'?'26 days':number==='52'?'52 meals / 26 days':number==='6'?'Starter':'Subscription';
      return `<div class="plan-card ${number==='26'?'plan-featured':''}">
        ${number==='26'?'<span class="plan-badge">26-DAY OPTION</span>':''}
        <div class="plan-count"><strong>${number}</strong><span>${unit}</span></div>
        <div class="plan-price">${price}</div>
        <div class="plan-meta"><span>${label}</span><span>≈ ₹${perMeal} / ${unit.slice(0,-1)||'meal'}</span></div>
        <button class="btn btn-primary wide" onclick="selectPlan('${title} — ${count} — ${price}')">Choose this plan <span>→</span></button>
      </div>`;
    }).join('')}</div>`;
}
renderPlanPanel();

document.querySelectorAll('.plan-tab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelectorAll('.plan-tab').forEach(x=>x.classList.remove('active'));
  t.classList.add('active');
  renderPlanPanel(t.dataset.planFilter);
}));

let currentSelection='';
const modal=document.getElementById('planModal');
function openPlans(id){
  const item=menu.find(x=>x.id===id);
  currentSelection=item.name;
  document.getElementById('modalTitle').textContent=item.name;
  document.getElementById('modalPlans').innerHTML=plans[item.plans].map(p=>`<div class="modal-plan"><div><strong>${p[0]}</strong><span>${p[1]} · subscription</span></div><button onclick="selectPlan('${item.name} — ${p[0]} — ${p[1]}')">Select <span>→</span></button></div>`).join('');
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');
}
function selectPlan(value){
  currentSelection=value;
  document.getElementById('selection').value=value;
  modal.classList.remove('open');modal.setAttribute('aria-hidden','true');
  document.getElementById('order').scrollIntoView({behavior:'smooth'});
}
document.querySelector('.modal-close').onclick=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')};
modal.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}});

document.addEventListener('keydown',e=>{if(e.key==='Escape'){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}});

const selection=document.getElementById('selection');
const selectionOptions=[];
Object.entries(plans).forEach(([key,arr])=>arr.forEach(p=>selectionOptions.push(`${groupNames[key]} — ${p[0]} — ${p[1]}`)));
selection.innerHTML='<option value="">Select a meal plan</option>'+selectionOptions.map(v=>`<option>${v}</option>`).join('');

document.getElementById('orderForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const plan=document.getElementById('selection').value;
  const address=document.getElementById('address').value.trim();
  const note=document.getElementById('note').value.trim()||'None';
  const msg=`Hello Diet King,\n\nI would like to place an order.\n\nName: ${name}\nPhone: ${phone}\nMeal / Plan: ${plan}\nAddress: ${address}\nNote: ${note}`;
  window.open(`https://wa.me/918085777568?text=${encodeURIComponent(msg)}`,'_blank');
});
