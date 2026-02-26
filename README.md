<html lang="fa">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>پروژه‌های من</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
<style>
/* پایه */
html { scroll-behavior: smooth; }
body { margin:0; font-family:'Vazirmatn',sans-serif; background:linear-gradient(135deg,#0f0f0f,#1a1a1a); color:#fff; text-align:center; overflow-x:hidden; transition: background 0.5s, color 0.5s; }
header, section, footer { padding: 40px 5%; opacity:0; transform:translateY(50px); transition:all 0.8s ease; }
h1 { font-size:2.8em; background: linear-gradient(90deg,#00ffff,#ff00cc,#ff9900); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:10px; text-shadow:0 0 10px rgba(0,255,255,0.5);}
h2 { color:#00ffff; margin-bottom:20px; font-size:1.8em; }

/* نوار بالا */
nav { position: fixed; top: -70px; left:0; right:0; background: rgba(0,0,0,0.6); backdrop-filter: blur(10px); display:flex; justify-content:center; gap:20px; padding:15px; z-index:1000; border-bottom:1px solid #00ffff44; transition:top 0.4s ease, box-shadow 0.4s ease, border-bottom 0.4s ease, background 0.5s;}
nav.visible { top:0; }
nav a { color:#00ffff; text-decoration:none; font-weight:bold; transition:0.3s; }
nav a:hover { color:#ff00cc; text-shadow:0 0 10px #ff00cc; }
#lang-toggle { margin-left:20px; padding:5px 10px; border-radius:8px; border:none; cursor:pointer; background:#ff00cc; color:#fff; }

/* پروژه‌ها */
.projects { display:flex; justify-content:center; flex-wrap:wrap; gap:30px; margin-top:20px; }
.project-card { position:relative; background:rgba(255,255,255,0.08); padding:25px; width:300px; min-height:250px; border-radius:15px; border-left:5px solid #00ffff; box-shadow:0 4px 20px rgba(0,255,255,0.1); text-align:center; cursor:pointer; transition: transform 0.3s, box-shadow 0.3s, background 0.5s, border-left 0.3s; }
.project-card img { width:100%; border-radius:15px; margin-bottom:15px; transition: transform 0.3s; }
.project-card:hover { transform:translateY(-10px) rotate(-1deg); box-shadow:0 0 30px #ff00cc,0 0 10px #00ffff; border-left:5px solid #ff00cc; }
.project-card:hover img { transform: scale(1.05); }
.project-title { font-size:1.4em; font-weight:bold; margin-bottom:10px; color:#00ffff; }
.project-desc { color:#ccc; margin-bottom:10px; font-size:0.9em; }
.project-tech { font-size:0.8em; color:#ff9900; font-weight:bold; }
.like-btn { display:inline-block; padding:5px 10px; margin-top:10px; border-radius:10px; border:none; cursor:pointer; font-weight:bold; background:#00ffff; color:#000; transition:0.3s; }
.like-btn.liked { background:#ff00cc; color:#fff; }
.project-card .tooltip { position:absolute; bottom:100%; left:50%; transform:translateX(-50%) translateY(0); background:#111; color:#fff; padding:6px 10px; border-radius:6px; font-size:0.8em; display:none; opacity:0; white-space:nowrap; pointer-events:none; transition: opacity 0.3s ease, transform 0.3s ease; }
.project-card:hover .tooltip { display:block; opacity:1; transform:translateX(-50%) translateY(-5px); }

/* درباره من */
.about-card { max-width:600px; margin:20px auto; background: rgba(255,255,255,0.08); padding:30px; border-radius:20px; box-shadow:0 0 20px rgba(255,255,255,0.1); display:flex; align-items:center; direction:rtl; text-align:right; transition: all 0.3s ease; }
.about-card:hover { box-shadow:0 0 20px #00ffff,0 0 40px #ff00cc,0 0 60px #ff9900; transform:translateY(-5px); border-left:5px solid #00ffff; }
.profile-pic { width:100px;height:100px; border-radius:50%; background:#00ffff; margin-left:20px; border:4px solid #ff00cc; overflow:hidden; box-shadow:0 0 15px #00ffff; flex-shrink:0; animation: float 3s ease-in-out infinite alternate; }
@keyframes float {0%{transform:translateY(0);}100%{transform:translateY(-10px);} }
.about-text p { font-size:1.1em; line-height:1.8; }

/* مهارت‌ها */
.skills { max-width:600px; margin:30px auto; text-align:right; direction:rtl; }
.skill { margin-bottom:15px; }
.skill-name { font-weight:bold; margin-bottom:5px; }
.skill-bar { width:100%; height:15px; background:#222; border-radius:10px; overflow:hidden; }
.skill-fill { width:0%; height:100%; background:linear-gradient(90deg,#00ffff,#ff00cc,#ff9900); border-radius:10px; transition: width 1s; }

/* بلاگ */
.blog { max-width:700px; margin:50px auto; text-align:right; direction:rtl; }
.blog-item { background: rgba(255,255,255,0.08); padding:15px; border-radius:10px; margin-bottom:10px; text-align:right; }

/* فرم تماس */
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

/* گالری */
#gallery-section { max-width:1000px; margin:50px auto; text-align:center; }
.gallery { display:flex; flex-wrap:wrap; gap:20px; justify-content:center; }
.gallery-item { position:relative; overflow:hidden; border-radius:15px; flex:1 1 250px; max-width:300px; box-shadow:0 4px 15px rgba(0,255,255,0.2); transition: transform 0.3s, box-shadow 0.3s; }
.gallery-item:hover { transform:translateY(-5px); box-shadow:0 6px 25px rgba(0,255,255,0.4),0 0 10px #ff00cc; }
.gallery-item img { width:100%; height:200px; object-fit:cover; display:block; transition: transform 0.5s, filter 0.5s; }
.gallery-item img:hover { transform: scale(1.1) translateY(-5px); filter: brightness(1.1); }
.gallery-item .tooltip { position:absolute; bottom:10px; left:50%; transform:translateX(-50%) translateY(0); background: rgba(0,0,0,0.8); color:#fff; padding:6px 10px; border-radius:6px; font-size:0.8em; display:none; opacity:0; white-space:nowrap; pointer-events:none; transition: opacity 0.3s ease, transform 0.3s ease; }
.gallery-item:hover .tooltip { display:block; opacity:1; transform:translateX(-50%) translateY(-5px); }

/* لودینگ */
#loading-screen { position:fixed; top:0; left:0; right:0; bottom:0; background:#0f0f0f; display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:2000; color:#00ffff; }
#loading-text { margin-bottom:20px; font-weight:bold; font-family: monospace; font-size:1.5em; text-shadow:0 0 5px #00ffff,0 0 10px #ff00cc,0 0 15px #ff9900; animation:bounceGlow 1s infinite alternate,colorShift 2s infinite linear;}
@keyframes bounceGlow { 0%{transform:translateY(0px);} 50%{transform:translateY(-8px);} 100%{transform:translateY(0px);} }
@keyframes colorShift {0%{color:#00ffff;}25%{color:#ff00cc;}50%{color:#ff9900;}75%{color:#00ffcc;}100%{color:#00ffff;} }
#loading-bar { width:300px; height:10px; background:#222; border-radius:10px; overflow:hidden; box-shadow:0 0 10px #00ffff; }
#loading-fill { width:0%; height:100%; background:linear-gradient(90deg,#00ffff,#ff00cc,#ff9900); transition:width 0.1s linear; }

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
  .gallery-item { max-width:90%; height:auto; }
}
</style>
</head>
<body>

<!-- لودینگ -->
<div id="loading-screen">
  <div id="loading-text">Loading Arsam_khosh web...</div>
  <div id="loading-bar"><div id="loading-fill"></div></div>
</div>

<!-- نوار بالا -->
<nav>
  <a href="#about-me" data-fa="درباره من" data-en="About Me">درباره من</a>
  <a href="#projects-section" data-fa="پروژه‌ها" data-en="Projects">پروژه‌ها</a>
  <a href="#skills-section" data-fa="مهارت‌ها" data-en="Skills">مهارت‌ها</a>
  <a href="#blog-section" data-fa="اخبار" data-en="Blog">اخبار</a>
  <a href="#gallery-section" data-fa="گالری" data-en="Gallery">گالری</a>
  <a href="#contact-section" data-fa="ارتباط" data-en="Contact">ارتباط</a>
  <button id="lang-toggle">EN</button>
</nav>

<!-- ادامه بخش‌ها: درباره من، پروژه‌ها، مهارت‌ها، بلاگ، گالری، FAQ، تماس، فوتر -->
<!-- من ادامه JS و محتوای پروژه‌ها و ترجمه رو هم آماده کردم -->

<script>
// --- JS لودینگ ---
let loading = 0;
const loadingFill = document.getElementById('loading-fill');
const loadingScreen = document.getElementById('loading-screen');
const interval = setInterval(()=>{
  loading += 1;
  loadingFill.style.width = loading + '%';
  if(loading>=100){ clearInterval(interval); loadingScreen.style.display='none'; document.querySelectorAll('header,section,footer').forEach(el=>{el.style.opacity=1; el.style.transform='translateY(0)';}); }
}, 40);

// نوار بالا
const nav = document.querySelector('nav');
window.addEventListener('scroll',()=>{ if(window.scrollY>50){nav.classList.add('visible');} else{nav.classList.remove('visible');} });

// like button
document.querySelectorAll('.like-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    if(btn.classList.contains('liked')){ btn.classList.remove('liked'); btn.textContent='❤ 0'; }
    else { btn.classList.add('liked'); btn.textContent='❤ 1'; }
  });
});

// مهارت‌ها
window.addEventListener('scroll', ()=>{
  document.querySelectorAll('.skill-fill').forEach(bar=>{
    const rect = bar.getBoundingClientRect();
    if(rect.top < window.innerHeight){ bar.style.width = bar.dataset.value; }
  });
});

// FAQ toggle
document.querySelectorAll('.faq-item').forEach(item=>{
  item.addEventListener('click', ()=>{
    const ans = item.querySelector('.answer');
    ans.style.display = ans.style.display==='block' ? 'none' : 'block';
  });
});

// --- ترجمه EN/FA ---
const langToggle = document.getElementById('lang-toggle');
let isEnglish = false;
langToggle.addEventListener('click', ()=>{
  isEnglish = !isEnglish;
  langToggle.textContent = isEnglish ? 'FA' : 'EN';
  document.querySelectorAll('[data-fa]').forEach(el=>{
    el.textContent = isEnglish ? el.dataset.en : el.dataset.fa;
  });
});
</script>
</body>
</html>
<section id="about-me">
  <h2 data-fa="درباره من" data-en="About Me">درباره من</h2>
  <div class="about-card">
    <div class="profile-pic"></div>
    <div class="about-text">
      <p id="about-text-content" data-fa="سلام! من آرسام خوش‌اخلاق هستم. توسعه‌دهنده وب و علاقه‌مند به تکنولوژی‌ها. عاشق خلاقیت در طراحی و وب و برنامه نویسی هستم و همچنین به ماینکرفت و سابر بازی ها علاقه دارم 🌐✨"
      data-en="Hello! I'm Arsam Khosh akhlagh, a web developer and tech enthusiast. I love creativity in web design and programming, and also enjoy Minecraft and other games 🌐✨">
      سلام! من آرسام خوش‌اخلاق هستم. توسعه‌دهنده وب و علاقه‌مند به تکنولوژی‌ها. عاشق خلاقیت در طراحی و وب و برنامه نویسی هستم و همچنین به ماینکرفت و سایر بازی ها علاقه دارم 🌐✨
      </p>
    </div>
  </div>
</section>

<section id="projects-section">
  <h2 data-fa="پروژه‌ها" data-en="Projects">پروژه‌ها</h2>
  <div class="projects">
    <div class="project-card">
      <img src="minecraft.png" alt="پروژه 1">
      <div class="project-title" data-fa="🎮سرور ماینکرفت " data-en="🎮Minecraft Server">🎮سرور ماینکرفت </div>
      <div class="project-desc" data-fa="سرور اختصاصی برای ماینکرفت با پلاگین‌های مخصوص دارم و برای همکاری به اینستاگرام یا بخش ارتباط با ما پیام بده"
      data-en="I have a dedicated Minecraft server with custom plugins. Contact me via Instagram or the Contact section to collaborate.">
      سرور اختصاصی برای ماینکرفت با پلاگین‌های مخصوص دارم و برای همکاری به اینستاگرام یا بخش ارتباط با ما پیام بده
      </div>
      <div class="project-tech" data-fa="Spigot/Bukkit / Minecraft" data-en="Spigot/Bukkit / Minecraft">Spigot/Bukkit / Minecraft</div>
      <button class="like-btn">❤ 0</button>
      <div class="tooltip" data-fa="این پروژه مربوط به سرور ماینکرفت است" data-en="This project is about the Minecraft server">این پروژه مربوط به سرور ماینکرفت است</div>
    </div>

    <div class="project-card">
      <img src="site.png" alt="پروژه 2">
      <div class="project-title" data-fa="🌐سایت شخصی " data-en="🌐Personal Website">🌐سایت شخصی </div>
      <div class="project-desc" data-fa="من به طراحی سایت علاقه دارم و این سایت رو خودم و با کمک دوستم نوشتم"
      data-en="I enjoy web design and built this website myself with a friend.">
      من به طراحی سایت علاقه دارم و این سایت رو خودم و با کمک دوستم نوشتم
      </div>
      <div class="project-tech" data-fa="HTML / CSS / JavaScript" data-en="HTML / CSS / JavaScript">HTML / CSS / JavaScript</div>
      <button class="like-btn">❤ 0</button>
      <div class="tooltip" data-fa="این پروژه سایت شخصی من است" data-en="This project is my personal website">این پروژه سایت شخصی من است</div>
    </div>

    <div class="project-card">
      <img src="edite.png" alt="پروژه 3">
      <div class="project-title" data-fa="🎬ادیت ویدیو " data-en="🎬Video Editing">🎬ادیت ویدیو </div>
      <div class="project-desc" data-fa="به ادیت ویدیو علاقه دارم و کارهای خود را در یوتیوب منتشر می‌کنم"
      data-en="I love video editing and share my work on YouTube.">
      به ادیت ویدیو علاقه دارم و کارهای خود را در یوتیوب منتشر می‌کنم
      </div>
      <div class="project-tech" data-fa="Capcut / Filmora / Shotcut" data-en="Capcut / Filmora / Shotcut">Capcut / Filmora / Shotcut</div>
      <button class="like-btn">❤ 0</button>
      <div class="tooltip" data-fa="این پروژه مربوط به ادیت ویدیو است" data-en="This project is about video editing">این پروژه مربوط به ادیت ویدیو است</div>
    </div>
  </div>
</section>

<section id="skills-section" class="skills">
  <h2 data-fa="مهارت‌ها" data-en="Skills">مهارت‌ها</h2>
  <div class="skill">
    <div class="skill-name" data-fa="سرور ماینکرفت" data-en="Minecraft Server">سرور ماینکرفت</div>
    <div class="skill-bar"><div class="skill-fill" data-value="95%"></div></div>
  </div>
  <div class="skill">
    <div class="skill-name" data-fa="ادیت ویدیو" data-en="Video Editing">ادیت ویدیو</div>
    <div class="skill-bar"><div class="skill-fill" data-value="80%"></div></div>
  </div>
  <div class="skill">
    <div class="skill-name" data-fa="برنامه نویسی" data-en="Programming">برنامه نویسی</div>
    <div class="skill-bar"><div class="skill-fill" data-value="60%"></div></div>
  </div>
</section>

<section id="blog-section" class="blog">
  <h2 data-fa="اخبار" data-en="Blog">اخبار و بروزرسانی‌ها</h2>
  <div class="blog-item" data-fa="پست هفته: پلاگین جدید سرور ماینکرفت آماده شد!🚀" data-en="Weekly Post: New Minecraft server plugin is ready!🚀">پست هفته: پلاگین جدید سرور ماینکرفت آماده شد!🚀</div>
  <div class="blog-item" data-fa="پروژه سایت شخصی من آپدیت شد و بخش بلاگ اضافه شد.🌐" data-en="My personal website project updated with a new blog section.🌐">پروژه سایت شخصی من آپدیت شد و بخش بلاگ اضافه شد.🌐</div>
  <div class="blog-item" data-fa="ایونت جدید در سرور🚀" data-en="New event on the server🚀">ایونت جدید در سرور🚀</div>
</section>

<section id="gallery-section">
  <h2 data-fa="گالری" data-en="Gallery">گالری</h2>
  <div class="gallery">
    <div class="gallery-item">
      <img src="jade_chaloos.png" alt="تصویر 1">
      <div class="tooltip" data-fa="ایران/استان مازنداران/جاده زیبای چالوس" data-en="Iran/Mazandaran Province/Beautiful Chaloos Road">ایران/استان مازنداران/جاده زیبای چالوس</div>
    </div>
    <div class="gallery-item">
      <img src="damavand_kohe.png" alt="تصویر 2">
      <div class="tooltip" data-fa="ایران/استان تهران/کوه زیبای دماوند" data-en="Iran/Tehran Province/Damavand Mountain">ایران/استان تهران/کوه دماوند</div>
    </div>
    <div class="gallery-item">
      <img src="azadi_tehran.png" alt="تصویر 3">
      <div class="tooltip" data-fa="ایران/تهران/برج زیبای آزادی" data-en="Iran/Tehran/Beautiful Azadi Tower">ایران/تهران/برج زیبای آزادی</div>
    </div>
    <div class="gallery-item">
      <img src="shiraz.png" alt="تصویر 4">
      <div class="tooltip" data-fa="ایران/استان فارس/شیراز/آرامگاه حافظ" data-en="Iran/Fars Province/Shiraz/Hafez Tomb">ایران/استان فارس/شیراز/آرامگاه حافظ</div>
    </div>
    <div class="gallery-item">
      <img src="esfahan.png" alt="تصویر 5">
      <div class="tooltip" data-fa="ایران/اصفهان/سی و سه پل" data-en="Iran/Isfahan/Si-o-se-pol Bridge">ایران/اصفهان/سی و سه پل</div>
    </div>
  </div>
</section>

<section class="faq">
  <h2 data-fa="پرسش و پاسخ پر تکرار" data-en="FAQ">پرسش و پاسخ پر تکرار</h2>
  <div class="faq-item">
    <div class="question" data-fa="این سایت با چه زبانی ساخته شده؟" data-en="What languages is this site built with?">این سایت با چه زبانی ساخته شده؟</div>
    <div class="answer" data-fa="این سایت با HTML، CSS و JavaScript ساخته شده است." data-en="This site is built with HTML, CSS, and JavaScript.">این سایت با HTML، CSS و JavaScript ساخته شده است.</div>
  </div>
  <div class="faq-item">
    <div class="question" data-fa="آموزش به صورت رایگان میدی؟" data-en="Do you give free tutorials?">آموزش به صورت رایگان میدی؟</div>
    <div class="answer" data-fa="آموزش میدم ولی رایگان نه" data-en="I provide tutorials, but not for free.">آموزش میدم ولی رایگان نه</div>
  </div>
  <div class="faq-item">
    <div class="question" data-fa="میشه بیام توی سرورتون برای کمک؟" data-en="Can I join your server to help?">میشه بیام توی سرورتون برای کمک؟</div>
    <div class="answer" data-fa="بله حتما با استفاده از فرم تماس و اینستاگرام به من بگو" data-en="Yes, definitely! Let me know via the contact form or Instagram.">بله حتما با استفاده از فرم تماس و اینستاگرام به من بگو</div>
  </div>
  <div class="faq-item">
    <div class="question" data-fa="سفارش سایت و سرور میگیری؟" data-en="Do you take website/server orders?">سفارش سایت و سرور میگیری؟</div>
    <div class="answer" data-fa="بله سایت و سرور ماینکرفت براتون می‌سازم ولی در ازای مبلغی" data-en="Yes, I can make websites and Minecraft servers for you for a fee.">بله سایت و سرور ماینکرفت براتون می‌سازم ولی در ازای مبلغی</div>
  </div>
</section>
<section id="contact-section">
  <h2 data-fa="ارتباط با من" data-en="Contact Me">ارتباط با من</h2>

  <form id="contactForm" action="https://formspree.io/f/mnngzdlw" method="POST">

    <label for="name" data-fa="نام" data-en="Name">نام</label>
    <input type="text" id="name" name="name" required
      placeholder="your name"
      data-fa-placeholder="نام شما"
      data-en-placeholder="Your name">

    <label for="email" data-fa="ایمیل" data-en="Email">ایمیل</label>
    <input type="email" id="email" name="email" required
      placeholder="arsam.co@example.com"
      data-fa-placeholder="example@example.com"
      data-en-placeholder="example@example.com">

    <label for="phone" data-fa="شماره تلفن" data-en="Phone Number">شماره تلفن</label>
    <input type="tel" id="phone" name="phone"
      placeholder="0912xxxxxxx"
      data-fa-placeholder="0912xxxxxxx"
      data-en-placeholder="+1 234 567 890">

    <label for="message" data-fa="پیام" data-en="Message">پیام</label>
    <textarea id="message" name="message" rows="5" required
      placeholder="your message"
      data-fa-placeholder="متن پیام"
      data-en-placeholder="Your message..."></textarea>

    <button type="submit"
      data-fa="ارسال پیام"
      data-en="Send Message">
      ارسال پیام
    </button>



  </form>
</section>

<footer>
  <p
    data-fa="© 2025 — کلیه حقوق مادی و معنوی این وب‌سایت متعلق به آرسام خوش بوده و هرگونه کپی‌برداری، بازنشر یا استفاده بدون مجوز، پیگرد قانونی دارد."
    data-en="© 2025 — All intellectual and material rights of this website belong to Arsam Khosh. Any unauthorized copying or redistribution is prohibited.">
    © 2025 — کلیه حقوق مادی و معنوی این وب‌سایت متعلق به آرسام خوش بوده و هرگونه کپی‌برداری، بازنشر یا استفاده بدون مجوز، پیگرد قانونی دارد.
  </p>

  <p
    data-fa="نسخه 1.0"
    data-en="Version 1.0">
    نسخه 1.0
  </p>
</footer>


  <footer id="site-footer"></footer>

<script>
const footerText = {"text":"","extra":[{"text":"A","color":"#FF1E00","shadow_color":[0.01,0,0.25,1]},{"text":"r","color":"#FF2C00","shadow_color":[0.01,0,0.25,1]},{"text":"s","color":"#FF3B00","shadow_color":[0.01,0,0.25,1]},{"text":"a","color":"#FF4900","shadow_color":[0.01,0,0.25,1]},{"text":"m","color":"#FF5700","shadow_color":[0.01,0,0.25,1]},{"text":"_","color":"#FF6500","shadow_color":[0.01,0,0.25,1]},{"text":"k","color":"#FF7400","shadow_color":[0.01,0,0.25,1]},{"text":"h","color":"#FF8200","shadow_color":[0.01,0,0.25,1]},{"text":"o","color":"#FF9000","shadow_color":[0.01,0,0.25,1]},{"text":"s","color":"#FF9F00","shadow_color":[0.01,0,0.25,1]},{"text":"h","color":"#FFAD00","shadow_color":[0.01,0,0.25,1]}]};

function renderFooter(json) {
  const footer = document.getElementById('site-footer');
  const p = document.createElement('p');

  json.extra.forEach(item => {
    const span = document.createElement('span');
    span.textContent = item.text;
    if(item.color) span.style.color = item.color;
    if(item.shadow_color) {
      const [x, y, blur, a] = item.shadow_color;
      span.style.textShadow = `${x*100}px ${y*100}px ${blur*20}px rgba(0,0,0,${a})`;
    }
    p.appendChild(span);
  });

  footer.appendChild(p);
}

renderFooter(footerText);
</script>

  <a href="https://instagram.com/arsam.khosh" target="_blank" data-fa="اینستاگرام من" data-en="My Instagram">اینستاگرام من</a>
 
<script>
// ترجمه کامل فارسی/انگلیسی
const langToggle = document.getElementById('lang-toggle');
let isEnglish = false;

langToggle.addEventListener('click', ()=>{
  isEnglish = !isEnglish;
  langToggle.textContent = isEnglish ? "FA" : "EN";

  document.querySelectorAll('[data-fa]').forEach(el=>{
    const faText = el.getAttribute('data-fa');
    const enText = el.getAttribute('data-en');
   
    if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'){
      el.placeholder = isEnglish ? el.getAttribute('data-en-placeholder') : el.getAttribute('data-fa-placeholder');
    } else {
      el.innerHTML = isEnglish ? enText : faText;
    }
  });
});
</script>
<script>
document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.querySelector('.answer');
      answer.style.display =
        answer.style.display === 'block' ? 'none' : 'block';
    });
  });

});
</script>
