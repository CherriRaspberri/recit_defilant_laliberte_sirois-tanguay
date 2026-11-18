gsap.registerPlugin(ScrollTrigger);

// État initial : tous les textes masqués, bloc blanc à gauche, images 2 et 3 cachées
gsap.set("#tout_texte_ch7 .p1, #tout_texte_ch7 .p2, #tout_texte_ch7 .p3", {
  clipPath: "inset(0 100% 0 0)"
});
gsap.set(".bloc-blanc-ch7", { x: "-101%" });
gsap.set("#rencontre", { opacity: 1, scale: 1 });
gsap.set("#solution, #point-dinterrogation", { opacity: 0, scale: 0.95 });

const tlCh07 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ch07",
    start: "top top",
    end: "+=300%",        // Fige la section sur 3 hauteurs d'écran pour les 3 étapes
    pin: true,
    scrub: 1
  }
});

// ÉTAPE 1 : Le bloc blanc révèle le paragraphe 1 (l'image #rencontre est déjà en place)
tlCh07.to(".bloc-blanc-ch7", {
    x: "0%",
    duration: 1,
    ease: "power2.inOut"
  })
  .set("#tout_texte_ch7 .p1", { clipPath: "inset(0 0% 0 0)" })
  .to(".bloc-blanc-ch7", {
    x: "101%",
    duration: 1,
    ease: "power2.inOut"
  })

  // Pause lecture étape 1
  .to({}, { duration: 1 })

  // ÉTAPE 2 : Le bloc blanc remplace p1 par p2 et affiche l'image #solution
  .set(".bloc-blanc-ch7", { x: "-101%" })
  .to(".bloc-blanc-ch7", {
    x: "0%",
    duration: 1,
    ease: "power2.inOut"
  })
  .set("#tout_texte_ch7 .p1", { clipPath: "inset(0 100% 0 0)" })
  .set("#tout_texte_ch7 .p2", { clipPath: "inset(0 0% 0 0)" })
  .to("#rencontre", { opacity: 0, duration: 0.4 }, "<")
  .to("#solution", { opacity: 1, scale: 1, duration: 0.4 }, "<")
  .to(".bloc-blanc-ch7", {
    x: "101%",
    duration: 1,
    ease: "power2.inOut"
  })

  // Pause lecture étape 2
  .to({}, { duration: 1 })

  // ÉTAPE 3 : Le bloc blanc remplace p2 par p3 et affiche #point-dinterrogation
  .set(".bloc-blanc-ch7", { x: "-101%" })
  .to(".bloc-blanc-ch7", {
    x: "0%",
    duration: 1,
    ease: "power2.inOut"
  })
  .set("#tout_texte_ch7 .p2", { clipPath: "inset(0 100% 0 0)" })
  .set("#tout_texte_ch7 .p3", { clipPath: "inset(0 0% 0 0)" })
  .to("#solution", { opacity: 0, duration: 0.4 }, "<")
  .to("#point-dinterrogation", { opacity: 1, scale: 1, duration: 0.4 }, "<")
  .to(".bloc-blanc-ch7", {
    x: "101%",
    duration: 1,
    ease: "power2.inOut"
  })

  // Pause finale avant de quitter le chapitre 07
  .to({}, { duration: 0.8 });