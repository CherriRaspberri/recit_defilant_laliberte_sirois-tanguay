// Olivier Laliberte 2026
// Only plays animations if there is no reduced motion preferences
const mm = gsap.matchMedia();
mm.add("(prefers-reduced-motion: no-preference)", () => {
    // SplitText extension
    // Used for title animation
    const splitTitle = SplitText.create("#ch02-title", {
        type: "words, chars"
    });
    
    // Automatic title animation
    // - The title appears automatically. Its animation timeline is not controlled by scroll.
    // - Appears smoothly and stays for the entire chapter
    const titleAnimation = gsap.from(splitTitle.chars,
        {
            opacity: 0,
            x: 20,
            duration: 1,
            ease: "power2.out",
            stagger: 0.04,
            paused: true
        }
    )

    // Bool : checks if title animation has played or not
    let titleHasPlayed = false;

    // ScrollTrigger : 
    // - Pins the chapter for 3000 px to let the animations play out in the timeline properly
    // - Has an update trigger : when it reaches 10% of its completion, trigger automatically the title animation
    const tlCh02 = gsap.timeline({
        scrollTrigger: {
            trigger: "#ch02",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=3000",
            // Check : self.progress is a nb between 0 and 1; depending on the user actions, it either plays normally or in reverse.
            onUpdate: (self) => {
                if (self.progress >= 0.1 && !titleHasPlayed) {
                    titleAnimation.play();
                    titleHasPlayed = true;
                }
                else if (self.progress < 0.1 && titleHasPlayed) {
                    titleAnimation.reverse();
                    titleHasPlayed = false;
                }
            }
        }
    });

    // CustomWiggle extension 
    // Used on the cleaner to give it a small wiggle
    CustomWiggle.create("cleanerWiggle",
        {
            wiggles: 2,
            ease: "uniform"
        });

    // Cleaner animation : goes from left to right for the duration of the timeline
    tlCh02.fromTo("#cleaner",
        { x: "-10vw" },
        {
            x: "110vw",
            duration: 6,
            ease: "power3.inOut"
        }, "+=2"
    )
        // Clean trail animation : follows the cleaner
        .fromTo("#clean-trail",
            { x: "-10vw" },
            {
                x: 0,
                clipPath: "inset(0 -10% 0 0)",
                duration: 6,
                ease: "power3.inOut"
            }, "<"
        )

        // Text animations
        .to("#ch02-text01", { opacity: 1 }, "<1vw")
        .to("#ch02-text02", { opacity: 1 }, "<1.5vw")
        .to("#ch02-text03", { opacity: 1 }, "<0.75vw");

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