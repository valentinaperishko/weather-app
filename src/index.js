import css from "./css/styles.css";
import refs from "./js/refs.js";
// import fetch from "./js/fetch.js";

import myWeather from "./js/class.js";
const myWeatherApp = new myWeather(refs);
myWeatherApp.search()