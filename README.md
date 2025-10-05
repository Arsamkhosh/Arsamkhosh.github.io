<html lang="fa">
<head>
  <meta charset="UTF-8">
  <title>arsam_khosh | محصولات من</title>
  <style>
    body {
      margin: 0;
      font-family: 'Vazir', sans-serif;
      background: linear-gradient(135deg, #1a1a1a, #000000);
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
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(8px);
      margin: 30px auto;
      padding: 30px;
      width: 85%;
      border-radius: 20px;
      box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
    }

    .project {
      margin: 20px 0;
      padding: 15px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
      font-size: 1.1em;
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
    <div class="project">
      محصولات در حال ساخت...
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
