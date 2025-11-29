<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>پروژه‌های من</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
<style>
html { scroll-behavior: smooth; }
body {
  margin:0;
  font-family:'Vazirmatn',sans-serif;
  background:linear-gradient(135deg,#0f0f0f,#1a1a1a);
  color:#fff;
  text-align:center;
  overflow-x:hidden;
  transition: background 0.5s, color 0.5s;
}
header, section, footer { padding: 40px 5%; opacity:0; transform:translateY(50px); transition:all 0.8s ease; }
h1 { font-size:2.8em; background: linear-gradient(90deg,#00ffff,#ff00cc,#ff9900); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:10px; text-shadow:0 0 10px rgba(0,255,255,0.5);}
h2 { color:#00ffff; margin-bottom:20px; font-size:1.8em; }

nav {
  position: fixed;
  top: -70px;
  left: 0; right: 0;
  background: rgba(0,0,0,0.6);
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
  color: #00ffff;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}
nav a:hover {
  color: #ff00cc;
  text-shadow: 0 0 10px #ff00cc;
}

/* پروژه‌ها */
.projects { display:flex; justify-content:center; flex-wrap:wrap; gap:30px; margin-top:20px; }
.project-card {
  position:relative;
  background:rgba(255,255,255,0.08);
  padding:25px;
  width:300px;
  min-height:250px;
  border-radius:15px;
  border-left:5px solid #00ffff;
  box-shadow:0 4px 20px rgba(0,255,255,0.1);
  text-align:center;
  cursor:pointer;
  transition: transform 0.3s, box-shadow 0.3s, background 0.5s, border-left 0.3s;
}
.project-card img { width:100%; border-radius:15px; margin-bottom:15px; transition: transform 0.3s; }
.project-card:hover {
  transform:translateY(-10px) rotate(-1deg);
  box-shadow:0 0 30px #ff00cc,0 0 10px #00ffff;
  border-left:5px solid #ff00cc;
}
.project-card:hover img { transform: scale(1.05); }
.project-title { font-size:1.4em; font-weight:bold; margin-bottom:10px; color:#00ffff; }
.project-desc { color:#ccc; margin-bottom:10px; font-size:0.9em; }
.project-tech { font-size:0.8em; color:#ff9900; font-weight:bold; }
.like-btn {
  display:inline-block;
  padding:5px 10px;
  margin-top:10px;
  border-radius:10px;
  border:none;
  cursor:pointer;
  font-weight:bold;
  background:#00ffff;
  color:#000;
  transition:0.3s;
}
.like-btn.liked { background:#ff00cc; color:#fff; }
.project-card .tooltip {
  position:absolute;
  bottom:100%;
  left:50%;
  transform:translateX(-50%) translateY(0);
  background:#111;
  color:#fff;
  padding:6px 10px;
  border-radius:6px;
  font-size:0.8em;
  display:none;
  opacity:0;
  white-space:nowrap;
  pointer-events:none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.project-card:hover .tooltip {
  display:block;
  opacity:1;
  transform:translateX(-50%) translateY(-5px);
}

/* تایمر معکوس */
#countdown-section { padding:50px 5%; text-align:center; background: rgba(0,0,0,0.2); border-radius:20px; margin:50px auto; max-width:600px; }
#countdown-section h2 { background: linear-gradient(90deg,#00ffff,#ff00cc,#ff9900); -webkit-background-clip:text; -webkit-text-fill-color:transparent; font-size:2em; margin-bottom:20px; }
#countdown-timer { font-size:2em; color:#00ffff; text-shadow: 0 0 10px #00ffff,0 0 20px #ff00cc,0 0 30px #ff9900; }

/* سایر بخش‌ها و استایل‌ها (مهارت‌ها، بلاگ، گالری، فرم و فوتر) */
.about-card { max-width:600px; margin:20px auto; background: rgba(255,255,255,0.08); padding:30px; border-radius:20px; box-shadow:0 0 20px rgba(255,255,255,0.1); display:flex; align-items:center; direction:rtl; text-align:right; transition: all 0.3s ease; }
.about-card:hover { box-shadow:0 0 20px #00ffff,0 0 40px #ff00cc,0 0 60px #ff9900; transform: translateY(-5px); border-left:5px solid #00ffff; }
.profile-pic { width:100px;height:100px; border-radius:50%; background:#00ffff; margin-left:20px; border:4px solid #ff00cc; overflow:hidden; box-shadow:0 0 15px #00ffff; flex-shrink:0; animation: float 3s ease-in-out infinite alternate;}
@keyframes float {0%{transform:translateY(0);}100%{transform:translateY(-10px);} }
.about-text p { font-size:1.1em; line-height:1.8; }
.skills { max-width:600px; margin:30px auto; text-align:right; direction:rtl; }
.skill { margin-bottom:15px; }
.skill-name { font-weight:bold; margin-bottom:5px; }
.skill-bar { width:100%; height:15px; background:#222; border-radius:10px; overflow:hidden; }
.skill-fill { width:0%; height:100%; background:linear-gradient(90deg,#00ffff,#ff00cc,#ff9900); border-radius:10px; transition: width 1s; }
.blog { max-width:700px; margin:50px auto; text-align:right; direction:rtl; }
.blog-item { background: rgba(255,255,255,0.08); padding:15px; border-radius:10px; margin-bottom:10px; text-align:right; }
form { max-width:500px; margin:40px auto; background: rgba(255,255,255,0.08); padding:25px; border-radius:15px; box-shadow:0 0 25px rgba(0,255,255,0.2); direction:rtl; text-align:right;}
input,textarea{ width:100%; padding:12px; border-radius:10px; border:1px solid rgba(0,255,255,0.3); background-color: rgba(255,255,255,0.1); color:#fff; margin-bottom:15px;}
::placeholder{ color:#aaa; opacity:1; }
button[type="submit"] { background: linear-gradient(135deg,#00ffff,#ff00cc); color:#000; font-weight:bold; padding:10px 20px; border:none; border-radius:12px; cursor:pointer; transition:0.3s;}
button[type="submit"]:hover{ transform:scale(1.05); }
footer{ margin-top:50px; color:#ccc; display:flex; justify-content:center; flex-direction:column; align-items:center; gap:10px; }
footer a{ color:#00ffff; text-decoration:none;}
footer a:hover{ text-decoration:underline; }
@media(max-width:650px){
  .projects { flex-direction:column; align-items:center; }
  .project-card { width:90%; }
  .about-card { flex-direction:column; text-align:center; }
  .profile-pic { margin-left:0;margin-bottom:20px; }
  .about-text { text-align:center; }
}

</style>
</head>
<body>

<!-- نوار بالا -->
<nav>
  <a href="#about-me">درباره من</a>
  <a href="#projects-section">پروژه‌ها</a>
  <a href="#skills-section">مهارت‌ها</a>
  <a href="#blog-section">اخبار</a>
  <a href="#gallery-section">گالری</a>
  <a href="#contact-section">ارتباط</a>
</nav>

<section id="about-me">
  <h2>درباره من</h2>
  <div class="about-card">
    <div class="profile-pic"></div>
    <div class="about-text">
      <p id="about-text-content">
        سلام! من <strong>آرسام خوش‌اخلاق</strong> هستم. توسعه‌دهنده وب و علاقه‌مند به تکنولوژی‌ها. عاشق خلاقیت در طراحی و وب و برنامه نویسی هستم و همچنین به ماینکرفت و سابر بازی ها علاقه دارم 🌐✨
      </p>
    </div>
  </div>
</section>

<section id="projects-section">
  <h2>پروژه‌ها</h2>
  <div class="projects">
    <div class="project-card">
      <img src="minecraft.png" alt="پروژه 1">
      <div class="project-title">🎮سرور ماینکرفت </div>
      <div class="project-desc">سرور اختصاصی برای ماینکرفت با پلاگین‌های مخصوص دارم و برای همکاری به اینستاگرام یا بخش ارتباط با ما پیام بده</div>
      <div class="project-tech">Spigot/Bukkit / Minecraft</div>
      <button class="like-btn">❤ 0</button>
      <div class="tooltip">این پروژه مربوط به سرور ماینکرفت است</div>
    </div>
    <div class="project-card">
      <img src="site.png" alt="پروژه 2">
      <div class="project-title">🌐سایت شخصی </div>
      <div class="project-desc">من به طراحی سایت علاقه دارم و این سایت رو خودم و با کمک دوستم نوشتم</div>
      <div class="project-tech">HTML / CSS / JavaScript</div>
      <button class="like-btn">❤ 0</button>
      <div class="tooltip">این پروژه سایت شخصی من است</div>
    </div>
  </div>
</section>

<section id="countdown-section">
  <h2>زمان باقی‌مانده تا شروع سرور</h2>
  <div id="countdown-timer"></div>
</section>

<footer>
  <p>© 2025 تمامی حقوق محفوظ است</p> 
  <p> Arsam_khosh </p>
  <a href="https://instagram.com/arsam.khosh" target="_blank">اینستاگرام من</a>
</footer>

<script>
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

// تایمر معکوس
const targetDate = new Date(2025, 11, 31, 18, 0, 0); 
const countdownTimerEl = document.getElementById('countdown-timer');
function updateCountdown(){
  const now = new Date();
  const diff = targetDate - now;

  if(diff <= 0){
    countdownTimerEl.textContent = "⏰ سرور فعال شد!";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownTimerEl.textContent = `${days} روز : ${hours} ساعت : ${minutes} دقیقه : ${seconds} ثانیه`;
}
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
</script>

</body>
</html>
