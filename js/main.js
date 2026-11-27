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
import { createProgressBar } from "./navigation.js";

// Vue component implementation - Progress bar - Cédric Sirois-Tanguay - 2026
window.nav = createProgressBar();

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

// API variable instances
let temperatures;
let rain;
// API const instances
const GOOD_TEMP = 20;
const NO_RAIN = 0;

// Fetches weather from API
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
}

// Sends data to widget in HTML
// 2 variables of data : 
// - temperature : checks levels of temp
// - rain : checks levels of rain in mm
// function : isGoodPoolWeather : returns a boolean
function createWeatherWidget(temp, rain) {
    return Vue.createApp({
        data() {
            return {
                temperature: temp,
                rain: rain
            }
        },
        methods: {
            // Returns true or false depending on the temperature and the rain %
            isGoodPoolWeather() {
                let isGoodWeather = false;
                // Checks if there is no rain outside
                if (rain == NO_RAIN) {
                    // Checks if the tempearture is equal or above 
                    if (temp >= GOOD_TEMP) {
                        isGoodWeather = true;
                    }
                }
                // Returns a bool
                return isGoodWeather;
            }
        }
    }).mount(".pool-weather-widget");

}

// Init : used to initialize everything made with async functions
async function init(){
    // Weather widget creation
    await showWeather();
    console.log(`Temp : ${temperatures} | Rain : ${rain}mm`);
    createWeatherWidget(temperatures, rain);
}
init();