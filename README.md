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
  .projects { display: flex; justify-content: center; flex-wrap: wrap; gap: 30px; margin-top: 20px; }
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
  .about-card { max-width: 600px; margin: 20px auto; background: rgba(255, 255, 255, 0.08); padding: 30px; border-radius: 20px; box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); display: flex; align-items: center; direction: rtl; text-align: right; transition: background 0.5s, box-shadow 0.5s; }
  .profile-pic { width: 100px; height: 100px; border-radius: 50%; background: #00ffff; margin-left: 20px; border: 4px solid #ff00cc; overflow: hidden; box-shadow: 0 0 15px #00ffff; flex-shrink: 0; }
  .about-text p { font-size: 1.1em; line-height: 1.8; }

  /* فرم تماس */
  form { max-width: 500px; margin: 40px auto; background: rgba(255, 255, 255, 0.08); padding: 25px; border-radius: 15px; box-shadow: 0 0 25px rgba(0, 255, 255, 0.2); direction: rtl; text-align: right; transition: background 0.5s, box-shadow 0.5s; }
  input, textarea {
    width: 100%; padding: 12px; border-radius: 10px; border: 1px solid rgba(0,255,255,0.3);
    background-color: rgba(255,255,255,0.1);
    color: #fff; margin-bottom: 15px;
    transition: background-color 0.5s, color 0.5s, border 0.5s;
  }
  ::placeholder { color: #aaa; opacity: 1; }
  button[type="submit"] { background: linear-gradient(135deg,#00ffff,#ff00cc); color: #000; font-weight: bold; padding: 10px 20px; border: none; border-radius: 12px; cursor: pointer; transition: 0.3s; }
  button[type="submit"]:hover { transform: scale(1.05); }

  /* ستاره‌ها */
  .star { position: fixed; width: 2px; height: 2px; background: #fff; border-radius: 50%; pointer-events: none; z-index: 0; animation: twinkle 3s infinite; }
  @keyframes twinkle { 0%,100%{opacity:0.2;}50%{opacity:1;} }

  /* دنباله‌دار موس */
  .mouse-trail { position: fixed; width: 6px; height: 6px; border-radius: 50%; background: #00ffff; pointer-events: none; opacity: 0.8; z-index: 999; transition: transform 0.1s linear, opacity 0.3s; }

  /* FAQ و تایمر */
  #timer { font-weight: bold; color: #00ffff; text-align: center; margin-bottom: 40px; }
  .faq { max-width: 700px; margin: 0 auto; text-align: right; direction: rtl; }
  .faq-item { margin-bottom: 15px; border-radius: 10px; overflow: hidden; background: rgba(255,255,255,0.05); }
  .faq-question { width: 100%; text-align: right; padding: 15px 20px; cursor: pointer; background: #111; color: #00ffff; border: none; outline: none; font-size: 1em; transition: background 0.3s; }
  .faq-question:hover { background: #222; }
  .faq-answer { max-height: 0; overflow: hidden; padding: 0 20px; color: #ccc; transition: max-height 0.4s ease, padding 0.4s ease; }
  .faq-item.active .faq-answer { max-height: 200px; padding: 15px 20px; }

  /* شبکه اجتماعی پایین صفحه */
  .social-buttons {
    position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
    display: flex; gap: 15px; z-index: 9999;
  }
  .social-buttons a {
    display: flex; align-items: center; justify-content: center;
    width: 50px; height: 50px; background: #00ffff; border-radius: 50%;
    color: #000; text-decoration: none;
    box-shadow: 0 0 10px #00ffff, 0 0 15px #ff00cc;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .social-buttons a:hover { transform: scale(1.2); box-shadow: 0 0 15px #00ffff, 0 0 25px #ff00cc; }
  .social-buttons svg { width: 22px; height: 22px; fill: currentColor; }

  @media (max-width: 650px) { .projects { flex-direction: column; align-items: center; } .project-card { width: 90%; } .about-card { flex-direction: column; text-align: center; } .profile-pic { margin-left: 0; margin-bottom: 20px; } .about-text { text-align: center; } }
</style>
</head>
<body>

<header>
  <h1>خوش آمدید</h1>
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
      <div class="project-desc">سرور اختصاصی با پلاگین‌های مخصوص دارم و برای همکاری پیام دهید</div>
      <div class="project-tech">Java / Spigot / Minecraft</div>
    </div>
    <div class="project-card">
      <div class="project-title">سایت شخصی 🌐</div>
      <div class="project-desc">این سایت رو خودم با کمک دوستم نوشتم</div>
      <div class="project-tech">HTML / CSS / JavaScript</div>
    </div>
    <div class="project-card">
      <div class="project-title">ادیت ویدیو 🎬</div>
      <div class="project-desc">به ادیت ویدیو علاقه دارم و کارهای خود را در یوتیوب منتشر می‌کنم</div>
      <div class="project-tech">Capcut / Filmora / Shotcut</div>
    </div>
  </div>
</section>

<section id="projects-timer-faq">
  <h2>پروژه بعدی</h2>
  <div id="timer">⏳ بارگذاری تایمر...</div>

  <h2>سوالات پرتکرار (FAQ)</h2>
  <div class="faq">
    <div class="faq-item">
      <button class="faq-question">💻 چطور پروژه‌ها را ببینم؟</button>
      <div class="faq-answer">در بخش پروژه‌ها مشاهده کنید یا از طریق فرم تماس پیام دهید.</div>
    </div>
    <div class="faq-item">
      <button class="faq-question">🎮 آیا سرور ماینکرفت عمومی است؟</button>
      <div class="faq-answer">خیر، سرور خصوصی است و برای همکاری باید هماهنگ کنید.</div>
    </div>
    <div class="faq-item">
      <button class="faq-question">🌐 سایت را خودت طراحی کردی؟</button>
      <div class="faq-answer">بله، تمام صفحات شخصا طراحی شده است.</div>
    </div>
  </div>
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
  <p>© 2025 تمامی حقوق محفوظ است</p>
</footer>

<!-- شبکه اجتماعی -->
<div class="social-buttons">
  <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank" aria-label="اینستاگرام">
    <svg viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 190.5c-41.6 0-75.6-33.9-75.6-75.6s33.9-75.6 75.6-75.6 75.6 33.9 75.6 75.6-33.9 75.6-75.6 75.6zm146.4-194.3c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27s12.1-27 27-27c14.9 0 27 12.1 27 27z"/></svg>
  </a>
  <a href="https://arsamkhosh.github.io" target="_blank" aria-label="گیت‌هاب">
    <svg viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256c0 110.3 71.3 203.8 170 237 12.4 2.3 17-5.4 17-12v-42.1c-69.1 15-83.8-33.2-83.8-33.2-11.2-28.5-27.3-36.2-27.3-36.2-22.3-15.2 1.7-14.9 1.7-14.9 24.6 1.7 37.6 25.3 37.6 25.3 21.9 37.5 57.5 26.7 71.5 20.4 2.2-15.8 8.6-26.7 15.6-32.8-55-6.2-112.5-27.4-112.5-121.8 0-27 9.6-49 25.4-66.3 ..."/></svg>
  </a>
</div>

<script>
  // ستاره‌ها
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

  // فرم تماس
  function validateForm(f) {
    const formMessage = document.getElementById('formMessage');
    if (f.website.value.trim() !== '') { formMessage.textContent = '❌ اسپم شناسایی شد'; return false; }
    formMessage.textContent = 'در حال ارسال... ⏳';
    fetch(f.action, { method: f.method, body: new FormData(f), headers: { 'Accept': 'application/json' } })
    .then(response => {
      if (response.ok) { f.reset(); formMessage.textContent = '✅ پیام با موفقیت ارسال شد!'; formMessage.style.color = '#00ffff'; }
      else { formMessage.textContent = '❌ خطا در ارسال پیام.'; formMessage.style.color = '#ff00cc'; }
    }).catch(error => { formMessage.textContent = '❌ مشکلی رخ داد.'; formMessage.style.color = '#ff00cc'; });
    return false;
  }

  // دنباله‌دار موس
  const trails = [];
  for(let i=0;i<15;i++){
    const t = document.createElement('div');
    t.className='mouse-trail';
    document.body.appendChild(t);
    trails.push({el:t,x:0,y:0});
  }
  let mouseX=0, mouseY=0;
  document.addEventListener('mousemove', e=>{ mouseX=e.clientX; mouseY=e.clientY; });
  function animateTrail(){
    trails.forEach((t,i)=>{
      t.x += (mouseX - t.x) * 0.2;
      t.y += (mouseY - t.y) * 0.2;
      t.el.style.transform = `translate(${t.x}px, ${t.y}px)`;
      t.el.style.opacity = (1 - i/trails.length) * 0.8;
    });
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  // تایمر پروژه
  const countdownDate = new Date("2025-12-01T00:00:00").getTime();
  const timerEl = document.getElementById("timer");
  function updateTimer() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    if(distance < 0){ timerEl.textContent = "🎉 پروژه منتشر شد!"; clearInterval(timerInterval); return; }
    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);
    timerEl.textContent = `${days} روز ${hours} ساعت ${minutes} دقیقه ${seconds} ثانیه تا انتشار پروژه`;
  }
  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer();

  // FAQ
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => { btn.parentElement.classList.toggle('active'); });
  });

  // افکت پروژه‌ها
  document.querySelectorAll('.project-card').forEach((c)=>{ 
    c.onclick=()=> {
      for(let j=0;j<10;j++){
        const p=document.createElement('div');
        p.style.position='absolute'; p.style.width='5px'; p.style.height='5px'; p.style.background='#00ffff';
        const r=c.getBoundingClientRect();
        p.style.top=r.top+r.height/2+window.scrollY+'px';
        p.style.left=r.left+r.width/2+window.scrollX+'px';
        p.style.transition='0.8s ease';
        document.body.appendChild(p);
        const ang=Math.random()*2*Math.PI,dist=50+Math.random()*50;
        setTimeout(()=>{p.style.top=parseFloat(p.style.top)+Math.sin(ang)*dist+'px';p.style.left=parseFloat(p.style.left)+Math.cos(ang)*dist+'px';p.style.opacity='0';},10);
        setTimeout(()=>p.remove(),800);
      }
    };
  });
</script>

</body>
</html>
