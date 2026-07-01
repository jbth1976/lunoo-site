<script>
  import { authorAmazonUrl, contactEmail } from '../lib/data.js';
</script>

<footer style="position:relative;background:#16263A;color:#FFF7EF;overflow:hidden">
  <div style="position:absolute;top:30px;right:8%;color:rgba(255,255,255,.18);font-size:20px">✦</div>
  <div style="position:absolute;bottom:60px;left:6%;color:rgba(255,255,255,.14);font-size:16px">✦</div>
  <div class="grid-foot" style="max-width:1200px;margin:0 auto;padding:64px 28px 30px;display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:36px;position:relative">
    <div>
      <img src="/assets/lunoo-logo-new-crop.webp" alt="Lunoo" width="320" height="259" loading="lazy" decoding="async" style="height:104px;width:auto;display:block;margin-left:-4px" />
      <p style="font-size:15px;color:rgba(255,247,239,.66);line-height:1.6;margin:16px 0 0;max-width:280px;font-weight:500">Des histoires tendres et colorées pour donner aux enfants le goût de lire.</p>
      <div style="display:flex;gap:10px;margin-top:18px">
        <a href={authorAmazonUrl} target="_blank" rel="noopener" aria-label="Page auteur Amazon" class="social social-amazon">Amazon</a>
      </div>
    </div>
    <div>
      <div style="font-family:'Fredoka';font-weight:600;font-size:16px;margin-bottom:14px">Explorer</div>
      <div style="display:flex;flex-direction:column;gap:10px;font-size:15px;font-weight:600">
        <a href="#univers" class="footlink">L'univers</a>
        <a href="#apercu" class="footlink">Le livre</a>
        <a href="#parents" class="footlink">Pour les parents</a>
        <a href="#avis" class="footlink">Avis</a>
      </div>
    </div>
    <div>
      <div style="font-family:'Fredoka';font-weight:600;font-size:16px;margin-bottom:14px">Aide</div>
      <div style="display:flex;flex-direction:column;gap:10px;font-size:15px;font-weight:600">
        <a href="#faq" class="footlink">FAQ</a>
        <a href={authorAmazonUrl} target="_blank" rel="noopener" class="footlink">Page auteur</a>
        <a href={authorAmazonUrl} target="_blank" rel="noopener" class="footlink">Tous les livres</a>
        <a href={`mailto:${contactEmail}`} class="footlink">Contact auteur</a>
      </div>
    </div>
    <div>
      <div style="font-family:'Fredoka';font-weight:600;font-size:16px;margin-bottom:14px">Légal</div>
      <div style="display:flex;flex-direction:column;gap:10px;font-size:15px;font-weight:600">
        <a href="#mentions-legales" class="footlink">Mentions légales</a>
        <a href="#confidentialite" class="footlink">Confidentialité</a>
        <a href="#cookies" class="footlink">Cookies</a>
        <a href="#conditions" class="footlink">Conditions</a>
      </div>
    </div>
  </div>
  <div style="border-top:1px solid rgba(255,247,239,.12)">
    <div style="max-width:1200px;margin:0 auto;padding:18px 28px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:13.5px;color:rgba(255,247,239,.5);font-weight:600">
      <span>© 2026 Lunoo. Tous droits réservés.</span>
      <span><a href={`mailto:${contactEmail}`} style="color:inherit">Contact : {contactEmail}</a></span>
    </div>
  </div>
</footer>
