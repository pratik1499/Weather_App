const getData = async (city) => {
  let tempreature = document.getElementById("temp");
  let loc = document.getElementById("location");
  let feelslike = document.getElementById("feels-like");
  let humidity = document.getElementById("humidity");
  let desc = document.getElementById("desc");
  let wind = document.getElementById("wind");
  let pressure = document.getElementById("pressure");
  let gpressure = document.getElementById("gpressure");
  let clouds = document.getElementById("clouds");
  let description = document.getElementById("description");

  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cba4fdc589f8a2eba8b74dfe62b1497b`,
      { mode: "cors" }
    );

    const response = await data.json();
    console.log(response);

    let temp = parseFloat(response.main.temp - 273.15).toFixed(2);
    let feels = parseFloat(response.main.feels_like - 273.15).toFixed(2);

    tempreature.innerHTML = temp + "&#xb0;" + "C";
    loc.innerHTML = response.name + ", " + response.sys.country;
    feelslike.innerHTML = "&nbsp" + feels + "  &#xb0;" + "C";
    humidity.innerHTML = response.main.humidity + "%";
    desc.innerHTML = response.weather[0].main;
    description.innerHTML = response.weather[0].description;

    wind.innerHTML = response.wind.speed + " m/s";
    pressure.innerHTML = response.main.pressure + " hPa";
    gpressure.innerHTML = "&nbsp" + response.main.grnd_level + " hPa";

    clouds.innerHTML = response.clouds.all + "%";
  } catch (e) {
    document.querySelector(".error").innerHTML =
      "Please enter valid city name!";
    location.reload();
  }
};

window.onload = function () {
  getData("pune");
};
