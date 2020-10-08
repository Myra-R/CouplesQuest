var apiKey = "5ce8439fd4264478d1da0b24a7cd547d";
var city = "houston"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a46d7ace8fe9b30fe73ee26488f40d18";



$.ajax({
  url: queryURL,
  method: "GET"
})

.then(function(response) {

  console.log(queryURL);
  console.log(response);
})

