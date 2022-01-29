let links = [];
links[0] = "https://searx.be/";
links[1] = "https://searx.nixnet.services/";
links[2] = "https://anon.sx/";
links[3] = "https://search.disroot.org";
links[4] = "https://searx.gnu.style/";
links[5] = "https://searx.prvcy.eu/";
links[6] = "https://northboot.xyz/searx/";
links[7] = "https://jsearch.pw/";
links[8] = "https://searx.tiekoetter.com/";
links[9] = "https://metasearch.nl/";
links[10] = "https://searx.ninja/";
links[11] = "https://search.snopyta.org/";
links[12] = "https://searx.hardwired.link/";
links[13] = "https://searx.thegreenwebfoundation.org/";
links[14] = "https://www.gruble.de/";
links[15] = "https://searx.theanonymouse.xyz/";
links[16] = "https://searx.zackptg5.com/";
links[17] = "https://searx.mha.fi/";
links[18] = "https://searx.tuxcloud.net/";
links[19] = "https://searx.fmac.xyz/";
links[20] = "https://searx.sp-codes.de/";
links[21] = "https://searx.roflcopter.fr/";
links[22] = "http://searx.rasp.fr/";
links[23] = "https://searx.stuehieyr.com/";
links[24] = "https://paulgo.io/";
links[25] = "https://searx.webheberg.info/";
     
function openLink() {
  var i = ~~(Math.random() * links.length);
  window.location.href = links[i] + "&q=" + document.getElementsByClassName("searchsearx")[0].value;
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
