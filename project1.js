

// var apiKey = "5ce8439fd4264478d1da0b24a7cd547d";
// var city = "houston"
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a46d7ace8fe9b30fe73ee26488f40d18";


// $.ajax({
//   url: queryURL,
//   method: "GET"
// })

// .then(function(response) {

//   console.log(queryURL);
//   console.log(response);
// })

let city = "";
var apiKey = "5ce8439fd4264478d1da0b24a7cd547d";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a46d7ace8fe9b30fe73ee26488f40d18";

//on click function for search history buttons
function listClicker() {
  $(".listbtn").on("click", function (event) {
    event.preventDefault();
    city = $(this).text().trim();
    APIcalls();
  })
}

function searchClicker() {
  $("#search").on("click", function (event) {
    event.preventDefault();

    // APIcalls();
    storeCities();
    renderButtons();
  })
}


//     // get current conditions from openweather
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (current_data) {
  console.log(current_data);
  let temp = Math.round(((current_data.main.temp - 273.15) * 9 / 5 + 32))
  // console.log("The temperature in " + city + " is: " + temp);
  $(".current_temp").text("Temperature: " + temp + String.fromCharCode(176) + "F");
  $(".current_hum").text("Humidity: " + current_data.main.humidity + " %");
  $(".current_wind").text("Wind Speed: " + current_data.wind.speed + " MPH");
  $(".current_weather_icon").attr({
    "src": "http://openweathermap.org/img/w/" + current_data.weather[0].icon + ".png",
    "height": "100px", "width": "100px"
  });

})