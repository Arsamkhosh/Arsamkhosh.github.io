<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <title>پیام‌رسان گوگولی</title>
  <style>
    body {
      font-family: 'Vazir', sans-serif;
      background: #fef6ff;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 50px;
    }

    .chat-btn {
      background-color: #ff69b4;
      color: white;
      border: none;
      padding: 15px 25px;
      border-radius: 50px;
      font-size: 18px;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

    .chat-box {
      display: none;
      margin-top: 20px;
      width: 320px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      padding: 15px;
    }

    .chat-box input, .chat-box textarea {
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid #ccc;
      font-size: 14px;
    }

    .chat-box button {
      background-color: #00bfff;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;
      width: 100%;
      font-size: 16px;
    }

    .messages {
      margin-top: 20px;
      width: 320px;
      background: #fff;
      border-radius: 10px;
      padding: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .message {
      background: #f0f8ff;
      padding: 8px;
      margin-bottom: 8px;
      border-radius: 8px;
      font-size: 14px;
    }

    .message strong {
      color: #ff69b4;
    }
  </style>
</head>
<body>

  <button class="chat-btn" onclick="toggleChat()">🐥 پیام بده!</button>

  <div class="chat-box" id="chatBox">
    <input type="text" id="username" placeholder="نام یکتای خودتو وارد کن">
    <textarea id="message" rows="3" placeholder="پیامتو بنویس..."></textarea>
    <button onclick="sendMessage()">📨 ارسال پیام</button>
  </div>

  <div class="messages" id="messages"></div>

  <script>
    const usedNames = new Set();

    function toggleChat() {
      const box = document.getElementById('chatBox');
      box.style.display = box.style.display === 'none' ? 'block' : 'none';
    }

    function sendMessage() {
      const name = document.getElementById('username').value.trim();
      const msg = document.getElementById('message').value.trim();

      if (!name || !msg) {
        alert('نام و پیام الزامی هست!');
        return;
      }

      if (usedNames.has(name)) {
        alert('این نام قبلاً استفاده شده! لطفاً یه نام یکتای دیگه وارد کن.');
        return;
      }

      usedNames.add(name);

      const messagesDiv = document.getElementById('messages');
      const newMsg = document.createElement('div');
      newMsg.className = 'message';
      newMsg.innerHTML = <strong>${name}</strong>: ${msg};
      messagesDiv.appendChild(newMsg);

      document.getElementById('username').value = '';
      document.getElementById('message').value = '';
    }
  </script>

</body>
</html>
