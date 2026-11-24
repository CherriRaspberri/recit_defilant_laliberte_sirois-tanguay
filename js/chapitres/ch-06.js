gsap.registerPlugin(ScrollTrigger);

// État initial : titre visible, MAIS et paragraphes cachés en fondu
gsap.set("#ch06-title", { opacity: 1, y: 0 });
gsap.set(".gros-mais", { opacity: 0, scale: 0.7 });
gsap.set("#ch06-p1, #ch06-p2", { opacity: 0, y: 20 });
gsap.set("#diagramme, #conseil", { opacity: 0, scale: 0.95 });

const tlCh06 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ch06",
    start: "top top",
    end: "+=350%",
    pin: true,
    scrub: 1
  }
});

// ÉTAPE 1 : Le titre disparaît pendant que le gros "MAIS" apparaît
tlCh06.to({}, { duration: 0.5 })
  .to("#ch06-title", {
    opacity: 0,
    y: -20,
    duration: 0.4,
    ease: "power2.in"
  })
  .to(".gros-mais", {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: "back.out(1.5)"
  }, "<")

  // Pause sur le "MAIS"
  .to({}, { duration: 0.6 })

  // ÉTAPE 2 : Le "MAIS" disparaît, le titre revient, p1 et #diagramme apparaissent en fondu
  .to(".gros-mais", {
    opacity: 0,
    scale: 1.3,
    duration: 0.5,
    ease: "power2.in"
  })
  .to("#ch06-title", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out"
  }, "<")
  .to("#ch06-p1", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
  })
  .to("#diagramme", {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: "power2.out"
  }, "<")

  // Pause lecture paragraphe 1
  .to({}, { duration: 1 })

  // ÉTAPE 3 : p1 et #diagramme s'effacent, p2 et #conseil apparaissent en fondu
  .to("#ch06-p1", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    ease: "power2.in"
  })
  .to("#diagramme", { opacity: 0, duration: 0.5 }, "<")
  .to("#ch06-p2", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
  })
  .to("#conseil", {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: "power2.out"
  }, "<")

  .to({}, { duration: 0.8 });