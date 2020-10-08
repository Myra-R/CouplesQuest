var apiKey = "5ce8439fd4264478d1da0b24a7cd547d";
var city = "";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a46d7ace8fe9b30fe73ee26488f40d18";
 
$(document).ready(function() {
    // geolocation enabled
  
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(showcityname);
  
      function showcityname(position) {
        var lat = position.coords.latitude;
        var longit = position.coords.longitude;
        var altitude = position.coords.altitude;
        var latitude_text = document.getElementById("latitude-val");
        var altitude_text = document.getElementById("altit");
        var city_name;
        var temp;
        var pressure;
        var wind_speed;
        var country_name;
        var weather_description;
        var apiKey = "5dd765a29b95b2e058dfd9f33a1dbd0d";
  
        altitude_text.innerHTML = "Altitude is " + altitude;
        latitude_text.innerHTML = "Latitude is " + lat;
  
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + longit + "&appid=" + apiKey, function(data) {
  
          city_name = data["name"];
          country_name = data["sys"]["country"];
          weather_description = data["weather"][0]["description"];
          temp = data["main"]["temp"];
          pressure = data["main"]["pressure"];
          wind_speed = data["wind"]["speed"];
  
          $("#cityname").html(city_name + " &#40;" + country_name + "&#41; " + "has " + weather_description);
          $(".temp").html(temp);
          $(".pressure").html(pressure + " mBar");
          $(".wind-spd").html(wind_speed + " m/s");
  
        })
  
      }
  
    }
  
  })