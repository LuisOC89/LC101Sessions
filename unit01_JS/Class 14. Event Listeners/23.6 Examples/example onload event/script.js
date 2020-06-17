
function init() {
    
    let ring = document.getElementById("ring-button");
    ring.addEventListener("click", function (event) {
        console.log("ring ring");
    });

    let knock = document.getElementById("knock-button");
    knock.addEventListener("click", function (event) {
        console.log("knock knock");
    });
    
}

// add load event handler to window
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');
});

window.onload = init;
