<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <title>arsam_khosh | نمونه‌کارها</title>
  <style>
    body {
      margin: 0;
      font-family: 'Vazir', sans-serif;
      background: linear-gradient(-45deg, #ff0000, #ff9900, #33cc33, #3399ff, #9900cc);
      background-size: 400% 400%;
      animation: gradientMove 15s ease infinite;
      color: #e0e0e0;
      text-align: center;
    }

    @keyframes gradientMove {
      0% {background-position: 0% 50%;}
      50% {background-position: 100% 50%;}
      100% {background-position: 0% 50%;}
    }

    header {
      padding: 50px 20px;
      background-color: rgba(0,0,0,0.6);
      box-shadow: 0 0 30px #4e00c2;
      border-bottom: 2px solid #fff;
    }

    h1 {
      font-size: 3em;
      margin-bottom: 10px;
      text-shadow: 0 0 10px #ff00cc, 0 0 20px #ff00cc;
    }

    p {
      font-size: 1.2em;
    }

    section {
      background-color: rgba(255, 255, 255, 0.05);
      margin: 30px auto;
      padding: 20px;
      width: 80%;
      border-radius: 15px;
      box-shadow: 0 0 20px #00ffff;
    }

    .project {
      margin: 15px 0;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.08);
      border-radius: 10px;
      box-shadow: 0 0 15px #ff9900;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .project:hover {
      transform: scale(1.05);
      box-shadow: 0 0 25px #ffffff;
    }

    a {
      color: #00ffff;
      text-decoration: underline;
      text-shadow: 0 0 5px #00ffff;
    }
  </style>
</head>
<body>
  <header>
    <h1>arsam_khosh</h1>
    <p>خوش آمدید به سایت من در GitHub!</p>
  </header>

  <section>
    <h2>نمونه‌کارها</h2>
    <div class="project">
      <h3>پروژه اول: درحال ساخت</h3>
    </div>
    <div class="project">
      <h3>پروژه دوم: وب‌سایت شخصی</h3>
      <p>سایت معرفی خودم با طراحی خودم</p>
    </div>
  </section>
</body>
</html>
