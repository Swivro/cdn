document.cookie = "categories=general;";
document.cookie = "language=en;";
document.cookie = "locale=en;";
document.cookie = "autocomplete=duckduckgo;";
document.cookie = "image_proxy=1;";
document.cookie = "method=POST;";
document.cookie = "safesearch=0;";
document.cookie = "theme=oscar;";
document.cookie = "results_on_new_tab=0;";
document.cookie = "doi_resolver=oadoi.org;";
document.cookie = "oscar-style=logicodev;";
document.cookie = "advanced_search=0;";
document.cookie = "disabled_engines= ;";
document.cookie = "enabled_engines= ddg definitions__general,yahoo__general,google__general,bing__general,qwant__general,gigablast__general,reddit__general,startpage__general,mojeek__general,google play apps__files,google play movies__videos,duckduckgo__general;";
document.cookie = "disabled_plugins= ;";
document.cookie = "enabled_plugins= ;";
document.cookie = "tokens= ;";

let links = [];
links[0] = "https://search.ononoki.org/";
links[1] = "https://searx.be/";
links[2] = "https://searx.tiekoetter.com/";
links[3] = "https://paulgo.io/";
links[4] = "https://searx.bar/";
links[5] = "https://search.disroot.org/";
links[6] = "https://swag.pw/";
links[7] = "https://searx.prvcy.eu/";

function openLink() {
  var i = ~~(Math.random() * links.length);
  window.location.href = (links[i] + "?q=" + document.getElementsByClassName("searchsearx")[0].value);
  return false;
}


// when enter key is pressed while focused on search input
var input = document.getElementById("searchsearx");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btnsend").click();
  }
});
