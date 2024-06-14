const geocoding = (location, callbackFunc) => {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    location
  )}&format=json`;

  request(
    { url, json: true, headers: { "User-Agent": "request" } },
    (error, response, body) => {
      if (error) {
        callbackFunc(null, "Can't fetch geocoding data");
      } else if (response.statusCode !== 200) {
        callbackFunc(null, "Something went wrong, please try again later");
      } else {
        if (body[0] && body.length > 0) {
          const latitude = body[0].lat;
          const longitude = body[0].lon;
          callbackFunc(
            { latitude, longitude, placeName: body[0].display_name },
            null
          );
        } else {
          callbackFunc(null, "No data found for this location");
        }
      }
    }
  );
};

module.exports = geocoding;
