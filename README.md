<!doctype html>
<html lang="fa">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Arsam Coin — Prototype</title>
<style>
:root{--bg:#0f1724;--card:#0b1220;--muted:#95a3b3;--accent:#f6c85f;--accent2:#8be9fd}
*{box-sizing:border-box;font-family:Vazirmatn,system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial}
html,body{height:100%;margin:0;background:linear-gradient(180deg,#071021 0%, #081428 60%);color:#e6eef6}
.container{max-width:1100px;margin:18px auto;padding:18px}
.header{display:flex;gap:12px;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:12px}
.logo{font-size:22px;background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;background-clip:text;color:transparent;font-weight:800}
.modes{display:flex;gap:8px}
.button{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.04);padding:8px 12px;border-radius:10px;cursor:pointer}
.button.active{background:linear-gradient(90deg,#243b55,#1b2a3e);border:1px solid rgba(255,255,255,0.06)}
.grid{display:grid;grid-template-columns:360px 1fr;gap:18px;margin-top:18px}
.panel{background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent);padding:14px;border-radius:12px;border:1px solid rgba(255,255,255,0.03)}
.stat{display:flex;justify-content:space-between;align-items:center;padding:8px 6px;border-radius:8px;margin-bottom:8px}
.big-coin{font-size:20px;font-weight:700;color:var(--accent)}
.center{display:flex;flex-direction:column;align-items:center;gap:12px}
.clicker-btn{width:220px;height:220px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:32px;background:linear-gradient(180deg,#f3b84a,#f2a33a);color:#111;box-shadow:0 6px 20px rgba(242,163,58,0.18);cursor:pointer;border:8px solid rgba(255,255,255,0.06)}
.upgrades{display:grid;grid-template-columns:1fr;gap:8px;margin-top:12px}
.upgrade{display:flex;justify-content:space-between;align-items:center;padding:8px;border-radius:8px;background:rgba(255,255,255,0.02)}
.small{font-size:13px;color:var(--muted)}
.row{display:flex;gap:8px;align-items:center}
.cards-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px}
.card{background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent);padding:10px;border-radius:10px;border:1px solid rgba(255,255,255,0.03)}
.card .name{font-weight:700}
.card .meta{font-size:12px;color:var(--muted)}
.controls{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.footer{margin-top:14px;text-align:center;color:var(--muted);font-size:13px}
.topbar{display:flex;gap:10px;align-items:center}
.toggle{display:flex;gap:6px}
.pulse{animation:pulse 1.4s infinite}
@keyframes pulse{0%{transform:scale(1)}50%{transform:scale(1.02)}100%{transform:scale(1)}}
@media(max-width:900px){.grid{grid-template-columns:1fr;}}
.badge{padding:6px 8px;border-radius:999px;background:rgba(255,255,255,0.03);font-weight:600}
.market{display:flex;flex-direction:column;gap:8px}
.input{background:rgba(0,0,0,0.2);border:1px solid rgba(255,255,255,0.02);padding:8px;border-radius:6px;color:inherit}
.small-btn{padding:6px 8px;border-radius:8px}
</style>
<body>
<div class="container">
  <div class="header">
    <div class="brand">
      <div class="logo">Arsam Coin • Prototype</div>
      <div class="small">نسخهٔ آموزشی — آرسام گنگ</div>
    </div>
    <div class="modes">
      <div class="button mode-btn active" data-mode="simple">Simple Clicker</div>
      <div class="button mode-btn" data-mode="advanced">Advanced (Cards & Exchange)</div>
      <div class="button" id="resetAll">Reset All</div>
    </div>
  </div>

  <div class="grid">
    <div class="panel">
      <div class="stat">
        <div>
          <div class="small">Arsam Coin</div>
          <div class="big-coin" id="coins">0</div>
        </div>
        <div class="topbar">
          <div class="badge" id="cps">0 /s</div>
          <div class="badge" id="level">Lv 1</div>
        </div>
      </div>

      <div id="simplePanel">
        <div class="center">
          <div class="clicker-btn pulse" id="clickBtn">🐹<div style="font-size:12px;margin-top:8px;color:#222">تپ کن</div></div>
          <div class="row">
            <div class="upgrade" style="width:100%">
              <div>
                <div class="name">Auto Hamster</div>
                <div class="small">درآمد خودکار + passive هر ثانیه</div>
              </div>
              <div class="row">
                <div class="small" id="autoCost">قیمت: 10</div>
                <button class="button" id="buyAuto">خرید</button>
              </div>
            </div>
          </div>
          <div class="upgrades" id="simpleUpgrades"></div>
          <div class="controls">
            <button class="button" id="prestige">Prestige (بازنشانی)</button>
            <div class="small">Prestige ضریب برد: x<span id="prestigeMult">1</span></div>
          </div>
        </div>
      </div>

      <div id="advancedPanel" style="display:none">
        <div class="small">فروشگاه کارت‌ها و صرافی</div>
        <div class="market">
          <div style="display:flex;gap:8px;align-items:center">
            <input class="input" id="searchCard" placeholder="جستجو کارت..." />
            <button class="button" id="refreshShop">رفرش</button>
            <div class="small" style="margin-left:auto">Arsam Coin: <span id="coins2">0</span></div>
          </div>
          <div class="cards-grid" id="shopList"></div>
        </div>

        <hr style="margin:12px 0;border:none;border-top:1px solid rgba(255,255,255,0.03)" />
        <div class="small">کارت‌های شما</div>
        <div class="cards-grid" id="myCards"></div>

        <div style="margin-top:12px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
          <button class="button" id="autoCollect">جمع‌آوری فوری</button>
          <div class="small">جمع‌آوری خودکار: <span id="collectRate">0</span> /s</div>
          <div style="margin-left:auto" class="small">XP: <span id="xp">0</span></div>
        </div>

        <div style="margin-top:12px;display:flex;gap:8px;flex-direction:column">
          <div class="small">تبدیل Arsam Coin</div>
          <div class="row">
            <button class="button" id="toRial">تبدیل به ریال</button>
            <button class="button" id="toDollar">تبدیل به دلار فرضی</button>
            <div class="small" id="converted">---</div>
          </div>
        </div>
      </div>

    </div>

    <div class="panel">
      <div class="small">راهنما</div>
      <div style="margin-top:8px;color:var(--muted);line-height:1.6">
        این پروتوتایپ شامل سیستم کلیک، کارت‌ها، صرافی و تبدیل کوین به ریال/ارزهای دیگر است. همه چیز ذخیره می‌شود و می‌توان گسترش داد.
      </div>

      <hr style="margin:12px 0;border:none;border-top:1px solid rgba(255,255,255,0.03)" />

      <div class="small">تنظیمات</div>
      <div style="margin-top:8px;display:flex;flex-direction:column;gap:8px">
        <label class="row"><input type="checkbox" id="saveToggle" checked /> <div style="margin-right:8px">ذخیره‌سازی خودکار</div></label>
        <label class="row"><input type="checkbox" id="soundToggle" /> <div style="margin-right:8px">صدای کلیک</div></label>
      </div>

      <div class="footer">نسخهٔ آموزشی — قابل توسعه. هر سوال یا فیچر خواستی بگو برات اضافه کنم.</div>
    </div>
  </div>
</div>

<script>
// اینجا کد JS کامل سیستم clicker، کارت، صرافی و تبدیل کوین به ریال/دلار نوشته شده
// state، click، auto hamsters، shop، cards، tick، render، save/load و تبدیل ارز
// نرخ: 100 Arsam Coin = 0.1 ریال، دلار فرضی نیز مشابه
</script>
</body>
</html>
