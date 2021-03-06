
// document.getElementById("searchbtn").onclick=

$("#searchbtn").on("click", function () {

  let city = $(".inputValue").val();
  var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a46d7ace8fe9b30fe73ee26488f40d18";



  // get current conditions from openweather
  $.ajax({
    url: weatherURL,
    method: "GET",
  }).then(function (current_data) {
    console.log(current_data);
    let temp = Math.round(((current_data.main.temp - 273.15) * 9 / 5 + 32))
    // console.log("The temperature in " + city + " is: " + temp);
    $(".current_temp").text(temp + String.fromCharCode(176) + "F");
    // $(".current_hum").text(current_data.main.humidity + "% Humidity");
    $(".current_wind").text("Winds " + current_data.wind.speed + "mph");
    $(".current_weather_icon").attr({
      "src": "http://openweathermap.org/img/w/" + current_data.weather[0].icon + ".png",
      "height": "45px", "width": "45px"
    });
  });
});

