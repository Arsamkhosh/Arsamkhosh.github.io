<html lang="fa">
<head>
  <meta charset="UTF-8">
  <title> فروش اجناس خوراکی خارجی  آنلاین   | محصولات من</title>
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
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.3);
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
  </style>
</head>
<body>
  <header>
    <h1>arsam_khosh</h1>
    <p>خوش آمدید به سایت من در GitHub!</p>
  </header>

  <section>
    <h2>محصولات من</h2>
    <div class="category">
      <div class="card">
        <h3>دسته‌بندی ۱</h3>
        <p>محصولات در حال ساخت...</p>
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
</body>
</html>
