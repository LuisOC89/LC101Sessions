
window.onload = () => {
    let ul = document.querySelector(".yellow");
    // Add a <li> to the list
    ul.innerHTML += "<li>Lemon</li>";
    console.log(ul.innerHTML.trim());
}