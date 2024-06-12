// const request = require("postman-request");

// const url =
//   // weather api
//   "http://api.weatherapi.com/v1/search.json?key=a3f9b9dc427b4400bba55628241206&q=ahmedabad";

// // open weather api
// // "https://api.openweathermap.org/data/3.0/onecall?lat=23.033863&lon=72.585022&appid=061e50753c2dab924b83d670d98e3918";

// request({ url, json: true }, (error, response, body) => {
//   if (error) {
//     console.log("can't able to fetch weather data");
//   } else {
//     console.log("weather Data", response.body);
//   }
// });

// // cant able to log single data due to plan subscription

const request = require("postman-request");

const url =
  "http://api.weatherapi.com/v1/current.json?key=a3f9b9dc427b4400bba55628241206&q=ahmedabad";

request({ url, json: true }, (error, response, body) => {
  if (error) {
    console.log("Can't fetch weather data:", error);
  } else if (response.statusCode !== 200) {
    console.log(
      `Failed to fetch weather data. Status code: ${response.statusCode}`
    );
  } else {
    console.log("Weather Data:", body);
    if (body && body.current) {
      console.log("Current Temperature:", body.current.temp_c);
      console.log("Condition:", body.current.condition.text);
    } else {
      console.log(
        "No current weather data available or unexpected response format."
      );
    }
  }
});

// const request = require('postman-request');

const location = "Los Angeles";
const url2 = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
  location
)}&format=json`;

// using geocoding feature for getting latitude and longitude data using place name

request(
  { url: url2, json: true, headers: { "User-Agent": "request" } },
  (error, response, body) => {
    if (error) {
      console.log("Can't fetch geocoding data:", error);
    } else if (response.statusCode !== 200) {
      console.log(
        `Failed to fetch geocoding data. Status code: ${response.statusCode}`
      );
    } else {
      console.log("Geocoding Data:", body[0]);
      if (body && body.length > 0) {
        const latitude = body[0].lat;
        console.log("latitude", latitude);
        const longitude = body[0].lon;
        console.log("longitude", longitude);
      } else {
        console.log("No geocoding data available.");
      }
    }
  }
);
