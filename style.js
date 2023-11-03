const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey = "63366b40696f5ddc950ad9b6a0242eda"

const searchBtn = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");
const weather_icon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '<sup style="font-size:20px;">°C</sup>';
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weather_icon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weather_icon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weather_icon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Rain") {
        weather_icon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Snow") {
        weather_icon.src = "images/snow.png"
    }
    else {
        weather_icon.src = "images/mist.png"
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
