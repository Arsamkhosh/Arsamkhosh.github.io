<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>پروژه‌های من</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700;800&display=swap" rel="stylesheet">
<style>
:root{
  --neon-1:#00ffff; 
  --neon-2:#ff00cc; 
  --accent-grad:linear-gradient(135deg,var(--neon-1),var(--neon-2));
  --bg-dark-start:#0a0a0a;
  --bg-dark-end:#111111;
}

body{
  margin:0;
  padding:0;
  font-family:'Vazirmatn',sans-serif;
  background:linear-gradient(135deg,var(--bg-dark-start),var(--bg-dark-end));
  color:#eaeaea;
  text-align:center;
  overflow-x:hidden;
  min-height:100vh;
  position:relative;
  z-index:1;
}

.star{
  position:fixed;
  width:2px;
  height:2px;
  border-radius:50%;
  background:#fff;
  opacity:0.8;
  z-index:0;
  pointer-events:none;
  animation:twinkle 3s infinite;
}
@keyframes twinkle{
  0%,100%{opacity:0.2;}
  50%{opacity:1;}
}

header{
  padding:40px 0 10px;
}
h1{
  color:#fff;
  font-size:2.8rem;
  font-weight:800;
  text-shadow:
    0 0 7px var(--neon-1),
    0 0 15px var(--neon-1),
    0 0 25px var(--neon-2),
    0 0 40px var(--neon-2),
    0 0 70px var(--neon-2);
  cursor:pointer;
  transition:all 0.3s ease;
}
h1:hover{
  transform:scale(1.03);
  text-shadow:
    0 0 10px var(--neon-1),
    0 0 30px var(--neon-1),
    0 0 50px var(--neon-2),
    0 0 80px var(--neon-2),
    0 0 120px var(--neon-2);
}

.neon-divider{
  width:70%;
  max-width:600px;
  height:2px;
  background:var(--accent-grad);
  margin:40px auto;
  border:none;
  border-radius:2px;
  box-shadow:
    0 0 10px var(--neon-1),
    0 0 20px var(--neon-2);
}

#about-me{
  margin:40px auto;
  max-width:700px;
}
.about-card{
  display:flex;
  gap:16px;
  align-items:center;
  background:rgba(255,255,255,0.03);
  border-radius:14px;
  padding:20px;
  box-shadow:0 6px 22px rgba(0,0,0,0.45);
}
.profile-pic{
  width:100px;
  height:100px;
  border-radius:50%;
  background:var(--neon-1);
  border:3px solid var(--neon-2);
  box-shadow:0 0 10px var(--neon-1),0 0 20px var(--neon-2),0 0 30px var(--neon-1);
  flex-shrink:0;
  animation:glow 2.5s infinite alternate;
}
@keyframes glow{
  0%{ box-shadow:0 0 8px var(--neon-1),0 0 16px var(--neon-2);}
  50%{ box-shadow:0 0 15px var(--neon-1),0 0 25px var(--neon-2);}
  100%{ box-shadow:0 0 12px var(--neon-1),0 0 20px var(--neon-2);}
}
.about-card p{
  font-size:1.05rem;
  line-height:1.6;
  color:#dfe;
  text-align:right;
}

.project-card{
  margin:20px auto;
  max-width:700px;
  background:rgba(255,255,255,0.03);
  border-radius:14px;
  padding:20px;
  box-shadow:0 6px 22px rgba(0,0,0,0.45);
  transition: transform 0.2s, box-shadow 0.2s;
}
.project-card:hover{
  transform:translateY(-6px);
  box-shadow:0 14px 40px rgba(0,0,0,0.55);
}
.project-title{
  font-size:1.3rem;
  font-weight:700;
  color:var(--neon-1);
  margin-bottom:8px;
}
.project-desc{
  font-size:1rem;
  color:#cfdada;
  margin-bottom:10px;
}
.project-tech{
  font-size:0.9rem;
  color:#ffd399;
  font-weight:700;
}

.server-terminal{
  background:#000;
  border-radius:10px;
  border:1px solid rgba(0,255,255,0.12);
  padding:12px;
  font-family:ui-monospace,Monaco,"Roboto Mono",monospace;
  color:#00ff99;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:10px;
}
#player-count.online{
  color:var(--neon-1);
  font-weight:700;
}
#player-count.offline{
  color:var(--neon-2);
  font-weight:700;
}
.btn-copy{
  background:var(--accent-grad);
  border:none;
  color:#000;
  padding:6px 10px;
  border-radius:8px;
  cursor:pointer;
  font-weight:700;
  transition:all 0.15s ease;
}
.btn-copy:hover{
  transform:translateY(-2px);
  box-shadow:0 8px 20px rgba(255,0,204,0.1);
}

.contact-card{
  max-width:700px;
  margin:20px auto;
  background:rgba(255,255,255,0.03);
  border-radius:14px;
  padding:20px;
}
.contact-card input, .contact-card textarea{
  width:90%;
  padding:10px;
  border-radius:10px;
  border:1px solid rgba(0,255,255,0.1);
  background:rgba(255,255,255,0.03);
  color:#eaeaea;
  font-family:inherit;
  margin-bottom:10px;
}
.btn-submit{
  background:var(--accent-grad);
  color:#000;
  border:none;
  padding:8px 18px;
  border-radius:30px;
  font-weight:800;
  cursor:pointer;
  box-shadow:0 0 10px rgba(255,0,204,0.25);
  transition:0.3s;
  animation:neon-flicker 1.5s infinite alternate;
}
.btn-submit:hover{
  transform:scale(1.05);
  box-shadow:0 0 20px rgba(255,0,204,0.45);
}
@keyframes neon-flicker {
  0%, 100% { box-shadow: 0 0 8px var(--neon-2), 0 0 12px var(--neon-1);}
  50% { box-shadow: 0 0 15px var(--neon-2), 0 0 25px var(--neon-1);}
  70% { box-shadow: 0 0 5px var(--neon-2), 0 0 10px var(--neon-1);}
}

footer{
  margin-top:30px;
  padding:18px;
  color:#bfcfcf;
}
footer a{color:var(--neon-1);}
.social-buttons{
  display:flex;
  gap:15px;
  justify-content:center;
  margin-top:15px;
}
.social-buttons a{
  display:flex;
  align-items:center;
  justify-content:center;
  width:50px;
  height:50px;
  background:#111;
  color:#fff;
  border-radius:50%;
  transition:all 0.3s ease;
  text-decoration:none;
  box-shadow: 0 0 10px rgba(0,255,255,0.2), 0 0 15px rgba(255,0,204,0.2);
}
.social-buttons a:hover{
  transform: translateY(-5px) scale(1.1);
  box-shadow:0 0 15px #00ffff,0 0 25px #ff00cc,0 0 35px #ff00cc;
}
.social-buttons svg{
  width:24px;
  height:24px;
}

@media(max-width:720px){
  .about-card, .project-card, .contact-card{width:90%;}
  .profile-pic{width:80px;height:80px;}
}
</style>
</head>
<body>

<header>
  <h1>پروژه‌های من</h1>
</header>

<script>
// ستاره‌ها
for(let i=0;i<150;i++){
  const s=document.createElement('div');
  s.className='star';
  const size=1+Math.random()*2;
  s.style.width=s.style.height=size+'px';
  s.style.left=(Math.random()*100)+'vw';
  s.style.top=(Math.random()*100)+'vh';
  s.style.opacity=(0.2+Math.random()*0.8).toString();
  document.body.appendChild(s);
}
</script>

<section id="about-me">
  <div class="about-card">
    <div class="profile-pic"></div>
    <p>سلام! من <strong>آرسام خوش اخلاق</strong> هستم — توسعه‌دهنده وب، ماینکرفت‌باز و سازنده سرورهای اختصاصی. اینجا می‌تونید پروژه‌ها و فعالیت‌های من رو ببینید.</p>
  </div>
</section>

<hr class="neon-divider">

<section id="projects-section">
  <div class="project-card">
    <div class="project-title">🌍 سرور ماینکرفت LAVA JUMP</div>
    <div class="project-desc">رقابت کن و از سرور ما لذت ببر! آدرس سرور و وضعیت آنلاین در زیر نمایش داده می‌شود.</div>
    <div class="server-terminal">
      <div class="ip" id="server-ip">lavajumptest.falixsrv.me</div>
      <button class="btn-copy" id="copy-btn">📋 کپی</button>
    </div>
    <div id="player-count">در حال بررسی وضعیت سرور...</div>
  </div>

  <div class="project-card">
    <div class="project-title">سایت شخصی 🌐</div>
    <div class="project-desc">طراحی و پیاده‌سازی سایت شخصی با تمرکز روی ظاهر نئون و تجربه‌ی کاربری.</div>
    <div class="project-tech">HTML / CSS / JavaScript</div>
  </div>

  <div class="project-card">
    <div class="project-title">ادیت ویدیو 🎬</div>
    <div class="project-desc">ادیت و تولید محتوا برای یوتیوب و شبکه‌های اجتماعی.</div>
    <div class="project-tech">CapCut / Filmora / Shotcut</div>
  </div>
</section>

<section id="contact-section">
  <hr class="neon-divider">
  <div class="contact-card">
    <form id="contact-form" action="https://formspree.io/f/mnngzdlw" method="POST">
      <input type="text" name="name" placeholder="نام شما" required>
      <input type="email" name="email" placeholder="example@example.com" required>
      <textarea name="message" rows="4" placeholder="متن پیام..." required></textarea>
      <button class="btn-submit" type="submit">ارسال ✉</button>
    </form>
  </div>
</section>

<footer>
  <p>© 2025 تمامی حقوق محفوظ است — آرسام خوش اخلاق</p>
  <div class="social-buttons">
    <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank" aria-label="اینستاگرام">
      <svg viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 190.5c-41.6 0-75.6-33.9-75.6-75.6s33.9-75.6 75.6-75.6 75.6 33.9 75.6 75.6-33.9 75.6-75.6 75.6zm146.4-194.3c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27s12.1-27 27-27c14.9 0 27 12.1 27 27zm76.1 27.2c-1.7-35.7-9.9-67.3-36.1-93.5-26.2-26.2-57.8-34.4-93.5-36.1-37-2.1-148.1-2.1-185.1 0-35.7 1.7-67.3 9.9-93.5 36.1s-34.4 57.8-36.1 93.5c-2.1 37-2.1 148.1 0 185.1 1.7 35.7 9.9 67.3 36.1 93.5s57.8 34.4 93.5 36.1c37 2.1 148.1 2.1 185.1 0 35.7-1.7 67.3-9.9 93.5-36.1s34.4-57.8 36.1-93.5c2.1-37 2.1-148.1 0-185.1zm-48.3 232c-7.8 19.5-22.9 34.6-42.4 42.4-29.4 11.7-99.3 9-132.8 9s-103.4 2.6-132.8-9c-19.5-7.8-34.6-22.9-42.4-42.4-11.7-29.4-9-99.3-9-132.8s-2.6-103.4 9-132.8c7.8-19.5 22.9-34.6 42.4-42.4 29.4-11.7 99.3-9 132.8-9s103.4-2.6 132.8 9c19.5 7.8 34.6 22.9 42.4 42.4 11.7 29.4 9 99.3 9 132.8s2.7 103.4-9 132.8z"/></svg>
    </a>
    <a href="https://github.com/arsamkhosh" target="_blank" aria-label="گیت‌هاب">
      <svg viewBox="0 0 496 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-2.9 0-5.2-1.6-5.2-3.6 0-2 2.3-3.6 5.2-3.6 2.9 0 5.2 1.6 5.2 3.6zm-33.5-6.2c-.7 1.5 1.5 3.2 5.1 3.6 3.6.4 7.2-.4 7.9-1.9.7-1.5-1.5-3.2-5.1-3.6-3.6-.4-7.2.4-7.9 1.9zM248 8C111 8 0 119 0 256c0 110.3 71.3 203.8 170 237 12.4 2.3 17-5.4 17-12v-42.1c-69.1 15-83.8-33.2-83.8-33.2-11.2-28.5-27.3-36.2-27.3-36.2-22.3-15.2 1.7-14.9 1.7-14.9 24.6 1.7 37.6 25.3 37.6 25.3 21.9 37.5 57.5 26.7 71.5 20.4 2.2-15.8 8.6-26.7 15.6-32.8-55-6.2-112.5-27.4-112.5-121.8 0-27 9.6-49 25.4-66.3-2.6-6.2-11-31.3 2.4-65 0 0 20.7-6.6 67.8 25.2 19.7-5.5 40.8-8.3 61.8-8.4 21 0 42.1 2.9 61.8 8.4 47.1-31.8 67.8-25.2 67.8-25.2 13.5 33.8 5 58.8 2.4 65 15.8 17.3 25.4 39.3 25.4 66.3 0 94.7-57.8 115.6-112.9 121.8 8.8 7.6 16.7 22.5 16.7 45.4v67.4c0 6.6 4.6 14.3 17 12C424.7 459.8 496 366.3 496 256 496 119 385 8 248 8z"/></svg>
    </a>
  </div>
</footer>

<script>
// کپی آی‌پی
const copyBtn = document.getElementById('copy-btn');
copyBtn.addEventListener('click',()=>{
  navigator.clipboard.writeText(document.getElementById('server-ip').innerText);
  alert('آدرس سرور کپی شد!');
});

// شبیه‌سازی تعداد بازیکن آنلاین
const playerCount=document.getElementById('player-count');
function updatePlayers(){
  const online=Math.floor(Math.random()*50);
  if(online>0){
    playerCount.innerText=`تعداد بازیکن آنلاین: ${online}`;
    playerCount.className='online';
  }else{
    playerCount.innerText='سرور آفلاین است';
    playerCount.className='offline';
  }
}
updatePlayers();
setInterval(updatePlayers,10000);
</script>
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>پروژه‌های من</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700;800&display=swap" rel="stylesheet">
<style>
:root{
  --neon-1:#00ffff;
  --neon-2:#ff00cc;
  --accent-grad:linear-gradient(135deg,var(--neon-1),var(--neon-2));
  --bg-day-start:#dbefff;
  --bg-day-end:#b7e0ff;
  --bg-night-start:#080808;
  --bg-night-end:#111111;
}

/* ---------- Base ---------- */
*{box-sizing:border-box}
body{
  margin:0;
  padding:0;
  font-family:'Vazirmatn',sans-serif;
  color:#eaeaea;
  text-align:center;
  min-height:100vh;
  overflow-x:hidden;
  transition:background 0.6s ease;
  background:linear-gradient(135deg,var(--bg-night-start),var(--bg-night-end));
  position:relative;
}

/* ---------- Stars (z-index behind content) ---------- */
.stars-wrap{position:fixed;inset:0;pointer-events:none;z-index:0;}
.star{position:absolute;background:#fff;border-radius:50%;opacity:.9;filter:blur(.2px);}

/* ---------- Header ---------- */
.header{padding:36px 16px 6px;position:relative;z-index:2}
h1{
  margin:0;color:#fff;font-size:2.4rem;font-weight:800;
  text-shadow:0 0 8px var(--neon-1),0 0 20px var(--neon-2);
  cursor:pointer;
  transition:transform .25s;
}
h1:hover{transform:scale(1.03)}

/* ---------- Neon Divider ---------- */
.neon-divider{
  width:72%;max-width:760px;height:2px;margin:28px auto;border-radius:2px;
  background:var(--accent-grad);box-shadow:0 0 15px var(--neon-1),0 0 30px var(--neon-2);
  border:none;
  position:relative;z-index:2;
}

/* ---------- About ---------- */
#about-me{max-width:880px;margin:28px auto 10px;position:relative;z-index:2}
.about-card{
  display:flex;gap:18px;align-items:center;
  background:rgba(255,255,255,0.03);border-radius:12px;padding:18px;
  box-shadow:0 6px 20px rgba(0,0,0,0.45);
}
.profile-pic{
  width:96px;height:96px;border-radius:50%;
  background:linear-gradient(135deg,var(--neon-1),#8ff);border:3px solid var(--neon-2);
  box-shadow:0 0 12px var(--neon-1),0 0 22px var(--neon-2);
  flex-shrink:0;
}
.about-text{ text-align:right; color:#dfe; line-height:1.6; font-size:1.03rem }

/* ---------- Projects ---------- */
.section-wrap{max-width:880px;margin:18px auto;position:relative;z-index:2}
.project-card{
  background:rgba(255,255,255,0.03);border-radius:12px;padding:16px;margin:14px 0;
  box-shadow:0 6px 18px rgba(0,0,0,0.45);
  transition:transform .18s,box-shadow .18s;
}
.project-card:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(0,0,0,0.55)}
.project-title{font-weight:700;color:var(--neon-1);font-size:1.15rem;margin-bottom:6px}
.project-desc{color:#cfdada;margin-bottom:8px}
.project-tech{color:#ffd399;font-weight:700;font-size:0.9rem}

/* ---------- Server terminal ---------- */
.server-terminal{display:flex;justify-content:space-between;align-items:center;background:#020202;padding:10px;border-radius:8px;border:1px solid rgba(0,255,255,0.08);font-family:ui-monospace,monospace;color:#7affc8}
.btn-copy{background:var(--accent-grad);border:none;padding:6px 10px;border-radius:8px;font-weight:700;cursor:pointer;color:#000}
#player-count{margin-top:10px;font-weight:700;color:#bfffbf}

/* ---------- Contact ---------- */
.contact-card{
  background:rgba(255,255,255,0.03);padding:18px;border-radius:12px;margin:14px auto;
  box-shadow:0 6px 18px rgba(0,0,0,0.45);max-width:760px;
}
.contact-card input,.contact-card textarea{
  width:100%;padding:12px;border-radius:10px;border:1px solid rgba(0,255,255,0.08);
  background:rgba(255,255,255,0.02);color:#eaeaea;margin-bottom:10px;font-family:inherit;
}
.btn-submit{
  background:var(--accent-grad);border:none;padding:8px 18px;border-radius:30px;font-weight:800;cursor:pointer;color:#000;
  box-shadow:0 0 10px rgba(255,0,204,0.18);
}

/* Neon look on hover focus */
.contact-card input:focus,.contact-card textarea:focus{outline:none;box-shadow:0 0 10px rgba(0,255,255,0.18);border-color:var(--neon-1)}

/* ---------- Footer ---------- */
footer{padding:18px 8px;color:#bfcfcf;position:relative;z-index:2}
.footer-copy{margin:6px 0}
.social-buttons{display:flex;gap:12px;justify-content:center;margin-top:10px}
.social-buttons a{
  display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:10px;background:#111;color:#fff;text-decoration:none;
  box-shadow:0 6px 18px rgba(0,0,0,0.3);transition:transform .18s,box-shadow .18s;
}
.social-buttons a:hover{transform:translateY(-4px);box-shadow:0 14px 34px rgba(0,0,0,0.5)}
.social-buttons svg{width:22px;height:22px;}

/* ---------- Responsive ---------- */
@media (max-width:720px){
  .about-card{flex-direction:column;text-align:center}
  .about-text{text-align:center}
  .server-terminal{flex-direction:column;gap:8px}
  .social-buttons a{width:44px;height:44px}
}
</style>
</head>
<body>

<!-- stars container (JS will fill) -->
<div class="stars-wrap" aria-hidden="true"></div>

<header class="header">
  <h1>پروژه‌های من</h1>
</header>

<!-- ABOUT -->
<section id="about-me" class="section-wrap">
  <div class="about-card">
    <div class="profile-pic" aria-hidden="true"></div>
    <div class="about-text">
      <strong>سلام! من آرسام خوش اخلاق هستم</strong><br>
      توسعه‌دهنده وب، علاقه‌مند به ماینکرفت و سازنده سرورهای اختصاصی. اینجا پروژه‌ها و سرویس‌هایی که ساختم رو می‌بینی — اگر خواستی با هم حرف بزنیم از فرم پایین پیام بفرست.
    </div>
  </div>
</section>

<hr class="neon-divider">

<!-- PROJECTS -->
<section id="projects-section" class="section-wrap">
  <div class="project-card">
    <div class="project-title">🌍 سرور ماینکرفت — LAVA JUMP</div>
    <div class="project-desc">سرور رقابتی با حالت LAVA JUMP — آدرس و وضعیت سرور پایین نمایش داده می‌شود.</div>
    <div class="server-terminal" role="status" aria-live="polite">
      <div class="ip" id="server-ip">lavajumptest.falixsrv.me</div>
      <button class="btn-copy" id="copy-btn" aria-label="کپی آی‌پی">📋 کپی</button>
    </div>
    <div id="player-count" aria-hidden="false">در حال بررسی وضعیت سرور...</div>
  </div>

  <div class="project-card">
    <div class="project-title">سایت شخصی 🌐</div>
    <div class="project-desc">طراحی و پیاده‌سازی سایت شخصی با ظاهر نئون و تجربه‌ی کاربریِ سبک.</div>
    <div class="project-tech">HTML / CSS / JavaScript</div>
  </div>

  <div class="project-card">
    <div class="project-title">ادیت ویدیو 🎬</div>
    <div class="project-desc">ادیت ویدیو و تولید محتوا برای یوتیوب و شبکه‌های اجتماعی.</div>
    <div class="project-tech">CapCut / Filmora / Shotcut</div>
  </div>
</section>

<hr class="neon-divider">

<!-- CONTACT -->
<section id="contact-section" class="section-wrap">
  <div class="contact-card" role="form" aria-labelledby="contact-title">
    <h3 id="contact-title" style="color:var(--neon-1);margin-top:0;margin-bottom:8px">ارتباط با من</h3>
    <form id="contact-form" action="https://formspree.io/f/mnngzdlw" method="POST">
      <input name="name" type="text" placeholder="نام شما" required>
      <input name="email" type="email" placeholder="example@example.com" required>
      <textarea name="message" rows="5" placeholder="متن پیام..." required></textarea>
      <div style="text-align:center"><button class="btn-submit" type="submit">ارسال ✉️</button></div>
    </form>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-copy">© 2025 تمامی حقوق محفوظ است</div>
  <div class="social-buttons" role="navigation" aria-label="شبکه‌های اجتماعی">
    <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank" rel="noopener" aria-label="اینستاگرام">
      <!-- Instagram SVG -->
      <svg viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141C160.5 141 109.2 192.3 109.2 255.9S160.5 370.8 224.1 370.8 338.9 319.5 338.9 255.9 287.7 141 224.1 141zM398.8 80.2c-21.9-21.9-51.1-34-82-34-32.5-1.3-130.8-1.3-163.3 0-31 0-60.2 12-82 34s-34 51.1-34 82C36 212.7 36 310.9 37.3 343.4c0 31 12 60.2 34 82s51.1 34 82 34c32.5 1.3 130.8 1.3 163.3 0 31 0 60.2-12 82-34s34-51.1 34-82c1.3-32.5 1.3-130.8 0-163.3 0-31-12-60.2-34-82zM224.1 338.9c-45.8 0-83-37.2-83-83s37.2-83 83-83 83 37.2 83 83-37.2 83-83 83z"></path></svg>
    </a>

    <a href="https://github.com/arsamkhosh" target="_blank" rel="noopener" aria-label="گیت‌هاب">
      <!-- GitHub SVG -->
      <svg viewBox="0 0 496 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-2.9 0-5.2-1.6-5.2-3.6 0-2 2.3-3.6 5.2-3.6 2.9 0 5.2 1.6 5.2 3.6zM83.7 337.7c-.7 1.5 1.5 3.2 5.1 3.6 3.6.4 7.2-.4 7.9-1.9.7-1.5-1.5-3.2-5.1-3.6-3.6-.4-7.2.4-7.9 1.9zM248 8C111 8 0 119 0 256c0 110.3 71.3 203.8 170 237 12.4 2.3 17-5.4 17-12v-42.1c-69.1 15-83.8-33.2-83.8-33.2-11.2-28.5-27.3-36.2-27.3-36.2-22.3-15.2 1.7-14.9 1.7-14.9 24.6 1.7 37.6 25.3 37.6 25.3 21.9 37.5 57.5 26.7 71.5 20.4 2.2-15.8 8.6-26.7 15.6-32.8-55-6.2-112.5-27.4-112.5-121.8 0-27 9.6-49 25.4-66.3-2.6-6.2-11-31.3 2.4-65 0 0 20.7-6.6 67.8 25.2 19.7-5.5 40.8-8.3 61.8-8.4 21 0 42.1 2.9 61.8 8.4 47.1-31.8 67.8-25.2 67.8-25.2 13.5 33.8 5 58.8 2.4 65 15.8 17.3 25.4 39.3 25.4 66.3 0 94.7-57.8 115.6-112.9 121.8 8.8 7.6 16.7 22.5 16.7 45.4v67.4c0 6.6 4.6 14.3 17 12C424.7 459.8 496 366.3 496 256 496 119 385 8 248 8z"/></svg>
    </a>

    <a href="https://twitter.com/username" target="_blank" rel="noopener" aria-label="توییتر">
      <!-- Twitter SVG -->
      <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M459.4 151.7c.3 4.2.3 8.4.3 12.7 0 129.7-98.7 279-279 279-55.5 0-107.2-16.2-150.6-44.1 7.7.9 15.5 1.2 23.6 1.2 46.1 0 88.7-15.7 122.5-42-43.1-.8-79.5-29.2-92-68 6.1.9 12.2 1.4 18.6 1.4 9 0 17.7-1.2 25.9-3.4-45-9-78.8-48.7-78.8-96.3v-1.2c13.2 7.3 28.3 11.8 44.4 12.4-26.1-17.4-43.3-47.2-43.3-80.8 0-17.7 4.7-34.2 13-48.5 48.5 59.5 121.1 98.7 202.9 102.8-1.7-7.2-2.7-14.7-2.7-22.4 0-54.3 44-98.3 98.3-98.3 28.3 0 53.9 12 71.8 31.4 22.4-4.2 43.4-12.6 62.3-24-7.4 23-23.1 42.4-43.8 54.7 19.8-2.2 38.6-7.6 56.1-15.3-13.1 19.5-29.6 36.7-48.5 50.4z"/></svg>
    </a>
  </div>
</footer>

<script>
/* ---------- Stars generation ---------- */
(function makeStars(count=120){
  const wrap=document.querySelector('.stars-wrap');
  const w=window.innerWidth, h=window.innerHeight;
  for(let i=0;i<count;i++){
    const s=document.createElement('div');
    s.className='star';
    const size = 0.6 + Math.random()*2.2;
    s.style.width = s.style.height = size + 'px';
    s.style.left = Math.random()*100 + 'vw';
    s.style.top = Math.random()*100 + 'vh';
    s.style.opacity = (0.2 + Math.random()*0.9).toString();
    s.style.transform = 'translate(-50%,-50%)';
    wrap.appendChild(s);
  }
})();

/* ---------- Day / Night simple: hide stars in day ---------- */
function setDayNight(){
  const hour = new Date().getHours();
  if(hour >= 7 && hour < 19){
    document.body.style.background = `linear-gradient(135deg,var(--bg-day-start),var(--bg-day-end))`;
    document.querySelectorAll('.star').forEach(s=>s.style.display='none');
  } else {
    document.body.style.background = `linear-gradient(135deg,var(--bg-night-start),var(--bg-night-end))`;
    document.querySelectorAll('.star').forEach(s=>s.style.display='block');
  }
}
setDayNight();
setInterval(setDayNight,60000);

/* ---------- Server status (mock update) ---------- */
/* If you prefer a real API, replace this block with a fetch to a Minecraft status API. */
const playerCountEl = document.getElementById('player-count');
function updatePlayersMock(){
  // شبیه‌سازی: 70% احتمال آنلاین و بین 0-40 بازیکن
  const online = Math.random() < 0.7;
  if(!online){
    playerCountEl.textContent = '❌ سرور آفلاین است';
    playerCountEl.className = 'offline';
  } else {
    const players = Math.floor(Math.random()*41); // 0..40
    playerCountEl.textContent = `🎮 بازیکنان آنلاین: ${players}`;
    playerCountEl.className = 'online';
  }
}
updatePlayersMock();
setInterval(updatePlayersMock,10000);

/* ---------- Copy IP ---------- */
document.getElementById('copy-btn').addEventListener('click', ()=>{
  const ip = document.getElementById('server-ip').innerText.trim();
  navigator.clipboard.writeText(ip).then(()=> {
    alert('آی‌پی کپی شد: ' + ip);
  }).catch(()=> alert('خطا در کپی کردن آی‌پی'));
});

/* ---------- Contact form: graceful UX ---------- */
const form = document.getElementById('contact-form');
form.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const btn = form.querySelector('.btn-submit');
  btn.disabled = true;
  btn.textContent = 'در حال ارسال...';
  const data = new FormData(form);
  try{
    const res = await fetch(form.action, { method: 'POST', body: data, headers: {'Accept':'application/json'} });
    if(res.ok){
      form.reset();
      btn.textContent = 'ارسال شد ✅';
      setTimeout(()=> btn.textContent = 'ارسال ✉️', 2000);
    } else throw new Error('send error');
  }catch(err){
    console.error(err);
    alert('خطا در ارسال پیام — لطفاً دوباره تلاش کن.');
    btn.textContent = 'ارسال ✉️';
  } finally {
    btn.disabled = false;
  }
});
</script>
</body>
</html>
