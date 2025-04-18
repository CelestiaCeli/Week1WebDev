var GeneratedWord;
var IndexPosition = 0;
var Guesses = 0;
var Rows = 5;
var Columns = 6;
var ShowCredits = false;
var Win = false;

function CheckWord() {
    const container = document.getElementById("WordleContainer");
    var div = container.childNodes[IndexPosition];
    var ChosenWord = "";
    console.log(div.children.length);
    for(var i = 0; i < div.children.length; i++)
    {
        ChosenWord += div.children[i].value;
        console.log(div.children[i].value);
    }
    console.log(ChosenWord);

    

    var myWord = ChosenWord;
    var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + myWord;

    if (ChosenWord.length >= Rows)
    {
        fetch(url)
    .then (response => {
    
        if (!response.ok) {
            throw new Error (`Network response was not ok`);
        }
        return response.json();
        })
        .then(data => {
            console.log(`Data:`, data);
            WordPasser(ChosenWord);
        })
        .catch (error => {
            console.error(`Error fetching data:`, error);
            WordValid = false;
        }); 
    }

}

function WordPasser(ChosenWord)
{
    Guesses += 1;
    const container = document.getElementById("WordleContainer");
    var div = container.childNodes[IndexPosition];
    var YellowText;

    for(var i = 0; i < div.children.length; i++)
    {
        if (div.children[i].value == GeneratedWord[i])
            {
                div.children[i].style = "background-color: green;";
            }        
            else
            {
                for(var ii = 0; ii < GeneratedWord.length; ii++)
                {
                    if (div.children[i].value == GeneratedWord[ii] && div.children[i].value != YellowText)
                    {
                        div.children[i].style = "background-color: yellow;";
                        YellowText = div.children[i].value;
                    }
                }
            }
        console.log(YellowText);
    }

    console.log(Guesses);

        if (ChosenWord == GeneratedWord)
            {

                alert("Winner!!!");
                Win = true;
                
            }
            else 
            {
                console.log("LOSER!!!!!!!!");
            }
    
            console.log(container.childNodes[IndexPosition].childNodes[0])
            for(i = 0; i < container.childNodes[IndexPosition].childNodes.length; i++)
            {
                container.childNodes[IndexPosition].childNodes[i].disabled = true;
            }
    
            IndexPosition += 1;
            console.log(container.childNodes[IndexPosition]);
            for(i = 0; i < container.childNodes[IndexPosition].childNodes.length; i++)
            {
                if (Win == false)
                    {
                        container.childNodes[IndexPosition].childNodes[i].disabled = false;   
                    }
            }
            if (Guesses >= Columns)
            {
                alert("YOU LOSE LMAO");
            }

}

function apiCall()
{
    GeneratedWord;
    if (Rows >= 3 && Rows <= 9)
    {
        fetch('https://random-word-api.vercel.app/api?words=1&length=' + Rows)
        .then(response => {
            if (!response.ok) {
                GeneratedWord = "N/A";
                SetWord()
                throw new Error('Network response was not ok');
            }
            return response.json();
            })
        .then(data => {
            console.log('Data:', data);
    
            GeneratedWord = data[0].toUpperCase();
            SetWord()
            // Hnadle the data here
        })
        .catch (error => { console.error('Error fetching data:', error);
        });
    }
    else 
    {
        GeneratedWord = "N/A";
        SetWord();
    }
}

function SetWord()
{
    const FinalWord = document.getElementById("Answer");
    var FinalWordElement = document.createElement("P");

    FinalWord.hidden = true;
    FinalWordElement.textContent = GeneratedWord;
    FinalWord.appendChild(FinalWordElement);
    console.log(GeneratedWord);
}

function RevealWord()
{
    FinalWord = document.getElementById("Answer");
    if (FinalWord.hidden == true)
    {
        document.getElementById("Answer").hidden = false;
    }
    else
    {
        document.getElementById("Answer").hidden = true;
    }
}


window.onload = ()=>{
    let ColumnElement = document.getElementById("Columns");
    let RowElement = document.getElementById("Rows");
    ColumnElement.value = 6;
    RowElement.value = 5;

    console.log("Page Loaded");
    Resetter();
    Credits();
}


function generateWordle(){
    let ColumnElement = document.getElementById("Columns");
    let RowElement = document.getElementById("Rows");
    let ProgressElement = document.getElementById("ProgressReport");

    Rows = RowElement.value;
    Columns = ColumnElement.value;

    console.log(ColumnElement.value);
    if (Rows >= 3 && Rows <= 9)
    {
        Resetter();
        ProgressElement.innerHTML = ``;
    }
    else
    {
        ProgressElement.innerHTML = `<p>Failed to set! Please ensure row is between 3 - 9!</p>`;
    }
}

function Resetter()
{
    const FinalWord = document.getElementById("Answer");
    const container = document.getElementById("WordleContainer");
    Guesses = 0;
    IndexPosition = 0;
    container.innerHTML = "";
    FinalWord.innerHTML = "";

    WordleGenerator();
}

function WordleGenerator()
{
    const container = document.getElementById("WordleContainer");
    for(var ii = 0; ii <= Columns; ii++) {
    
        var div = document.createElement("div");
        //create inner loop for columns
        for(var jj = 0; jj < Rows; jj++)
        {
                var Input = document.createElement("input");
                Input.style.width = "1.5ch";
                Input.maxLength = 1;
                Input.type = "text";
                Input.setAttribute("oninput", "OnKeyboard(this)");
                div.appendChild(Input);
                Input.disabled = true;
                if (ii == 0)
                {
                    Input.disabled = false;
                }

        }

        container.appendChild(div);
    
        //This code adds an "onKeyUp" event to each child div of container. (row)
        var childs = container.children;
        for (ii = 0; ii< childs.length;ii++){
             childs[ii].onkeyup = goNext;    
        }
    }
    apiCall();
}

function goNext(event) {
    //https://stackoverflow.com/questions/15595652/focus-next-input-once-reaching-maxlength-value
    var target = event.srcElement; //checks the srcEement or the target if srcElement is null
    var myLength = target.value.length; //find the length of the text in the input
    if (myLength >= 1) { //if we entered a single character
        var next = target; //sets self to current target (Temporary)
        while (next = next.nextElementSibling) { //goes to the next sibling element  that is an "input tag"
            if (next == null) //if it finds a null value(end of children)
                break; //exit loop
            if (next.tagName.toLowerCase() === "input") { //if the value is an input
                next.focus(); //focus on it.
                break;
            }
        }
    }
    else if (myLength === 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}

function OnKeyboard(ooglaboogla)
{
    console.log(ooglaboogla.value)
    if (/[A-Za-z]/.test(ooglaboogla.value))
    {
        ooglaboogla.value = ooglaboogla.value.toUpperCase()
    }
    else
    {
        ooglaboogla.value = "";
    }


}

function Credits()
{
    var Credits = document.getElementById("ActualCredits");
    console.log(Credits);
    if (ShowCredits == true)
    {
        Credits.hidden = false;
        ShowCredits = false;
    }
    else
    {
        Credits.hidden = true;
        ShowCredits = true;
        console.log("OK");
    }
}
