import Header from "@/app/components/Header";
import HeroBadge from "@/app/components/HeroBadge";
import { ChevronDown, Shield, Home as HomeIcon, Users, Calendar, MapPin, Info } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="b-hero-bg">
        <section className="b-hero">
          <HeroBadge />
          <h1>Générations Unies<br />pour Maisonsgoutte&nbsp;!</h1>
          <p className="subtitle">
            Ensemble, faisons de Maisonsgoutte un village où il fait bon
            vivre, à tout âge.
          </p>
          <a href="#engagements" className="cta">
            Nos engagements pour le village →
          </a>
        </section>
        <a href="#vision" className="b-hero-scroll" aria-label="Défiler vers le bas">
          <ChevronDown />
        </a>
      </div>

      {/* Hero highlights */}
      <div className="b-hero-highlights">
        <div className="b-highlight">
          <div className="icon"><Shield /></div>
          <div>
            <h3>Des rues plus sûres</h3>
            <p>Sécuriser la rue principale et finir la piste cyclable de la vallée.</p>
          </div>
        </div>
        <div className="b-highlight">
          <div className="icon"><HomeIcon /></div>
          <div>
            <h3>Un village qui se renouvelle</h3>
            <p>Redonner vie au bâti ancien et permettre aux jeunes de s&#39;installer.</p>
          </div>
        </div>
        <div className="b-highlight">
          <div className="icon"><Users /></div>
          <div>
            <h3>Des espaces pour tous</h3>
            <p>Un complexe sportif, un square convivial, des ateliers entre générations.</p>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div id="vision" className="b-vision-section">
        <div className="b-vision-wrap">
          <div className="b-vision-photo">
            <img src="/team/christian.png" alt="Christian Haessler, Maire de Maisonsgoutte" />
          </div>
          <div className="b-vision-content">
            <h2 className="b-stitle">Notre Vision</h2>
            <p className="b-vision-text">
              Chers voisins, chers amis de Maisonsgoutte. Depuis six ans, nous
              travaillons ensemble à faire de notre village un lieu de vie agréable
              pour toutes les générations. Aujourd&#39;hui, nous souhaitons poursuivre
              avec une équipe renouvelée, riche de ses diversités et unie par un
              même attachement à Maisonsgoutte.
            </p>
            <blockquote className="b-vision-quote">
              Notre projet est simple&nbsp;: continuer à être à l&#39;écoute de
              chacun d&#39;entre vous, investir dans l&#39;avenir de notre commune
              tout en préservant ce qui fait son charme.
            </blockquote>
            <p className="b-vision-text">
              C&#39;est cela que nous voulons préserver : la convivialité, la solidarité,
              et la beauté de notre cadre de vie vosgien.
            </p>
            <div className="b-vision-sig">
              <div className="b-vision-sig-name">Christian Haessler</div>
              <div className="b-vision-sig-role">Maire de Maisonsgoutte</div>
              <img src="/team/signature.png" alt="" className="b-vision-signature-img" />
            </div>
          </div>
        </div>
      </div>

      {/* Bilan */}
      {(() => {
        const categoryColors: Record<string, string> = {
          Infrastructure: "#2FA36B",
          Environnement: "#3A9D5C",
          "Économie": "#D4A843",
          "Mobilité": "#5B8FB9",
        };
        const items = [
          { title: "Construction du périscolaire et école intercommunale", desc: "Un lieu d'accueil et d'éducation pour les enfants de la vallée.", image: "/bilan/ecole.jpg", category: "Infrastructure", featured: true },
          { title: "Mise en place d'une centrale solaire avec Meisensolar", desc: "Production d'énergie renouvelable en partenariat avec une coopérative citoyenne.", image: "/bilan/solaire.png", category: "Environnement", featured: true },
          { title: "Accompagnement à l'installation de nouvelles entreprises", desc: "De nouvelles entreprises accompagnées pour s'installer au village.", image: "/bilan/entreprises.jpg", category: "Économie", featured: false },
          { title: "Démarrage des travaux de la voie verte cyclable", desc: "Un itinéraire doux reliant les villages de la vallée.", image: "/bilan/voieverte.jpg", category: "Mobilité", featured: false },
          { title: "Travaux de voiries et mise en sécurité des déplacements", desc: "Réfection des routes et aménagements pour la sécurité des piétons et cyclistes.", image: "/bilan/voiries.jpg", category: "Infrastructure", featured: false },
          { title: "Plantation dans la forêt communale", desc: "Renouvellement et diversification des essences pour une forêt plus résiliente.", image: "/bilan/foret.jpg", category: "Environnement", featured: false },
        ];
        const featured = items.filter((it) => it.featured);
        const regular = items.filter((it) => !it.featured);
        return (
          <div id="bilan" className="b-section-full" style={{ background: "#fff" }}>
          <div className="b-section">
            <h2 className="b-stitle b-stitle-center">Notre Bilan</h2>
            <p className="b-sdesc b-sdesc-center">
              Ce que nous avons accompli ensemble.
            </p>
            <div className="b-bilan-featured">
              {featured.map((item, i) => (
                <div key={i} className="b-bilan-card b-bilan-card--featured">
                  <div className="b-bilan-card__image">
                    <img src={item.image} alt={item.title} />
                    <span className="b-bilan-card__category" style={{ background: categoryColors[item.category] }}>{item.category}</span>
                  </div>
                  <div className="b-bilan-card__body">
                    <h4 className="b-bilan-card__title">{item.title}</h4>
                    <p className="b-bilan-card__desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="b-bilan-grid">
              {regular.map((item, i) => (
                <div key={i} className="b-bilan-card b-bilan-card--regular">
                  <div className="b-bilan-card__image">
                    <img src={item.image} alt={item.title} />
                    <span className="b-bilan-card__category" style={{ background: categoryColors[item.category] }}>{item.category}</span>
                  </div>
                  <div className="b-bilan-card__body">
                    <h4 className="b-bilan-card__title">{item.title}</h4>
                    <p className="b-bilan-card__desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="b-bilan-cta">
              <p className="b-bilan-cta__text">Découvrez ce que nous préparons pour demain.</p>
              <a href="#engagements" className="b-bilan-cta__link">Voir nos engagements →</a>
            </div>
          </div>
          </div>
        );
      })()}

      {/* Valeurs */}
      <div className="b-section b-section-valeurs">
        <h2 className="b-stitle b-stitle-center">Nos Valeurs</h2>
        <div className="b-valeurs">
          <div className="b-vcard">
            <h3>Proximité et Écoute</h3>
            <p>
              Une porte ouverte à la mairie, des permanences régulières,
              et l&#39;envie d&#39;écouter chacun d&#39;entre vous.
            </p>
          </div>
          <div className="b-vcard">
            <h3>Solidarité entre Générations</h3>
            <p>
              Les jeunes, les familles, les aînés : chacun a sa place au village.
              On avance mieux quand on avance ensemble.
            </p>
          </div>
          <div className="b-vcard">
            <h3>Cadre de Vie et Transition</h3>
            <p>
              Garder ce qui fait le charme de notre vallée, tout en préparant
              demain. Pas de grands discours, des gestes concrets.
            </p>
          </div>
        </div>
      </div>

      {/* Équipe */}
      <div id="equipe" className="b-section">
        <div className="b-divider"></div>
        <h2 className="b-stitle">Notre Équipe</h2>
        <p className="b-sdesc">Des voisins engagés pour le village.</p>
        <div className="b-leader">
          <img className="photo" src="/team/christian.jpg" alt="Christian Haessler" />
          <div className="info">
            <h3>Christian Haessler</h3>
            <div className="role">Tête de liste · Maire sortant</div>
            <p>
              À Maisonsgoutte depuis toujours, maire depuis six ans. Christian
              connaît chaque rue, chaque voisin, et ne compte pas s&#39;arrêter là.
            </p>
          </div>
        </div>
        <div className="b-team-grid">
          {[
            { name: "Marie Dupont", meta: "Enseignante · 42 ans" },
            { name: "Pierre Martin", meta: "Retraité · 67 ans" },
            { name: "Sophie Weber", meta: "Infirmière · 35 ans" },
            { name: "Jean-Luc Schmitt", meta: "Artisan · 55 ans" },
            { name: "Isabelle Klein", meta: "Comptable · 48 ans" },
            { name: "Thomas Muller", meta: "Développeur · 29 ans" },
            { name: "Françoise Roth", meta: "Bénévole · 63 ans" },
            { name: "Marc Zimmermann", meta: "Agriculteur · 51 ans" },
            { name: "Claire Fischer", meta: "Architecte · 38 ans" },
            { name: "André Keller", meta: "Retraité · 71 ans" },
            { name: "Lucie Braun", meta: "Étudiante · 26 ans" },
          ].map((m) => (
            <div key={m.name} className="b-member">
              <div className="photo">Photo</div>
              <h4>{m.name}</h4>
              <p className="meta">{m.meta}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Engagements */}
      <div id="engagements" className="b-section-full" style={{ background: "#F4FAF7" }}>
        <div className="b-section">
          <div className="b-divider"></div>
          <h2 className="b-stitle b-stitle-center">Nos Engagements</h2>
          <p className="b-sdesc b-sdesc-center">
            Ce que nous voulons faire dans les six prochaines années.
          </p>
          <div className="b-engagements">
            <div className="b-eng-card">
              <h3><span className="emoji"><Shield /></span> Sécurité &amp; Mobilité</h3>
              <div className="tagline">Marcher et rouler sans danger</div>
              <ul>
                <li>Rendre la rue principale plus sûre : trottoirs, stationnement, ralentisseurs</li>
                <li>Finir la piste cyclable qui relie les villages de la vallée</li>
              </ul>
            </div>
            <div className="b-eng-card">
              <h3><span className="emoji"><HomeIcon /></span> Habitat &amp; Urbanisme</h3>
              <div className="tagline">Un village qui se renouvelle</div>
              <ul>
                <li>Trouver des leviers pour que de jeunes couples s&#39;installent et redonnent vie au bâti ancien</li>
                <li>Refaire les routes et le réseau d&#39;eau (rue des Étangs et alentours)</li>
              </ul>
            </div>
            <div className="b-eng-card">
              <h3><span className="emoji"><Users /></span> Sport &amp; Vie de village</h3>
              <div className="tagline">Se retrouver, bouger, partager</div>
              <ul>
                <li>Construire un complexe sportif polyvalent à l&#39;ouest du village</li>
                <li>Créer un square derrière l&#39;ancienne école, un endroit pour se retrouver</li>
                <li>Proposer des ateliers pour tous les âges : bricolage, numérique, cuisine…</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Infos Pratiques */}
      <div id="infos" className="b-section-full" style={{ background: "#fff" }}>
        <div className="b-section">
          <div className="b-divider"></div>
          <h2 className="b-stitle b-stitle-center">Infos Pratiques</h2>
          <p className="b-sdesc b-sdesc-center" style={{ marginBottom: 32 }}>Tout savoir pour voter.</p>
          <div className="b-infos">
            <div className="b-info-card">
              <div className="icon"><Calendar /></div>
              <h3>Dates des scrutins</h3>
              <div className="date">15 mars 2026</div>
              <p>Premier tour</p>
              <div className="date">22 mars 2026</div>
              <p>Second tour (si nécessaire)</p>
            </div>
            <div className="b-info-card">
              <div className="icon"><MapPin /></div>
              <h3>Bureau de vote</h3>
              <p>
                Salle polyvalente<br />
                1 rue de la Mairie<br />
                67220 Maisonsgoutte
              </p>
              <p style={{ marginTop: 8, fontWeight: 600 }}>8h — 18h</p>
            </div>
            <div className="b-info-card">
              <div className="icon"><Info /></div>
              <h3>Comment voter ?</h3>
              <p>
                Scrutin plurinominal majoritaire à deux tours (communes &lt; 1000
                hab.). Vous pouvez rayer des noms ou ajouter ceux d&#39;autres
                candidats.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="b-footer">
        <div className="left">
          <div className="logo">Générations Unies pour Maisonsgoutte !</div>
          <div className="dates">
            Élections municipales — 15 et 22 mars 2026
          </div>
        </div>
        <div className="right">
          Site réalisé par la liste « Générations Unies pour Maisonsgoutte ! ».
          Directeur de la publication : Christian Haessler. Ce site ne collecte
          aucune donnée personnelle.
        </div>
      </footer>
    </>
  );
}
