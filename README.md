<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>آرسام خوش اخلاق</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
<style>
:root{
  --neon-1:#00ffff;
  --neon-2:#ff00cc;
  --neon-shadow:0 0 5px var(--neon-1),0 0 10px var(--neon-2);
}
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}
body{
  font-family:'Vazirmatn',sans-serif;
  background:#0a0a0a;
  color:#eaeaea;
  overflow-x:hidden;
}

/* ---------- Stars ---------- */
.star{
  position:fixed;
  width:2px;
  height:2px;
  border-radius:50%;
  background:#fff;
  opacity:0.8;
  z-index:0;
  pointer-events:none;
  animation:twinkle 3s infinite;
}
@keyframes twinkle{
  0%,100%{opacity:0.2;}
  50%{opacity:1;}
}

/* ---------- Sections ---------- */
section{
  padding:80px 20px;
  text-align:center;
  position:relative;
  z-index:1;
}
h2{
  font-size:2.5rem;
  margin-bottom:30px;
  position:relative;
}

/* ---------- About Me ---------- */
#about-me{
  background:#111;
  border-radius:10px;
  margin:20px auto;
  max-width:1000px;
  padding:60px 20px;
}

/* ---------- Projects ---------- */
#projects{
  background:#222;
  border-radius:10px;
  margin:20px auto;
  max-width:1000px;
  padding:60px 20px;
}
.project-list{
  display:flex;
  flex-direction:column;
  gap:25px;
  align-items:center;
}
.project{
  padding:20px;
  background:#333;
  border-radius:12px;
  width:90%;
  transition:all 0.3s ease;
}
.project:hover{
  box-shadow:0 0 20px var(--neon-1),0 0 30px var(--neon-2);
  transform:translateY(-5px);
}

/* ---------- Contact ---------- */
#contact-section{
  background:#111;
  border-radius:10px;
  margin:20px auto;
  max-width:600px;
  padding:60px 20px;
}
.contact-card{
  padding:20px;
  border-radius:14px;
  background:rgba(0,255,255,0.05);
  box-shadow:0 0 20px rgba(0,255,255,0.2);
}
input,textarea{
  width:100%;
  padding:12px;
  margin:10px 0;
  border-radius:10px;
  border:1px solid rgba(0,255,255,0.2);
  background:rgba(0,255,255,0.05);
  color:#fff;
  font-family:inherit;
  text-align:right;
}
input::placeholder,textarea::placeholder{color:#aaa;}
.btn-submit{
  background:linear-gradient(135deg,var(--neon-1),var(--neon-2));
  border:none;
  color:#000;
  padding:12px 25px;
  border-radius:30px;
  font-weight:700;
  cursor:pointer;
  margin-top:10px;
  transition:all 0.3s ease;
}
.btn-submit:hover{
  box-shadow:var(--neon-shadow);
  transform:scale(1.05);
}
.success-message{
  display:none;
  color:#0f0;
  margin-top:10px;
  font-weight:bold;
}

/* ---------- Footer ---------- */
footer{
  background:#111;
  padding:25px 0;
  text-align:center;
  border-top:2px solid #222;
}
footer a{
  margin:0 10px;
  display:inline-block;
  width:50px;
  height:50px;
  background:#222;
  border-radius:50%;
  color:#fff;
  line-height:50px;
  font-size:24px;
  text-decoration:none;
  transition:all 0.3s ease;
}
footer a:hover{
  transform:translateY(-5px) scale(1.1);
  box-shadow:0 0 15px var(--neon-1),0 0 25px var(--neon-2);
}
footer p{
  margin-top:10px;
  color:#aaa;
  font-size:0.9rem;
}
</style>
</head>
<body>

<!-- Stars -->
<script>
function createStars(count=150){
  for(let i=0;i<count;i++){
    const s=document.createElement('div');
    s.className='star';
    const size=1+Math.random()*2;
    s.style.width=s.style.height=size+'px';
    s.style.left=(Math.random()*100)+'vw';
    s.style.top=(Math.random()*100)+'vh';
    s.style.opacity=(0.2+Math.random()*0.8).toString();
    document.body.appendChild(s);
  }
}
createStars();
</script>

<!-- About Me -->
<section id="about-me">
  <h2>درباره من</h2>
  <p>سلام! من <strong>آرسام خوش اخلاق</strong> هستم — توسعه‌دهنده وب، ماینکرفت‌باز و سازنده سرورهای اختصاصی. اینجا نمونه‌کارها و راه‌های ارتباط با من قرار دارد.</p>
</section>

<!-- Projects -->
<section id="projects">
  <h2>پروژه‌ها</h2>
  <div class="project-list">
    <div class="project">
      <h3>🌍 سرور ماینکرفت LAVA JUMP</h3>
      <p>رقابت کن و از سرور ما لذت ببر! آدرس سرور و وضعیت آنلاین در زیر نمایش داده می‌شود.</p>
    </div>
    <div class="project">
      <h3>🌐 سایت شخصی</h3>
      <p>طراحی و پیاده‌سازی سایت شخصی با تمرکز روی ظاهر و تجربه کاربری.</p>
    </div>
    <div class="project">
      <h3>🎬 ادیت ویدیو</h3>
      <p>ادیت و تولید محتوا برای یوتیوب و شبکه‌های اجتماعی.</p>
    </div>
  </div>
</section>

<!-- Contact -->
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

<!-- Footer -->
<footer>
  <a href="https://instagram.com/arsam.khosh.akhlagh.2012" target="_blank" title="اینستاگرام">📷</a>
  <a href="https://github.com/username" target="_blank" title="گیت‌هاب">🐱</a>
  <a href="https://twitter.com/username" target="_blank" title="توییتر">🐦</a>
  <p>© 2025 آرسام خوش اخلاق</p>
</footer>

<script>
// Contact Form
document.getElementById('contact-form').addEventListener('submit', async function(e){
  e.preventDefault();
  const form=this;
  const data=new FormData(form);
  const res=await fetch(form.action,{method:'POST',body:data,headers:{'Accept':'application/json'}});
  const msg=document.getElementById('successMessage');
  if(res.ok){form.reset(); msg.style.display='block'; setTimeout(()=>msg.style.display='none',4000);}
  else{alert('❌ خطا در ارسال پیام، دوباره امتحان کنید.');}
});
</script>

</body>
</html>
