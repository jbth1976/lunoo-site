<script>
  import { reveal } from '../lib/actions.js';

  const reviews = [
    { stars: '★★★★★', text: '« Mon fils de 4 ans réclame Lunoo tous les soirs. Les illustrations sont magnifiques et l\u2019histoire juste de la bonne longueur. »', initial: 'C', bg: '#DBF3F5', color: '#0E8A96', name: 'Camille D.', role: 'Maman de Léo, 4 ans' },
    { stars: '★★★★★', text: '« Je l\u2019utilise en classe de maternelle. Les enfants accrochent immédiatement et le vocabulaire est parfaitement adapté. »', initial: 'N', bg: '#E2F6E9', color: '#3CA866', name: 'Nadia B.', role: 'Institutrice, petite section' },
    { stars: '★★★★★', text: '« Un de nos coups de cœur jeunesse. La qualité d\u2019impression est superbe et la série fidélise les jeunes lecteurs. »', initial: 'L', bg: '#FCDCE7', color: '#C24A78', name: 'Librairie Le Petit Renard', role: 'Libraire jeunesse' },
  ];
</script>

<section id="avis" style="position:relative;padding:104px 0">
  <div style="max-width:1200px;margin:0 auto;padding:0 28px">
    <div use:reveal style="text-align:center;max-width:680px;margin:0 auto 56px">
      <div style="display:inline-block;background:#FFF1D6;color:#B97A00;font-weight:800;font-size:13px;letter-spacing:1px;text-transform:uppercase;padding:8px 15px;border-radius:999px">Ils en parlent</div>
      <h2 class="h-lg" style="font-family:'Fredoka',sans-serif;font-weight:600;font-size:50px;letter-spacing:-.8px;margin:18px 0 0;line-height:1.04">Parents, maîtresses &amp; libraires</h2>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px">
      {#each reviews as r}
        <div use:reveal style="background:#fff;border-radius:24px;padding:32px;box-shadow:0 18px 40px rgba(22,38,58,.07);border:1px solid rgba(22,38,58,.04)">
          <div style="color:#FFB400;letter-spacing:2px;font-size:17px">{r.stars}</div>
          <p style="font-size:17px;line-height:1.6;margin:16px 0 22px;font-weight:600;color:#27323d">{r.text}</p>
          <div style="display:flex;align-items:center;gap:12px">
            <div style="width:44px;height:44px;border-radius:50%;background:{r.bg};display:flex;align-items:center;justify-content:center;font-family:'Fredoka';font-weight:600;color:{r.color}">{r.initial}</div>
            <div><div style="font-weight:800;font-size:14.5px">{r.name}</div><div style="font-size:13px;color:#8a93a0;font-weight:700">{r.role}</div></div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
