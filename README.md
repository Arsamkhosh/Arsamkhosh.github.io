<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>پروژه‌های من</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
<style>
:root {
  --neon1: #00ffff;
  --neon2: #ff00cc;
}
body {
  margin: 0;
  font-family: 'Vazirmatn', sans-serif;
  background: linear-gradient(135deg,#0a0a0a,#111);
  color: #eaeaea;
  text-align: center;
}
header {padding:40px 0;}
h1 {color: var(--neon1); font-size:2rem; text-shadow:0 0 15px var(--neon1);}
h2 {margin:25px 0 15px; color: var(--neon1);}
section {max-width:700px; margin:0 auto 40px; padding:20px; border-radius:12px; background: rgba(255,255,255,0.03);}
.about-card {display:flex; align-items:center; gap:15px; padding:15px; border-radius:10px; background: rgba(255,255,255,0.05);}
.profile-pic {width:90px;height:90px;border-radius:50%;background: var(--neon1);border:3px solid var(--neon2);}
.project-card {margin-bottom:20px; padding:15px; border-radius:10px; background: rgba(255,255,255,0.03);}
.server-terminal {display:flex; justify-content:space-between; padding:10px; border:1px solid rgba(0,255,255,0.1); border-radius:8px; color:#00ff99; font-family: monospace;}
.btn-copy {background: linear-gradient(135deg,var(--neon1),var(--neon2)); color:#000; border:none; padding:6px 10px; border-radius:8px; cursor:pointer;}
.contact-card input, .contact-card textarea {width:90%; padding:10px; border-radius:8px; border:1px solid rgba(0,255,255,0.1); background: rgba(255,255,255,0.03); color:#fff; margin-bottom:10px;}
.btn-submit {padding:8px 15px; border:none; border-radius:20px; background: linear-gradient(135deg,var(--neon1),var(--neon2)); color:#000; cursor:pointer;}
.social-buttons {display:flex; justify-content:center; gap:15px; margin-top:25px;}
.social-buttons a {display:flex; align-items:center; justify-content:center; width:45px;height:45px;background:#111;color:#fff;border-radius:50%;text-decoration:none; transition:0.3s;}
.social-buttons a:hover {transform: scale(1.1); box-shadow:0 0 15px var(--neon1),0 0 25px var(--neon2);}
footer {margin-top:30px; padding:15px; color:#bfcfcf;}
</style>
</head>
<body>

<header>
  <h1>پروژه‌های من</h1>
</header>

<section id="about-me">
  <h2>درباره من</h2>
  <div class="about-card">
    <div class="profile-pic"></div>
    <p>سلام! من <strong>آرسام خوش اخلاق</strong> هستم — توسعه‌دهنده وب و سازنده سرورهای ماینکرفت.</p>
  </div>
</section>

<section id="projects">
  <h2>پروژه‌ها</h2>
  <div class="project-card">
    <h3>🌍 سرور ماینکرفت LAVA JUMP</h3>
    <p>رقابت کن و لذت ببر! آدرس و وضعیت سرور در زیر:</p>
    <div class="server-terminal">
      <span id="server-ip">lavajumptest.falixsrv.me</span>
      <button class="btn-copy" id="copy-btn">📋 کپی</button>
    </div>
    <p id="player-count">در حال بررسی وضعیت سرور...</p>
  </div>
  <div class="project-card">
    <h3>🌐 سایت شخصی</h3>
    <p>طراحی سایت شخصی با تمرکز روی ظاهر نئون و UX.</p>
  </div>
  <div class="project-card">
    <h3>🎬 ادیت ویدیو</h3>
    <p>ادیت و تولید محتوا برای یوتیوب و شبکه‌های اجتماعی.</p>
  </div>
</section>

<section id="contact">
  <h2>ارتباط با من</h2>
  <div class="contact-card">
    <form id="contact-form" action="https://formspree.io/f/mnngzdlw" method="POST">
      <input type="text" name="name" placeholder="نام شما" required>
      <input type="email" name="email" placeholder="example@example.com" required>
      <textarea name="message" rows="4" placeholder="متن پیام..." required></textarea>
      <button class="btn-submit" type="submit">ارسال ✉️</button>
    </form>
  </div>
</section>

<footer>
  <div class="social-buttons">
    <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank">IG</a>
    <a href="https://github.com/username" target="_blank">GH</a>
    <a href="https://twitter.com/username" target="_blank">TW</a>
  </div>
  <p>© 2025 آرسام خوش اخلاق</p>
</footer>

<script>
/* Copy IP */
document.getElementById('copy-btn').addEventListener('click', ()=>{
  const ip = document.getElementById('server-ip').textContent.trim();
  navigator.clipboard.writeText(ip).then(()=>alert('آی‌پی کپی شد: '+ip));
});

/* Server Status */
async function updatePlayers(){
  const countEl = document.getElementById('player-count');
  const ip = document.getElementById('server-ip').textContent.trim();
  countEl.textContent = 'در حال بررسی وضعیت سرور...';
  try {
    const res = await fetch('https://api.mcsrvstat.us/2/'+encodeURIComponent(ip));
    const data = await res.json();
    if(data.online===false){countEl.textContent='❌ سرور آفلاین است';}
    else {
      const online = data.players?.online ?? 0;
      const max = data.players?.max ?? 0;
      countEl.textContent=`🎮 بازیکنان آنلاین: ${online}/${max}`;
    }
  } catch {
    countEl.textContent='❌ خطا در دریافت وضعیت سرور';
  }
}
updatePlayers();
setInterval(updatePlayers,10000);
</script>

</body>
</html>
