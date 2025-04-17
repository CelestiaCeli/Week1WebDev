/*
CSS IDEAS
- Click on the game's image and it opens a pop up which you can then press to lead you to the extended site focused on that game page
- Art showcase slideshow - has arrows to allow u to see more art
- Animation focus
*/

var ThemeMode = true;

function OnHover(element)
{
    console.log("hovered");

    var Image;
    var Text;
    var File;
    var Game = false;

    //Game Projects
    switch(element)
    {
        case(Adnillihation):
            File = "Assets/Games/OuttaThisHellAnim.webp";
            Game = true;
            break;
        case(AllSeeing):
            File = "Assets/Games/OuttaThisHellAnim.webp";
            Game = true;
            break;
        case(Gooly):
            File = "Assets/Games/GoolyAnim.webp";
            Game = true;
            break;
        case(RootemTootem):
            File = "Assets/Games/RootemTootemAnim.webp";
            Game = true;
            break;
        case(Chained):
            File = "Assets/Games/ChainedAnim.webp";
            Game = true;
            break;
        case(MineSweeping):
            File = "Assets/Games/MineSweepingAnim.webp";
            Game = true;
            break;
        case(Wordle):
            File = "Assets/Games/MineSweepingAnim.webp";
            Game = true;
            break;
        case(SealWebsite):
            File = "Assets/Games/MineSweepingAnim.webp";
            Game = true;
            break;
        case(AboutMeBETA):
            File = "Assets/Games/MineSweepingAnim.webp";
            Game = true;
            break;
    }

    
    //Art
    switch(element)
    {

    }

    Image = element.getElementsByTagName("img");
    Image[0].src = File;
}

function OnLeave(element)
{
    var Image;
    var Text;
    var File;

    switch(element)
    {
        case(Adnillihation):
            File = "Assets/Games/Gooly.webp";
            break;

    
        case(AllSeeing):
            File = "Assets/Games/AllSeeing.webp";
            break;

    
        case(Gooly):
            File = "Assets/Games/Gooly.webp";
            break;

        case(RootemTootem):
            File = "Assets/Games/RootemTootem.webp";
            break;

        case(Chained):
            File = "Assets/Games/Chained.webp";
            break;

        case(MineSweeping):
            File = "Assets/Games/Chained.webp";
            break;
        case(Wordle):
            File = "Assets/Games/WordleClone.webp";
            Game = true;
            break;
        case(SealWebsite):
            File = "Assets/Games/SealWebsite.webp";
            Game = true;
            break;
        case(AboutMeBETA):
            File = "Assets/Games/RepresentationImage.webp";
            Game = true;
            break;

    }

    Image = element.getElementsByTagName("img");    
    Image[0].src = File;
    Text = element.getElementsByTagName("p");
    Text[0].hidden = false;
}

function OnClick(element)
{
    console.log("left");


    switch(element)
    {
        case(Adnillihation):
            Game = true;
            break;
        case(AllSeeing):
            Game = true;
            break;
        case(Gooly):
            Game = true;
            break;
        case(RootemTootem):
            Game = true;
            break;
        case(Chained):
            Game = true;
            break;
        case(MineSweeping):
            Game = true;
            break;
        case(Wordle):
            Game = true;
            break;
        case(SealWebsite):
            Game = true;
            break;
        case(AboutMeBETA):
            Game = true;
            break;
    }

    if (Game)
        {
            var PopUpMenu = document.getElementById("GamePopUp");

            var ParagraphText = PopUpMenu.getElementsByTagName("p");
            var HeaderText = PopUpText.getElementsByTagName("h2");
            var Button = PopUpText.getElementsByTagName("a");


            console.log(ParagraphText);
            PopUpMenu.hidden = false;

            switch(element)
            {
                case(Adnillihation):
                    HeaderText[0].innerText = "Total Adnillihation"
                    ParagraphText[0].innerText = "This is a test!!";
                    Button[0].href = "https://caflianutopia.itch.io/space-bars-and-bouncy-castles"

                    break;
                case(AllSeeing):
                    HeaderText[0].innerText = "The AllSeeing"
                    ParagraphText[0].innerText = "This is a test!!";
                    Button[0].href = "https://caflianutopia.itch.io/space-bars-and-bouncy-castles"

                    break;
                case(Gooly):
                    HeaderText[0].innerText = "Gooly"
                    ParagraphText[0].innerText = "This is a test!!";
                    Button[0].href = "https://caflianutopia.itch.io/space-bars-and-bouncy-castles"

                    break;
                case(RootemTootem):
                    HeaderText[0].innerText = "Chained"
                    ParagraphText[0].innerText = "This is a test!!";
                    Button[0].href = "https://caflianutopia.itch.io/space-bars-and-bouncy-castles"

                    break;
                case(Chained):
                    HeaderText[0].innerText = "MineSweeping"
                    ParagraphText[0].innerText = "This is a test!!";
                    Button[0].href = "https://caflianutopia.itch.io/space-bars-and-bouncy-castles"

                    break;
                case(MineSweeping):
                    HeaderText[0].innerText = "Game Name here!"
                    ParagraphText[0].innerText = "This is a test!!";
                    Button[0].href = "https://caflianutopia.itch.io/space-bars-and-bouncy-castles"

                    break;
                case(Wordle):
                    HeaderText[0].innerText = "Custom Wordle"
                    ParagraphText[0].innerText = "A custom version of wordle I made during class that includes the ability to custom set the width and length of the grid!";
                    Button[0].href = "../Lab5/Main.html"

                    break;
                case(SealWebsite):
                    HeaderText[0].innerText = "The Seal Website"
                    ParagraphText[0].innerText = "A seal website that scales with content!";
                    Button[0].href = "../Lab3/index.html"

                    break;
                case(AboutMeBETA):
                    HeaderText[0].innerText = "About me BETA"
                    ParagraphText[0].innerText = "The old original stinky version of this website!!";
                    Button[0].href = "../Lab2/DetailedAboutMe.html"

                    break;
            }
        }

    var Image = element.getElementsByTagName("img");
    console.log(Image.width);
    var Text = element.getElementsByTagName("p");

    Text[0].hidden = true;


}

function ThemeSwitch(element)
{
    document.body.style.backgroundColor="#3d3d3d";
    var Image = element.getElementsByTagName("img")

    ThemeMode = !ThemeMode;
    console.log(ThemeMode);

    if (ThemeMode == false)
    {
        element.src="Assets/Eye.png";
        document.body.style.backgroundImage="url(Assets/BackgroundDark.webp)";
    }
    else
    {
        element.src="Assets/BurntEye.png";
        document.body.style.backgroundImage="url(Assets/Background.webp)";
    }
}