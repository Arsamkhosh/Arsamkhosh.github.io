<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>صفحه شخصی من</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
<link rel="icon" href="https://api.iconify.design/fa-brands:minecraft.svg?color=%2300ffff" type="image/svg+xml">
<style>
:root{
  --neon-1:#00ffff;
  --neon-2:#ff00cc;
  --accent-grad:linear-gradient(135deg,var(--neon-1),var(--neon-2));
  --bg-dark-start:#050506;
  --bg-dark-end:#0f0f12;
  --trail-blue:#39f0ff;
  --trail-turq:#00c2d6;
}
*{box-sizing:border-box}
body{
  margin:0; padding:0;
  font-family:'Vazirmatn',sans-serif;
  background:linear-gradient(135deg,var(--bg-dark-start),var(--bg-dark-end));
  color:#e8f9f9;
  min-height:100vh;
  overflow-x:hidden;
  position:relative;
}

/* Stars (background) */
.star{
  position:fixed;
  width:2px; height:2px; border-radius:50%;
  background:#fff; opacity:0.8; z-index:0; pointer-events:none;
  animation:twinkle 3s infinite;
}
@keyframes twinkle{0%,100%{opacity:0.2;}50%{opacity:1;}}

/* Header */
header{padding:30px 0 6px; position:relative; z-index:5;}
h1{
  color:var(--neon-1); font-size:2.4rem; margin:0;
  text-shadow:0 0 18px var(--neon-1),0 0 38px var(--neon-2);
  display:inline-block; padding:6px 12px; border-radius:8px;
  cursor:default;
}

/* About */
#about-me{margin:28px auto; max-width:760px; z-index:5; position:relative;}
.about-card{
  display:flex; gap:16px; align-items:center;
  background:rgba(255,255,255,0.03); border-radius:14px;
  padding:18px; box-shadow:0 8px 30px rgba(0,0,0,0.5);
}
.profile-pic{
  width:96px; height:96px; border-radius:50%; background:linear-gradient(135deg,var(--trail-blue),var(--trail-turq));
  border:3px solid rgba(255,255,255,0.06);
  box-shadow:0 0 18px rgba(0,255,255,0.12),0 0 30px rgba(0,200,230,0.08);
  flex-shrink:0;
}
.about-card p{font-size:1.05rem; margin:0 6px; color:#dfe; line-height:1.6;}

/* Projects */
.project-card{
  margin:18px auto; max-width:760px; background:rgba(255,255,255,0.03);
  border-radius:14px; padding:18px; box-shadow:0 8px 30px rgba(0,0,0,0.45);
  transition:transform .18s, box-shadow .18s;
}
.project-card:hover{transform:translateY(-6px); box-shadow:0 18px 50px rgba(0,0,0,0.6);}

.project-title{font-size:1.25rem; font-weight:700; color:var(--neon-1); margin-bottom:6px;}
.project-desc{color:#cfdada; margin-bottom:8px;}
.project-tech{color:#ffd399; font-weight:700; font-size:.95rem}

/* Server terminal */
.server-terminal{
  background:#000;border-radius:10px;border:1px solid rgba(0,255,255,0.12);
  padding:10px;font-family:ui-monospace,monospace;color:#00ff99;
  display:flex;justify-content:space-between;align-items:center;margin-top:10px;
}
.btn-copy, .btn-submit{
  background:var(--accent-grad); border:none; color:#000; padding:7px 12px; border-radius:10px;
  cursor:pointer; font-weight:800; transition:all .15s ease; box-shadow:0 8px 20px rgba(255,0,204,0.08);
}
.btn-copy:hover{transform:translateY(-3px); box-shadow:0 12px 34px rgba(255,0,204,0.14)}

/* Contact */
.contact-card form{display:flex;flex-direction:column;gap:10px}
.contact-card input, .contact-card textarea{
  width:92%; padding:10px; border-radius:10px; border:1px solid rgba(0,255,255,0.08);
  background:rgba(255,255,255,0.03); color:#eaeaea; font-family:inherit; margin-inline:auto;
}

/* Social */
footer{margin-top:26px;padding:18px;color:#bfcfcf; z-index:5; position:relative}
footer a{color:var(--neon-1)}
.social-buttons{display:flex;gap:14px;justify-content:center;margin-top:12px}
.social-buttons a{
  display:flex;align-items:center;justify-content:center;width:50px;height:50px;background:#0b0b0c;color:#fff;border-radius:50%;
  transition:all .28s ease;text-decoration:none; box-shadow:0 0 10px rgba(0,255,255,0.12);
}
.social-buttons a:hover{
  transform: translateY(-6px) scale(1.08); background:var(--accent-grad); color:#000;
  box-shadow:0 0 20px var(--neon-1),0 0 30px var(--neon-2);
}

/* Mouse trail dots container (on top) */
#mouse-trail{position:fixed;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:40;overflow:visible}

/* responsive */
@media(max-width:720px){
  .about-card, .project-card, .contact-card{width:92%}
  .profile-pic{width:72px;height:72px;}
  h1{font-size:1.8rem}
}
</style>
</head>
<body>

<header>
  <h1 id="title">سایتی یرای اراعه پروزه ها</h1>
</header>

<!-- Stars -->
<script>
for(let i=0;i<140;i++){
  const s=document.createElement('div');
  s.className='star';
  const size=1+Math.random()*2;
  s.style.width=s.style.height=size+'px';
  s.style.left=(Math.random()*100)+'vw';
  s.style.top=(Math.random()*100)+'vh';
  s.style.opacity=(0.15+Math.random()*0.85).toString();
  s.style.transform='translateZ(0)';
  document.body.appendChild(s);
}
</script>

<!-- Mouse trail container -->
<div id="mouse-trail" aria-hidden="true"></div>

<section id="about-me">
  <div class="about-card">
    <div class="profile-pic" title="آدرباره من"></div>
    <p>سلام! من <strong>آرسام خوش اخلاق</strong> هستم — توسعه‌دهنده وب، ماینکرفت‌باز و سازنده سرورهای اختصاصی.</p>
  </div>
</section>

<section id="projects-section">
  <div class="project-card">
    <div class="project-title">پروژه ها  </div>
    <div class="project-desc">اینجا می‌تونی درباره من و تجربه‌ها و علاقه‌مندی‌هام بدونی.</div>
  </div>

  <div class="project-card">
    <div class="project-title">🌍 سرور ماینکرفت LAVA JUMP</div>
    <div class="project-desc">رقابت کن و از سرور ما لذت ببر! آدرس سرور و وضعیت آنلاین در زیر نمایش داده می‌شود.</div>
    <div class="server-terminal">
      <div style="display:flex;gap:12px;align-items:center">
        <div style="font-weight:700">آی‌پی:</div>
        <div class="ip" id="server-ip">lavajumptest.falixsrv.me</div>
      </div>
      <div style="display:flex;gap:10px;align-items:center">
        <button class="btn-copy" id="copy-btn"> کپی</button>
      </div>
    </div>
    <div id="player-count" style="margin-top:10px;color:#d6f9f2">در حال بررسی وضعیت سرور...</div>
  </div>

  <div class="project-card">
    <div class="project-title">سایت شخصی 🌐</div>
    <div class="project-desc">طراحی و پیاده‌سازی سایت شخصی با کمک خودم و دوستم.</div>
    <div class="project-tech">HTML / CSS / JavaScript</div>
  </div>

  <div class="project-card">
    <div class="project-title">ادیت ویدیو 🎬</div>
    <div class="project-desc">ادیت و تولید محتوا برای یوتیوب و شبکه‌های اجتماعی.</div>
    <div class="project-tech">CapCut / Filmora / Shotcut</div>
  </div>
</section>

<section id="contact-section">
  <div class="project-card contact-card">
    <div class="project-title">ارتباط با من ✉</div>
    <form id="contact-form" action="https://formspree.io/f/mnngzdlw" method="POST">
      <input type="text" name="name" placeholder="نام شما" required>
      <input type="email" name="email" placeholder="example@example.com" required>
      <textarea name="message" rows="4" placeholder="متن پیام..." required></textarea>
      <div style="text-align:center;margin-top:6px"><button class="btn-submit" type="submit">ارسال ✉</button></div>
    </form>
  </div>
</section>

<footer>
  <p>© 2025 تمامی حقوق محفوظ است </p>
  <div class="social-buttons" role="navigation" aria-label="لینک‌های اجتماعی">
    <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank" aria-label="اینستاگرام">
      <svg viewBox="0 0 448 512" fill="currentColor" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 190.5c-41.6 0-75.6-33.9-75.6-75.6s33.9-75.6 75.6-75.6 75.6 33.9 75.6 75.6-33.9 75.6-75.6 75.6zm146.4-194.3c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27s12.1-27 27-27c14.9 0 27 12.1 27 27z"/></svg>
    </a>
    <a href="https://arsamkhosh.github.io" target="_blank" aria-label="گیت‌هاب">
      <svg viewBox="0 0 496 512" fill="currentColor" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256c0 110.3 71.3 203.8 170 237 12.4 2.3 17-5.4 17-12v-42.1c-69.1 15-83.8-33.2-83.8-33.2-11.2-28.5-27.3-36.2-27.3-36.2-22.3-15.2 1.7-14.9 1.7-14.9 24.6 1.7 37.6 25.3 37.6 25.3 21.9 37.5 57.5 26.7 71.5 20.4 2.2-15.8 8.6-26.7 15.6-32.8-55-6.2-112.5-27.4-112.5-121.8 0-27 9.6-49 25.4-66.3  ..."/></svg>
    </a>
  </div>
</footer>

<script>
/* =========== Typewriter for title =========== */
(function(){
  const el = document.getElementById('title');
  const text = "صفحه شخصی من "; // متن تایپ
  let i = 0;
  el.textContent = "";
  function type(){
    if(i < text.length){
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }
  setTimeout(type, 400);
})();

/* =========== Copy IP button =========== */
document.getElementById('copy-btn').addEventListener('click', async () => {
  const ip = document.getElementById('server-ip').textContent.trim();
  try {
    await navigator.clipboard.writeText(ip);
    const b = document.getElementById('copy-btn');
    const prev = b.innerHTML;
    b.innerHTML = "کپی شد ✅";
    setTimeout(()=> b.innerHTML = prev, 1400);
  } catch (e) {
    alert('کپی نشد — لطفاً دستی کپی کنید: ' + ip);
  }
});

/* =========== Check Minecraft server status (mcsrvstat.us) =========== */
async function checkServer(){
  const el = document.getElementById('player-count');
  const host = document.getElementById('server-ip').textContent.trim();
  try{
    const res = await fetch('https://api.mcsrvstat.us/2/' + encodeURIComponent(host));
    const data = await res.json();
    if(data && data.online){
      const online = data.players && data.players.online ? data.players.online : 0;
      const max = data.players && data.players.max ? data.players.max : '?';
      el.textContent = `✅ سرور آنلاین است — بازیکنان: ${online}/${max}`;
    } else {
      el.textContent = "❌ سرور آفلاین است یا اطلاعات قابل دریافت نیست.";
    }
  }catch(err){
    el.textContent = "⚠️ خطا در دریافت وضعیت سرور.";
    console.error(err);
  }
}
checkServer();
setInterval(checkServer, 10000);

/* =========== Mouse trail (blue + turquoise neon dots) =========== */
(function(){
  const container = document.getElementById('mouse-trail');
  const maxDots = 22;               // حداکثر تعداد نقاط همزمان
  const dots = [];
  for(let i=0;i<maxDots;i++){
    const d = document.createElement('div');
    d.className = 'trail-dot';
    d.style.position = 'absolute';
    d.style.pointerEvents = 'none';
    d.style.width = d.style.height = (6 + Math.random()*8) + 'px';
    d.style.borderRadius = '50%';
    d.style.opacity = '0';
    d.style.transform = 'translate(-50%,-50%)';
    d.style.willChange = 'transform, opacity';
    // gradient-ish color between blue and turquoise
    const t = i / maxDots;
    const r = Math.round( (1-t)*57 + t*0 );
    const g = Math.round( (1-t)*240 + t*194 );
    const b = Math.round( (1-t)*255 + t*214 );
    d.style.background = `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(${r},${g},${b},0.95) 30%, rgba(${r},${g},${b},0.75))`;
    d.style.boxShadow = `0 0 8px rgba(${r},${g},${b},0.9), 0 0 20px rgba(${r},${g},${b},0.55)`;
    container.appendChild(d);
    dots.push({el:d,x:window.innerWidth/2,y:window.innerHeight/2,scale:1,age:999});
  }

  let mouseX = window.innerWidth/2, mouseY = window.innerHeight/2;
  let lastMove = Date.now();

  window.addEventListener('mousemove', (e)=>{
    mouseX = e.clientX; mouseY = e.clientY;
    lastMove = Date.now();
    // find oldest dot to activate
    for(let i=0;i<dots.length;i++){
      if(dots[i].age > 15){ // available
        dots[i].age = 0;
        dots[i].x = mouseX;
        dots[i].y = mouseY;
        dots[i].vx = 0; dots[i].vy = 0;
        break;
      }
    }
  });

  function animate(){
    for(let i=0;i<dots.length;i++){
      const d = dots[i];
      // simple follow behavior: move slight toward the next point (or mouse for first)
      const targetX = (i===0) ? mouseX : dots[i-1].x;
      const targetY = (i===0) ? mouseY : dots[i-1].y;
      const dx = targetX - d.x;
      const dy = targetY - d.y;
      d.vx = (d.vx || 0) + dx * 0.18;
      d.vy = (d.vy || 0) + dy * 0.18;
      d.vx *= 0.72; d.vy *= 0.72;
      d.x += d.vx;
      d.y += d.vy;
      d.age++;
      // opacity and scale decay with age
      const life = Math.max(0, 1 - d.age/40);
      d.el.style.opacity = (life*0.95).toString();
      const s = 0.6 + life*1.4;
      d.el.style.transform = `translate(${d.x}px, ${d.y}px) scale(${s}) translate(-50%,-50%)`;
      // if age large, push it offscreen slowly to avoid accumulation
      if(d.age > 80){
        d.x += (Math.random()-0.5)*6;
        d.y += (Math.random()-0.5)*6;
      }
    }
    // small fade-out when mouse idle
    if(Date.now() - lastMove > 2200){
      for(let i=0;i<dots.length;i++){
        dots[i].age = Math.min(200, dots[i].age + 1);
      }
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  // keep dots centered when resizing
  window.addEventListener('resize', ()=>{ for(const d of dots){ d.x = window.innerWidth/2; d.y = window.innerHeight/2 } });
})();

/* =========== Accessibility tweak: keyboard focus outline for buttons =========== */
document.addEventListener('keyup', (e) => {
  if(e.key === 'Tab') document.body.classList.add('show-focus');
});
</script>
</body>
</html>
