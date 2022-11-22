var searchInput = document.querySelector('#searchInput');
var searchBtn = document.querySelector('#searchBtn');


function InputSearch() {
  var search = searchInput.value;
  console.log(search)
 
}




searchBtn.addEventListener('click', InputSearch);
