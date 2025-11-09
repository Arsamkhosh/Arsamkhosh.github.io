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
  }
  header, section, footer { padding: 40px 5%; }
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

  /* FAQ */
  .faq-section { max-width: 700px; margin: 0 auto; text-align: right; }
  .faq-item { background: rgba(255,255,255,0.08); margin-bottom: 15px; border-radius: 12px; padding: 15px; cursor: pointer; transition: background 0.3s; }
  .faq-item:hover { background: rgba(255,255,255,0.15); }
  .faq-question { font-weight: bold; color: #00ffff; }
  .faq-answer { max-height: 0; overflow: hidden; color: #ccc; transition: max-height 0.4s ease, padding 0.4s ease; padding: 0 0; margin-top: 5px; }

  .faq-item.active .faq-answer { max-height: 500px; padding: 10px 0; }

  /* تایمر */
  .timer { display: flex; justify-content: center; gap: 25px; margin: 30px 0; font-size: 1.2em; }
  .timer div { background: rgba(0,255,255,0.1); padding: 15px 20px; border-radius: 10px; border: 1px solid #00ffff; min-width: 70px; }
  .timer div span { display: block; font-size: 1.5em; color: #00ffff; font-weight: bold; }

  footer { margin-top: 50px; font-size: 0.9em; color: #aaa; }
  footer a { color: #00ffff; text-decoration: none; }

  @media (max-width: 650px) {
    .projects { flex-direction: column; align-items: center; }
    .project-card { width: 90%; }
    .timer { flex-direction: column; gap: 15px; }
  }
</style>
</head>
<body>

<header>
  <h1>خوش آمدید</h1>
  <p>!خوش آمدید به سایت من، در ادامه پروژه‌ها را میبینید</p>
</header>

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
  </div>
</section>

<section id="faq-section">
  <h2>پرسش‌های متداول</h2>
  <div class="faq-section">
    <div class="faq-item">
      <div class="faq-question">چگونه با شما تماس بگیرم؟</div>
      <div class="faq-answer">می‌توانید از طریق فرم تماس در پایین سایت یا اینستاگرام من پیام بدهید.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">چطور می‌توانم پروژه‌ها را مشاهده کنم؟</div>
      <div class="faq-answer">تمام پروژه‌های من در بخش پروژه‌ها قرار داده شده‌اند و با کلیک روی هر پروژه اطلاعات بیشتر نمایش داده می‌شود.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">آیا آموزش طراحی سایت ارائه می‌دهید؟</div>
      <div class="faq-answer">فعلاً آموزش رسمی ارائه نمی‌شود، اما منابع رایگان در صفحه من معرفی شده است.</div>
    </div>
  </div>
</section>

<section id="timer-section">
  <h2>تایمر پروژه</h2>
  <div class="timer">
    <div><span id="days">0</span>روز</div>
    <div><span id="hours">0</span>ساعت</div>
    <div><span id="minutes">0</span>دقیقه</div>
    <div><span id="seconds">0</span>ثانیه</div>
  </div>
</section>

<footer>
  <p>© 2025 تمامی حقوق محفوظ است | <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank">اینستاگرام من</a></p>
</footer>

<script>
  // FAQ باز و بسته شدن
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  // تایمر شمارش معکوس
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7); // مثلا 7 روز دیگر
  function updateTimer() {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) return;
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff/(1000*60*60))%24);
    const m = Math.floor((diff/(1000*60))%60);
    const s = Math.floor((diff/1000)%60);
    document.getElementById('days').textContent = d;
    document.getElementById('hours').textContent = h;
    document.getElementById('minutes').textContent = m;
    document.getElementById('seconds').textContent = s;
  }
  setInterval(updateTimer, 1000);
  updateTimer();
</script>

</body>
</html>
