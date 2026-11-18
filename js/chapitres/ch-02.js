// Olivier Laliberte 2026
const mm = gsap.matchMedia();
// Only plays animations if there is no reduced motion preferences
mm.add("(prefers-reduced-motion: no-preference)", () => {
    // ScrollTrigger : 
    // - Pins the chapter for 3000 px to let the animations play out in the timeline properly
    const tlCh02 = gsap.timeline({
        scrollTrigger: {
            trigger: "#ch02",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=3000"
        }
    });

    // Title animation : appears smoothly and stays for the entire chapter
    tlCh02.to("#ch02-title",
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out"
        }
    )
        // Cleaner animation : goes from left to right for the duration of the timeline
        .fromTo("#cleaner",
            { x: "0px" },
            {
                x: "100vw",
                duration: 6,
                ease: "power3.inOut"
            }, "+=2"
        )

        //TODO : FIX TS RN
        // Text animations : appear at 
        .to("#ch02-text01", { opacity: 1 }, "<30%")
        .to("#ch02-text02", { opacity: 1 }, "<80%")
        .to("#ch02-text03", { opacity: 1 }, "<99%");
});