// Olivier Laliberte 2026
const mm = gsap.matchMedia();
// Only plays animations if there is no reduced motion preferences
mm.add("(prefers-reduced-motion: no-preference)", () => {
    // Test animation
    gsap.fromTo(
        ".box",
        {
            backgroundColor: "#FF0000",
        },
        {
            backgroundColor: "#0000FF",
            yoyo: true,
            duration: 1,
            repeat: -1,
            ease: "linear",
        },
    );

    // Animate here...
});