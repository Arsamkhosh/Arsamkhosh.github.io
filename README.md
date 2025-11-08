<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>پروژه‌های من</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
<style>
:root{
  --neon-1:#00ffff;
  --neon-2:#ff00cc;
}
body{
  margin:0;
  padding:0;
  font-family:'Vazirmatn',sans-serif;
  background:linear-gradient(135deg,#0a0a0a,#111);
  color:#eaeaea;
  overflow-x:hidden;
  position:relative;
  min-height:100vh;
  text-align:center;
}

/* ---------- Stars ---------- */
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

/* ---------- Header ---------- */
header{padding:40px 0 10px;}
h1{
  color:var(--neon-1);
  font-size:2.3rem;
  text-shadow:0 0 20px var(--neon-1),0 0 40px var(--neon-2);
  cursor:pointer;
  transition:all 0.3s ease;
}
h1:hover{transform:scale(1.03); text-shadow:0 0 35px var(--neon-1),0 0 65px var(--neon-2);}

/* ---------- Sections ---------- */
section{
  margin:40px auto;
  max-width:700px;
  background:rgba(255,255,255,0.03);
  border-radius:14px;
  padding:25px;
  box-shadow:0 8px 25px rgba(0,0,0,0.5);
  transition:0.3s;
}
section:hover{box-shadow:0 0 25px rgba(0,255,255,0.2);}

/* ---------- About Me ---------- */
#about-me h2{
  font-size:2rem;
  margin-bottom:18px;
  text-shadow:0 0 8px rgba(0,255,255,0.7),0 0 16px rgba(255,0,204,0.6);
}
#about-me .about-card{
  display:flex;
  align-items:center;
  gap:18px;
  padding:20px;
  border-radius:16px;
  background:rgba(255,255,255,0.03);
  box-shadow:0 5px 20px rgba(0,0,0,0.45);
  transition:all 0.3s ease;
}
#about-me .about-card:hover{
  box-shadow:0 0 20px rgba(0,255,255,0.3),0 0 30px rgba(255,0,204,0.3);
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
  0%{box-shadow:0 0 8px var(--neon-1),0 0 16px var(--neon-2);}
  50%{box-shadow:0 0 15px var(--neon-1),0 0 25px var(--neon-2);}
  100%{box-shadow:0 0 12px var(--neon-1),0 0 20px var(--neon-2);}
}
#about-me .about-text p{
  font-size:1.05rem;
  line-height:1.6;
  color:#dfe;
}

/* ---------- Projects ---------- */
.projects{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  gap:20px;
  margin-top:20px;
}
.project-card{
  padding:20px;
  border-radius:14px;
  background:rgba(255,255,255,0.03);
  box-shadow:0 6px 22px rgba(0,0,0,0.45);
  transition: transform 0.2s, box-shadow 0.2s;
}
.project-card:hover{
  transform:translateY(-6px);
  box-shadow:0 14px 40px rgba(0,0,0,0.55);
}
.project-title{
  font-size:1.2rem;
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
  gap:10px;
  align-items:center;
  justify-content:space-between;
  margin-top:10px;
}
.btn-copy{
  background:linear-gradient(135deg,var(--neon-1),var(--neon-2));
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

/* ---------- Contact Form ---------- */
.contact-card{
  background:rgba(255,255,255,0.03);
  border-radius:12px;
  padding:14px;
}
input,textarea{
  padding:8px; border-radius:10px; border:1px solid rgba(0,255,255,0.08);
  background:rgba(255,255,255,0.02); color:#eaeaea; font-family:inherit;
  width:100%;
}
input::placeholder,textarea::placeholder{color:#9fbaba;}
.btn-submit{
  padding:8px 10px; border-radius:10px; border:none;
  background:linear-gradient(135deg,var(--neon-1),var(--neon-2));
  color:#000; font-weight:700; cursor:pointer;
  transition:all 0.12s ease;
}
.btn-submit:hover{
  transform:translateY(-2px);
  box-shadow:0 8px 20px rgba(255,0,204,0.08);
  font-weight:800;
}
.success-message{
  display:none;
  margin-top:15px;
  color:#00ff88;
  font-weight:bold;
  text-shadow:0 0 8px #00ff88;
  animation:fadeIn 0.8s ease forwards;
}
@keyframes fadeIn{from{opacity:0;transform:translateY(5px);}to{opacity:1;transform:translateY(0);}}

/* ---------- Social Buttons ---------- */
.social-buttons {
  display:flex;
  gap:15px;
  justify-content:center;
  margin-top:25px;
  z-index:2;
  position:relative;
}
.social-buttons a {
  display:flex;
  align-items:center;
  justify-content:center;
  width:50px;
  height:50px;
  background:#111;
  color:#fff;
  border-radius:50%;
  transition: all 0.3s ease;
  text-decoration:none;
  box-shadow: 0 0 10px rgba(0,255,255,0.2), 0 0 15px rgba(255,0,204,0.2);
}
.social-buttons a:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 0 15px #00ffff, 0 0 25px #ff00cc, 0 0 35px #ff00cc;
  color:#fff;
}
.social-buttons svg {width:24px;height:24px;}

/* ---------- Footer ---------- */
footer{margin-top:30px;padding:18px;color:#bfcfcf;}
footer a{color:var(--neon-1);}

/* ---------- Responsive ---------- */
@media(max-width:720px){
  #about-me .about-card{flex-direction:column;text-align:center;}
  .profile-pic{width:80px;height:80px;}
  #about-me h2{font-size:1.6rem;}
  #about-me .about-text p{font-size:0.95rem;}
  .projects{grid-template-columns:1fr;}
}
</style>
</head>
<body>
<header>
  <h1>پروژه‌های من</h1>
</header>

<main>
<!-- About Me -->
<section id="about-me">
  <h2>درباره من</h2>
  <div class="about-card">
    <div class="profile-pic"></div>
    <div class="about-text">
      <p>سلام! من <strong>آرسام خوش اخلاق</strong> هستم — توسعه‌دهنده وب، ماینکرفت‌باز و سازنده سرورهای اختصاصی. اینجا نمونه‌کارها و راه‌های ارتباط با من قرار داره.</p>
    </div>
  </div>
</section>

<!-- Projects -->
<section id="projects-section">
  <h2>پروژه‌ها</h2>
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

<!-- Contact -->
<section id="contact-section">
  <h2>ارتباط با من</h2>
  <div class="contact-card">
    <form id="contact-form" action="https://formspree.io/f/mnngzdlw" method="POST">
      <input type="text" name="name" placeholder="نام شما" required>
      <input type="email" name="email" placeholder="example@example.com" required>
      <textarea name="message" rows="4" placeholder="متن پیام..." required></textarea>
      <button class="btn-submit" type="submit">ارسال ✉️</button>
      <p class="success-message" id="successMessage">✅ پیام با موفقیت ارسال شد!</p>
    </form>
  </div>
</section>

<!-- Social Buttons -->
<div class="social-buttons">
  <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank" aria-label="اینستاگرام">
    <svg viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 190.5c-41.6 0-75.6-33.9-75.6-75.6s33.9-75.6 75.6-75.6 75.6 33.9 75.6 75.6-33.9 75.6-75.6 75.6zm146.4-194.3c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27s12.1-27 27-27c14.9 0 27 12.1 27 27zm76.1 27.2c-1.7-35.7-9.9-67.3-36.1-93.5-26.2-26.2-57.8-34.4-93.5-36.1-37-2.1-148.1-2.1-185.1 0-35.7 1.7-67.3 9.9-93.5 36.1s-34.4 57.8-36.1 93.5c-2.1 37-2.1 148.1 0 185.1 1.7 35.7 9.9 67.3 36.1 93.5s57.8 34.4 93.5 36.1c37 2.1 148.1 2.1 185.1 0 35.7-1.7 67.3-9.9 93.5-36.1s34.4-57.8 36.1-93.5c2.1-37 2.1-148.1 0-185.1zm-48.3 232c-7.8 19.5-22.9 34.6-42.4 42.4-29.4 11.7-99.3 9-132.8 9s-103.4 2.6-132.8-9c-19.5-7.8-34.6-22.9-42.4-42.4-11.7-29.4-9-99.3-9-132.8s-2.6-103.4 9-132.8c7.8-19.5 22.9-34.6 42.4-42.4 29.4-11.7 99.3-9 132.8-9s103.4-2.6 132.8 9c19.5 7.8 34.6 22.9 42.4 42.4 11.7 29.4 9 99.3 9 132.8s2.7 103.4-9 132.8z"/></svg>
  </a>
  <a href="https://github.com/username" target="_blank" aria-label="گیت‌هاب">
    <svg viewBox="0 0 496 512" fill="currentColor"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-2.9 0-5.2-1.6-5.2-3.6 0-2 2.3-3.6 5.2-3.6 2.9 0 5.2 1.6 5.2 3.6zm-33.5-6.2c-.7 1.5 1.5 3.2 5.1 3.6 3.6.4 7.2-.4 7.9-1.9.7-1.5-1.5-3.2-5.1-3.6-3.6-.4-7.2.4-7.9 1.9zM244.8 8C109.1 8 0 117.1 0 252.8c0 108.9 70.8 201.4 169.2 234.2 12.3 2.3 16.8-5.3 16.8-11.8 0-5.8-.2-21-0.3-41.3-68.7 14.9-83.3-33.2-83.3-33.2-11.2-28.5-27.3-36.1-27.3-36.1-22.3-15.3 1.7-15 1.7-15 24.6 1.7 37.6 25.3 37.6 25.3 21.9 37.5 57.5 26.7 71.5 20.4 2.2-15.8 8.6-26.7 15.6-32.8-54.8-6.2-112.5-27.4-112.5-122 0-27 9.6-49 25.4-66.3-2.6-6.2-11-31.2 2.4-65 0 0 20.8-6.7 68.2 25.4 19.8-5.5 41-8.3 62.1-8.4 21 .1 42.2 2.9 62.1 8.4 47.4-32.1 68.2-25.4 68.2-25.4 13.5 33.8 5 58.8 2.4 65 15.8 17.3 25.4 39.3 25.4 66.3 0 94.9-57.8 115.7-112.8 121.8 8.8 7.6 16.7 22.6 16.7 45.5 0 32.8-.3 59.3-.3 67.3 0 6.6 4.4 14.3 16.9 11.8C425.2 454.2 496 361.7 496 252.8 496 117.1 386.9 8 244.8 8z"/></svg>
  </a>
</div>

</main>

<footer>
  © 2025 آرسام خوش اخلاق | <a href="#contact-section">ارتباط با ما</a>
</footer>

<script>
// ---------- Stars ----------
function createStars(num=150){
  for(let i=0;i<num;i++){
    const star = document.createElement('div');
    star.className='star';
    star.style.top=Math.random()*100+'vh';
    star.style.left=Math.random()*100+'vw';
    star.style.width=Math.random()*2+1+'px';
    star.style.height=star.style.width;
    document.body.appendChild(star);
  }
}
createStars();

// ---------- Copy IP ----------
document.getElementById('copy-btn').addEventListener('click',()=>{
  const ip = document.getElementById('server-ip').textContent;
  navigator.clipboard.writeText(ip);
  alert('آدرس سرور کپی شد: '+ip);
});

// ---------- Fake Server Status ----------
function updateServerStatus(){
  const count = Math.floor(Math.random()*100); // شبیه سازی بازیکن آنلاین
  document.getElementById('player-count').textContent = `تعداد بازیکن آنلاین: ${count}`;
}
updateServerStatus();
setInterval(updateServerStatus,10000);

// ---------- Contact Form ----------
const form = document.getElementById('contact-form');
form.addEventListener('submit',e=>{
  e.preventDefault();
  fetch(form.action,{
    method:'POST',
    body:new FormData(form),
    headers:{'Accept':'application/json'}
  }).then(response=>{
    if(response.ok){
      document.getElementById('successMessage').style.display='block';
      form.reset();
    }else{alert('خطا در ارسال پیام');}
  }).catch(()=>alert('خطا در ارسال پیام'));
});
</script>
</body>
</html>
