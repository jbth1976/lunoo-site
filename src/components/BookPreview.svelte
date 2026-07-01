<script>
  import { reveal } from '../lib/actions.js';

  const pages = [
    { img: '/assets/page1.webp', alt: 'Introduction' },
    { img: '/assets/page2.webp', alt: 'Chapitre 1' },
    { img: '/assets/page3.webp', alt: 'Chapitre 6' },
    { img: '/assets/page4.webp', alt: 'Chapitre 8' },
  ];

  let page = 0;
  const count = pages.length;
  function go(n) {
    page = ((n % count) + count) % count;
  }
</script>

<section id="apercu" style="position:relative;padding:100px 0;background:linear-gradient(165deg,#1B3242 0%,#16263A 100%);overflow:hidden">
  <div style="position:absolute;top:14%;left:8%;color:rgba(255,255,255,.5);font-size:16px;animation:twinkle 3s ease-in-out infinite">✦</div>
  <div style="position:absolute;bottom:18%;right:10%;color:rgba(255,210,60,.7);font-size:18px;animation:twinkle 3.4s ease-in-out infinite .4s">✦</div>
  <div style="max-width:1100px;margin:0 auto;padding:0 28px">
    <div use:reveal style="text-align:center;max-width:680px;margin:0 auto 48px;color:#fff">
      <div style="display:inline-block;background:rgba(255,255,255,.12);color:#7FE3EC;font-weight:800;font-size:13px;letter-spacing:1px;text-transform:uppercase;padding:8px 15px;border-radius:999px">Aperçu</div>
      <h2 class="h-lg" style="font-family:'Fredoka',sans-serif;font-weight:600;font-size:50px;letter-spacing:-.8px;margin:18px 0 0;line-height:1.04">Feuilletez le livre</h2>
      <p style="font-size:18px;color:rgba(255,255,255,.78);line-height:1.55;margin:16px 0 0;font-weight:500">Un avant-goût des illustrations. Utilisez les flèches pour tourner les pages.</p>
    </div>
    <div use:reveal style="position:relative">
      <div style="overflow:hidden;border-radius:22px;box-shadow:0 40px 80px rgba(0,0,0,.4)">
        <div style="display:flex;transition:transform .55s cubic-bezier(.4,0,.2,1);transform:translateX({-page * 100}%)">
          {#each pages as p}
            <img src={p.img} alt={p.alt} width="1100" height="688" loading="lazy" decoding="async" style="flex:0 0 100%;width:100%;display:block" />
          {/each}
        </div>
      </div>
      <button class="car-arrow" aria-label="Page précédente" style="left:-22px" on:click={() => go(page - 1)}>‹</button>
      <button class="car-arrow" aria-label="Page suivante" style="right:-22px" on:click={() => go(page + 1)}>›</button>
    </div>
    <div style="display:flex;justify-content:center;gap:10px;margin-top:24px">
      {#each pages as _, i}
        <button
          class="dot-btn"
          aria-label="Aller à la page {i + 1}"
          aria-current={i === page ? 'true' : undefined}
          on:click={() => go(i)}
        >
          <span style="background:{i === page ? '#FFC23C' : 'rgba(255,255,255,.72)'}"></span>
        </button>
      {/each}
    </div>
  </div>
</section>
