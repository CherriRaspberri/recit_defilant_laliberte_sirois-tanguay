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
// Vue component implementation - Navigation bar - Olivier Laliberté - 2026

// Fetches every chapter in HTML document
const chaptersList = document.querySelectorAll(".chapter");
// Creates an array made of all chapters 
// Every chapter comes with their chapter id and title
const chaptersArray = Array.from(chaptersList).map((section) => ({
    id: section.id
}));
// Adds the nav bar in the project
window.nav = createNavigation(chaptersArray);

//---
// API fetch and implementation - Olivier Laliberté - 2026

// Creates URL to try to fetch
const apiUrl = new URL("https://api.open-meteo.com/v1/forecast");
apiUrl.search = new URLSearchParams({
    latitude: "45.5088",
    longitude: "-73.5878",
    hourly: "temperature_2m_max,rain",
    timezone: "America/New_York",
    limit: "1"
});

// Loads API request : temperature 
// Returns the next hourly temperature
async function loadTemperature() {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Météo introuvable (" + response.status + ")");
    }
    const data = await response.json();
    return data.hourly.temperature_2m_max[0];
}
// Loads API request : rain 
async function loadRain() {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Météo introuvable (" + response.status + ")");
    }
    const data = await response.json();
    return data.hourly.rain[0];
}

// Creates widget with API 
// 
// Variable instances
let temperatures;
let rain;

function isGoodPoolWeather() {
    // TODO : return true or false depending on the temperature and the rain %
}

async function showWeather() {
    // Requests to API - puts received values into variables
    try {
        temperatures = await loadTemperature();
        rain = await loadRain();
    } catch (error) {
        // Error catch
        console.error(error + " : defaulting to failproof values.");
        // Failproof values : 
        // Temp : 20 (hot)
        temperatures = 20;
        // Rain : 0 (sunny)
        rain = 0;
    }

    // TODO : Widget here
}

showWeather();