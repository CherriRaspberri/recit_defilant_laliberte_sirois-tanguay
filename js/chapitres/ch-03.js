// Olivier Laliberte 2026
const mm = gsap.matchMedia();

mm.add("(prefers-reduced-motion: no-preference)", () => {
    const tlCh03 = gsap.timeline({
        scrollTrigger: {
            trigger: "#ch03",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=2000"
        }
    });

    tlCh03.to("#ch03-title",
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out"
        }
    )
    .to("#ch03-text01", { opacity: 1 }, "<30%")
    .to("#ch03-text02", { opacity: 1 }, "<60%");
});