<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<title>پروژه‌های من</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
<style>
  body {
    margin: 0;
    font-family: 'Vazirmatn', sans-serif;
    background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
    color: #fff;
    text-align: center;
    transition: all 0.5s;
    overflow-x: hidden;
  }
  header, section, footer { padding: 40px 5%; transition: all 0.5s; }
  h1 {
    font-size: 2.8em;
    background: linear-gradient(90deg, #00ffff, #ff00cc, #ff9900);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
    text-shadow: 0 0 5px rgba(0,255,255,0.5);
  }
  h2 { color: #00ffff; margin-bottom: 20px; font-size: 1.8em; }

  /* پروژه‌ها */
  .projects {
    display: flex; justify-content: center; flex-wrap: wrap;
    gap: 30px; margin-top: 20px;
  }
  .project-card {
    position: relative;
    background: rgba(255,255,255,0.08);
    padding: 25px;
    width: 300px;
    min-height: 200px;
    border-radius: 15px;
    border-left: 5px solid #00ffff;
    box-shadow: 0 4px 20px rgba(0,255,255,0.1);
    text-align: right;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s, background 0.5s, border-left 0.3s;
  }
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px #ff00cc, 0 0 10px #00ffff;
    border-left: 5px solid #ff00cc;
  }
  .project-title { font-size: 1.4em; font-weight: bold; margin-bottom: 10px; color: #00ffff; }
  .project-desc { color: #ccc; margin-bottom: 10px; font-size: 0.9em; }
  .project-tech { font-size: 0.8em; color: #ff9900; font-weight: bold; }

  /* درباره من */
  .about-card {
    max-width: 600px;
    margin: 20px auto;
    background: rgba(255, 255, 255, 0.08);
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    direction: rtl;
    text-align: right;
    transition: background 0.5s, box-shadow 0.5s;
  }
  .profile-pic {
    width: 100px; height: 100px;
    border-radius: 50%;
    background: #00ffff;
    margin-left: 20px;
    border: 4px solid #ff00cc;
    overflow: hidden;
    box-shadow: 0 0 15px #00ffff;
    flex-shrink: 0;
  }
  .about-text p { font-size: 1.1em; line-height: 1.8; }

  /* فرم تماس */
  form {
    max-width: 500px; margin: 40px auto;
    background: rgba(255, 255, 255, 0.08);
    padding: 25px; border-radius: 15px;
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.2);
    direction: rtl; text-align: right;
    transition: background 0.5s, box-shadow 0.5s;
  }
  input, textarea {
    width: 100%; padding: 12px; border-radius: 10px; border: 1px solid rgba(0,255,255,0.3);
    background-color: rgba(255,255,255,0.1);
    color: #fff; margin-bottom: 15px;
    transition: background-color 0.5s, color 0.5s, border 0.5s;
  }
  ::placeholder { color: #aaa; opacity: 1; }
  button[type="submit"] {
    background: linear-gradient(135deg,#00ffff,#ff00cc);
    color: #000; font-weight: bold;
    padding: 10px 20px; border: none; border-radius: 12px;
    cursor: pointer; transition: 0.3s;
  }
  button[type="submit"]:hover { transform: scale(1.05); }

  /* FAQ */
  .faq {
    max-width: 700px;
    margin: 40px auto;
    text-align: right;
    direction: rtl;
  }
  .faq-item {
    background: rgba(255,255,255,0.08);
    padding: 15px 20px;
    margin-bottom: 10px;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.3s;
  }
  .faq-item:hover { background: rgba(0,255,255,0.1); }
  .faq-answer { display: none; padding-top: 10px; color: #ccc; }

  /* تایمر پروژه */
  .timer {
    font-size: 1.3em;
    color: #00ffff;
    margin-top: 20px;
  }

  @media (max-width: 650px) {
    .projects { flex-direction: column; align-items: center; }
    .project-card { width: 90%; }
    .about-card { flex-direction: column; text-align: center; }
    .profile-pic { margin-left: 0; margin-bottom: 20px; }
    .about-text { text-align: center; }
  }

  /* متن اینستاگرام پایین */
  .instagram-footer {
    text-align: center;
    padding: 20px;
    color: #00ffff;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .instagram-footer:hover { color: #ff00cc; }
</style>
</head>
<body>

<header>
  <h1>خوش آمدید </h1>
  <p>!خوش آمدید به سایت من، در ادامه پروژه‌ها را میبینید</p>
</header>

<section id="about-me">
  <h2>درباره من</h2>
  <div class="about-card">
    <div class="profile-pic"></div>
    <div class="about-text">
      <p>سلام! من <strong>آرسام خوش‌اخلاق</strong> هستم. توسعه‌دهنده وب و علاقه‌مند به تکنولوژی‌ها. عاشق خلاقیت در طراحی و منطق در برنامه‌نویسی هستم و همچنین به ماینکرفت و سرورهای بازی علاقه دارم 🌐✨</p>
    </div>
  </div>
</section>

<section id="projects-section">
  <h2>پروژه‌ها</h2>
  <div class="projects">
    <div class="project-card">
      <div class="project-title">سرور ماینکرفت 🎮</div>
      <div class="project-desc">سرور اختصاصی  برای ماینکرفت با پلاگین‌های مخصوص دارم و برای همکاری به اینستگرام یا بخش ارتباط با ما پیام بده </div>
      <div class="project-tech">Java / Spigot / Minecraft</div>
    </div>
    <div class="project-card">
      <div class="project-title">سایت شخصی 🌐</div>
      <div class="project-desc">من به طراحی سایت علاقه دارم و این سایت رو خودم و با کمک دوستم نوشتم</div>
      <div class="project-tech">HTML / CSS / JavaScript</div>
    </div>
    <div class="project-card">
      <div class="project-title">ادیت ویدیو 🎬</div>
      <div class="project-desc">به ادیت ویدیو علاقه دارم و کارهای خود را در یوتیوب منتشر می‌کنم</div>
      <div class="project-tech">Capcut / Filmora / Shotcut</div>
    </div>
  </div>
</section>

<section id="faq-section">
  <h2>پرسش و پاسخ (FAQ)</h2>
  <div class="faq">
    <div class="faq-item">
      سوال 1: چگونه با شما تماس بگیرم؟
      <div class="faq-answer">می‌توانید از فرم تماس استفاده کنید یا در اینستاگرام پیام دهید.</div>
    </div>
    <div class="faq-item">
      سوال 2: پروژه‌های شما چگونه ساخته شده‌اند؟
      <div class="faq-answer">بیشتر پروژه‌ها با HTML، CSS، JavaScript و برخی با جاوا و پلاگین‌های ماینکرفت هستند.</div>
    </div>
  </div>
</section>

<section id="timer-section">
  <h2>تایمر پروژه</h2>
  <div class="timer" id="project-timer">00 روز 00 ساعت 00 دقیقه 00 ثانیه</div>
</section>

<section id="contact-section">
  <h2>ارتباط با من</h2>
  <form action="https://formspree.io/f/mnngzdlw" method="POST" onsubmit="validateForm(this); return false;">
    <input type="hidden" name="website">
    <label for="name">نام:</label>
    <input type="text" id="name" name="name" required placeholder="نام شما">
    <label for="email">ایمیل:</label>
    <input type="email" id="email" name="email" required placeholder="example@example.com">
    <label for="message">پیام:</label>
    <textarea id="message" name="message" rows="5" required placeholder="متن پیام..."></textarea>
    <button type="submit">ارسال پیام</button>
    <p id="formMessage" style="direction: rtl; text-align: right; margin-top: 15px; font-weight: bold;"></p>
  </form>
</section>

<footer>
  <p class="instagram-footer" onclick="window.open('https://instagram.com/arsam.khosh.akhlagh.2012','_blank')">اینستاگرام من</p>
  <p>© 2025 تمامی حقوق محفوظ است</p>
</footer>

<script>
  // دنباله‌دار موس
  const trails = [];
  const trailCount = 15;
  for(let i=0;i<trailCount;i++){
    const t=document.createElement('div');
    t.className='mouse-trail';
    t.style.width = t.style.height = (6 - i*0.3)+'px';
    document.body.appendChild(t);
    trails.push({el:t,x:window.innerWidth/2,y:window.innerHeight/2});
  }
  let mouseX=window.innerWidth/2, mouseY=window.innerHeight/2;
  document.addEventListener('mousemove', e=>{mouseX=e.clientX; mouseY=e.clientY;});
  function animateTrail(){
    trails.forEach((t,i)=>{
      t.x+=(mouseX - t.x)*0.25;
      t.y+=(mouseY - t.y)*0.25;
      t.el.style.transform = `translate(${t.x - t.el.offsetWidth/2}px, ${t.y - t.el.offsetHeight/2}px)`;
      t.el.style.opacity = (1 - i/trailCount)*0.8;
    });
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  // فرم تماس
  function validateForm(f){
    const formMessage=document.getElementById('formMessage');
    if(f.website.value.trim()!==''){
      formMessage.textContent='❌ اسپم شناسایی شد';
      return false;
    }
    formMessage.textContent='در حال ارسال... ⏳';
    fetch(f.action,{
      method:f.method,
      body:new FormData(f),
      headers:{'Accept':'application/json'}
    }).then(r=>{
      if(r.ok){ f.reset(); formMessage.textContent='✅ پیام با موفقیت ارسال شد!'; formMessage.style.color='#00ffff'; }
      else{ formMessage.textContent='❌ خطا در ارسال پیام.'; formMessage.style.color='#ff00cc'; }
    }).catch(()=>{ formMessage.textContent='❌ مشکلی رخ داد.'; formMessage.style.color='#ff00cc'; });
    return false;
  }

  // افکت پروژه‌ها
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(c=>{
    c.onclick=()=>{ for(let j=0;j<10;j++){ const p=document.createElement('div'); p.style.position='absolute'; p.style.width='5px'; p.style.height='5px'; p.style.background='#00ffff'; const r=c.getBoundingClientRect(); p.style.top=r.top+r.height/2+window.scrollY+'px'; p.style.left=r.left+r.width/2+window.scrollX+'px'; p.style.transition='0.8s ease'; document.body.appendChild(p); const ang=Math.random()*2*Math.PI,dist=50+Math.random()*50; setTimeout(()=>{p.style.top=parseFloat(p.style.top)+Math.sin(ang)*dist+'px'; p.style.left=parseFloat(p.style.left)+Math.cos(ang)*dist+'px'; p.style.opacity='0';},10); setTimeout(()=>p.remove(),800); } };
  });

  // FAQ
  const faqs = document.querySelectorAll('.faq-item');
  faqs.forEach(f=>{
    f.onclick = ()=>{ const ans=f.querySelector('.faq-answer'); ans.style.display = ans.style.display==='block' ? 'none':'block'; };
  });

  // تایمر پروژه (مثال: پایان پروژه در 30 نوامبر 2025 ساعت 23:59)
  const endTime = new Date('2025-11-30T23:59:59').getTime();
  function updateTimer(){
    const now = new Date().getTime();
    const diff = endTime - now;
    if(diff<0){ document.getElementById('project-timer').textContent='پروژه به پایان رسید'; return; }
    const days=Math.floor(diff/(1000*60*60*24));
    const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const minutes=Math.floor((diff%(1000*60*60))/(1000*60));
    const seconds=Math.floor((diff%(1000*60))/1000);
    document.getElementById('days').textContent = d;
    document.getElementById('hours').textContent = h;
    document.getElementById('minutes').textContent = m;
    document.getElementById('seconds').textContent = s;
  setInterval(updateTimer,1000);
  updateTimer();
</script>

</body>
</html>
