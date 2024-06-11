const request = require("postman-request");

const url =
  "https://api.openweathermap.org/data/3.0/onecall?lat=23.033863&lon=72.585022&appid=061e50753c2dab924b83d670d98e3918";

request({ url, json: true }, (error, response, body) => {
  if (error) {
    console.log("can't able to fetch weather data");
  } else {
    console.log("weather Data", response.body);
  }
});

// cant able to log single data due to plan subscription
