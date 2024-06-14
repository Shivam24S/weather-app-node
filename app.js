const geocoding = require("./util/geocoding.js");
const weather = require("./util/weather.js");

// getting geocoding data

geocoding("ahmadabad", (data, error) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Geocoding Data:", {
      placeName: data.placeName,
      latitude: data.latitude,
      longitude: data.longitude,
    });
  }
  // getting wether data
  weather(data.latitude, data.longitude, (data, error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("weather data", data);
    }
  });
});
