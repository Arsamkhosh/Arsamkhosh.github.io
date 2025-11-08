<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>پروژه‌های من</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700;800&display=swap" rel="stylesheet">
<style>
:root{
  --neon-1:#00ffff;
  --neon-2:#ff00cc;
  --bg-dark-start:#0a0a0a;
  --bg-dark-end:#111111;
}

body{
  margin:0;
  padding:0;
  font-family:'Vazirmatn',sans-serif;
  background:linear-gradient(135deg,var(--bg-dark-start),var(--bg-dark-end));
  color:#eaeaea;
  text-align:center;
  overflow-x:hidden;
  min-height:100vh;
  position:relative;
}

/* ستاره‌ها */
.star{
  position:fixed;
  width:2px;
  height:2px;
  border-radius:50%;
  background:#fff;
  opacity:0.8;
  z-index:0;
  pointer-events:none;
  animation:twinkle 3s infinite;
}
@keyframes twinkle{
  0%,100%{opacity:0.2;}
  50%{opacity:1;}
}

header{
  padding:40px 0 10px;
}
h1{
  color:#fff;
  font-size:2.8rem;
  font-weight:800;
  text-shadow:0 0 7px var(--neon-1),0 0 15px var(--neon-1),0 0 25px var(--neon-2),0 0 40px var(--neon-2),0 0 70px var(--neon-2);
  cursor:pointer;
  transition:all 0.3s ease;
}
h1:hover{
  transform:scale(1.03);
  text-shadow:0 0 10px var(--neon-1),0 0 30px var(--neon-1),0 0 50px var(--neon-2),0 0 80px var(--neon-2),0 0 120px var(--neon-2);
}

/* کارت‌ها */
.card{
  display:flex;
  flex-direction:row;
  gap:16px;
  align-items:center;
  justify-content:center;
  background:rgba(255,255,255,0.03);
  border-radius:14px;
  padding:20px;
  max-width:700px;
  margin:40px auto;
  box-shadow:0 6px 22px rgba(0,0,0,0.45);
}
.profile-pic{
  width:100px;
  height:100px;
  border-radius:50%;
  background:var(--neon-1);
  border:3px solid var(--neon-2);
  box-shadow:0 0 10px var(--neon-1),0 0 20px var(--neon-2),0 0 30px var(--neon-1);
  flex-shrink:0;
  animation:glow 2.5s infinite alternate;
}
@keyframes glow{
  0%{ box-shadow:0 0 8px var(--neon-1),0 0 16px var(--neon-2);}
  50%{ box-shadow:0 0 15px var(--neon-1),0 0 25px var(--neon-2);}
  100%{ box-shadow:0 0 12px var(--neon-1),0 0 20px var(--neon-2);}
}
.card p{
  font-size:1.05rem;
  line-height:1.6;
  color:#dfe;
  text-align:right;
}

/* پروژه‌ها */
.project-card{
  margin:20px auto;
  max-width:700px;
  background:rgba(255,255,255,0.03);
  border-radius:14px;
  padding:20px;
  box-shadow:0 6px 22px rgba(0,0,0,0.45);
  transition: transform 0.2s, box-shadow 0.2s;
}
.project-card:hover{
  transform:translateY(-6px);
  box-shadow:0 14px 40px rgba(0,0,0,0.55);
}
.project-title{
  font-size:1.3rem;
  font-weight:700;
  color:var(--neon-1);
  margin-bottom:8px;
}
.project-desc{
  font-size:1rem;
  color:#cfdada;
  margin-bottom:10px;
}
.project-tech{
  font-size:0.9rem;
  color:#ffd399;
  font-weight:700;
}

/* فرم ارتباط */
.contact-card{
  max-width:700px;
  margin:40px auto;
  background:rgba(255,255,255,0.03);
  border-radius:14px;
  padding:30px 20px;
}
.contact-card input, .contact-card textarea{
  width:90%;
  padding:10px;
  border-radius:10px;
  border:1px solid rgba(0,255,255,0.1);
  background:rgba(255,255,255,0.03);
  color:#eaeaea;
  font-family:inherit;
  margin-bottom:12px;
}
.btn-submit{
  background:linear-gradient(135deg,var(--neon-1),var(--neon-2));
  color:#000;
  border:none;
  padding:10px 20px;
  border-radius:30px;
  font-weight:800;
  cursor:pointer;
  box-shadow:0 0 10px rgba(255,0,204,0.25);
  transition:0.3s;
  animation:neon-flicker 1.5s infinite alternate;
}
.btn-submit:hover{
  transform:scale(1.05);
  box-shadow:0 0 20px rgba(255,0,204,0.45);
}
@keyframes neon-flicker {
  0%, 100% { box-shadow:0 0 8px var(--neon-2),0 0 12px var(--neon-1);}
  50% { box-shadow:0 0 15px var(--neon-2),0 0 25px var(--neon-1);}
  70% { box-shadow:0 0 5px var(--neon-2),0 0 10px var(--neon-1);}
}

/* Footer */
footer{margin-top:30px;padding:18px;color:#bfcfcf;}
footer a{color:var(--neon-1);}
.social-buttons{display:flex;gap:15px;justify-content:center;margin-top:15px;}
.social-buttons a{display:flex;align-items:center;justify-content:center;width:50px;height:50px;background:#111;color:#fff;border-radius:50%;transition:all 0.3s ease;text-decoration:none;box-shadow:0 0 10px rgba(0,255,255,0.2),0 0 15px rgba(255,0,204,0.2);}
.social-buttons a:hover{transform: translateY(-5px) scale(1.1);box-shadow:0 0 15px #00ffff,0 0 25px #ff00cc,0 0 35px #ff00cc;}
.social-buttons svg{width:24px;height:24px;}

@media(max-width:720px){
  .card,.project-card,.contact-card{width:90%;flex-direction:column;}
  .profile-pic{width:80px;height:80px;}
}
</style>
</head>
<body>
<header>
  <h1>پروژه‌های من</h1>
</header>

<script>
for(let i=0;i<150;i++){
  const s=document.createElement('div');
  s.className='star';
  const size=1+Math.random()*2;
  s.style.width=s.style.height=size+'px';
  s.style.left=(Math.random()*100)+'vw';
  s.style.top=(Math.random()*100)+'vh';
  s.style.opacity=(0.2+Math.random()*0.8).toString();
  document.body.appendChild(s);
}
</script>

<!-- بخش درباره من -->
<section id="about-me">
  <div class="card">
    <div class="profile-pic"></div>
    <p>سلام! من <strong>آرسام خوش اخلاق</strong> هستم — توسعه‌دهنده وب، ماینکرفت‌باز و سازنده سرورهای اختصاصی. عاشق طراحی نئون و ایجاد تجربه‌های جذاب برای کاربران هستم.</p>
  </div>
</section>

<!-- بخش پروژه‌ها -->
<section id="projects-section">
  <div class="project-card">
    <div class="project-title">🌍 سرور ماینکرفت LAVA JUMP</div>
    <div class="project-desc">رقابت کن و از سرور ما لذت ببر! آدرس سرور و وضعیت آنلاین در زیر نمایش داده می‌شود.</div>
    <div class="server-terminal">
      <div class="ip" id="server-ip">lavajumptest.falixsrv.me</div>
      <button class="btn-copy" id="copy-btn">📋 کپی</button>
    </div>
    <div id="player-count">در حال بررسی وضعیت سرور...</div>
  </div>
  <div class="project-card">
    <div class="project-title">سایت شخصی 🌐</div>
    <div class="project-desc">طراحی و پیاده‌سازی سایت شخصی با تمرکز روی ظاهر نئون و تجربه‌ی کاربری.</div>
    <div class="project-tech">HTML / CSS / JavaScript</div>
  </div>
  <div class="project-card">
    <div class="project-title">ادیت ویدیو 🎬</div>
    <div class="project-desc">ادیت و تولید محتوا برای یوتیوب و شبکه‌های اجتماعی.</div>
    <div class="project-tech">CapCut / Filmora / Shotcut</div>
  </div>
</section>

<!-- فرم ارتباط -->
<section id="contact-section">
  <div class="contact-card">
    <form id="contact-form" action="https://formspree.io/f/mnngzdlw" method="POST">
      <input type="text" name="name" placeholder="نام شما" required>
      <input type="email" name="email" placeholder="example@example.com" required>
      <textarea name="message" rows="4" placeholder="متن پیام..." required></textarea>
      <button class="btn-submit" type="submit">ارسال ✉</button>
    </form>
  </div>
</section>

<!-- Footer -->
<footer>
  <p>© 2025 تمامی حقوق محفوظ است — آرسام خوش اخلاق</p>
  <div class="social-buttons">
    <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank" aria-label="اینستاگرام">
      <!-- SVG اینستا -->
    </a>
    <a href="https://github.com/arsamkhosh" target="_blank" aria-label="گیت‌هاب">
      <!-- SVG گیت‌هاب -->
    </a>
  </div>
</footer>

<script>
// Server IP
const serverIP = document.getElementById('server-ip').textContent.trim();
const playerCountEl = document.getElementById('player-count');
const apiURL = `https://api.mcstatus.io/v2/status/java/${serverIP}`;
async function fetchServerStatus() {
  try {
    playerCountEl.textContent = 'در حال ارتباط با سرور...';
    playerCountEl.className = '';
    const response = await fetch(apiURL);
    const data = await response.json();
    if(data.online){
      playerCountEl.textContent = `✅ سرور آنلاین! بازیکنان: ${data.players.online} نفر`;
      playerCountEl.classList.add('online');
    } else {
      playerCountEl.textContent = '❌ سرور در حال حاضر آفلاین است.';
      playerCountEl.classList.add('offline');
    }
  } catch(e){
    console.error(e);
    playerCountEl.textContent = '❗ مشکلی در اتصال به سرور رخ داد.';
    playerCountEl.classList.add('offline');
  }
}
fetchServerStatus();
setInterval(fetchServerStatus,30000);

// Copy IP
document.getElementById('copy-btn').addEventListener('click', ()=>{
  navigator.clipboard.writeText(serverIP);
  alert('آدرس سرور کپی شد: ' + serverIP);
});
</script>

</body>
</html>
