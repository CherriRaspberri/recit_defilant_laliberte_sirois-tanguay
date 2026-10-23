# Cahier de charges : Comment c'est fait? Les nettoyeurs de piscine automatiques

**Équipe** : Olivier Laliberté, Cédric Sirois-Tanguay\
**Thème** : explicatif
**Brainstorm** : [Lien Brainstorm FigJam](https://www.figma.com/board/mHcjKq11pn63eBvvjfFi7n/Sans-titre?node-id=0-1&p=f), Journals de bord\
**Storyboard Figma** : [Storyboard Figma](https://www.figma.com/design/eXdVAaMqdKMf5feuMLG565/storyboard_recit_defilant?node-id=0-1&t=4QxCewEJf7d9aDZi-1)\
**Storyboard PDF** : [documentation/storyboard.pdf](storyboard.pdf)

## 1. Le concept

"Comment c'est fait?" est une émission américaine qui décrit morceau par morceau comment un objet est créé. De sa production à son arrivée en magasin, tout est décrit en détail. Notre récit défilant s'inspirera grandement de cette émission en décrivant comment un objet de tous les jours a pu avoir été conçu : un nettoyeur de piscine automatique. En commençant par expliquer qu'est-ce qui compose le nettoyeur, puis comment ces pièces sont créées en usine, l'histoire va prendre un tournant philosophique innatendu.

**En une phrase** : Comment un nettoyeur de piscine est fabriqué?

## 2. Le storyboard

### [Lien storyboard figma](https://www.figma.com/design/eXdVAaMqdKMf5feuMLG565/storyboard_recit_defilant?node-id=0-1&t=4QxCewEJf7d9aDZi-1)

Le récit commence avec une courte histoire de l'évolution du nettoyeur. De sa conception et son premier modèle à son évoluion à travers le temps, on observe ensuite comment est composé un nettoyeur automatique. Le point culminant arrive lorsque la question de l'impact économique des nettoyeurs sur le marché des puises d'eau est posée. Une question ouverte est posée à la fin lorsque l'on voit les nettoyeurs posés en magasin, ce qui termine le récit.

## 3. Les chapitres

| # | Titre | Ce que le chapitre raconte | Animation signature | Technique | Médias | Responsable |
|---|---|---|---|---|---|---|
| 1 | Le premier modèle inventé | | | | | Cédric |
| 2 | L'évolution au fil du temps du nettoyeur | Le nettoyeur passe de gauche à droite de l'écran, laissant apparaître derrière lui une ligne du temps présentant l'évolution, du premier modèle, à différents designs, au modèle d'aujourd'hui. | Défilement d'objets de gauche à droite au scroll | Anime.js, CSS au défilement, IntersectionObserver | Images en calques | Olivier |
| 3 | La construction du nettoyeur (pt. 01) | Le nettoyeur est épinglé au milieu de l'écran et sa coque se retire, laissant accès à une première pièce qui se détache. Du texte explicatif est affiché. Un tapis roulant passe en dessous de la pièce retirée. La pièce et le tapis roulant disparaissent en même temps que le texte. | Objets défilants au scroll et sticky par certains moments. | Anime.js, JSAP + ScrollTrigger | Section épinglée, images en calques | Olivier |
| 4 | La construction du nettoyeur (pt. 02) | Le nettoyeur est épinglé au milieu de l'écran et sa coque est retirée, laissant accès à une deuxième pièce qui se détache. Du texte explicatif est affiché. | Objets défilants au scroll et sticky par certains moments. | Anime.js, JSAP + ScrollTrigger | Images en calques | Olivier |
| 5 | La construction du nettoyeur (pt. 03) | Le nettoyeur est épinglé au milieu de l'écran et sa coque est retirée, laissant accès à une pièce qui se détache. Du texte explicatif est affiché. Vu que c'est la dernière pièce, toutes les pièces reviennent dans le nettoyeur. | Objets défilants au scroll et sticky par certains moments. | Anime.js, JSAP + ScrollTrigger | Images en calques | Olivier |
| 6 | Le dilemme socio-économique | | | | | Cédric |
| 7 | Conclusion et question de fermeture | | | | | Cédric |

Vérification : chaque technique (CSS au défilement, GSAP + ScrollTrigger, IntersectionObserver) apparaît au moins une fois.

## 4. La matrice de responsabilités

| Élément | Responsable | Ce que ça comprend |
|---|---|---|
| Chapitres 1 - 6 - 7 | Cédric | Contenu, intégration, animations |
| Chapitres 2 - 3 - 4 - 5 | Olivier | Contenu, intégration, animations |
| Média animable (nettoyeur + pièces) : Image en calques | Olivier | Préparation et intégration |
| Média animable (Piscine) : Image en calques | Olivier | Préparation et intégration |
| Composant Vue : navigateur de chapitres | Cédric | |
| *Fetch* externe et dataviz | Olivier | |
| Chargement des chapitres (JSON) | Cédric | |
| Structure commune (HTML, CSS de base, mise en page) | Ensemble | |

## 5. Le modèle de données

```json
{
  "id": 1,
  "titre": "Chapitre 01 : l'histoire du nettoyeur automatique",
  "textes": [
      "...",
      "...",
      "..."
  ],
  "medias": [
    { "type": "image", "src": "assets/images/nettoyeur-automatique.webp", "alt": "..." }
  ]
}
```
- ID utilisé pour la recherche
- Titre officiel utilisé pour le chapitre
- Array de textes différents utilisés dans le chapitre
- Array de médias différents utilisés dans le chapitre

## 6. La dataviz

L'API sera choisie au cours du mer. 11 nov. Pour l'instant, décrivez l'idée.

- **Chapitre** : 1
- **La question** à laquelle le moment répond : Depuis combien de temps est-ce que le nettoyeur automatique existe?
- **Genre de données souhaitées** : La date actuelle
- **La forme imaginée** : Une date géante 
- **Ce qu'elles racontent dans le récit** : La date actuelle va servir de variable avec la date de création du nettoyeur automatique pour former un écart qui va démontrer depuis combien de temps les nettoyeurs automatiques existent. 
- **Pistes d'API, si vous en avez trouvé** : [facultatif]

## 7. L'inventaire des médias

| Média | Chapitre | Source (produit, banque, IA) | Format | Responsable |
|---|---|---|---|---|
| Tuiles de piscine | Chapitre 2 | Illustrator (vectoriel) | .webp | Olivier |
| Nettoyeur automatique (vue du dessus) | Chapitre 2 | Illustrator (vectoriel) en plusieurs calques pour plus de liberté d'animations | .webp | Olivier |
| Nettoyeur automatique (vue 3/4) | Chapitres 3-4-5 | Illustrator (vectoriel) en plusieurs calques pour plus de liberté d'animations | .webp | Olivier |
| Balai 360 degrés | Chapitre 3 | Illustrator (vectoriel) | .webp | Olivier |
| Filtre | Chapitre 4 | Illustrator (vectoriel) | .webp | Olivier |
| Tube | Chapitre 5 | Illustrator (vectoriel) | .webp | Olivier |
| Filtreur de piscine | Chapitre 5 | Illustrator (vectoriel) | .webp | Olivier |

## 8. Les choix technologiques (NE PAS REMPLIR TOUT DE SUITE)

[Pour chaque outil, 1 ou 2 phrases : pourquoi lui, pour ce projet.]

- **GSAP + ScrollTrigger** : [...]
- **Vue.js (CDN)** : Sert à sauter au chapitre correspondant. 
- **Hébergement** : Github Pages : vu que Pages est gratuit, nous pouvons héberger le site dessus sans soucis.
- **Autres** (Anime.js, Chart.js, etc., s'il y a lieu) : Anime.js : Utilisé pour simplifier les animations. Plus grande facilité pour faire des animations lisses. 

## 9. Le calendrier de l'équipe (jusqu'au prototype du 13 nov.)

| Semaine | [Prénom] | [Prénom] |
|---|---|---|
| 23 oct. | | |
| 28 oct. | Olivier | |
| 4 nov. | Olivier | |
| 11 nov. | Olivier | |

## 10. Les risques et le plan B

1. Animations manquantes ou pas assez polies : Si les animations ne sont pas assez lisses, on peut utiliser ce risque pour transformer l'animation en pseudo-"PowerPoint". Le but de l'animation est d'être pris au sérieux, donc changer la nature des animations nous enlèverait une charge de travail.
2. Chapitre 6 - questions philosophiques : Si nous ne trouvons pas de bon sujet philosophique par rapport à nos animations, nous pouvons couper cette section pour focuser principalement sur la portion réelle.
