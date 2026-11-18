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

    // SplitText extension
    // Used for title animation
    const splitTitle = SplitText.create("#ch02-title", {
        type: "words, chars"
    });

    // CustomWiggle extension 
    // Used on the cleaner to give it a small wiggle
    CustomWiggle.create("cleanerWiggle",
        {
            wiggles: 2,
            ease: "uniform"
        });

    // Title animation : appears smoothly and stays for the entire chapter
    tlCh02.from(splitTitle.chars,
        {
            opacity: 0,
            x: 20,
            duration: 1,
            ease: "power2.out",
            stagger: 0.04
        }
    )
        // Cleaner animation : goes from left to right for the duration of the timeline
        .fromTo("#cleaner",
            { x: "-10vw" },
            {
                x: "110vw",
                duration: 6,
                ease: "power3.inOut"
            }, "+=2"
        )
        // Clean-trail animation : follows the cleaner
        .fromTo("#clean-trail",
            { x: "-10vw" },
            {
                x: 0,
                clipPath: "inset(0 -10% 0 0)",
                duration: 6,
                ease: "power3.inOut"
            }, "<"
        )

        //TODO : FIX TS RN
        // Text animations : appear at 
        .to("#ch02-text01", { opacity: 1 }, "<30%")
        .to("#ch02-text02", { opacity: 1 }, "<80%")
        .to("#ch02-text03", { opacity: 1 }, "<99%");

    // Wiggle idle animation : wiggles the cleaner
    gsap.to("#cleaner",
        {
            rotation: 1,
            duration: 0.5,
            repeat: -1,
            ease: "cleanerWiggle"
        }
    );
});