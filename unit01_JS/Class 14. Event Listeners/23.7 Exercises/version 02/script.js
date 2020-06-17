let button = null;
let paragraph = null;
let missionAbort = null;
let customButtons;

window.onload = () => {
    missionAbort = document.getElementById("abortMission");
    button = document.getElementById("liftoff");
    paragraph = document.querySelector("p");
    customButtons = document.getElementsByClassName("customB");

    button.addEventListener("click", function () {
        paragraph.innerHTML = "Houston, we have lift off!";
    });
    
    missionAbort.addEventListener("mouseover", function () {
        missionAbort.style.backgroundColor = "red";
    });
    
    for (customButton of customButtons) {
        customButton.addEventListener("click", function (event) {
            console.log(event.target.id); 
            if (event.target.id === 'liftoff'){
                paragraph.innerHTML = "Houston, we have lift off!";
            } else if (event.target.id === 'abortMission'){
                let response = confirm("Are you sure you want to abort the mission?");
                if (response) {
                    console.log("Cool!");
                } else {
                    console.log("Oh no!");
                }
            }
        });
    }
}
