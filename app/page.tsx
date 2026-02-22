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
          <h1>Générations Unies&nbsp;!</h1>
          <p className="subtitle">
            Ensemble, continuons à faire de Maisonsgoutte un village où il fait bon
            vivre.
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
          <div className="icon"><Users /></div>
          <div>
            <h3>Renforcer les liens entre générations</h3>
            <p>Un square, un conseil des jeunes, des ateliers intergénérationnels.</p>
          </div>
        </div>
        <div className="b-highlight">
          <div className="icon"><Shield /></div>
          <div>
            <h3>Poursuivre la sécurisation de nos déplacements</h3>
            <p>Connexion de la voie verte, route principale sécurisée, bornes de recharge.</p>
          </div>
        </div>
        <div className="b-highlight">
          <div className="icon"><HomeIcon /></div>
          <div>
            <h3>Préserver notre cadre de vie</h3>
            <p>Espace sportif, embellissement fleuri, soutien aux nouveaux habitants.</p>
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
              Chères Maisonsgouttoises, chers Maisonsgouttois. Depuis six ans, nous
              travaillons ensemble à faire de notre village un lieu de vie agréable
              pour toutes les générations. Nous avons construit l&#39;école du
              Honcourt, lancé la voie verte, réaffecté l&#39;ancienne école en maison
              des associations, installé une centrale photovoltaïque citoyenne et
              rénové l&#39;éclairage public — le tout sans endetter la commune.
            </p>
            <p className="b-vision-text">
              Aujourd&#39;hui, nous souhaitons poursuivre avec une équipe de quinze
              personnes, paritaire, riche de ses diversités et unie par un même
              attachement à Maisonsgoutte.
            </p>
            <blockquote className="b-vision-quote">
              Notre engagement est simple&nbsp;: continuer à être à l&#39;écoute de
              chacun d&#39;entre vous, gérer les deniers publics avec la même rigueur,
              et préserver ce qui fait le charme de Maisonsgoutte — sa convivialité,
              sa solidarité, et la beauté de son cadre de vie vosgien.
            </blockquote>
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
          { title: "Aménagement de la voie verte cyclable et piétonne intramuros", desc: "Un itinéraire doux reliant les villages de la vallée.", image: "/bilan/voieverte.jpg", category: "Mobilité", featured: false },
          { title: "Travaux de voiries et mise en sécurité des déplacements", desc: "Réfection des routes et aménagements pour la sécurité des piétons et cyclistes.", image: "/bilan/voiries.jpg", category: "Infrastructure", featured: false },
          { title: "Plantation dans la forêt communale", desc: "Renouvellement et diversification des essences pour une forêt plus résiliente.", image: "/bilan/foret.jpg", category: "Environnement", featured: false },
          { title: "Réaffectation de l'ancienne école en maison des associations", desc: "Un lieu partagé pour la vie associative du village.", image: null as string | null, category: "Infrastructure", featured: false },
          { title: "Rénovation de l'éclairage public", desc: "Passage aux LED pour un éclairage plus économe et durable.", image: null as string | null, category: "Environnement", featured: false },
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
                    {item.image && <img src={item.image} alt={item.title} />}
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
                    {item.image && <img src={item.image} alt={item.title} />}
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
              <h3><span className="emoji"><Users /></span> Renforcer les liens entre générations</h3>
              <div className="tagline">Une vie locale qui rassemble toutes les générations.</div>
              <ul>
                <li>Créer un square derrière l&#39;ancienne école / maison des associations</li>
                <li>Proposer des ateliers numériques</li>
                <li>Organiser des rencontres mercredis après-midi entre périscolaire et anciens</li>
                <li>Mettre en place un conseil des jeunes</li>
              </ul>
            </div>
            <div className="b-eng-card">
              <h3><span className="emoji"><Shield /></span> Poursuivre la sécurisation de nos déplacements</h3>
              <div className="tagline">Continuer à améliorer la sécurité routière et les mobilités douces.</div>
              <ul>
                <li>Connecter la voie verte avec les villages voisins</li>
                <li>Sécuriser la route principale avec le service des routes de Villé</li>
                <li>Entretenir les voiries communales et pistes forestières</li>
                <li>Passer l&#39;éclairage public tout en LED</li>
                <li>Installer des bornes de recharge électrique</li>
              </ul>
            </div>
            <div className="b-eng-card">
              <h3><span className="emoji"><HomeIcon /></span> Préserver notre cadre de vie</h3>
              <div className="tagline">Développer notre village sans perdre notre identité.</div>
              <ul>
                <li>Aménager un espace sportif à l&#39;ouest du village / complexe sportif polyvalent</li>
                <li>Embellir le village par le fleurissement</li>
                <li>Valoriser le bâti ancien pour accueillir de nouvelles familles</li>
                <li>Sécuriser l&#39;approvisionnement en eau (fontaines et citernes)</li>
                <li>Soutenir les opérateurs économiques de la ZAIM</li>
              </ul>
            </div>
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
            <div className="role">63 ans · Vétérinaire et Maire sortant</div>
          </div>
        </div>
        <div className="b-team-grid">
          {[
            { name: "Joël Liottet", meta: "64 ans · Retraité, ancien cadre de l'industrie pharmaceutique" },
            { name: "Vanessa Schwab-Schneider", meta: "43 ans · Assistante administrative des ventes" },
            { name: "Jason Strazisar", meta: "25 ans · Ingénieur logiciel" },
            { name: "Priscilla Graff", meta: "41 ans · Assistante maternelle en congé parental" },
            { name: "Eva Rapsch", meta: "35 ans · Auxiliaire de vie" },
            { name: "Julien Delfosse", meta: "43 ans · Formateur en agroécologie" },
            { name: "Catherine Liottet", meta: "65 ans · Déléguée médicale retraitée" },
            { name: "Laurent Marin", meta: "58 ans · Fonctionnaire territorial cuisinier et ancien combattant" },
            { name: "Jean-Luc Weber", meta: "63 ans · Retraité de l'Éducation nationale" },
            { name: "Sophie Klein", meta: "26 ans · Chargée de communication" },
            { name: "Marie Dupont", meta: "42 ans · Enseignante" },
            { name: "Pierre Martin", meta: "67 ans · Retraité" },
            { name: "Isabelle Muller", meta: "48 ans · Comptable" },
            { name: "Thomas Braun", meta: "29 ans · Artisan" },
          ].map((m) => (
            <div key={m.name} className="b-member">
              <div className="photo">Photo</div>
              <h4>{m.name}</h4>
              <p className="meta">{m.meta}</p>
            </div>
          ))}
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
                Mairie<br />
                47 Grand-rue<br />
                67220 Maisonsgoutte
              </p>
              <p style={{ marginTop: 8, fontWeight: 600 }}>8h — 18h</p>
            </div>
            <div className="b-info-card">
              <div className="icon"><Info /></div>
              <h3>Comment voter ?</h3>
              <p>
                Nouveau en 2026 : le scrutin de liste s&#39;applique désormais
                aux communes de moins de 1 000 habitants. Vous votez pour une
                liste complète, sans rayer ni ajouter de noms. Tout bulletin
                modifié sera considéré comme nul.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="b-footer">
        <div className="left">
          <img src="/logo_white.svg" alt="Générations Unies !" className="logo" />
          <div className="dates">
            Élections municipales — 15 et 22 mars 2026
          </div>
        </div>
        <div className="right">
          Site réalisé par la liste « Générations Unies ! ».
          Directeur de la publication : Christian Haessler. Ce site ne collecte
          aucune donnée personnelle.
        </div>
      </footer>
    </>
  );
}
