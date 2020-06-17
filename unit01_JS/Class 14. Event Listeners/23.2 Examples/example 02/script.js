console.log("the page title:", document.title);
console.log(document.getElementById("main-text"));

function init () {
    let p = document.getElementById("main-text");
    p.append("More words about things");
    console.log(p.innerHTML);
}

window.onload = init;