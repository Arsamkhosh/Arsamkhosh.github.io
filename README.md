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
</body>
</html>
