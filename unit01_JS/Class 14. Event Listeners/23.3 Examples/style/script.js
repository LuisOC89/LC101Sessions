
init = function () {
    let strawberry = document.querySelector("#strawberry");
    console.log(strawberry.style.color);
    let blackberry = document.querySelector("#blackberry");
    console.log(blackberry.style.fontSize);
    // Update the font size of strawberry
    strawberry.style.fontSize = "45px";
    console.log(strawberry.style.fontSize);
}

window.onload = init;
