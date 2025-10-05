<html lang="fa">
<head>
  <meta charset="UTF-8">
  <title>فروش اجناس خوراکی خارجی آنلاین | محصولات</title>
  <link href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css" rel="stylesheet" type="text/css" />
  <style>
    body {
      margin: 0;
      font-family: 'Vazir', sans-serif;
      background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
      color: #f0f0f0;
      text-align: center;
      transition: all 0.4s ease;
    }

    body.light-mode {
      background: linear-gradient(135deg, #ffffff, #e0e0e0);
      color: #222;
    }

    header, section, footer {
      padding: 40px 20px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
      transition: all 0.4s ease;
    }

    body.light-mode header,
    body.light-mode section,
    body.light-mode footer {
      background: rgba(255, 255, 255, 0.8);
      color: #222;
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
      transition: background-color 0.3s ease;
    }

    #toggle-theme:hover {
      background-color: #ff00cc;
      color: #fff;
    }

    .github-link {
      display: inline-block;
      font-size: 2.2em;
      font-weight: bold;
      text-decoration: none;
      background: linear-gradient(90deg, #00ffff, #ff00cc, #ff9900);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: glow 3s infinite ease-in-out;
      margin-bottom: 10px;
    }

    @keyframes glow {
      0% { text-shadow: 0 0 10px #00ffff; }
      50% { text-shadow: 0 0 20px #ff00cc; }
      100% { text-shadow: 0 0 10px #00ffff; }
    }

    h2 {
      font-size: 2em;
      margin-top: 40px;
      color: #fff;
    }

    body.light-mode h2 {
      color: #222;
    }

    .category {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      margin-top: 20px;
    }

    .card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(6px);
      border-radius: 15px;
      padding: 20px;
      width: 250px;
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
      animation: fadeInUp 1s ease forwards;
      opacity: 0;
      transition: all 0.4s ease;
    }

    body.light-mode .card {
      background: #f9f9f9;
      color: #333;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    .card:nth-child(1) { animation-delay: 0.2s; }
    .card:nth-child(2) { animation-delay: 0.4s; }
    .card:nth-child(3) { animation-delay: 0.6s; }

    @keyframes fadeInUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .card h3 {
      margin-bottom: 10px;
      font-size: 1.4em;
      color: #00ffff;
    }

    body.light-mode .card h3 {
      color: #0077cc;
    }

    .card p {
      font-size: 1em;
      color: #ccc;
    }

    body.light-mode .card p {
      color: #555;
    }

    form {
      margin-top: 30px;
      text-align: right;
      direction: rtl;
      animation: fadeInUp 1s ease forwards;
      animation-delay: 0.8s;
      opacity: 0;
    }

    label {
      display: block;
      margin: 10px 0 5px;
      font-weight: bold;
      color: #fff;
    }

    body.light-mode label {
      color: #222;
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

    input::placeholder, textarea::placeholder {
      color: #aaa;
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

    body.light-mode footer {
      color: #333;
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

    @media (max-width: 600px) {
      .category {
        flex-direction: column;
        align-items: center;
      }

      .card {
        width: 90%;
      }

      form {
        text-align: center;
      }
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
      <textarea id="message
