<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>سایت فروش اجناس خارجی</title>
<link href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css" rel="stylesheet" />
<style>
  /* --- پایه --- */
  body { margin:0; font-family:'Vazir',sans-serif; background: linear-gradient(135deg,#0f0f0f,#1a1a1a); color:#f0f0f0; transition: all 0.4s ease; text-align:center;}
  body.light-mode { background: linear-gradient(135deg,#fff,#e0e0e0); color:#222; }
  h2 { font-size:1.8em; margin-top:40px; }
  header, section, footer { padding:40px 20px; }

  /* --- دکمه روز/شب --- */
  #toggle-theme { position:fixed; top:20px; left:20px; padding:10px 20px; border:none; border-radius:10px; background:#00ffff; color:#000; font-weight:bold; cursor:pointer; z-index:1000; }

  #toggle-theme:hover { background:#ff00cc; color:#fff; transform:scale(1.05); box-shadow:0 0 15px #ff00cc; }

  /* --- کارت محصولات --- */
  .category { display:flex; flex-wrap:wrap; justify-content:center; gap:20px; margin-top:20px; }
  .card { background: rgba(255,255,255,0.05); backdrop-filter: blur(6px); border-radius:15px; padding:20px; width:250px; box-shadow:0 0 15px rgba(255,255,255,0.1); transition: all 0.3s ease; }
  .card:hover { background-color: rgba(0,255,255,0.1); transform:scale(1.05); box-shadow:0 0 15px #00ffff; }
  body.light-mode .card { background:#f9f9f9; color:#333; box-shadow:0 0 10px rgba(0,0,0,0.1); }
  body.light-mode .card:hover { background-color:#e0f7ff; box-shadow:0 0 15px #00ccff; }

  /* --- فرم تماس --- */
  form { margin-top:30px; text-align:right; direction:rtl; max-width:500px; margin-left:auto; margin-right:auto; }
  label { display:block; margin:10px 0 5px; font-weight:bold; }
  input, textarea { width:100%; padding:12px; border-radius:10px; border:none; margin-bottom:20px; background-color: rgba(255,255,255,0.1); color:#fff; font-size:1em; }
  body.light-mode input, body.light-mode textarea { background-color:#dcdcdc; color:#000; }
  button { padding:12px 25px; border:none; border-radius:10px; background:#00ffff; color:#000; font-weight:bold; font-size:1em; cursor:pointer; }
  button:hover { background:#ff00cc; color:#fff; transform:scale(1.05); box-shadow:0 0 15px #ff00cc; }

  footer { margin-top:50px; font-size:0.9em; }
  .social a { color:#00ffff; text-decoration:none; font-weight:bold; }
  .social a:hover { color:#ff00cc; }

  /* --- چت‌بات --- */
  #chat-icon { position:fixed; bottom:20px; left:20px; background:#00ffff; color:#000; padding:12px 16px; border-radius:50px; font-size:1.5em; cursor:pointer; z-index:1000; }
  #chat-box { position:fixed; bottom:80px; left:20px; width:320px; max-height:420px; background:#1a1a1a; color:#fff; border-radius:15px; box-shadow:0 0 15px #00ffff; display:none; flex-direction:column; overflow:hidden; }
  #chat-header { background:#00ffff; color:#000; padding:10px; font-weight:bold; text-align:center; }
  #chat-log { padding:10px; height:250px; overflow-y:auto; font-size:0.9em; }
  #chat-input { padding:10px; border:none; width:calc(100% - 20px); margin:10px; border-radius:10px; }
  #chat-controls { display:flex; justify-content:space-around; padding-bottom:10px; }
  #chat-controls button { padding:8px 12px; border:none; border-radius:10px; background:#00ffff; color:#000; cursor:pointer; font-size:1em; }
  #chat-controls button:hover { background:#ff00cc; color:#fff; box-shadow:0 0 10px #ff00cc; }

  .bubble { background: rgba(0,255,255,0.1); padding:8px 12px; border-radius:10px; margin:5px 0; display:inline-block; }
  .user .bubble { background: rgba(255,0,204,0.2); color:#fff; }
</style>
</head>
<body>

<button id="toggle-theme">🌓 تغییر حالت روز/شب</button>

<header>
  <a href="https://arsamkhosh.github.io/" target="_blank" style="font-size:2em; font-weight:bold; background:linear-gradient(90deg,#00ffff,#ff00cc,#ff9900); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">arsam_khosh</a>
  <p>خوش آمدید به سایت فروش اجناس خارجی</p>
</header>

<section>
  <h2>محصولات من</h2>
  <div class="category">
    <div class="card"><h3>نوشیدنی ها</h3><p>به زودی اضافه می‌شود</p></div>
    <div class="card"><h3>دسته‌بندی ۲</h3><p>به زودی اضافه می‌شود</p></div>
    <div class="card"><h3>دسته‌بندی ۳</h3><p>در حال ساخت و توسعه</p></div>
  </div>

  <h2>ارتباط با ما</h2>
  <form action="https://formspree.io/f/mnngzdlw" method="POST">
    <label for="email">ایمیل شما (اجباری):</label>
    <input type="email" id="email" name="email" placeholder="مثلاً: example@example.com" required>

    <label for="phone">شماره تماس (اختیاری):</label>
    <input type="tel" id="phone" name="phone" placeholder="مثلاً: 09123456789">

    <label for="message">پیام شما:</label>
    <textarea id="message" name="message" rows="5" placeholder="متن پیام..." required></textarea>

    <button type="submit">ارسال پیام</button>
  </form>
</section>

<footer>
  <p>© 2025 تمامی حقوق محفوظ است</p>
  <div class="social">
    <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank">صفحه اینستاگرام من</a>
  </div>
</footer>

<!-- --- چت‌بات --- -->
<div id="chat-icon" onclick="toggleChat()">💬</div>
<div id="chat-box">
  <div id="chat-header">🤖 چت‌بات هوشمند</div>
  <div id="chat-log"></div>
  <input type="text" id="chat-input" placeholder="بنویس یا صحبت کن..." onkeydown="handleInput(event)">
  <div id="chat-controls">
    <button onclick="speakText()">🔊</button>
    <button onclick="startListening()">🎙</button>
  </div>
</div>

<script>
  // --- حالت روز/شب ---
  const toggleBtn = document.getElementById('toggle-theme');
  toggleBtn.addEventListener('click', () => document.body.classList.toggle('light-mode'));

  // --- چت‌بات ---
  const chatBox = document.getElementById('chat-box');
  const chatLog = document.getElementById('chat-log');
  const chatInput = document.getElementById('chat-input');

  function toggleChat() {
    chatBox.style.display = chatBox.style.display==='flex'?'none':'flex';
    chatBox.style.flexDirection='column';
  }

  function addMessage(sender,text){
    const div=document.createElement('div');
    div.className = sender==='شما' ? 'user' : 'bot';
    div.innerHTML = `<div class="bubble"><strong>${sender}:</strong> ${text}</div>`;
    chatLog.appendChild(div);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function respond(text){
    if(/سلام|hi|salam/i.test(text)) return 'سلام! چطور می‌تونم کمکت کنم؟';
    if(/قیمت|price/i.test(text)) return 'برای اطلاع از قیمت‌ها لطفاً دسته‌بندی مورد نظر را انتخاب کنید.';
    if(/خداحافظ|bye/i.test(text)) return 'خدانگهدار! هر وقت خواستی برگرد 😊';
    return 'متوجه نشدم، لطفاً سوال دیگری بپرس.';
  }

  function handleInput(e){
    if(e.key==='Enter'){
      const txt=chatInput.value.trim();
      if(!txt) return;
      addMessage('شما',txt);
      chatInput.value='';
      const reply=respond(txt);
      setTimeout(()=>addMessage('چت‌بات',reply),300);
    }
  }

  function speakText(){
    const txt=chatInput.value.trim();
    if(!txt) return;
    const utter=new SpeechSynthesisUtterance(txt);
    utter.lang='fa-IR';
    speechSynthesis.speak(utter);
  }

  function startListening(){
    if(!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)){
      alert('ضبط صدا در این مرورگر پشتیبانی نمی‌شود');
      return;
    }
    const
