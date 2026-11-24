gsap.registerPlugin(ScrollTrigger);

// État initial : le titre reste visible en permanence
gsap.set("#ch01-title", { opacity: 1, y: 0 });
gsap.set("#ch01-p1, #ch01-p2, #ch01-p3", { opacity: 0, y: 20 });
gsap.set("#piscine", { opacity: 0, scaleX: 0.01, scaleY: 0.2 });
gsap.set("#homme, #nettoyeur", { opacity: 0 });

const tlCh01 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ch01",
    start: "top top",
    end: "+=350%",
    pin: true,
    scrub: 1
  }
});

// ÉTAPE 1 : Apparition en fondu de p1 + allumage de la télé avec #piscine
tlCh01.to("#ch01-p1", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
  })
  .to("#piscine", {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    duration: 0.6,
    ease: "power2.out"
  }, "<")

  .to({}, { duration: 1 })

  // ÉTAPE 2 : p1 s'efface, p2 apparaît + #homme remplace #piscine dans la télé
  .to("#ch01-p1", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    ease: "power2.in"
  })
  .to("#piscine", { opacity: 0, duration: 0.5 }, "<")
  .to("#ch01-p2", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
  })
  .to("#homme", { opacity: 1, duration: 0.6 }, "<")

  .to({}, { duration: 1 })

  // ÉTAPE 3 : p2 s'efface, p3 apparaît + #nettoyeur remplace #homme dans la télé
  .to("#ch01-p2", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    ease: "power2.in"
  })
  .to("#homme", { opacity: 0, duration: 0.5 }, "<")
  .to("#ch01-p3", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
  })
  .to("#nettoyeur", { opacity: 1, duration: 0.6 }, "<")

  .to({}, { duration: 0.8 });