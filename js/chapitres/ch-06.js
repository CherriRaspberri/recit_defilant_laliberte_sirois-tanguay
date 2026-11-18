gsap.registerPlugin(ScrollTrigger);

// État initial : le "MAIS" est visible en premier, tout le reste est masqué
gsap.set("#tout_texte_ch6 .p1, #tout_texte_ch6 .p2", {
  clipPath: "inset(0 100% 0 0)"
});
gsap.set(".bloc-blanc", { x: "-101%" });
gsap.set(".gros-mais", { opacity: 1, scale: 1 });
gsap.set("#diagramme, #conseil", { opacity: 0, scale: 0.95 });

const tlCh06 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ch06",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: 1
  }
});

// ÉTAPE 1 : Pause sur le gros "MAIS", puis il disparaît au scroll
tlCh06.to({}, { duration: 0.6 })
  .to(".gros-mais", {
    opacity: 0,
    scale: 1.3,
    duration: 0.6,
    ease: "power2.in"
  })

  // ÉTAPE 2 : Le bloc blanc révèle le paragraphe 1 et le #diagramme apparaît au centre
  .to(".bloc-blanc", {
    x: "0%",
    duration: 1,
    ease: "power2.inOut"
  })
  .set("#tout_texte_ch6 .p1", { clipPath: "inset(0 0% 0 0)" })
  .to("#diagramme", {
    opacity: 1,
    scale: 1,
    duration: 0.5
  }, "<")
  .to(".bloc-blanc", {
    x: "101%",
    duration: 1,
    ease: "power2.inOut"
  })

  // Pause lecture paragraphe 1 + diagramme
  .to({}, { duration: 1 })

  // ÉTAPE 3 : Le bloc blanc affiche le paragraphe 2 et #conseil remplace #diagramme
  .set(".bloc-blanc", { x: "-101%" })
  .to(".bloc-blanc", {
    x: "0%",
    duration: 1,
    ease: "power2.inOut"
  })
  .set("#tout_texte_ch6 .p1", { clipPath: "inset(0 100% 0 0)" })
  .set("#tout_texte_ch6 .p2", { clipPath: "inset(0 0% 0 0)" })
  .to("#diagramme", { opacity: 0, duration: 0.4 }, "<")
  .to("#conseil", {
    opacity: 1,
    scale: 1,
    duration: 0.5
  }, "<")
  .to(".bloc-blanc", {
    x: "101%",
    duration: 1,
    ease: "power2.inOut"
  })

  // Pause finale avant de passer au chapitre 07
  .to({}, { duration: 0.8 });