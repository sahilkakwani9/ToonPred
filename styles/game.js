var characters = ["bunny","devil","sylvester","wile","road-runner","elmer","porky-pig","tweety","daffy"];
var game_pattern = [];
var user_clicked_pattern = [];
var score = 0;
var FirstTimePressed = true;
var level =0;

function playSound(character){
    var cAudio = new Audio("../Sounds/"+character+'.mp3');
    cAudio.play();
}

function startGame(){
   
    setTimeout(() => { $(".count").text("2"); }, 1000);
    setTimeout(() => { $(".count").text("1"); }, 2000);
    setTimeout(() => { $(".count").addClass("count-done"); }, 3000);
    setTimeout(() => { $(".box").style.display="block"; }, 4000);
    
}



function nextCard(){
    user_clicked_pattern = [];
    var randomNum = Math.floor(Math.random()*9);
    var randomCharacterChoice = characters[randomNum];
    game_pattern.push(randomCharacterChoice);
    var button = $("#"+randomCharacterChoice);
    // button.fadeOut(100).fadeIn(100);
    playSound(randomCharacterChoice);
    animatePress(randomCharacterChoice);

}

// function checkAnswer(level){
//     if(game_pattern[level] == user_clicked_pattern[level]){
//         if(game_pattern.length == user_clicked_pattern.length){
//             setTimeout(function(){
//                 nextSequence();
//             },1000);
//         }
//     }
//     else{
//         // $("body").addClass("game-over");
//         // setTimeout(() => { $("body").removeClass("game-over"); }, 2);
//         gameOver();

//     }
// }

// function gameOver(){
//     game_pattern = [];
//     level = 0;
//     FirstTimePressed = true;
// }

function animatePress(character){
    $("#"+character).addClass("pressed");
    console.log("#"+character);
    setTimeout(() => { $("#"+character).removeClass("pressed"); }, 1000);
}

$(".card").click(function(){
    var userchosenCharacter =  this.id;
    // user_clicked_pattern.push(userchosenColour);
    // userClickedPattern.push(userchosenColour);
    
    // checkAnswer(user_clicked_pattern.length-1)
    // animatePress(userchosenCharacter);
    // print(userchosenCharacter);
    console.log(userchosenCharacter);
})

$(".mod").click(function(){
    var userchosenCharacter = this.id;
    animatePress(userchosenCharacter);
    playSound(userchosenCharacter);
})

// Contdown

// $(document).keydown(function(){
//     // $("h1").text("Level "+level);
//     if(FirstTimePressed){
//         nextPattern();
//     }
//     FirstTimePressed = false;
// })

nextCard();
startGame();
