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
  document.cookie = "categories=general; expires=Thu, 18 Dec 2913 12:00:00 UTC";
  document.cookie = "language=en; expires=Thu, 18 Dec 2913 12:00:00 UTC";
  document.cookie = "locale=en; expires=Thu, 18 Dec 2913 12:00:00 UTC";
  document.cookie = "autocomplete=duckduckgo; expires=Thu, 18 Dec 2913 12:00:00 UTC";
  document.cookie = "image_proxy=1; expires=Thu, 18 Dec 2913 12:00:00 UTC";
  document.cookie = "method=POST; expires=Thu, 18 Dec 2913 12:00:00 UTC";
  document.cookie = "safesearch=0; expires=Thu, 18 Dec 2913 12:00:00 UTC";
  document.cookie = "theme=oscar; expires=Thu, 18 Dec 2913 12:00:00 UTC";
  document.cookie = "results_on_new_tab=0; expires=Thu, 18 Dec 2913 12:00:00 UTC";
  document.cookie = "doi_resolver=oadoi.org; expires=Thu, 18 Dec 2913 12:00:00 UTC";
  document.cookie = "oscar-style=logicodev; expires=Thu, 18 Dec 2913 12:00:00 UTC";
  document.cookie = "advanced_search=0; expires=Thu, 18 Dec 2913 12:00:00 UTC";
  document.cookie = "disabled_engines= ; expires=Thu, 18 Dec 2913 12:00:00 UTC";
  document.cookie = "enabled_engines= ddg definitions__general,yahoo__general,google__general,bing__general,qwant__general,gigablast__general,reddit__general,startpage__general,mojeek__general,google play apps__files,google play movies__videos,duckduckgo__general; expires=Thu, 18 Dec 2913 12:00:00 UTC";
  document.cookie = "disabled_plugins= ; expires=Thu, 18 Dec 2913 12:00:00 UTC";
  document.cookie = "enabled_plugins= ; expires=Thu, 18 Dec 2913 12:00:00 UTC";
  document.cookie = "tokens= ; expires=Thu, 18 Dec 2913 12:00:00 UTC";
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
