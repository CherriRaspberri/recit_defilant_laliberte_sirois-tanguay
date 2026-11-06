// Accessibility check; will stop if user has reduced motion activated
const mm = gsap.matchMedia();
mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.to(".test", {
        x: 200,
        yoyo : true,
        duration : -1
    });
});

gsap.to(".box2", {
  y: "50vw",
  duration: 2,
  ease: "linear"
});