<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>پروژه‌ های من</title>
<link rel="icon" href="/favicon.ico" type="image/x-icon">
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
<style>
  :root{
    --neon-1: #00ffff;
    --neon-2: #ff00cc;
    --accent-grad: linear-gradient(135deg,var(--neon-1),var(--neon-2));
    --bg-dark-start: #07070a;
    --bg-dark-end: #0f0f12;
    --bg-light-start: #f7f7f8;
    --bg-light-end: #e9e9ea;
    --card-bg-dark: rgba(255,255,255,0.03);
    --card-bg-light: #ffffff;
    --glass-border: rgba(255,255,255,0.04);
  }
  html,body{height:100%;margin:0;padding:0;font-family:'Vazirmatn',sans-serif;box-sizing:border-box}
  *,*::before,*::after{box-sizing:inherit}
  body {
    margin:0;
    background: linear-gradient(135deg,var(--bg-dark-start),var(--bg-dark-end));
    color: #eaeaea;
    transition: background .45s ease, color .45s ease;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    overflow-x:hidden;
  }

  /* Layout */
  header{ padding:28px 18px 8px 18px; text-align:center; position:relative }
  header h1{ margin:0; font-size:2.3rem; color:var(--neon-1); font-weight:800; letter-spacing:0.6px; }
  header p{ margin:6px 0 0 0; color:#cfeff0; opacity:0.95 }

  main{ padding: 18px; max-width:1100px; margin:0 auto 30px auto; }

  /* Projects grid */
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    gap: 18px;
    margin-top: 18px;
  }
  .project-card {
    background: var(--card-bg-dark);
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 6px 22px rgba(0,0,0,0.45);
    transition: transform .18s, box-shadow .18s, background .2s;
    overflow: visible;
    border: 1px solid rgba(255,255,255,0.02);
  }
  .project-card:hover { transform: translateY(-6px); box-shadow: 0 18px 46px rgba(0,0,0,0.65); }
  .project-title { color: var(--neon-1); font-weight:700; font-size:1.05rem; margin-bottom:8px; display:flex; align-items:center; gap:8px }
  .project-desc { color:#cfdada; margin-bottom:10px; line-height:1.5 }
  .project-tech { color:#ffd399; font-weight:700; font-size:0.9rem; }

  /* Server box (terminal-like) */
  .server-terminal {
    background: linear-gradient(180deg,#000 0%, #060606 100%);
    border-radius: 10px;
    border: 1px solid rgba(0,255,255,0.12);
    padding: 12px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Vazir", monospace;
    color: #00ff99;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    position:relative;
    overflow:visible;
  }
  .server-terminal::after{
    content:''; position:absolute; inset:auto -30px -18px auto; width:60px; height:40px; background:linear-gradient(135deg, rgba(0,255,255,0.07), rgba(255,0,204,0.04)); filter:blur(18px); transform:rotate(18deg); border-radius:8px; opacity:0.7;
  }
  .server-terminal .ip { font-weight:700; font-size:0.98rem; color:#dfffe8 }
  .server-terminal .actions { display:flex; gap:8px; align-items:center; }
  .btn-copy {
    background: var(--accent-grad);
    border: none;
    color:#000;
    padding:8px 10px;
    border-radius:8px;
    cursor:pointer;
    font-weight:700;
    box-shadow: 0 8px 20px rgba(255,0,204,0.06);
    transition: transform .12s, box-shadow .12s, filter .12s;
  }
  .btn-copy:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 18px 40px rgba(255,0,204,0.12); filter:brightness(1.05) }

  #player-count {
    color: #7cff7c;
    margin-top:10px;
    font-weight:700;
    text-align:center;
    min-height:26px;
  }

  /* About card */
  .about-card {
    display:flex;
    gap:14px;
    align-items:center;
    background: var(--card-bg-dark);
    padding:12px;
    border-radius:12px;
    border:1px solid var(--glass-border);
  }
  .profile-pic {
    width:82px; height:82px; border-radius:50%;
    background:var(--neon-1); border:3px solid var(--neon-2);
    box-shadow: 0 6px 20px rgba(0,255,255,0.06);
    flex-shrink:0;
  }
  .about-text p{ margin:0; color:#dfe; line-height:1.6 }

  /* Contact */
  .contact-card {
    background: var(--card-bg-dark);
    border-radius:12px;
    padding:14px;
    border:1px solid var(--glass-border);
  }
  form { display:flex; flex-direction:column; gap:10px; }
  input, textarea {
    padding:10px; border-radius:10px; border:1px solid rgba(0,255,255,0.08);
    background: rgba(255,255,255,0.02); color:inherit; resize:vertical; font-family:inherit;
  }
  input::placeholder, textarea::placeholder { color:#9fbaba; }
  .btn-submit {
    padding:10px 12px; border-radius:12px; border:none;
    background: var(--accent-grad); color:#000; font-weight:800; cursor:pointer;
    transition: transform .12s, box-shadow .12s;
  }
  .btn-submit:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(255,0,204,0.08); }

  /* Theme toggle top-left */
  #theme-toggle {
    position: fixed; top: 16px; left: 16px; width:48px; height:48px;
    border-radius:50%; border:none; background: rgba(255,255,255,0.06);
    color:inherit; cursor:pointer; z-index:1200; font-size:20px;
    display:flex; align-items:center; justify-content:center;
    box-shadow: 0 6px 18px rgba(0,0,0,0.45);
  }

  /* Chat widget left-bottom */
  #chat-icon {
    position: fixed; left:16px; bottom:16px; width:58px; height:58px; border-radius:50%;
    background: var(--accent-grad); display:flex; align-items:center; justify-content:center;
    cursor:pointer; z-index:1200; color:#000; font-size:22px; box-shadow: 0 12px 36px rgba(0,0,0,0.5);
  }
  #chat-box {
    position: fixed; left:16px; bottom:86px; width:260px; border-radius:12px;
    background: rgba(0,0,0,0.92); padding:12px; display:none; z-index:1199; opacity:0; transform:translateY(10px);
    transition: all .26s cubic-bezier(.2,.9,.2,1);
  }
  #chat-box.show { display:block; opacity:1; transform:translateY(0); }
  #chat-header { color:var(--neon-1); font-weight:800; text-align:center; margin-bottom:8px; }
  .chat-options button {
    width:100%; padding:8px; border-radius:10px; border:none; background:var(--accent-grad); font-weight:800; cursor:pointer; margin-bottom:8px;
    color:#000; transition: transform .12s;
  }
  .chat-options button:active{ transform:scale(.99) }
  .chat-options button:last-child{ margin-bottom:0 }

  /* Toast (copy) */
  .toast {
    position: fixed; left:50%; transform:translateX(-50%); bottom:22px;
    background: rgba(0,0,0,0.85); color:#fff; padding:10px 14px; border-radius:10px;
    box-shadow:0 8px 28px rgba(0,0,0,0.6); z-index:1300; display:none;
    font-weight:700;
  }

  /* Stars (dark only) */
  .star { position:fixed; width:2px; height:2px; border-radius:50%; background:#fff; opacity:.9; z-index:0; pointer-events:none; animation:twinkle 3s infinite; }
  @keyframes twinkle{0%,100%{opacity:.15;}50%{opacity:1;}}

  footer { text-align:center; margin-top:26px; padding:18px; color:#bfcfcf }
  footer .footer-instagram { margin-top:10px; }
  a { color: var(--neon-1) }

  /* Neon header glow */
  .neon {
    position:relative;
    text-shadow: 0 0 6px rgba(0,255,255,0.12), 0 0 12px rgba(0,255,255,0.10), 0 0 28px rgba(255,0,204,0.06);
  }
  .neon::after{
    content:''; position:absolute; inset:0; filter:blur(16px); opacity:0.25; pointer-events:none;
    background: radial-gradient(circle at 30% 10%, rgba(0,255,255,0.14), transparent 10%), radial-gradient(circle at 70% 90%, rgba(255,0,204,0.09), transparent 10%);
    mix-blend-mode:screen; border-radius:6px;
  }

  /* Light theme overrides */
  .light-theme body, .light-theme {
    background: linear-gradient(135deg,var(--bg-light-start),var(--bg-light-end)) !important;
    color: #222 !important;
  }
  .light-theme .project-card { background: var(--card-bg-light); color:#222 }
  .light-theme .about-card { background:#fafafa; color:#222 }
  .light-theme input, .light-theme textarea { background:#fff; color:#222; border:1px solid #d0d0d0 }
  .light-theme #player-count { color:#006600; }
  .light-theme .server-terminal { background:#0b0b0b; border-color:#666; color:#00aa66 }

  /* Responsive */
  @media (max-width:720px){
    .projects { grid-template-columns: 1fr; padding:10px; }
    #chat-box { left:12px; width:220px; }
    #theme-toggle { left:12px; top:12px; }
  }
</style>
</head>
<body>

<!-- Theme toggle -->
<button id="theme-toggle" aria-label="تغییر حالت">🌙</button>

<!-- Header -->
<header>
  <h1 class="neon">پروژه‌های من</h1>
  <p>خوش آمدی به سایت من ! اینجا پروژه‌ها، سرور و راه ارتباطی من هست.</p>
</header>

<main>

  <!-- About -->
  <section id="about-me" style="margin-bottom:18px;">
    <div class="about-card">
      <div class="profile-pic" aria-hidden="true"></div>
      <div class="about-text">
        <p>سلام! من <strong> من آرسام خوش اخلاق </strong> هستم — توسعه‌دهنده وب، ماینکرفت‌ باز و سازنده سرورهای اختصاصی. اینجا نمونه‌کارها و راه‌های ارتباط با من قرار داره.</p>
      </div>
    </div>
  </section>

  <!-- Projects -->
  <section id="projects-section" aria-labelledby="projects-heading">
    <h2 id="projects-heading" style="color:var(--neon-1); margin:8px 0 12px 0;">پروژه‌ها</h2>
    <div class="projects">

      <!-- Server card -->
      <article class="project-card" aria-labelledby="server-title">
        <div class="project-title" id="server-title">🌍 سرور ماینکرفت LAVA JUMP</div>
        <div class="project-desc">، رقابت کن و از سرور ما لذت ببر! آدرس سرور و وضعیت آنلاین در زیر نمایش داده می‌شود.</div>

        <div class="server-terminal" role="region" aria-label="آی‌پی سرور">
          <div class="ip" id="server-ip">lavajumptest.falixsrv.me</div>
          <div class="actions">
            <button class="btn-copy" id="copy-btn" title="کپی آی‌پی">📋 کپی</button>
          </div>
        </div>

        <div id="player-count" aria-live="polite">در حال بررسی وضعیت سرور...</div>
      </article>

      <!-- Other project cards (texts preserved) -->
      <article class="project-card" aria-labelledby="proj-1">
        <div class="project-title" id="proj-1">سایت شخصی 🌐</div>
        <div class="project-desc">طراحی و پیاده‌سازی سایت شخصی با تمرکز روی ظاهر نئون و تجربه‌ی کاربری.</div>
        <div class="project-tech">HTML / CSS / JavaScript</div>
      </article>

      <article class="project-card" aria-labelledby="proj-2">
        <div class="project-title" id="proj-2">ادیت ویدیو 🎬</div>
        <div class="project-desc">ادیت و تولید محتوا برای یوتیوب و شبکه‌های اجتماعی.</div>
        <div class="project-tech">CapCut / Filmora / Shotcut</div>
      </article>

    </div>
  </section>

  <!-- Contact -->
  <section id="contact-section" style="margin-top:20px;">
    <h2 style="color:var(--neon-1); margin-bottom:8px;">ارتباط با من</h2>
    <div class="contact-card">
      <form id="contact-form" action="https://formspree.io/f/mnngzdlw" method="POST" onsubmit="return validateForm(this);">
        <input type="hidden" name="website" value="">
        <input id="name" name="name" type="text" placeholder="نام شما" required />
        <input id="email" name="email" type="email" placeholder="example@example.com" required />
        <textarea id="message" name="message" rows="5" placeholder="متن پیام..." required></textarea>
        <button class="btn-submit" type="submit">ارسال پیام</button>
        <p id="formMessage" style="margin-top:8px;font-weight:700;text-align:right;"></p>
      </form>
    </div>
  </section>

</main>

<!-- Footer -->
<footer>
  <p>© 2025 تمامی حقوق محفوظ است</p>
  <p class="footer-instagram"><a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank" rel="noopener">اینستاگرام من</a></p>
</footer>

<!-- Chat widget -->
<div id="chat-icon" role="button" aria-label="باز کردن منو">💬</div>
<div id="chat-box" role="dialog" aria-hidden="true">
  <div id="chat-header">🤖 منو</div>
  <div class="chat-options">
    <button onclick="document.getElementById('projects-section').scrollIntoView({behavior:'smooth'}); toggleChat();">پروژه‌ها</button>
    <button onclick="document.getElementById('about-me').scrollIntoView({behavior:'smooth'}); toggleChat();">درباره من</button>
    <button onclick="document.getElementById('contact-section').scrollIntoView({behavior:'smooth'}); toggleChat();">ارتباط با ما</button>
  </div>
</div>

<!-- Toast -->
<div id="toast" class="toast" role="status" aria-live="polite">کپی شد</div>

<script>
/* --------------------------------------------------
   UX Enhancements: stars, theme, chat, copy, server
   -------------------------------------------------- */

/* ---------- Stars (dark only) ---------- */
function createStars(count=70){
  for(let i=0;i<count;i++){
    const s = document.createElement('div');
    s.className = 'star';
    const size = 1 + Math.random()*2;
    s.style.width = s.style.height = size + 'px';
    s.style.left = (Math.random()*100) + 'vw';
    s.style.top  = (Math.random()*100) + 'vh';
    s.style.opacity = (0.15 + Math.random()*0.85).toString();
    document.body.appendChild(s);
  }
}
createStars(70);

/* ---------- Theme (sun/moon) ---------- */
const themeButton = document.getElementById('theme-toggle');
let isDark = true;
const stored = localStorage.getItem('site-theme');
if(stored === 'light') applyLight(); else applyDark();

themeButton.addEventListener('click', () => {
  isDark ? applyLight() : applyDark();
});

function applyLight(){
  document.documentElement.classList.add('light-theme');
  document.body.style.background = `linear-gradient(135deg, ${getComputedStyle(document.documentElement).getPropertyValue('--bg-light-start') || '#f0f0f0'}, ${getComputedStyle(document.documentElement).getPropertyValue('--bg-light-end') || '#e6e6e6'})`;
  document.body.style.color = '#222';
  document.querySelectorAll('.project-card, .about-card, .contact-card').forEach(c=>c.classList.add('light-theme'));
  document.querySelectorAll('input,textarea').forEach(i=>i.classList.add('light-theme-input'));
  document.querySelectorAll('.star').forEach(s=>s.style.display='none');
  themeButton.textContent='☀';
  isDark = false;
  localStorage.setItem('site-theme','light');
}

function applyDark(){
  document.documentElement.classList.remove('light-theme');
  document.body.style.background = 'linear-gradient(135deg,#07070a,#0f0f12)';
  document.body.style.color = '#eaeaea';
  document.querySelectorAll('.project-card, .about-card, .contact-card').forEach(c=>c.classList.remove('light-theme'));
  document.querySelectorAll('input,textarea').forEach(i=>i.classList.remove('light-theme-input'));
  document.querySelectorAll('.star').forEach(s=>s.style.display='block');
  themeButton.textContent='🌙';
  isDark = true;
  localStorage.setItem('site-theme','dark');
}

/* ---------- Chat widget ---------- */
const chatIcon = document.getElementById('chat-icon');
const chatBox = document.getElementById('chat-box');
function toggleChat(){
  const show = chatBox.classList.toggle('show');
  chatBox.setAttribute('aria-hidden', !show);
}
chatIcon.addEventListener('click', toggleChat);

/* ---------- Toast helper ---------- */
const toast = document.getElementById('toast');
function showToast(text='کپی شد', dur=1600){
  toast.textContent = text;
  toast.style.display = 'block';
  toast.style.opacity = '1';
  setTimeout(()=> {
    toast.style.opacity = '0';
    setTimeout(()=> toast.style.display='none', 300);
  }, dur);
}

/* ---------- Copy IP ---------- */
const copyBtn = document.getElementById('copy-btn');
copyBtn.addEventListener('click', async ()=> {
  const ip = document.getElementById('server-ip').textContent.trim();
  try{
    await navigator.clipboard.writeText(ip);
    showToast('✅ آی‌پی کپی شد: ' + ip);
    // small pulse on success
    copyBtn.animate([{transform:'scale(1)'},{transform:'scale(1.06)'},{transform:'scale(1)'}],{duration:260})
  }catch(e){
    showToast('❌ کپی نشد — مرورگر اجازه نداد');
  }
});

/* ---------- Typing effect (for status) ---------- */
function typingEffect(el, text, speed=28){
  el.textContent = '';
  let i = 0;
  const id = setInterval(()=>{
    el.textContent += text.charAt(i++);
    if(i >= text.length) clearInterval(id);
  }, speed);
}

/* ---------- Server status (players) ---------- */
async function fetchServerStatus(ip){
  // Uses mcsrvstat.us which supports Minecraft server queries
  try{
    const res = await fetch('https://api.mcsrvstat.us/2/' + encodeURIComponent(ip));
    if(!res.ok) throw new Error('network');
    return await res.json();
  }catch(err){
    console.error('fetchServerStatus error', err);
    return null;
  }
}

let playersLast = null;
async function updatePlayers(){
  const countEl = document.getElementById('player-count');
  const ip = document.getElementById('server-ip').textContent.trim();
  // visually show checking
  typingEffect(countEl, 'در حال بررسی وضعیت سرور...');
  const data = await fetchServerStatus(ip);
  if(!data){
    setTimeout(()=>{countEl.textContent = '❌ خطا در دریافت وضعیت سرور';}, 700);
    return;
  }
  // server returns data.online false if offline
  if(typeof data.online !== 'undefined' && data.online === false){
    typingEffect(countEl, '❌ سرور آفلاین است');
    playersLast = 0;
    return;
  }
  const online = (data.players && typeof data.players.online === 'number') ? data.players.online : 0;
  const max = (data.players && typeof data.players.max === 'number') ? data.players.max : (data.debug && data.debug.query && data.debug.query.max_players) ? data.debug.query.max_players : 0;
  const txt = `🎮 بازیکنان آنلاین: ${online}/${max}`;
  // only animate if changed
  if(playersLast !== online){
    typingEffect(countEl, txt);
    // tiny glow to show update
    countEl.animate([{textShadow:'0 0 0 rgba(0,0,0,0)'},{textShadow:'0 0 14px rgba(0,255,0,0.15)'}],{duration:700,fill:'forwards'});
  } else {
    countEl.textContent = txt;
  }
  playersLast = online;
}
// initial and periodic update every 10s
updatePlayers();
setInterval(updatePlayers, 10000);

/* ---------- Contact form (Formspree) ---------- */
function validateForm(f){
  const msg = document.getElementById('formMessage');
  if (!f) return false;
  if (f.website && f.website.value.trim() !== ''){ msg.textContent = '❌ اسپم شناسایی شد'; return false; }
  msg.style.color = isDark ? '#00ff99' : '#0066aa';
  msg.textContent = 'در حال ارسال...';
  fetch(f.action, { method: f.method, body: new FormData(f), headers: {'Accept':'application/json'} })
    .then(res => {
      if(res.ok){
        f.reset();
        msg.textContent = '✅ پیام با موفقیت ارسال شد!';
      } else {
        msg.textContent = '❌ خطا در ارسال پیام. دوباره تلاش کنید.';
      }
    })
    .catch(err => {
      msg.textContent = '❌ مشکلی رخ داد. اتصال اینترنت را بررسی کنید.';
      console.error(err);
    });
  return false; // جلوگیری از submit عادی
}

/* ---------- Accessibility & small UX ---------- */
document.querySelectorAll('.project-card').forEach(card=>{
  card.tabIndex = 0;
  card.addEventListener('keypress', e=>{
    if(e.key === 'Enter' || e.key === ' ') particleEffect(card);
  });
});

function particleEffect(el){
  el.animate([{transform:'scale(1)'},{transform:'scale(1.02)'},{transform:'scale(1)'}],{duration:220});
}

</script>
</body>
</html>
