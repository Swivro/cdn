var searchBox = document.getElementById("searchBox");
function search() {
    window.location = "https://search.swivro.net/secure/search?q=" + searchBox.value;
    
   var searchBtn = document.getElementById("searchBtn");
   searchBtn.innerHTML = "<i class='fas fa-circle-notch fa-spin'></i>";
    
    setTimeout(function() {
     searchBtn.innerHTML = "<i class='fas fa-search'></i>";
    }, 4000);
}

var input = document.getElementsByClassName("searchValue")[0];
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementsByClassName("searchBtn")[0].click();
  }
});
