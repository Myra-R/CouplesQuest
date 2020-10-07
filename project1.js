let city = "";

let citiesDiv = document.getElementById("favorite_cities");
//start with empty array

let cities = [];
init();
listClicker();
searchClicker();

// pull search history from local storage if available
function init() {
    let saved_cities = JSON.parse(localStorage.getItem("cities"));

    if (saved_cities !== null) {
        cities = saved_cities
    }

    renderButtons();
}

// assign search history to local storage
function storeCities() {
    localStorage.setItem("cities", JSON.stringify(cities));
}


//render buttons for each element in cities array as a search history for user

function renderButtons() {
    citiesDiv.innerHTML = "";
    if (cities == null) {
        return;
    }
    let new_cities = [...new Set(cities)];
    for (let i = 0; i < new_cities.length; i++) {
        let cityName = new_cities[i];

        let buttonEl = document.createElement("button");
        buttonEl.textContent = cityName;
        buttonEl.setAttribute("class", "listbtn");

        citiesDiv.appendChild(buttonEl);
        listClicker();
    }
}
//on click function for search history buttons
function listClicker() {
    $(".listbtn").on("click", function (event) {
        event.preventDefault();
        city = $(this).text().trim();
        APIcalls();
    })
}



// click event for search button
function searchClicker() {
    $("#searchbtn").on("click", function (event) {
        event.preventDefault();
        city = $(this).prev().val().trim()

        //push the city into favorites array
        cities.push(city);

        //max array.length is 10, if over 10 the newest search will be saved & the oldest discarded
        if (cities.length > 10) {
            cities.shift()
        }
        // if there are no saved search results
        if (city == "") {
            return;
        }
        APIcalls();
        storeCities();
        renderButtons();

        // "https://api.openweathermap.org/data/2.5/weather?q=houston&appid=a46d7ace8fe9b30fe73ee26488f40d18",
    })
}

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a46d7ace8fe9b30fe73ee26488f40d18";


    $.ajax({
        url = queryURL,
        method: "GET",
    }).then(function (current_data) {
        console.log(current_data);
        let temp = Math.round(((current_data.main.temp - 273.15) * 9 / 5 + 32))
        console.log("The temperature in " + city + " is: " + temp);
        $("#temp").text("Temperature: " + temp + String.fromCharCode(176) + "F");
        $("#hum").text("Humidity: " + current_data.main.humidity + " %");
        $("#c_wind").text("Wind Speed: " + current_data.wind.speed + " MPH");
        $("#weather_icon").attr({
            "src": "http://openweathermap.org/img/w/" + current_data.weather[0].icon + ".png",
            "height": "100px", "width": "100px"
        });
    });
