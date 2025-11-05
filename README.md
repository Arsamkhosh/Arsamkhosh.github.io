<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>پیام‌رسان جادویی ⚡</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600&display=swap');

  body {
    font-family: 'Vazirmatn', sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.6s ease;
    overflow: hidden;
  }

  /* تم روشن */
  body.light {
    background: linear-gradient(135deg, #ffecd2, #fcb69f);
  }

  /* تم تاریک */
  body.dark {
    background: radial-gradient(circle at top left, #1a1a2e, #0f0f1a);
  }

  .chat-container {
    width: 370px;
    background: var(--chat-bg, #fff);
    border-radius: 25px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.5s ease;
  }

  .chat-header {
    background: var(--header-gradient, linear-gradient(90deg, #ff6fbf, #6fc3ff));
    color: white;
    text-align: center;
    padding: 14px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .chat-header button {
    background: rgba(255,255,255,0.2);
    border: none;
    color: white;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
  }

  .chat-header button:hover {
    background: rgba(255,255,255,0.4);
  }

  .chat-box {
    flex: 1;
    padding: 15px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: var(--chat-inner-bg, #fefefe);
    transition: background 0.5s ease;
  }

  .msg {
    padding: 10px 14px;
    border-radius: 18px;
    max-width: 75%;
    font-size: 15px;
    line-height: 1.5;
    animation: pop 0.3s ease;
  }

  .msg.me {
    background: var(--my-msg, linear-gradient(135deg, #a1ffce, #faffd1));
    align-self: flex-end;
    border-bottom-right-radius: 5px;
    color: #111;
  }

  .msg.other {
    background: var(--other-msg, #f1f1f1);
    align-self: flex-start;
    border-bottom-left-radius: 5px;
  }

  @keyframes pop {
    from { opacity: 0; transform: translateY(8px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  .chat-input {
    display: flex;
    padding: 12px;
    background: var(--input-bg, #fafafa);
    border-top: 1px solid #ddd;
  }

  input {
    flex: 1;
    padding: 10px 12px;
    border-radius: 15px;
    border: 1px solid #ccc;
    outline: none;
    transition: 0.2s;
    background: var(--input-field, white);
    color: var(--text, #111);
  }

  input:focus {
    border-color: #6fc3ff;
    box-shadow: 0 0 5px rgba(111,195,255,0.4);
  }

  button.send-btn {
    background: var(--send-gradient, linear-gradient(135deg, #6fc3ff, #ff6fbf));
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 15px;
    margin-right: 5px;
    cursor: pointer;
    transition: 0.3s;
  }

  button.send-btn:hover {
    transform: scale(1.1);
  }

  canvas#particles {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
  }
</style>
</head>
<body class="light">

<canvas id="particles"></canvas>

<div class="chat-container">
  <div class="chat-header">
    🌸 پیام‌رسان جادویی
    <div>
      <button id="modeToggle" title="تغییر حالت">🌗</button>
      <button id="shockBtn" title="جادو!">⚡</button>
    </div>
  </div>
  <div id="chatBox" class="chat-box">
    <div class="msg other">سلام به دنیای جادویی 💫</div>
  </div>
  <div class="chat-input">
    <input id="messageInput" type="text" placeholder="یه چیزی بنویس... ✨">
    <button class="send-btn" onclick="sendMessage()">📩</button>
  </div>
</div>

<script>
  const body = document.body;
  const chatBox = document.getElementById('chatBox');
  const input = document.getElementById('messageInput');
  const modeToggle = document.getElementById('modeToggle');
  const shockBtn = document.getElementById('shockBtn');
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let particles = [];

  // تغییر حالت روشن ↔ تاریک
  modeToggle.onclick = () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
      body.style.setProperty('--chat-bg', '#1e1e2f');
      body.style.setProperty('--chat-inner-bg', '#161625');
      body.style.setProperty('--my-msg', 'linear-gradient(135deg, #6a11cb, #2575fc)');
      body.style.setProperty('--other-msg', '#2a2a40');
      body.style.setProperty('--input-bg', '#1c1c2e');
      body.style.setProperty('--input-field', '#2b2b4a');
      body.style.setProperty('--text', '#eee');
      body.style.setProperty('--header-gradient', 'linear-gradient(90deg, #6a11cb, #2575fc)');
    } else {
      body.style = '';
    }
  };

  // ارسال پیام
  function sendMessage() {
    const msg = input.value.trim();
    if (!msg) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = 'msg me';
    messageDiv.textContent = msg;
    chatBox.appendChild(messageDiv);
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
      const reply = document.createElement('div');
      reply.className = 'msg other';
      const replies = ['😄 عالی بود!', '✨ جالب گفتی!', '🔥 ادامه بده!', '🌈 وای چه قشنگ!'];
      reply.textContent = replies[Math.floor(Math.random() * replies.length)];
      chatBox.appendChild(reply);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
  }

  input.addEventListener('keypress', e => {
    if (e.key === 'Enter') sendMessage();
  });

  // افکت شوک جادویی ⚡
  function randomColor() {
    const colors = ['#ff69b4', '#00bfff', '#ffd700', '#ff6a00', '#9b59b6'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  shockBtn.onclick = () => {
    const w = canvas.width = window.innerWidth;
    const h = canvas.height = window.innerHeight;
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: w / 2, y: h / 2,
        dx: (Math.random() - 0.5) * 8,
        dy: (Math.random() - 0.5) * 8,
        r: Math.random() * 5 + 3,
        color: randomColor(),
        life: 80
      });
    }
    animateParticles();
  };

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      p.life--;
      if (p.life <= 0) particles.splice(i, 1);
    });
    if (particles.length > 0) requestAnimationFrame(animateParticles);
  }
</script>

</body>
</html>
