// ScrollTrigger setup
gsap.registerPlugin(ScrollTrigger);

// Local JS files imports
import "./chapitres/ch-01.js";
import "./chapitres/ch-02.js";
import "./chapitres/ch-03.js";
import "./chapitres/ch-04.js";
import "./chapitres/ch-05.js";
import "./chapitres/ch-06.js";
import "./chapitres/ch-07.js";

// js/main.js, phase 1
import { createNavigation } from "./navigation.js";

const sections = document.querySelectorAll(".chapter");

// Une liste { id, titre } faite à partir des sections du HTML
const chapters = Array.from(sections).map((section) => ({
  id: section.id,
  titre: section.querySelector("h2").textContent,
}));

createNavigation(chapters);