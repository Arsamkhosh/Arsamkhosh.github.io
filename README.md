<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <title>پروژه‌های من</title>
  <link href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css" rel="stylesheet" />
  <style>
    body {
      margin: 0;
      font-family: 'Vazir', sans-serif;
      background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
      color: #f0f0f0;
      text-align: center;
      scroll-behavior: smooth;
      transition: all 0.5s;
    }

    header, section, footer {
      padding: 40px 20px;
      transition: all 0.5s;
    }

    h1 {
      font-size: 2.5em;
      background: linear-gradient(90deg, #00ffff, #ff00cc, #ff9900);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 2em;
      margin-top: 30px;
    }

    .projects {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 20px;
    }

    .project-card {
      background: rgba(255,255,255,0.05);
      padding: 20px;
      width: 200px;
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(0,255,255,0.2);
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s, background 0.5s;
    }

    .project-card:hover {
      transform: translateY(-10px) scale(1.05);
      box-shadow: 0 0 25px #00ffff;
    }

    form {
      max-width: 500px;
      margin: 40px auto;
      text-align: right;
      direction: rtl;
      background: rgba(255, 255, 255, 0.05);
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
      transition: all 0.5s;
    }

    label {
      display: block;
      margin: 10px 0 5px;
      font-weight: bold;
    }

    input, textarea {
      width: 100%;
      padding: 12px;
      border-radius: 10px;
      border: none;
      margin-bottom: 15px;
      background-color: rgba(255,255,255,0.1);
      color: #fff;
      font-size: 1em;
      transition: all 0.3s;
    }

    input:focus, textarea:focus {
      outline: none;
      background-color: rgba(0, 255, 255, 0.1);
      box-shadow: 0 0 10px #00ffff;
    }

    button {
      padding: 12px 25px;
      border: none;
      border-radius: 10px;
      background: linear-gradient(90deg, #00ffff, #ff00cc);
      color: #000;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s;
    }

    button:hover {
      transform: scale(1.05);
      box-shadow: 0 0 15px #ff00cc;
      color: #fff;
    }

    .hp { position: absolute; left: -9999px; top: -9999px; visibility: hidden; }
    .note { font-size: 0.85em; color: #ccc; margin-top: 8px; }

    footer { margin-top: 40px; }
    footer a { color: #00ffff; text-decoration: none; font-weight: bold; }
    footer a:hover { color: #ff00cc; }

    /* چت بات */
    #chat-icon {
      position: fixed;
      bottom: 20px;
      left: 20px;
      background: #00ffff;
      color: #000;
      padding: 12px 16px;
      border-radius: 50px;
      font-size: 1.5em;
      cursor: pointer;
      box-shadow: 0 0 10px #00ffff;
      z-index: 1000;
      transition: all 0.3s;
    }

    #chat-box {
      position: fixed;
      bottom: 80px;
      left: 20px;
      width: 250px;
      background: #1a1a1a;
      color: #fff;
      border-radius: 15px;
      box-shadow: 0 0 15px #00ffff;
      display: none;
      flex-direction: column;
      font-family: 'Vazir', sans-serif;
      overflow: hidden;
      z-index: 1000;
      transition: all 0.3s;
    }

    #chat-header {
      background: #00ffff;
      color: #000;
      padding: 10px;
      font-weight: bold;
      text-align: center;
    }

    .chat-options button {
      width: 100%;
      padding: 10px;
      border: none;
      border-bottom: 1px solid #00ffff;
      background: transparent;
      color: #fff;
      cursor: pointer;
      transition: 0.3s;
    }

    .chat-options button:hover { background: #00ffff; color: #000; }

    /* دکمه روز و شب بالا سمت چپ */
    #theme-toggle {
      position: fixed;
      top: 20px;
      left: 20px;
      padding: 10px 18px;
      border-radius: 10px;
      border: none;
      background: linear-gradient(90deg, #00ffff, #ff00cc);
      color: #000;
      font-weight: bold;
      cursor: pointer;
      z-index: 1000;
      transition: all 0.3s;
    }

    #theme-toggle:hover {
      transform: scale(1.05);
      box-shadow: 0 0 15px #ff00cc;
      color: #fff;
    }
  </style>
</head>
<body>

  <button id="theme-toggle">🌞 روز / 🌙 شب</button>

  <header>
    <h1>پروژه‌های من</h1>
    <p>!خوش آمدید به سایت من، در ادامه پروژه‌ها را ببینید</p>
  </header>

  <section id="projects-section">
    <h2>پروژه‌ها</h2>
    <div class="projects">
      <div class="project-card">پروژه 1</div>
      <div class="project-card">پروژه 2</div>
      <div class="project-card">پروژه 3</div>
    </div>
  </section>

  <section id="contact-section">
    <h2>ارتباط با من</h2>
    <form action="https://formspree.io/f/mnngzdlw" method="POST" onsubmit="return validateForm(this);">
      <label for="name">نام (اجباری):</label>
      <input type="text" id="name" name="name" placeholder="نام شما" required>

      <label for="email">ایمیل (اجباری):</label>
      <input type="email" id="email" name="email" required placeholder="example@example.com">

      <label for="phone">تلفن (اختیاری):</label>
      <input type="tel" id="phone" name="phone" placeholder="09123456789">

      <label for="message">پیام شما:</label>
      <textarea id="message" name="message" rows="5" required placeholder="متن پیام..."></textarea>

      <input type="text" name="website" class="hp" autocomplete="off">

      <button type="submit">ارسال پیام</button>
      <p id="formMessage" class="note"></p>
    </form>
  </section>

  <footer>
    <p>© 2025 تمامی حقوق محفوظ است | 
      <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank">اینستاگرام من</a>
    </p>
  </footer>

  <!-- چت بات -->
  <div id="chat-icon" onclick="toggleChat()">💬</div>
  <div id="chat-box">
    <div id="chat-header">🤖 منو</div>
    <div class="chat-options">
      <button onclick="window.open('https://instagram.com/arsam.khosh.akhlagh.2012','_blank')">اینستاگرام من</button>
      <button onclick="document.getElementById('contact-section').scrollIntoView({behavior:'smooth'});toggleChat();">ارتباط با ما</button>
      <button onclick="document.getElementById('projects-section').scrollIntoView({behavior:'smooth'});toggleChat();">پروژه‌ها</button>
    </div>
  </div>

  <script>
    let isDark = true;
    let hue = 0;

    // پس‌زمینه متحرک در حالت شب
    setInterval(() => {
      if(isDark){
        document.body.style.background = `linear-gradient(135deg, #000, hsl(${hue}, 80%, 15%))`;
        hue = (hue + 0.5) % 360;
      }
    }, 30);

    // تایپ گرادیان
    function typeGradientText(el, text, speed=80){
      el.textContent='';
      let i=0;
      const interval = setInterval(()=>{
        el.textContent+=text[i];
        i++;
        if(i>=text.length) clearInterval(interval);
      }, speed);
      return interval;
    }

    // تایپ هدر
    const headerTitle = document.querySelector('header h1');
    typeGradientText(headerTitle,'پروژه‌های من',80);

    // پروژه‌ها افکت کلیک
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card=>{
      card.addEventListener('click',()=>{
        typeGradientText(card,'در حال ساخت می‌باشد',40);
        let colors = ['#ff00cc','#00ffff','#ff9900','#00ff00','#ff0000','#ff00ff'];
        let j=0;
        const rainbowInterval = setInterval(()=>{
          card.style.boxShadow=`0 0 25px ${colors[j%colors.length]}`;
          j++;
        },150);
        setTimeout(()=>clearInterval(rainbowInterval),2500);
      });
    });

    // چت بات
    function toggleChat(){
      const chat = document.getElementById('chat-box');
      chat.style.display = (chat.style.display==='flex')?'none':'flex';
    }

    // فرم ضد اسپم
    function validateForm(f){
      if(f.website.value.trim()!==''){
        document.getElementById('formMessage').textContent='فرم ارسال نشد (شناسایی اسپم)';
        return false;
      }
      document.getElementById('formMessage').textContent='در حال ارسال...';
      setTimeout(()=>{
        f.reset();
        document.getElementById('formMessage').textContent='پیام با موفقیت ارسال شد!';
      },1000);
      return true;
    }

    // دکمه روز و شب
    const themeButton = document.getElementById('theme-toggle');
    themeButton.addEventListener('click',()=>{
      if(isDark){
        // حالت روز طوسی
        document.body.style.background = 'linear-gradient(135deg, #d0d0d0, #f0f0f0)';
        document.body.style.color = '#333';
        themeButton.textContent = '🌙 شب / 🌞 روز';
        projectCards.forEach(c=>{
          c.style.background='#c0c0c0';
          c.style.color='#111';
          c.style.boxShadow='0 0 15px rgba(0,0,0,0.2)';
        });
        document.querySelectorAll('input,textarea').forEach(f=>{
          f.style.backgroundColor='#e0e0e0';
          f.style.color='#111';
          f.style.boxShadow='0 0 10px rgba(0,0,0,0.1)';
        });
        isDark=false;
      }else{
        // حالت شب
        document.body.style.background='#000';
        document.body.style.color='#fff';
        themeButton.textContent = '🌞 روز / 🌙 شب';
        projectCards.forEach(c=>{
          c.style.background='rgba(255,255,255,0.05)';
          c.style.color='#fff';
          c.style.boxShadow='0 0 15px rgba(0,255,255,0.2)';
        });
        document.querySelectorAll('input,textarea').forEach(f=>{
          f.style.backgroundColor='rgba(255,255,255,0.1)';
          f.style.color='#fff';
          f.style.boxShadow='0 0 10px #00ffff';
        });
        isDark=true;
      }
    });
  </script>
</body>
</html>
