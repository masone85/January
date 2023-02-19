//let apiKey = "af8a02404a8co87d6b9be4abdat1baf3";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Lisbon&key=af8a02404a8co87d6b9be4abdat1baf3&units=metric";

console.log(apiUrl);

function search(city) {
  let apiKey = "af8a02404a8co87d6b9be4abdat1baf3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?city=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
