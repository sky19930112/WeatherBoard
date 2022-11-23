var searchInput = document.querySelector('#searchInput');
var searchBtn = document.querySelector('#searchBtn');
var weatherApi = "https://api.openweathermap.org";
var ApiKey = "09878fa39ce4cbfcc644551af0fcc59c"

function InputSearch() {
  var search = searchInput.value;
  console.log(search)
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${ApiKey}`)
  .then(res => {
    console.log(res.data);
  })
 
}




searchBtn.addEventListener('click', InputSearch);
