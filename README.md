<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>پروژه‌های من | Arsam Khosh</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700;900&display=swap" rel="stylesheet">
<style>
/* Paye */
html { scroll-behavior: smooth; }
body { margin:0; font-family:'Vazirmatn',sans-serif; background:linear-gradient(135deg,#0a0a0a,#1a1a1a); color:#fff; text-align:center; overflow-x:hidden; cursor: none; }
header, section, footer { padding: 40px 5%; opacity:0; transform:translateY(50px); transition:all 0.8s ease; }
section.reveal, footer.reveal { opacity:1 !important; transform:translateY(0) !important; }
h1 { font-size:2.8em; font-weight:900; background: linear-gradient(90deg,#00ffff,#ff00cc,#ff9900); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:10px; text-shadow:0 0 10px rgba(0,255,255,0.5);}
h2 { color:#00ffff; margin-bottom:20px; font-size:1.8em; font-weight:900; }

/* Afakt Moos Neon */
.cursor-dot { width: 8px; height: 8px; background-color: #00ffff; box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff; position: fixed; top: 0; left: 0; transform: translate(-50%, -50%); border-radius: 50%; z-index: 10000; pointer-events: none; }
.cursor-outline { width: 40px; height: 40px; border: 2px solid #ff00cc; box-shadow: 0 0 15px #ff00cc; position: fixed; top: 0; left: 0; transform: translate(-50%, -50%); border-radius: 50%; z-index: 9999; pointer-events: none; transition: width 0.2s, height 0.2s, background-color 0.2s; }
.cursor-hover { width: 60px; height: 60px; background-color: rgba(255, 0, 204, 0.1); border-color: #00ffff; }

/* Navar Bala */
nav { position: fixed; top: -70px; left:0; right:0; background: rgba(0,0,0,0.6); backdrop-filter: blur(10px); display:flex; justify-content:center; gap:20px; padding:15px; z-index:1000; border-bottom:1px solid #00ffff44; transition:top 0.4s ease; }
nav.visible { top:0; }
nav a { color:#00ffff; text-decoration:none; font-weight:bold; transition:0.3s; }
nav a:hover { color:#ff00cc; text-shadow:0 0 10px #ff00cc; }
#lang-toggle { margin-left:20px; padding:5px 10px; border-radius:8px; border:none; cursor:none; background:#ff00cc; color:#fff; font-weight:bold; transition: 0.3s;}
#lang-toggle:hover { transform: scale(1.1); box-shadow: 0 0 15px #ff00cc;}

/* Porojeh-ha */
.projects { display:flex; justify-content:center; flex-wrap:wrap; gap:30px; margin-top:20px; }
.project-card { position:relative; background:rgba(255,255,255,0.08); padding:25px; width:300px; min-height:250px; border-radius:15px; border-left:5px solid #00ffff; box-shadow:0 4px 20px rgba(0,255,255,0.1); text-align:center; transition: 0.3s; cursor:none; }
.project-card img { width:100%; border-radius:15px; margin-bottom:15px; transition: 0.3s; }
.project-card:hover { transform:translateY(-10px) rotate(-1deg); box-shadow:0 0 30px #ff00cc,0 0 10px #00ffff; border-left:5px solid #ff00cc; }
.project-card:hover img { transform: scale(1.05); }
.project-title { font-size:1.4em; font-weight:bold; margin-bottom:10px; color:#00ffff; }
.project-desc { color:#ccc; margin-bottom:10px; font-size:0.9em; }
.project-tech { font-size:0.8em; color:#ff9900; font-weight:bold; }
.like-btn { display:inline-block; padding:5px 10px; margin-top:10px; border-radius:10px; border:none; cursor:none; font-weight:bold; background:#00ffff; color:#000; transition:0.3s; }
.like-btn.liked { background:#ff00cc; color:#fff; }

/* Darbare Man */
.about-card { max-width:600px; margin:20px auto; background: rgba(255,255,255,0.08); padding:30px; border-radius:20px; box-shadow:0 0 20px rgba(255,255,255,0.1); display:flex; align-items:center; direction:rtl; text-align:right; transition: all 0.3s ease; }
.profile-pic { width:100px;height:100px; border-radius:50%; background:#00ffff; margin-left:20px; border:4px solid #ff00cc; overflow:hidden; box-shadow:0 0 15px #00ffff; flex-shrink:0; animation: float 3s ease-in-out infinite alternate; }
@keyframes float {0%{transform:translateY(0);}100%{transform:translateY(-10px);} }
.about-text p { font-size:1.1em; line-height:1.8; }

/* Maharat-ha */
.skills { max-width:600px; margin:30px auto; text-align:right; direction:rtl; }
.skill { margin-bottom:15px; }
.skill-bar { width:100%; height:15px; background:#222; border-radius:10px; overflow:hidden; }
.skill-fill { width:0%; height:100%; background:linear-gradient(90deg,#00ffff,#ff00cc,#ff9900); border-radius:10px; transition: width 1s; }

/* Blog */
.blog { max-width:700px; margin:50px auto; text-align:right; direction:rtl; }
.blog-item { background: rgba(255,255,255,0.08); padding:15px; border-radius:10px; margin-bottom:10px; text-align:right; border-right: 3px solid #00ffff;}

/* Form Tamas */
form { max-width:500px; margin:40px auto; background: rgba(255,255,255,0.08); padding:25px; border-radius:15px; box-shadow:0 0 25px rgba(0,255,255,0.2); direction:rtl; text-align:right;}
input,textarea{ width:100%; padding:12px; border-radius:10px; border:1px solid rgba(0,255,255,0.3); background-color: rgba(255,255,255,0.1); color:#fff; margin-bottom:15px; cursor:none;}
input:focus, textarea:focus { outline: none; border-color: #ff00cc; }
button[type="submit"] { background: linear-gradient(135deg,#00ffff,#ff00cc); color:#000; font-weight:bold; padding:10px 20px; border:none; border-radius:12px; cursor:none; transition:0.3s; width:100%;}
button[type="submit"]:hover { transform: scale(1.05); box-shadow: 0 0 15px #ff00cc; }

/* FAQ */
.faq { max-width:800px; margin:50px auto; text-align:right; direction:rtl; }
.faq-item { background: rgba(255,255,255,0.08); padding:15px; border-radius:10px; margin-bottom:10px; cursor:none; border:2px solid #00ffff; transition:0.3s; }
.faq-item:hover { background: rgba(255,255,255,0.15); border-color: #ff00cc; transform: translateX(-5px); }
.faq-item .answer { display:none; margin-top:10px; color:#ccc; font-size:0.9em; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.1);}

/* Gallery Ba Hover Effect */
.gallery { display:flex; flex-wrap:wrap; gap:20px; justify-content:center; }
.gallery-item { position:relative; overflow:hidden; border-radius:15px; flex:1 1 250px; max-width:300px; transition: 0.3s; cursor:none; border: 2px solid transparent;}
.gallery-item:hover { border-color: #00ffff; box-shadow: 0 0 15px rgba(0,255,255,0.4); }
.gallery-item img { width:100%; height:200px; object-fit:cover; transition: 0.5s; display: block; }
.gallery-item:hover img { transform: scale(1.1); filter: brightness(0.7); }

/* Matn Rooye Gallery */
.gallery-overlay { position: absolute; bottom: -100%; left: 0; width: 100%; background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(5px); color: #00ffff; padding: 15px 0; text-align: center; transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); font-weight: bold; font-size: 0.9em; border-top: 2px solid #ff00cc; }
.gallery-item:hover .gallery-overlay { bottom: 0; }

/* Loading */
#loading-screen { position:fixed; top:0; left:0; right:0; bottom:0; background:#0f0f0f; display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:2000; color:#00ffff; }
#loading-bar { width:300px; height:10px; background:#222; border-radius:10px; overflow:hidden; }
#loading-fill { width:0%; height:100%; background:linear-gradient(90deg,#00ffff,#ff00cc); }

/* Footer Jadid Instagram */
footer { margin-top: 50px; padding-bottom: 40px; border-top: 1px solid rgba(0, 255, 255, 0.1); background: rgba(0, 0, 0, 0.3); display: flex; flex-direction: column; align-items: center; }
.social-links { margin-bottom: 20px; text-align: center;}
.instagram-link { display: inline-flex; align-items: center; gap: 10px; padding: 12px 25px; background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); border-radius: 50px; color: white !important; text-decoration: none; font-weight: bold; transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); box-shadow: 0 5px 15px rgba(204, 35, 102, 0.4); cursor: none;}
.instagram-link:hover { transform: scale(1.1) translateY(-5px); box-shadow: 0 10px 25px rgba(204, 35, 102, 0.6); }
.ig-icon { width: 24px; height: 24px; }
.copyright { font-size: 0.8em; color: #666; margin-top: 10px; }

@media(max-width:650px){
    body { cursor: auto; }
    .cursor-dot, .cursor-outline { display:none; }
    .about-card { flex-direction:column; text-align:center; }
}
</style>
</head>
<body>

<div class="cursor-dot"></div>
<div class="cursor-outline"></div>

<div id="loading-screen">
    <div id="loading-text" style="margin-bottom:20px; font-weight:bold;">Loading Arsam_khosh web...</div>
    <div id="loading-bar"><div id="loading-fill"></div></div>
</div>

<nav>
    <a href="#about-me" data-fa="درباره من" data-en="About Me">درباره من</a>
    <a href="#projects-section" data-fa="پروژه‌ها" data-en="Projects">پروژه‌ها</a>
    <a href="#skills-section" data-fa="مهارت‌ها" data-en="Skills">مهارت‌ها</a>
    <a href="#blog-section" data-fa="اخبار" data-en="Blog">اخبار</a>
    <a href="#gallery-section" data-fa="گالری" data-en="Gallery">گالری</a>
    <a href="#contact-section" data-fa="ارتباط" data-en="Contact">ارتباط</a>
    <button id="lang-toggle">EN</button>
</nav>

<section id="about-me">
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

<section id="projects-section">
    <h2 data-fa="پروژه‌ها" data-en="Projects">پروژه‌ها</h2>
    <div class="projects">
        <div class="project-card">
            <img src="minecraft.png" alt="Minecraft">
            <div class="project-title" data-fa="🎮سرور ماینکرفت " data-en="🎮Minecraft Server">🎮سرور ماینکرفت </div>
            <div class="project-desc" data-fa="سرور اختصاصی برای ماینکرفت با پلاگین‌های مخصوص دارم و برای همکاری به اینستاگرام یا بخش ارتباط با ما پیام بده"
               data-en="I have a dedicated Minecraft server with custom plugins. Contact me via Instagram or the Contact section to collaborate.">
               سرور اختصاصی برای ماینکرفت با پلاگین‌های مخصوص دارم و برای همکاری به اینستاگرام یا بخش ارتباط با ما پیام بده
            </div>
            <div class="project-tech">Spigot/Bukkit / Minecraft</div>
            <button class="like-btn">❤ 0</button>
        </div>
        <div class="project-card">
            <img src="site.png" alt="Site">
            <div class="project-title" data-fa="🌐سایت شخصی " data-en="🌐Personal Website">🌐سایت شخصی </div>
            <div class="project-desc" data-fa="من به طراحی سایت علاقه دارم و این سایت رو خودم و با کمک دوستم نوشتم"
               data-en="I enjoy web design and built this website myself with a friend.">
               من به طراحی سایت علاقه دارم و این سایت رو خودم و با کمک دوستم نوشتم
            </div>
            <div class="project-tech">HTML / CSS / JavaScript</div>
            <button class="like-btn">❤ 0</button>
        </div>
        <div class="project-card">
            <img src="edite.png" alt="Edit">
            <div class="project-title" data-fa="🎬ادیت ویدیو " data-en="🎬Video Editing">🎬ادیت ویدیو </div>
            <div class="project-desc" data-fa="به ادیت ویدیو علاقه دارم و کارهای خود را در یوتیوب منتشر می‌کنم"
               data-en="I love video editing and share my work on YouTube.">
               به ادیت ویدیو علاقه دارم و کارهای خود را در یوتیوب منتشر می‌کنم
            </div>
            <div class="project-tech">Capcut / Filmora / Shotcut</div>
            <button class="like-btn">❤ 0</button>
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
            <img src="jade_chaloos.png" alt="چالوس">
            <div class="gallery-overlay" data-fa="استان مازندران / جاده زیبای چالوس" data-en="Mazandaran Province / Chaloos Road">استان مازندران / جاده زیبای چالوس</div>
        </div>
        <div class="gallery-item">
            <img src="damavand_kohe.png" alt="دماوند">
            <div class="gallery-overlay" data-fa="استان مازندران / قله دماوند" data-en="Mazandaran Province / Mount Damavand">استان مازندران / قله دماوند</div>
        </div>
        <div class="gallery-item">
            <img src="azadi_tehran.png" alt="آزادی">
            <div class="gallery-overlay" data-fa="استان تهران / برج آزادی" data-en="Tehran Province / Azadi Tower">استان تهران / برج آزادی</div>
        </div>
        <div class="gallery-item">
            <img src="shiraz.png" alt="شیراز">
            <div class="gallery-overlay" data-fa="استان فارس / حافظیه شیراز" data-en="Fars Province / Hafezieh Shiraz">استان فارس / حافظیه شیراز</div>
        </div>
        <div class="gallery-item">
            <img src="esfahan.png" alt="اصفهان">
            <div class="gallery-overlay" data-fa="استان اصفهان / میدان نقش جهان" data-en="Isfahan Province / Naqsh-e Jahan Square">استان اصفهان / میدان نقش جهان</div>
        </div>
    </div>
</section>

<section class="faq">
    <h2 data-fa="پرسش و پاسخ" data-en="FAQ">پرسش و پاسخ پر تکرار</h2>
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
    <form action="https://formspree.io/f/mnngzdlw" method="POST">
        <input type="text" name="name" required placeholder="نام شما" data-fa-placeholder="نام شما" data-en-placeholder="Your Name">
        <input type="email" name="email" required placeholder="ایمیل" data-fa-placeholder="ایمیل" data-en-placeholder="Email">
        <textarea name="message" rows="5" required placeholder="پیام شما" data-fa-placeholder="پیام شما" data-en-placeholder="Message"></textarea>
        <button type="submit" data-fa="ارسال پیام" data-en="Send Message">ارسال پیام</button>
    </form>
</section>

<footer>
    <div class="social-links">
        <p data-fa="من را در فضای مجازی دنبال کنید:" data-en="Follow me on social media:" style="margin-bottom: 15px;">من را در فضای مجازی دنبال کنید:</p>
        <a href="https://instagram.com/arsam.khosh" target="_blank" class="instagram-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ig-icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            <span>Instagram: @arsam.khosh</span>
        </a>
    </div>
    <p class="copyright" data-fa="© 2026 آرسام خوش — تمامی حقوق محفوظ است" data-en="© 2026 Arsam Khosh — All Rights Reserved">© 2026 آرسام خوش — تمامی حقوق محفوظ است</p>
</footer>

<script>
// Loading
let load = 0;
const fill = document.getElementById('loading-fill');
const screen = document.getElementById('loading-screen');
const interval = setInterval(() => {
    load += 2;
    fill.style.width = load + '%';
    if(load >= 100) {
        clearInterval(interval);
        screen.style.display = 'none';
        revealSections();
    }
}, 30);

// Moos
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');
window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    outline.animate({ left: e.clientX + 'px', top: e.clientY + 'px' }, { duration: 500, fill: "forwards" });
});

// Interaction Moos
document.querySelectorAll('a, button, .project-card, .faq-item, .gallery-item, input, textarea').forEach(el => {
    el.onmouseenter = () => outline.classList.add('cursor-hover');
    el.onmouseleave = () => outline.classList.remove('cursor-hover');
});

// Scroll Va Nemayesh
function revealSections() {
    document.querySelectorAll('header, section, footer').forEach(s => {
        if(s.getBoundingClientRect().top < window.innerHeight - 100) s.classList.add('reveal');
    });
    document.querySelectorAll('.skill-fill').forEach(b => {
        if(b.getBoundingClientRect().top < window.innerHeight) b.style.width = b.dataset.value;
    });
}
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('visible', window.scrollY > 50);
    revealSections();
});

// Zaban
const langBtn = document.getElementById('lang-toggle');
let isEn = false;
langBtn.onclick = () => {
    isEn = !isEn;
    langBtn.textContent = isEn ? 'FA' : 'EN';
    document.querySelectorAll('[data-fa]').forEach(el => {
        if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = isEn ? el.dataset.enPlaceholder : el.dataset.faPlaceholder;
        } else {
            el.innerHTML = isEn ? el.dataset.en : el.dataset.fa;
        }
    });
};

// FAQ
document.querySelectorAll('.faq-item').forEach(i => {
    i.onclick = () => {
        const a = i.querySelector('.answer');
        a.style.display = a.style.display === 'block' ? 'none' : 'block';
    }
});

// Like
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
