
function init() {
    let paragraph = document.getElementById("description");
    console.log("paragraph contents:", paragraph.innerHTML.trim());
    paragraph.style.color = "blue";
}

window.onload = init;