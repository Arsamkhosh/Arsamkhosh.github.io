<!doctype html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>کیفیت هوا - نئون</title>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;800&display=swap" rel="stylesheet" />
  <style>
    :root{
      --bg:#0b0f1a; --bg2:#0e1422;
      --neon:#00ffd5; --neon2:#8a2be2;
      --text:#e6f7ff; --muted:#9db4c0;
      --good:#00d47b; --mod:#ffd166;
      --unh:#f8961e; --bad:#ef476f; --vbad:#8a2be2;
    }
    body{
      margin:0; font-family:"Vazirmatn",system-ui;
      background:linear-gradient(180deg,var(--bg),var(--bg2));
      color:var(--text);
    }
    .container{max-width:1000px;margin:0 auto;padding:20px}
    h1{text-align:center;text-shadow:0 0 8px var(--neon2)}
    .toolbar{display:flex;gap:10px;justify-content:center;margin:20px 0}
    .input,.btn{padding:10px 14px;border-radius:10px;border:1px solid #18233f;background:#0c1324;color:var(--text)}
    .btn{cursor:pointer}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}
    .card{background:#111;border-radius:12px;padding:16px;box-shadow:0 0 12px rgba(0,255,213,0.2)}
    .card h3{margin:0 0 10px}
    .value{font-size:2rem;font-weight:800}
    /* هشدار */
    .alert{margin:20px auto;padding:14px;border-radius:12px;text-align:center;font-weight:700;font-size:1.1rem;color:#fff;background:#111;box-shadow:0 0 12px rgba(0,255,213,0.4)}
    .alert.good{background:var(--good)}
    .alert.moderate{background:var(--mod);color:#111}
    .alert.unhealthy{background:var(--unh)}
    .alert.bad{background:var(--bad)}
    .alert.vbad{background:var(--vbad);animation:blink 1s infinite alternate}
    @keyframes blink{from{box-shadow:0 0 20px var(--vbad)}to{box-shadow:0 0 40px var(--vbad)}}
  </style>
</head>
<body>
  <main class="container">
    <h1>کیفیت هوا — طراحی نئون</h1>
    <div class="toolbar">
      <input id="city" class="input" placeholder="نام شهر (مثلاً Tehran)" />
      <button id="load" class="btn">نمایش</button>
      <button id="refresh" class="btn">به‌روزرسانی</button>
    </div>

    <div id="alert-box" class="alert">وضعیت هشدار: —</div>

    <section id="cards" class="grid">
      <div class="card"><h3>AQI</h3><div class="value" id="val-aqi">—</div></div>
      <div class="card"><h3>PM2.5</h3><div class="value" id="val-pm25">—</div></div>
      <div class="card"><h3>PM10</h3><div class="value" id="val-pm10">—</div></div>
      <div class="card"><h3>O₃</h3><div class="value" id="val-o3">—</div></div>
      <div class="card"><h3>NO₂</h3><div class="value" id="val-no2">—</div></div>
    </section>
  </main>

  <script>
    const WAQI_TOKEN = "YOUR_WAQI_TOKEN"; // توکن خودت رو اینجا بذار
    let lastCity = "Tehran";

    function updateAlert(aqi){
      const alertBox = document.getElementById('alert-box');
      alertBox.className="alert";
      if (aqi<=50){alertBox.classList.add('good');alertBox.textContent="وضعیت هشدار: پاک";}
      else if (aqi<=100){alertBox.classList.add('moderate');alertBox.textContent="وضعیت هشدار: قابل قبول";}
      else if (aqi<=150){alertBox.classList.add('unhealthy');alertBox.textContent="وضعیت هشدار: ناسالم برای گروه‌های حساس";}
      else if (aqi<=200){alertBox.classList.add('bad');alertBox.textContent="وضعیت هشدار: ناسالم";}
      else if (aqi<=300){alertBox.classList.add('vbad');alertBox.textContent="وضعیت هشدار: بسیار ناسالم";}
      else {alertBox.classList.add('vbad');alertBox.textContent="وضعیت هشدار: خطرناک";}
    }

    async function fetchCityAQI(city){
      try{
        const url=`https://api.waqi.info/feed/${encodeURIComponent(city)}/?token=${WAQI_TOKEN}`;
        const res=await fetch(url); const data=await res.json();
        if(data.status!=="ok") throw new Error("داده یافت نشد");
        const aqi=data.data.aqi??'—';
        const iaqi=data.data.iaqi||{};
        document.getElementById('val-aqi').textContent=aqi;
        document.getElementById('val-pm25').textContent=iaqi.pm25?.v??'—';
        document.getElementById('val-pm10').textContent=iaqi.pm10?.v??'—';
        document.getElementById('val-o3').textContent=iaqi.o3?.v??'—';
        document.getElementById('val-no2').textContent=iaqi.no2?.v??'—';
        if(typeof aqi==="number") updateAlert(aqi);
      }catch(err){console.error(err)}
    }

    document.getElementById('load').addEventListener('click',()=>{
      const city=document.getElementById('city').value.trim()||lastCity;
      lastCity=city; fetchCityAQI(city);
    });
    document.getElementById('refresh').addEventListener('click',()=>fetchCityAQI(lastCity));

    fetchCityAQI(lastCity);
    setInterval(()=>fetchCityAQI(lastCity),5*60*1000);
  </script>
</body>
</html>
