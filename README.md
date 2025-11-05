<!-- دکمه فعال‌سازی پیام‌رسان -->
<button id="chatToggle" style="background:#ff69b4;color:white;padding:10px 20px;border:none;border-radius:30px;font-size:16px;cursor:pointer;">
  🐣 پیام بده!
</button>

<!-- پنجره پیام‌رسان -->
<div id="chatBox" style="display:none;width:300px;background:white;border-radius:15px;box-shadow:0 0 10px rgba(0,0,0,0.2);padding:15px;margin-top:10px;">
  <input type="text" id="username" placeholder="نام یکتای خودتو وارد کن" style="width:100%;padding:10px;border-radius:10px;border:1px solid #ccc;margin-bottom:10px;">
  <textarea id="message" placeholder="پیامتو بنویس..." rows="4" style="width:100%;padding:10px;border-radius:10px;border:1px solid #ccc;"></textarea>
  <button onclick="sendMessage()" style="background:#00bfff;color:white;border:none;padding:10px;border-radius:10px;margin-top:10px;width:100%;cursor:pointer;">
    📩 ارسال پیام
  </button>
</div>

<script>
  const usedNames = new Set();

  document.getElementById('chatToggle').addEventListener('click', () => {
    const box = document.getElementById('chatBox');
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
  });

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
    alert(🎉 پیام ثبت شد!\nنام: ${name}\nپیام: ${msg});

    // اینجا می‌تونی پیام رو به سرور بفرستی با fetch یا AJAX
    // fetch('/send-message', { method: 'POST', body: JSON.stringify({ name, msg }) })

    document.getElementById('username').value = '';
    document.getElementById('message').value = '';
  }
</script>
