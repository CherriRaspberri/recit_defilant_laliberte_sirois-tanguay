// Olivier Laliberte 2026
const mm = gsap.matchMedia();

mm.add("(prefers-reduced-motion: no-preference)", () => {
    // SplitText extension
    // Used for title animation
    const splitTitle = SplitText.create("#ch03-title", {
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

    const tlCh03 = gsap.timeline({
        scrollTrigger: {
            trigger: "#ch03",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=4000",
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

    tlCh03
    .to("#ch03-text01", { opacity: 1 })
    .to("#ch03-text02", { opacity: 1 }, "<60%");
});