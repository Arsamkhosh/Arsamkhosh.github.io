<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<title>پروژه‌های من</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
<style>
  body {
    margin: 0;
    font-family: 'Vazirmatn', sans-serif;
    background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
    color: #fff;
    text-align: center;
    transition: all 0.5s;
    overflow-x: hidden;
  }
  header, section, footer { padding: 40px 5%; transition: all 0.5s; }
  h1 {
    font-size: 2.8em;
    background: linear-gradient(90deg, #00ffff, #ff00cc, #ff9900);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
    text-shadow: 0 0 5px rgba(0,255,255,0.5);
  }
  h2 { color: #00ffff; margin-bottom: 20px; font-size: 1.8em; }

  /* پروژه‌ها */
  .projects {
    display: flex; justify-content: center; flex-wrap: wrap;
    gap: 30px; margin-top: 20px;
  }
  .project-card {
    position: relative;
    background: rgba(255,255,255,0.08);
    padding: 25px;
    width: 300px;
    min-height: 200px;
    border-radius: 15px;
    border-left: 5px solid #00ffff;
    box-shadow: 0 4px 20px rgba(0,255,255,0.1);
    text-align: right;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s, background 0.5s, border-left 0.3s;
  }
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px #ff00cc, 0 0 10px #00ffff;
    border-left: 5px solid #ff00cc;
  }
  .project-title { font-size: 1.4em; font-weight: bold; margin-bottom: 10px; color: #00ffff; }
  .project-desc { color: #ccc; margin-bottom: 10px; font-size: 0.9em; }
  .project-tech { font-size: 0.8em; color: #ff9900; font-weight: bold; }

  /* درباره من */
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
    background: #00ffff;
    margin-left: 20px;
    border: 4px solid #ff00cc;
    overflow: hidden;
    box-shadow: 0 0 15px #00ffff;
    flex-shrink: 0;
  }
  .about-text p { font-size: 1.1em; line-height: 1.8; }

  /* فرم تماس */
  form {
    max-width: 500px; margin: 40px auto;
    background: rgba(255, 255, 255, 0.08);
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
  button[type="submit"] {
    background: linear-gradient(135deg,#00ffff,#ff00cc);
    color: #000; font-weight: bold;
    padding: 10px 20px; border: none; border-radius: 12px;
    cursor: pointer; transition: 0.3s;
  }
  button[type="submit"]:hover { transform: scale(1.05); }

  /* دکمه تم بالا سمت چپ */
  #theme-toggle {
    position: fixed; top: 15px; left: 15px;
    background: rgba(255,255,255,0.15);
    border: none; border-radius: 50%;
    width: 45px; height: 45px;
    font-size: 22px; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 0 15px rgba(0,255,255,0.4);
    transition: 0.3s;
  }
  #theme-toggle:hover { transform: rotate(20deg) scale(1.1); }

  /* تم روشن */
  .light-theme-body {
    background: linear-gradient(135deg, #d3d3d3, #f0f0f0) !important;
    color: #333 !important;
  }
  .light-theme-project-card, .light-theme-form, .light-theme-about {
    background: #c0c0c0 !important;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
    border-left: 5px solid #333 !important;
  }
  .light-theme-about .profile-pic {
    border: 4px solid #555 !important; background: #999 !important; box-shadow: none !important;
  }
  .light-theme-input {
    background-color: #e0e0e0 !important; color: #333 !important; border: 1px solid #aaa !important;
  }
  .light-theme-input::placeholder { color: #555 !important; }

  /* چت‌بات عمودی پایین سمت چپ */
  #chat-icon {
    position: fixed; bottom: 20px; left: 20px;
    background: linear-gradient(135deg,#00ffff,#ff00cc);
    border-radius: 50%;
    width: 60px; height: 60px;
    display: flex; align-items: center; justify-content: center;
    font-size: 28px; color: #000;
    cursor: pointer; box-shadow: 0 0 20px rgba(255,0,255,0.4);
    transition: transform 0.3s;
  }
  #chat-icon:hover { transform: scale(1.1); }

  #chat-box {
    position: fixed; bottom: 90px; left: 20px;
    width: 180px; background: rgba(0,0,0,0.9);
    border-radius: 15px; padding: 10px;
    display: none; flex-direction: column; gap: 10px;
    box-shadow: 0 0 25px rgba(0,255,255,0.3);
  }
  #chat-box.show { display: flex; }
  #chat-header { font-weight: bold; color: #00ffff; margin-bottom: 10px; text-align: center; }
  .chat-options button {
    padding: 8px; border: none; border-radius: 10px;
    background: linear-gradient(135deg,#00ffff,#ff00cc);
    color: #000; cursor: pointer; font-weight: bold;
    transition: 0.3s;
  }
  .chat-options button:hover { transform: scale(1.05); }

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
    <div class="profile-pic"></div>
    <div class="about-text">
      <p>سلام! من <strong>ارسام خوش‌اخلاق</strong> هستم. توسعه‌دهنده وب و علاقه‌مند به تکنولوژی‌ها. عاشق خلاقیت در طراحی و منطق در برنامه‌نویسی هستم و همچنین به ماینکرفت و سرورهای بازی علاقه دارم 🌐✨</p>
    </div>
  </div>
</section>

<section id="projects-section">
  <h2>پروژه‌ها</h2>
  <div class="projects">
    <div class="project-card">
      <div class="project-title">سرور ماینکرفت 🎮</div>
      <div class="project-desc">سرور خصوصی برای دوستداران بازی ماینکرفت با پلاگین‌های اختصاصی و دنیای منحصربه‌فرد</div>
      <div class="project-tech">Java / Spigot / Minecraft</div>
    </div>
    <div class="project-card">
      <div class="project-title">سایت شخصی 🌐</div>
      <div class="project-desc">این سایت با تمرکز بر UX و طراحی نئون مدرن توسط من ساخته شده است</div>
      <div class="project-tech">HTML / CSS / JavaScript</div>
    </div>
    <div class="project-card">
      <div class="project-title">ادیت ویدیو 🎬</div>
      <div class="project-desc">به ادیت ویدیو علاقه دارم و کارهای خود را در یوتیوب منتشر می‌کنم</div>
      <div class="project-tech">Capcut / Filmora / Shotcut</div>
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
    <button onclick="window.open('https://instagram.com/arsam.khosh.akhlagh.2012','_blank')">اینستاگرام</button>
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

// ستاره‌ها
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

// تم ماه/خورشید
if(localStorage.getItem('theme')==='light') setLightTheme();
themeButton.onclick=()=> isDark?setLightTheme():setDarkTheme();

function setLightTheme(){
  document.body.classList.add('light-theme-body');
  document.querySelector('form').classList.add('light-theme-form');
  aboutCard.classList.add('light-theme-about'); 
  themeButton.textContent='☀️';
  projectCards.forEach(c=>c.classList.add('light-theme-project-card'));
  inputs.forEach(f=>f.classList.add('light-theme-input'));
  document.querySelectorAll('.star').forEach(s=>s.style.display='none');
  isDark=false; localStorage.setItem('theme','light');
}
function setDarkTheme(){
  document.body.classList.remove('light-theme-body');
  document.querySelector('form').classList.remove('light-theme-form');
  aboutCard.classList.remove('light-theme-about'); 
  themeButton.textContent='🌙';
  projectCards.forEach(c=>c.classList.remove('light-theme-project-card'));
  inputs.forEach(f=>f.classList.remove('light-theme-input'));
  document.querySelectorAll('.star').forEach(s=>s.style.display='block');
  isDark=true; localStorage.setItem('theme','dark');
}

// چت‌بات
function toggleChat(){
  const chat=document.getElementById('chat-box');
  chat.classList.toggle('show');
}

// افکت کلیک پروژه
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
projectCards.forEach((c)=>{ c.onclick=()=> particleExplosion(c); });

// فرم تماس
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
      formMessage.textContent = '❌ خطا در ارسال پیام.';
      formMessage.style.color = '#ff00cc'; 
    }
  })
  .catch(error => {
    formMessage.textContent = '❌ مشکلی رخ داد.';
    formMessage.style.color = '#ff00cc';
  });
  return false;
}
</script>
<!-- Chatbot Neon پیشرفته - قبل از <body> -->
<style>
  /* دکمه اصلی چت */
  #chat-icon {
    position: fixed; bottom: 20px; left: 20px;
    width: 60px; height: 60px; border-radius: 50%;
    background: linear-gradient(135deg,#00ffff,#ff00cc);
    display: flex; align-items: center; justify-content: center;
    font-size: 28px; cursor: pointer;
    box-shadow: 0 0 15px #00ffff, 0 0 25px #ff00cc;
    transition: all 0.3s ease;
    z-index: 1000;
  }
  #chat-icon:hover {
    transform: scale(1.15) rotate(10deg);
    box-shadow: 0 0 20px #00ffff, 0 0 35px #ff00cc;
  }

  /* جعبه چت */
  #chat-box {
    position: fixed; bottom: 90px; left: 20px;
    width: 230px;
    background: rgba(0,0,0,0.95);
    border-radius: 15px;
    padding: 15px;
    display: flex; flex-direction: column;
    gap: 10px;
    box-shadow: 0 0 20px #00ffff, 0 0 30px #ff00cc;
    opacity: 0;
    pointer-events: none;
    transform: translateY(20px);
    transition: all 0.4s ease;
    z-index: 999;
  }
  #chat-box.show {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  #chat-header {
    font-weight: bold; color: #00ffff; text-align: center;
    border-bottom: 1px solid rgba(0,255,255,0.3); padding-bottom: 5px;
    font-size: 16px;
    text-shadow: 0 0 5px #00ffff;
  }

  .chat-options {
    display: flex; flex-direction: column; gap: 8px;
  }

  .chat-options button {
    padding: 10px;
    border: none; border-radius: 10px;
    background: linear-gradient(135deg,#00ffff,#ff00cc);
    color: #000; cursor: pointer; font-weight: bold;
    font-size: 14px;
    transition: all 0.3s ease;
    box-shadow: 0 0 5px #00ffff, 0 0 10px #ff00cc;
  }
  .chat-options button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 12px #00ffff, 0 0 18px #ff00cc;
  }

  /* افکت باز و بسته شدن خودکار */
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  #chat-icon {
    animation: bounce 2s infinite;
  }
</style>

<div id="chat-icon">💬</div>
<div id="chat-box">
  <div id="chat-header">🤖 منو</div>
  <div class="chat-options">
    <button onclick="window.open('https://instagram.com/arsam.khosh.akhlagh.2012','_blank')">اینستاگرام</button>
    <button onclick="document.getElementById('contact-section').scrollIntoView({behavior:'smooth'});toggleChat();">ارتباط با ما</button>
    <button onclick="document.getElementById('projects-section').scrollIntoView({behavior:'smooth'});toggleChat();">پروژه‌ها</button>
  </div>
</div>

<script>
  const chatIcon = document.getElementById('chat-icon');
  const chatBox = document.getElementById('chat-box');

  // باز و بسته کردن با کلیک
  function toggleChat() {
    chatBox.classList.toggle('show');
  }
  chatIcon.addEventListener('click', toggleChat);

  // باز شدن خودکار بعد از 3 ثانیه
  setTimeout(()=>{ chatBox.classList.add('show'); }, 3000);

  // بسته شدن خودکار بعد از 10 ثانیه
  setTimeout(()=>{ chatBox.classList.remove('show'); }, 13000);
</script>
</body>
</html>
