//create variables for side panel with search form, list of history of searched cities, main box for todays forecast, 5 smaller boxes below with 5 day forecast, and header.
// userCity, API addresses for todays weather and 5 day forecast
// api for todays forecast api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api for 5 day forecast api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
// UV index found here https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// api source - "https://api.openweathermap.org";
const apiKey = "f068ed2af579c2ab72a944c7c280f68e";
let latitude;
let longitude;
//Forecast url
// const todaysForecastUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
// const fiveDayForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
// const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=&appid=${apiKey}`;


//0. dom selector for where it gets put <div> unique ID
const todayContainer = $("#display-current");
const forecastContainer = $("#forecast");
const searchHistoryContainer = $("#history");

function findLocationWeatherData(event) {
  event.preventDefault();
  console.log("this is the findlocationweatherdata");
  const searchInput = $("#search-input").val();
  console.log(searchInput);
  // getWeather()
  findCurrentWeatherData(searchInput)
}

//1. dom selector to target the button that is pressed to add the city
//a. make html with unique id for a button
//b. add event listener to the button listening for click of element when clicked execute a function findLocationWeatherData()
// const searchInput = $("#search-input");
const searchButton = $("#search-button");
console.log(searchButton);
searchButton.on("click", findLocationWeatherData);

//2. from within the findLocationWeatherData()
//a. grab hold of user input value assign it to variable cityName
//b. execute/call findCurrentWeatherData(cityName)
//3. create findCurrentWeatherData() takes in cityName as argument to be added to api
//a. fetch the data from the api end point using cityName as the parameter and select the data needed for our display (temperature, cloud, emoji, etc.)

function findCurrentWeatherData(cityName) {
  console.log("this is city name", cityName);
  let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;
  $.ajax({
    url: requestUrl,
    method: "GET",
  }).then(function (response) {
    console.log("Single Day Forecast", response);
    latitude = response.coord.lat;
    longitude = response.coord.lon;
    console.log("lat lon", latitude, longitude);
    displayCurrentWeather(response);

    // displayDayWeather(response);
    // const customWeatherDataObj = {};
    // customWeatherDataObj.currentWeather = {};
    // customWeatherDataObj.currentWeather.weather = response.weather;
    // customWeatherDataObj.currentWeather.wind.deg = response.wind.deg;
    // customWeatherDataObj.currentWeather.wind.speed = response.speed;

    findFiveDayForecastWeatherData(cityName)

  });
}

//4. create findFiveDayForecastWeatherData() takes in cityName as argument to be added to api end point

function findFiveDayForecastWeatherData(cityName) {
  let fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`;
  $.ajax({
    url: fiveDayUrl,
    method: "GET",
  }).then(function (response) {
    console.log("Five Day Forecast", response);
    findUvWeatherData(latitude,longitude)
    // weatherobj.fiveDay = {};
    //weatherobj.fiveDay = response.
  })
}

//https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}

//5. create findUVForecastWeatherData() takes in lat and lon as argument to be added to argument

function setUVIcolor(uvi) {
  if (uvi >= 10) {
    $(".uvi").css('color', 'red');
  } else if (uvi >= 5) {
    $(".uvi").css('color', 'yellow');
  } else { 
    $(".uvi").css('color', 'green');
  }
}

function findUvWeatherData(lat, lon) {
  let UvUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=&appid=${apiKey}`;
  $.ajax({
    url: UvUrl,
    method: "GET",
  }).then(function (response) {
    console.log("UV Index", response);
    $(".uvi").text(`UV INDEX: ${response.current.uvi}`)
    console.log("UVI============", response.current.uvi);
    setUVIcolor(response.current.uvi);
  });
}

function displayCurrentWeather(res) {
  console.log("City Name",res.name)
  $("#current-location").text(res.name);
  $("#icon").attr({
    "src": `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`,
    "width": "80px" // Should make a little bigger
  })
  $("#current-temp").text(`TEMP: ${res.main.temp}`);
  $("#current-wind").text(`WIND: ${res.wind.speed}`);
  $("#current-hum").text(`HUMIDITY: ${res.main.humidity}`);
  $("#current-date").text(moment().format("MMM Do YYYY"));
  // $("#current-uv").text(res.name);
  // name, date, temp, windspeed, icon, humidity
}

//https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=&appid=${apiKey}

// display weather function

// function displayWeatherData(infoObj) {

//   // todayContainer;
//   // forecastContainer;
//   // searchHistoryContainer;
// }

// function getWeather(city) {
//   findCurrentWeatherData();
//   findFiveDayForecastWeatherData();
//   findUvWeatherData()
// }














//"012954b21ea1183b476f24736bd1bfdd";
// const searchHistory = [];
// let lat;
// let lon;

// DOM elements

// const searchForm = $("#search-form");
// const searchInput = $("#search-input");
// const searchButton = $("#search-button");
// const todayContainer = $("#display-current");
// const forecastContainer = $("#forecast");
// const searchHistoryContainer = $("#history");

//event listeners

// searchButton.click(async function (e) {
//   e.preventDefault();
//   // searchInput.val();

//   var cityName = searchInput.value.trim();

//   if (username) {
//     getUserRepos(username);

//     repoContainerEl.textContent = "";
//     nameInputEl.value = "";
//   } else {
//     alert("Please enter a GitHub username");
//   }
//   console.log("this is the search", searchInput.val());
//   fetch(
//     `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.val()}=${apiKey}`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data)((lat = data.lat)),
//         (lon = data.lon),
//         console.log(lat, lon);
//     })
//     .then(() => {
//       fetch(
//         `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=&appid=${apiKey}`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           // const oneCallData = {}
//           console.log(data);
//         });
//     });
// });


//FUNCTIONS

//searchCity();
//displayHistory();
//updateHistory();
//clearHistory();

//fetchCurrent();

//fetchForecast();
//fetchUvIndex();

// function fetchLatLon() {
//   fetch(fiveDayForecastUrl)
//     .then(function (response) {
//       console.log("response", response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("data", data);

//       (lat = data.city.coord.lat),
//         (lon = data.city.coord.lon),
//         console.log(lat, lon);
//     });
// }

// searchButton.addEventListener("click", fetchLatLon);

// function fetchOneCall() {
//   fetch(
//     `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=&appid=${apiKey}`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       // const oneCallData = {}
//       console.log(data);
//     });
// }

// function getWeather() {
//   fetchLatLon("London").then(() => fetchOneCall(lat, lon));
// }

// getWeather();

//==============================================================

