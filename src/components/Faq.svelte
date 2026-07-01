<script>
  import { faqs } from '../lib/data.js';
  import { reveal } from '../lib/actions.js';

  let open = null;
  function toggle(i) {
    open = open === i ? null : i;
  }
</script>

<section id="faq" style="position:relative;padding:0 0 104px">
  <div style="max-width:780px;margin:0 auto;padding:0 28px">
    <div use:reveal style="text-align:center;margin:0 0 40px">
      <h2 class="h-lg" style="font-family:'Fredoka',sans-serif;font-weight:600;font-size:44px;letter-spacing:-.7px;margin:0">Questions fréquentes</h2>
    </div>
    <div use:reveal style="display:flex;flex-direction:column;gap:14px">
      {#each faqs as item, i}
        <div style="background:#fff;border-radius:18px;box-shadow:0 10px 26px rgba(22,38,58,.06);border:1px solid rgba(22,38,58,.04);overflow:hidden">
          <button class="faq-q" id={`faq-question-${i}`} aria-expanded={open === i} aria-controls={`faq-answer-${i}`} on:click={() => toggle(i)}>
            {item.q}
            <span style="color:#1DB6C4;font-size:26px;font-weight:600;flex:0 0 auto;transition:transform .25s;transform:{open === i ? 'rotate(45deg)' : 'rotate(0deg)'}">+</span>
          </button>
          <div id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} style="max-height:{open === i ? '240px' : '0px'};overflow:hidden;transition:max-height .35s ease">
            <p style="margin:0;padding:0 26px 24px;font-size:16px;line-height:1.6;color:#51637A;font-weight:500">{item.a}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
