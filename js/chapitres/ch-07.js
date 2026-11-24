gsap.registerPlugin(ScrollTrigger);

// État initial : titre visible, paragraphes et images cachés en fondu
gsap.set("#ch07-title", { opacity: 1, y: 0 });
gsap.set("#ch07-p1, #ch07-p2, #ch07-p3", { opacity: 0, y: 20 });
gsap.set("#rencontre, #solution, #point-dinterrogation", { opacity: 0, scale: 0.95 });

const tlCh07 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ch07",
    start: "top top",
    end: "+=350%",
    pin: true,
    scrub: 1
  }
});

// ÉTAPE 1 : Apparition en fondu de p1 + image #rencontre
tlCh07.to("#ch07-p1", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
  })
  .to("#rencontre", {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: "power2.out"
  }, "<")

  .to({}, { duration: 1 })

  // ÉTAPE 2 : p1 et #rencontre s'effacent, p2 et #solution apparaissent
  .to("#ch07-p1", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    ease: "power2.in"
  })
  .to("#rencontre", { opacity: 0, duration: 0.5 }, "<")
  .to("#ch07-p2", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
  })
  .to("#solution", {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: "power2.out"
  }, "<")

  .to({}, { duration: 1 })

  // ÉTAPE 3 : p2 et #solution s'effacent, p3 et #point-dinterrogation apparaissent
  .to("#ch07-p2", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    ease: "power2.in"
  })
  .to("#solution", { opacity: 0, duration: 0.5 }, "<")
  .to("#ch07-p3", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
  })
  .to("#point-dinterrogation", {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: "power2.out"
  }, "<")

  .to({}, { duration: 0.8 });