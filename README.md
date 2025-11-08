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
  --accent-grad:linear-gradient(135deg,var(--neon-1),var(--neon-2));
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
}
header{padding:40px 0 10px;}
h1{
  color:var(--neon-1);
  font-size:2.3rem;
  text-shadow:0 0 20px var(--neon-1),0 0 40px var(--neon-2);
  cursor:pointer;
  transition:all 0.3s ease;
}
h1:hover{transform:scale(1.03); text-shadow:0 0 35px var(--neon-1),0 0 65px var(--neon-2);}
h2{
  color:var(--neon-1);
  font-size:1.6rem;
  margin-bottom:10px;
  text-shadow:0 0 10px rgba(0,255,255,0.6);
  transition:all 0.3s ease;
}
h2:hover{transform:scale(1.04); text-shadow:0 0 20px rgba(0,255,255,0.9),0 0 30px rgba(255,0,204,0.6);}
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
.about-card, .contact-card, .project-card, .server-terminal{
  background:rgba(255,255,255,0.03);
  border-radius:12px;
  padding:16px;
  margin:10px 0;
  box-shadow:0 6px 22px rgba(0,0,0,0.45);
  transition:all 0.3s ease;
}
.about-card{display:flex;gap:14px;align-items:center;}
.profile-pic{
  width:82px;height:82px;
  border-radius:50%;
  background:var(--neon-1);
  border:3px solid var(--neon-2);
}
.project-title{color:var(--neon-1);font-weight:700;margin-bottom:8px;}
.project-desc{color:#cfdada;margin-bottom:10px;line-height:1.5;}
.project-tech{color:#ffd399;font-weight:700;font-size:0.9rem;}
.server-terminal{display:flex;justify-content:space-between;align-items:center;font-family:ui-monospace,Menlo,Monaco,Roboto Mono,Vazir,monospace;color:#00ff99;border:1px solid rgba(0,255,255,0.12);padding:12px;}
.btn-copy{
  background:var(--accent-grad);
  color:#000;
  border:none;
  padding:8px 10px;
  border-radius:8px;
  font-weight:700;
  cursor:pointer;
  transition:0.2s;
}
.btn-copy:hover{transform:translateY(-3px);box-shadow:0 12px 30px rgba(255,0,204,0.10);}
#player-count{color:#7cff7c;margin-top:10px;font-weight:700;text-align:center;}
form{display:flex;flex-direction:column;gap:10px;align-items:center;}
input,textarea{
  width:90%;
  padding:10px 12px;
  border-radius:10px;
  border:1px solid rgba(0,255,255,0.1);
  background:rgba(255,255,255,0.03);
  color:inherit;
  font-family:inherit;
  text-align:right;
}
input::placeholder,textarea::placeholder{color:#aaa;}
input:focus,textarea:focus{border-color:var(--neon-1);box-shadow:0 0 10px rgba(0,255,255,0.4);outline:none;}
.btn-submit{
  background:var(--accent-grad);
  color:#000;
  border:none;
  padding:8px 18px;
  border-radius:30px;
  font-weight:800;
  font-size:0.9rem;
  cursor:pointer;
  box-shadow:0 0 10px rgba(255,0,204,0.25);
  position:relative;
  overflow:hidden;
  transition:0.3s;
}
.btn-submit::before{
  content:"";
  position:absolute;
  top:0;
  left:-100%;
  width:100%;
  height:100%;
  background:rgba(255,255,255,0.3);
  transform:skewX(-25deg);
  transition:0.4s;
}
.btn-submit:hover::before{left:100%;}
.btn-submit:hover{transform:scale(1.05);box-shadow:0 0 20px rgba(255,0,204,0.45);}
.success-message{
  display:none;
  margin-top:15px;
  color:#00ff88;
  font-weight:bold;
  text-shadow:0 0 8px #00ff88;
  animation:fadeIn 0.8s ease forwards;
}
@keyframes fadeIn{from{opacity:0;transform:translateY(5px);}to{opacity:1;transform:translateY(0);}}
footer{margin-top:30px;padding:18px;color:#bfcfcf;}
footer a{color:var(--neon-1);}
.projects{display:grid;grid-template-columns:1fr;gap:18px;}
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
    <div>
      <p>سلام! من <strong>آرسام خوش اخلاق</strong> هستم — توسعه‌دهنده وب، ماینکرفت‌ باز و سازنده سرورهای اختصاصی. اینجا نمونه‌کارها و راه‌های ارتباط با من قرار داره.</p>
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

</main>

<footer>
  <p>© 2025 تمامی حقوق محفوظ است</p>
  <p><a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank">اینستاگرام من</a></p>
</footer>

<script>
/* Copy IP */
document.getElementById('copy-btn').addEventListener('click', ()=>{
  const ip = document.getElementById('server-ip').textContent.trim();
  navigator.clipboard.writeText(ip).then(()=>alert('✅ آی‌پی کپی شد: '+ip));
});

/* Server status */
async function updatePlayers(){
  const countEl = document.getElementById('player-count');
  const ip = document.getElementById('server-ip').textContent.trim();
  countEl.textContent='در حال بررسی وضعیت سرور...';
  try{
    const res = await fetch('https://api.mcsrvstat.us/2/'+encodeURIComponent(ip));
    const data = await res.json();
    if(data.online===false){countEl.textContent='❌ سرور آفلاین است';}
    else{
      const online = data.players?.online ?? 0;
      const max = data.players?.max ?? 0;
      countEl.textContent=`🎮 بازیکنان آنلاین: ${online}/${max}`;
    }
  }catch{countEl.textContent='❌ خطا در دریافت وضعیت سرور';}
}
updatePlayers();
setInterval(updatePlayers,60000);

/* Contact form */
const form=document.getElementById('contact-form');
const successMsg=document.getElementById('successMessage');
form.addEventListener('submit',async(e)=>{
  e.preventDefault();
  const data=new FormData(form);
  const res=await fetch(form.action,{method:'POST',body:data,headers:{'Accept':'application/json'}});
  if(res.ok){form.reset();successMsg.style.display='block';setTimeout(()=>successMsg.style.display='none',4000);}
  else{alert('❌ خطا در ارسال پیام، دوباره امتحان کنید.');}
});
</script>
<style>
/* ----------------- About Me بزرگتر ----------------- */
#about-me .about-card{
  padding:25px;
}
#about-me h2{
  font-size:2.2rem;
  margin-bottom:20px;
}

/* ----------------- پروژه‌ها کنار هم ----------------- */
.projects{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap:20px;
  margin-top:20px;
}

/* ----------------- کارت پروژه ----------------- */
.project-card{
  padding:20px;
  border-radius:14px;
  background:rgba(255,255,255,0.03);
  box-shadow:0 6px 22px rgba(0,0,0,0.45);
  transition: transform 0.2s, box-shadow 0.2s;
}
.project-card:hover{
  transform: translateY(-6px);
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

/* ----------------- ریسپانسیو ----------------- */
@media(max-width:720px){
  #about-me h2{font-size:1.8rem;}
  .projects{grid-template-columns:1fr;}
}
</style>
<style>
/* ---------- About Me ---------- */
#about-me h2{
  font-size:2.2rem;
  margin-bottom:20px;
  text-shadow:0 0 10px rgba(0,255,255,0.7), 0 0 20px rgba(255,0,204,0.6);
}

#about-me .about-card{
  display:flex;
  align-items:center;
  gap:20px;
  padding:25px;
  border-radius:16px;
  background:rgba(255,255,255,0.03);
  box-shadow:0 6px 25px rgba(0,0,0,0.5);
  transition:all 0.3s ease;
}
#about-me .about-card:hover{
  box-shadow:0 0 25px rgba(0,255,255,0.3), 0 0 40px rgba(255,0,204,0.3);
}

/* ---------- Profile Pic (دایره نئون) ---------- */
.profile-pic{
  width:120px;
  height:120px;
  border-radius:50%;
  background:var(--neon-1);
  border:4px solid var(--neon-2);
  box-shadow: 0 0 15px var(--neon-1), 0 0 25px var(--neon-2), 0 0 40px var(--neon-1);
  flex-shrink:0;
  animation: glow 2.5s infinite alternate;
}

/* افکت نئون متحرک */
@keyframes glow{
  0%{ box-shadow:0 0 10px var(--neon-1), 0 0 20px var(--neon-2); }
  50%{ box-shadow:0 0 25px var(--neon-1), 0 0 40px var(--neon-2); }
  100%{ box-shadow:0 0 15px var(--neon-1), 0 0 30px var(--neon-2); }
}

/* ---------- متن About Me ---------- */
#about-me .about-text p{
  font-size:1.1rem;
  line-height:1.7;
  color:#dfe;
}

/* ---------- ریسپانسیو ---------- */
@media(max-width:720px){
  #about-me .about-card{
    flex-direction:column;
    text-align:center;
  }
  .profile-pic{
    width:100px;
    height:100px;
  }
  #about-me h2{
    font-size:1.8rem;
  }
  #about-me .about-text p{
    font-size:1rem;
  }
}
</style>
<style>
/* ---------- About Me ---------- */
#about-me h2{
  font-size:2rem;
  margin-bottom:18px;
  text-shadow:0 0 8px rgba(0,255,255,0.7), 0 0 16px rgba(255,0,204,0.6);
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
  box-shadow:0 0 20px rgba(0,255,255,0.3), 0 0 30px rgba(255,0,204,0.3);
}

/* ---------- Profile Pic (دایره نئون) ---------- */
.profile-pic{
  width:100px;
  height:100px;
  border-radius:50%;
  background:var(--neon-1);
  border:3px solid var(--neon-2);
  box-shadow: 0 0 10px var(--neon-1), 0 0 20px var(--neon-2), 0 0 30px var(--neon-1);
  flex-shrink:0;
  animation: glow 2.5s infinite alternate;
}

/* افکت نئون متحرک */
@keyframes glow{
  0%{ box-shadow:0 0 8px var(--neon-1), 0 0 16px var(--neon-2); }
  50%{ box-shadow:0 0 15px var(--neon-1), 0 0 25px var(--neon-2); }
  100%{ box-shadow:0 0 12px var(--neon-1), 0 0 20px var(--neon-2); }
}

/* ---------- متن About Me ---------- */
#about-me .about-text p{
  font-size:1.05rem;
  line-height:1.6;
  color:#dfe;
}

/* ---------- ریسپانسیو ---------- */
@media(max-wi
       <style>
:root{
  --neon-1:#00ffff;
  --neon-2:#ff00cc;
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

/* ---------- Responsive ---------- */
@media(max-width:720px){
  #about-me .about-card{flex-direction:column;text-align:center;}
  .profile-pic{width:80px;height:80px;}
  #about-me h2{font-size:1.6rem;}
  #about-me .about-text p{font-size:0.95rem;}
  .projects{grid-template-columns:1fr;}
}
</style>

<script>
/* ---------- Stars Creation ---------- */
function createStars(count=70){
  for(let i=0;i<count;i++){
    const s=document.createElement('div');
    s.className='star';
    const size=1+Math.random()*2;
    s.style.width=s.style.height=size+'px';
    s.style.left=(Math.random()*100)+'vw';
    s.style.top=(Math.random()*100)+'vh';
    s.style.opacity=(0.2+Math.random()*0.8).toString();
    document.body.appendChild(s);
  }
}
createStars();

/* ---------- Copy IP ---------- */
document.addEventListener('DOMContentLoaded',()=> {
  const copyBtn=document.getElementById('copy-btn');
  if(copyBtn){
    copyBtn.addEventListener('click',()=> {
      const ip=document.getElementById('server-ip').textContent.trim();
      navigator.clipboard.writeText(ip).then(()=> {
        alert('آی‌پی کپی شد: '+ip);
      });
    });
  }

  /* ---------- Server Players ---------- */
  async function updatePlayers(){
    const countEl=document.getElementById('player-count');
    const ip=document.getElementById('server-ip').textContent.trim();
    countEl.textContent='در حال بررسی وضعیت سرور...';
    try{
      const res=await fetch('https://api.mcsrvstat.us/2/'+encodeURIComponent(ip));
      const data=await res.json();
      const online=data.players?.online ?? 0;
      const max=data.players?.max ?? (data.debug?.query?.max_players ?? 0);
      if(data.online===false){
        countEl.textContent='❌ سرور آفلاین است';
      }else{
        countEl.textContent=`🎮 بازیکنان آنلاین: ${online}/${max}`;
      }
    }catch(err){
      countEl.textContent='❌ خطا در دریافت وضعیت سرور';
      console.error(err);
    }
  }
  updatePlayers();
  setInterval(updatePlayers,10000); // آپدیت هر 10 ثانیه
});
</script>
<script>
document.addEventListener('DOMContentLoaded', function(){
  for(let i=0;i<70;i++){
    const s = document.createElement('div');
    s.className='star';
    const size = 1 + Math.random()*2;
    s.style.width = s.style.height = size + 'px';
    s.style.left = (Math.random()*100)+'vw';
    s.style.top = (Math.random()*100)+'vh';
    s.style.opacity = (0.2 + Math.random()*0.8).toString();
    document.body.appendChild(s);
  }
});
</script>
<style>
:root{
  --neon-1:#00ffff;
  --neon-2:#ff00cc;
}

/* ---------- کل صفحه ستاره دار ---------- */
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

/* ---------- Body ---------- */
body{
  margin:0;
  padding:0;
  min-height:100vh;
  background:linear-gradient(135deg,#0a0a0a,#111);
  color:#eaeaea;
  font-family:'Vazirmatn',sans-serif;
  overflow-x:hidden;
  position:relative;
  z-index:1;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function(){
  const starCount = 150; // تعداد ستاره‌ها
  for(let i=0;i<starCount;i++){
    const s = document.createElement('div');
    s.className='star';
    const size = 1 + Math.random()*2;
    s.style.width = s.style.height = size + 'px';
    s.style.left = (Math.random()*100)+'vw';
    s.style.top = (Math.random()*100)+'vh';
    s.style.opacity = (0.2 + Math.random()*0.8).toString();
    document.body.appendChild(s);
  }
});
</script>
<style>
<!-- Social Buttons (فقط یک مجموعه) -->
<div class="social-buttons">
  <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank" aria-label="اینستاگرام">
    <svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 190.5c-41.6 0-75.6-33.9-75.6-75.6s33.9-75.6 75.6-75.6 75.6 33.9 75.6 75.6-33.9 75.6-75.6 75.6zm146.4-194.3c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27s12.1-27 27-27c14.9 0 27 12.1 27 27zm76.1 27.2c-1.7-35.7-9.9-67.3-36.1-93.5-26.2-26.2-57.8-34.4-93.5-36.1-37-2.1-148.1-2.1-185.1 0-35.7 1.7-67.3 9.9-93.5 36.1s-34.4 57.8-36.1 93.5c-2.1 37-2.1 148.1 0 185.1 1.7 35.7 9.9 67.3 36.1 93.5s57.8 34.4 93.5 36.1c37 2.1 148.1 2.1 185.1 0 35.7-1.7 67.3-9.9 93.5-36.1s34.4-57.8 36.1-93.5c2.1-37 2.1-148.1 0-185.1zm-48.3 232c-7.8 19.5-22.9 34.6-42.4 42.4-29.4 11.7-99.3 9-132.8 9s-103.4 2.6-132.8-9c-19.5-7.8-34.6-22.9-42.4-42.4-11.7-29.4-9-99.3-9-132.8s-2.6-103.4 9-132.8c7.8-19.5 22.9-34.6 42.4-42.4 29.4-11.7 99.3-9 132.8-9s103.4-2.6 132.8 9c19.5 7.8 34.6 22.9 42.4 42.4 11.7 29.4 9 99.3 9 132.8s2.7 103.4-9 132.8z"/>
    </svg>
  </a>
  <a href="https://github.com/username" target="_blank" aria-label="گیت‌هاب">
    <svg width="24" height="24" viewBox="0 0 496 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-2.9 0-5.2-1.6-5.2-3.6 0-2 2.3-3.6 5.2-3.6 2.9 0 5.2 1.6 5.2 3.6zm-33.5-6.2c-.7 1.5 1.5 3.2 5.1 3.6 3.6.4 7.2-.4 7.9-1.9.7-1.5-1.5-3.2-5.1-3.6-3.6-.4-7.2.4-7.9 1.9zM244.8 8C109.1 8 0 117.1 0 252.8c0 108.9 70.8 201.4 169.2 234.2 12.3 2.3 16.8-5.3 16.8-11.8 0-5.8-.2-21-0.3-41.3-68.7 14.9-83.3-33.2-83.3-33.2-11.2-28.5-27.3-36.1-27.3-36.1-22.3-15.3 1.7-15 1.7-15 24.6 1.7 37.6 25.3 37.6 25.3 21.9 37.5 57.5 26.7 71.5 20.4 2.2-15.8 8.6-26.7 15.6-32.8-54.8-6.2-112.5-27.4-112.5-122 0-27 9.6-49 25.4-66.3-2.6-6.2-11-31.2 2.4-65 0 0 20.7-6.6 67.8 25.2 19.7-5.5 40.8-8.3 61.8-8.4 21 .1 42.1 2.9 61.9 8.4 47-31.8 67.6-25.2 67.6-25.2 13.5 33.8 5 58.8 2.4 65 15.8 17.3 25.3 39.3 25.3 66.3 0 94.8-57.8 115.7-112.8 121.9 8.8 7.6 16.7 22.5 16.7 45.4 0 32.8-.3 59.3-.3 67.4 0 6.5 4.4 14.2 16.9 11.8C425.2 454.2 496 361.7 496 252.8 496 117.1 386.9 8 251.2 8z"/>
    </svg>
  </a>
  <a href="https://twitter.com/username" target="_blank" aria-label="توییتر">
    <svg width="24" height="24" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M459.4 151.7c.3 4.2.3 8.4.3 12.7 0 129.7-98.7 279-279 279-55.5 0-107.2-16.2-150.6-44.1 7.7.9 15.5 1.2 23.6 1.2 46.1 0 88.7-15.7 122.5-42-43.1-.8-79.5-29.2-92-68 6.1.9 12.2 1.4 18.6 1.4 9 0 17.7-1.2 25.9-3.4-45-9-78.8-48.7-78.8-96.3v-1.2c13.2 7.3 28.3 11.8 44.4 12.4-26.1-17.4-43.3-47.2-43.3-80.8 0-17.7 4.7-34.2 13-48.5 48.5 59.5 121.1 98.7 202.9 102.8-1.7-7.2-2.7-14.7-2.7-22.4 0-54.3 44-98.3 98.3-98.3 28.3 0 53.9 12 71.8 31.4 22.4-4.2 43.4-12.6 62.3-24-7.4 23-23.1 42.4-43.8 54.7 19.8-2.2 38.6-7.6 56.1-15.3-13.1 19.5-29.6 36.7-48.5 50.4z"/>
    </svg>
  </a>
</div>

<style>
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

.social-buttons svg {
  width:24px;
  height:24px;
}
</style>

</body>
</html>
