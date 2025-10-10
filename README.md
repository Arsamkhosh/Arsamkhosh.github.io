
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <title>سایت فروش اجناس خارجی</title>
  <link href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css" rel="stylesheet" />
  <style>
    body {
      margin: 0;
      font-family: 'Vazir', sans-serif;
      background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
      color: #f0f0f0;
      transition: all 0.4s ease;
      text-align: center;
    }

    body.light-mode {
      background: linear-gradient(135deg, #ffffff, #e0e0e0);
      color: #222;
    }

    @keyframes fadeUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    #toggle-theme {
      position: fixed;
      top: 20px;
      left: 20px;
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      background-color: #00ffff;
      color: #000;
      font-weight: bold;
      cursor: pointer;
      z-index: 1000;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeUp 1s ease forwards;
      animation-delay: 0.3s;
    }

    #toggle-theme:hover {
      background-color: #ff00cc;
      color: #fff;
      transform: scale(1.05);
      box-shadow: 0 0 15px #ff00cc;
    }

    .github-link {
      font-size: 2em;
      font-weight: bold;
      text-decoration: none;
      background: linear-gradient(90deg, #00ffff, #ff00cc, #ff9900);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: glow 3s infinite ease-in-out;
      display: inline-block;
      margin-top: 20px;
    }

    @keyframes glow {
      0% { text-shadow: 0 0 10px #00ffff; }
      50% { text-shadow: 0 0 20px #ff00cc; }
      100% { text-shadow: 0 0 10px #00ffff; }
    }

    header, section, footer {
      padding: 40px 20px;
    }

    h2 {
      font-size: 1.8em;
      margin-top: 40px;
    }

    .category {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      margin-top: 20px;
    }

    .card {
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(6px);
      border-radius: 15px;
      padding: 20px;
      width: 250px;
      box-shadow: 0 0 15px rgba(255,255,255,0.1);
      opacity: 0;
      transform: translateY(20px);
      animation: fadeUp 1s ease forwards;
      transition: all 0.3s ease;
    }

    .card:nth-child(1) { animation-delay: 0.3s; }
    .card:nth-child(2) { animation-delay: 0.5s; }
    .card:nth-child(3) { animation-delay: 0.7s; }

    .card:hover {
      background-color: rgba(0, 255, 255, 0.1);
      transform: scale(1.05);
      box-shadow: 0 0 15px #00ffff;
    }

    body.light-mode .card {
      background: #f9f9f9;
      color: #333;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    body.light-mode .card:hover {
      background-color: #e0f7ff;
      box-shadow: 0 0 15px #00ccff;
    }

    form {
      margin-top: 30px;
      text-align: right;
      direction: rtl;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
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
      margin-bottom: 20px;
      background-color: rgba(255,255,255,0.1);
      color: #fff;
      font-size: 1em;
    }

    body.light-mode input,
    body.light-mode textarea {
      background-color: #dcdcdc;
      color: #000;
    }

    button {
      padding: 12px 25px;
      border: none;
      border-radius: 10px;
      background-color: #00ffff;
      color: #000;
      font-weight: bold;
      font-size: 1em;
      cursor: pointer;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeUp 1s ease forwards;
      animation-delay: 0.9s;
      transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    }

    button:hover {
      background-color: #ff00cc;
      color: #fff;
      transform: scale(1.05);
      box-shadow: 0 0 15px #ff00cc;
    }

    footer {
      margin-top: 50px;
      font-size: 0.9em;
    }

    .social a {
      color: #00ffff;
      text-decoration: none;
      font-weight: bold;
    }

    .social a:hover {
      color: #ff00cc;
    }
  </style>
</head>
<body>
  <button id="toggle-theme">🌓 تغییر حالت روز/شب</button>

  <header>
    <a href="https://arsamkhosh.github.io/" class="github-link" target="_blank">arsam_khosh</a>
    <p>خوش آمدید به سایت فروش اجناس خوراکی خارجی</p>
  </header>

  <section>
    <h2>محصولات من</h2>
    <div class="category">
      <div class="card">
        <h3>نوشیدنی ها</h3>
        <p>به زودی اضافه می‌شود</p>
      </div>
      <div class="card">
        <h3>دسته‌بندی ۲</h3>
        <p>به زودی اضافه می‌شود</p>
      </div>
      <div class="card">
        <h3>دسته‌بندی ۳</h3>
        <p>در حال ساخت و توسعه</p>
      </div>
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

  <script>
    const toggleBtn = document.getElementById('toggle-theme');
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });
  </script>
  <!-- 💬 چت‌بات هوشمند -->
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

<style>
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
  }

  #chat-box {
    position: fixed;
    bottom: 80px;
    left: 20px;
    width: 320px;
    max-height: 420px;
    background: #1a1a1a;
    color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 15px #00ffff;
    display: none;
    flex-direction: column;
    overflow: hidden;
    font-family: 'Vazir', sans-serif;
  }

  #chat-header {
    background: #00ffff;
    color: #000;
    padding: 10px;
    font-weight: bold;
    text-align: center;
  }

  #chat-log {
    padding: 10px;
    height: 250px;
    overflow-y: auto;
    font-size: 0.9em;
  }

  #chat-input {
    padding: 10px;
    border: none;
    width: calc(100% - 20px);
    margin: 10px;
    border-radius: 10px;
  }

  #chat-controls {
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
  }

  #chat-controls button {
    padding: 8px 12px;
    border: none;
    border-radius: 10px;
    background: #00ffff;
    color: #000;
    cursor: pointer;
    font-size: 1em;
  }

  #chat-controls button:hover {
    background: #ff00cc;
    color: #fff;
    box-shadow: 0 0 10px #ff00cc;
  }
</style>

<script>
  const chatBox = document.getElementById('chat-box');
  const chatLog = document.getElementById('chat-log');
  const chatInput = document.getElementById('chat-input');

  function toggleChat() {
    chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
    chatBox.style.flexDirection = 'column';
  }

  function handleInput(e) {
    if (e.key === 'Enter') {
      const text = chatInput.value;
      if (text.trim() === '') return;
      addMessage('شما', text);
      respond(text);
      chatInput.value = '';
    }
  }

  function addMessage(sender, text) {
    const msg = document.createElement('div');
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatLog.appendChild(msg);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function respond(text) {
    let reply = 'در حال پردازش...';
    if (/سلام|hi|salam/i.test(text)) reply = 'سلام! چطور می‌تونم کمکت کنم؟';
    else if (/قیمت|price/i.test(text)) reply = 'برای اطلاع از قیمت‌ها لطفاً دسته‌بندی مورد نظر رو انتخاب کن.';
    else if (/خداحافظ|bye/i.test(text)) reply = 'خدانگهدار! هر وقت خواستی برگرد 😊';
    else reply = 'من هنوز در حال یادگیری هستم، لطفاً سوال دیگه‌ای بپرس.';

    addMessage('چت‌بات', reply);
    speak(reply);
  }

  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = /[آ-ی]/.test(text) ? 'fa-IR' : 'en-US';
    speechSynthesis.speak(utterance);
  }

  function speakText() {
    const text = chatInput.value;
    if (text.trim() !== '') speak(text);
  }

  function startListening() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'fa-IR';
    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      chatInput.value = transcript;
      respond(transcript);
    };
    recognition.start();
  }
</script>
<html lang="fa">
<head>
<meta charset="UTF-8">
<title>چت‌بات هوشمند ساده</title>
<link href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css" rel="stylesheet" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body { font-family:'Vazir',sans-serif; background:#111; color:#fff; text-align:center; margin:0; padding:0; }
#chat-icon { position:fixed; bottom:20px; left:20px; background:#00ffff; color:#000; padding:12px 16px; border-radius:50px; cursor:pointer; z-index:1000; }
#chat-box { position:fixed; bottom:80px; left:20px; width:320px; max-height:420px; background:#1a1a1a; color:#fff; border-radius:15px; box-shadow:0 0 15px #00ffff; display:none; flex-direction:column; overflow:hidden; font-family:'Vazir',sans-serif; }
#chat-header { background:#00ffff; color:#000; padding:10px; font-weight:bold; text-align:center; }
#chat-log { padding:10px; height:250px; overflow-y:auto; font-size:0.9em; }
#chat-input { padding:10px; border:none; width:calc(100% - 20px); margin:10px; border-radius:10px; }
#chat-controls { display:flex; justify-content:space-around; padding-bottom:10px; }
#chat-controls button { padding:8px 12px; border:none; border-radius:10px; background:#00ffff; color:#000; cursor:pointer; font-size:1em; }
#chat-controls button:hover { background:#ff00cc; color:#fff; box-shadow:0 0 10px #ff00cc; }
@media(max-width:768px){#chat-box{width:90%;left:5%;}}
</style>
</head>
<body>

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
const chatBox=document.getElementById('chat-box');
const chatLog=document.getElementById('chat-log');
const chatInput=document.getElementById('chat-input');

function toggleChat(){ chatBox.style.display=chatBox.style.display==='flex'?'none':'flex'; chatBox.style.flexDirection='column'; }

function addMessage(sender,text){ const msg=document.createElement('div'); msg.innerHTML=`<strong>${sender}:</strong> ${text}`; chatLog.appendChild(msg); chatLog.scrollTop=chatLog.scrollHeight; }

// هوش مصنوعی ساده
function respond(text){
  text=text.toLowerCase();
  let reply='';
  if(/سلام|hi|salam/.test(text)) reply='سلام! چطور می‌تونم کمکت کنم؟ 😊';
  else if(/قیمت|price/.test(text)) reply='برای اطلاع از قیمت‌ها لطفاً دسته‌بندی مورد نظر را انتخاب کن.';
  else if(/خداحافظ|bye/.test(text)) reply='خدانگهدار! هر وقت خواستی برگرد 🌸';
  else if(/نوشیدنی|drink/.test(text)) reply='ما نوشیدنی‌های متنوعی داریم، به زودی اضافه می‌شوند!';
  else reply='من هنوز در حال یادگیری هستم، لطفاً سوال دیگری بپرس.';
  return reply;
}

function sendMessage(text){
  addMessage('شما',text);
  const reply=respond(text);
  setTimeout(()=>{ addMessage('چت‌بات',reply); speak(reply); },500);
}

function handleInput(e){ if(e.key==='Enter'){ const text=chatInput.value.trim(); if(text){ sendMessage(text); chatInput.value=''; } } }

function speak(text){ const utter=new SpeechSynthesisUtterance(text); utter.lang=/[آ-ی]/.test(text)?'fa-IR':'en-US'; speechSynthesis.speak(utter); }
function speakText(){ const text=chatInput.value.trim(); if(text) speak(text); }

function startListening(){
  const recognition=new (window.SpeechRecognition||window.webkitSpeechRecognition)();
  recognition.lang='fa-IR';
  recognition.onresult=function(e){ const transcript=e.results[0][0].transcript; chatInput.value=transcript; sendMessage(transcript); };
  recognition.start();
}
</script>
<!-- دکمه آیکون چت -->
<button id="open-chat-btn" aria-label="باز کردن چت" title="چت">
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="white"/>
  </svg>
</button>

<!-- پنل چت -->
<div id="chatbox" role="dialog" aria-label="چت Roham">
  <div class="chat-header">
    <div style="width:44px;height:44px;border-radius:10px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3C7.03 3 3 6.58 3 11c0 1.94.75 3.72 2 5.14V21l4.08-2.12C10.5 18.08 11.24 18 12 18c4.97 0 9-3.58 9-8s-4.03-7-9-7z" fill="white"/></svg>
    </div>
    <div class="title">راهنمای هوشمند Roham</div>

    <div style="display:flex;align-items:center;gap:8px;margin-left:8px">
      <label style="color:#fff;font-size:13px;display:flex;align-items:center;gap:6px"><input id="voice-toggle" type="checkbox" checked/> صدا</label>
      <button id="clear-btn" class="small" title="پاک کردن جلسه">پاک کردن</button>
    </div>

    <button class="close-btn" aria-label="بستن">×</button>
  </div>

  <div id="chatlog" aria-live="polite" class="clearfix"></div>

  <div class="chat-input-row">
    <button class="icon-btn" id="mic-btn" title="ضبط صدا" aria-label="ضبط صدا">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3z" fill="#0b1220"/></svg>
    </button>

    <input id="chatinput" type="text" placeholder="سؤال خود را بنویسید یا ضبط کنید..." aria-label="ورودی پیام" />

    <button id="send-btn" class="btn-primary-custom" title="ارسال">ارسال</button>
  </div>
  <div id="sysnote" style="padding:8px 12px; font-size:12px; color:var(--muted)">پشتیبانی فارسی، انگلیسی و فینگلیش — بدون شبکه عصبی</div>
</div>

<!-- مثال بخش تماس برای اسکرول خودکار -->
<section id="contact" style="margin:120vh 12px 30vh; padding:20px; background:#fff; border-radius:10px; box-shadow:0 8px 30px rgba(11,20,40,0.04)">
  <h3>بخش تماس</h3>
  <p>این بخش نمونه است تا عملکرد اسکرول به بخش خدمات نمایش داده شود.</p>
</section>

<script>
/* ------------------------
   وضعیت و داده‌ها
   ------------------------ */
let memory = [];
let learnedResponses = {}; // key: normalized input -> reply
const knownServices = ["طراحی سایت","سئو","تولید محتوا","پشتیبانی","مشاوره","سفارش","پرداخت","تبلیغات گوگل"];
const keywords = {
  greeting: ["سلام","درود","خوبی","چطوری","hi","hello"],
  farewell: ["خداحافظ","بای","فعلاً","bye"],
  identity: ["کی هستی","چی هستی","تو کی‌ای","who are you"],
  ai: ["هوش مصنوعی","ربات","فکر می‌کنی","intelligent","ai"]
};

/* ------------------------
   توابع کمکی: پیش‌پردازش، فاصله لیونشتاین، فازی‌مچ
   ------------------------ */
function preprocess(text){
  return String(text || '').toLowerCase().replace(/[؟?!.,،؛"“”']/g, '').trim();
}

function levenshtein(a, b){
  const A = String(a), B = String(b);
  const al = A.length, bl = B.length;
  const dp = Array.from({length:al+1}, (_,i)=>Array(bl+1).fill(0));
  for(let i=0;i<=al;i++) dp[i][0]=i;
  for(let j=0;j<=bl;j++) dp[0][j]=j;
  for(let i=1;i<=al;i++){
    for(let j=1;j<=bl;j++){
      const cost = A[i-1]===B[j-1] ? 0:1;
      dp[i][j]=Math.min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+cost);
    }
  }
  return dp[al][bl];
}

function fuzzyMatchToken(token, options){
  let best = null, min = Infinity;
  for(const opt of options){
    const d = levenshtein(token, preprocess(opt));
    if(d < min){ min = d; best = opt; }
  }
  return {best, dist:min};
}

/* ------------------------
   فینگلیش -> فارسی: نگاشت قاعده‌ای ساده
   ------------------------ */
const FING_TO_FA = {
  'salam':'سلام','merci':'مرسی','mamnun':'ممنون','chetor':'چطور','chetori':'چطوری',
  'khob':'خوب','kheili':'خیلی','man':'من','to':'تو','shoma':'شما','price':'قیمت','order':'سفارش'
};

function simpleFinglishToPersian(token){
  const t = token.toLowerCase().replace(/[^a-z0-9]/g,'');
  if(!t) return token;
  if(FING_TO_FA[t]) return FING_TO_FA[t];
  let s = t.replace(/kh/g,'خ').replace(/sh/g,'ش').replace(/ch/g,'چ').replace(/gh/g,'ق').replace(/zh/g,'ژ');
  s = s.replace(/ou/g,'و').replace(/oo/g,'و').replace(/ee/g,'ی').replace(/ie/g,'ی').replace(/ph/g,'ف');
  if(s==='man') return 'من'; if(s==='to') return 'تو'; if(s==='shoma') return 'شما';
  // اگر هنوز لاتین داشت، برگردان همان (یعنی احتمالاً انگلیسی واقعی)
  if(/[a-z0-9]/.test(s) && !/^[\u0600-\u06FF]+$/.test(s)) return s;
  return s;
}

function normalizeFinglishIfNeeded(text){
  // اگر متن حروف فارسی دارد، برگردان اصل؛ در غیر اینصورت تلاش برای تبدیل
  if(/[\u0600-\u06FF]/.test(text)) return text;
  return text.split(/\s+/).map(simpleFinglishToPersian).join(' ');
}

/* ------------------------
   تشخیص زبان ساده
   ------------------------ */
function detectLanguage(text){
  const persianCount = (text.match(/[\u0600-\u06FF]/g) || []).length;
  const latinCount = (text.match(/[A-Za-z0-9]/g) || []).length;
  if(persianCount > latinCount) return 'fa';
  if(latinCount > persianCount){
    // اگر توکن‌ها در نگاشت فینگلیش بودند، finglish
    const tokens = text.toLowerCase().split(/\W+/).filter(Boolean);
    const fingLike = tokens.filter(t=> Object.keys(FING_TO_FA).includes(t)).length;
    if(fingLike > 0) return 'finglish';
    // کلمات انگلیسی شایع
    const enCommon = ['the','is','and','you','how','what','help','price','order','delivery'];
    const enCount = tokens.filter(t=> enCommon.includes(t)).length;
    if(enCount >= 1) return 'en';
    return 'finglish';
  }
  return 'unknown';
}

/* ------------------------
   تحلیل احساس ساده (لغت‌نامه‌ای)
   ------------------------ */
const POSITIVE = new Set(['خوب','عالی','شاد','ممنون','مرسی','رضایت','خوشحال','love','great','good','thanks']);
const NEGATIVE = new Set(['بد','ناراحت','عصبانی','افتضاح','ghesmat','hate','bad','angry','sad','not']);

function analyzeSentiment(text){
  const tokens = preprocess(text).split(/\W+/).filter(Boolean);
  let p=0,n=0;
  for(const t of tokens){
    if(POSITIVE.has(t)) p++;
    if(NEGATIVE.has(t)) n++;
  }
  const label = p>n ? 'positive' : n>p ? 'negative' : 'neutral';
  const score = (p+n === 0) ? 0 : Math.abs(p-n)/Math.max(1,(p+n));
  return {label, score: Math.round(score*100)/100};
}

/* ------------------------
   احساس از ایموجی و کلیدواژه
   ------------------------ */
function detectEmotion(text){
  if(/😡|😠|عصبانی|خشم|نزاع/.test(text)) return 'angry';
  if(/😊|🙂|خوشحال|شاد|خوشنودی/.test(text)) return 'happy';
  if(/😢|😭|ناراحتم|غمگین/.test(text)) return 'sad';
  return 'neutral';
}

/* ------------------------
   یادگیری ساده (قالب: یاد بگیر "جمله" پاسخ "پاسخ")
   ------------------------ */
function handleLearning(command){
  const match = command.match(/^یاد\s*بگیر\s*["“](.+?)["”]\s*پاسخ\s*["“](.+?)["”]$/i);
  if(match){
    const input = preprocess(match[1]);
    const reply = match[2];
    learnedResponses[input] = reply;
    return یاد گرفتم: وقتی گفتی "${match[1]}" باید بگم: "${reply}" ✅;
  }
  return null;
}

/* ------------------------
   موتور قانون‌محور پاسخ
   ------------------------ */
function ruleBasedReply({text, lang, sentiment}){
  const t = preprocess(text);

  // پاسخ‌های یادگرفته شده
  if(learnedResponses[t]) return { text: learnedResponses[t], reason: 'learned' };

  // تشخیص نیات ساده
  for(const intent in keywords){
    for(const k of keywords[intent]){
      if(t.includes(k)) {
        if(intent==='greeting') return { text: 'سلام! خوشحالم که برگشتی.', reason:'intent' };
        if(intent==='farewell') return { text: 'فعلاً! مراقب خودت باش.', reason:'intent' };
        if(intent==='identity') return { text: 'من ربات Roham هستم؛ می‌تونم درباره خدمات سایت اطلاعات بدم.', reason:'intent' };
        if(intent==='ai') return { text: 'من یک بات قانون‌محور هستم که بدون شبکه عصبی کار می‌کنم.', reason:'intent' };
      }
    }
  }

  // جستجوی سرویس با تطبیق فازی توکن به توکن
  const tokens = t.split(/\s+/).filter(Boolean);
  for(const token of tokens){
    const nm = normalizeFinglishIfNeeded(token);
    const {best, dist} = fuzzyMatchToken(preprocess(nm), knownServices);
    if(dist <= 2){
      // اسکرول به بخش تماس/خدمات
      setTimeout(()=>{ const el = document.getElementById('contact'); if(el) el.scrollIntoView({behavior:'smooth'}); }, 600);
      return { text: ما خدمات ${best} ارائه می‌دهیم. برای اطلاعات بیشتر در بخش تماس اقدام کنید., reason:'service_match' };
    }
  }

  // پاسخ براساس احساس
  if(sentiment.label === 'negative') return { text: 'متأسفم که اینطوری حس می‌کنید؛ می‌تونم کمک کنم مشکل رو حل کنیم؟', reason:'sentiment' };
  if(sentiment.label === 'positive') return { text: 'خوشحالم که راضی هستید! اگر کاری هست بگید.', reason:'sentiment' };

  // fallback
  return { text: 'متوجه نشدم. می‌خوای بهم یاد بدی چی جواب بدم؟ یا یکی از کلمات کلیدی مثل "قیمت" یا "سفارش" را بپرس.', reason:'fallback' };
}

/* ------------------------
   UI: append messages
   ------------------------ */
const chatlog = document.getElementById('chatlog');
function appendUser(text){
  const d = document.createElement('div'); d.className='msg user';
  d.innerHTML = <div class="bubble">${escapeHtml(text)}</div>;
  chatlog.appendChild(d); chatlog.scrollTop = chatlog.scrollHeight;
}
function appendBot(text, meta){
  const d = document.createElement('div'); d.className='msg bot';
  d.innerHTML = <div class="bubble">${escapeHtml(text)}</div>;
  if(meta){
    const m = document.createElement('div'); m.className='meta';
    const parts=[];
    if(meta.lang) parts.push('زبان: '+meta.lang);
    if(meta.sentiment) parts.push('احساس: '+meta.sentiment.label+(meta.sentiment.score?(' ('+meta.sentiment.score+')'):'' ));
    if(meta.reason) parts.push(meta.reason);
    m.textContent = parts.join(' • ');
    d.appendChild(m);
  }
  chatlog.appendChild(d); chatlog.scrollTop = chatlog.scrollHeight;
}
function appendTyping(){ const t=document.createElement('div'); t.className='typing'; t.id='typing'; t.textContent='در حال پردازش...'; chatlog.appendChild(t); chatlog.scrollTop=chatlog.scrollHeight; }
function removeTyping(){ const t=document.getElementById('typing'); if(t) t.remove(); }
function escapeHtml(s){ return String(s).replace(/[&<"'>]/g, function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]; }); }

/* ------------------------
   تعامل: ارسال پیام و پردازش محلی
   ------------------------ */
const inputEl = document.getElementById('chatinput');
const sendBtn = document.getElementById('send-btn');
const micBtn = document.getElementById('mic-btn');
const openBtn = document.getElementById('open-chat-btn');
const chatbox = document.getElementById('chatbox');
const closeBtn = document.querySelector('.close-btn');
const voiceToggle = document.getElementById('voice-toggle');
const clearBtn = document.getElementById('clear-btn');

openBtn.addEventListener('click', ()=>{ chatbox.style.display='block'; openBtn.classList.add('open'); inputEl.focus(); });
closeBtn.addEventListener('click', ()=>{ chatbox.style.display='none'; openBtn.classList.remove('open'); });
clearBtn.addEventListener('click', ()=>{ if(confirm('پاک کردن تاریخچه گفتگو؟')){ memory=[]; learnedResponses={}; chatlog.innerHTML=''; appendBot('گفتگو پاک شد. من آماده‌ام.'); } });

sendBtn.addEventListener('click', ()=>{ const v=inputEl.value.trim(); if(!v) return; inputEl.value=''; userSend(v); });
inputEl.addEventListener('keydown', e=>{ if(e.key==='Enter'){ e.preventDefault(); sendBtn.click(); } });

function userSend(rawText){
  appendUser(rawText);
  memory.push({role:'user', text:rawText, ts:Date.now()});
  appendTyping();

  // پردازش محلی (بدون سرور)
  setTimeout(()=>{
    removeTyping();
    // یادگیری چک
    const learned = handleLearning(rawText);
    if(learned){
      appendBot(learned, {lang:'fa', sentiment:{label:'neutral'}, reason:'learn'});
      return;
    }

    // زبان و نرمال‌سازی فینگلیش
    let lang = detectLanguage(rawText);
    let normalized = rawText;
    if(lang === 'finglish') { normalized = normalizeFinglishIfNeeded(rawText); lang='fa'; }
    // تحلیل احساس
    const sentiment = analyzeSentiment(normalized);
    const emotion = detectEmotion(rawText);

    const replyObj = ruleBasedReply({text: normalized, lang, sentiment});
    let reply = replyObj.text;
    // الحاق پیام احساس-محور
    if(emotion==='angry') reply += ' 😬 ببخشید اگه ناراحتت کردم.';
    if(emotion==='happy') reply += ' 😊 خوشحالم که حالت خوبه!';
    if(emotion==='sad') reply += ' 😢 امیدوارم حالت بهتر شه.';

    memory.push({role:'bot', text:reply, ts:Date.now(), lang, sentiment, reason:replyObj.reason});
    appendBot(reply, {lang, sentiment, reason:replyObj.reason});
    // TTS در صورت فعال بودن
    if(voiceToggle.checked && 'speechSynthesis' in window){
      speak(reply, lang==='en' ? 'en-US' : 'fa-IR');
    }
  }, 300 + Math.random()*400);
}

/* ------------------------
   STT: Web Speech API (کلاینت)
   ------------------------ */
let recognition, recording=false;
if('webkitSpeechRecognition' in window || 'SpeechRecognition' in window){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SR();
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  // شروع با fa-IR، اما اجازه می‌دهیم کاربر انگلیسی بگوید
  recognition.lang = 'fa-IR';
  recognition.onresult = (e) => {
    const t = e.results[0][0].transcript;
    inputEl.value = t;
    sendBtn.click();
  };
  recognition.onend = ()=>{ recording=false; micBtn.style.background=''; micBtn.title='ضبط صدا'; };
  recognition.onerror = (ev)=>{ recording=false; micBtn.style.background=''; micBtn.title='خطا در ضبط'; console.warn('STT error', ev); };
  micBtn.addEventListener('click', ()=>{
    if(!recording){ try{ recognition.start(); recording=true; micBtn.style.background='linear-gradient(90deg,var(--primary), #0560d6)'; micBtn.title='برای توقف دوباره بزنید'; }catch(e){ console.warn(e); } }
    else { recognition.stop(); recording=false; micBtn.style.background=''; micBtn.title='ضبط صدا'; }
  });
} else {
  micBtn.title = 'ضبط صدا در این مرورگر پشتیبانی نمی‌شود';
  micBtn.style.opacity = '.6';
}

/* ------------------------
   TTS ساده با speechSynthesis
   ------------------------ */
function speak(text, locale){
  if(!('speechSynthesis' in window)) return;
  try{
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = locale || 'fa-IR';
    // انتخاب صدای مناسب (اولین صدای مناسب زبان)
    const voices = window.speechSynthesis.getVoices();
    if(voices && voices.length){
      const v = voices.find(x=> (locale && x.lang && x.lang.startsWith(locale.split('-')[0])) || (x.lang && x.lang.startsWith('fa'))) || voices[0];
      if(v) u.voice = v;
    }
    window.speechSynthesis.speak(u);
  }catch(e){ console.warn('TTS error', e); }
}

/* ------------------------
   نمایش خوش‌آمد و آماده‌سازی
   ------------------------ */
appendBot('سلام! من ربات Roham هستم؛ فارسی، انگلیسی و فینگلیش را می‌فهمم. بپرس هر چیزی.', {lang:'fa', sentiment:{label:'neutral'}});
</script>
  <script>
    window.addEventListener("load", () => {
      const btn = document.getElementById("open-chat-btn");
      console.log("عرض:", btn.offsetWidth, "ارتفاع:", btn.offsetHeight);
    });
  </script>
                      <script>
  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("open-chat-btn");
    const chatbox = document.getElementById("chatbox");
    const closeBtn = document.querySelector(".close-btn");

    if (!btn || !chatbox) {
      console.warn("دکمه یا پنل چت پیدا نشد.");
      return;
    }

    btn.addEventListener("click", () => {
      chatbox.style.display = "block";
      btn.classList.add("open");
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        chatbox.style.display = "none";
        btn.classList.remove("open");
      });
    }

    console.log("عرض دکمه:", btn.offsetWidth, "ارتفاع دکمه:", btn.offsetHeight);
  });
</script>

</body>
</html>
</body>
</html>
