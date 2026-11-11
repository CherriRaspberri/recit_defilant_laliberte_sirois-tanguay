// js/navigation.js : le composant Vue (Options API)
// Barre de progression + navigateur de chapitres

export function createNavigation(chapters) {
  Vue.createApp({
    // 1. Les données : ce qui peut changer
    data() {
      return {
        chapters: chapters, // la liste reçue de main.js
        activeIndex: 0,     // le chapitre à l'écran
        progress: 0,        // de 0 à 1 : où en est-on dans la page
      };
    },

    // 2. Les méthodes : les actions
    methods: {
      goTo(id) {
        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        document.getElementById(id).scrollIntoView({
          behavior: reduced ? "auto" : "smooth",
        });
      },

      updateScroll() {
        const max = document.documentElement.scrollHeight
          - window.innerHeight;
        this.progress = max > 0 ? window.scrollY / max : 0;

        // Le chapitre actif : le dernier dont le haut
        // a dépassé le milieu de l'écran
        const middle = window.innerHeight / 2;
        this.chapters.forEach((chapter, index) => {
          const section = document.getElementById(chapter.id);
          if (section.getBoundingClientRect().top <= middle) {
            this.activeIndex = index;
          }
        });
      },
    },

    // 3. Au démarrage du composant (à copier tel quel)
    mounted() {
      window.addEventListener("scroll", this.updateScroll, {
        passive: true,
      });
      this.updateScroll();
    },
  }).mount("#navigation");
}