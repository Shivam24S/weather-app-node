const request = require("postman-request");

const weather = (latitude, longitude, callbackFunction) => {
  // const url = `http://api.weatherapi.com/v1/current.json?key=a3f9b9dc427b4400bba55628241206&q=${encodeURIComponent(
  //   location
  // )}`;
  const url = `http://api.weatherapi.com/v1/current.json?key=a3f9b9dc427b4400bba55628241206&q=${latitude},${longitude}`;

  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callbackFunction(null, "Unable to connect to weather service.");
    } else if (response.statusCode !== 200) {
      callbackFunction(
        null,
        "Unable to fetch weather data. Please try again later."
      );
    } else {
      if (body && body.current) {
        const temp = body.current.temp_c;
        const condition = body.current.condition.text;
        callbackFunction({ temp, condition }, null);
      } else {
        callbackFunction(
          null,
          "No current weather data available or unexpected response format."
        );
      }
    }
  });
};

module.exports = weather;
