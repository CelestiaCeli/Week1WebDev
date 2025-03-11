

function CheckWord() {
    var myWord = document.getElementById("myWord").value;
        
        var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + myWord;
        var message = document.getElementById("message");

        fetch(url)
        .then (response => {

            if (!response.ok) {
                throw new Error (`Network response was not ok`);
            }
            return response.json();
            })
            .then(data => {
                console.log(`Data:`, data);
            message.innerHTML = `<p>Your word: ${myWord} is a word</p>`;
            })
            .catch (error => {
                console.error(`Error fetching data:`, error);
                message.innterHTML = `<p>Your word: ${myWord} is made up </p>`
            });
}
window.onload = ()=>{
    console.log("Page Loaded")
    generateWordle()
}

function generateWordle(){
    var container = document.getElementById("Container");
    for(var ii = 0; ii < 6; ii++) {

        var div = document.createElement("div");
        //create inner loop for columns
        for(var jj = 0; jj < 5; jj++)
        {
                var Input = document.createElement("input");
                Input.style.width = "1ch";
                Input.maxLength = 1;
                div.appendChild(Input);
                console.log(div);
        }
        container.appendChild(div);
        container.innerHTML += `<br>`;
        
    }
    var DivArray = querySelectorAll("div")
}

function OnKeyboard()
{
    var container = document.getElementById("Container");

    var ElementFocus = container.querySelector("input[autofocus]");
    console.log(ElementFocus.parentElement)
}