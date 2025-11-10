<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<title>پروژه‌های آرسام</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
<style>
/* استایل‌های پایه (فقط Dark Mode) */
body {
  margin:0;
  font-family:'Vazirmatn',sans-serif;
  background:linear-gradient(135deg,#0f0f0f,#1a1a1a);
  color:#fff;
  text-align:center;
  overflow-x:hidden;
  transition:all 0.5s;
}
header, section, footer { padding: 40px 5%; transition: all 0.5s; }

/* عنوان اصلی نئونی */
h1 {
  font-size:2.8em;
  background: linear-gradient(90deg,#00ffff,#ff00cc,#ff9900);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  margin-bottom:10px;
  text-shadow:0 0 10px rgba(0,255,255,0.5);
}
h2 { color:#00ffff; margin-bottom:20px; font-size:1.8em; }

/* پروژه‌ها */
.projects { display:flex; justify-content:center; flex-wrap:wrap; gap:30px; margin-top:20px; }
.project-card {
  position:relative;
  background:rgba(255,255,255,0.08);
  padding:25px;
  width:300px;
  min-height:200px;
  border-radius:15px;
  border-left:5px solid #00ffff;
  box-shadow:0 4px 20px rgba(0,255,255,0.1);
  text-align:right;
  cursor:pointer;
  transition: transform 0.3s, box-shadow 0.3s, background 0.5s, border-left 0.3s;
}
.project-card:hover {
  transform:translateY(-5px);
  box-shadow:0 0 30px #ff00cc,0 0 10px #00ffff;
  border-left:5px solid #ff00cc;
}
.project-title { font-size:1.4em; font-weight:bold; margin-bottom:10px; color:#00ffff; }
.project-desc { color:#ccc; margin-bottom:10px; font-size:0.9em; }
.project-tech { font-size:0.8em; color:#ff9900; font-weight:bold; }

/* درباره من */
.about-card { max-width:600px; margin:20px auto; background: rgba(255,255,255,0.08); padding:30px; border-radius:20px; box-shadow:0 0 20px rgba(255,255,255,0.1); display:flex; align-items:center; direction:rtl; text-align:right; transition: background 0.5s, box-shadow 0.5s;}
.profile-pic { width:100px;height:100px; border-radius:50%; background:#00ffff; margin-left:20px; border:4px solid #ff00cc; overflow:hidden; box-shadow:0 0 15px #00ffff; flex-shrink:0;}
.about-text p { font-size:1.1em; line-height:1.8; }

/* فرم تماس */
form { max-width:500px; margin:40px auto; background: rgba(255,255,255,0.08); padding:25px; border-radius:15px; box-shadow:0 0 25px rgba(0,255,255,0.2); direction:rtl; text-align:right; transition: background 0.5s, box-shadow 0.5s;}
input,textarea{ width:100%; padding:12px; border-radius:10px; border:1px solid rgba(0,255,255,0.3); background-color: rgba(255,255,255,0.1); color:#fff; margin-bottom:15px; transition:background-color 0.5s,color 0.5s,border 0.5s;}
::placeholder{ color:#aaa; opacity:1; }
button[type="submit"] { background: linear-gradient(135deg,#00ffff,#ff00cc); color:#000; font-weight:bold; padding:10px 20px; border:none; border-radius:12px; cursor:pointer; transition:0.3s;}
button[type="submit"]:hover{ transform:scale(1.05); }

/* تایمر */
#countdown { text-align:center; margin:50px 0; }
.countdown-container { display:flex; justify-content:center; gap:20px; flex-wrap:wrap; }
.countdown-box { background: rgba(0,255,255,0.1); border:2px solid #00ffff; border-radius:10px; width:80px; height:80px; display:flex; flex-direction:column; justify-content:center; align-items:center; font-family:'Vazirmatn',sans-serif; font-weight:bold; color:#00ffff; box-shadow:0 0 10px rgba(0,0,0,0.3); transition: all 0.3s;}
.countdown-box div{ font-size:0.7em; margin-top:3px; color:#fff;}
.countdown-box:hover{ transform:scale(1.1); box-shadow:0 0 15px #00ffff,0 0 25px #ff00cc; }

/* FAQ */
.faq { max-width:800px; margin:50px auto; text-align:right; direction:rtl; }
.faq-item { background: rgba(255,255,255,0.08); padding:15px; border-radius:10px; margin-bottom:10px; cursor:pointer; border:2px solid #00ffff; transition:0.3s; }
.faq-item:hover { box-shadow:0 0 15px #00ffff,0 0 25px #ff00cc; }
.faq-item .answer { display:none; margin-top:10px; color:#ccc; font-size:0.9em; }

/* ستاره‌ها */
.star { position: fixed; width:2px; height:2px; background:#fff; border-radius:50%; pointer-events:none; z-index:0; animation:twinkle 3s infinite;}
@keyframes twinkle {0%,100%{opacity:0.2;}50%{opacity:1;}}

/* دنباله موس */
.mouse-trail { position: fixed; border-radius:50%; pointer-events:none; z-index:9999; transition: transform 0.1s linear, opacity 0.3s; }

@media(max-width:650px){
  .projects { flex-direction:column; align-items:center; }
  .project-card { width:90%; }
  .about-card { flex-direction:column; text-align:center; }
  .profile-pic { margin-left:0;margin-bottom:20px; }
  .about-text { text-align:center; }
}

/* فوتر */
footer{ 
  margin-top:50px; 
  color:#ccc; 
  display:flex; 
  justify-content:center; 
  flex-direction:column; 
  align-items:center; 
  gap:10px; 
}
footer a{ color:#00ffff; text-decoration:none;}
footer a:hover{ text-decoration:underline; }
</style>
</head>
<body>

<header>
  <h1>خوش آمدید</h1>
  <p>!خوش آمدید به سایت من، در ادامه پروژه‌ها را می‌بینید</p>
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
      <div class="project-desc">سرور اختصاصی برای ماینکرفت با پلاگین‌های مخصوص دارم و برای همکاری به اینستاگرام یا بخش ارتباط با ما پیام بده </div>
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

<section id="countdown">
  <h2>زمان باقی مانده تا پروژه</h2>
  <div class="countdown-container">
    <div class="countdown-box">
      <span id="days">0</span>
      <div>روز</div>
    </div>
    <div class="countdown-box">
      <span id="hours">0</span>
      <div>ساعت</div>
    </div>
    <div class="countdown-box">
      <span id="minutes">0</span>
      <div>دقیقه</div>
    </div>
    <div class="countdown-box">
      <span id="seconds">0</span>
      <div>ثانیه</div>
    </div>
    </div>
</section>

<section class="faq">
  <h2>پرسش و پاسخ پر تکرار</h2>
  <div class="faq-item"><div class="question">این سایت با چه زبانی ساخته شده؟</div><div class="answer">این سایت با HTML، CSS و JavaScript ساخته شده است.</div></div>
  <div class="faq-item"><div class="question">آموزش به صورت رایگان میدی؟</div><div class="answer">آموزش میدم ولی رایگان نه</div></div>
  <div class="faq-item"><div class="question">میشه بیام توی سرورتون برای کمک؟</div><div class="answer">بله حتما با استفاده از فرم تماس و اینستاگرام به من بگو</div></div>
  <div class="faq-item"><div class="question">سفارش سایت و سرور میگیری؟</div><div class="answer">بله سایت و سرور ماینکرفت براتون می‌سازم ولی در اذا مبلغی</div></div>
  <div class="faq-item"><div class="question">چطور می‌توانم با شما در ارتباط باشم؟</div><div class="answer">به راحتی می‌توانید از فرم تماس یا لینک اینستاگرام با من در ارتباط باشید</div></div>
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
  © 2025 تمامی حقوق محفوظ است
  <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank">اینستاگرام من</a>
</footer>

<script>
// ==========================================================
// ۱. ستاره‌ها 
// ==========================================================
for(let i=0;i<60;i++){
  const s=document.createElement('div');
  s.classList.add('star');
  s.style.top=Math.random()*window.innerHeight+'px';
  s.style.left=Math.random()*window.innerWidth+'px';
  s.style.width=Math.random()*2+1+'px';
  s.style.height=s.style.width;
  s.style.animationDuration=2+Math.random()*3+'s';
  document.body.appendChild(s);
}

// ==========================================================
// ۲. دنباله موس رنگی و روان
// ==========================================================
const trailCount = 20; // تعداد نقاط دنباله
const colors = ['#00ffff', '#ff00cc', '#ff9900', '#00ff00', '#ffffff']; // رنگ‌های نئونی
const trails = []; // آرایه‌ای برای نگهداری عناصر دنباله

// ایجاد عناصر دنباله موس
for (let i = 0; i < trailCount; i++) {
    const t = document.createElement('div');
    t.className = 'mouse-trail'; 
    const size = 10 - i * 0.4; 
    t.style.width = t.style.height = `${size}px`;
    t.style.background = colors[i % colors.length]; 
    t.style.opacity = `${(1 - i / trailCount) * 0.8}`; 
    document.body.appendChild(t);
    trails.push({ el: t, x: window.innerWidth / 2, y: window.innerHeight / 2 });
}

let mouseX = window.innerWidth / 2; // موقعیت X موس
let mouseY = window.innerHeight / 2; // موقعیت Y موس

// ردیابی حرکت موس
document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// انیمیشن دنباله موس با requestAnimationFrame
function animateTrail() {
    // نقطه اول، موس را دنبال می‌کند
    trails[0].x += (mouseX - trails[0].x) * 0.2;
    trails[0].y += (mouseY - trails[0].y) * 0.2;
    trails[0].el.style.transform = `translate(${trails[0].x - trails[0].el.offsetWidth / 2}px, ${trails[0].y - trails[0].el.offsetHeight / 2}px)`;

    // بقیه نقاط، نقطه قبلی خود را دنبال می‌کنند
    for (let i = 1; i < trailCount; i++) {
        const prevTrail = trails[i - 1];
        const currentTrail = trails[i];

        currentTrail.x += (prevTrail.x - currentTrail.x) * 0.3; // سرعت دنبال کردن
        currentTrail.y += (prevTrail.y - currentTrail.y) * 0.3;
        currentTrail.el.style.transform = `translate(${currentTrail.x - currentTrail.el.offsetWidth / 2}px, ${currentTrail.y - currentTrail.el.offsetHeight / 2}px)`;
    }
    
    requestAnimationFrame(animateTrail);
}
animateTrail();


// ==========================================================
// ۳. فرم تماس (با مکانیزم ضد هانی‌پات ساده)
// ==========================================================
function validateForm(f){
  const formMessage=document.getElementById('formMessage');
  if(f.website.value.trim()!==''){ formMessage.textContent='❌ اسپم شناسایی شد'; return false; }
  formMessage.textContent='در حال ارسال... ⏳';
  fetch(f.action,{method:f.method,body:new FormData(f),headers:{'Accept':'application/json'}})
  .then(response=>{
    if(response.ok){ f.reset(); formMessage.textContent='✅ پیام با موفقیت ارسال شد!'; formMessage.style.color='#00ffff'; }
    else{ formMessage.textContent='❌ خطا در ارسال پیام.'; formMessage.style.color='#ff00cc'; }
  }).catch(err=>{ formMessage.textContent='❌ مشکلی رخ داد.'; formMessage.style.color='#ff00cc'; });
  return false;
}


// ==========================================================
// ۴. افکت کلیک پروژه‌ها
// ==========================================================
document.querySelectorAll('.project-card').forEach(c=>{
  c.onclick=()=>{
    for(let j=0;j<10;j++){
      const p=document.createElement('div');
      p.style.position='absolute'; p.style.width='5px'; p.style.height='5px';
      p.style.background='#00ffff';
      const r=c.getBoundingClientRect();
      p.style.top=r.top+r.height/2+window.scrollY+'px';
      p.style.left=r.left+r.width/2+window.scrollX+'px';
      p.style.transition='0.8s ease';
      document.body.appendChild(p);
      const ang=Math.random()*2*Math.PI, dist=50+Math.random()*50;
      setTimeout(()=>{ p.style.top=parseFloat(p.style.top)+Math.sin(ang)*dist+'px'; p.style.left=parseFloat(p.style.left)+Math.cos(ang)*dist+'px'; p.style.opacity='0'; },10);
      setTimeout(()=>p.remove(),800);
    }
  };
});

// ==========================================================
// ۵. تایمر شمارش معکوس
// ==========================================================
const targetDate=new Date(2025,11,20,18,0,0).getTime();
function updateCountdown(){
  const now=new Date().getTime();
  const distance=targetDate-now;
  if(distance<0){
    ['days','hours','minutes','seconds'].forEach(id=>document.getElementById(id).textContent=0);
    clearInterval(timerInterval);
    return;
  }
  document.getElementById("days").textContent=Math.floor(distance/(1000*60*60*24));
  document.getElementById("hours").textContent=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
  document.getElementById("minutes").textContent=Math.floor((distance%(1000*60*60))/(1000*60));
  document.getElementById("seconds").textContent=Math.floor((distance%(1000*60))/1000);
}
const timerInterval=setInterval(updateCountdown,1000);
updateCountdown();

// ==========================================================
// ۶. FAQ toggle (نمایش/پنهان کردن پاسخ)
// ==========================================================
document.querySelectorAll('.faq-item').forEach(item=>{
  item.addEventListener('click',()=>{
    const ans=item.querySelector('.answer');
    ans.style.display=(ans.style.display==='block')?'none':'block';
  });
});
</script>

</body>
</html>
