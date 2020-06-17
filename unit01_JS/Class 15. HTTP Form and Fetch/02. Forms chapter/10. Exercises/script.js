let missingFields = [];

window.onload = () => {
    let form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        let validInput = document.querySelectorAll(".vv");
        let selectOptionSelected = document.getElementById("ss");
        let radioButtons = document.querySelectorAll(".rr");
        let radioButtonChecked = false;
        let checkedBoxServers = document.getElementById("cc");

        for (let i=0; i < validInput.length; i++) {
            if (validInput[i].value === "") {
                missingFields.push(validInput[i].name);
            }
        }
        if (selectOptionSelected.options[selectOptionSelected.selectedIndex].text === "* Select One *") {
            missingFields.push(selectOptionSelected.options[selectOptionSelected.selectedIndex].text);
        }

        for (let o=0; o < radioButtons.length; o++) {
            if (radioButtons[o].checked === true) {
                radioButtonChecked = true;
            }
        }
        if (!radioButtonChecked) {
            missingFields.push('windRating');
        }

        if(!checkedBoxServers.checked){
            missingFields.push('productionServers');
        }

        if (missingFields.length > 1) {
            alert(`All fields are required!\nMissing fields: ${JSON.stringify(missingFields)}`);
            // stop the form submission
            event.preventDefault();
            missingFields = [];
        }
    });
  
}
