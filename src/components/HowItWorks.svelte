<script>
  import { reveal } from '../lib/actions.js';

  const steps = [
    { n: '1', bg: '#16263A', color: '#fff', title: 'Je commande', text: 'En un clic sur Amazon, livraison rapide.' },
    { n: '2', bg: '#1DB6C4', color: '#fff', title: 'Je reçois', text: 'Un bel objet cartonné prêt à offrir.' },
    { n: '3', bg: '#F47CA8', color: '#fff', title: 'Je lis', text: 'Un moment doux et complice au coucher.' },
    { n: '4', bg: '#FFC23C', color: '#16263A', title: 'Il en redemande', text: '« Encore Lunoo ! » — chaque soir.' },
  ];
</script>

<section style="position:relative;padding:0 0 104px">
  <div style="max-width:1200px;margin:0 auto;padding:0 28px">
    <div class="pad-card" style="background:linear-gradient(150deg,#EAF7F2 0%,#FFF7EF 100%);border-radius:38px;padding:64px">
      <div use:reveal style="text-align:center;max-width:620px;margin:0 auto 48px">
        <div style="display:inline-block;background:#fff;color:#0E8A96;font-weight:800;font-size:13px;letter-spacing:1px;text-transform:uppercase;padding:8px 15px;border-radius:999px">Comment ça marche</div>
        <h2 class="h-lg" style="font-family:'Fredoka',sans-serif;font-weight:600;font-size:44px;letter-spacing:-.7px;margin:18px 0 0;line-height:1.06">De la commande au câlin du soir</h2>
      </div>
      <div use:reveal style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:22px">
        {#each steps as s}
          <div style="background:#fff;border-radius:22px;padding:28px;text-align:center;box-shadow:0 12px 28px rgba(22,38,58,.06)">
            <div style="width:52px;height:52px;border-radius:50%;background:{s.bg};color:{s.color};font-family:'Fredoka';font-weight:600;font-size:22px;display:flex;align-items:center;justify-content:center;margin:0 auto">{s.n}</div>
            <h3 style="font-family:'Fredoka';font-weight:600;font-size:19px;margin:16px 0 6px">{s.title}</h3>
            <p style="font-size:14px;color:#5a6772;line-height:1.5;margin:0;font-weight:500">{s.text}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
