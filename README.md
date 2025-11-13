<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>پروژه‌های من</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
<style>
/* پایه */
body {
  margin:0;
  font-family:'Vazirmatn',sans-serif;
  background:linear-gradient(135deg,#0f0f0f,#1a1a1a);
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
  top: -70px;
  left: 0; right: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 15px;
  z-index: 1000;
  border-bottom: 1px solid #00ffff44;
  transition: top 0.4s ease, box-shadow 0.4s ease, border-bottom 0.4s ease;
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
.project-card img { width:100%; border-radius:15px; margin-bottom:15px; }
.project-card:hover {
  transform:translateY(-5px);
  box-shadow:0 0 30px #ff00cc,0 0 10px #00ffff;
  border-left:5px solid #ff00cc;
}
.project-title { font-size:1.4em; font-weight:bold; margin-bottom:10px; color:#00ffff; }
.project-desc { color:#ccc; margin-bottom:10px; font-size:0.9em; }
.project-tech { font-size:0.8em; color:#ff9900; font-weight:bold; }

/* درباره من */
.about-card { 
  max-width:600px; 
  margin:20px auto; 
  background: rgba(255,255,255,0.08); 
  padding:30px; 
  border-radius:20px; 
  box-shadow:0 0 20px rgba(255,255,255,0.1); 
  display:flex; 
  align-items:center; 
  direction:rtl; 
  text-align:right;
  transition: all 0.3s ease;
}
.about-card:hover {
  box-shadow:0 0 20px #00ffff, 0 0 40px #ff00cc, 0 0 60px #ff9900;
  transform: translateY(-5px);
  border-left:5px solid #00ffff;
}
.profile-pic { width:100px;height:100px; border-radius:50%; background:#00ffff; margin-left:20px; border:4px solid #ff00cc; overflow:hidden; box-shadow:0 0 15px #00ffff; flex-shrink:0;}
.about-text p { font-size:1.1em; line-height:1.8; }

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

/* ستاره‌ها */
.star { position: fixed; width:2px; height:2px; background:#fff; border-radius:50%; pointer-events:none; z-index:0; animation:twinkle 3s infinite;}
@keyframes twinkle {0%,100%{opacity:0.2;}50%{opacity:1;}}

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

/* فوتر */
footer{ 
  margin-top:50px; 
  color:#ccc; 
  display:flex; 
  justify-content:center; 
  flex-direction:column; 
  align-items:center; 
  gap:10px; 
}
footer a{ color:#00ffff; text-decoration:none;}
footer a:hover{ text-decoration:underline; }

/* ریسپانسیو */
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

<!-- لودینگ -->
<div id="loading-screen">
  <div id="loading-text"></div>
  <div id="loading-bar"><div id="loading-fill"></div></div>
</div>

<!-- نوار بالا -->
<nav>
  <a href="#about-me">درباره من</a>
  <a href="#projects-section">پروژه‌ها</a>
  <a href="#contact-section">ارتباط</a>
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
      <img src="images/minecraft.png" alt="minecraft.png">
      <div class="project-title">سرور ماینکرفت 🎮</div>
      <div class="project-desc">سرور اختصاصی برای ماینکرفت با پلاگین‌های مخصوص دارم و برای همکاری به اینستاگرام یا بخش ارتباط با ما پیام بده</div>
      <div class="project-tech">Java / Spigot / Minecraft</div>
    </div>
    <div class="project-card">
      <img src="images/site.png" alt="site.png">
      <div class="project-title">سایت شخصی 🌐</div>
      <div class="project-desc">من به طراحی سایت علاقه دارم و این سایت رو خودم و با کمک دوستم نوشتم</div>
      <div class="project-tech">HTML / CSS / JavaScript</div>
    </div>
    <div class="project-card">
      <img src="images/edite.png" alt="edite.png">
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

<footer>
  © 2025 تمامی حقوق محفوظ است
  <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank">اینستاگرام من</a>
  <div id="visitor-count"></div>
</footer>

<script>
// لودینگ
const loadingText = document.getElementById('loading-text');
const loadingFill = document.getElementById('loading-fill');
const loadingScreen = document.getElementById('loading-screen');
const message = "Loading Arsam_khosh web";
let i=0;
function typeText(){ if(i<message.length){ loadingText.textContent += message[i]; i++; setTimeout(typeText,100); } }
typeText();
let progress=0;
const interval=setInterval(()=>{
  progress+=3;
  loadingFill.style.width=progress+"%";
  if(progress>=100){
    clearInterval(interval);
    setTimeout(()=>{
      loadingScreen.style.opacity='0';
      loadingScreen.style.transition='1s';
      setTimeout(()=>loadingScreen.remove(),1000);
      document.querySelectorAll('header, section, footer').forEach((el,idx)=>{
        setTimeout(()=>{ el.style.opacity='1'; el.style.transform='translateY(0)'; },idx*150);
      });
    },800);
  }
},100);

// ستاره‌ها
for(let i=0;i<60;i++){
  const s=document.createElement('div');
  s.classList.add('star');
  s.style.top=Math.random()*window.innerHeight+'px';
  s.style.left=Math.random()*window.innerWidth+'px';
  s.style.width=Math.random()*2+1+'px';
  s.style.height=s.style.width;
  s.style.animationDuration=2+Math.random()*3+'s';
  document.body.appendChild(s);
}

// FAQ toggle
document.querySelectorAll('.faq-item').forEach(item=>{
  item.addEventListener('click',()=>{
    const ans = item.querySelector('.answer');
    ans.style.display = ans.style.display==='block'?'none':'block';
  });
});

// nav show/hide on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 50){ nav.classList.add('visible'); } 
  else { nav.classList.remove('visible'); }
});

// تایپ درباره من
const aboutText = document.getElementById('about-text-content');
const fullText = aboutText.textContent;
aboutText.textContent = '';
let typed = false;
function typeAboutMe() {
  const rect = aboutText.getBoundingClientRect();
  if(!typed && rect.top < window.innerHeight - 100) {
    typed = true;
    let i = 0;
    const typingInterval = setInterval(()=>{
      aboutText.textContent += fullText[i];
      i++;
      if(i >= fullText.length) clearInterval(typingInterval);
    }, 50);
  }
}
window.addEventListener('scroll', typeAboutMe);
window.addEventListener('load', typeAboutMe);

// صدای کلیک پروژه‌ها
const clickSound = new Audio('click.mp3');
document.querySelectorAll('.project-card').forEach(c=>{
  c.addEventListener('click', ()=>{
    clickSound.currentTime = 0;
    clickSound.play();
    for(let j=0;j<10;j++){
      const p=document.createElement('div');
      p.style.position='absolute'; p.style.width='5px'; p.style.height='5px';
      p.style.background='#00ffff';
      const r=c.getBoundingClientRect();
      p.style.top=r.top+r.height/2+window.scrollY+'px';
      p.style.left=r.left+r.width/2+window.scrollX+'px';
      p.style.transition='0.8s ease';
      document.body.appendChild(p);
      const ang=Math.random()*2*Math.PI, dist=50+Math.random()*50;
      setTimeout(()=>{ 
        p.style.top=parseFloat(p.style.top)+Math.sin(ang)*dist+'px'; 
        p.style.left=parseFloat(p.style.left)+Math.cos(ang)*dist+'px'; 
        p.style.opacity='0'; 
      },10);
      setTimeout(()=>p.remove(),800);
    }
  });
});

// صدای ارسال فرم
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const sendSound = new Audio('send.mp3');
contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  sendSound.play();
  const formData = new FormData(contactForm);
  fetch(contactForm.action,{
    method: contactForm.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  }).then(response=>{
    if(response.ok){
      contactForm.reset();
      formMessage.textContent='✅ پیام با موفقیت ارسال شد!';
      formMessage.style.color='#00ffff';
    } else {
      formMessage.textContent='❌ خطا در ارسال پیام.';
      formMessage.style.color='#ff00cc';
    }
  }).catch(err=>{
    formMessage.textContent='❌ مشکلی رخ داد.';
    formMessage.style.color='#ff00cc';
  });
});

// شمارنده بازدید
fetch('https://api.countapi.xyz/hit/arsam-site/visits')
.then(res=>res.json())
.then(data=>{
  document.getElementById('visitor-count').textContent = `تعداد بازدید: ${data.value}`;
});
</script>

</body>
</html>
