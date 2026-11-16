gsap.from("#piscine", {
  duration: 0.6,          // Vitesse de l'ouverture (en secondes)
  scaleX: 0.01,           // Commence réduit à une simple ligne verticale très fine
  scaleY: 0.2,            // Légèrement ouvert en hauteur
  opacity: 0,             // Invisible au début
  ease: "power2.out",     // Effet fluide de décélération
  onStart: function() {
    // Optionnel : un petit effet de flash blanc ou lumineux si tu veux accentuer l'allumage
    gsap.to("#piscine", { duration: 0.1, filter: "brightness(2)", yoyo: true, repeat: 1 });
  }
});