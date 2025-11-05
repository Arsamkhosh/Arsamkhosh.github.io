<body>
  <!-- دکمه فعال‌سازی -->
  <button id="chatToggle">🐣 پیام بده!</button>

  <!-- پنجره پیام‌رسان -->
  <div id="chatBox" style="display:none;">
    <input type="text" id="username" placeholder="نام یکتای خودتو وارد کن">
    <textarea id="message" placeholder="پیامتو بنویس..." rows="4"></textarea>
    <button onclick="sendMessage()">📩 ارسال پیام</button>
  </div>

  <!-- اسکریپت فعال‌سازی -->
  <script>
    document.getElementById('chatToggle').addEventListener('click', () => {
      const box = document.getElementById('chatBox');
      box.style.display = box.style.display === 'none' ? 'block' : 'none';
    });

    const usedNames = new Set();
    function sendMessage() {
      const name = document.getElementById('username').value.trim();
      const msg = document.getElementById('message').value.trim();

      if (!name || !msg) {
        alert('نام و پیام الزامی هست!');
        return;
      }

      if (usedNames.has(name)) {
        alert('این نام قبلاً استفاده شده!');
        return;
      }

      usedNames.add(name);
      alert(🎉 پیام ثبت شد!\nنام: ${name}\nپیام: ${msg});
    }
  </script>
</body>
