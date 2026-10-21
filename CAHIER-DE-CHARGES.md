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

### [Lien storyboard figma]()

Le récit commence avec une courte histoire de l'évolution du nettoyeur. De sa conception et son premier modèle à son évoluion à travers le temps, on observe ensuite comment est composé un nettoyeur automatique. Le point culminant arrive lorsque la question de l'impact économique des nettoyeurs sur le marché des puises d'eau est posée. Une question ouverte est posée à la fin lorsque l'on voit les nettoyeurs posés en magasin, ce qui termine le récit.

## 3. Les chapitres

| # | Titre | Ce que le chapitre raconte | Animation signature | Technique | Médias | Responsable |
|---|---|---|---|---|---|---|
| 1 | Le premier modèle inventé | | | | | Cédric |
| 2 | L'évolution au fil du temps du nettoyeur | Le nettoyeur passe de gauche à droite de l'écran, laissant apparaître derrière lui une ligne du temps présentant l'évolution, du premier modèle, à différents designs, au modèle d'aujourd'hui. | Défilement d'objets de gauche à droite au scroll | CSS au défilement, IntersectionObserver | Images en calques | Olivier |
| 3 | La construction du nettoyeur (pt. 01) | Le nettoyeur est épinglé au milieu de l'écran et sa coque se retire, laissant accès à une première pièce qui se détache. Du texte explicatif est affiché. Un tapis roulant passe en dessous de la pièce retirée. La pièce et le tapis roulant disparaissent en même temps que le texte. | Objets défilants au scroll et sticky par certains moments. | JSAP + ScrollTrigger | Section épinglée, images en calques | Olivier |
| 4 | La construction du nettoyeur (pt. 02) | Le nettoyeur est épinglé au milieu de l'écran et sa coque est retirée, laissant accès à une deuxième pièce qui se détache. Du texte explicatif est affiché. | Objets défilants au scroll et sticky par certains moments. | JSAP + ScrollTrigger | Images en calques | Olivier |
| 5 | La construction du nettoyeur (pt. 03) | Le nettoyeur est épinglé au milieu de l'écran et sa coque est retirée, laissant accès à une pièce qui se détache. Du texte explicatif est affiché. Vu que c'est la dernière pièce, toutes les pièces reviennent dans le nettoyeur. | Objets défilants au scroll et sticky par certains moments. | JSAP + ScrollTrigger | Images en calques | Olivier |
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

Un exemple d'objet chapitre, tel qu'il sera dans votre fichier JSON (inspirez-vous des [deux exemples plus haut](#le-modele-de-donnees-json)) :

```json
{
  "id": 1,
  "titre": "La forêt s'éveille",
  "texte": "...",
  "medias": [
    { "type": "image", "src": "assets/images/foret-fond.webp", "alt": "..." }
  ]
}
```

[Ajoutez ou retirez des propriétés selon vos besoins, et expliquez en 1 ou 2 phrases vos choix.]

## 6. La dataviz

L'API sera choisie au cours du mer. 11 nov. Pour l'instant, décrivez l'idée.

- **Chapitre** : [numéro]
- **La question** à laquelle le moment répond : [ex. combien de fois la Terre a-t-elle tremblé cette semaine?]
- **Genre de données souhaitées** : [ex. la température heure par heure dans une ville]
- **La forme imaginée** : [chiffre géant / une unité par donnée / barres / échelle / ligne du temps / autre]
- **Ce qu'elles racontent dans le récit** : [1 ou 2 phrases : la chute]
- **Pistes d'API, si vous en avez trouvé** : [facultatif]

## 7. L'inventaire des médias

| Média | Chapitre | Source (produit, banque, IA) | Format | Responsable |
|---|---|---|---|---|
| | | | | |

Médias animables choisis :

- [Prénom] : [image en calques / spritesheet / SVG préparé pour GSAP], pour le chapitre [numéro]
- [Prénom] : [image en calques / spritesheet / SVG préparé pour GSAP], pour le chapitre [numéro]

## 8. Les choix technologiques (NE PAS REMPLIR TOUT DE SUITE)

[Pour chaque outil, 1 ou 2 phrases : pourquoi lui, pour ce projet.]

- **GSAP + ScrollTrigger** : [...]
- **Vue.js (CDN)** : Sert à sauter au chapitre correspondant. 
- **Hébergement** : [...]
- **Autres** (Anime.js, Chart.js, etc., s'il y a lieu) : [...]

## 9. Le calendrier de l'équipe (jusqu'au prototype du 13 nov.)

| Semaine | [Prénom] | [Prénom] |
|---|---|---|
| 23 oct. | | |
| 28 oct. | | |
| 4 nov. | | |
| 11 nov. | | |

## 10. Les risques et le plan B

[2 ou 3 risques, et ce que vous couperez ou simplifierez si le temps manque. Ex. « Si la spritesheet prend trop de temps, on réduit à 8 images. »]