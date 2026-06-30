<script>
  import { amazonUrl } from '../lib/data.js';
  import { reveal } from '../lib/actions.js';
</script>

<section id="parents" style="position:relative;padding:0 0 104px">
  <div style="max-width:1200px;margin:0 auto;padding:0 28px">
    <div class="grid-2 pad-card" style="background:linear-gradient(150deg,#E7F6F4 0%,#FBEAF0 100%);border-radius:38px;padding:64px;display:grid;grid-template-columns:.9fr 1.1fr;gap:56px;align-items:center;position:relative;overflow:hidden">
      <div style="position:absolute;top:-60px;left:-60px;width:200px;height:200px;border-radius:50%;background:rgba(29,182,196,.12)"></div>
      <div use:reveal style="position:relative">
        <div style="position:relative;border-radius:24px;overflow:hidden;box-shadow:0 28px 56px rgba(22,38,58,.16);aspect-ratio:4/5">
          <img src="/assets/skater-monster.jpeg" alt="Univers Lunoo" style="width:100%;height:100%;object-fit:cover" />
        </div>
        <div style="position:absolute;right:-16px;bottom:-16px;background:#fff;border-radius:16px;padding:12px 16px;box-shadow:0 16px 32px rgba(22,38,58,.16);display:flex;align-items:center;gap:10px;z-index:2">
          <div style="width:38px;height:38px;border-radius:10px;background:#E2F6E9;display:flex;align-items:center;justify-content:center;color:#3CA866;font-size:18px">✓</div>
          <div style="font-weight:800;font-size:13.5px;line-height:1.25">Qualité<br />premium</div>
        </div>
      </div>
      <div use:reveal>
        <div style="display:inline-block;background:#fff;color:#0E8A96;font-weight:800;font-size:13px;letter-spacing:1px;text-transform:uppercase;padding:8px 15px;border-radius:999px">Côté parents</div>
        <h2 class="h-lg" style="font-family:'Fredoka',sans-serif;font-weight:600;font-size:46px;letter-spacing:-.7px;margin:18px 0 24px;line-height:1.06">Un livre en lequel on a confiance</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
          <div style="display:flex;gap:12px;align-items:flex-start"><span style="color:#0E8A96;font-size:20px;line-height:1.2">✦</span><div><div style="font-weight:800;font-size:16px">Pages épaisses &amp; solides</div><div style="font-size:14px;color:#5a6772;font-weight:500;line-height:1.5">Conçues pour résister aux petites mains.</div></div></div>
          <div style="display:flex;gap:12px;align-items:flex-start"><span style="color:#0E8A96;font-size:20px;line-height:1.2">✦</span><div><div style="font-weight:800;font-size:16px">100% sans écran</div><div style="font-size:14px;color:#5a6772;font-weight:500;line-height:1.5">Une vraie parenthèse loin des tablettes.</div></div></div>
          <div style="display:flex;gap:12px;align-items:flex-start"><span style="color:#0E8A96;font-size:20px;line-height:1.2">✦</span><div><div style="font-weight:800;font-size:16px">Moment de partage</div><div style="font-size:14px;color:#5a6772;font-weight:500;line-height:1.5">Un rituel complice entre parent et enfant.</div></div></div>
          <div style="display:flex;gap:12px;align-items:flex-start"><span style="color:#0E8A96;font-size:20px;line-height:1.2">✦</span><div><div style="font-weight:800;font-size:16px">Valeurs positives</div><div style="font-size:14px;color:#5a6772;font-weight:500;line-height:1.5">Amitié, courage, gentillesse et curiosité.</div></div></div>
        </div>
        <a href={amazonUrl} target="_blank" rel="noopener" class="btn-dark" style="margin-top:30px">Découvrir sur Amazon</a>
      </div>
    </div>
  </div>
</section>
