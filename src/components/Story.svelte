<script>
  import { reveal } from '../lib/actions.js';

  const chapters = [
    ['01', 'Une arrivée magique en ferry'],
    ['02', 'Le marché corse'],
    ['03', 'Le banc des montagnes'],
    ['04', "Le phare d'Ajaccio"],
    ['05', 'Le port des pêcheurs'],
    ['06', "Les parfums de l'île"],
    ['07', 'Jeux de plage'],
    ['08', 'La rencontre avec les dauphins'],
    ['09', 'Le selfie du voyage'],
    ['10', 'Coloriages à imprimer'],
    ['11', 'Message pour les parents'],
    ['★', 'Bonus : le secret du maquis'],
  ];
  const tags = ['🎨 Coloriages', '🧩 Labyrinthe', '👀 Jeu des jumeaux', '⭐ Super quiz'];
</script>

<section id="histoire" style="position:relative;padding:104px 0">
  <div style="max-width:1200px;margin:0 auto;padding:0 28px">
    <div class="grid-2" style="display:grid;grid-template-columns:.92fr 1.08fr;gap:60px;align-items:center">
      <div use:reveal>
        <div style="display:inline-block;background:#DBF3F5;color:#0E8A96;font-weight:800;font-size:13px;letter-spacing:1px;text-transform:uppercase;padding:8px 15px;border-radius:999px">L'aventure du moment</div>
        <h2 class="h-lg" style="font-family:'Fredoka',sans-serif;font-weight:600;font-size:46px;letter-spacing:-.7px;margin:18px 0 0;line-height:1.05">Cap sur « Lunoo &amp; Luna en Corse »</h2>
        <p style="font-size:17.5px;color:#51637A;line-height:1.6;margin:18px 0 0;font-weight:500">Embarquez avec Lunoo et Luna pour une traversée en ferry vers une île de plages turquoise, de villages perchés, de marchés gourmands et de couchers de soleil flamboyants.</p>
        <blockquote style="margin:26px 0 0;padding:22px 26px;background:linear-gradient(150deg,#E7F6F4,#FBEAF0);border-radius:18px;font-family:'Fredoka',sans-serif;font-weight:500;font-size:20px;line-height:1.4;color:#16263A">« Ce n'était pas seulement un voyage. C'était une nouvelle histoire qui commençait. »</blockquote>
        <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:26px">
          {#each tags as tag}
            <span style="display:inline-flex;align-items:center;gap:7px;background:#fff;border:1px solid rgba(22,38,58,.08);color:#16263A;font-weight:800;font-size:13.5px;padding:9px 15px;border-radius:999px">{tag}</span>
          {/each}
        </div>
      </div>
      <div use:reveal style="background:#16263A;border-radius:30px;padding:44px;position:relative;overflow:hidden">
        <div style="position:absolute;top:-30px;right:-30px;width:160px;height:160px;border-radius:50%;background:rgba(29,182,196,.16)"></div>
        <div style="position:absolute;top:18px;right:24px;color:rgba(255,210,60,.6);font-size:18px">✦</div>
        <div style="font-family:'Fredoka',sans-serif;font-weight:600;font-size:14px;letter-spacing:1px;text-transform:uppercase;color:#7FE3EC;position:relative">Au sommaire · 12 chapitres</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px 28px;margin-top:22px;position:relative">
          {#each chapters as [num, title]}
            <div style="display:flex;gap:12px;align-items:baseline;color:#FFF7EF"><span style="font-family:'Fredoka';font-weight:600;color:#FFC23C;font-size:15px;width:20px;flex:0 0 auto">{num}</span><span style="font-weight:600;font-size:15.5px">{title}</span></div>
          {/each}
        </div>
      </div>
    </div>

    <div use:reveal style="margin-top:40px;background:#fff;border-radius:28px;padding:44px 48px;box-shadow:0 18px 40px rgba(22,38,58,.07);border:1px solid rgba(22,38,58,.04);display:grid;grid-template-columns:auto 1fr;gap:32px;align-items:center">
      <div style="width:96px;height:96px;border-radius:50%;overflow:hidden;background:#DBF3F5;flex:0 0 auto;box-shadow:0 12px 26px rgba(22,38,58,.14)">
        <img src="/assets/duo-monsters.webp" alt="Lunoo et Luna souriants" width="520" height="520" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover" />
      </div>
      <div>
        <div style="font-family:'Fredoka',sans-serif;font-weight:600;font-size:13px;letter-spacing:1px;text-transform:uppercase;color:#C24A78">Le mot de l'auteur</div>
        <p style="font-size:17.5px;line-height:1.6;color:#33424d;margin:10px 0 0;font-weight:500">« Chaque histoire de Lunoo est pensée pour éveiller l'imagination des enfants et leur rappeler l'importance de la joie, de la curiosité et de l'entraide. Merci de partager ce moment précieux avec votre enfant. »</p>
        <div style="font-family:'Fredoka',sans-serif;font-weight:600;font-size:17px;margin-top:14px;color:#16263A">Jean-Baptiste Tharrault</div>
        <div style="font-size:13.5px;color:#8a93a0;font-weight:700">Auteur &amp; illustrateur de la série Lunoo</div>
      </div>
    </div>
  </div>
</section>
