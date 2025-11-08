<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>پروژه‌های من</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700;800&display=swap" rel="stylesheet">
<style>
:root{
  --neon-1:#00ffff; /* فیروزه‌ای */
  --neon-2:#ff00cc; /* صورتی/بنفش */
  --accent-grad:linear-gradient(135deg,var(--neon-1),var(--neon-2));
  --bg-dark-start:#0a0a0a;
  --bg-dark-end:#111111;
}

/* ---------- Body ---------- */
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
  z-index:1;
}

/* ---------- Header & Special Neon Effect (Enhanced) ---------- */
header{
  padding:40px 0 10px;
}
h1{
  /* افکت نئون قوی‌تر */
  color:#fff; /* رنگ متن داخلی سفید برای درخشش بیشتر */
  font-size:2.8rem;
  font-weight:800;
  text-shadow:
    0 0 7px var(--neon-1),     /* لایه نزدیک و کوچک */
    0 0 15px var(--neon-1),
    0 0 25px var(--neon-2),
    0 0 40px var(--neon-2),
    0 0 70px var(--neon-2);   /* لایه دور و پخش‌تر */
  cursor:pointer;
  transition:all 0.3s ease;
}
h1:hover{
  transform:scale(1.03);
  text-shadow:
    0 0 10px var(--neon-1),
    0 0 30px var(--neon-1),
    0 0 50px var(--neon-2),
    0 0 80px var(--neon-2),
    0 0 120px var(--neon-2);
}

/* ---------- Neon Divider (جداکننده نئون) ---------- */
.neon-divider{
  width:70%;
  max-width:600px;
  height:2px;
  background:var(--accent-grad);
  margin:40px auto;
  border:none;
  box-shadow:
    0 0 10px var(--neon-1),
    0 0 20px var(--neon-2);
}

/* ---------- About Me ---------- */
#about-me{
  margin:40px auto;
  max-width:700px;
}
.about-card{
  display:flex;
  gap:16px;
  align-items:center;
  background:rgba(255,255,255,0.03);
  border-radius:14px;
  padding:20px;
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
.about-card p{
  font-size:1.05rem;
  line-height:1.6;
  color:#dfe;
}

/* ---------- Projects ---------- */
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

/* ---------- Server Terminal ---------- */
.server-terminal{
  background:#000;
  border-radius:10px;
  border:1px solid rgba(0,255,255,0.12);
  padding:12px;
  font-family:ui-monospace,Monaco,"Roboto Mono",monospace;
  color:#00ff99;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:10px;
}
#player-count.online{
  color:var(--neon-1);
  font-weight:700;
}
#player-count.offline{
  color:var(--neon-2);
  font-weight:700;
}
.btn-copy{
  background:var(--accent-grad);
  border:none;
  color:#000;
  padding:6px 10px;
  border-radius:8px;
  cursor:pointer;
  font-weight:700;
  transition:all 0.15s ease;
}
.btn-copy:hover{
  transform:translateY(-2px);
  box-shadow:0 8px 20px rgba(255,0,204,0.1);
}

/* ---------- Contact ---------- */
.contact-card{
  max-width:700px;
  margin:20px auto;
  background:rgba(255,255,255,0.03);
  border-radius:14px;
  padding:20px;
}
.contact-card input, .contact-card textarea{
  width:90%;
  padding:10px;
  border-radius:10px;
  border:1px solid rgba(0,255,255,0.1);
  background:rgba(255,255,255,0.03);
  color:#eaeaea;
  font-family:inherit;
  margin-bottom:10px;
}
.btn-submit{
  background:var(--accent-grad);
  color:#000;
  border:none;
  padding:8px 18px;
  border-radius:30px;
  font-weight:800;
  cursor:pointer;
  box-shadow:0 0 10px rgba(255,0,204,0.25);
  transition:0.3s;
}
.btn-submit:hover{
  transform:scale(1.05);
  box-shadow:0 0 20px rgba(255,0,204,0.45);
}

/* ---------- Footer ---------- */
footer{
  margin-top:30px;
  padding:18px;
  color:#bfcfcf;
}
footer a{color:var(--neon-1);}
.social-buttons{
  display:flex;
  gap:15px;
  justify-content:center;
  margin-top:15px;
}
.social-buttons a{
  display:flex;
  align-items:center;
  justify-content:center;
  width:50px;
  height:50px;
  background:#111;
  color:#fff;
  border-radius:50%;
  transition:all 0.3s ease;
  text-decoration:none;
  box-shadow: 0 0 10px rgba(0,255,255,0.2), 0 0 15px rgba(255,0,204,0.2);
}
.social-buttons a:hover{
  transform: translateY(-5px) scale(1.1);
  box-shadow:0 0 15px #00ffff,0 0 25px #ff00cc,0 0 35px #ff00cc;
}
.social-buttons svg{
  width:24px;
  height:24px;
}

/* ---------- Responsive ---------- */
@media(max-width:720px){
  .about-card, .project-card, .contact-card{width:90%;}
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

<section id="about-me">
  <div class="about-card">
    <div class="profile-pic"></div>
    <p>سلام! من <strong>آرسام خوش اخلاق</strong> هستم — توسعه‌دهنده وب، ماینکرفت‌باز و سازنده سرورهای اختصاصی.</p>
  </div>
</section>

<hr class="neon-divider">

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

<section id="contact-section">
  <hr class="neon-divider">
  <div class="contact-card">
    <form id="contact-form" action="https://formspree.io/f/mnngzdlw" method="POST">
      <input type="text" name="name" placeholder="نام شما" required>
      <input type="email" name="email" placeholder="example@example.com" required>
      <textarea name="message" rows="4" placeholder="متن پیام..." required></textarea>
      <button class="btn-submit" type="submit">ارسال ✉</button>
    </form>
  </div>
</section>

<footer>
  <p>© 2025 تمامی حقوق محفوظ است — آرسام خوش اخلاق</p>
  <div class="social-buttons">
            <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank" aria-label="اینستاگرام">
      <svg viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 190.5c-41.6 0-75.6-33.9-75.6-75.6s33.9-75.6 75.6-75.6 75.6 33.9 75.6 75.6-33.9 75.6-75.6 75.6zm146.4-194.3c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27s12.1-27 27-27c14.9 0 27 12.1 27 27zm76.1 27.2c-1.7-35.7-9.9-67.3-36.1-93.5-26.2-26.2-57.8-34.4-93.5-36.1-37-2.1-148.1-2.1-185.1 0-35.7 1.7-67.3 9.9-93.5 36.1s-34.4 57.8-36.1 93.5c-2.1 37-2.1 148.1 0 185.1 1.7 35.7 9.9 67.3 36.1 93.5s57.8 34.4 93.5 36.1c37 2.1 148.1 2.1 185.1 0 35.7-1.7 67.3-9.9 93.5-36.1s34.4-57.8 36.1-93.5c2.1-37 2.1-148.1 0-185.1zm-48.3 232c-7.8 19.5-22.9 34.6-42.4 42.4-29.4 11.7-99.3 9-132.8 9s-103.4 2.6-132.8-9c-19.5-7.8-34.6-22.9-42.4-42.4-11.7-29.4-9-99.3-9-132.8s-2.6-103.4 9-132.8c7.8-19.5 22.9-34.6 42.4-42.4 29.4-11.7 99.3-9 132.8-9s103.4-2.6 132.8 9c19.5 7.8 34.6 22.9 42.4 42.4 11.7 29.4 9 99.3 9 132.8s2.7 103.4-9 132.8z"/></svg>
    </a>

        <a href="https://github.com/arsamkhosh" target="_blank" aria-label="گیت‌هاب">
      <svg viewBox="0 0 496 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-2.9 0-5.2-1.6-5.2-3.6 0-2 2.3-3.6 5.2-3.6 2.9 0 5.2 1.6 5.2 3.6zm-33.5-6.2c-.7 1.5 1.5 3.2 5.1 3.6 3.6.4 7.2-.4 7.9-1.9.7-1.5-1.5-3.2-5.1-3.6-3.6-.4-7.2.4-7.9 1.9zM248 8C111 8 0 119 0 256c0 110.3 71.3 203.8 170 237 12.4 2.3 17-5.4 17-12v-42.1c-69.1 15-83.8-33.2-83.8-33.2-11.2-28.5-27.3-36.2-27.3-36.2-22.3-15.2 1.7-14.9 1.7-14.9 24.6 1.7 37.6 25.3 37.6 25.3 21.9 37.5 57.5 26.7 71.5 20.4 2.2-15.8 8.6-26.7 15.6-32.8-55-6.2-112.5-27.4-112.5-121.8 0-27 9.6-49 25.4-66.3-2.6-6.2-11-31.3 2.4-65 0 0 20.7-6.6 67.8 25.2 19.7-5.5 40.8-8.3 61.8-8.4 21 0 42.1 2.9 61.8 8.4 47.1-31.8 67.8-25.2 67.8-25.2 13.5 33.8 5 58.8 2.4 65 15.8 17.3 25.4 39.3 25.4 66.3 0 94.7-57.8 115.6-112.9 121.8 8.8 7.6 16.7 22.5 16.7 45.4v67.4c0 6.6 4.6 14.3 17 12C424.7 459.8 496 366.3 496 256 496 119 385 8 248 8z"/></svg>
    </a>

        <a href="https://twitter.com/username" target="_blank" aria-label="توییتر">
      <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M459.4 151.7c.3 4.1 .3 8.3 .3 12.4 0 126.7-96.5 273-273 273-54.3 0-104.8-15.9-147.3-43.1 7.6 .9 15.1 1.3 23 .1 45.2-4 86.8-24.5 119.7-58.5-42.2-.8-77.9-28.7-90.1-67 5.9 .9 11.9 1.3 18 .1-44.3-8.9-77.5-47.9-77.5-94.8v-1.3c13 7.2 28 11.7 43.8 12.3-26-17.4-43-47-43-80.5 0-17.8 4.8-34.5 13.1-48.9 47.6 58.3 118.7 96.6 198.8 100.6-1.6-7-2.5-14.2-2.5-21.7 0-52.9 42.9-95.8 95.8-95.8 27.6 0 52.5 11.7 70 30.4 21.8-4.3 42.4-12.3 60.9-23.3-7.2 22.5-22.5 41.4-42.3 53.3 19.3-2.3 37.8-7.5 54.9-15.2-12.8 19.2-28.8 36.1-47.2 49.6z"/></svg>
    </a>
  </div>
</footer>

<script>
// Server IP from HTML
const serverIP = document.getElementById('server-ip').textContent.trim();
const playerCountEl = document.getElementById('player-count');
const apiURL = `https://api.mcstatus.io/v2/status/java/${serverIP}`;

// Function to fetch and display server status (Updated for real API)
async function fetchServerStatus() {
  try {
    playerCountEl.textContent = 'در حال ارتباط با سرور...';
    playerCountEl.className = '';

    const response = await fetch(apiURL);
    const data = await response.json();

    if (data.online) {
      const players = data.players.online;
      playerCountEl.textContent = `✅ سرور آنلاین! بازیکنان: ${players} نفر`;
      playerCountEl.classList.add('online');
    } else {
      playerCountEl.textContent = '❌ سرور در حال حاضر آفلاین است.';
      playerCountEl.classList.add('offline');
    }
  } catch (error) {
    console.error("Error fetching server status:", error);
    playerCountEl.textContent = '❗ مشکلی در اتصال به سرور رخ داد.';
    playerCountEl.classList.add('offline');
  }
}

// Initial fetch and set interval for updates (e.g., every 30 seconds)
fetchServerStatus();
setInterval(fetchServerStatus, 30000); 

// Copy IP
document.getElementById('copy-btn').addEventListener('click', () => {
  navigator.clipboard.writeText(serverIP);
  alert('آدرس سرور کپی شد: ' + serverIP);
});
</script>
</body>
</html>
