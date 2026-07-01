<script>
  import { amazonUrl } from '../lib/data.js';
  import { reveal } from '../lib/actions.js';
</script>

<section style="position:relative;padding:0 0 100px">
  <div style="max-width:1200px;margin:0 auto;padding:0 28px">
    <div use:reveal style="position:relative;background:linear-gradient(150deg,#34CADA 0%,#16A6B6 45%,#16263A 120%);border-radius:40px;padding:84px 48px;text-align:center;overflow:hidden">
      <div style="position:absolute;top:0;left:0;right:0;height:8px;background:linear-gradient(90deg,#FF6F59 0 16.66%,#FFC23C 0 33.33%,#56C386 0 50%,#1DB6C4 0 66.66%,#8B6CE6 0 83.33%,#F47CA8 0 100%)"></div>
      <div style="position:absolute;top:16%;left:10%;color:rgba(255,255,255,.6);font-size:18px;animation:twinkle 3s ease-in-out infinite">✦</div>
      <div style="position:absolute;bottom:20%;right:12%;color:#FFE9A8;font-size:16px;animation:twinkle 3.4s ease-in-out infinite .3s">✦</div>
      <img src="/assets/duo-monsters.webp" alt="Lunoo et Luna" width="520" height="520" loading="lazy" decoding="async" style="width:104px;height:104px;border-radius:50%;object-fit:cover;border:5px solid rgba(255,255,255,.85);box-shadow:0 18px 34px rgba(0,0,0,.25);margin:0 auto 24px;display:block;animation:floatA 7s ease-in-out infinite" />
      <h2 class="h-lg" style="font-family:'Fredoka',sans-serif;font-weight:700;font-size:54px;color:#fff;letter-spacing:-1px;margin:0 auto;max-width:680px;line-height:1.02">Offrez-leur leur prochain moment préféré</h2>
      <p style="color:rgba(255,255,255,.85);font-size:19px;margin:18px auto 0;max-width:520px;font-weight:600">Lunoo &amp; Luna vous attendent. Disponible dès maintenant sur Amazon — broché ou Kindle.</p>
      <a href={amazonUrl} target="_blank" rel="noopener" class="btn-final">Commander sur Amazon</a>
    </div>
  </div>
</section>
