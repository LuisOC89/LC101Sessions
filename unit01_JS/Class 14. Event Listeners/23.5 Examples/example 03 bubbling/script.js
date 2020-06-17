
window.onload = () => {
    let button = document.getElementById("ring-button");
    button.addEventListener("click", function (event) {
        console.log("button clicked");
    });
    document.getElementById("toolbar").addEventListener("click", function (event) {
        console.log("toolbar clicked");
    });
    document.addEventListener("click", function (event) {
        console.log("document clicked");
    });
}
