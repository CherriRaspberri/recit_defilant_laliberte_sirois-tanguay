// Olivier Laliberte 2026
const mm = gsap.matchMedia();

mm.add("(prefers-reduced-motion: no-preference)", () => {
    // Centers cleaner and broom at the middle of the view width before animations
    // Fetches cleaner and broom
    let cleanerImg = document.getElementById("ch03-cleaner-img");
    let broomImg = document.getElementById("ch03-object-img");

    // Centers cleaner
    let cleanerRect = cleanerImg.getBoundingClientRect();
    let cleanerImgCenterX = cleanerRect.left + cleanerRect.width / 2;
    let viewportCenterX = window.innerWidth / 2;
    let cleanerDistance = viewportCenterX - cleanerImgCenterX;
    // Gives calculated position to cleaner
    gsap.set(cleanerImg, { x: cleanerDistance });

    // Centers broom
    // Fetches new cleaner location
    let centeredCleanerRect = cleanerImg.getBoundingClientRect();
    // Fetches current transform values so it can calculate relative to layout
    let currentX = gsap.getProperty(broomImg, "x");
    let currentY = gsap.getProperty(broomImg, "y");
    let broomRect = broomImg.getBoundingClientRect();
    // Finds new position for broom
    let broomCenterX = broomRect.left + broomRect.width / 2 - currentX;
    let broomCenterY = broomRect.top + broomRect.height / 2 - currentY;
    // Target: horizontally centered on the cleaner, slightly below its top edge
    let targetX = centeredCleanerRect.left + centeredCleanerRect.width / 2;
    let targetY = centeredCleanerRect.top + centeredCleanerRect.height * 0.42;
    // Gives calculated position to broom 
    gsap.set(broomImg, {
        x: targetX - broomCenterX,
        y: targetY - broomCenterY
    })

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

    // Background animation (idle)
    gsap.timeline({ repeat: -1, yoyo: true })
        .to("#ch03-water-bg", {
            xPercent: 8,
            yPercent: -5,
            rotation: 3.5,
            scale: 1.09,
            duration: 4.2,
            ease: "sine.inOut"
        })
        .to("#ch03-water-bg", {
            xPercent: -7,
            yPercent: 6,
            rotation: -3,
            scale: 1.03,
            duration: 4.5,
            ease: "sine.inOut"
        });

    tlCh03
        // Step 1 : little shake-up animation
        .to("#ch03-cleaner-img", {
            keyframes: [
                { x: "-=6", y: -2, rotation: -1.5, duration: 0.08 },
                { x: "+=12", y: 2, rotation: 1.5, duration: 0.08 },
                { x: "-=10", y: -2, rotation: -1, duration: 0.08 },
                { x: "+=6", y: 1, rotation: 0.8, duration: 0.08 },
                { x: "-=2", y: 0, rotation: 0, duration: 0.08 }
            ],
            ease: "sine.inOut"
        }, "<0.3")
        // Step 2 : object pop-out
        //Cleaner scales down
        .to("#ch03-cleaner-img", {
            y: -12,
            scaleY: 1.045,
            scaleX: 0.98,
            rotation: -0.8,
            duration: 0.2,
            ease: "power3.out"
        })
        // Broom sticks out and moves upward so it sticks out over the top of the cleaner
        .to("#ch03-object-img", {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.35,
            ease: "back.out(1.6)"
        }, "<")
        // Cleaner takes its shape back
        .to("#ch03-cleaner-img", {
            y: 0,
            scale: 1.2,
            duration: 0.2,
            ease: "back.out(1.7)"
        })
        // Step 3 : move items to their right location
        .to("#ch03-cleaner-img", {
            x: 0,
            scale: 1,
            duration: 0.5,
            ease: "power4.out"
        })
        .to("#ch03-object-img", {
            x: 0,
            scale: 1,
            duration: 1.05,
            ease: "power3.inOut"
        }, "<")
        .to("#ch03-object-img", {
            y: 0,
            duration: 0.95,
            ease: "power2.out"
        }, "<0.1")
        .to("#ch03-object-img", {
            keyframes: [
                { rotation: 18, duration: 0.35, ease: "power1.in" },
                { rotation: -7, duration: 0.35, ease: "power1.out" },
                { rotation: 0, duration: 0.35, ease: "sine.inOut" }
            ]
        }, "<")
        .fromTo(
            "#ch03-object-highlight",
            {
                scale: 0.2,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 0.95,
                duration: 0.22,
                ease: "back.out(2.2)"
            },
            ">"
        )
        .to("#ch03-object-highlight", {
            scale: 0.94,
            duration: 0.1,
            ease: "power2.inOut"
        })
        // Text animations
        .to("#ch03-text01", { opacity: 1 })
        .to("#ch03-text02", { opacity: 1 }, "+=0.6");
});