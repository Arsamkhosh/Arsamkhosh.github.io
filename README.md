<!doctype html>
<html lang="fa">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Arsam Coin — Prototype</title>
<style>
:root{--bg:#0f1724;--card:#0b1220;--muted:#95a3b3;--accent:#f6c85f;--accent2:#8be9fd}
*{box-sizing:border-box;font-family:Vazirmatn,system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial}
html,body{height:100%;margin:0;background:linear-gradient(180deg,#071021 0%, #081428 60%);color:#e6eef6}
.container{max-width:1100px;margin:18px auto;padding:18px}
.header{display:flex;gap:12px;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:12px}
.logo{font-size:22px;background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;background-clip:text;color:transparent;font-weight:800}
.modes{display:flex;gap:8px}
.button{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.04);padding:8px 12px;border-radius:10px;cursor:pointer}
.button.active{background:linear-gradient(90deg,#243b55,#1b2a3e);border:1px solid rgba(255,255,255,0.06)}
.grid{display:grid;grid-template-columns:360px 1fr;gap:18px;margin-top:18px}
.panel{background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent);padding:14px;border-radius:12px;border:1px solid rgba(255,255,255,0.03)}
.stat{display:flex;justify-content:space-between;align-items:center;padding:8px 6px;border-radius:8px;margin-bottom:8px}
.big-coin{font-size:20px;font-weight:700;color:var(--accent)}
.center{display:flex;flex-direction:column;align-items:center;gap:12px}
.clicker-btn{width:220px;height:220px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:32px;background:linear-gradient(180deg,#f3b84a,#f2a33a);color:#111;box-shadow:0 6px 20px rgba(242,163,58,0.18);cursor:pointer;border:8px solid rgba(255,255,255,0.06)}
.upgrades{display:grid;grid-template-columns:1fr;gap:8px;margin-top:12px}
.upgrade{display:flex;justify-content:space-between;align-items:center;padding:8px;border-radius:8px;background:rgba(255,255,255,0.02)}
.small{font-size:13px;color:var(--muted)}
.row{display:flex;gap:8px;align-items:center}
.cards-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px}
.card{background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent);padding:10px;border-radius:10px;border:1px solid rgba(255,255,255,0.03)}
.card .name{font-weight:700}
.card .meta{font-size:12px;color:var(--muted)}
.controls{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.footer{margin-top:14px;text-align:center;color:var(--muted);font-size:13px}
.topbar{display:flex;gap:10px;align-items:center}
.toggle{display:flex;gap:6px}
.pulse{animation:pulse 1.4s infinite}
@keyframes pulse{0%{transform:scale(1)}50%{transform:scale(1.02)}100%{transform:scale(1)}}
@media(max-width:900px){.grid{grid-template-columns:1fr;}}
.badge{padding:6px 8px;border-radius:999px;background:rgba(255,255,255,0.03);font-weight:600}
.market{display:flex;flex-direction:column;gap:8px}
.input{background:rgba(0,0,0,0.2);border:1px solid rgba(255,255,255,0.02);padding:8px;border-radius:6px;color:inherit}
.small-btn{padding:6px 8px;border-radius:8px}
</style>
<body>
<div class="container">
  <div class="header">
    <div class="brand">
      <div class="logo">Arsam Coin • Prototype</div>
      <div class="small">نسخهٔ آموزشی</div>
    </div>
    <div class="modes">
      <div class="button mode-btn active" data-mode="simple">Simple Clicker</div>
      <div class="button mode-btn" data-mode="advanced">Advanced (Cards & Exchange)</div>
      <div class="button" id="resetAll">Reset All</div>
    </div>
  </div>

  <div class="grid">
    <div class="panel">
      <div class="stat">
        <div>
          <div class="small">Arsam Coin</div>
          <div class="big-coin" id="coins">0</div>
        </div>
        <div class="topbar">
          <div class="badge" id="cps">0 /s</div>
          <div class="badge" id="level">Lv 1</div>
        </div>
      </div>

      <div id="simplePanel">
        <div class="center">
          <div class="clicker-btn pulse" id="clickBtn">🐹<div style="font-size:12px;margin-top:8px;color:#222">تپ کن</div></div>
          <div class="row">
            <div class="upgrade" style="width:100%">
              <div>
                <div class="name">Auto Hamster</div>
                <div class="small">درآمد خودکار + passive هر ثانیه</div>
              </div>
              <div class="row">
                <div class="small" id="autoCost">قیمت: 10</div>
                <button class="button" id="buyAuto">خرید</button>
              </div>
            </div>
          </div>
          <div class="upgrades" id="simpleUpgrades"></div>
          <div class="controls">
            <button class="button" id="prestige">Prestige (بازنشانی)</button>
            <div class="small">Prestige ضریب برد: x<span id="prestigeMult">1</span></div>
          </div>
        </div>
      </div>

      <div id="advancedPanel" style="display:none">
        <div class="small">فروشگاه کارت‌ها و صرافی</div>
        <div class="market">
          <div style="display:flex;gap:8px;align-items:center">
            <input class="input" id="searchCard" placeholder="جستجو کارت..." />
            <button class="button" id="refreshShop">رفرش</button>
            <div class="small" style="margin-left:auto">Arsam Coin: <span id="coins2">0</span></div>
          </div>
          <div class="cards-grid" id="shopList"></div>
        </div>

        <hr style="margin:12px 0;border:none;border-top:1px solid rgba(255,255,255,0.03)" />
        <div class="small">کارت‌های شما</div>
        <div class="cards-grid" id="myCards"></div>

        <div style="margin-top:12px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
          <button class="button" id="autoCollect">جمع‌آوری فوری</button>
          <div class="small">جمع‌آوری خودکار: <span id="collectRate">0</span> /s</div>
          <div style="margin-left:auto" class="small">XP: <span id="xp">0</span></div>
        </div>

        <div style="margin-top:12px;display:flex;gap:8px;flex-direction:column">
          <div class="small">تبدیل Arsam Coin</div>
          <div class="row">
            <button class="button" id="toRial">تبدیل به ریال</button>
            <div class="small" id="converted">---</div>
          </div>
        </div>
      </div>

    </div>

    <div class="panel">
      <div class="small">راهنما</div>
      <div style="margin-top:8px;color:var(--muted);line-height:1.6">
        این پروتوتایپ شامل سیستم کلیک، کارت‌ها، صرافی و تبدیل کوین به ریال است. همه چیز ذخیره می‌شود و می‌توان گسترش داد.
      </div>

      <hr style="margin:12px 0;border:none;border-top:1px solid rgba(255,255,255,0.03)" />

      <div class="small">تنظیمات</div>
      <div style="margin-top:8px;display:flex;flex-direction:column;gap:8px">
        <label class="row"><input type="checkbox" id="saveToggle" checked /> <div style="margin-right:8px">ذخیره‌سازی خودکار</div></label>
        <label class="row"><input type="checkbox" id="soundToggle" /> <div style="margin-right:8px">صدای کلیک</div></label>
      </div>

      <div class="footer">نسخهٔ آموزشی — قابل توسعه.</div>
    </div>
  </div>
</div>

<script>
const state={coins:0,cps:0,autos:0,prestige:0,prestigeMult:1,simpleUpgrades:[{id:'clickBoost',name:'Click Boost',desc:'هر کلیک +1',cost:15,level:0,effect:1}],advanced:{shop:[],myCards:[],collectRate:0,xp:0}};
const RARITIES=[{name:'Common',mult:1},{name:'Rare',mult:2.5},{name:'Epic',mult:6},{name:'Legend',mult:15}];
const names=['Hamster Miner','Trader Ham','Vault Keeper','Speedy Ham','Lucky Ham','Guard Ham'];
function seedShop(){state.advanced.shop=[];for(let i=0;i<8;i++){const rarity=RARITIES[Math.floor(Math.random()*RARITIES.length)];const base=Math.floor((i+1)*10*rarity.mult);state.advanced.shop.push({id:'card_'+Date.now()+Math.random().toString(36).slice(2,7),name:names[Math.floor(Math.random()*names.length)],rarity:rarity.name,base:base,level:1,power:Math.round((5+Math.random()*10)*rarity.mult)})}}
function save(){if(!document.getElementById('saveToggle').checked)return;localStorage.setItem('arsam_coin_state',JSON.stringify(state))}
function load(){const s=localStorage.getItem('arsam_coin_state');if(s){try{Object.assign(state,JSON.parse(s))}catch(e){console.warn('load fail',e)}}}
function $(id){return document.getElementById(id)}
function render(){
  $('coins').textContent=Math.floor(state.coins);
  $('coins2').textContent=Math.floor(state.coins);
  $('cps').textContent=Math.floor(state.cps)+' /s';
  $('prestigeMult').textContent=state.prestigeMult;
  $('autoCost').textContent='قیمت: '+Math.floor(10*Math.pow(1.7,state.autos));
  renderSimpleUpgrades();
  renderShop();
  renderMyCards();
  $('collectRate').textContent=state.advanced.collectRate;
  $('xp').textContent=state.advanced.xp;
}
$('clickBtn').addEventListener('click',()=>{let power=1;state.simpleUpgrades.forEach(u=>{power+=u.level*u.effect});state.coins+=power*state.prestigeMult;state.advanced.xp+=1;render()});
$('buyAuto').addEventListener('click',()=>{const cost=Math.floor(10*Math.pow(1.7,state.autos));if(state.coins>=cost){state.coins-=cost;state.autos++;state.cps+=1*state.prestigeMult;state.advanced.xp+=2;render()}});
function renderSimpleUpgrades(){const c=$('simpleUpgrades');c.innerHTML='';state.simpleUpgrades.forEach(u=>{const d=document.createElement('div');d.className='upgrade';d.innerHTML=`<div><div class="name">${u.name} <span class="small">(${u.level})</span></div><div class="small">${u.desc}</div></div>`;const r=document.createElement('div');r.className='row';const cost=Math.floor(u.cost*Math.pow(1.6,u.level));const label=document.createElement('div');label.className='small';label.textContent='قیمت: '+cost;const btn=document.createElement('button');btn.className='button';btn.textContent='خرید';btn.onclick=()=>{if(state.coins>=cost){state.coins-=cost;u.level++;state.cps+=(u.effect*u.level);state.advanced.xp+=3;render()}};r.appendChild(label);r.appendChild(btn);d.appendChild(r);c.appendChild(d)})}
$('prestige').addEventListener('click',()=>{if(!confirm('Prestige کنید؟'))return;state.prestige++;state.prestigeMult=1+state.prestige*0.25;state.coins=0;state.cps=0;state.autos=0;state.simpleUpgrades.forEach(u=>u.level=0);state.advanced={shop:[],myCards:[],collectRate:0,xp:0};seedShop();render();save()});
function tick(){if(state.autos>0)state.coins+=state.autos*state.prestigeMult;let collect=0;state.advanced.myCards.forEach(c=>collect+=c.power*c.level);state.coins+=collect;state.advanced.collectRate=Math.floor(collect);state.cps=Math.floor(state.autos*state.prestigeMult+collect);render()}
setInterval(tick,1000);setInterval(save,5000);
function renderShop(){const shop=$('shopList');shop.innerHTML='';const q=$('searchCard').value.toLowerCase();state.advanced.shop.forEach(card=>{if(q&&!card.name.toLowerCase().includes(q))return;const d=document.createElement('div');d.className='card';d.innerHTML=`<div class="name">${card.name}</div><div class="meta">${card.rarity} • Power ${card.power}</div>`;const f=document.createElement('div');f.style.marginTop='8px';f.className='row';const cost=Math.floor(card.base*Math.pow(1.25,card.level-1));const b=document.createElement('button');b.className='button';b.textContent='خرید';b.onclick=()=>{if(state.coins>=cost){state.coins-=cost;state.advanced.myCards.push(Object.assign({},card));state.advanced.shop=state.advanced.shop.filter(c=>c.id!==card.id);state.advanced.xp+=5;render()}};const cl=document.createElement('div');cl.className='small';cl.textContent='قیمت: '+cost;f.appendChild(cl);f.appendChild(b);d.appendChild(f);shop.appendChild(d)})}
$('refreshShop').addEventListener('click',()=>{seedShop();render()});
$('searchCard').addEventListener('input',renderShop);
function renderMyCards(){const list=$('myCards');list.innerHTML='';state.advanced.myCards.forEach((card,idx)=>{const d=document.createElement('div');d.className='card';d.innerHTML=`<div class="name">${card.name} <span class="small">${card.rarity}</span></div><div class="meta">Lvl ${card.level} • Power ${card.power}</div>`;list.appendChild(d)})}
$('toRial').addEventListener('click',()=>{const r=state.coins/1000;$('converted').textContent=r.toFixed(2)+' ریال'})
load();seedShop();render();
</script>
</body>
</html>
