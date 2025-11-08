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
  position:relative;
}

/* ---------- ستاره‌ها ---------- */
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

/* ---------- هدر ---------- */
header{
  padding:40px 0 10px;
}
h1{
  color:var(--neon-1);
  font-size:2.3rem;
  text-shadow:0 0 20px var(--neon-1),0 0 40px var(--neon-2);
  cursor:pointer;
  transition:all 0.3s ease;
}
h1:hover{
  transform:scale(1.03);
  text-shadow:0 0 35px var(--neon-1),0 0 65px var(--neon-2);
}

/* ---------- About Me ---------- */
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

.about-card{
  display:flex;
  gap:14px;
  align-items:center;
  background:rgba(255,255,255,0.03);
  border-radius:12px;
  padding:16px;
  box-shadow:0 6px 22px rgba(0,0,0,0.45);
  transition:all 0.3s ease;
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

/* ---------- Contact Form ---------- */
.contact-card{
  background:rgba(255,255,255,0.03);
  border-radius:12px;
  padding:20px;
  box-shadow:0 6px 25px rgba(0,0,0,0.4);
}
.contact-card form{
  display:flex;
  flex-direction:column;
  gap:15px;
}
input,textarea{
  width:100%;
  padding:12px;
  border-radius:12px;
  border:1px solid rgba(0,255,255,0.1);
  background:rgba(255,255,255,0.05);
  color:#fff;
  font-family:inherit;
  text-align:right;
}
input::placeholder,textarea::placeholder{color:#aaa;}
input:focus,textarea:focus{
  border-color:var(--neon-1);
  box-shadow:0 0 12px var(--neon-1);
  outline:none;
}
.btn-submit{
  background:var(--accent-grad);
  color:#000;
  border:none;
  padding:10px 20px;
  border-radius:30px;
  font-weight:800;
  cursor:pointer;
  box-shadow:0 0 12px rgba(255,0,204,0.3);
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
.btn-submit:hover{
  transform:scale(1.05);
  box-shadow:0 0 20px rgba(255,0,204,0.45);
}
.success-message{
  display:none;
  margin-top:10px;
  color:#00ff88;
  font-weight:bold;
  text-shadow:0 0 8px #00ff88;
  animation:fadeIn 0.8s ease forwards;
}
@keyframes fadeIn{
  from{opacity:0;transform:translateY(5px);}
  to{opacity:1;transform:translateY(0);}
}

/* ---------- Footer ---------- */
footer{
  margin-top:30px;
  padding:18px;
  color:#bfcfcf;
}
footer a{color:var(--neon-1);}

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
  <div class="projects">
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

<!-- Social -->
<div class="social-buttons">
  <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank" aria-label="اینستاگرام">
    <!-- SVG اینستاگرام -->
  </a>
  <a href="https://github.com/username" target="_blank" aria-label="گیت‌هاب">
    <!-- SVG گیت‌هاب -->
  </a>
  <a href="https://twitter.com/username" target="_blank" aria-label="توییتر">
    <!-- SVG توییتر -->
  </a>
</div>

<!-- Footer -->
<footer>
  <p>© 2025 تمامی حقوق متعلق به آرسام خوش اخلاق است</p>
</footer>

<script>
/* ---------- Stars ---------- */
document.addEventListener('DOMContentLoaded', function(){
  const starCount = 150;
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

  /* ---------- Copy IP ---------- */
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
  setInterval(updatePlayers,10000);

  /* ---------- Contact Form ---------- */
  const form=document.getElementById('contact-form');
  const successMsg=document.getElementById('successMessage');
  form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const data=new FormData(form);
    const res=await fetch(form.action,{method:'POST',body:data,headers:{'Accept':'application/json'}});
    if(res.ok){form.reset();successMsg.style.display='block';setTimeout(()=>successMsg.style.display='none',4000);}
    else{alert('❌ خطا در ارسال پیام، دوباره امتحان کنید.');}
  });
});
</script>

</body>
</html>
