////TODO: if search is NaN.....use city
////TODO: if two inputs, assume Lat & Long
const runSearch = () => {
  let searchInput = document.querySelector("#searchBox").value;
  console.log(`Running runSearch on ${searchInput}`);
  let weatherAPI = ""
  if (isNaN(searchInput)) {
    weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=imperial&APPID=ac9714c1ba65de61949a81a9c0959b33`
  } else {
    weatherAPI = `http://api.openweathermap.org/data/2.5/weather?zip=${searchInput}&units=imperial&APPID=ac9714c1ba65de61949a81a9c0959b33`
  }
  fetch (weatherAPI).then((response) => {
    console.log(`Response came back as:`, response)
    if (response.status === 200) {
      return response.json()
    }
  }).then((weather) => {
    console.log(weather)
    ///push desired elements into DOM
    let locationID = document.querySelector("#location")
    let currentTempID = document.querySelector("#currentTemp")
    let humidityID = document.querySelector("#humidity")
    let weatherDescID = document.querySelector("#weatherDesc")

    locationID.textContent = `The weather in ${weather.name} is ${weather.weather[0].main}`;
    currentTempID.textContent = `The current temperature is: ${Math.floor(weather.main.temp)} degrees Fahrenheit`;
    humidityID.textContent = `The humidity is: ${weather.main.humidity}`;

  })

}