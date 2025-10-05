<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <title>فروش اجناس خوراکی خارجی آنلاین | محصولات</title>
  <link href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css" rel="stylesheet" type="text/css" />
  <style>
    /* تمام استایل‌ها همون نسخه قبلی هستن */
    /* فقط مطمئن شو که کلاس .social و دکمه‌ها داخل فوتر هستن */
    /* برای اختصار، اینجا فقط بخش فوتر و فرم رو کامل می‌نویسم */

    form {
      margin-top: 30px;
      text-align: right;
      direction: rtl;
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
      background-color: rgba(255, 255, 255, 0.1);
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
      transition: background-color 0.3s ease, transform 0.2s ease;
    }

    button:hover {
      background-color: #ff00cc;
      color: #fff;
      transform: scale(1.05);
    }

    footer {
      margin-top: 50px;
      padding: 20px;
      font-size: 0.9em;
      color: #aaa;
    }

    .social a {
      margin: 0 10px;
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
    <a href="https://github.com/arsam-khosh" class="github-link" target="_blank">arsam_khosh</a>
    <p>خوش آمدید به سایت فروش اجناس خوراکی خارجی آنلاین</p>
  </header>

  <section>
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
      <a href="https://instagram.com/arsam.khosh.2012" target="_blank">صفحه اینستاگرام من</a>
    </div>
  </footer>

  <script>
    const toggleBtn = document.getElementById('toggle-theme');
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });
  </script>
</body>
</html>
