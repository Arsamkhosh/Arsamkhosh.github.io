<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>پروژه‌های من | Arsam Khosh</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700;900&display=swap" rel="stylesheet">
<style>
/* پایه */
html { scroll-behavior: smooth; }
body { margin:0; font-family:'Vazirmatn',sans-serif; background:#0a0a0a; color:#fff; text-align:center; overflow-x:hidden; cursor: none; }
header, section, footer { padding: 60px 5%; opacity:0; transform:translateY(30px); transition:all 0.8s ease-out; }
section.reveal { opacity:1; transform:translateY(0); }

/* افکت دنباله موس نئونی */
.cursor-dot { width: 8px; height: 8px; background-color: #00ffff; box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff; position: fixed; top: 0; left: 0; transform: translate(-50%, -50%); border-radius: 50%; z-index: 10000; pointer-events: none; }
.cursor-outline { width: 40px; height: 40px; border: 2px solid #ff00cc; box-shadow: 0 0 15px #ff00cc; position: fixed; top: 0; left: 0; transform: translate(-50%, -50%); border-radius: 50%; z-index: 9999; pointer-events: none; }
.cursor-hover { transform: translate(-50%, -50%) scale(1.6); background-color: rgba(0, 255, 255, 0.1); border-color: #00ffff; }

/* نوار بالا */
nav { position: fixed; top: -80px; left:0; right:0; background: rgba(0,0,0,0.8); backdrop-filter: blur(15px); display:flex; justify-content:center; align-items:center; gap:20px; padding:15px; z-index:1000; border-bottom:1px solid rgba(0,255,255,0.2); transition:top 0.4s ease; }
nav.visible { top:0; }
nav a { color:#00ffff; text-decoration:none; font-weight:bold; font-size: 0.9em; transition:0.3s; }
nav a:hover { color:#ff00cc; text-shadow:0 0 10px #ff00cc; }
#lang-toggle { margin-left:20px; padding:6px 15px; border-radius:10px; border:none; cursor:none; background:linear-gradient(45deg,#ff00cc,#00ffff); color:#000; font-weight:bold; }

/* تیترها */
h1 { font-size:3em; font-weight: 900; background: linear-gradient(90deg,#00ffff,#ff00cc,#ff9900); -webkit-background-clip:text; -webkit-text-fill-color:transparent; text-shadow:0 0 15px rgba(0,255,255,0.3);}
h2 { color:#00ffff; margin-bottom:40px; font-size:2.2em; font-weight: 900; text-transform: uppercase; }

/* درباره من */
.about-card { max-width:800px; margin:0 auto; background: rgba(255,255,255,0.03); padding:40px; border-radius:24px; display:flex; align-items:center; direction:rtl; text-align:right; border: 1px solid rgba(0,255,255,0.1); }
.profile-pic { width:130px; height:130px; border-radius:50%; background:url('profile.png') center/cover; margin-left:25px; border:4px solid #ff00cc; box-shadow:0 0 25px #00ffff; flex-shrink:0; animation: float 3s ease-in-out infinite alternate; }
@keyframes float { 0%{transform:translateY(0);} 100%{transform:translateY(-20px);} }
.about-text p { font-size:1.15em; line-height:1.9; color: #ddd; }

/* پروژه‌ها */
.projects { display:flex; justify-content:center; flex-wrap:wrap; gap:30px; }
.project-card { position:relative; background:rgba(255,255,255,0.02); padding:25px; width:310px; border-radius:20px; border-left:5px solid #00ffff; transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.project-card:hover { transform:translateY(-15px); background:rgba(255,255,255,0.07); border-color:#ff00cc; box-shadow:0 15px 40px rgba(255,0,204,0.2); }
.project-card img { width:100%; border-radius:15px; margin-bottom:15px; transition:0.4s; }
.project-card:hover img { filter: brightness(1.2); transform: scale(1.03); }
.project-title { font-size:1.5em; font-weight:bold; color:#00ffff; margin-bottom:10px; }
.project-tech { color:#ff9900; font-size:0.85em; font-weight:bold; margin: 10px 0; }
.like-btn { padding:8px 18px; border-radius:12px; border:none; background:#00ffff; color:#000; font-weight:bold; cursor:none; transition:0.3s; }
.like-btn.liked { background:#ff00cc; color:#fff; box-shadow:0 0 15px #ff00cc; }

/* مهارت‌ها */
.skills { max-width:650px; margin:0 auto; text-align:right; direction:rtl; }
.skill { margin-bottom:25px; }
.skill-bar { width:100%; height:16px; background:#1a1a1a; border-radius:20px; border:1px solid #333; overflow:hidden; }
.skill-fill { width:0%; height:100%; background:linear-gradient(90deg,#00ffff,#ff00cc); transition: width 1.5s ease-in-out; }

/* بلاگ و FAQ */
.blog, .faq { max-width:800px; margin:0 auto; direction:rtl; text-align:right; }
.blog-item, .faq-item { background:rgba(255,255,255,0.04); padding:20px; border-radius:15px; margin-bottom:15px; border-right:4px solid #00ffff; transition:0.3s; cursor:none; }
.faq-item:hover { background:rgba(255,255,255,0.08); border-color:#ff00cc; }
.answer { display:none; padding:15px 0; color:#bbb; border-top:1px solid #333; margin-top:10px; }

/* گالری */
.gallery { display:flex; flex-wrap:wrap; gap:15px; justify-content:center; }
.gallery-item { position:relative; width:280px; height:200px; border-radius:15px; overflow:hidden; cursor:none; }
.gallery-item img { width:100%; height:100%; object-fit:cover; transition:0.5s; }
.gallery-item:hover img { transform:scale(1.15); filter:brightness(1.2); }

/* فرم تماس */
form { max-width:550px; margin:0 auto; background:rgba(255,255,255,0.03); padding:35px; border-radius:25px; border:1px solid rgba(0,255,255,0.1); direction:rtl; text-align:right; }
input, textarea { width:100%; padding:15px; margin-bottom:20px; border-radius:12px; border:1px solid #333; background:rgba(0,0,0,0.4); color:#fff; box-sizing:border-box; cursor:none; }
button[type="submit"] { width:100%; padding:15px; border-radius:12px; border:none; background:linear-gradient(45deg,#00ffff,#ff00cc); color:#000; font-weight:900; font-size:1.1em; cursor:none; }

/* لودینگ */
#loading-screen { position:fixed; inset:0; background:#000; z-index:9999; display:flex; flex-direction:column; align-items:center; justify-content:center; }
#loading-fill { width:0%; height:100%; background:linear-gradient(90deg,#00ffff,#ff00cc); transition:0.1s; }

/* ریسپانسیو */
@media(max-width:768px){
    body { cursor: auto; }
    .cursor-dot, .cursor-outline { display:none; }
    .about-card { flex-direction:column; text-align:center; }
    .profile-pic { margin:0 0 20px 0; }
}
</style>
</head>
<body>

<div id="loading-screen">
    <div style="color:#00ffff; font-family:monospace; font-size:1.5em; margin-bottom:20px;">LOADING ARSAM_KHOSH...</div>
    <div style="width:300px; height:10px; background:#222; border-radius:10px; overflow:hidden; border:1px solid #00ffff;">
        <div id="loading-fill"></div>
    </div>
</div>

<div class="cursor-dot"></div>
<div class="cursor-outline"></div>

<nav>
    <a href="#about-me" data-fa="درباره من" data-en="About Me">درباره من</a>
    <a href="#projects-section" data-fa="پروژه‌ها" data-en="Projects">پروژه‌ها</a>
    <a href="#skills-section" data-fa="مهارت‌ها" data-en="Skills">مهارت‌ها</a>
    <a href="#blog-section" data-fa="اخبار" data-en="Blog">اخبار</a>
    <a href="#gallery-section" data-fa="گالری" data-en="Gallery">گالری</a>
    <a href="#contact-section" data-fa="ارتباط" data-en="Contact">ارتباط</a>
    <button id="lang-toggle">EN</button>
</nav>

<section id="about-me" class="reveal">
    <h2 data-fa="درباره من" data-en="About Me">درباره من</h2>
    <div class="about-card">
        <div class="profile-pic"></div>
        <div class="about-text">
            <p data-fa="سلام! من آرسام خوش‌اخلاق هستم. توسعه‌دهنده وب و علاقه‌مند به تکنولوژی‌ها. عاشق خلاقیت در طراحی و وب و برنامه نویسی هستم و همچنین به ماینکرفت و سایر بازی ها علاقه دارم 🌐✨" 
               data-en="Hello! I'm Arsam Khosh akhlagh, a web developer and tech enthusiast. I love creativity in web design and programming, and also enjoy Minecraft and other games 🌐✨">
               سلام! من آرسام خوش‌اخلاق هستم. توسعه‌دهنده وب و علاقه‌مند به تکنولوژی‌ها. عاشق خلاقیت در طراحی و وب و برنامه نویسی هستم و همچنین به ماینکرفت و سایر بازی ها علاقه دارم 🌐✨
            </p>
        </div>
    </div>
</section>

<section id="projects-section" class="reveal">
    <h2 data-fa="پروژه‌ها" data-en="Projects">پروژه‌ها</h2>
    <div class="projects">
        <div class="project-card">
            <img src="minecraft.png" alt="Minecraft">
            <div class="project-title" data-fa="🎮سرور ماینکرفت" data-en="🎮Minecraft Server">🎮سرور ماینکرفت</div>
            <div class="project-desc" data-fa="سرور اختصاصی برای ماینکرفت با پلاگین‌های مخصوص دارم." data-en="I have a dedicated Minecraft server with custom plugins.">سرور اختصاصی برای ماینکرفت با پلاگین‌های مخصوص دارم.</div>
            <div class="project-tech">Spigot / Bukkit</div>
            <button class="like-btn">❤ 0</button>
        </div>
        <div class="project-card">
            <img src="site.png" alt="Site">
            <div class="project-title" data-fa="🌐سایت شخصی" data-en="🌐Personal Website">🌐سایت شخصی</div>
            <div class="project-desc" data-fa="من به طراحی سایت علاقه دارم و این سایت رو خودم نوشتم." data-en="I enjoy web design and built this website myself.">من به طراحی سایت علاقه دارم و این سایت رو خودم نوشتم.</div>
            <div class="project-tech">HTML / CSS / JS</div>
            <button class="like-btn">❤ 0</button>
        </div>
        <div class="project-card">
            <img src="edite.png" alt="Edit">
            <div class="project-title" data-fa="🎬ادیت ویدیو" data-en="🎬Video Editing">🎬ادیت ویدیو</div>
            <div class="project-desc" data-fa="به ادیت ویدیو علاقه دارم و کارهایم را در یوتیوب منتشر می‌کنم." data-en="I love video editing and share my work on YouTube.">به ادیت ویدیو علاقه دارم و کارهایم را در یوتیوب منتشر می‌کنم.</div>
            <div class="project-tech">Capcut / Filmora</div>
            <button class="like-btn">❤ 0</button>
        </div>
    </div>
</section>

<section id="skills-section" class="reveal">
    <h2 data-fa="مهارت‌ها" data-en="Skills">مهارت‌ها</h2>
    <div class="skills">
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
    </div>
</section>

<section id="blog-section" class="reveal">
    <h2 data-fa="اخبار" data-en="Blog">اخبار و بروزرسانی‌ها</h2>
    <div class="blog">
        <div class="blog-item" data-fa="پست هفته: پلاگین جدید سرور ماینکرفت آماده شد!🚀" data-en="Weekly Post: New Minecraft server plugin is ready!🚀">پست هفته: پلاگین جدید سرور ماینکرفت آماده شد!🚀</div>
        <div class="blog-item" data-fa="پروژه سایت شخصی من آپدیت شد و بخش بلاگ اضافه شد.🌐" data-en="My personal website project updated with a new blog section.🌐">پروژه سایت شخصی من آپدیت شد و بخش بلاگ اضافه شد.🌐</div>
        <div class="blog-item" data-fa="ایونت جدید در سرور🚀" data-en="New event on the server🚀">ایونت جدید در سرور🚀</div>
    </div>
</section>

<section id="gallery-section" class="reveal">
    <h2 data-fa="گالری" data-en="Gallery">گالری</h2>
    <div class="gallery">
        <div class="gallery-item"><img src="jade_chaloos.png" alt="چالوس"></div>
        <div class="gallery-item"><img src="damavand_kohe.png" alt="دماوند"></div>
        <div class="gallery-item"><img src="azadi_tehran.png" alt="آزادی"></div>
        <div class="gallery-item"><img src="shiraz.png" alt="شیراز"></div>
        <div class="gallery-item"><img src="esfahan.png" alt="اصفهان"></div>
    </div>
</section>

<section class="reveal">
    <h2 data-fa="پرسش و پاسخ" data-en="FAQ">پرسش و پاسخ</h2>
    <div class="faq">
        <div class="faq-item">
            <div data-fa="این سایت با چه زبانی ساخته شده؟" data-en="What languages is this site built with?">این سایت با چه زبانی ساخته شده؟</div>
            <div class="answer" data-fa="این سایت با HTML، CSS و JavaScript ساخته شده است." data-en="Built with HTML, CSS, and JS.">این سایت با HTML، CSS و JavaScript ساخته شده است.</div>
        </div>
        <div class="faq-item">
            <div data-fa="آموزش به صورت رایگان میدی؟" data-en="Do you give free tutorials?">آموزش به صورت رایگان میدی؟</div>
            <div class="answer" data-fa="آموزش میدم ولی رایگان نه" data-en="I teach, but not for free.">آموزش میدم ولی رایگان نه</div>
        </div>
        <div class="faq-item">
            <div data-fa="میشه بیام توی سرورتون برای کمک؟" data-en="Can I join your server to help?">میشه بیام توی سرورتون برای کمک؟</div>
            <div class="answer" data-fa="بله حتما با اینستاگرام به من بگو" data-en="Yes, contact me on IG.">بله حتما با اینستاگرام به من بگو</div>
        </div>
        <div class="faq-item">
            <div data-fa="سفارش سایت و سرور میگیری؟" data-en="Do you take website/server orders?">سفارش سایت و سرور میگیری؟</div>
            <div class="answer" data-fa="بله سایت و سرور ماینکرفت می‌سازم." data-en="Yes, I build sites and servers.">بله سایت و سرور ماینکرفت می‌سازم.</div>
        </div>
    </div>
</section>

<section id="contact-section" class="reveal">
    <h2 data-fa="ارتباط با من" data-en="Contact Me">ارتباط با من</h2>
    <form action="https://formspree.io/f/mnngzdlw" method="POST">
        <input type="text" name="name" required data-fa-placeholder="نام شما" data-en-placeholder="Your Name" placeholder="نام شما">
        <input type="email" name="email" required data-fa-placeholder="ایمیل" data-en-placeholder="Email" placeholder="ایمیل">
        <textarea name="message" rows="5" required data-fa-placeholder="پیام شما" data-en-placeholder="Your Message" placeholder="پیام شما"></textarea>
        <button type="submit" data-fa="ارسال پیام" data-en="Send Message">ارسال پیام</button>
    </form>
</section>

<footer class="reveal">
    <a href="https://instagram.com/arsam.khosh" target="_blank">Instagram: @arsam.khosh</a>
    <p>© 2026 Arsam Khosh - All Rights Reserved.</p>
</footer>

<script>
// ۱. لودینگ
let load = 0;
const fill = document.getElementById('loading-fill');
const screen = document.getElementById('loading-screen');
const loadingInt = setInterval(() => {
    load += 2;
    fill.style.width = load + '%';
    if(load >= 100) {
        clearInterval(loadingInt);
        screen.style.display = 'none';
        checkReveal();
    }
}, 30);

// ۲. دنباله موس
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');
window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    outline.animate({ left: e.clientX + 'px', top: e.clientY + 'px' }, { duration: 500, fill: "forwards" });
});
document.querySelectorAll('a, button, input, textarea, .project-card, .faq-item').forEach(el => {
    el.onmouseenter = () => outline.classList.add('cursor-hover');
    el.onmouseleave = () => outline.classList.remove('cursor-hover');
});

// ۳. تغییر زبان
const btn = document.getElementById('lang-toggle');
let isEn = false;
btn.onclick = () => {
    isEn = !isEn;
    btn.textContent = isEn ? 'FA' : 'EN';
    document.querySelectorAll('[data-fa]').forEach(el => {
        if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = isEn ? el.dataset.enPlaceholder : el.dataset.faPlaceholder;
        } else {
            el.innerHTML = isEn ? el.dataset.en : el.dataset.fa;
        }
    });
};

// ۴. افکت اسکرول
function checkReveal() {
    document.querySelectorAll('section, footer').forEach(s => {
        if(s.getBoundingClientRect().top < window.innerHeight - 100) s.classList.add('reveal');
    });
    document.querySelectorAll('.skill-fill').forEach(b => {
        if(b.getBoundingClientRect().top < window.innerHeight) b.style.width = b.dataset.value;
    });
}
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('visible', window.scrollY > 50);
    checkReveal();
});

// ۵. FAQ
document.querySelectorAll('.faq-item').forEach(i => {
    i.onclick = () => {
        const a = i.querySelector('.answer');
        a.style.display = a.style.display === 'block' ? 'none' : 'block';
    }
});

// ۶. لایک
document.querySelectorAll('.like-btn').forEach(b => {
    b.onclick = (e) => {
        e.stopPropagation();
        b.classList.toggle('liked');
        b.textContent = b.classList.contains('liked') ? '❤ 1' : '❤ 0';
    }
});
</script>
</body>
</html>
