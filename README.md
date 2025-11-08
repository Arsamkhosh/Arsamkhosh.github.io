<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>پروژه‌های من</title>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --neon-1: #00ffff;
      --neon-2: #ff00cc;
      --accent-grad: linear-gradient(135deg, var(--neon-1), var(--neon-2));
      --bg-dark-start: #0a0a0a;
      --bg-dark-end: #111111;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Vazirmatn', sans-serif;
      background: linear-gradient(135deg, var(--bg-dark-start), var(--bg-dark-end));
      color: #eaeaea;
      text-align: center;
      overflow-x: hidden;
    }

    header {
      padding: 40px 0 10px;
    }

    h1 {
      color: var(--neon-1);
      font-size: 2.3rem;
      text-shadow: 0 0 20px var(--neon-1), 0 0 40px var(--neon-2);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    h1:hover {
      text-shadow: 0 0 35px var(--neon-1), 0 0 65px var(--neon-2);
      transform: scale(1.03);
    }

    h2 {
      color: var(--neon-1);
      text-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
      margin-bottom: 10px;
      font-size: 1.6rem;
      transition: all 0.3s ease;
    }

    h2:hover {
      text-shadow: 0 0 20px rgba(0, 255, 255, 0.9), 0 0 30px rgba(255, 0, 204, 0.6);
      transform: scale(1.04);
    }

    section {
      margin: 40px auto;
      max-width: 700px;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 14px;
      padding: 25px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
      transition: 0.3s;
    }

    section:hover {
      box-shadow: 0 0 25px rgba(0, 255, 255, 0.2);
    }

    .contact-card {
      background: rgba(255, 255, 255, 0.04);
      border-radius: 14px;
      padding: 18px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }

    input, textarea {
      width: 90%;
      padding: 10px 12px;
      border-radius: 10px;
      border: 1px solid rgba(0, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.03);
      color: inherit;
      font-family: inherit;
      text-align: right;
      transition: all 0.2s ease;
    }

    input:focus, textarea:focus {
      border-color: var(--neon-1);
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.4);
      outline: none;
    }

    input::placeholder, textarea::placeholder {
      color: #aaa;
    }

    .btn-submit {
      background: var(--accent-grad);
      color: #000;
      border: none;
      padding: 8px 18px;
      border-radius: 30px;
      font-weight: 800;
      font-size: 0.9rem;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(255, 0, 204, 0.25);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .btn-submit::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.3);
      transform: skewX(-25deg);
      transition: 0.4s;
    }

    .btn-submit:hover::before {
      left: 100%;
    }

    .btn-submit:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px rgba(255, 0, 204, 0.45);
    }

    /* پیام موفقیت */
    .success-message {
      display: none;
      margin-top: 15px;
      color: #00ff88;
      font-weight: bold;
      text-shadow: 0 0 8px #00ff88;
      animation: fadeIn 0.8s ease forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(5px); }
      to { opacity: 1; transform: translateY(0); }
    }

  </style>
</head>

<body>
  <header>
    <h1>پروژه‌های من</h1>
  </header>

  <main>
    <section id="projects-section">
      <h2>پروژه‌ها</h2>
      <p>نمونه‌کارهای من در زمینه طراحی، سرور و تولید محتوا.</p>
    </section>

    <section id="contact-section">
      <h2>ارتباط با من</h2>
      <div class="contact-card">
        <form id="contact-form" action="https://formspree.io/f/mnngzdlw" method="POST">
          <input type="text" name="name" placeholder="نام شما" required>
          <input type="email" name="email" placeholder="example@example.com" required>
          <textarea name="message" rows="4" placeholder="متن پیام..." required></textarea>
          <button class="btn-submit" type="submit">ارسال ✉️</button>
          <p class="success-message" id="successMessage">✅ پیام با موفقیت ارسال شد!</p>
        </form>
      </div>
    </section>
  </main>

  <script>
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('successMessage');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.reset();
        successMsg.style.display = 'block';
        setTimeout(() => successMsg.style.display = 'none', 4000);
      } else {
        alert('❌ خطا در ارسال پیام، دوباره امتحان کنید.');
      }
    });
  </script>
</body>
</html>
