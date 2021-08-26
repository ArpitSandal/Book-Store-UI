function genre_respo() {

    // making nav responsive
    let ham = document.getElementById("navid");
    if (ham.className == "navbar") {
        ham.className += " responsive";
    }
    else {
        ham.className = "navbar";
    }

    let elm = document.getElementById("genreid");
    if (elm.className == "genres") {
        elm.className += " respo-gen";
    }
    else {
        elm.className = "genres";
    }

}