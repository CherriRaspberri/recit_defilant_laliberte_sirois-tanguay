// Olivier Laliberte 2026
const mm = gsap.matchMedia();

mm.add("(prefers-reduced-motion: no-preference)", () => {
    const tlCh05 = gsap.timeline({
        scrollTrigger: {
            trigger: "#ch05",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=2000"
        }
    });

    tlCh05.to("#ch05-title",
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out"
        }
    )
    .to("#ch05-text01", { opacity: 1 }, "<30%")
    .to("#ch05-text02", { opacity: 1 }, "<60%");
});