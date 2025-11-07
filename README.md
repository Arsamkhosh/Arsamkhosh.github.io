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
    overflow-x: hidden;
  }

  header, section, footer { padding: 40px 5%; }

  h1 {
    font-size: 2.8em;
    background: linear-gradient(90deg, #00ffff, #ff00cc, #ff9900);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 5px rgba(0,255,255,0.5);
  }

  h2 { color: #00ffff; margin-bottom: 20px; font-size: 1.8em; }

  .projects {
    display: flex; justify-content: center; flex-wrap: wrap;
    gap: 30px; margin-top: 20px;
  }

  .project-card {
    background: rgba(255,255,255,0.08);
    padding: 25px;
    width: 300px;
    min-height: 200px;
    border-radius: 15px;
    border-left: 5px solid #00ffff;
    box-shadow: 0 4px 20px rgba(0,255,255,0.1);
    text-align: right;
    transition: 0.3s;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px #ff00cc, 0 0 10px #00ffff;
    border-left: 5px solid #ff00cc;
  }

  .project-title { font-size: 1.4em; font-weight: bold; color: #00ffff; }
  .project-desc { color: #ccc; margin-bottom: 15px; font-size: 0.9em; }
  .project-tech { font-size: 0.8em; color: #ff9900; font-weight: bold; }

  /* بخش درباره من */
  .about-card {
    max-width: 600px; margin: 20px auto;
    background: rgba(255, 255, 255, 0.08);
    padding: 30px; border-radius: 20px;
    display: flex; align-items: center; text-align: right;
  }
  .profile-pic {
    width: 100px; height: 100px; border-radius: 50%;
    background: #00ffff; margin-left: 20px;
    border: 4px solid #ff00cc; box-shadow: 0 0 15px #00ffff;
  }

  /* فرم تماس */
  form {
    max-width: 500px; margin: 40px auto;
    background: rgba(255, 255, 255, 0.08);
    padding: 25px; border-radius: 15px;
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.2);
    text-align: right;
  }
  input, textarea {
    width: 100%; padding: 12px; border-radius: 10px;
    border: 1px solid rgba(0,255,255,0.3);
    background-color: rgba(255,255,255,0.1);
    color: #fff; margin-bottom: 15px;
  }

  button {
    background: linear-gradient(135deg, #00ffff, #ff00cc);
    color: #000; border: none; border-radius: 10px;
    padding: 10px 20px; cursor: pointer; font-weight: bold;
    transition: 0.3s;
  }
  button:hover { transform: scale(1.05); }

  /* تم روز و شب */
  #theme-toggle {
    position: fixed; top: 15px; left: 15px;
    background: rgba(255,255,255,0.15);
    border: none; color: white; font-size: 22px;
    border-radius: 50%; width: 45px; height: 45px;
    cursor: pointer; box-shadow: 0 0 15px rgba(0,255,255,0.4);
  }

  /* چت بات */
  #chat-icon {
    position: fixed; bottom: 20px; left: 20px;
    background: linear-gradient(135deg,#00ffff,#ff00cc);
    border-radius: 50%;
    width: 60px; height: 60px;
    display: flex; align-items: center; justify-content: center;
    font-size: 28px; color: #000;
    cursor: pointer; box-shadow: 0 0 20px rgba(255,0,255,0.4);
  }

  #chat-box {
    position: fixed; bottom: 100px; left: 20px;
    width: 260px; background: rgba(0,0,0,0.9);
    border-radius: 15px; padding: 15px;
    display: none; flex-direction: column; gap: 10px;
    box-shadow: 0 0 25px rgba(0,255,255,0.3);
  }

  #chat-box.show { display: flex; }
  #chat-header { font-weight: bold; color: #00ffff; margin-bottom: 10px; }

  .chat-options button {
    padding: 8px; border: none; border-radius: 10px;
    background: linear-gradient(135deg,#00ffff,#ff00cc);
    color: #000; font-weight: bold; cursor: pointer;
  }

  footer {
    margin-top: 50px;
    background: rgba(255,255,255,0.05);
    padding: 20px; color: #ccc;
  }

  footer a {
    color: #00ffff; text-decoration: none;
  }

  @media (max-width: 650px) {
    .projects { flex-direction: column; align-items: center; }
    .project-card { width: 90%; }
    .about-card { flex-direction: column; text-align: center; }
  }
</style>
</head>
<body>

<button id="theme-toggle">🌙</button>

<header>
  <h1>پروژه‌های من</h1>
  <p>خوش اومدی به سایت من، آرسام گنگ 😎🔥</p>
</header>

<section id="about-me">
  <h2>درباره من</h2>
  <div class="about-card">
    <div class="profile-pic"></div>
    <div class="about-text">
      <p>سلام! من <strong>آرسام گنگ</strong> هستم، یه توسعه‌دهنده وب و عاشق ماینکرفت 🎮 و طراحی چیزای خفن ✨</p>
    </div>
  </div>
</section>

<section id="projects-section">
  <h2>پروژه‌ها</h2>
  <div class="projects">

    <div class="project-card">
      <div class="project-title">سرور ماینکرفت 🎮</div>
      <div class="project-desc">یک سرور برای دوستداران ماینکرفت، با پلاگین‌های اختصاصی و دنیای منحصربه‌فرد!</div>
      <div class="project-tech">Java / Spigot / Minecraft</div>
    </div>

    <div class="project-card">
      <div class="project-title">پروژه سایت شخصی 🌐</div>
      <div class="project-desc">سایتی که خودم طراحی و ساخته‌ام.</div>
      <div class="project-tech">HTML / CSS / JS</div>
    </div>

    <div class="project-card">
      <div class="project-title">ادیت ویدیو 🎬</div>
      <div class="project-desc">عاشق ادیت ویدیو هستم و کارهام رو توی یوتیوب می‌ذارم.</div>
      <div class="project-tech">CapCut / Filmora / Shotcut</div>
    </div>

    <div class="project-card">
      <div class="project-title">🌍 سرور LAVA JUMP</div>
      <div class="project-desc">بپر و رقابت کن توی سرور من! 👇</div>
      <div class="project-ip" style="display:flex;align-items:center;justify-content:space-between;">
        <span id="server-ip" style="font-weight:bold;color:#00ffff;">lavajumptest.falixsrv.me</span>
        <button onclick="copyIP()">📋 کپی</button>
      </div>
    </div>

  </div>
</section>

<section id="contact-section">
  <h2>ارتباط با من</h2>
  <form action="https://formspree.io/f/mnngzdlw" method="POST" onsubmit="validateForm(this); return false;">
    <label for="name">نام:</label>
    <input type="text" id="name" name="name" required placeholder="نام شما">
    <label for="email">ایمیل:</label>
    <input type="email" id="email" name="email" required placeholder="example@example.com">
    <label for="message">پیام:</label>
    <textarea id="message" name="message" rows="5" required placeholder="متن پیام..."></textarea>
    <button type="submit">ارسال پیام</button>
    <p id="formMessage" style="margin-top:10px;"></p>
  </form>
</section>

<footer>
  <p>© 2025 تمامی حقوق محفوظ است</p>
  <p><a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank">📸 اینستاگرام من</a></p>
</footer>

<div id="chat-icon" onclick="toggleChat()">💬</div>
<div id="chat-box">
  <div id="chat-header">🤖 منو</div>
  <div class="chat-options">
    <button onclick="window.open('https://instagram.com/arsam.khosh.akhlagh.2012','_blank')">اینستاگرام</button>
    <button onclick="document.getElementById('contact-section').scrollIntoView({behavior:'smooth'});toggleChat();">ارتباط با من</button>
    <button onclick="document.getElementById('projects-section').scrollIntoView({behavior:'smooth'});toggleChat();">پروژه‌ها</button>
  </div>
</div>

<script>
const themeButton = document.getElementById('theme-toggle');
let dark = true;
themeButton.onclick = () => {
  dark = !dark;
  document.body.style.background = dark ? "linear-gradient(135deg,#0f0f0f,#1a1a1a)" : "linear-gradient(135deg,#d3d3d3,#f0f0f0)";
  document.body.style.color = dark ? "#fff" : "#333";
  themeButton.textContent = dark ? "🌙" : "☀️";
};

function toggleChat(){
  document.getElementById('chat-box').classList.toggle('show');
}

function copyIP() {
  const ip = document.getElementById('server-ip').textContent;
  navigator.clipboard.writeText(ip);
  alert('✅ آی‌پی کپی شد: ' + ip);
}

function validateForm(f) {
  const msg = document.getElementById('formMessage');
  msg.textContent = 'در حال ارسال...';
  fetch(f.action, { method: f.method, body: new FormData(f), headers: {'Accept':'application/json'} })
  .then(r => { msg.textContent = r.ok ? '✅ پیام ارسال شد!' : '❌ خطا در ارسال.'; });
}
</script>
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>پروژه‌های آرسام گنگ</title>
<link href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css" rel="stylesheet">
<style>
body {
  margin: 0;
  font-family: 'Vazir', sans-serif;
  background: linear-gradient(135deg, #0a0a0a, #111);
  color: white;
  overflow-x: hidden;
}
header {
  text-align: center;
  padding: 20px;
  font-size: 28px;
  font-weight: bold;
  color: #00ffff;
}
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
}
.project-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
  transition: 0.3s;
}
.project-card:hover {
  transform: scale(1.03);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}
.project-title {
  font-size: 20px;
  color: #00ffff;
  margin-bottom: 10px;
}
.project-desc {
  font-size: 14px;
  margin-bottom: 10px;
  color: #ccc;
}
.project-tech {
  font-size: 13px;
  color: #999;
}
footer {
  text-align: center;
  padding: 20px;
  margin-top: 30px;
  font-size: 14px;
  color: #bbb;
}
footer p { margin: 5px 0; }
footer a { color: #00ffff; text-decoration: none; }
footer a:hover { text-decoration: underline; }
#server-box {
  background: #000;
  border: 2px solid #00ffff;
  border-radius: 12px;
  padding: 10px;
  font-family: monospace;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
#server-box span {
  color: #00ff99;
  font-weight: bold;
}
#server-box button {
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg,#00ffff,#ff00cc);
  color: #000;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
}
#player-count {
  color: #0f0;
  font-weight: bold;
  text-align: center;
  margin-top: 8px;
}
</style>
</head>
<body>

<header>🔥 پروژه‌های آرسام گنگ 🔥</header>

<section id="projects-section">
  <div class="projects">

    <div class="project-card">
      <div class="project-title">🌍 سرور ماینکرفت LAVA JUMP</div>
      <div class="project-desc">بپر، رقابت کن و از سرور من لذت ببر!</div>
      <div id="server-box">
        <span id="server-ip">lavajumptest.falixsrv.me</span>
        <button onclick="copyIP()">📋 کپی</button>
      </div>
      <p id="player-count">در حال بررسی...</p>
    </div>

    <div class="project-card">
      <div class="project-title">پروژه سایت شخصی 🌐</div>
      <div class="project-desc">این سایت رو خودم طراحی و کدنویسی کردم تا مهارت‌هامو نشون بدم.</div>
      <div class="project-tech">HTML / CSS / JavaScript</div>
    </div>

    <div class="project-card">
      <div class="project-title">ادیت ویدیو 🎬</div>
      <div class="project-desc">ادیت ویدیو یکی از سرگرمی‌های منِ آرسام گنگه 😎</div>
      <div class="project-tech">CapCut / Filmora / Shotcut</div>
    </div>

  </div>
</section>

<footer>
  <p>© 2025 تمامی حقوق محفوظ است</p>
  <p><a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank">اینستاگرام من</a></p>
</footer>

<script>
function copyIP() {
  const ip = document.getElementById('server-ip').textContent;
  navigator.clipboard.writeText(ip).then(() => {
    alert('✅ آی‌پی کپی شد: ' + ip);
  });
}

async function updatePlayers() {
  try {
    const res = await fetch('https://api.mcsrvstat.us/2/lavajumptest.falixsrv.me');
    const data = await res.json();
    const playerCount = data.players?.online ?? 0;
    const maxPlayers = data.players?.max ?? 0;
    document.getElementById('player-count').textContent =
      `🎮 بازیکنان آنلاین: ${playerCount}/${maxPlayers}`;
  } catch {
    document.getElementById('player-count').textContent = '❌ سرور در دسترس نیست';
  }
}
updatePlayers();
setInterval(updatePlayers, 60000);
</script>

</body>
</html>
</body>
</html>
