<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>پیام‌رسان قشنگ من 💌</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600&display=swap');

  body {
    font-family: 'Vazirmatn', sans-serif;
    background: linear-gradient(135deg, #ffafbd, #ffc3a0);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .chat-container {
    width: 360px;
    background: #fff;
    border-radius: 25px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: floatUp 0.6s ease;
  }

  @keyframes floatUp {
    from { transform: translateY(40px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .chat-header {
    background: linear-gradient(90deg, #ff6fbf, #6fc3ff);
    color: #fff;
    text-align: center;
    padding: 14px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .chat-box {
    flex: 1;
    padding: 15px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #fefefe;
  }

  .msg {
    padding: 10px 14px;
    border-radius: 20px;
    max-width: 75%;
    font-size: 15px;
    line-height: 1.4;
    animation: fadeIn 0.3s ease;
  }

  .msg.me {
    background: linear-gradient(135deg, #a1ffce, #faffd1);
    align-self: flex-end;
    border-bottom-right-radius: 5px;
  }

  .msg.other {
    background: #f1f1f1;
    align-self: flex-start;
    border-bottom-left-radius: 5px;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .chat-input {
    display: flex;
    padding: 12px;
    background: #fafafa;
    border-top: 1px solid #eee;
  }

  input {
    flex: 1;
    padding: 10px 12px;
    border-radius: 15px;
    border: 1px solid #ccc;
    outline: none;
    transition: 0.2s;
  }

  input:focus {
    border-color: #6fc3ff;
    box-shadow: 0 0 5px rgba(111,195,255,0.3);
  }

  button {
    background: linear-gradient(135deg, #6fc3ff, #ff6fbf);
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 15px;
    margin-right: 5px;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
</style>
</head>
<body>

<div class="chat-container">
  <div class="chat-header">🌸 پیام‌رسان قشنگ من 🌸</div>
  <div id="chatBox" class="chat-box">
    <div class="msg other">سلام! خوش اومدی 😊</div>
  </div>
  <div class="chat-input">
    <input id="messageInput" type="text" placeholder="بنویس چی تو دلت هست... ✨">
    <button onclick="sendMessage()">📩</button>
  </div>
</div>

<script>
  const chatBox = document.getElementById('chatBox');
  const input = document.getElementById('messageInput');

  function sendMessage() {
    const msg = input.value.trim();
    if (!msg) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = 'msg me';
    messageDiv.textContent = msg;
    chatBox.appendChild(messageDiv);
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    // پاسخ نمایشی
    setTimeout(() => {
      const reply = document.createElement('div');
      reply.className = 'msg other';
      reply.textContent = 'چه جالب 😄';
      chatBox.appendChild(reply);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }

  input.addEventListener('keypress', e => {
    if (e.key === 'Enter') sendMessage();
  });
</script>

</body>
</html>
