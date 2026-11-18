// Olivier Laliberte 2026
const mm = gsap.matchMedia();

mm.add("(prefers-reduced-motion: no-preference)", () => {
    const tlCh04 = gsap.timeline({
        scrollTrigger: {
            trigger: "#ch04",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=2000"
        }
    });

    tlCh04.to("#ch04-title",
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out"
        }
    )
    .to("#ch04-text01", { opacity: 1 }, "<30%")
    .to("#ch04-text02", { opacity: 1 }, "<60%");
});