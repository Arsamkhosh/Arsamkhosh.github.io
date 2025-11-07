<html lang="fa">
<head>
<meta charset="UTF-8">
<title>پروژه‌های من</title>
<link href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css" rel="stylesheet" />
<style>
  body {
    margin: 0;
    font-family: 'Vazir', sans-serif;
    /* تم دارک پیش‌فرض */
    background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
    color: #fff;
    text-align: center;
    transition: all 0.5s;
    overflow-x: hidden;
  }

  header, section, footer { padding: 40px 5%; transition: all 0.5s; } /* Padding بهتر */

  h1 {
    font-size: 2.8em; /* بزرگتر */
    background: linear-gradient(90deg, #00ffff, #ff00cc, #ff9900);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
    text-shadow: 0 0 5px rgba(0,255,255,0.5); /* کمی سایه برای نئون */
  }
  h2 { color: #00ffff; margin-bottom: 20px; font-size: 1.8em; }

  /* --- استایل جدید کارت‌های پروژه --- */
  .projects {
    display: flex; justify-content: center; flex-wrap: wrap;
    gap: 30px; margin-top: 20px;
  }

  .project-card {
    position: relative;
    background: rgba(255,255,255,0.08); /* کمی روشن‌تر */
    padding: 25px;
    width: 300px; /* پهن‌تر */
    min-height: 220px; /* حداقل ارتفاع */
    border-radius: 15px;
    border-left: 5px solid #00ffff; /* خط نئون در کنار */
    box-shadow: 0 4px 20px rgba(0,255,255,0.1);
    text-align: right;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s, background 0.5s, border-left 0.3s;
  }
  .project-card:hover {
    transform: translateY(-5px); /* حرکت کمتر */
    box-shadow: 0 0 30px #ff00cc, 0 0 10px #00ffff; /* دو سایه رنگی */
    border-left: 5px solid #ff00cc; /* تغییر رنگ خط در هاور */
  }

  .project-title { font-size: 1.4em; font-weight: bold; margin-bottom: 10px; color: #00ffff; }
  .project-desc { color: #ccc; margin-bottom: 15px; font-size: 0.9em; }
  .project-tech { font-size: 0.8em; color: #ff9900; font-weight: bold; }
  .project-link {
    display: inline-block; padding: 8px 15px; border-radius: 8px;
    background: #ff00cc; color: #000; font-weight: bold; text-decoration: none;
    margin-top: 15px; transition: 0.3s;
  }
  .project-link:hover { background: #00ffff; }


  /* --- بهبود بخش درباره من --- */
  .about-card {
    max-width: 600px;
    margin: 20px auto;
    background: rgba(255, 255, 255, 0.08);
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    direction: rtl;
    text-align: right;
    transition: background 0.5s, box-shadow 0.5s;
  }
  .profile-pic {
    width: 100px; height: 100px;
    border-radius: 50%;
    background: #00ffff; /* رنگ نئون برای پس زمینه عکس پروفایل */
    margin-left: 20px;
    border: 4px solid #ff00cc;
    overflow: hidden;
    box-shadow: 0 0 15px #00ffff;
    flex-shrink: 0; /* برای ریسپانسیو بودن */
    transition: border 0.5s, background 0.5s, box-shadow 0.5s;
  }
  .about-text p { font-size: 1.1em; line-height: 1.8; }


  /* --- بهبود فرم تماس --- */
  form {
    max-width: 500px; margin: 40px auto;
    background: rgba(255, 255, 255, 0.08); /* کمی روشن‌تر */
    padding: 25px; border-radius: 15px;
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.2);
    direction: rtl; text-align: right;
    transition: background 0.5s, box-shadow 0.5s;
  }

  input, textarea {
    width: 100%; padding: 12px; border-radius: 10px; border: 1px solid rgba(0,255,255,0.3);
    background-color: rgba(255,255,255,0.1);
    color: #fff; margin-bottom: 15px;
    transition: background-color 0.5s, color 0.5s, border 0.5s;
  }
  ::placeholder { color: #aaa; opacity: 1; }
  
  /* --- تم روز طوسی (مورد درخواست شما) --- */
  .light-theme-body {
    background: linear-gradient(135deg, #d3d3d3, #f0f0f0) !important; /* گرادیانت طوسی روشن */
    color: #333 !important; /* متن خاکستری تیره */
  }
  .light-theme-project-card, .light-theme-form, .light-theme-about {
    background: #c0c0c0 !important; /* باکس‌های طوسی میانه */
    box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
    border-left: 5px solid #333 !important; /* خط سیاه/تیره در کنار */
  }
  .light-theme-about .profile-pic { border: 4px solid #555 !important; background: #999 !important; box-shadow: none !important; }
  .light-theme-input {
    background-color: #e0e0e0 !important; /* فیلدهای ورودی طوسی روشن */
    color: #333 !important;
    border: 1px solid #aaa !important;
  }
  .light-theme-input::placeholder { color: #555 !important; }
  /* ... بقیه استایل‌ها بدون تغییر ... */

  /* ستاره‌ها */
  .star {
    position: fixed; width: 2px; height: 2px; background: #fff; border-radius: 50%;
    pointer-events: none; z-index: 0;
    animation: twinkle 3s infinite;
  }
  @keyframes twinkle { 0%,100%{opacity:0.2;}50%{opacity:1;} }

  @media (max-width: 650px) {
    .projects { flex-direction: column; align-items: center; }
    .project-card { width: 90%; }
    .about-card { flex-direction: column; text-align: center; }
    .profile-pic { margin-left: 0; margin-bottom: 20px; }
    .about-text { text-align: center; }
  }
</style>
</head>
<body>

<button id="theme-toggle">🌙</button>

<header>
  <h1>پروژه‌های من</h1>
  <p>!خوش آمدید به سایت من، در ادامه پروژه‌ها را ببینید</p>
</header>

<section id="about-me">
  <h2>درباره من</h2>
  <div class="about-card" id="about-card">
    <div class="profile-pic">
      
    </div>
    <div class="about-text">
      <p>سلام! من <strong>ارسام خوش‌اخلاق</strong> هستم. یک توسعه‌دهنده وب و علاقه‌مند به تکنولوژی‌های فرانت‌اند. من عاشق ترکیب خلاقیت در طراحی و منطق در برنامه‌نویسی هستم. همچنین، در اوقات فراغت، با دوستانم در سرورهای ماینکرفت 🎮 مشغولم.</p>
    </div>
  </div>
</section>

<section id="projects-section">
  <h2>پروژه‌ها</h2>
  <div class="projects">
    <div class="project-card">
      <div class="project-title">سرور ماینکرفت 🎮</div>
      <div class="project-desc">این یک سرور خصوصی برای دوستداران بازی ماینکرفت است. ما روی توسعه پلاگین‌های اختصاصی و ایجاد یک دنیای منحصربه‌فرد تمرکز داریم.</div>
      <div class="project-tech">Java / Spigot / Minecraft</div>
      <a href="#" class="project-link">مشاهده جزئیات</a>
    </div>
    
    <div class="project-card">
      <div class="project-title">پروژه سایت شخصی</div>
      <div class="project-desc">طراحی و پیاده‌سازی این وب‌سایت شخصی با تمرکز بر UX و طراحی نئون مدرن، نشان‌دهنده توانایی‌های فرانت‌اند من است.</div>
      <div class="project-tech">HTML / CSS / JavaScript</div>
      <a href="#" class="project-link">مشاهده جزئیات</a>
    </div>
    
    <div class="project-card">
      <div class="project-title">سیستم مدیریت محتوا</div>
      <div class="project-desc">یک سیستم مدیریت ساده برای وبلاگ‌ها و سایت‌های کوچک که با هدف سادگی و کارایی توسعه داده شده است. (در دست ساخت)</div>
      <div class="project-tech">React / Node.js / MongoDB</div>
      <a href="#" class="project-link">در حال ساخت...</a>
    </div>
  </div>
</section>

<section id="contact-section">
  <h2>ارتباط با من</h2>
  <form action="https://formspree.io/f/mnngzdlw" method="POST" onsubmit="validateForm(this); return false;">
    <input type="hidden" name="website">
    <label for="name">نام:</label>
    <input type="text" id="name" name="name" required placeholder="نام شما">
    <label for="email">ایمیل:</label>
    <input type="email" id="email" name="email" required placeholder="example@example.com">
    <label for="message">پیام:</label>
    <textarea id="message" name="message" rows="5" required placeholder="متن پیام..."></textarea>
    <button type="submit">ارسال پیام</button>
    <p id="formMessage" style="direction: rtl; text-align: right; margin-top: 15px; font-weight: bold;"></p>
  </form>
</section>

<footer>
  <p>© 2025 تمامی حقوق محفوظ است | <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank">اینستاگرام من</a></p>
</footer>

<div id="chat-icon" onclick="toggleChat()">💬</div>
<div id="chat-box">
  <div id="chat-header">🤖 منو</div>
  <div class="chat-options">
    <button onclick="window.open('https://instagram.com/arsam.khosh.akhlagh.2012','_blank')">اینستاگرام من</button>
    <button onclick="document.getElementById('contact-section').scrollIntoView({behavior:'smooth'});toggleChat();">ارتباط با ما</button>
    <button onclick="document.getElementById('projects-section').scrollIntoView({behavior:'smooth'});toggleChat();">پروژه‌ها</button>
  </div>
</div>

<script>
const themeButton = document.getElementById('theme-toggle');
const projectCards = document.querySelectorAll('.project-card');
const inputs = document.querySelectorAll('input, textarea');
const aboutCard = document.getElementById('about-card'); 
let isDark = true;

// 🌟 ساخت ستاره‌ها
function createStars(count){
  for(let i=0;i<count;i++){
    const s=document.createElement('div');
    s.classList.add('star');
    s.style.top=Math.random()*window.innerHeight+'px';
    s.style.left=Math.random()*window.innerWidth+'px';
    s.style.width=Math.random()*2+1+'px';
    s.style.height=s.style.width;
    s.style.animationDuration=2+Math.random()*3+'s';
    document.body.appendChild(s);
  }
}
createStars(60);

// 🌓 حالت تم
if(localStorage.getItem('theme')==='light') setLightTheme();

themeButton.onclick=()=> isDark?setLightTheme():setDarkTheme();

function setLightTheme(){
  // اعمال استایل‌های تم طوسی
  document.body.classList.add('light-theme-body');
  document.querySelector('form').classList.add('light-theme-form');
  aboutCard.classList.add('light-theme-about'); 

  themeButton.textContent='🌞';
  projectCards.forEach(c=>c.classList.add('light-theme-project-card'));
  inputs.forEach(f=>f.classList.add('light-theme-input'));
  document.querySelectorAll('.star').forEach(s=>s.style.display='none');
  
  isDark=false; localStorage.setItem('theme','light');
}

function setDarkTheme(){
  // حذف کلاس‌های تم طوسی
  document.body.classList.remove('light-theme-body');
  document.querySelector('form').classList.remove('light-theme-form');
  aboutCard.classList.remove('light-theme-about'); 
  
  themeButton.textContent='🌙';
  projectCards.forEach(c=>c.classList.remove('light-theme-project-card'));
  inputs.forEach(f=>f.classList.remove('light-theme-input'));
  document.querySelectorAll('.star').forEach(s=>s.style.display='block');

  isDark=true; localStorage.setItem('theme','dark');
}

// 💬 چت
function toggleChat(){
  const chat=document.getElementById('chat-box');
  chat.classList.toggle('show');
}

// ✨ افکت کلیک پروژه‌ها
function particleExplosion(el){
  for(let j=0;j<10;j++){
    const p=document.createElement('div');
    p.style.position='absolute';
    p.style.width='5px';p.style.height='5px';
    p.style.background=['#ff00cc','#00ffff','#ff9900','#00ff00','#ff0'][Math.floor(Math.random()*5)];
    const r=el.getBoundingClientRect();
    p.style.top=r.top+r.height/2+window.scrollY+'px';
    p.style.left=r.left+r.width/2+window.scrollX+'px';
    p.style.transition='0.8s ease';
    document.body.appendChild(p);
    const ang=Math.random()*2*Math.PI,dist=50+Math.random()*50;
    setTimeout(()=>{p.style.top=parseFloat(p.style.top)+Math.sin(ang)*dist+'px';p.style.left=parseFloat(p.style.left)+Math.cos(ang)*dist+'px';p.style.opacity='0';},10);
    setTimeout(()=>p.remove(),800);
  }
}
// کلیک روی کارت‌ها فقط افکت انفجار را اجرا می‌کند
projectCards.forEach((c)=>{
  c.onclick=()=> particleExplosion(c);
});


// 📩 فرم ضد اسپم با استفاده از Fetch (API)
function validateForm(f) {
  const formMessage = document.getElementById('formMessage');
  
  if (f.website.value.trim() !== '') {
    formMessage.textContent = '❌ اسپم شناسایی شد';
    return false;
  }
  
  formMessage.textContent = 'در حال ارسال... ⏳';
  
  fetch(f.action, {
    method: f.method,
    body: new FormData(f),
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      f.reset();
      formMessage.textContent = '✅ پیام با موفقیت ارسال شد!';
      formMessage.style.color = '#00ffff'; 
    } else {
      formMessage.textContent = '❌ خطا در ارسال پیام. دوباره تلاش کنید.';
      formMessage.style.color = '#ff00cc'; 
    }
  })
  .catch(error => {
    formMessage.textContent = '❌ مشکلی رخ داد. لطفاً ارتباط خود را چک کنید.';
    formMessage.style.color = '#ff00cc';
    console.error('Error:', error);
  });
  
  return false;
}
</script>
</body>
</html>
