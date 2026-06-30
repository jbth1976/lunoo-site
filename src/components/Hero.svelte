<script>
  import { amazonUrl } from '../lib/data.js';
  import { parallax } from '../lib/actions.js';
</script>

<section id="top" style="position:relative;min-height:96vh;display:flex;align-items:center;padding:150px 0 90px;background:linear-gradient(165deg,#34CADA 0%,#16A6B6 52%,#0B7E8A 100%);overflow:hidden">
  <div use:parallax={-0.05} style="position:absolute;top:-120px;right:-120px;width:520px;height:520px;border-radius:42% 58% 56% 44%/52% 44% 56% 48%;background:radial-gradient(circle at 40% 40%,rgba(255,255,255,.18),rgba(255,255,255,0));animation:blobDrift 14s ease-in-out infinite"></div>
  <div use:parallax={0.04} style="position:absolute;bottom:-160px;left:-100px;width:460px;height:460px;border-radius:48% 52% 40% 60%/56% 48% 52% 44%;background:radial-gradient(circle at 60% 40%,rgba(11,110,120,.5),rgba(11,110,120,0))"></div>
  <div style="position:absolute;top:16%;left:8%;width:120px;height:48px;border-radius:40px;background:rgba(255,255,255,.5);filter:blur(14px);animation:cloudDrift 9s ease-in-out infinite alternate"></div>
  <div style="position:absolute;top:62%;left:34%;width:90px;height:40px;border-radius:40px;background:rgba(255,255,255,.35);filter:blur(12px);animation:cloudDrift 11s ease-in-out infinite alternate"></div>
  <div style="position:absolute;top:22%;left:46%;color:#FFE9A8;font-size:20px;animation:twinkle 3.2s ease-in-out infinite">✦</div>
  <div style="position:absolute;top:70%;left:14%;color:#fff;font-size:14px;animation:twinkle 2.6s ease-in-out infinite .6s">✦</div>
  <div style="position:absolute;top:40%;right:38%;color:#FFE9A8;font-size:16px;animation:twinkle 3.6s ease-in-out infinite .3s">✦</div>
  <div style="position:absolute;top:30%;right:6%;width:16px;height:16px;border-radius:4px;background:#FFD23C;transform:rotate(18deg);animation:floatB 5s ease-in-out infinite"></div>
  <div style="position:absolute;bottom:18%;right:30%;width:14px;height:14px;border-radius:50%;background:#FF8FB4;animation:floatA 6s ease-in-out infinite"></div>

  <div class="hero-grid" style="max-width:1200px;margin:0 auto;padding:0 28px;display:grid;grid-template-columns:1.02fr .98fr;gap:40px;align-items:center;position:relative;width:100%">
    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.25);color:#fff;font-weight:800;font-size:13px;letter-spacing:.6px;text-transform:uppercase;padding:8px 16px;border-radius:999px">★ Coup de cœur jeunesse · Dès 3 ans</div>
      <h1 class="h-xl" style="font-family:'Fredoka',sans-serif;font-weight:700;font-size:74px;line-height:.98;letter-spacing:-1.6px;margin:22px 0 0;color:#fff;text-shadow:0 2px 30px rgba(11,110,120,.3)">Le livre qu'ils vont <span style="color:#FFD23C">réclamer</span> chaque soir.</h1>
      <p style="font-size:20px;line-height:1.5;color:rgba(255,255,255,.94);max-width:520px;margin:24px 0 0;font-weight:600">Suivez Lunoo, le petit monstre bleu aux yeux pétillants, et son amie Luna dans des aventures tendres et colorées. Le rituel du soir devient un pur moment de bonheur — sans écran.</p>
      <div style="display:flex;align-items:center;gap:16px;margin-top:32px;flex-wrap:wrap">
        <a href={amazonUrl} target="_blank" rel="noopener" class="btn-hero">Voir sur Amazon</a>
        <a href="#univers" class="btn-ghost">Découvrir Lunoo</a>
      </div>
      <div style="display:flex;align-items:center;gap:26px;margin-top:38px;flex-wrap:wrap;color:#fff">
        <div>
          <div style="font-family:'Fredoka',sans-serif;font-weight:600;font-size:26px">Dès 3 ans</div>
          <div style="font-weight:800;font-size:13.5px;color:rgba(255,255,255,.9);margin-top:3px">lecture du soir</div>
        </div>
        <div style="width:1px;height:38px;background:rgba(255,255,255,.28)"></div>
        <div><div style="font-family:'Fredoka',sans-serif;font-weight:600;font-size:26px">Papier + Kindle</div><div style="font-weight:800;font-size:13.5px;color:rgba(255,255,255,.9)">formats disponibles</div></div>
        <div style="width:1px;height:38px;background:rgba(255,255,255,.28)"></div>
        <div><div style="font-family:'Fredoka',sans-serif;font-weight:600;font-size:26px">5</div><div style="font-weight:800;font-size:13.5px;color:rgba(255,255,255,.9)">aventures jeunesse</div></div>
      </div>
    </div>

    <div class="hero-art" style="position:relative;min-height:540px;display:flex;align-items:center;justify-content:center">
      <div style="position:absolute;width:430px;height:430px;border-radius:50%;background:radial-gradient(circle at 50% 45%,rgba(255,255,255,.22),rgba(255,255,255,0))"></div>
      <div style="animation:bookBob 6.5s ease-in-out infinite">
        <div class="book-cover">
          <div style="position:absolute;top:14px;bottom:14px;right:-9px;width:18px;background:repeating-linear-gradient(180deg,#fff 0 2px,#e7dccb 2px 4px);border-radius:0 4px 4px 0;transform:skewY(-6deg);box-shadow:5px 10px 18px rgba(8,40,46,.28);z-index:0"></div>
          <img src="/assets/cover-corse-titled.png" alt="Couverture Lunoo & Luna en Corse" style="position:relative;z-index:1;display:block;width:318px;height:442px;object-fit:cover;border-radius:7px 13px 13px 7px;box-shadow:0 44px 80px rgba(8,40,46,.42);border-left:6px solid rgba(0,0,0,.14)" />
        </div>
      </div>
      <div style="position:absolute;left:-2%;top:12%;display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.9);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.7);border-radius:16px;padding:11px 15px;box-shadow:0 16px 34px rgba(8,40,46,.22);animation:floatA 7s ease-in-out infinite">
        <div style="width:40px;height:40px;border-radius:11px;background:#FFF1D6;display:flex;align-items:center;justify-content:center;color:#E89B00;font-size:18px">★</div>
        <div><div style="font-family:'Fredoka',sans-serif;font-weight:600;font-size:16px;line-height:1">Amazon</div><div style="font-size:11.5px;color:#6a7884;font-weight:800">page auteur</div></div>
      </div>
      <div style="position:absolute;right:-4%;top:30%;background:#FF6F59;color:#fff;font-family:'Fredoka',sans-serif;font-weight:600;font-size:14px;padding:9px 16px;border-radius:999px;box-shadow:0 14px 28px rgba(255,111,89,.4);transform:rotate(6deg);animation:floatC 6s ease-in-out infinite">Nouveau</div>
      <div style="position:absolute;right:2%;bottom:14%;display:flex;align-items:center;gap:9px;background:rgba(255,255,255,.9);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.7);border-radius:14px;padding:10px 14px;box-shadow:0 16px 34px rgba(8,40,46,.22);animation:floatB 7.5s ease-in-out infinite .4s">
        <span style="color:#3CA866;font-size:16px">✓</span><span style="font-weight:800;font-size:13.5px;color:#16263A">100% sans écran</span>
      </div>
      <div style="position:absolute;left:4%;bottom:8%;width:110px;height:110px;border-radius:50%;overflow:hidden;border:5px solid #fff;box-shadow:0 18px 34px rgba(8,40,46,.28);animation:floatA 8s ease-in-out infinite .2s">
        <img src="/assets/duo-monsters.png" alt="Lunoo et Luna" style="width:100%;height:100%;object-fit:cover" />
      </div>
    </div>
  </div>
</section>
