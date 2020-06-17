
function init() {
      // selects the <p> using class selector
      let main = document.querySelector(".main");
      console.log(main.innerHTML.trim());
      main.style.color = "blue";

      // Selects the <div> using tag selector
      let response = document.querySelector("div");
      console.log(response.innerHTML.trim());
      response.style.color = "red";
}

window.onload = init;
