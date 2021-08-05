//create variables for side panel with search form, list of history of searched cities, main box for todays forecast, 5 smaller boxes below with 5 day forecast, and header.
// userCity, API addresses for todays weather and 5 day forecast
// api for todays forecast api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api for 5 day forecast api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
// UV index found here https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// cont API = "012954b21ea1183b476f24736bd1bfdd"

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

// fetch (
//     "api.openweathermap.org/data/2.5/weather?q={city name}&appid=" + api)

//var lat =
//var exclude = "minutely,hourly,daily,alerts"

// UV fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=" + exclude + "&appid=" + API)
