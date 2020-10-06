// define vars
let city = "";

function apiCall() {
    $.ajax({
        url = "https://api.openweathermap.org/data/2.5/weather?q=",
        APIkey = "&appid=5ce8439fd4264478d1da0b24a7cd547d",
        queryurl = url + city + APIkey
        

    }).then(function (current_data) {
        console.log(current_data);
        console.log(queryurl);
        let temp = Math.round(((current_data.main.temp - 273.15) * 9 / 5 + 32))
        console.log("The temperature in " + city + " is: " + temp);
        $("#current_temp").text("Temperature: " + temp + String.fromCharCode(176) + "F");
        $("#current_weather_icon").attr({
            "src": "http://openweathermap.org/img/w/" + current_data.weather[0].icon + ".png",
            "height": "100px", "width": "100px"
        });
    })
}