<html lang="fa">
<head>
<meta charset="UTF-8">
<title>پروژه‌های من</title>
<link href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css" rel="stylesheet" />
<style>
  body {
    margin: 0;
    font-family: 'Vazir', sans-serif;
    background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
    color: #fff;
    text-align: center;
    transition: all 0.5s;
    overflow-x: hidden;
  }

  header, section, footer { padding: 40px 20px; transition: all 0.5s; }

  h1 {
    font-size: 2.5em;
    background: linear-gradient(90deg, #00ffff, #ff00cc, #ff9900);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
  }

  .projects {
    display: flex; justify-content: center; flex-wrap: wrap;
    gap: 20px; margin-top: 20px;
  }

  .project-card {
    position: relative;
    background: rgba(255,255,255,0.05);
    padding: 20px;
    width: 200px;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0,255,255,0.2);
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .project-card:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 0 25px #00ffff;
  }

  form {
    max-width: 500px; margin: 40px auto;
    background: rgba(255, 255, 255, 0.05);
    padding: 20px; border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
    direction: rtl; text-align: right;
  }

  label { display: block; margin: 10px 0 5px; font-weight: bold; }
  input, textarea {
    width: 100%; padding: 12px; border-radius: 10px; border: none;
    background-color: rgba(255,255,255,0.1);
    color: #fff; margin-bottom: 15px;
  }
  input:focus, textarea:focus {
    outline: none; box-shadow: 0 0 10px #00ffff;
  }

  button {
    padding: 12px 25px; border: none; border-radius: 10px;
    background: linear-gradient(90deg, #00ffff, #ff00cc);
    color: #000; font-weight: bold; cursor: pointer;
    transition: 0.3s;
  }
  button:hover { transform: scale(1.05); box-shadow: 0 0 15px #ff00cc; color: #fff; }

  footer a { color: #00ffff; text-decoration: none; font-weight: bold; }
  footer a:hover { color: #ff00cc; }

  #chat-icon {
    position: fixed; bottom: 20px; left: 20px;
    background: #00ffff; color: #000; padding: 12px 16px;
    border-radius: 50px; font-size: 1.5em; cursor: pointer;
    box-shadow: 0 0 10px #00ffff; z-index: 1000;
  }

  #chat-box {
    position: fixed; bottom: 80px; left: 20px; width: 250px;
    background: #1a1a1a; color: #fff; border-radius: 15px;
    box-shadow: 0 0 15px #00ffff;
    display: none; flex-direction: column;
    overflow: hidden; z-index: 1000;
    opacity: 0; transform: scale(0.8);
    transition: all 0.3s ease;
  }
  #chat-box.show { opacity: 1; transform: scale(1); display: flex; }
  #chat-header { background: #00ffff; color: #000; padding: 10px; font-weight: bold; text-align: center; }
  .chat-options button {
    width: 100%; padding: 10px; border: none;
    border-bottom: 1px solid #00ffff; background: transparent;
    color: #fff; cursor: pointer; transition: 0.3s;
  }
  .chat-options button:hover { background: #00ffff; color: #000; }

  #theme-toggle {
    position: fixed; top: 20px; left: 20px;
    padding: 12px 16px; border-radius: 50%; border: none;
    background: linear-gradient(90deg, #00ffff, #ff00cc);
    font-size: 1.5em; cursor: pointer;
    box-shadow: 0 0 15px #00ffff; transition: all 0.3s;
    z-index: 1000;
  }
  #theme-toggle:hover { transform: scale(1.1); box-shadow: 0 0 20px #ff00cc; }

  /* ستاره‌ها */
  .star {
    position: fixed; width: 2px; height: 2px; background: #fff; border-radius: 50%;
    pointer-events: none; z-index: 0;
    animation: twinkle 3s infinite;
  }
  @keyframes twinkle { 0%,100%{opacity:0.2;}50%{opacity:1;} }

  @media (max-width: 600px) {
    .projects { flex-direction: column; align-items: center; }
    .project-card { width: 90%; }
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
  <p>سلام! من <strong>ارسام خوش‌اخلاق</strong> هستم، علاقه‌مند به طراحی وب و ماینکرفت 🎮</p>
</section>

<section id="projects-section">
  <h2>پروژه‌ها</h2>
  <div class="projects">
    <div class="project-card">پروژه 1</div>
    <div class="project-card">پروژه 2</div>
    <div class="project-card">پروژه 3</div>
  </div>
</section>

<section id="contact-section">
  <h2>ارتباط با من</h2>
  <form action="https://formspree.io/f/mnngzdlw" method="POST" onsubmit="return validateForm(this);">
    <input type="hidden" name="website">
    <label for="name">نام:</label>
    <input type="text" id="name" name="name" required placeholder="نام شما">
    <label for="email">ایمیل:</label>
    <input type="email" id="email" name="email" required placeholder="example@example.com">
    <label for="message">پیام:</label>
    <textarea id="message" name="message" rows="5" required placeholder="متن پیام..."></textarea>
    <button type="submit">ارسال پیام</button>
    <p id="formMessage"></p>
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
  document.body.style.background='linear-gradient(135deg,#e0e0e0,#fafafa)';
  document.body.style.color='#111';
  themeButton.textContent='🌞';
  projectCards.forEach(c=>c.style.background='#ccc');
  inputs.forEach(f=>f.style.background='#ddd');
  document.querySelectorAll('.star').forEach(s=>s.style.display='none');
  isDark=false; localStorage.setItem('theme','light');
}
function setDarkTheme(){
  document.body.style.background='linear-gradient(135deg,#0f0f0f,#1a1a1a)';
  document.body.style.color='#fff';
  themeButton.textContent='🌙';
  projectCards.forEach(c=>c.style.background='rgba(255,255,255,0.05)');
  inputs.forEach(f=>f.style.background='rgba(255,255,255,0.1)');
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
    p.style.borderRadius='50%';
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
projectCards.forEach((c,i)=>c.onclick=()=>{
  c.textContent=i===0?'سرور ماینکرفت 🎮':'در حال ساخت...';
  particleExplosion(c);
});

// 📩 فرم ضد اسپم
function validateForm(f){
  if(f.website.value.trim()!==''){document.getElementById('formMessage').textContent='❌ اسپم شناسایی شد';return false;}
  document.getElementById('formMessage').textContent='در حال ارسال...';
  setTimeout(()=>{f.reset();document.getElementById('formMessage').textContent='✅ پیام با موفقیت ارسال شد!';},1000);
  return true;
}
</script>
</body>
</html>
