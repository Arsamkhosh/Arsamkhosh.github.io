<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>پروژه‌های من</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
<style>
  :root{
    --neon-1: #00ffff;
    --neon-2: #ff00cc;
    --accent: linear-gradient(135deg,var(--neon-1),var(--neon-2));
  }
  html,body{height:100%;margin:0;padding:0;font-family:'Vazirmatn',sans-serif;box-sizing:border-box}
  body {
    margin: 0;
    background: linear-gradient(135deg,#0f0f0f,#1a1a1a);
    color: #fff;
    text-align: center;
    overflow-x: hidden;
    transition: background .45s ease,color .45s ease;
  }
  header, section, footer { padding: 40px 5%; transition: all .4s; }
  h1 {
    font-size: 2.6rem;
    background: linear-gradient(90deg,#00ffff,#ff00cc,#ff9900);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 10px 0;
    text-shadow: 0 0 6px rgba(0,255,255,0.15);
  }
  h2 { color: var(--neon-1); margin-bottom: 18px; font-size: 1.6rem; }

  /* ---------- Projects ---------- */
  .projects {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 26px;
    margin-top: 18px;
  }
  .project-card {
    width: 300px;
    min-height: 180px;
    padding: 22px;
    background: rgba(255,255,255,0.06);
    border-radius: 14px;
    border-left: 5px solid var(--neon-1);
    box-shadow: 0 6px 20px rgba(0,255,255,0.06);
    text-align: right;
    direction: rtl;
    transition: transform .25s ease, box-shadow .25s, border-left .25s;
    cursor: pointer;
  }
  .project-card:hover{
    transform: translateY(-6px);
    border-left: 5px solid var(--neon-2);
    box-shadow: 0 10px 30px rgba(255,0,204,0.08), 0 6px 18px rgba(0,255,255,0.06);
  }
  .project-title{ font-size:1.2rem; font-weight:700; color:var(--neon-1); margin-bottom:8px; }
  .project-desc{ color:#d0d0d0; font-size:.95rem; margin-bottom:10px; line-height:1.4; }
  .project-tech{ color:#ffb366; font-weight:700; font-size:.85rem; }

  /* ---------- About ---------- */
  .about-card {
    max-width: 760px;
    margin: 18px auto;
    background: rgba(255,255,255,0.05);
    padding: 22px;
    border-radius: 16px;
    box-shadow: 0 8px 28px rgba(0,0,0,0.25);
    display:flex;
    gap:18px;
    align-items:center;
    direction: rtl;
    text-align: right;
  }
  .profile-pic{ width:96px;height:96px;border-radius:50%;background:var(--neon-1);border:4px solid var(--neon-2);box-shadow:0 0 14px rgba(0,255,255,0.12);flex-shrink:0; }
  .about-text p{ margin:0; font-size:1.02rem; line-height:1.7; color:#e6e6e6; }

  /* ---------- Contact Form ---------- */
  form {
    max-width:520px;
    margin: 30px auto;
    background: rgba(255,255,255,0.04);
    padding:18px;
    border-radius:12px;
    box-shadow: 0 8px 30px rgba(0,255,255,0.04);
    direction: rtl;
    text-align: right;
  }
  input, textarea {
    width:100%;
    padding:12px;
    margin-bottom:12px;
    border-radius:10px;
    border:1px solid rgba(0,255,255,0.12);
    background: rgba(255,255,255,0.03);
    color: #fff;
    font-size:0.98rem;
    transition: box-shadow .2s, transform .15s;
  }
  input:focus, textarea:focus { outline:none; box-shadow: 0 0 10px rgba(0,255,255,0.06); transform: translateY(-1px); }
  ::placeholder{ color:#999; }

  /* submit button */
  .btn-submit {
    display:inline-block;
    width:100%;
    padding:12px 18px;
    border-radius:14px;
    border: none;
    cursor:pointer;
    background: var(--accent);
    color: #000;
    font-weight:700;
    box-shadow: 0 6px 18px rgba(255,0,204,0.08), 0 4px 12px rgba(0,255,255,0.06);
    transition: transform .18s, box-shadow .18s;
  }
  .btn-submit:hover { transform: scale(1.03); box-shadow: 0 10px 28px rgba(255,0,204,0.14), 0 6px 18px rgba(0,255,255,0.10); }

  /* ---------- Theme toggle (top-left) ---------- */
  #theme-toggle {
    position: fixed;
    top: 16px;
    left: 16px;
    width:48px; height:48px;
    border-radius:50%;
    border: none;
    background: rgba(255,255,255,0.12);
    color: #fff;
    font-size:20px;
    display:flex; align-items:center; justify-content:center;
    cursor:pointer;
    box-shadow: 0 6px 20px rgba(0,255,255,0.06);
    z-index: 1100;
    transition: transform .2s, background .3s;
  }
  #theme-toggle:hover{ transform: rotate(12deg) scale(1.05); }

  /* ---------- Chat widget (left-bottom) ---------- */
  #chat-icon {
    position: fixed;
    bottom: 20px;
    left: 20px;
    width:62px; height:62px;
    border-radius:50%;
    background: var(--accent);
    display:flex; align-items:center; justify-content:center;
    font-size:28px; color:#000;
    cursor:pointer;
    box-shadow: 0 10px 30px rgba(255,0,204,0.12), 0 6px 18px rgba(0,255,255,0.06);
    z-index:1200;
    transition: transform .18s;
  }
  #chat-icon:hover{ transform: scale(1.07); }

  #chat-box {
    position: fixed;
    bottom: 96px;
    left: 20px;
    width:220px;
    background: rgba(0,0,0,0.92);
    border-radius:14px;
    padding:12px;
    display:none;
    flex-direction:column;
    gap:10px;
    box-shadow: 0 12px 40px rgba(0,0,0,0.6);
    z-index:1199;
    transition: opacity .25s, transform .25s;
  }
  #chat-box.show{ display:flex; }

  #chat-header { font-weight:700; color:var(--neon-1); text-align:center; font-size:15px; padding-bottom:4px; border-bottom:1px solid rgba(0,255,255,0.06); }

  .chat-options button {
    width:100%;
    padding:10px;
    border-radius:10px;
    border:none;
    background: var(--accent);
    color:#000;
    font-weight:700;
    cursor:pointer;
    transition: transform .15s, box-shadow .2s;
  }
  .chat-options button:hover{ transform: translateY(-3px); box-shadow: 0 10px 24px rgba(255,0,204,0.12); }

  /* ---------- Stars (only visible in dark) ---------- */
  .star { position:fixed; width:2px; height:2px; border-radius:50%; background:#fff; pointer-events:none; z-index:0; opacity:0.9; animation: twinkle 3s infinite; }
  @keyframes twinkle{ 0%,100%{opacity:.15} 50%{opacity:1} }

  /* ---------- Footer ---------- */
  footer{ text-align:center; padding:26px 5px; color:#ddd; }
  footer .copyright { margin:0; font-size:.98rem; color:#ddd; }
  footer .footer-instagram { margin-top:10px; }
  footer a{ color:var(--neon-1); text-decoration:none; font-weight:700; }
  footer a:hover{ text-decoration:underline; }

  /* ---------- Light theme overrides ---------- */
  .light-theme-body{
    background: linear-gradient(135deg,#e6e6e6,#f6f6f6);
    color: #222;
  }
  .light-theme-project-card{ background:#e0e0e0 !important; box-shadow: 0 6px 18px rgba(0,0,0,0.06) !important; border-left:5px solid #555 !important; color:#222;}
  .light-theme-form{ background:#e8e8e8 !important; box-shadow:0 8px 24px rgba(0,0,0,0.06) !important; color:#222;}
  .light-theme-about{ background:#dcdcdc !important; color:#222;}
  .light-theme-input{ background:#fff !important; color:#222 !important; border:1px solid #bbb !important; }
  .light-theme-input::placeholder{ color:#777 !important; }

  @media (max-width:720px){
    .projects{ gap:16px; padding-inline:10px; }
    .project-card{ width:90%; }
    .about-card{ flex-direction:column; align-items:center; text-align:center; padding:16px; }
    #chat-box{ left:12px; width:200px; }
  }
</style>
</head>
<body>

<!-- Theme toggle (top-left) -->
<button id="theme-toggle" aria-label="تغییر حالت">🌙</button>

<header>
  <h1>پروژه‌های من</h1>
  <p style="margin:6px 0 0 0">!خوش آمدید به سایت من، در ادامه پروژه‌ها را ببینید</p>
</header>

<section id="about-me">
  <h2>درباره من</h2>
  <div class="about-card" id="about-card">
    <div class="profile-pic" aria-hidden="true"></div>
    <div class="about-text">
      <p>سلام! من <strong>ارسام خوش‌اخلاق</strong> هستم. توسعه‌دهنده وب و علاقه‌مند به تکنولوژی‌ها. عاشق خلاقیت در طراحی و منطق در برنامه‌نویسی هستم و همچنین به ماینکرفت و سرورهای بازی علاقه دارم 🌐✨</p>
    </div>
  </div>
</section>

<section id="projects-section">
  <h2>پروژه‌ها</h2>
  <div class="projects" aria-live="polite">
    <div class="project-card" tabindex="0">
      <div class="project-title">سرور ماینکرفت 🎮</div>
      <div class="project-desc">سرور اختصاصی برای ماینکرفت با پلاگین‌های اختصاصی — برای همکاری از طریق اینستاگرام یا بخش ارتباط با من در تماس باش.</div>
      <div class="project-tech">Java / Spigot / Minecraft</div>
    </div>

    <div class="project-card" tabindex="0">
      <div class="project-title">سایت شخصی 🌐</div>
      <div class="project-desc">طراحی و پیاده‌سازی این سایت با تمرکز بر UX و طراحی نئون مدرن.</div>
      <div class="project-tech">HTML / CSS / JavaScript</div>
    </div>

    <div class="project-card" tabindex="0">
      <div class="project-title">ادیت ویدیو 🎬</div>
      <div class="project-desc">علاقه به ادیت ویدیو و انتشار کارها در یوتیوب.</div>
      <div class="project-tech">CapCut / Filmora / Shotcut</div>
    </div>
  </div>
</section>

<section id="contact-section">
  <h2>ارتباط با من</h2>
  <form action="https://formspree.io/f/mnngzdlw" method="POST" onsubmit="validateForm(this); return false;">
    <input type="hidden" name="website" value="">
    <input id="name" name="name" type="text" required placeholder="نام شما" />
    <input id="email" name="email" type="email" required placeholder="example@example.com" />
    <textarea id="message" name="message" rows="5" required placeholder="متن پیام..."></textarea>
    <button class="btn-submit" type="submit">ارسال پیام</button>
    <p id="formMessage" style="direction:rtl;text-align:right;margin-top:14px;font-weight:700;"></p>
  </form>
</section>

<footer>
  <p class="copyright">© 2025 تمامی حقوق محفوظ است</p>
  <p class="footer-instagram"><a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank" rel="noopener">اینستاگرام من</a></p>
</footer>

<!-- Chat widget (single, clean) -->
<div id="chat-icon" role="button" aria-label="باز کردن منو">💬</div>
<div id="chat-box" role="dialog" aria-hidden="true">
  <div id="chat-header">🤖 منو</div>
  <div class="chat-options">
    <button onclick="document.getElementById('projects-section').scrollIntoView({behavior:'smooth'}); toggleChat();">پروژه‌ها</button>
    <button onclick="document.getElementById('about-me').scrollIntoView({behavior:'smooth'}); toggleChat();">درباره من</button>
    <button onclick="document.getElementById('contact-section').scrollIntoView({behavior:'smooth'}); toggleChat();">ارتباط با ما</button>
  </div>
</div>

<script>
/* ---------- Stars (dark only) ---------- */
function createStars(count){
  for(let i=0;i<count;i++){
    const s=document.createElement('div');
    s.className='star';
    // random position & size
    const size = 1 + Math.random()*2;
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    s.style.left = Math.random()*100 + 'vw';
    s.style.top = Math.random()*100 + 'vh';
    s.style.opacity = (0.3 + Math.random()*0.7).toString();
    document.body.appendChild(s);
  }
}
createStars(70);

/* ---------- Theme (moon / sun) ---------- */
const themeButton = document.getElementById('theme-toggle');
let isDark = true;
const stored = localStorage.getItem('site-theme');
if(stored === 'light'){ applyLight(); } else { applyDark(); }

themeButton.addEventListener('click', () => {
  isDark ? applyLight() : applyDark();
});

function applyLight(){
  document.body.classList.add('light-theme-body');
  // change component visuals
  document.querySelectorAll('.project-card').forEach(el=>el.classList.add('light-theme-project-card'));
  const form = document.querySelector('form');
  if(form) form.classList.add('light-theme-form');
  document.getElementById('about-card').classList.add('light-theme-about');
  document.querySelectorAll('input,textarea').forEach(el=>el.classList.add('light-theme-input'));
  document.querySelectorAll('.star').forEach(s=>s.style.display='none');
  themeButton.textContent = '☀';
  isDark = false;
  localStorage.setItem('site-theme','light');
}

function applyDark(){
  document.body.classList.remove('light-theme-body');
  document.querySelectorAll('.project-card').forEach(el=>el.classList.remove('light-theme-project-card'));
  const form = document.querySelector('form');
  if(form) form.classList.remove('light-theme-form');
  document.getElementById('about-card').classList.remove('light-theme-about');
  document.querySelectorAll('input,textarea').forEach(el=>el.classList.remove('light-theme-input'));
  document.querySelectorAll('.star').forEach(s=>s.style.display='block');
  themeButton.textContent = '🌙';
  isDark = true;
  localStorage.setItem('site-theme','dark');
}

/* ---------- Chat widget ---------- */
const chatIcon = document.getElementById('chat-icon');
const chatBox = document.getElementById('chat-box');
function toggleChat(){
  const open = chatBox.classList.toggle('show');
  chatBox.setAttribute('aria-hidden', !open);
}
chatIcon.addEventListener('click', toggleChat);

// open briefly on load (non-intrusive)
setTimeout(()=>{ chatBox.classList.add('show'); chatBox.setAttribute('aria-hidden','false'); }, 2500);
setTimeout(()=>{ if(chatBox.classList.contains('show')){ chatBox.classList.remove('show'); chatBox.setAttribute('aria-hidden','true'); } }, 11500);

/* ---------- Project click effect ---------- */
document.querySelectorAll('.project-card').forEach(card=>{
  card.addEventListener('click', ()=> particleExplosion(card) );
  card.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') particleExplosion(card); });
});
function particleExplosion(el){
  for(let i=0;i<12;i++){
    const p = document.createElement('div');
    p.style.position='absolute';
    p.style.width = p.style.height = (4 + Math.random()*6) + 'px';
    p.style.background = ['#ff00cc','#00ffff','#ff9900','#00ff00','#ff0'][Math.floor(Math.random()*5)];
    p.style.borderRadius = '50%';
    const r = el.getBoundingClientRect();
    p.style.left = (r.left + r.width/2 + (Math.random()-0.5)*40) + 'px';
    p.style.top  = (r.top + r.height/2 + (Math.random()-0.5)*20) + 'px';
    p.style.opacity = '1';
    p.style.zIndex = 9999;
    p.style.transition = 'all .8s ease-out';
    document.body.appendChild(p);
    const angle = Math.random()*2*Math.PI;
    const dist = 40 + Math.random()*80;
    setTimeout(()=> {
      p.style.left = parseFloat(p.style.left) + Math.cos(angle)*dist + 'px';
      p.style.top  = parseFloat(p.style.top)  + Math.sin(angle)*dist + 'px';
      p.style.opacity = '0';
    },10);
    setTimeout(()=> p.remove(),900);
  }
}

/* ---------- Contact form (Formspree) ---------- */
function validateForm(f){
  const formMessage = document.getElementById('formMessage');
  if(!f) return false;
  if(f.website && f.website.value.trim() !== ''){ formMessage.textContent = '❌ اسپم شناسایی شد'; return false; }
  formMessage.style.color = isDark ? '#00ffff' : '#0077b6';
  formMessage.textContent = 'در حال ارسال... ⏳';
  fetch(f.action, { method: f.method, body: new FormData(f), headers: {'Accept':'application/json'} })
    .then(res=>{
      if(res.ok){ f.reset(); formMessage.textContent = '✅ پیام با موفقیت ارسال شد!'; }
      else { formMessage.textContent = '❌ خطا در ارسال پیام.'; }
    })
    .catch(err=>{
      formMessage.textContent = '❌ مشکلی رخ داد. لطفاً اتصال اینترنت را بررسی کنید.';
      console.error(err);
    });
  return false;
}
</script>
</body>
</html>
