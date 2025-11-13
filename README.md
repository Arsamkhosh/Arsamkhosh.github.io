<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Arsam Coin Miner</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
<style>
body {
  margin:0;
  font-family:'Vazirmatn',sans-serif;
  background: linear-gradient(135deg,#0f0f0f,#1a1a1a);
  color:#fff;
  text-align:center;
  overflow-x:hidden;
}
header, section, footer { padding: 40px 5%; opacity:0; transform:translateY(50px); transition:all 0.8s ease; }

h1 { font-size:2.8em; background: linear-gradient(90deg,#00ffff,#ff00cc,#ff9900); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:10px; text-shadow:0 0 10px rgba(0,255,255,0.5);}
h2 { color:#00ffff; margin-bottom:20px; font-size:1.8em; }

/* نوار بالا */
nav {
  position: fixed;
  top:0;
  left:0; right:0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(10px);
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:10px 20px;
  z-index: 1000;
  border-bottom: 1px solid #00ffff44;
}
nav a { color:#00ffff; text-decoration:none; font-weight:bold; margin-left:15px; }
nav a:hover { color:#ff00cc; text-shadow:0 0 10px #ff00cc; }
#shopBtn { cursor:pointer; }

/* لودینگ */
#loading-screen {
  position:fixed;
  top:0; left:0; right:0; bottom:0;
  background:#0f0f0f;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  z-index:2000;
  color:#00ffff;
  font-size:1.5em;
  font-family: monospace;
}
#loading-text { margin-bottom:20px; color:#00ffff; text-shadow:0 0 10px #00ffff; }
#loading-bar { width:300px; height:10px; background:#222; border-radius:10px; overflow:hidden; box-shadow:0 0 10px #00ffff; }
#loading-fill { width:0%; height:100%; background:linear-gradient(90deg,#00ffff,#ff00cc,#ff9900); transition:width 0.1s linear; }

/* ماینر */
#miner-section {
  margin-top:150px;
}
#minerCircle {
  width:120px; height:120px; border-radius:50%;
  background:#00ffff; display:flex; align-items:center; justify-content:center;
  margin: 0 auto;
  cursor:pointer;
  font-weight:bold; font-size:1em; color:#000;
  box-shadow:0 0 20px #00ffff;
  transition: transform 0.2s, background 0.3s;
}
#minerCircle:hover { transform: scale(1.1); }
#coinCount, #dollarCount { margin-top:20px; font-size:1.2em; }

/* شاپ */
#shopModal {
  display:none;
  position:fixed; top:0; left:0; right:0; bottom:0;
  background: rgba(0,0,0,0.9);
  z-index:1500;
  color:#fff;
  display:flex; flex-direction:column; align-items:center; justify-content:center;
}
#shopModal h2 { margin-bottom:20px; color:#00ffff; }
.shopItem { margin:10px 0; cursor:pointer; padding:10px 20px; border:1px solid #00ffff; border-radius:10px; transition:0.3s; }
.shopItem:hover { background:#00ffff; color:#000; }

/* فوتر */
footer{ margin-top:50px; color:#ccc; display:flex; justify-content:center; flex-direction:column; align-items:center; gap:10px; }
footer a{ color:#00ffff; text-decoration:none;}
footer a:hover{ text-decoration:underline; }
</style>
</head>
<body>

<!-- لودینگ -->
<div id="loading-screen">
  <div id="loading-text">Loading Arsam Coin Miner...</div>
  <div id="loading-bar"><div id="loading-fill"></div></div>
</div>

<!-- نوار بالا -->
<nav>
  <div>Arsam Coin Miner</div>
  <a id="shopBtn">Shop 🛒</a>
</nav>

<section id="miner-section">
  <h2>ماینر Arsam Coin</h2>
  <div id="minerCircle">Mine</div>
  <div id="coinCount">Coins: 0</div>
  <div id="dollarCount">USD: $0</div>
</section>

<!-- شاپ -->
<div id="shopModal">
  <h2>Shop</h2>
  <div class="shopItem" data-type="boost">Boost Click +1 ($1)</div>
  <div class="shopItem" data-type="color">Change Miner Color ($2)</div>
  <div class="shopItem" id="closeShop">Close</div>
</div>

<footer>
  © 2025 تمامی حقوق محفوظ است
  <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank">اینستاگرام من</a>
</footer>

<script>
// لودینگ
const loadingFill = document.getElementById('loading-fill');
let progress = 0;
const interval = setInterval(()=>{
  progress += 5;
  loadingFill.style.width = progress+"%";
  if(progress>=100){
    clearInterval(interval);
    document.getElementById('loading-screen').style.display='none';
    document.querySelectorAll('header, section, footer').forEach((el,idx)=>{
      setTimeout(()=>{ el.style.opacity='1'; el.style.transform='translateY(0)'; }, idx*150);
    });
  }
},100);

// مقادیر ذخیره شده
let coins = parseInt(localStorage.getItem('arsamCoins')) || 0;
let dollar = parseFloat(localStorage.getItem('arsamDollar')) || 0;
let clickBoost = parseInt(localStorage.getItem('arsamBoost')) || 1;

// المان‌ها
const miner = document.getElementById('minerCircle');
const coinCount = document.getElementById('coinCount');
const dollarCount = document.getElementById('dollarCount');

// نمایش مقادیر اولیه
coinCount.textContent = `Coins: ${coins}`;
dollarCount.textContent = `USD: $${dollar.toFixed(2)}`;

// ماین کردن
miner.addEventListener('click', ()=>{
  coins += clickBoost;
  coinCount.textContent = `Coins: ${coins}`;
  localStorage.setItem('arsamCoins', coins);
});

// فروش کوین‌ها
coinCount.addEventListener('click', ()=>{
  if(coins>0){
    dollar += coins*0.5;
    coins = 0;
    coinCount.textContent = `Coins: ${coins}`;
    dollarCount.textContent = `USD: $${dollar.toFixed(2)}`;
    localStorage.setItem('arsamCoins', coins);
    localStorage.setItem('arsamDollar', dollar.toFixed(2));
    alert('Coins sold for USD!');
  }
});

// شاپ
const shopBtn = document.getElementById('shopBtn');
const shopModal = document.getElementById('shopModal');
const closeShop = document.getElementById('closeShop');
shopBtn.addEventListener('click', ()=>shopModal.style.display='flex');
closeShop.addEventListener('click', ()=>shopModal.style.display='none');

document.querySelectorAll('.shopItem').forEach(item=>{
  item.addEventListener('click', ()=>{
    const type = item.dataset.type;
    if(type==='boost'){
      if(dollar>=1){
        dollar -=1;
        clickBoost +=1;
        localStorage.setItem('arsamBoost', clickBoost);
        dollarCount.textContent = `USD: $${dollar.toFixed(2)}`;
        localStorage.setItem('arsamDollar', dollar.toFixed(2));
        alert('Click Boost purchased!');
      } else alert('Not enough USD!');
    } else if(type==='color'){
      if(dollar>=2){
        dollar -=2;
        miner.style.background = '#ff00cc';
        dollarCount.textContent = `USD: $${dollar.toFixed(2)}`;
        localStorage.setItem('arsamDollar', dollar.toFixed(2));
        alert('Miner color changed!');
      } else alert('Not enough USD!');
    }
  });
});
</script>

</body>
</html>
