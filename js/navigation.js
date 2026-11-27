//Olivier Laliberté - 2026
// Vue component creation - Navigation bar

// Creates a Vue component that checks what chapter is active (visible on user's screen) and updates the component. 
// The component can be clicked to transport the user to the chapter chosen.
export function createNavigation(chapterList) {
  return Vue.createApp({
    data() {
      return {
        chapters: chapterList,
        activeChapterIndex: 0 // Starts at 0
      }
    },
    methods: {
      // Goes to the selected chapter
      goTo(chapterID) {
        // Returns a boolean to see if the user set his preferences to "reduced"
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        // Smooths the automatic scrolling when a new chapter is chosen in the list
        document.getElementById(chapterID).scrollIntoView({
          behavior: reduced ? "auto" : "smooth"
        });
      },
      // Updates the activeChapterIndex in the data()
      updateActive() {
        // Checks if the chapter is in the middle of the window
        const middle = window.innerHeight / 2;
        this.chapters.forEach((chapter, index) => {
          // Fetches current chapter ID
          const section = document.getElementById(chapter.id);
          // If the top of the section is smaller than the middle of the window height, the current section becomes the active chapter
          if (section.getBoundingClientRect().top <= middle) {
            this.activeChapterIndex = index;
          }
        });
      }
    },
    // Triggers when the component is fully created
    // Updates the activeChapterIndex automatically
    mounted() {
      window.addEventListener("scroll", this.updateActive, {
        passive: true
      });
      this.updateActive();
    }
  }).mount("#chapter-navigation");
}

export function createProgressBar() {
    return Vue.createApp({

        data() {
            return {
                progress: 0
            }
        },
        methods: {
            updateProgress() {
                const max = document.documentElement.scrollHeight - window.innerHeight;
                this.progress = max > 0 ? window.scrollY / max : 0;
            }
        },

        mounted(){

            window.addEventListener("scroll", this.updateProgress,{
                passive: true
            });

            this.updateProgress();
        }

    }).mount
    ("#barre-progression");
}

