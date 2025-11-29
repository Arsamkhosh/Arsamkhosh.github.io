<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>پروژه‌های من</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
<style>
/* پایه - بهبود یافته */
:root{
  --bg1:#0f0f0f;
  --bg2:#1a1a1a;
  --accent-a:#00ffff;
  --accent-b:#ff00cc;
  --accent-c:#ff9900;
  --card-bg: rgba(255,255,255,0.06);
  --muted:#bdbdbd;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family:'Vazirmatn',sans-serif;
  background:linear-gradient(135deg,var(--bg1),var(--bg2));
  color:#fff;
  text-align:center;
  overflow-x:hidden;
  transition: background 0.35s, color 0.35s;
  -webkit-font-smoothing:antialiased;
}

/* header (اصلاح) */
header{
  position:fixed;
  inset:0 0 auto 0;
  height:64px;
  display:flex;
  align-items:center;
  z-index:1200;
  pointer-events:none;
}
nav {
  pointer-events:auto;
  margin:0 auto;
  width:100%;
  max-width:1100px;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px 18px;
  z-index: 1000;
  border-radius:12px;
  border:1px solid rgba(0,255,255,0.06);
  transform: translateY(-90px);
  transition: transform 0.35s ease, box-shadow 0.35s;
}
nav.visible { transform: translateY(10px); box-shadow: 0 10px 30px rgba(0,0,0,0.6); }
nav a {
  color: var(--accent-a);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.25s, text-shadow 0.25s;
}
nav a:hover {
  color: var(--accent-b);
  text-shadow: 0 0 8px var(--accent-b);
}

/* wrapper spacing to avoid nav overlap */
.main-wrapper{ padding-top:110px; }

/* پروژه‌ها */
.projects { display:flex; justify-content:center; flex-wrap:wrap; gap:24px; margin-top:20px; padding: 0 18px; }
.project-card {
  position:relative;
  background:var(--card-bg);
  padding:18px;
  width:300px;
  min-height:250px;
  border-radius:14px;
  border-left:5px solid var(--accent-a);
  box-shadow:0 6px 24px rgba(0,255,255,0.04);
  text-align:center;
  cursor:pointer;
  transition: transform 0.28s, box-shadow 0.28s, background 0.3s, border-left 0.28s;
  overflow:visible;
}
.project-card img { width:100%; border-radius:12px; margin-bottom:12px; transition: transform 0.35s ease; display:block; }
.project-card:hover {
  transform:translateY(-8px) rotate(-0.6deg);
  box-shadow:0 0 36px var(--accent-b),0 0 12px var(--accent-a);
  border-left:5px solid var(--accent-b);
}
.project-card:hover img { transform: scale(1.05); }
.project-title { font-size:1.25em; font-weight:bold; margin-bottom:8px; color:var(--accent-a); direction:rtl; }
.project-desc { color:#ccc; margin-bottom:10px; font-size:0.92em; direction:rtl; }
.project-tech { font-size:0.82em; color:var(--accent-c); font-weight:700; direction:rtl; }
.like-btn {
  display:inline-block;
  padding:6px 12px;
  margin-top:10px;
  border-radius:10px;
  border:none;
  cursor:pointer;
  font-weight:bold;
  background:var(--accent-a);
  color:#000;
  transition: transform 0.18s, background 0.2s;
}
.like-btn.liked { background:var(--accent-b); color:#fff; transform:scale(1.04); }

/* tooltip پروژه */
.project-card .tooltip {
  position:absolute;
  bottom:calc(100% + 8px);
  left:50%;
  transform:translateX(-50%) translateY(0);
  background:rgba(10,10,10,0.95);
  color:#fff;
  padding:7px 10px;
  border-radius:8px;
  font-size:0.82em;
  opacity:0;
  white-space:nowrap;
  pointer-events:none;
  transition: opacity 0.22s ease, transform 0.22s ease;
  box-shadow: 0 6px 18px rgba(0,0,0,0.6);
}
.project-card:hover .tooltip {
  opacity:1;
  transform:translateX(-50%) translateY(-6px);
}

/* درباره من */
.about-card {
  max-width:780px;
  margin:20px auto;
  background: var(--card-bg);
  padding:26px;
  border-radius:18px;
  box-shadow:0 10px 30px rgba(255,255,255,0.03);
  display:flex;
  align-items:center;
  direction:rtl;
  text-align:right;
  gap:18px;
  transition: all 0.28s ease;
}
.about-card:hover{
  transform: translateY(-6px);
  box-shadow:0 8px 30px rgba(0,255,255,0.04);
  border-left:6px solid var(--accent-a);
}
.profile-pic { width:100px;height:100px; border-radius:50%; background:var(--accent-a); margin-left:20px; border:4px solid var(--accent-b); overflow:hidden; box-shadow:0 0 18px rgba(0,255,255,0.08); flex-shrink:0; animation: float 3s ease-in-out infinite alternate;}
@keyframes float {0%{transform:translateY(0);}100%{transform:translateY(-8px);} }
.about-text p { font-size:1.05em; line-height:1.8; color:#eaeaea; }

/* مهارت‌ها */
.skills { max-width:700px; margin:30px auto; text-align:right; direction:rtl; padding:0 18px; }
.skill { margin-bottom:14px; }
.skill-name { font-weight:bold; margin-bottom:6px; color:#e6faff; }
.skill-bar { width:100%; height:14px; background:#222; border-radius:10px; overflow:hidden; }
.skill-fill { width:0%; height:100%; background:linear-gradient(90deg,var(--accent-a),var(--accent-b),var(--accent-c)); border-radius:10px; transition: width 1s ease-out; }

/* بلاگ کوتاه */
.blog { max-width:720px; margin:50px auto; text-align:right; direction:rtl; padding:0 18px; }
.blog-item { background: var(--card-bg); padding:14px; border-radius:10px; margin-bottom:10px; text-align:right; color:#eee; }

/* فرم تماس */
form { max-width:520px; margin:40px auto; background: var(--card-bg); padding:20px; border-radius:14px; box-shadow:0 8px 30px rgba(0,255,255,0.02); direction:rtl; text-align:right; }
input,textarea{ width:100%; padding:12px; border-radius:10px; border:1px solid rgba(0,255,255,0.08); background-color: rgba(255,255,255,0.03); color:#fff; margin-bottom:12px; font-family:inherit; }
::placeholder{ color:#aaa; opacity:1; }
button[type="submit"] { background: linear-gradient(135deg,var(--accent-a),var(--accent-b)); color:#000; font-weight:bold; padding:10px 18px; border:none; border-radius:10px; cursor:pointer; transition: transform 0.18s; }
button[type="submit"]:hover{ transform:scale(1.03); }

/* FAQ */
.faq { max-width:820px; margin:50px auto; text-align:right; direction:rtl; padding:0 18px; }
.faq h2 { text-align: center; color:var(--accent-a); }
.faq-item { background: var(--card-bg); padding:12px; border-radius:10px; margin-bottom:10px; cursor:pointer; border:2px solid rgba(0,255,255,0.04); transition: 0.22s; text-align:right; }
.faq-item:hover { box-shadow:0 8px 26px rgba(0,0,0,0.6); }
.faq-item .answer { display:none; margin-top:10px; color:#ccc; font-size:0.94em; line-height:1.6; }

/* گالری */
#gallery-section { max-width:1000px; margin:50px auto; text-align:center; padding:0 18px; }
.gallery { display:flex; flex-wrap:wrap; gap:16px; justify-content:center; }
.gallery-item {
  position:relative;
  overflow:hidden;
  border-radius:12px;
  flex:1 1 250px;
  max-width:300px;
  box-shadow:0 6px 20px rgba(0,255,255,0.06);
  transition: transform 0.28s, box-shadow 0.28s;
}
.gallery-item:hover { transform:translateY(-6px); box-shadow:0 10px 30px rgba(0,255,255,0.08),0 0 10px var(--accent-b); }
.gallery-item img { width:100%; height:200px; object-fit:cover; display:block; transition: transform 0.45s, filter 0.45s; }
.gallery-item img:hover { transform: scale(1.08) translateY(-4px); filter: brightness(1.06); }
/* tooltip گالری */
.gallery-item .tooltip {
  position:absolute;
  bottom:10px;
  left:50%;
  transform:translateX(-50%) translateY(0);
  background: rgba(0,0,0,0.75);
  color:#fff;
  padding:6px 10px;
  border-radius:6px;
  font-size:0.82em;
  opacity:0;
  white-space:nowrap;
  pointer-events:none;
  transition: opacity 0.22s ease, transform 0.22s ease;
}
.gallery-item:hover .tooltip { opacity:1; transform:translateX(-50%) translateY(-6px); }

/* لودینگ واقعی‌تر */
#loading-screen {
  position:fixed;
  top:0; left:0; right:0; bottom:0;
  background:linear-gradient(180deg,var(--bg1),#070707);
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  z-index:2000;
  color:var(--accent-a);
}
#loading-text {
  margin-bottom:16px;
  font-weight:bold;
  font-family: monospace;
  font-size:1.2em;
  text-shadow: 0 0 6px var(--accent-a), 0 0 10px var(--accent-b);
  animation: colorShift 2.5s infinite linear;
}
@keyframes colorShift {
  0%{color:var(--accent-a);} 50%{color:var(--accent-b);} 100%{color:var(--accent-c);}
}
#loading-bar { width:320px; height:10px; background:#111; border-radius:10px; overflow:hidden; box-shadow:0 0 8px rgba(0,0,0,0.5); }
#loading-fill { width:0%; height:100%; background:linear-gradient(90deg,var(--accent-a),var(--accent-b),var(--accent-c)); transition: width 0.3s linear; }

/* فوتر */
footer{ margin-top:50px; color:#ccc; display:flex; justify-content:center; flex-direction:column; align-items:center; gap:8px; padding:28px 10px; }
footer a{ color:var(--accent-a); text-decoration:none;}
footer a:hover{ text-decoration:underline; }

/* ریسپانسیو */
@media(max-width:650px){
  .projects { flex-direction:column; align-items:center; padding:0 12px; }
  .project-card { width:92%; }
  .about-card { flex-direction:column; text-align:center; }
  .profile-pic { margin-left:0;margin-bottom:14px; }
  .about-text { text-align:center; }
  .gallery-item { max-width:92%; height:auto; }
  nav { gap:10px; padding:8px; }
}
</style>
</head>
<body>

<!-- لودینگ -->
<div id="loading-screen" aria-hidden="false">
  <div id="loading-text">Loading Arsam_khosh web...</div>
  <div id="loading-bar"><div id="loading-fill"></div></div>
</div>

<header>
  <nav id="topNav" aria-label="main navigation">
    <a href="#about-me">درباره من</a>
    <a href="#projects-section">پروژه‌ها</a>
    <a href="#skills-section">مهارت‌ها</a>
    <a href="#blog-section">اخبار</a>
    <a href="#gallery-section">گالری</a>
    <a href="#contact-section">ارتباط</a>
  </nav>
</header>

<div class="main-wrapper">

<section id="about-me">
  <h2>درباره من</h2>
  <div class="about-card">
    <div class="profile-pic" role="img" aria-label="profile picture"></div>
    <div class="about-text">
      <p id="about-text-content">
        سلام! من <strong>آرسام خوش‌اخلاق</strong> هستم. توسعه‌دهنده وب و علاقه‌مند به تکنولوژی‌ها. عاشق خلاقیت در طراحی و وب و برنامه نویسی هستم و همچنین به ماینکرفت و سابر بازی ها علاقه دارم 🌐✨
      </p>
    </div>
  </div>
</section>

<section id="projects-section">
  <h2>پروژه‌ها</h2>
  <div class="projects" id="projectsContainer">
    <div class="project-card" data-id="proj-1" tabindex="0" aria-label="پروژه سرور ماینکرفت">
      <img src="minecraft.png" alt="پروژه 1" loading="lazy">
      <div class="project-title">🎮سرور ماینکرفت </div>
      <div class="project-desc">سرور اختصاصی برای ماینکرفت با پلاگین‌های مخصوص دارم و برای همکاری به اینستاگرام یا بخش ارتباط با ما پیام بده</div>
      <div class="project-tech">Spigot/Bukkit / Minecraft</div>
      <button class="like-btn" data-like-key="proj-1">❤ 0</button>
      <div class="tooltip">این پروژه مربوط به سرور ماینکرفت است</div>
    </div>
    <div class="project-card" data-id="proj-2" tabindex="0" aria-label="پروژه سایت شخصی">
      <img src="site.png" alt="پروژه 2" loading="lazy">
      <div class="project-title">🌐سایت شخصی </div>
      <div class="project-desc">من به طراحی سایت علاقه دارم و این سایت رو خودم و با کمک دوستم نوشتم</div>
      <div class="project-tech">HTML / CSS / JavaScript</div>
      <button class="like-btn" data-like-key="proj-2">❤ 0</button>
      <div class="tooltip">این پروژه سایت شخصی من است</div>
    </div>
    <div class="project-card" data-id="proj-3" tabindex="0" aria-label="پروژه ادیت ویدیو">
      <img src="edite.png" alt="پروژه 3" loading="lazy">
      <div class="project-title">🎬ادیت ویدیو </div>
      <div class="project-desc">به ادیت ویدیو علاقه دارم و کارهای خود را در یوتیوب منتشر می‌کنم</div>
      <div class="project-tech">Capcut / Filmora / Shotcut</div>
      <button class="like-btn" data-like-key="proj-3">❤ 0</button>
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
  <div class="blog-item"> پست هفته: پلاگین جدید سرور ماینکرفت آماده شد!🚀</div>
  <div class="blog-item"> پروژه سایت شخصی من آپدیت شد و بخش بلاگ اضافه شد.🌐</div>
  <div class="blog-item"> ایونت جدید در سرور🚀</div>
</section>

<section id="gallery-section">
  <h2>گالری</h2>
  <div class="gallery" id="gallery">
    <div class="gallery-item"><img src="jade_chaloos.png" alt="تصویر 1" loading="lazy"><div class="tooltip">ایران/استان مازنداران/جاده زیبای چالوس</div></div>
    <div class="gallery-item"><img src="damavand_kohe.png" alt="تصویر 2" loading="lazy"><div class="tooltip">ایران/استان تهران/کوه زیبای دماوند</div></div>
    <div class="gallery-item"><img src="azadi_tehran.png" alt="تصویر 3" loading="lazy"><div class="tooltip">ایران/تهران/برج زیبای آزادی</div></div>
    <div class="gallery-item"><img src="shiraz.png" alt="تصویر 4" loading="lazy"><div class="tooltip">ایران/استان فارس/شیراز/آرامگاه حافظ</div></div>
    <div class="gallery-item"><img src="esfahan.png" alt="تصویر 5" loading="lazy"><div class="tooltip">ایران/اصفهان/سی و سه پل</div></div>
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
  <form id="contactForm" action="https://formspree.io/f/mnngzdlw" method="POST" novalidate>
    <label for="name">نام:</label>
    <input type="text" id="name" name="name" required placeholder="نام شما">
    <label for="email">ایمیل:</label>
    <input type="email" id="email" name="email" required placeholder="example@example.com">
    <label for="phone">شماره تلفن:</label>
    <input type="tel" id="phone" name="phone" placeholder="0912xxxxxxx">
    <label for="message">پیام:</label>
    <textarea id="message" name="message" rows="5" required placeholder="متن پیام..."></textarea>
    <button type="submit">ارسال پیام</button>
    <p id="formMessage" aria-live="polite"></p>
  </form>
</section>

<footer>
  <p>© 2025 تمامی حقوق محفوظ است</p> 
    <p> Arsam_khosh </p>
  <a href="https://instagram.com/arsam.khosh" target="_blank" rel="noopener">اینستاگرام من</a>
</footer>

</div><!-- .main-wrapper end -->

<script>
/* ====== لودینگ واقعی: صبر می‌کنیم تا تصاویر بارگذاری شوند، بعد مخفی می‌کنیم ====== */
(function(){
  const imgs = Array.from(document.images);
  const loadingScreen = document.getElementById('loading-screen');
  const loadingFill = document.getElementById('loading-fill');
  const loadingText = document.getElementById('loading-text');

  if(imgs.length === 0){
    loadingFill.style.width = '100%';
    setTimeout(()=> loadingScreen.style.display='none', 350);
    return;
  }

  let loaded = 0;
  const update = ()=>{
    loaded++;
    const pct = Math.round((loaded / imgs.length) * 100);
    loadingFill.style.width = pct + '%';
    if(loaded >= imgs.length){
      // اندکی انیمیشن پایان
      loadingText.textContent = 'Loaded';
      setTimeout(()=> loadingScreen.style.display='none', 220);
    }
  };

  imgs.forEach(img=>{
    if(img.complete) update();
    else img.addEventListener('load', update, {once:true}), img.addEventListener('error', update, {once:true});
  });

  // فیل‌بک: اگر لود طولانی شد، بعد 6 ثانیه می‌بریم پایین (تا کاربر عصبی نشه)
  setTimeout(()=> {
    if(loadingScreen.style.display !== 'none'){
      loadingFill.style.width = '100%';
      loadingScreen.style.display = 'none';
    }
  }, 6000);
})();

/* ====== نوار بالا: نمایش بر اساس اسکرول ====== */
const nav = document.getElementById('topNav');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 50) nav.classList.add('visible'); else nav.classList.remove('visible');
});

/* ====== FAQ toggle (قابل دسترس) ====== */
document.querySelectorAll('.faq-item').forEach(item=>{
  item.addEventListener('click', ()=>{
    const ans = item.querySelector('.answer');
    const isOpen = ans.style.display === 'block';
    document.querySelectorAll('.faq-item .answer').forEach(a=> a.style.display = 'none');
    if(!isOpen) ans.style.display = 'block';
  });
});

/* ====== like button: ذخیره در localStorage ====== */
(function(){
  const buttons = document.querySelectorAll('.like-btn');
  buttons.forEach(btn=>{
    const key = btn.dataset.likeKey;
    if(!key) return;
    const saved = localStorage.getItem('likes:'+key);
    if(saved === '1'){ btn.classList.add('liked'); btn.textContent = '❤ 1'; }
    else btn.textContent = '❤ 0';

    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      const liked = btn.classList.toggle('liked');
      if(liked){ btn.textContent = '❤ 1'; localStorage.setItem('likes:'+key,'1'); }
      else { btn.textContent = '❤ 0'; localStorage.removeItem('likes:'+key); }
    });
  });
})();

/* ====== مهارت‌ها: پر شدن هنگام دیده شدن ====== */
(function(){
  const fills = document.querySelectorAll('.skill-fill');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el = entry.target;
        el.style.width = el.dataset.value;
        obs.unobserve(el);
      }
    });
  }, {threshold: 0.25});
  fills.forEach(f=> obs.observe(f));
})();

/* ====== دکمه‌های پروژه: فوکوس / کیبورد دسترسی بهتر ====== */
document.querySelectorAll('.project-card').forEach(card=>{
  card.addEventListener('keydown', e=>{
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      const btn = card.querySelector('.like-btn');
      if(btn) btn.click();
    }
  });
});

/* ====== فرم تماس: نمایش پیام ساده بدون ارسال مجدد ====== */
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if(contactForm){
  contactForm.addEventListener('submit', (e)=>{
    // اجازه می‌دیم فرم ارسال بشه به Formspree؛ ولی برای UX فوری این پیام رو نشون میدیم
    formMessage.textContent = 'در حال ارسال...';
    formMessage.style.color = '#fff';
    // پس از ارسال واقعی، مرورگر صفحه را ری‌دایرکت می‌کند یا نه؛ ما چیزی اضافه نمی‌کنیم.
    setTimeout(()=> formMessage.textContent = 'پیام ارسال شد. متشکرم!', 800);
  });
}

/* ====== بهبود accessibility برای tooltipها در موبایل: نمایش با تاچ ====== */
(function(){
  const gallery = document.getElementById('gallery');
  if(!gallery) return;
  gallery.querySelectorAll('.gallery-item').forEach(item=>{
    item.addEventListener('touchstart', ()=>{
      const t = item.querySelector('.tooltip');
      if(!t) return;
      // مخفی بقیه
      gallery.querySelectorAll('.gallery-item .tooltip').forEach(tt=> { if(tt !== t) tt.style.opacity = 0; });
      t.style.opacity = t.style.opacity === '1' ? '0' : '1';
    });
  });
})();

/* ====== کوچک‌سازی عکس‌های بزرگ (محافظه روی موبایل) ====== */
/* در صورت نیاز به lazy-loading بیشتر، می‌تونیم IntersectionObserver اضافه کنیم. */
</script>

</body>
</html>
