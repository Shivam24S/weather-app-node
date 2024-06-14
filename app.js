const geocoding = require("./util/geocoding.js");
const weather = require("./util/weather.js");

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

yargs(hideBin(process.argv)).command({
  command: "name",
  describe: "Specify location name",
  builder: {
    name: {
      describe: "Location name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    let locationName = argv.name;

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
  },
}).argv;
