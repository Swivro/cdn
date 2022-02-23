function coinSearch(input) {
    input = input.toLowerCase().trim()

    const list = [
        "shib",
        "squid",
        "acc",
        "svd",
        "kids",
        "squid",
        "elon",
        "doge",
        "bcc"
    ];

    if(list.includes(input)) document.getElementById("scamBtn").click();
    else document.getElementById("safeBtn").click();
}  

document.getElementById("btnCheck").addEventListener("click", () => {
    const { value } = document.getElementById("coinValue");

    coinSearch(value)
})

function scam() {
    document.getElementsByClassName("alertText")[0].style.display = "block";
    document.getElementsByClassName("alertText")[0].style.color = "red";
    document.getElementsByClassName("alertText")[0].innerHTML = "Scam - DO NOT BUY!";
}
function safe () {
    document.getElementsByClassName("alertText")[0].style.display = "block";
    document.getElementsByClassName("alertText")[0].style.color = "green";
    document.getElementsByClassName("alertText")[0].innerHTML = "Safe - legit coin";
}

var input1 = document.getElementById("coinValue");

input1.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btnCheck").click();
  }
});
