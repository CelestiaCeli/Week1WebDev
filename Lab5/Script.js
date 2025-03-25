var GeneratedWord;
var IndexPosition = 0;
var Guesses;

function CheckWord() {
    const container = document.getElementById("WordleContainer");
    var div = container.childNodes[IndexPosition]
    var ChosenWord = "";
    console.log(div.children.length);
    for(var i = 0; i < div.children.length; i++)
    {
        ChosenWord += div.children[i].value;
        console.log(div.children[i].value);
    }
    console.log(ChosenWord);

    var WordValid;

    var myWord = ChosenWord;
    var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + myWord;


    fetch(url)
    .then (response => {
    
        if (!response.ok) {
            throw new Error (`Network response was not ok`);
        }
        return response.json();
        })
        .then(data => {
            console.log(`Data:`, data);
            WordValid = true;
        })
        .catch (error => {
            console.error(`Error fetching data:`, error);
            WordValid = false;
        });



    if (ChosenWord.length >= 5 && WordValid == true)
    {
        if (ChosenWord == GeneratedWord)
            {
                alert("Winner!!!")
            }
        else 
        {
            Guesses += 1;
            console.log("LOSER!!!!!!!!")
        }

        console.log(container.childNodes[IndexPosition].childNodes[0])
        for(i = 0; i < container.childNodes[IndexPosition].childNodes.length; i++)
        {
            container.childNodes[IndexPosition].childNodes[i].disabled = true;
        }

        IndexPosition += 1;
        console.log(container.childNodes[IndexPosition])
        for(i = 0; i < container.childNodes[IndexPosition].childNodes.length; i++)
        {
            container.childNodes[IndexPosition].childNodes[i].disabled = false;
        }
    }
    else
    {
        console.log("Not enough characters!");
    }

    if (Guesses >= 5)
    {
        alert("YOU LOSE LMAO")
    }

}

function apiCall(){
    GeneratedWord;
   fetch('https://random-word-api.vercel.app/api?words=1&length=5')
   .then(response => {
       if (!response.ok) {
           throw new Error('Network response was not ok');
       }
       return response.json();
       })
   .then(data => {
       console.log('Data:', data);

       GeneratedWord = data[0].toUpperCase();

       var FinalWord = document.getElementById("Answer");
       var FinalWordElement = document.createElement("P");

       FinalWordElement.textContent = GeneratedWord;
       FinalWord.appendChild(FinalWordElement);
       console.log(GeneratedWord);
       // Hnadle the data here
   })
   .catch (error => { console.error('Error fetching data:', error);
   });
}


window.onload = ()=>{
    console.log("Page Loaded");
    generateWordle();
    apiCall();
}

function generateWordle(){
    const container = document.getElementById("WordleContainer");
    for(var ii = 0; ii <= 6; ii++) {
    
        var div = document.createElement("div");
        //create inner loop for columns
        for(var jj = 0; jj < 5; jj++)
        {
                var Input = document.createElement("input");
                Input.style.width = "1.5ch";
                Input.maxLength = 1;
                Input.type = "text";
                Input.setAttribute("oninput", "OnKeyboard(this)")
                div.appendChild(Input);
                console.log(div);
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