const geocoding = require("./util/geocoding.js");
const weather = require("./util/weather.js");

const locationName = process.argv[2];

if (!locationName) {
  console.log("Please provide a location name");
} else {
  // getting geocoding data

  geocoding(locationName, (data, error) => {
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
}
