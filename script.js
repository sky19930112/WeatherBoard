var searchHistory = [];
var weatherApi = 'https://api.openweathermap.org';
var ApiKey = 'd91f911bcf2c0f925fb6535547a5ddc9';

var searchForm = document.querySelector('#searchForm');
var searchInput = document.querySelector('#searchInput');
var todayContainer = document.querySelector('#today');
var futureContainer = document.querySelector('#future');
var searchHistoryContainer = document.querySelector('#history');


// fetch api
function fetchApi(search) {
  var apiUrl = `${weatherApi}/geo/1.0/direct?q=${search}&limit=5&appid=${ApiKey}`;

  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      if (!data[0]) {
        alert('Location not found');
      } else {
        appendToHistory(search);
        fetchWeather(data[0]);
      }
    })
    .catch(function (err) {
      console.error(err);
    });
}

// search
function handleSearchFormSubmit(input) {
  input.preventDefault();
  var search = searchInput.value.trim();
  fetchApi(search);
  searchInput.value = '';
}


