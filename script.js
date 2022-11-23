var searchInput = document.querySelector('#searchInput');
var searchBtn = document.querySelector('#searchBtn');
var today = document.querySelector('#today');
var future = document.querySelector('#future');
var weatherApi = "https://api.openweathermap.org";
var ApiKey = "09878fa39ce4cbfcc644551af0fcc59c"

function InputSearch() {
  var search = searchInput.value;
  console.log(search)
  axios.get(`${weatherApi}/data/2.5/forecast?q=${search}&appid=${ApiKey}`)
  .then(res => {
    console.log(res.data);
    var lat = res.data.city.coord.lat;
    var lon = res.data.city.coord.lon;
    axios.get(`${weatherApi}/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${ApiKey}`)
    .then(res => {
      console.log(res.data);
      today.innerHTML = `${res.data.city.name}`
    })
  })
 
}




searchBtn.addEventListener('click', InputSearch);
