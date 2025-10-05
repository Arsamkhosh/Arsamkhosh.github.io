<html lang="fa">
<head>
  <meta charset="UTF-8">
  <title>فروش اجناس خوراکی خارجی آنلاین | محصولات</title>
  <style>
    body {
      margin: 0;
      font-family: 'Vazir', sans-serif;
      background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
      color: #f0f0f0;
      text-align: center;
    }

    header {
      padding: 40px 20px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
    }

    h1 {
      font-size: 2.8em;
      margin-bottom: 10px;
      background: linear-gradient(to right, #ff0000, #ff9900, #33cc33, #3399ff, #9900cc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 0 10px rgba(255,255,255,0.2);
    }

    p {
      font-size: 1.2em;
      color: #ccc;
    }

    section {
      margin: 30px auto;
      padding: 30px;
      width: 90%;
      border-radius: 20px;
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

    .card p {
      font-size: 1em;
      color: #ccc;
    }

    h2 {
      font-size: 2em;
      margin-top: 40px;
      color: #fff;
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

    input::placeholder, textarea::placeholder {
      color: #aaa;
    }

    input:focus, textarea:focus {
      outline: none;
      box-shadow: 0 0 10px #00ffff;
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
      background: rgba(255, 255, 255, 0.05);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 0.9em;
      color: #aaa;
    }

    .social {
      margin-top: 10px;
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
  <header>
    <h1>arsam_khosh</h1>
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
        <p>به‌زودی اضافه می‌شود</p>
      </div>
      <div class="card">
        <h3>دسته‌بندی ۳</h3>
        <p>در حال طراحی و توسعه</p>
      </div>
    </div>

    <h2>ارتباط با ما</h2>
    <form action="https://formspree.io/f/mnngzdlw" method="POST">
      <label for="email">ایمیل شما (اجباری):</label>
      <input type="email" id="email" name="email" placeholder="مثلاً: arsam@example.com" required>

      <label for="phone">شماره تماس (اختیاری):</label>
      <input type="tel" id="phone" name="phone" placeholder="مثلاً: 09123456789">

      <label for="message">پیام شما:</label>
      <textarea id="message" name="message" rows="5" placeholder="متن پیام..." required></textarea>

      <button type="submit">ارسال پیام</button>
    </form>
  </section>

  <footer>
    <p>© 2025 arsam_khosh | تمامی حقوق محفوظ است</p>
    <div class="social">
      <a href="https://instagram.com/arsam_khosh" target="_blank">اینستاگرام</a>
      <a href="mailto:arsam@example.com">ایمیل</a>
    </div>
  </footer>
</body>
</html>
