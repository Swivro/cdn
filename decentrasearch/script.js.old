let links = [];
links[0] = "https://searx.be/";
links[1] = "https://searx.nixnet.services/";
links[2] = "https://anon.sx/";
links[3] = "http://search.disroot.org/";
links[4] = "https://searx.gnu.style/";
links[5] = "https://searx.prvcy.eu/";
links[6] = "https://northboot.xyz/searx/";
links[7] = "https://jsearch.pw/searx/";
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
links[22] = "https://searx.rasp.fr/";
links[23] = "https://searx.stuehieyr.com/";
links[24] = "https://searx.bissisoft.com/";
links[25] = "https://paulgo.io/";
     
function openLink() {
  var i = ~~(Math.random() * links.length);
  window.location.href = links[i] + config + "&q=" + document.getElementsByClassName("searchsearx")[0].value;
  return false;
}

// custom preferences aka config applied to all searx instances
var config = "?preferences=eJx1Vk2P3DYM_TXri7GLJmnR5jCnBXptgaRng5Y4NmNJdPQxM95fX8r2jOX15jDGiKQk8unxSQoiduwJw6lDhx5MZcB1CTo8oXv-71tlWIHJgwpSZMV2NBjxpJMa8q_jiqxEN6Pn23T67hNWFmPP-vTvP9--VwHOGBC86k-_VbFHiycOCnzlMSQTQ8OucXhtIrSnv8EErDRTI042F_QnBhm-sO-qedZziJMkY7gjxRovzxr8UAXKSTWLL2dZgb6AU6ibdetl5Z8J_dSQayJFiVy3owCtkVB0HTnBAcahtuQ9-6Y5k8Hw9Pk1L0IXrCk0zYrTbI2kmmauP0e15LpaipGg_J0tsRWQMEpUzOOoqeu2dZVSz_HSNBfSyNnAIzqpO2CxrNRJ4KLsVhjR85V007Bg6mV8pYE0RCjz286oXuYV8z_disHZkBp8afCIdeBzvILHWpNHFVmwW6o4e3IDQVm6bEpJ1rcpkFrGkXmN7wRuaNdBPrcWfXf3MXcG6wWAAojVPhqYahjHsGFWeixfCHfTRtYa_ZZID62H_Fn3I6vbDTVyUEwmJ3-JU_jYdl9yELAgFBkZkj38VGfkA33g4HOt2HXC6vIIDLch4osPa2rwZiZPqtjJjXb1uQlgWzezBORQxtTKyUEkdjIrKEIh_eoXLxepjCBJdxTuTFwaIx9GnT-PkwULOWt8hFmhHqk6qJ4N-HKXyMPEkUPPA7htp-SCnE3oi0on6Jn3nXEhi1zgfKV2Krmb-dwyD-G9cbdKNvxMHPF9VODk1cGaO4viYZ8LT1nBys4hFd_Y7Wyfvnz587aVqZNGtzEp4JsDW8Y7uGQibgaf2qlDez_uEdHH1GIBgkVNIAsOwurrFdvC5ZMVlSoB4xsN7F7kAMPk2E0Wi2yeXv94-uszXx0N9Y-n19-fvn59mwaoRzZhIJH8vXJYcvRItRJy7RVRmFIbculW5-A7Xf2NLiUfWnBagR03_uboMddUwpBV8v34qE-z9aAKynMIHs_ltip5L393p6oR30oV0LqrNZ6lyrVXilAWffZ1n-4CtalmGYZxsuwEhALls_acNfihTNQJcJB7bJso4retvWjXzr2o2aH-1b5j-2r7oBX7dd15k7fnVXe2zCzdlOGkN0SkrYUHd1W8C0q-QQLGg5iEKBdCtJDPFsZMXp2JuwWNvSiBe3jJy7uihSIDkSph927KNN6p9PMqIlOiMhv2xS-mA06L-UAUKUWTLBlYEZh6bqy5S0eCRfqKYBELYe4enxBFMFk6-Gz4emd8GFKbXEx3cUwj-hQeKIZ8R4_vpEQeMqTl8hSOxkKPZ0ks4yZO79TgYXmwGMgICzOFd8o5ZMt83o-eZrNI-dhDibkVlbBykdfRgwtGDql4Qlj-gTjsxJG9FgXZQoRWl6267e00miRSEU4Z2tvLOnrpOUQRRZTnnNwIcwL7AHJzS8rTTRrbmIOfoVleg1cvUQe33CGN8G7AKTw06xeZ5PtoGRxWWekgmKrlMTzJq9HIg-eDSHOW5-OZDx6BM6tIk7yRbG3mTSXXozTO6X9Z_02z";

// when enter key is pressed while focused on search input
var input = document.getElementById("searchsearx");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btnsend").click();
  }
});
