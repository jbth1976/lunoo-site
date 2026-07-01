<script>
  import { books } from '../lib/data.js';
  import { reveal } from '../lib/actions.js';
</script>

<section id="serie" style="position:relative;padding:0 0 104px">
  <div style="max-width:1200px;margin:0 auto;padding:0 28px">
    <div use:reveal style="text-align:center;max-width:720px;margin:0 auto 56px">
      <div style="display:inline-block;background:#E7E1FB;color:#7858D8;font-weight:800;font-size:13px;letter-spacing:1px;text-transform:uppercase;padding:8px 15px;border-radius:999px">La collection</div>
      <h2 class="h-lg" style="font-family:'Fredoka',sans-serif;font-weight:600;font-size:50px;letter-spacing:-.8px;margin:18px 0 0;line-height:1.04">Le monde merveilleux des Lunooni</h2>
      <p style="font-size:18px;color:#51637A;line-height:1.55;margin:16px 0 0;font-weight:500">Cinq aventures à collectionner — de la forêt enchantée aux plages de la Méditerranée. Chaque tome, une nouvelle escapade.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:26px">
      {#each books as book}
        <a class="book-card" href={book.url} target="_blank" rel="noopener" use:reveal>
          <div style="border-radius:14px;overflow:hidden;background:linear-gradient(160deg,#EAF7F2,#F3E4E1);aspect-ratio:3/4;display:flex;align-items:center;justify-content:center">
            <img src={book.img} alt={book.title} width="240" height="360" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;object-position:left center" />
          </div>
          <div style="font-family:'Fredoka',sans-serif;font-weight:500;font-size:17px;line-height:1.18;margin:16px 4px 0;color:#16263A;min-height:60px">{book.title}</div>
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin:12px 4px 4px">
            <span style="font-family:'Fredoka',sans-serif;font-weight:600;font-size:18px;color:#0E8A96">{book.price}</span>
            <span style="display:inline-flex;align-items:center;gap:6px;background:#FF9A00;color:#16263A;font-weight:800;font-size:12.5px;padding:8px 13px;border-radius:999px">Amazon →</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
