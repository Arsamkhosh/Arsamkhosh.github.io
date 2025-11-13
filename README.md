<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>پروژه‌های من</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
<style>
body { margin:0; font-family:'Vazirmatn',sans-serif; background:linear-gradient(135deg,#0f0f0f,#1a1a1a); color:#fff; text-align:center; overflow-x:hidden;}
header, section, footer { padding:40px 5%; opacity:0; transform:translateY(50px); transition:all 0.8s ease;}
h1 { font-size:2.8em; background: linear-gradient(90deg,#00ffff,#ff00cc,#ff9900); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:10px; text-shadow:0 0 10px rgba(0,255,255,0.5);}
h2 { color:#00ffff; margin-bottom:20px; font-size:1.8em;}

/* نوار بالا */
nav { position: fixed; top:-70px; left:0; right:0; background: rgba(0,0,0,0.6); backdrop-filter: blur(10px); display:flex; justify-content:center; gap:30px; padding:15px; z-index:1000; border-bottom:1px solid #00ffff44; transition: top 0.4s ease, box-shadow 0.4s ease, border-bottom 0.4s ease;}
nav.visible { top:0; }
nav a { color: #00ffff; text-decoration: none; font-weight: bold; transition:0.3s; cursor:pointer;}
nav a:hover { color: #ff00cc; text-shadow: 0 0 10px #ff00cc;}

/* دکمه ثبت نام */
#signupBtn { position: fixed; top:10px; left:10px; padding:8px 16px; font-weight:bold; border:none; border-radius:10px; background: linear-gradient(135deg,#00ffff,#ff00cc); color:#000; cursor:pointer; z-index:1100; }

/* فرم ثبت نام */
#signupFormOverlay { position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.9); display:none; justify-content:center; align-items:center; z-index:1200; }
#signupFormContainer { background:#111; padding:30px; border-radius:15px; width:90%; max-width:450px; box-shadow:0 0 25px rgba(0,255,255,0.3);}
#signupFormContainer h2 { margin-bottom:20px; color:#00ffff;}
#signupFormContainer label { display:block; text-align:right; margin-bottom:6px;}
#signupFormContainer input, #signupFormContainer select { width:100%; padding:10px; border-radius:8px; border:none; margin-bottom:15px; background:#222; color:#fff;}
#signupFormContainer button[type="submit"] { width:100%; padding:12px; border:none; border-radius:12px; background: linear-gradient(135deg,#00ffff,#ff00cc); color:#000; font-weight:bold; cursor:pointer; transition:0.3s;}
#signupFormContainer button[type="submit"]:hover { transform:scale(1.05); }
#signupFormContainer .checkbox-container { display:flex; align-items:center; justify-content:flex-start; gap:10px; margin-bottom:15px; color:#ccc; }
#signupFormContainer .checkbox-container input { accent-color:#00ffff; }

/* پروژه‌ها */
.projects { display:flex; justify-content:center; flex-wrap:wrap; gap:30px; margin-top:20px; }
.project-card { position:relative; background:rgba(255,255,255,0.08); padding:25px; width:300px; min-height:250px; border-radius:15px; border-left:5px solid #00ffff; box-shadow:0 4px 20px rgba(0,255,255,0.1); text-align:center; cursor:pointer; transition: transform 0.3s, box-shadow 0.3s, background 0.5s, border-left 0.3s;}
.project-card img { width:100%; border-radius:15px; margin-bottom:15px; }
.project-card:hover { transform:translateY(-5px); box-shadow:0 0 30px #ff00cc,0 0 10px #00ffff; border-left:5px solid #ff00cc;}
.project-title { font-size:1.4em; font-weight:bold; margin-bottom:10px; color:#00ffff; }
.project-desc { color:#ccc; margin-bottom:10px; font-size:0.9em; }
.project-tech { font-size:0.8em; color:#ff9900; font-weight:bold; }

/* درباره من */
.about-card { max-width:600px; margin:20px auto; background: rgba(255,255,255,0.08); padding:30px; border-radius:20px; box-shadow:0 0 20px rgba(255,255,255,0.1); display:flex; align-items:center; direction:rtl; text-align:right; transition: all 0.3s ease;}
.about-card:hover { box-shadow:0 0 20px #00ffff, 0 0 40px #ff00cc, 0 0 60px #ff9900; transform: translateY(-5px); border-left:5px solid #00ffff;}
.profile-pic { width:100px;height:100px; border-radius:50%; background:#00ffff; margin-left:20px; border:4px solid #ff00cc; overflow:hidden; box-shadow:0 0 15px #00ffff; flex-shrink:0;}
.about-text p { font-size:1.1em; line-height:1.8; }

/* ارتباط با من */
form { max-width:500px; margin:40px auto; background: rgba(255,255,255,0.08); padding:25px; border-radius:15px; box-shadow:0 0 25px rgba(0,255,255,0.2); direction:rtl; text-align:right;}
input,textarea{ width:100%; padding:12px; border-radius:10px; border:1px solid rgba(0,255,255,0.3); background-color: rgba(255,255,255,0.1); color:#fff; margin-bottom:15px;}
::placeholder{ color:#aaa; opacity:1; }
button[type="submit"] { background: linear-gradient(135deg,#00ffff,#ff00cc); color:#000; font-weight:bold; padding:10px 20px; border:none; border-radius:12px; cursor:pointer; transition:0.3s;}
button[type="submit"]:hover{ transform:scale(1.05); }

/* FAQ */
.faq { max-width:800px; margin:50px auto; text-align:right; direction:rtl; }
.faq h2 { text-align: center; }
.faq-item { background: rgba(255,255,255,0.08); padding:15px; border-radius:10px; margin-bottom:10px; cursor:pointer; border:2px solid #00ffff; transition:0.3s; }
.faq-item:hover { box-shadow:0 0 15px #00ffff,0 0 25px #ff00cc; }
.faq-item .answer { display:none; margin-top:10px; color:#ccc; font-size:0.9em; }

/* ستاره‌ها */
.star { position: fixed; width:2px; height:2px; background:#fff; border-radius:50%; pointer-events:none; z-index:0; animation:twinkle 3s infinite;}
@keyframes twinkle {0%,100%{opacity:0.2;}50%{opacity:1;}}

/* ماینر */
#miner-section { padding:40px 5%; text-align:center; }
#miner-section h2 { color:#00ffff; margin-bottom:18px; font-size:1.8em; }
.miner-wrap { display:flex; flex-direction:column; align-items:center; gap:16px; }
.miner-circle { width:160px; height:160px; border-radius:50%; background: radial-gradient(circle at 30% 30%, #b8ff00 0%, #77cc00 40%, #1f6b00 100%); box-shadow: 0 6px 30px rgba(0,255,204,0.12), inset 0 -6px 18px rgba(0,0,0,0.25); display:flex; align-items:center; justify-content:center; cursor:pointer; user-select:none; transition: transform 0.12s ease, box-shadow 0.12s; border:4px solid rgba(255,255,255,0.06);}
.miner-circle:active { transform: scale(0.96); }
.miner-label { font-weight:700; color:#001100; text-shadow:0 1px 0 rgba(255,255,255,0.2); }
.miner-stats { color:#ccc; font-size:0.95em; }
.coin-count { color:#ffdd00; font-weight:bold; font-size:1.2em; }
.coin-particle { position:fixed; width:12px; height:12px; border-radius:50%; background: radial-gradient(circle,#ffd84d 0%, #ffb300 60%); pointer-events:none; z-index:9999; transform:translate(-50%,-50%); opacity:1; transition: opacity 0.6s linear;}
.miner-toast { position:fixed; top:20px; right:20px; background:rgba(0,0,0,0.7); color:#fff; padding:8px 12px; border-radius:8px; font-weight:600; z-index:10000; box-shadow:0 6px 18px rgba(0,0,0,0.5); display:none; }

/* فوتر */
footer{ margin-top:50px; color:#ccc; display:flex; justify-content:center; flex-direction:column; align-items:center; gap:10px; }
footer a{ color:#00ffff; text-decoration:none;}
footer a:hover{ text-decoration:underline; }

/* ریسپانسیو */
@media(max-width:650px){
  .projects { flex-direction:column; align-items:center; }
  .project-card { width:90%; }
  .about-card { flex-direction:column; text-align:center; }
  .profile-pic { margin-left:0;margin-bottom:20px; }
  .about-text { text-align:center; }
  .miner-circle { width:120px; height:120px; }
}
</style>
</head>
<body>

<!-- دکمه ثبت نام -->
<button id="signupBtn">ورود/ثبت نام</button>

<!-- فرم ثبت نام Overlay -->
<div id="signupFormOverlay">
  <div id="signupFormContainer">
    <h2>ثبت نام</h2>
    <form id="signupForm" action="https://formspree.io/f/mnngzdlw" method="POST">
      <label for="firstName">نام</label>
      <input type="text" id="firstName" name="firstName" required placeholder="نام">
      <label for="lastName">نام خانوادگی</label>
      <input type="text" id="lastName" name="lastName" required placeholder="نام خانوادگی">
      <label for="email">ایمیل</label>
      <input type="email" id="email" name="email" required placeholder="example@example.com">
      <label for="phone">شماره تلفن</label>
      <input type="tel" id="phone" name="phone" placeholder="0912xxxxxxx">
      <div class="checkbox-container">
        <input type="checkbox" id="euLaw" name="euLaw" required>
        <label for="euLaw">من قوانین اتحادیه اروپا را قبول می‌کنم</label>
      </div>
      <button type="submit">ثبت نام</button>
      <p id="signupMessage" style="margin-top:10px; font-weight:bold;"></p>
    </form>
  </div>
</div>

<!-- نوار بالا -->
<nav>
  <a href="#about-me">درباره من</a>
  <a href="#projects-section">پروژه‌ها</a>
  <a href="#contact-section">ارتباط</a>
  <a href="#miner-section">ماینر</a>
</nav>

<header>
  <h1>خوش آمدید</h1>
  <p>!خوش آمدید به سایت من، در ادامه پروژه‌ها را می‌بینید</p>
</header>

<section id="about-me">
  <h2>درباره من</h2>
  <div class="about-card">
    <div class="profile-pic"></div>
    <div class="about-text">
      <p id="about-text-content">
        سلام! من <strong>آرسام خوش‌اخلاق</strong> هستم. توسعه‌دهنده وب و علاقه‌مند به تکنولوژی‌ها. عاشق خلاقیت در طراحی و منطق در برنامه‌نویسی هستم و همچنین به ماینکرفت و سرورهای بازی علاقه دارم 🌐✨
      </p>
    </div>
  </div>
</section>

<section id="projects-section">
  <h2>پروژه‌ها</h2>
  <div class="projects">
    <div class="project-card">
      <img src="minecraft.png" alt="minecraft.png">
      <div class="project-title">سرور ماینکرفت 🎮</div>
      <div class="project-desc">سرور اختصاصی برای ماینکرفت با پلاگین‌های مخصوص دارم و برای همکاری به اینستاگرام یا بخش ارتباط با ما پیام بده</div>
      <div class="project-tech">Java / Spigot / Minecraft</div>
    </div>
    <div class="project-card">
      <img src="site.png" alt="site.png">
      <div class="project-title">سایت شخصی 🌐</div>
      <div class="project-desc">من به طراحی سایت علاقه دارم و این سایت رو خودم و با کمک دوستم نوشتم</div>
      <div class="project-tech">HTML / CSS / JavaScript</div>
    </div>
    <div class="project-card">
      <img src="edite.png" alt="edite.png">
      <div class="project-title">ادیت ویدیو 🎬</div>
      <div class="project-desc">به ادیت ویدیو علاقه دارم و کارهای خود را در یوتیوب منتشر می‌کنم</div>
      <div class="project-tech">Capcut / Filmora / Shotcut</div>
    </div>
  </div>
</section>

<section class="faq">
  <h2>پرسش و پاسخ پر تکرار</h2>
  <div class="faq-item"><div class="question">این سایت با چه زبانی ساخته شده؟</div><div class="answer">این سایت با HTML، CSS و JavaScript ساخته شده است.</div></div>
  <div class="faq-item"><div class="question">آموزش به صورت رایگان میدی؟</div><div class="answer">آموزش میدم ولی رایگان نه</div></div>
  <div class="faq-item"><div class="question">میشه بیام توی سرورتون برای کمک؟</div><div class="answer">بله حتما با استفاده از فرم تماس و اینستاگرام به من بگو</div></div>
  <div class="faq-item"><div class="question">سفارش سایت و سرور میگیری؟</div><div class="answer">بله سایت و سرور ماینکرفت براتون می‌سازم ولی در ازای مبلغی</div></div>
  <div class="faq-item"><div class="question">چطور می‌توانم با شما در ارتباط باشم؟</div><div class="answer">به راحتی می‌توانید از فرم تماس یا لینک اینستاگرام با من در ارتباط باشید</div></div>
</section>

<section id="contact-section">
  <h2>ارتباط با من</h2>
  <form id="contactForm" action="https://formspree.io/f/mnngzdlw" method="POST">
    <label for="name">نام:</label>
    <input type="text" id="name" name="name" required placeholder="نام شما">
    <label for="email">ایمیل:</label>
    <input type="email" id="email" name="email" required placeholder="example@example.com">
    <label for="phone">شماره تلفن:</label>
    <input type="tel" id="phone" name="phone" placeholder="0912xxxxxxx">
    <label for="message">پیام:</label>
    <textarea id="message" name="message" rows="5" required placeholder="متن پیام..."></textarea>
    <button type="submit">ارسال پیام</button>
    <p id="formMessage" style="direction: rtl; text-align: right; margin-top: 15px; font-weight: bold;"></p>
  </form>
</section>

<!-- بخش ماینر -->
<section id="miner-section">
  <h2>ماینر اورانیوم</h2>
  <div class="miner-wrap">
    <div id="minerCircle" class="miner-circle" role="button" aria-label="کلیک برای استخراج اورانیوم">
      <div class="miner-label">ماین کن ⚛️</div>
    </div>
    <div class="miner-stats">
      تعداد اورانیوم‌کوین: <span id="coinCount" class="coin-count">0</span>
      &nbsp;|&nbsp;
      سرعت: <span id="minerSpeed">1</span> کوین/کلیک
    </div>
    <div style="margin-top:6px;">
      <button id="sellBtn" style="background:linear-gradient(90deg,#ff9a00,#ff0055); border:none; padding:8px 14px; border-radius:10px; cursor:pointer; font-weight:bold;">فروش همه کوین‌ها</button>
    </div>
  </div>
</section>

<div id="minerToast" class="miner-toast"></div>

<footer>
  <p>تمامی حقوق این سایت محفوظ است © 2025</p>
  <a href="https://github.com/arsam">GitHub من</a>
</footer>

<script>
// ===== Scroll Animation و nav =====
window.addEventListener('scroll', ()=>{
  document.querySelectorAll('header, section, footer').forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){ el.style.opacity='1'; el.style.transform='translateY(0)'; }
  });

  const nav = document.querySelector('nav');
  if(window.scrollY>50){ nav.classList.add('visible'); } else { nav.classList.remove('visible'); }
});

// ===== FAQ Toggle =====
document.querySelectorAll('.faq-item').forEach(item=>{
  item.addEventListener('click', ()=>{
    const ans = item.querySelector('.answer');
    ans.style.display = ans.style.display==='block' ? 'none':'block';
  });
});

// ===== فرم ثبت نام =====
const signupBtn = document.getElementById('signupBtn');
const signupOverlay = document.getElementById('signupFormOverlay');
const signupForm = document.getElementById('signupForm');
const signupMessage = document.getElementById('signupMessage');

signupBtn.addEventListener('click', ()=>{ signupOverlay.style.display='flex'; });

signupForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const formData = new FormData(signupForm);
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  // ذخیره برای استفاده بعدی
  localStorage.setItem('fullName', firstName);
  // اتصال به Formspree
  fetch(signupForm.action, { method:'POST', body: formData, headers:{'Accept':'application/json'} })
    .then(response=>{
      if(response.ok){
        signupMessage.textContent = `سلام ${firstName}! ثبت نام موفق بود 🌟`;
        signupForm.reset();
        setTimeout(()=> signupOverlay.style.display='none',2000);
      } else { signupMessage.textContent='مشکلی پیش آمد، دوباره تلاش کنید'; }
    }).catch(()=>{ signupMessage.textContent='خطا در ارسال فرم'; });
});

// ===== ماینر =====
(function(){
  const miner = document.getElementById('minerCircle');
  const countEl = document.getElementById('coinCount');
  const speedEl = document.getElementById('minerSpeed');
  const toast = document.getElementById('minerToast');
  const sellBtn = document.getElementById('sellBtn');

  const STORAGE_KEY = 'uraniumCoins_v1';
  const STORAGE_SPEED = 'uraniumSpeed_v1';
  let coins = parseInt(localStorage.getItem(STORAGE_KEY) || '0',10);
  let speed = parseInt(localStorage.getItem(STORAGE_SPEED) || '1',10);
  let cooldown=false;
  countEl.textContent=coins; speedEl.textContent=speed;

  function showToast(txt,d=1500){ toast.textContent=txt; toast.style.display='block'; setTimeout(()=>toast.style.display='none',d); }

  function spawnParticles(x,y,n=8){
    for(let i=0;i<n;i++){
      const p=document.createElement('div'); p.className='coin-particle';
      p.style.left=x+'px'; p.style.top=y+'px'; document.body.appendChild(p);
      const ang=Math.random()*2*Math.PI; const dist=60+Math.random()*120;
      const tx=x+Math.cos(ang)*dist; const ty=y+Math.sin(ang)*dist-(20+Math.random()*40);
      p.animate([{transform:`translate(-50%,-50%) translate(0,0) scale(1)`,opacity:1},{transform:`translate(-50%,-50%) translate(${tx-x}px,${ty-y}px) scale(0.6)`,opacity:0}],{duration:700+Math.random()*400,easing:'cubic-bezier(.2,.8,.2,1)'});
      setTimeout(()=>p.remove(),1100);
    }
  }

  function mine(e){
    if(cooldown)return; cooldown=true;
    setTimeout(()=>cooldown=false,300);
    coins+=speed; localStorage.setItem(STORAGE_KEY,coins); countEl.textContent=coins;
    const rect=miner.getBoundingClientRect(); spawnParticles(rect.left+rect.width/2, rect.top+rect.height/2,12);
    miner.style.transform='scale(0.96)'; miner.style.boxShadow='0 12px 40px rgba(0,255,204,0.14)';
    setTimeout(()=>{miner.style.transform='scale(1)'; miner.style.boxShadow='';},140);
    showToast(`+${speed} اورانیوم‌کوین ماین شد!`);
  }
  miner.addEventListener('click',mine);

  sellBtn.addEventListener('click',()=>{
    if(coins<=0){ showToast('هیچ کوینی برای فروش نیست'); return; }
    const earned=coins*10; coins=0; localStorage.setItem(STORAGE_KEY,coins); countEl.textContent=coins;
    showToast(`فروختی و ${earned} تومان گرفتی!`);
  });

})();
</script>

</body>
</html>
