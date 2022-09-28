let weather = {
  apiKey: "fb5286291db0ff812e1c6d6871ffb39c",
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search:function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

function rech(){
  weather.search();
}

//get position
const findMuState =()=>{
  const status = document.querySelector('.error');
  const success = (position)=>{
    console.log(position)
    const latitiude = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    const geoApiUrl= 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en';
    fetch(geoApiUrl)
    .then(res=> res.json())
    .then (data =>{
      weather.fetchWeather(data.localityInfo.administrative[0].name);
      console.log(data.localityInfo.administrative[0].name);
    })
 }
  
  const error=() =>{
    document.querySelector(".weather").classList.remove("loading");
    status.textContent="enable to find your location";
  }
  navigator.geolocation.getCurrentPosition(success, error);
  
  }
  

$(document).ready(function(){
var autocomplete;
autocomplete = new google.maps.places.Autocomplete((document.querySelector(".search-bar")),{
  types:['geocode'],
})
});