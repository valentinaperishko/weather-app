import debounce from "lodash.debounce";
import refs from "./refs.js";
let apiKey = `d6971763a1a99b9727d959a50b545efb`;
const {city, temp, icon, description, weather, input, button, humidity, wind } = refs;
input.addEventListener("keyup", (e)=> {
    if(e.key === 'Enter'){
    getFetch(input.value);
    }
});
button.addEventListener("click", ()=>{
    getFetch(input.value)
});

function getFetch(query) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`;
    let result = fetch(url)
    .then((response)=>response.json())
    .then((data)=> {console.log(data);
        city.textContent = `Weather in ${data.name}`;
        let tempC = Math.round(data.main.temp - 273.15);
        temp.textContent = `${tempC}°C`;
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        icon.alt = data.weather[0].description;
        description.textContent = data.weather[0].description;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        wind.textContent = `Wind speed: ${data.wind.speed}km/h`;
        weather.classList.remove("loading");
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${data.name}')`
    })
    .catch((error)=>{console.log(error); console.log("Mistake")});
    
    return result;
}