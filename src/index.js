function showCurrentCity(response) {
  let currentCity = response.data.name;
  let currentTemp = Math.round(response.data.main.temp);

  let city = document.querySelector("#current-city");
  city.innerHTML = currentCity;

  tempVal = document.querySelector("#temp-val");
  tempVal.innerHTML = currentTemp;
}

function getPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(url).then(showCurrentCity);
}

function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  tempVal = document.querySelector("#temp-val");
  tempVal.innerHTML = temp;
}
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = now.getDay();
let hour = now.getHours();
let min = now.getMinutes();
if (min < 10) {
  min = "0" + min;
}
let h4 = document.querySelector("h4");
h4.innerHTML = `${days[day]} ${hour}:${min}`;

let form = document.querySelector("#search-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");
  let val = input.value;
  let city = document.querySelector("#current-city");
  city.innerHTML = val;

  let apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${apiKey}&units=metric`;

  axios.get(url).then(showTemp);
});

let currentButton = document.querySelector("#current-location");
currentButton.addEventListener("click", function (event) {
  navigator.geolocation.getCurrentPosition(getPosition);
});
