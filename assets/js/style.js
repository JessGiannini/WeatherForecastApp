//create variables for side panel with search form, list of history of searched cities, main box for todays forecast, 5 smaller boxes below with 5 day forecast, and header.
// userCity, API addresses for todays weather and 5 day forecast
// api for todays forecast api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api for 5 day forecast api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
// UV index found here https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// api source - "https://api.openweathermap.org";
const apiKey = "012954b21ea1183b476f24736bd1bfdd";
const searchHistory = [];

// DOM elements

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const todayContainer = document.querySelector("#display-current");
const forecastContainer = document.querySelector("#forecast");
const searchHistoryContainer = document.querySelector("#history");

//Forecast url

const todaysForecastUrl =
  "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
const fiveDayForecastUrl =
  "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}";
const uvIndexUrl =
  "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";

//FUNCTIONS

//displayHistory();
//updateHistory();
//clearHistory();
//fetchCurrent();
//fetchForecast();
//fetchUvIndex();

// fetch(
//   "https://api.openweathermap.org/data/2.5/forecast?q=London&appid=012954b21ea1183b476f24736bd1bfdd"
// )
//   .then((Response) => Response.json())
//   .then((data) => {
//     console.log(data);
//     for (var i = 0; i < 5; i++) {
//       console.log(data.list[i * 8]);
//       $data.list[i * 8].main.humidity;
//     }
//   });
