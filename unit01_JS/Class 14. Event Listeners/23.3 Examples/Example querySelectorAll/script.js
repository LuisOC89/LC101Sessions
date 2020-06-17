
init = function() {
    // Selects ALL the <li> elements and adds text to each one
    let listItems = document.querySelectorAll("li");
    for (let i=0; i < listItems.length; i++) {
        listItems[i].innerHTML += " is yummy"
    }

    // Selects the PURPLE <li> elements and make them bold
    let purpleItems = document.querySelectorAll(".purple li");
    for (let i=0; i < purpleItems.length; i++) {
        purpleItems[i].innerHTML += "!!!"
    }
            
    // Console log the contents of the first items in each list
    // Remember that querySelector returns only the FIRST match
    let firstRed = document.querySelector(".red li");
    console.log("contents of first red li:", firstRed.innerHTML);
    let firstPurple = document.querySelector(".purple li");
    console.log("contents of first purple li:", firstPurple.innerHTML);
}

window.onload = init;
