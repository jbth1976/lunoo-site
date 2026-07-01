<script>
  import { amazonUrl } from '../lib/data.js';
  export let scrolled = false;
</script>

<header class="hdr" class:scrolled>
  <div class="hdr-inner" style="max-width:1200px;margin:0 auto;padding:16px 28px;display:flex;align-items:center;justify-content:space-between;gap:24px">
    <a href="#top" class="brand-link"><img src="/assets/lunoo-logo-header.webp" alt="Lunoo" class="brand-logo" width="260" height="170" decoding="async" /></a>
    <nav class="nav-main" style="display:flex;align-items:center;gap:2px;font-weight:700;font-size:14.5px;background:rgba(255,255,255,.14);padding:5px;border-radius:999px;border:1px solid rgba(255,255,255,.18)">
      <a href="#univers" class="navlink">L'univers</a>
      <a href="#apercu" class="navlink">Le livre</a>
      <a href="#serie" class="navlink">La série</a>
      <a href="#histoire" class="navlink">L'histoire</a>
      <a href="#parents" class="navlink">Parents</a>
      <a href="#avis" class="navlink">Avis</a>
      <a href="#faq" class="navlink">FAQ</a>
    </nav>
    <div class="hdr-actions" style="display:flex;align-items:center;gap:14px">
      <div class="hdr-rating" style="display:flex;align-items:center;gap:6px;font-weight:800;font-size:14px;color:#fff;white-space:nowrap">
        <span style="color:#FFD23C;font-size:15px">★</span><span>Dès 3 ans</span>
      </div>
      <a href={amazonUrl} target="_blank" rel="noopener" class="btn-amazon" style="font-size:15.5px">Voir sur Amazon</a>
    </div>
  </div>
</header>
