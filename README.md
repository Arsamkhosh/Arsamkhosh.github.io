<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>پروژه‌های من</title>

<meta name="description" content="سایت شخصی آرسام خوش‌اخلاق | برنامه‌نویس، طراح سایت و مدیر سرور ماینکرفت">
<meta name="keywords" content="آرسام خوش اخلاق, طراحی سایت, ماینکرفت, برنامه نویسی, سرور ماینکرفت">
<meta name="author" content="Arsam Khosh">

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
}
section, footer {
  padding:40px 5%;
  opacity:0;
  transform:translateY(50px);
  transition:all 0.8s ease;
}

h1 {
  font-size:2.8em;
  background: linear-gradient(90deg,#00ffff,#ff00cc,#ff9900);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
h2 { color:#00ffff; margin-bottom:20px; }

nav {
  position:fixed;
  top:-70px;
  left:0; right:0;
  background:rgba(0,0,0,0.6);
  backdrop-filter:blur(10px);
  display:flex;
  justify-content:center;
  gap:20px;
  padding:15px;
  z-index:1000;
  transition:0.4s;
}
nav.visible { top:0; }
nav a { color:#00ffff; text-decoration:none; font-weight:bold; }
nav a:hover { color:#ff00cc; }

.projects {
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:30px;
}
.project-card {
  background:rgba(255,255,255,0.08);
  padding:25px;
  width:300px;
  border-radius:15px;
  border-left:5px solid #00ffff;
  transition:0.3s;
}
.project-card:hover {
  transform:translateY(-10px);
  border-left:5px solid #ff00cc;
}
.project-card img {
  width:100%;
  border-radius:15px;
}
.project-title { color:#00ffff; font-weight:bold; }
.project-desc { color:#ccc; font-size:0.9em; }
.project-tech { color:#ff9900; font-size:0.8em; }

.like-btn {
  margin-top:10px;
  padding:5px 10px;
  border-radius:10px;
  border:none;
  cursor:pointer;
  font-weight:bold;
  background:#00ffff;
}
.like-btn.liked {
  background:#ff00cc;
  color:#fff;
}

.about-card {
  max-width:600px;
  margin:auto;
  background:rgba(255,255,255,0.08);
  padding:30px;
  border-radius:20px;
  display:flex;
  direction:rtl;
}
.profile-pic {
  width:100px;
  height:100px;
  border-radius:50%;
  background:#00ffff;
  margin-left:20px;
}

.skills, .blog, .faq {
  max-width:700px;
  margin:auto;
  direction:rtl;
  text-align:right;
}

.skill-bar {
  height:15px;
  background:#222;
  border-radius:10px;
}
.skill-fill {
  height:100%;
  width:0%;
  background:linear-gradient(90deg,#00ffff,#ff00cc,#ff9900);
  transition:1s;
}

.gallery {
  display:flex;
  flex-wrap:wrap;
  gap:20px;
  justify-content:center;
}
.gallery-item {
  max-width:300px;
  overflow:hidden;
  border-radius:15px;
}
.gallery-item img {
  width:100%;
  height:200px;
  object-fit:cover;
  transition:0.5s;
}
.gallery-item:hover img {
  transform:scale(1.1) translateY(-5px);
  filter:brightness(1.1);
}

form {
  max-width:500px;
  margin:auto;
  background:rgba(255,255,255,0.08);
  padding:25px;
  border-radius:15px;
  direction:rtl;
}
input, textarea {
  width:100%;
  padding:10px;
  border-radius:10px;
  margin-bottom:10px;
  background:rgba(255,255,255,0.1);
  color:#fff;
  border:1px solid #00ffff44;
}
button {
  background:linear-gradient(135deg,#00ffff,#ff00cc);
  border:none;
  padding:10px;
  border-radius:12px;
  font-weight:bold;
}

footer {
  margin-top:50px;
  color:#ccc;
}

@media (max-width:600px){
  * {
    box-shadow:none !important;
    backdrop-filter:none !important;
  }
}
</style>
</head>

<body>

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
<p>سلام! من <strong>آرسام خوش‌اخلاق</strong> هستم...</p>
</div>
</section>

<section id="projects-section">
<h2>پروژه‌ها</h2>
<div class="projects">
<div class="project-card">
<img src="minecraft.png">
<div class="project-title">🎮سرور ماینکرفت</div>
<div class="project-desc">سرور اختصاصی...</div>
<div class="project-tech">Spigot/Bukkit</div>
<button class="like-btn">❤ 0</button>
</div>
</div>
</section>

<section id="skills-section" class="skills">
<h2>مهارت‌ها</h2>
<div class="skill"><div class="skill-bar"><div class="skill-fill" data-value="95%"></div></div></div>
</section>

<section id="gallery-section">
<h2>گالری</h2>
<div class="gallery">
<div class="gallery-item"><img src="jade_chaloos.png"></div>
</div>
</section>

<section id="contact-section">
<h2>ارتباط با من</h2>
<form>
<input placeholder="نام">
<input placeholder="ایمیل">
<textarea placeholder="پیام"></textarea>
<button>ارسال</button>
</form>
</section>

<footer>
<p>© 2025 تمامی حقوق محفوظ است</p>
<a href="https://instagram.com/arsam.khosh" target="_blank" rel="noopener noreferrer">اینستاگرام من</a>
</footer>

<script>
document.querySelectorAll('.project-card').forEach((card,i)=>{
  const btn = card.querySelector('.like-btn');
  const key = 'like-'+i;
  let liked = localStorage.getItem(key)==='1';
  btn.textContent = liked?'❤ 1':'❤ 0';
  if(liked) btn.classList.add('liked');
  btn.onclick=()=>{
    liked=!liked;
    localStorage.setItem(key, liked?'1':'0');
    btn.textContent = liked?'❤ 1':'❤ 0';
    btn.classList.toggle('liked');
  };
});

window.addEventListener('scroll',()=>{
  document.querySelector('nav').classList.toggle('visible',scrollY>50);
  document.querySelectorAll('.skill-fill').forEach(b=>{
    if(b.getBoundingClientRect().top<innerHeight) b.style.width=b.dataset.value;
  });
});

document.querySelectorAll('section,footer').forEach(el=>{
  el.style.opacity=1;
  el.style.transform='translateY(0)';
});
</script>

</body>
</html>
