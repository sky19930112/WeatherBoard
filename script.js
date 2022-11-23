var searchInput = document.querySelector('#searchInput');
var searchBtn = document.querySelector('#searchBtn');
var today = document.querySelector('#today');
var future = document.querySelector('#future');
var weatherApi = "https://api.openweathermap.org";
var ApiKey = "09878fa39ce4cbfcc644551af0fcc59c"



function InputSearch() {
  var search = searchInput.value;

  // pop search history in UI
  let searchHistory = JSON.parse(localStorage.getItem('storeSearch')) || [];
  searchHistory.forEach(city => {
    document.querySelector('#history').innerHTML += `${city}`
  });

  // event to call search history back

  // setup local storage
  let storeSearch = JSON.parse(localStorage.getItem('storeSearch')) || [];
  storeSearch.push(search);
  localStorage.setItem('storeSearch', JSON.stringify(storeSearch))

  console.log(search)

  axios.get(`${weatherApi}/data/2.5/forecast?q=${search}&units=imperial&appid=${ApiKey}`)
  .then(res => {
    console.log(res.data);

    var city = res.data.city
    var list = res.data.list
    var list0 = res.data.list[0]
    var list8 = res.data.list[8]
    var list16 = res.data.list[16]
    var list24 = res.data.list[24]
    var list32 = res.data.list[32]
    var list39 = res.data.list[39]

    var lat = res.data.city.coord.lat;
    var lon = res.data.city.coord.lon;

  axios.get(`${weatherApi}/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${ApiKey}`)
    .then(res => {
      console.log(res.data);

      currentCitiy.innerHTML = `${city.name}`;
      currentDate.innerHTML = `${list[0].dt_txt}`;
      // trying to get icon work
      /*
      document.getElementById("currentIcon").innerHTML = `<img src="http://openweathermap.org/img/wn/${list0.weather[0].icon}@4x.png">`;
      */
      currentTemperature.innerHTML = `temp: ${list0.main.temp} °F`;
      currentHumidity.innerHTML = `Humidity: ${list0.main.humidity}%`;
      currentWind.innerHTML = `Wind: ${list0.wind.speed}`
      currentUVI.innerHTML = `UVI: ${res.data.current.uvi}`
    
    
      let day1 = {
        date: list[8].dt_txt,
        temp: `temp:${list8.main.temp}°F`,
        Humidity: `Humidity: ${list8.main.humidity}%`
      }
      future1.innerHTML = `${day1.date},<br>${day1.temp},<br>${day1.Humidity}`

      let day2 = {
        date: list[16].dt_txt,
        temp: `temp:${list16.main.temp}°F`,
        Humidity: `Humidity: ${list16.main.humidity}%`
      }
      future2.innerHTML = `${day2.date},<br>${day2.temp},<br>${day2.Humidity}`

      let day3 = {
        date: list[24].dt_txt,
        temp: `temp:${list24.main.temp}°F`,
        Humidity: `Humidity: ${list24.main.humidity}%`
      }
      future3.innerHTML = `${day3.date},<br>${day3.temp},<br>${day3.Humidity}`

      let day4 = {
        date: list[32].dt_txt,
        temp: `temp:${list32.main.temp}°F`,
        Humidity: `Humidity: ${list32.main.humidity}%`
      }
      future4.innerHTML = `${day4.date},<br>${day4.temp},<br>${day4.Humidity}`

      let day5 = {
        date: list[39].dt_txt,
        temp: `temp:${list39.main.temp}°F`,
        Humidity: `Humidity: ${list39.main.humidity}%`
      }
      future5.innerHTML = `${day5.date},<br>${day5.temp},<br>${day5.Humidity}`

      weatherArray= [day1, day2 , day3, day4, day5]
      console.log(weatherArray)
    });
  })
}




searchBtn.addEventListener('click', InputSearch);
