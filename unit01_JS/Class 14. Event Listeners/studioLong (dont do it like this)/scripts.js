// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    let rocket = document.getElementById('rocket');
    rocket.style.position = 'absolute';
    rocket.style.marginLeft = '0px';
    rocket.style.marginTop = '0px';
    for (button of ['takeoff', 'landing', 'missionAbort']) {
        document.getElementById(button).addEventListener("click", executeSpecificAction);
    }
    for (moveButton of ['up', 'down', 'right', 'left']) {
        document.getElementById(moveButton).addEventListener("click", moveRocket);
    }
}

function executeSpecificAction(event) {
    let flightStatus;
    let shuttleBackground;
    let shuttleHeigth;
    let response;
    if (event.target.id === "takeoff"){
        // When the "Take off" button is clicked, the following should happen:
        // A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
        response = confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            // The flight status should change to "Shuttle in flight."
            flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Shuttle in flight.";
            // The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
            shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor = "blue";
            // The shuttle height should increase by 10,000 miles.
            shuttleHeigth = document.getElementById("spaceShuttleHeight");
            shuttleHeigth.innerHTML = String(10000);
        }
    } else if (event.target.id === "landing") {
        // When the "Land" button is clicked, the following should happen:
        // A window alert should let the user know "The shuttle is landing. Landing gear engaged."
        alert("The shuttle is landing. Landing gear engaged.");
        // The flight status should change to "The shuttle has landed."
        flightStatus = document.getElementById("flightStatus");
        flightStatus.innerHTML = "The shuttle has landed.";
        // The background color of the shuttle flight screen should change from blue to green.
        shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.backgroundColor = "green";
        // The shuttle height should go down to 0.
        shuttleHeigth = document.getElementById("spaceShuttleHeight");
        shuttleHeigth.innerHTML = String(0);
    } else if (event.target.id === "missionAbort") {
        // When the "Abort Mission" button is clicked, the following should happen:
        // A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
        response = confirm("Confirm that you want to abort the mission.");
        if (response) {
            // The flight status should change to "Mission aborted."
            flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Mission aborted.";
            // The background color of the shuttle flight screen should change from blue to green.
            shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor = "green";
            // The shuttle height should go to 0.
            shuttleHeigth = document.getElementById("spaceShuttleHeight");
            shuttleHeigth.innerHTML = String(0);
        }
    }
}

function moveRocket(event) {
    let num;
    let shuttleHeigth;
    let buttonPressed = event.target.id;
    let rocket = document.getElementById('rocket');
    
    let rocketHorPos = rocket.style.marginLeft;
    let rocketVerPos = rocket.style.marginTop;

    num = Number(rocketVerPos.slice(0, rocketVerPos.indexOf('px')));
    if (buttonPressed === "up") {
        rocket.style.marginTop = `${num - 10}px`;
        shuttleHeigth = document.getElementById("spaceShuttleHeight");
        shuttleHeigth.innerHTML = String(Number(shuttleHeigth.innerHTML)+10000);
    } else if (buttonPressed === "down") {
        rocket.style.marginTop = `${num + 10}px`;
        shuttleHeigth = document.getElementById("spaceShuttleHeight");
        shuttleHeigth.innerHTML = String(Number(shuttleHeigth.innerHTML)-10000);
    }

    num = Number(rocketHorPos.slice(0, rocketHorPos.indexOf('px')));
    if (buttonPressed === "right") {
        rocket.style.marginLeft = `${num + 10}px`;
    } else if (buttonPressed === "left") {
        rocket.style.marginLeft = `${num - 10}px`;
    }
}

// 1. ensure all elements have loaded before attaching event handlers
// add load event handler to window
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');
});

window.onload = init;
