<!DOCTYPE html>
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
      text-align: center;
    }

    header, section, footer {
      padding: 40px 20px;
    }

    h1 {
      font-size: 2.5em;
      background: linear-gradient(90deg, #00ffff, #ff00cc, #ff9900);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h2 {
      font-size: 2em;
      margin-top: 30px;
    }

    form {
      max-width: 500px;
      margin: 20px auto;
      text-align: right;
      direction: rtl;
      background: rgba(255, 255, 255, 0.05);
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
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

    .hp {
      position: absolute;
      left: -9999px;
      top: -9999px;
      visibility: hidden;
    }

    .note {
      font-size: 0.85em;
      color: #ccc;
      margin-top: 8px;
    }

    footer p {
      margin-top: 40px;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <header>
    <h1>سایت فروش اجناس خارجی</h1>
    <p>خوش آمدید! لطفاً فرم زیر را پر کنید.</p>
  </header>

  <section>
    <h2>ارتباط با ما</h2>
    <form action="https://formspree.io/f/mnngzdlw" method="POST" onsubmit="return validateForm(this);">
      <label for="name">نام (اختیاری):</label>
      <input type="text" id="name" name="name" placeholder="نام شما">

      <label for="email">ایمیل (اجباری):</label>
      <input type="email" id="email" name="email" required placeholder="example@example.com">

      <label for="phone">تلفن (اختیاری):</label>
      <input type="tel" id="phone" name="phone" placeholder="09123456789">

      <label for="message">پیام شما:</label>
      <textarea id="message" name="message" rows="5" required placeholder="متن پیام..."></textarea>

      <!-- Honeypot برای جلوگیری از اسپم -->
      <input type="text" name="website" id="website_hp" class="hp" autocomplete="off">

      <button type="submit">ارسال پیام</button>
      <p id="formMessage" class="note"></p>
    </form>
  </section>

  <footer>
    <p>© 2025 تمامی حقوق محفوظ است</p>
  </footer>

  <script>
    function validateForm(form){
      if(form.website.value.trim() !== ''){
        document.getElementById('formMessage').textContent = 'فرم ارسال نشد (شناسایی اسپم)';
        return false;
      }
      document.getElementById('formMessage').textContent = 'در حال ارسال...';
      return true;
    }
  </script>
</body>
</html>

