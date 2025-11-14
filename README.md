<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>پروژه‌های من</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
<style>
/* ========== VARIABLES (THEME) ========== */
:root{
  --bg-dark-1: #0f0f12;
  --bg-dark-2: #141418;
  --bg-day-1: #eceff1; /* خاکستری ملایم */
  --bg-day-2: #e6e9ee;
  --text-day: #1f2933; /* مشکی نرم */
  --text-night: #e6f7ff;
  --neon-a: #00ffff;
  --neon-b: #ff00cc;
  --neon-c: #ff9900;
  --glass: rgba(255,255,255,0.06);
  --glass-2: rgba(0,0,0,0.45);
  --transition: 0.9s;
}

/* ========== BASE / PRESERVE ORIGINAL STYLES ========== */
/* (Original CSS preserved and integrated; texts untouched) */
body {
  margin:0;
  font-family:'Vazirmatn',sans-serif;
  background:linear-gradient(135deg,var(--bg-dark-1),var(--bg-dark-2));
  color:var(--text-night);
  text-align:center;
  overflow-x:hidden;
  transition: background var(--transition), color var(--transition);
  position:relative;
  min-height:100vh;
}

/* keep original selectors but use variables for color control */
header, section, footer { padding: 40px 5%; opacity:0; transform:translateY(50px); transition:all 0.8s ease; }
h1 { font-size:2.8em; background: linear-gradient(90deg,var(--neon-a),var(--neon-b),var(--neon-c)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:10px; text-shadow:0 0 10px rgba(0,255,255,0.18);}
h2 { color:var(--neon-a); margin-bottom:20px; font-size:1.8em; }

/* nav (original kept) */
nav {
  position: fixed;
  top: -70px;
  left: 0; right: 0;
  background: var(--glass-2);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 15px;
  z-index: 1000;
  border-bottom: 1px solid #00ffff44;
  transition: top 0.4s ease, box-shadow 0.4s ease, border-bottom 0.4s ease, background 0.5s;
}
nav.visible { top:0; }
nav a {
  color: var(--neon-a);
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}
nav a:hover {
  color: var(--neon-b);
  text-shadow: 0 0 10px var(--neon-b);
}

/* ========== Project cards, about, skills etc. (original, unchanged text) ========== */
.projects { display:flex; justify-content:center; flex-wrap:wrap; gap:30px; margin-top:20px; }
.project-card {
  position:relative;
  background:rgba(255,255,255,0.04);
  padding:25px;
  width:300px;
  min-height:250px;
  border-radius:15px;
  border-left:5px solid var(--neon-a);
  box-shadow:0 4px 20px rgba(0,255,255,0.06);
  text-align:center;
  cursor:pointer;
  transition: transform 0.3s, box-shadow 0.3s, background 0.5s, border-left 0.3s;
}
.project-card img { width:100%; border-radius:15px; margin-bottom:15px; }
.project-card:hover {
  transform:translateY(-10px) rotate(-1deg);
  box-shadow:0 0 30px var(--neon-b),0 0 10px var(--neon-a);
  border-left:5px solid var(--neon-b);
}
.project-title { font-size:1.4em; font-weight:bold; margin-bottom:10px; color:var(--neon-a); }
.project-desc { color:#cfd8dc; margin-bottom:10px; font-size:0.9em; }
.project-tech { font-size:0.8em; color:var(--neon-c); font-weight:bold; }
.like-btn {
  display:inline-block;
  padding:5px 10px;
  margin-top:10px;
  border-radius:10px;
  border:none;
  cursor:pointer;
  font-weight:bold;
  background:var(--neon-a);
  color:#000;
  transition:0.3s;
}
.like-btn.liked { background:var(--neon-b); color:#fff; }

/* tooltip */
.project-card .tooltip {
  position:absolute;
  bottom:100%;
  left:50%;
  transform:translateX(-50%);
  background:#0b0b0b;
  color:#fff;
  padding:6px 10px;
  border-radius:6px;
  font-size:0.8em;
  display:none;
  white-space:nowrap;
  pointer-events:none;
}
.project-card:hover .tooltip { display:block; }

/* about */
.about-card { 
  max-width:600px; 
  margin:20px auto; 
  background: rgba(255,255,255,0.04); 
  padding:30px; 
  border-radius:20px; 
  box-shadow:0 0 20px rgba(255,255,255,0.05); 
  display:flex; 
  align-items:center; 
  direction:rtl; 
  text-align:right;
  transition: all 0.3s ease;
}
.about-card:hover {
  box-shadow:0 0 20px var(--neon-a), 0 0 40px var(--neon-b), 0 0 60px var(--neon-c);
  transform: translateY(-5px);
  border-left:5px solid var(--neon-a);
}
.profile-pic { width:100px;height:100px; border-radius:50%; background:var(--neon-a); margin-left:20px; border:4px solid var(--neon-b); overflow:hidden; box-shadow:0 0 15px var(--neon-a); flex-shrink:0; animation: float 3s ease-in-out infinite alternate;}
@keyframes float {0%{transform:translateY(0);}100%{transform:translateY(-10px);} }
.about-text p { font-size:1.1em; line-height:1.8; color:inherit; }

/* skills */
.skills { max-width:600px; margin:30px auto; text-align:right; direction:rtl; }
.skill { margin-bottom:15px; }
.skill-name { font-weight:bold; margin-bottom:5px; }
.skill-bar { width:100%; height:15px; background:#222; border-radius:10px; overflow:hidden; }
.skill-fill { width:0%; height:100%; background:linear-gradient(90deg,var(--neon-a),var(--neon-b),var(--neon-c)); border-radius:10px; transition: width 1s; }

/* blog */
.blog { max-width:700px; margin:50px auto; text-align:right; direction:rtl; }
.blog-item { background: rgba(255,255,255,0.04); padding:15px; border-radius:10px; margin-bottom:10px; text-align:right; }

/* contact form (kept) */
form { max-width:500px; margin:40px auto; background: rgba(255,255,255,0.04); padding:25px; border-radius:15px; box-shadow:0 0 25px rgba(0,255,255,0.06); direction:rtl; text-align:right;}
input,textarea{ width:100%; padding:12px; border-radius:10px; border:1px solid rgba(0,255,255,0.12); background-color: rgba(255,255,255,0.02); color:inherit; margin-bottom:15px;}
::placeholder{ color:#aaa; opacity:1; }
button[type="submit"] { background: linear-gradient(135deg,var(--neon-a),var(--neon-b)); color:#000; font-weight:bold; padding:10px 20px; border:none; border-radius:12px; cursor:pointer; transition:0.3s;}
button[type="submit"]:hover{ transform:scale(1.05); }

/* faq */
.faq { max-width:800px; margin:50px auto; text-align:right; direction:rtl; }
.faq h2 { text-align: center; }
.faq-item { background: rgba(255,255,255,0.04); padding:15px; border-radius:10px; margin-bottom:10px; cursor:pointer; border:2px solid var(--neon-a); transition:0.3s; }
.faq-item:hover { box-shadow:0 0 15px var(--neon-a),0 0 25px var(--neon-b); }
.faq-item .answer { display:none; margin-top:10px; color:#cfcfcf; font-size:0.9em; }

/* gallery */
#gallery-section { max-width:1000px; margin:50px auto; text-align:center; }
#gallery-section h2 { margin-bottom:30px; color:var(--neon-a); }
.gallery { display:flex; flex-wrap:wrap; gap:20px; justify-content:center; perspective:1200px; }
.gallery-item { position:relative; overflow:hidden; border-radius:15px; flex:1 1 250px; max-width:300px; box-shadow:0 4px 15px rgba(0,255,255,0.08); transition: transform 0.45s cubic-bezier(.2,.8,.2,1), box-shadow 0.3s; transform-style:preserve-3d; }
.gallery-item:hover { transform:translateY(-10px) rotateX(6deg) rotateY(4deg); box-shadow:0 12px 35px rgba(0,255,255,0.18),0 0 12px var(--neon-b); }
.gallery-item img { width:100%; height:200px; object-fit:cover; display:block; transition: transform 0.6s; transform-origin:center; }

/* loading (wave) */
#loading-screen {
  position:fixed;
  top:0; left:0; right:0; bottom:0;
  background:linear-gradient(180deg,var(--bg-dark-1),var(--bg-dark-2));
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  z-index:2000;
  color:var(--neon-a);
  font-size:1.5em;
  font-family: monospace;
}
#loading-text { margin-bottom:20px; color:var(--neon-a); text-shadow:0 0 10px var(--neon-a); font-weight:bold;}
#loading-bar { width:320px; height:12px; background:#121212; border-radius:12px; overflow:hidden; box-shadow:0 0 10px var(--neon-a); position:relative;}
#loading-fill { position:absolute; top:0; left:-320px; width:320px; height:100%; background:linear-gradient(90deg,var(--neon-a),var(--neon-b),var(--neon-c)); animation: wave 1s infinite linear; }
@keyframes wave { 0%{ transform:translateX(0);} 100%{ transform:translateX(320px);} }

/* ========== NEW UI: floating controls, chat, music, events, downloads ========== */
.controls {
  position:fixed;
  right:18px;
  bottom:18px;
  display:flex;
  flex-direction:column;
  gap:10px;
  z-index:1500;
}
.ctrl-btn {
  background:linear-gradient(135deg,var(--neon-a),var(--neon-b));
  color:#000;
  border:none;
  padding:10px 12px;
  border-radius:12px;
  cursor:pointer;
  box-shadow:0 6px 18px rgba(0,0,0,0.4);
  font-weight:bold;
  transition: transform .18s;
}
.ctrl-btn:active{ transform:scale(.98); }

/* chat widget */
.chat {
  position:fixed;
  right:18px;
  bottom:80px;
  width:320px;
  max-width:90%;
  background: linear-gradient(180deg, rgba(10,10,10,0.96), rgba(20,20,20,0.96));
  border-radius:12px;
  box-shadow:0 12px 40px rgba(0,0,0,0.5);
  overflow:hidden;
  transform-origin:bottom right;
  display:none;
  z-index:1600;
}
.chat.open{ display:block; animation: pop .18s ease-out; }
@keyframes pop { from{ transform:translateY(12px) scale(.98); opacity:0 } to{ transform:translateY(0) scale(1); opacity:1 } }
.chat-header { padding:12px; background:linear-gradient(90deg,var(--neon-a),var(--neon-b)); color:#000; font-weight:bold; display:flex; justify-content:space-between; align-items:center; }
.chat-body { padding:12px; max-height:240px; overflow:auto; color:#fff; font-size:0.95em; }
.chat-form { display:flex; gap:8px; padding:10px; border-top:1px solid rgba(255,255,255,0.04); }
.chat-form input{ flex:1; padding:8px; border-radius:8px; border:none; background:#111; color:#fff; }
.chat-form button{ padding:8px 10px; border-radius:8px; border:none; cursor:pointer; background:var(--neon-c); color:#000; }

/* music player (simple) */
.music-bar {
  position:fixed;
  left:18px;
  bottom:18px;
  background: linear-gradient(90deg,var(--neon-a),var(--neon-b));
  color:#000;
  padding:8px 12px;
  border-radius:12px;
  z-index:1500;
  display:flex;
  gap:8px;
  align-items:center;
  box-shadow:0 12px 30px rgba(0,0,0,0.4);
}

/* events & downloads section (new, inserted after blog) */
.events-downloads { max-width:1000px; margin:30px auto; padding:25px; display:flex; gap:20px; justify-content:center; flex-wrap:wrap; }
.card-small { background: rgba(255,255,255,0.03); padding:15px; border-radius:12px; width:300px; box-shadow:0 8px 30px rgba(0,0,0,0.4); }

/* particles canvas */
#particles {
  position:fixed;
  inset:0;
  z-index:0;
  pointer-events:none;
}

/* neon header underline effect */
.header-glow { position:relative; display:inline-block; }
.header-glow::after{
  content:"";
  position:absolute;
  left:0; right:0; bottom:-8px;
  height:6px;
  background:linear-gradient(90deg,var(--neon-a),var(--neon-b),var(--neon-c));
  filter:blur(8px);
  opacity:0.9;
  transform:scaleX(.9);
  transition: transform .6s;
}

/* responsive tweaks */
@media(max-width:650px){
  .gallery { gap:12px; }
  .controls { right:10px; bottom:10px; }
  .music-bar { left:10px; bottom:60px; }
  .chat { right:10px; bottom:80px; width:92%; }
}

/* fade-in for content after load */
.revealed { opacity:1 !important; transform:translateY(0) !important; transition: all 0.9s cubic-bezier(.2,.9,.2,1) !important; }

</style>
</head>
<body>

<!-- PARTICLES CANVAS (background) -->
<canvas id="particles"></canvas>

<!-- لودینگ (wave) -->
<div id="loading-screen">
  <div id="loading-text">Loading Arsam_khosh web</div>
  <div id="loading-bar"><div id="loading-fill"></div></div>
</div>

<!-- floating controls -->
<div class="controls" aria-hidden="false">
  <button id="themeToggle" class="ctrl-btn" title="تغییر حالت">تم</button>
  <button id="chatToggle" class="ctrl-btn" title="چت با من">چت</button>
  <button id="musicToggle" class="ctrl-btn" title="پخش/توقف موزیک">موزیک</button>
</div>

<!-- chat widget -->
<div id="chatWidget" class="chat" aria-hidden="true">
  <div class="chat-header">Chat with Arsam <button id="closeChat" style="background:transparent;border:none;cursor:pointer;">×</button></div>
  <div class="chat-body" id="chatBody">
    <div style="opacity:.8;">سلام! پیام بذار تا در اولین فرصت پاسخ بدم (نمونه آفلاین).</div>
  </div>
  <form class="chat-form" id="chatForm">
    <input id="chatInput" placeholder="پیام شما..." aria-label="پیام">
    <button type="submit">ارسال</button>
  </form>
</div>

<!-- music player -->
<div class="music-bar" id="musicBar" aria-hidden="false" style="display:none;">
  <div style="font-weight:bold;">پخش موزیک</div>
  <button id="musicBtn" style="border:none;background:transparent;cursor:pointer;">⏯</button>
</div>

<!-- نوار بالا (اصل) -->
<nav>
  <a href="#about-me">درباره من</a>
  <a href="#projects-section">پروژه‌ها</a>
  <a href="#skills-section">مهارت‌ها</a>
  <a href="#blog-section">اخبار</a>
  <a href="#gallery-section">گالری</a>
  <a href="#contact-section">ارتباط</a>
</nav>

<!-- ORIGINAL CONTENT (text untouched) -->
<header>
  <h1 class="header-glow">خوش آمدید</h1>
  <p>!خوش آمدید به سایت من، در ادامه پروژه‌ها را می‌بینید</p>
  <!-- typewriter (decorative, doesn't replace original text) -->
  <div id="typewriter" aria-hidden="true" style="margin-top:10px;font-weight:bold;color:var(--neon-a);"></div>
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
      <img src="minecraft.png" alt="پروژه 1">
      <div class="project-title">سرور ماینکرفت 🎮</div>
      <div class="project-desc">سرور اختصاصی برای ماینکرفت با پلاگین‌های مخصوص دارم و برای همکاری به اینستاگرام یا بخش ارتباط با ما پیام بده</div>
      <div class="project-tech">Spigot/Bukkit / Minecraft</div>
      <button class="like-btn">❤️ 0</button>
      <div class="tooltip">این پروژه مربوط به سرور ماینکرفت است</div>
    </div>
    <div class="project-card">
      <img src="site.png" alt="پروژه 2">
      <div class="project-title">سایت شخصی 🌐</div>
      <div class="project-desc">من به طراحی سایت علاقه دارم و این سایت رو خودم و با کمک دوستم نوشتم</div>
      <div class="project-tech">HTML / CSS / JavaScript</div>
      <button class="like-btn">❤️ 0</button>
      <div class="tooltip">این پروژه سایت شخصی من است</div>
    </div>
    <div class="project-card">
      <img src="edite.png" alt="پروژه 3">
      <div class="project-title">ادیت ویدیو 🎬</div>
      <div class="project-desc">به ادیت ویدیو علاقه دارم و کارهای خود را در یوتیوب منتشر می‌کنم</div>
      <div class="project-tech">Capcut / Filmora / Shotcut</div>
      <button class="like-btn">❤️ 0</button>
      <div class="tooltip">این پروژه مربوط به ادیت ویدیو است</div>
    </div>
  </div>
</section>

<section id="skills-section" class="skills">
  <h2>مهارت‌ها</h2>
  <div class="skill">
    <div class="skill-name">سرور ماینکرفت</div>
    <div class="skill-bar"><div class="skill-fill" data-value="95%"></div></div>
  </div>
  <div class="skill">
    <div class="skill-name">ادیت ویدیو</div>
    <div class="skill-bar"><div class="skill-fill" data-value="80%"></div></div>
  </div>
  <div class="skill">
    <div class="skill-name">برنامه نویسی</div>
    <div class="skill-bar"><div class="skill-fill" data-value="60%"></div></div>
  </div>
</section>

<section id="blog-section" class="blog">
  <h2>اخبار و بروزرسانی‌ها</h2>
  <div class="blog-item">🚀 پست هفته: پلاگین جدید سرور ماینکرفت آماده شد!</div>
  <div class="blog-item">🌐 پروژه سایت شخصی من آپدیت شد و بخش بلاگ اضافه شد.</div>
  <div class="blog-item">🚀 ایونت جدید در سرور</div>
</section>

<!-- NEW: Events & Downloads (keeps original text elsewhere untouched) -->
<section class="events-downloads" aria-label="Events and Downloads">
  <div class="card-small">
    <h3 style="color:var(--neon-a);margin-top:0;">رویدادهای آینده</h3>
    <ul style="text-align:right; direction:rtl; padding-inline-start:18px;">
      <li>Event SkyWars — ساعت 20</li>
      <li>Event Survival — شنبه‌ها</li>
      <li>Event Build Battle — جایزه: 1000 کوین</li>
    </ul>
  </div>
  <div class="card-small">
    <h3 style="color:var(--neon-a);margin-top:0;">دانلودها</h3>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <a download href="#" style="color:var(--neon-b);text-decoration:none;background:rgba(255,255,255,0.02);padding:8px;border-radius:8px;">پک ماینکرفت (نمونه)</a>
      <a download href="#" style="color:var(--neon-b);text-decoration:none;background:rgba(255,255,255,0.02);padding:8px;border-radius:8px;">پلاگین اختصاصی (نمونه)</a>
    </div>
  </div>
</section>

<section id="gallery-section">
  <h2>گالری</h2>
  <div class="gallery" id="gallery">
    <div class="gallery-item"><img src="gallery/image1.jpg" alt="تصویر 1"></div>
    <div class="gallery-item"><img src="gallery/image2.jpg" alt="تصویر 2"></div>
    <div class="gallery-item"><img src="gallery/image3.jpg" alt="تصویر 3"></div>
  </div>
</section>

<section class="faq">
  <h2>پرسش و پاسخ پر تکرار</h2>
  <div class="faq-item"><div class="question">این سایت با چه زبانی ساخته شده؟</div><div class="answer">این سایت با HTML، CSS و JavaScript ساخته شده است.</div></div>
  <div class="faq-item"><div class="question">آموزش به صورت رایگان میدی؟</div><div class="answer">آموزش میدم ولی رایگان نه</div></div>
  <div class="faq-item"><div class="question">میشه بیام توی سرورتون برای کمک؟</div><div class="answer">بله حتما با استفاده از فرم تماس و اینستاگرام به من بگو</div></div>
  <div class="faq-item"><div class="question">سفارش سایت و سرور میگیری؟</div><div class="answer">بله سایت و سرور ماینکرفت براتون می‌سازم ولی در ازای مبلغی</div></div>
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
    <p id="formMessage"></p>
  </form>
</section>

<footer>
  <p>© 2025 Arsam_khosh</p>
  <a href="#">اینستاگرام من</a>
</footer>

<!-- audio element (sample) -->
<audio id="bgAudio" loop preload="none">
  <!-- نمونه: تو اینجا لینک فایل خودتو بذار -->
  <source src="" type="audio/mpeg">
</audio>

<script>
/* ===================== INIT & UTIL ===================== */
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const body = document.body;
const loadingScreen = document.getElementById('loading-screen');
const loadingFill = document.getElementById('loading-fill');
const headerElems = document.querySelectorAll('header,section,footer');

/* ===================== THEME (Arsam style) ===================== */
function applyTheme(mode){
  if(mode === 'day'){
    body.style.background = `linear-gradient(135deg,var(--bg-day-1),var(--bg-day-2))`;
    body.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-day');
    document.documentElement.style.setProperty('--neon-a', '#0fb6ff');
    document.documentElement.style.setProperty('--neon-b', '#ff4fd0');
    document.documentElement.style.setProperty('--neon-c', '#ff9a2a');
  } else {
    body.style.background = `linear-gradient(135deg,var(--bg-dark-1),var(--bg-dark-2))`;
    body.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-night');
    document.documentElement.style.setProperty('--neon-a', '#00ffff');
    document.documentElement.style.setProperty('--neon-b', '#ff00cc');
    document.documentElement.style.setProperty('--neon-c', '#ff9900');
  }
  localStorage.setItem('arsam_theme', mode);
}

/* set initial theme from localStorage or prefers */
const savedTheme = localStorage.getItem('arsam_theme') || (prefersDark ? 'night' : 'day');
applyTheme(savedTheme === 'day' ? 'day' : 'night');

/* theme toggle button */
document.getElementById('themeToggle').addEventListener('click', ()=>{
  const current = localStorage.getItem('arsam_theme') || (prefersDark ? 'night' : 'day');
  const next = current === 'day' ? 'night' : 'day';
  applyTheme(next === 'day' ? 'day' : 'night');
});

/* ===================== LOADING (wave) ===================== */
let loading = 0;
const interval = setInterval(()=>{
  loading += 1;
  loadingFill.style.width = loading + '%';
  if(loading>=100){
    clearInterval(interval);
    loadingScreen.style.opacity = '0';
    setTimeout(()=> loadingScreen.style.display='none', 600);
    document.querySelectorAll('header,section,footer').forEach(el=> el.classList.add('revealed'));
  }
},16);

/* ===================== NAV VISIBILITY ===================== */
const nav = document.querySelector('nav');
window.addEventListener('scroll',()=>{
  if(window.scrollY>50) nav.classList.add('visible'); else nav.classList.remove('visible');
});

/* ===================== FAQ toggle (original behavior) ===================== */
document.querySelectorAll('.faq-item').forEach(item=>{
  item.addEventListener('click', ()=>{
    const ans = item.querySelector('.answer');
    ans.style.display = ans.style.display==='block' ? 'none' : 'block';
  });
});

/* ===================== LIKE buttons (persist per session) ===================== */
document.querySelectorAll('.like-btn').forEach((btn, i)=>{
  const key = 'liked_'+i;
  if(sessionStorage.getItem(key) === '1'){ btn.classList.add('liked'); btn.textContent='❤️ 1'; }
  btn.addEventListener('click', ()=>{
    if(btn.classList.contains('liked')){ btn.classList.remove('liked'); btn.textContent='❤️ 0'; sessionStorage.setItem(key,'0'); }
    else { btn.classList.add('liked'); btn.textContent='❤️ 1'; sessionStorage.setItem(key,'1'); }
  });
});

/* ===================== SKILLS ANIMATION (on scroll) ===================== */
function animateSkills(){
  document.querySelectorAll('.skill-fill').forEach(bar=>{
    const rect = bar.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      bar.style.width = bar.dataset.value;
    }
  });
}
window.addEventListener('scroll', animateSkills);
animateSkills();

/* ===================== TYPEWRITER (decorative) ===================== */
const tw = document.getElementById('typewriter');
const words = ["توسعه‌دهنده وب","ادیتور ویدیو","سازنده سرور ماینکرفت"];
let ti = 0, letter = 0, forward = true;
function typeTick(){
  if(!tw) return;
  const word = words[ti];
  if(forward) {
    tw.textContent = word.slice(0, ++letter);
    if(letter === word.length){ forward = false; setTimeout(typeTick, 900); return; }
  } else {
    tw.textContent = word.slice(0, --letter);
    if(letter === 0){ forward = true; ti = (ti+1)%words.length; }
  }
  setTimeout(typeTick, forward?90:40);
}
typeTick();

/* ===================== PARTICLES BACKGROUND ===================== */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let W = canvas.width = innerWidth;
let H = canvas.height = innerHeight;
const particles = [];
const P_AMOUNT = Math.round((W*H)/80000);
function rand(min,max){return Math.random()*(max-min)+min;}
function createParticles(){
  particles.length = 0;
  for(let i=0;i<P_AMOUNT;i++){
    particles.push({
      x: rand(0,W),
      y: rand(0,H),
      r: rand(0.6,2.2),
      vx: rand(-0.2,0.6),
      vy: rand(-0.2,0.6),
      hue: rand(180,320)
    });
  }
}
function resizeCanvas(){ W = canvas.width = innerWidth; H = canvas.height = innerHeight; createParticles(); }
window.addEventListener('resize', resizeCanvas);
createParticles();
function draw(){
  ctx.clearRect(0,0,W,H);
  particles.forEach(p=>{
    ctx.beginPath();
    const g = ctx.createRadialGradient(p.x,p.y,p.r*0.2,p.x,p.y,p.r*6);
    g.addColorStop(0, `hsla(${p.hue},100%,65%,0.95)`);
    g.addColorStop(0.3, `hsla(${p.hue+40},100%,60%,0.25)`);
    g.addColorStop(1, `rgba(0,0,0,0)`);
    ctx.fillStyle = g;
    ctx.arc(p.x,p.y,p.r*4,0,Math.PI*2);
    ctx.fill();
    p.x += p.vx; p.y += p.vy;
    if(p.x < -50) p.x = W+50;
    if(p.x > W+50) p.x = -50;
    if(p.y < -50) p.y = H+50;
    if(p.y > H+50) p.y = -50;
  });
  requestAnimationFrame(draw);
}
draw();

/* ===================== GALLERY PARALLAX on MOUSE MOVE (subtle) ===================== */
const gallery = document.getElementById('gallery');
if(gallery){
  gallery.addEventListener('mousemove', (e)=>{
    const rect = gallery.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width;
    const cy = (e.clientY - rect.top) / rect.height;
    document.querySelectorAll('.gallery-item').forEach((el,i)=>{
      const tx = (cx - 0.5) * (6 + i*0.6);
      const ty = (cy - 0.5) * (6 + i*0.4);
      el.style.transform = `translateY(-8px) rotateX(${ty}deg) rotateY(${tx}deg)`;
    });
  });
  gallery.addEventListener('mouseleave', ()=>{ document.querySelectorAll('.gallery-item').forEach(el=> el.style.transform='translateY(0)'); });
}

/* ===================== CHAT WIDGET ===================== */
const chatToggle = document.getElementById('chatToggle');
const chatWidget = document.getElementById('chatWidget');
const closeChat = document.getElementById('closeChat');
chatToggle.addEventListener('click', ()=> {
  chatWidget.classList.toggle('open');
  chatWidget.style.display = chatWidget.classList.contains('open') ? 'block' : 'none';
});
closeChat.addEventListener('click', ()=> { chatWidget.classList.remove('open'); chatWidget.style.display='none'; });
document.getElementById('chatForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  const v = document.getElementById('chatInput').value.trim();
  if(!v) return;
  const body = document.getElementById('chatBody');
  const msg = document.createElement('div'); msg.style.marginTop='8px'; msg.style.textAlign='left'; msg.textContent = 'شما: ' + v;
  body.appendChild(msg); document.getElementById('chatInput').value='';
  body.scrollTop = body.scrollHeight;
  // sample auto-response
  setTimeout(()=> { const r = document.createElement('div'); r.style.opacity=.9; r.style.marginTop='10px'; r.textContent='پاسخ نمونه: متشکرم!'; body.appendChild(r); body.scrollTop = body.scrollHeight; }, 700);
});

/* ===================== MUSIC (simple toggle) ===================== */
const musicToggle = document.getElementById('musicToggle');
const bgAudio = document.getElementById('bgAudio');
const musicBar = document.getElementById('musicBar');
const musicBtn = document.getElementById('musicBtn');
// Note: replace src of audio element with your file if needed
musicToggle.addEventListener('click', ()=>{
  if(bgAudio.src){
    if(bgAudio.paused){ bgAudio.play(); musicBar.style.display='flex'; musicBtn.textContent='⏸'; }
    else { bgAudio.pause(); musicBtn.textContent='⏵'; musicBar.style.display='none'; }
  } else {
    // no src provided — show musicBar and toggle icon but don't play
    musicBar.style.display = musicBar.style.display === 'none' ? 'flex' : 'none';
    musicBtn.textContent = musicBtn.textContent === '⏵' ? '⏸' : '⏵';
  }
});
musicBtn.addEventListener('click', ()=> { if(bgAudio.paused) bgAudio.play(); else bgAudio.pause(); });

/* ===================== Accessibility / keyboard shortcuts ===================== */
document.addEventListener('keydown', (e)=>{
  if(e.key === 't') document.getElementById('themeToggle').click();
  if(e.key === 'm') document.getElementById('musicToggle').click();
  if(e.key === 'c') document.getElementById('chatToggle').click();
});

/* ===================== small polish: reveal header (already done on load) ===================== */
window.addEventListener('load', ()=> {
  document.querySelectorAll('header,section,footer').forEach(el => el.classList.add('revealed'));
});

</script>
</body>
</html>
