// start import jquery

//var script = document.createElement('script');
//script.src = "https://cdn.swivro.net/jquery-203.min.js";
//document.head.appendChild(script)
// document.head.innerHTML += "<script src='https://cdn.swivro.net/jquery-203.min.js'></script>"; 
import ("https://cdn.swivro.net/jquery-203.min.js");
// end import jquery


$.getJSON('https://ipinfo.io', function(response) {
    $("#address").html(response.country);

    var address = (response.country);


    function UK() {
        if (window.location.hostname === "uk.swivro.net") {
            console.log("not in UK");
        } else {
            window.location.href = "https://uk.swivro.net" + window.location.pathname;
        }
    }

    function UKcheck() {
        if (window.location.hostname === "uk.swivro.net") {
            // do nothing
        } else {
            UK()
        }
    }



    if (address === "GB") {
        UKcheck()
    } else {
        // do nothing
    }

});

// old section
window.onload = function() {
    var buttons = document.getElementsByClassName("btn"),
        len = buttons !== null ? buttons.length : 0,
        i = 0;
    for (i; i < len; i++) {
        buttons[i].className += " shadow-none";
    }
}

function anonymize() {
    var anonymize = document.getElementsByClassName("anonymize")[0];
    anonymize.innerHTML = "<i class='fas fa-circle-notch fa-spin'></i>";
}
