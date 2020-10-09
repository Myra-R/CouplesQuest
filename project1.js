$("#searchbtn").on("click", function () {

  let city = $(".inputValue").val();
  var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a46d7ace8fe9b30fe73ee26488f40d18";

  var breweryUrl = "https://api.openbrewerydb.org/breweries?by_city=" + city;

  $.ajax({
    url: breweryUrl,
    method: "GET",
  })
    .then(function (response) {

      console.log(breweryUrl);
      console.log(response);
      const breweries = []

      for (let i = 0; i < 3; i++) {
        const obj = {
          name: response[i].name,
          street: response[i].street,
          phone: response[i].phone,
          website_url: response[i].website_url,
        }
        breweries.push(obj)
      }
      console.log(breweries);

      breweries.forEach(data => {
        $("#brew").append(`
          <div>
          <h1>${data.name}</h1>
          <h2>${data.street}</h2>
          <h3>${data.phone}</h3>
          <a>${data.website_url}</a>
          </div>

          `)
      })
    });
      $("#brew").empty()
  $("#inputId").keydown(function (key) {
    var code = key.keyCode || key.which;
    if (code == 32) {
      $(this).val(
        function (index, value) {
          return value.substr(0, value.length - 1);
        })
      setTimeout(
        function () {
          $(this).val($(this).val() + "_");
        }, 10
      )
    }
  })

  // get current conditions from openweather
  $.ajax({
    url: weatherURL,
    method: "GET",
  }).then(function (current_data) {
    console.log(current_data);
    let temp = Math.round(((current_data.main.temp - 273.15) * 9 / 5 + 32))
    console.log("The temperature in " + city + " is: " + temp);
    $(".current_temp").text("Temperature: " + temp + String.fromCharCode(176) + "F");
    $(".current_hum").text("Humidity: " + current_data.main.humidity + " %");
    $(".current_wind").text("Wind Speed: " + current_data.wind.speed + " MPH");
    $(".current_weather_icon").attr({
      "src": "http://openweathermap.org/img/w/" + current_data.weather[0].icon + ".png",
      "height": "100px", "width": "100px"
    });
  });
});