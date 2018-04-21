var APPID = "d10f43f140475bbbd0772f27f2bdee89"
var temp;
var loc;
var icon_w;
var humidity;
var wind;
var direction;

function updateByCityId(city_id){
  var url = "https://api.openweathermap.org/data/2.5/weather?"+"id="+city_id+"&APPID="+ APPID+"&units=metric";
  sendRequest(url);
}

function sendRequest(url){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var data = JSON.parse(xmlhttp.responseText);
      var weather = {};
      weather.icon_w = data.weather[0].icon;
      weather.humidity = data.main.humidity;
      weather.wind = data.wind.speed;
      // weather.direction = data.wind.deg;
      weather.loc = data.name;
      weather.temp = data.main.temp;
      update(weather);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

  // document.getElementById("direction").innerHTML = "What";

function update(weather) {
  icon_w.src = "https://openweathermap.org/img/w/" + weather.icon_w + ".png";
  humidity.innerHTML = weather.humidity;
  wind.innerHTML = weather.wind;
  // direction.innerHTML = weather.direction;
  loc.innerHTML = weather.loc;
  temp.innerHTML = weather.temp;
}

window.onload = function () {
  temp = document.getElementById("temperature");
  loc = document.getElementById("location");
  icon_w = document.getElementById("icon_w");
  humidity = document.getElementById("humidity");
  wind = document.getElementById("wind");
  // direction = document.getElementById("direction");

  updateByCityId(2694762);

}
