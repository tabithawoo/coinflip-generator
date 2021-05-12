const PAIRS = [
    {
        actor1: "Caitlin Williams",
        actor2: "Zac Bush",
        role1: "Viola",
        role2: "Sebastian",
        headshot1: "Images/Headshots/CaitlinWilliams.jpg", 
        headshot2: "Images/Headshots/ZacBush.jpg",
        target1: "viola",
        target2: "sebastian"                 
    },
    {
        actor1: "Rowena McNicol",
        actor2: "Cameron Hutt",
        role1: "Orsino",
        role2: "Olivia",
        headshot1: "Images/Headshots/RowenaMcNicol.jpg",
        headshot2: "Images/Headshots/CameronHutt.jpg",
        target1: "orsino",
        target2: "olivia"
    },
    {
        actor1: "Lucy Ross",
        actor2: "Sarah Greenwood",
        role1: "Maria",
        role2: "Malvolio",
        headshot1: "Images/Headshots/LucyRoss.jpg",   
        headshot2: "Images/Headshots/SarahGreenwood.jpg",
        target1: "maria",
        target2: "malvolio"
    },
    {
        actor1: "Michael Smith",
        actor2: "Lucinda Howes",
        role1: "Feste",
        role2: "Antonio",
        headshot1: "Images/Headshots/MichaelSmith.jpg",   
        headshot2: "Images/Headshots/LucindaHowes.jpg",
        target1: "feste",
        target2: "antonio"
    },
    {
        actor1: "Eleni Cassimatis",
        actor2: "Leonard Sun",
        role1: "Sir Toby",
        role2: "Valentine",
        headshot1: "Images/Headshots/EleniCassimatis.jpg",   
        headshot2: "Images/Headshots/LeonardSun.jpg",
        target1: "toby",
        target2: "valentine"
    },
    {
        actor1: "Patrick Sunderland",
        actor2: "Harry Winsome",
        role1: "Sir Andrew",
        role2: "Sea Captain & Priest",
        headshot1: "Images/Headshots/PatrickSunderland.jpg",   
        headshot2: "Images/Headshots/HarryWinsome.jpg",
        target1: "andrew",
        target2: "captain"
    }
];
var coin = document.getElementById("coin");
var flip = document.getElementById("flip");
var pairNum = 0;
intro(pairNum);
function intro(pairNum) {
    const pair = PAIRS[pairNum];
    var firstActor = document.getElementById("firstActor");
    var secondActor = document.getElementById("secondActor");
    firstActor.src = pair.headshot1;
    firstActor.alt = pair.actor1;
    secondActor.src = pair.headshot2;
    secondActor.alt = pair.actor2;
    document.getElementById("firstRole").innerHTML = pair.role1;
    document.getElementById("secondRole").innerHTML = pair.role2;
}
function flipCoin(){
    coin.src="Images/CoinBlank.png";
    coin.classList.add("rotate");
    flip.classList.add("flip");
}
coin.addEventListener("animationend",getResults);
function getResults() {
    const pair = PAIRS[pairNum];
    let result = Math.floor(Math.random() * 2);
        if (result === 0) {
            coin.src="Images/CoinHeads.png";
            coin.alt="Coin showing heads";
            document.getElementById(pair.target1).getElementsByClassName("role")[0].innerHTML = pair.actor1;
            displayHeadshot(pair.headshot1,pair.actor1,pair.target1);
            document.getElementById(pair.target2).getElementsByClassName("role")[0].innerHTML = pair.actor2;
            displayHeadshot(pair.headshot2,pair.actor2,pair.target2);
        }
        else {
            coin.src="Images/CoinTails.png";
            coin.alt="Coin showing tails";
            document.getElementById(pair.target1).getElementsByClassName("role")[0].innerHTML = pair.actor2;
            displayHeadshot(pair.headshot2,pair.actor2,pair.target1);
            document.getElementById(pair.target2).getElementsByClassName("role")[0].innerHTML = pair.actor1;
            displayHeadshot(pair.headshot1,pair.actor1,pair.target2);
        }      
    nextQuestion(++pairNum);
}
function nextQuestion(pairNum){
    if (pairNum < PAIRS.length)
    {
        intro(pairNum);
        coin.classList.remove("rotate");
        flip.classList.remove("flip");
    }
    else
    {
        document.getElementById("introduction").classList.add("hidden");
        document.getElementById("instructions").classList.add("hidden");
        document.getElementById("download").classList.remove("hidden");
        document.getElementById("fullCast").classList.add("highlight");
    }           
}
function displayHeadshot(src,alt,target) {
        var img = document.createElement("img");
        img.crossOrigin = "anonymous";
        img.src = src;
        img.alt = alt;
        document.getElementById(target).appendChild(img);
    }
