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
    <a href="https://github.com/arsam-khosh" class="github-link" target="_blank">arsam_khosh</a>
    <p>خوش آمدید به سایت فروش اجناس خوراکی خارجی</p>
  </header>

  <section>
    <h2>محصولات من</h2>
    <div class="category">
      <div class="card">
        <h3>دسته‌بندی ۱</h3>
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
</body>
</html>
