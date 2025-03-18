
var Parent = document.getElementById("Container");
var Children = [];
var CurrentIndex = 0;

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
    console.log("Page Loaded");
    generateWordle();
}

function generateWordle(){
    var container = document.getElementById("Container");
    for(var ii = 0; ii < 6; ii++) {
        var div = document.createElement("div");
        Children.push(div);
        //create inner loop for columns
        for(var jj = 0; jj < 5; jj++)
        {
                var Input = document.createElement("input");
                Input.style.width = "1.5ch";
                Input.type = "text";
                Input.maxLength = 1;
                if (ii != 0)
                    {
                        Input.disabled = true;
                    }
                div.appendChild(Input);
                console.log(div);
        }
        container.appendChild(div);
        container.innerHTML += `<br>`;
    }
    container.firstChild.firstChild.focus();
    var DivArray = querySelector("input[input]");
    console.log(DivArray);
    console.log(document.activeElement());
}

function OnKeyboard()
{
    var Parent = document.getElementById("Container");
    var innerDiv = Parent.childNodes[CurrentIndex];
    var FinalFinalWord = [];
    var FinalWord = [];
    var Word = ""
    console.log(innerDiv);
    for(var i = 0; i < 5; i++)
    {
        FinalWord.push(innerDiv.childNodes[i]);
        console.log(Array.from(FinalWord[i].value));
        FinalFinalWord.push(FinalWord[i].value);
    }

    console.log(FinalFinalWord);

}