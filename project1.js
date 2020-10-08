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

// button.addEventListener('click', function () {
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=imperial&appid=a46d7ace8fe9b30fe73ee26488f40d18')
//     // promises
//     .then(response => response.json())
//     .then(data => {
//         var nameValue = data['name'];
//         var tempValue = data['main']['temp'];
//         var descValue = data['weather'][0]['description'];

//         name.innerHTML = nameValue;
//         desc.innerHTML = descValue;
//         temp.innerHTML = tempValue;

© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
