/*
CSS IDEAS
- Click on the game's image and it opens a pop up which you can then press to lead you to the extended site focused on that game page
- Art showcase slideshow - has arrows to allow u to see more art
- Animation focus

Day 2 Current Goals

- Clean up the project layout
*/

var ThemeMode = true;
var Clicked = false;

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
            File = "Assets/Games/AdnilliationAnim.webp";
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
            File = "Assets/Games/WordleCloneAnim.webp";
            Game = true;
            break;
        case(SealWebsite):
            File = "Assets/Games/SealWebsiteAnim.webp";
            Game = true;
            break;
        case(AboutMeBETA):
            File = "Assets/Games/PortfolioBetaAnim.webp";
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

function ThemeSwitch(element)
{
    document.body.style.backgroundColor="#3d3d3d";
    var Image = element.getElementsByTagName("img")

    ThemeMode = !ThemeMode;
    console.log(ThemeMode);

    var Text = []

    //Feel free to add any tag to change color on mode switch
    Text.push(document.getElementsByTagName("p"));
    Text.push(document.getElementsByTagName("h1"));
    Text.push(document.getElementsByTagName("h2"));
    Text.push(document.getElementsByTagName("h3"));
    Text.push(document.getElementsByTagName("h4"));
    console.log(Text);

    if (ThemeMode == false)
    {
        element.src="Assets/EyeMoon.png";
        document.body.style.backgroundImage="url(Assets/BackgroundDark.webp)";

        for(var i = 0; i < Text.length; i++)
        {
            for(var ii = 0; ii < Text[i].length; ii++)
            {
                Text[i][ii].style.color="white";
            }
        }
    }
    else
    {
        element.src="Assets/BurningEye.png";
        document.body.style.backgroundImage="url(Assets/Background.webp)";

        for(var i = 0; i < Text.length; i++)
            {
                for(var ii = 0; ii < Text[i].length; ii++)
                {
                    Text[i][ii].style.color="black";
                }
            }
    }
}