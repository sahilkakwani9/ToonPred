var characters = ["bunny","devil","sylvester","wile","road-runner","elmer","porky-pig","tweety","daffy"];
var game_pattern = [];
var user_clicked_pattern = [];
var score = 0;
var FirstTimePressed = true;

function playSound(character){
    var cAudio = new Audio("../Sounds/"+character+'.mp3');
    cAudio.play();
}

function animatePress(character){
    $("#"+character).addClass("pressed");
    console.log("#"+character);
    setTimeout(() => { $("#"+character).removeClass("pressed"); }, 3);
}

$(".col-md-4").click(function(){
    var userchosenCharacter =  this.id;
    // userClickedPattern.push(userchosenColour);
    playSound(userchosenCharacter);
    // animatePress(userchosenCharacter);
    // print(userchosenCharacter);
    console.log(userchosenCharacter);
})

$(".mod").click(function(){
    var userchosenCharacter = this.id;
    animatePress(userchosenCharacter);
    console.log(userchosenCharacter);
})
