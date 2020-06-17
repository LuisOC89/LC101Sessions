let missingFields = [];

function setSearchEngine(){
    let radioButtonSelected = document.querySelector("input[name=engine]:checked").value;
    let actionURL;

    engineURL = {
        google: "https://www.google.com/",
        duckDuckGo: "https://duckduckgo.com/",
        bing: "https://www.bing.com/search",
        ask: "https://www.ask.com/web"
    }

    return engineURL[radioButtonSelected];
}

function init() {
    // TODO: register the handler
    myform.addEventListener("submit", function(event) {
        let radioButtons = document.querySelectorAll(".rr");
        let radioButtonChecked = false;
        for (let o=0; o < radioButtons.length; o++) {
            if (radioButtons[o].checked === true) {
                radioButtonChecked = true;
            }
        }
        if (!radioButtonChecked) {
            missingFields.push('search Engine');
        }
        let searchTerm = document.getElementById("searchTerm");

        if (searchTerm.value === "") {
            missingFields.push(searchTerm.name);
        }

        if (missingFields.length > 1) {
            alert(`All fields are required!\nMissing fields: ${JSON.stringify(missingFields)}`);
            // stop the form submission
            event.preventDefault();
            missingFields = [];
        }

        document.myform.action = setSearchEngine();

    });
  
}

window.onload = init;
