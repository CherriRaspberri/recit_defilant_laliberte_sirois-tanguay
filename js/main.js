// ScrollTrigger setup
gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, CustomWiggle);

// Local JS files imports
import "./chapitres/ch-01.js";
import "./chapitres/ch-02.js";
import "./chapitres/ch-03.js";
import "./chapitres/ch-04.js";
import "./chapitres/ch-05.js";
import "./chapitres/ch-06.js";
import "./chapitres/ch-07.js";

import { createNavigation } from "./navigation.js";

//---
// Vue component implementation - Navigation bar - Olivier Laliberté 

// Fetches every chapter in HTML document
const chaptersList = document.querySelectorAll(".chapter");
// Creates an array made of all chapters 
// Every chapter comes with their chapter id and title
const chaptersArray = Array.from(chaptersList).map((section) => ({
    id: section.id
}));
// Adds the nav bar in the project
window.nav = createNavigation(chaptersArray);