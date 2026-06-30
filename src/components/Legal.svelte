<script>
  import { contactEmail } from '../lib/data.js';

  const updatedAt = '30 juin 2026';
</script>

<section id="legal" class="legal-section" aria-labelledby="legal-title">
  <div class="legal-wrap">
    <div class="legal-head">
      <div class="eyebrow">Informations légales</div>
      <h2 id="legal-title">Transparence & conformité</h2>
      <p>Les informations ci-dessous sont à vérifier et compléter avant la mise en ligne définitive du site.</p>
    </div>

    <div class="legal-grid">
      <article id="mentions-legales" class="legal-card">
        <h3>Mentions légales</h3>
        <p><strong>Éditeur du site :</strong> Jean-Baptiste Tharrault.</p>
        <p><strong>Contact :</strong> <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
        <p><strong>Responsable de publication :</strong> Jean-Baptiste Tharrault.</p>
        <p><strong>Hébergement :</strong> à compléter avant publication selon l’hébergeur choisi.</p>
      </article>

      <article id="confidentialite" class="legal-card">
        <h3>Confidentialité</h3>
        <p>Ce site vitrine ne propose pas de compte utilisateur et ne collecte pas directement de données personnelles via formulaire.</p>
        <p>Si vous contactez l’auteur par email, votre adresse et votre message sont utilisés uniquement pour répondre à votre demande.</p>
        <p>Les liens vers Amazon ouvrent une page externe soumise aux règles de confidentialité d’Amazon.</p>
      </article>

      <article id="cookies" class="legal-card">
        <h3>Cookies</h3>
        <p>Le site ne met pas en place de cookies publicitaires ni de mesure d’audience dans sa version actuelle.</p>
        <p>Si des outils de suivi, publicité ou statistiques sont ajoutés plus tard, un bandeau de consentement devra être mis en place avant leur activation.</p>
        <p>Les polices et ressources externes peuvent entraîner des requêtes vers des services tiers selon la configuration de mise en ligne.</p>
      </article>

      <article id="conditions" class="legal-card">
        <h3>Conditions d’utilisation</h3>
        <p>Les textes, visuels, personnages et éléments graphiques présentés sur ce site sont protégés.</p>
        <p>Toute reproduction, modification ou réutilisation sans autorisation préalable est interdite.</p>
        <p>Les prix, disponibilités et conditions d’achat sont gérés directement par Amazon et peuvent évoluer.</p>
      </article>
    </div>

    <p class="legal-date">Dernière mise à jour : {updatedAt}</p>
  </div>
</section>
