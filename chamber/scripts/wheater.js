// select HTML elements in the document
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const div = document.querySelector('#weatherForecastContainer')

const description = document.querySelector('#des');
const tem = document.querySelector('temp');



//VARIABLES
const apiKey = 'f1ca516d46ff29dd3373bf5007cb6f4c';
const latitud = -32.94418050095899 ;
const longitud = -60.622121042636756  ;
const url = `//api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiKey}&units=metric`;

const url2 = `//api.openweathermap.org/data/2.5/forecast?lat=${latitud}&lon=${longitud}&appid=${apiKey}&units=metric`;



async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
         displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
  apiFetch();

  function displayResults(data){
    myTown.innerHTML = `${data.name} City`;
    // currentTemp.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;C`;
    myDescription.innerHTML = `<strong>Current wheather:</strong> ${data.weather[0].description}`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('SRC',iconsrc)
    myGraphic.setAttribute('alt',data.weather[0].description)
    
  }

async function apiFetch2() {
  try {
    const response = await fetch(url2);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
        // displayResults(data); // uncomment when ready
        displayWeatherForecast(data)
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResults2(data2){
  myTown.innerHTML = data2.name;
  // currentTemp.innerHTML = data.weather[0].description;
  myTemperature.innerHTML = `${data2.main.temp}&deg;C`;
  description.innerHTML = data2.weather[0].description;

  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  myGraphic.setAttribute('SRC',iconsrc)
  myGraphic.setAttribute('alt',data.weather[0].description)
  
}



////////////////////////////////////////////////
const displayWeatherForecast = (weatherData) => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const temperatures = [];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Recorremos la lista de predicciones del JSON
  weatherData.list.forEach((entry) => {
    const entryDate = new Date(entry.dt * 1000); // Convert dt to date Object

    // Verificamos si la hora es 12:00
    if (entryDate.getHours() === 12) {
      const diffDays = Math.floor((entryDate - today) / (1000 * 60 * 60 * 24));

      // Guardamos las temperaturas de hoy, mañana y pasado mañana
      if (diffDays >= 1 && diffDays <= 3) {
        temperatures.push({
          day: weekdays[entryDate.getDay()],
          temperature: entry.main.temp,
          weatherIcon: entry.weather[0].icon,
          weatherDescription: entry.weather[0].description,
          humidity: entry.main.humidity,
        });
      }
    }
  });

  const temperatures2 = temperatures.slice(0, 3);

  temperatures2.forEach((weatherDay) => {
    const weatherIconForecast = document.createElement("img");
    const weatherFigureContainer = document.createElement("figure");
    const weatherFigCaption = document.createElement("figcaption");
    const tempPara = document.createElement("p");
    const humidity = document.createElement("p");
    const divContainer = document.createElement("div");

    tempPara.innerHTML = `<strong>${weatherDay.day}: ${parseInt(
      weatherDay.temperature
    )}°C`;
    humidity.innerHTML = `Humidity: ${/*parseInt()*/ weatherDay.humidity}%`;

    const weatherIcon = `https://openweathermap.org/img/wn/${weatherDay.weatherIcon}.png`;

    let figCaption = weatherDay.weatherDescription;

    weatherIconForecast.setAttribute("src", weatherIcon);
    weatherIconForecast.setAttribute("alt", figCaption);
    weatherFigCaption.innerHTML = figCaption;

    weatherFigureContainer.appendChild(weatherIconForecast);
    weatherFigureContainer.appendChild(weatherFigCaption);
    divContainer.appendChild(tempPara);
    divContainer.appendChild(weatherFigureContainer);
    divContainer.appendChild(humidity);
    div.appendChild(divContainer); // crear en html
  });
};

// getWeatherAPI();

// getWeatherForecastAPI();
apiFetch2();