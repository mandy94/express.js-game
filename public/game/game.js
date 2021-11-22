
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var message = document.getElementById("title");
const GAME_OPTIONS = ["game/images/rock.png", "game/images/scissors.png", "game/images/paper.png"];

var myScore = { "element": document.getElementById("my_score"), "value": 0 }
var pcScore = { "element": document.getElementById("pc_score"), "value": 0 }

rock.addEventListener('click', (event) => play(event, 0));
scissors.addEventListener('click', (event) => play(event, 1));
paper.addEventListener('click', (event) => play(event, 2));

var replayBtn = document.getElementById("replay");
replayBtn.addEventListener('click', replay);

var pc_image;  //Image that PC shows
var playable = true;

function replay() {
    pc_image.classList.remove("active");
    pc_image.classList.add("passive");
    message.innerHTML = "";
    playable = true;
    enableAllImages();
    replayBtn.classList.replace("show","hide");
}

function play(event, option_number) {
    if (playable == true) {
        playable = false;
        disableAllImages();        
      
        var pc_option_number = Math.round(Math.random() * 10) % 3;
        pc_image = document.getElementById("pc" + pc_option_number);
        pc_image.src = GAME_OPTIONS[pc_option_number];
        pc_image.classList.replace("passive", "active");

        revealImage(event.path[0]);

        var who_won;
        if (pc_option_number > option_number) {
            if (pc_option_number - option_number == 2)
                who_won = "PC";
            else
                who_won = "YOU";
        } else if (pc_option_number == option_number) {
            who_won = "It'a tie";
        } else {
            if (option_number - pc_option_number == 2)
                who_won = "YOU";
            else
                who_won = "PC";
        }

        document.getElementById("title").innerHTML = who_won + " WON!";
        if (who_won == "PC") {
            pcScore.value += 5;
            pcScore.element.innerHTML = "Score : " + pcScore.value;
        }else if(who_won == "YOU"){
            myScore.value += 5;
            myScore.element.innerHTML = "Score : " + myScore.value;
        }
        document.getElementById("replay").classList.replace("hide", "show");
    }
}
function revealImage(image) {
    image.classList.replace("disable", "active");
    image.classList.remove("image:hover");

}
function disableAllImages() {
    var images = document.getElementsByClassName("image");

    for (var i = 0; i < images.length; i++) {
        images[i].classList.replace("active", "disable");
        images[i].classList.toggle("noHover");
    }
}
function enableAllImages() {
    var images = document.getElementsByClassName("image");

    for (var i = 0; i < images.length; i++) {
        images[i].classList.replace("disable", "active");
        images[i].classList.replace("noHover","image:hover");
    }
}