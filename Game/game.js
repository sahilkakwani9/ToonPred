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


const checkAnswer = (level,character) => {
    if(game_pattern[level] == user_clicked_pattern[level]){
        if(game_pattern.length == user_clicked_pattern.length){
            setTimeout(function(){
                nextCard();
            },1000);
        }
        
    }
    else
    {
        $("#"+character).addClass("incorrect");
        setTimeout(() => { $("#"+character).removeClass("incorrect"); }, 1000);
        $(".count").removeClass("count-done");
        $(".count-ph").removeClass("count-done");
        $(".count").text('GAME OVER, Press Any Key to Restart');
        $(".count").addClass("count-over");
        $(".count-ph").text('GAME OVER');
        gameOver()


    }
    
}




function nextCard(){
    user_clicked_pattern = [];
    var randomNum = Math.floor(Math.random()*9);
    var randomCharacterChoice = characters[randomNum];
    console.log(randomCharacterChoice);
    game_pattern.push(randomCharacterChoice);
    var button = $("#"+randomCharacterChoice);
    if(FirstTimePressed){
        score = 0;
        $(".score").text("SCORE: "+score);
    }
    else{
        score += 100;
        $(".score").text("SCORE: "+score);
    }
    
    
    playSound(randomCharacterChoice);

}



function animatePress(character){
    $("#"+character).addClass("correct");
    
    console.log("#"+character);
    setTimeout(() => { $("#"+character).removeClass("correct"); }, 1000);
}

function gameOver(){
    game_pattern = [];
    FirstTimePressed = true;
    $(".over").text("Game Over");
    setTimeout(() => {$(".over").text(""); },3000);
    setTimeout(() => {$(".btn1").removeClass("count-done"); },3000);
    
}

$(".mod").click(function(){
    var userchosenCharacter = this.id;
    user_clicked_pattern.push(userchosenCharacter);
    animatePress(userchosenCharacter);
    checkAnswer(user_clicked_pattern.length-1,userchosenCharacter);
})

$(document).keydown(function(){
    if(FirstTimePressed){
        nextCard();
    }
    else{

    }
    $(".count").addClass("count-done");
    FirstTimePressed = false;
})

$(".btn1").click(function(){
    if(FirstTimePressed){
        nextCard();
    }
    else{

    }
    $(".btn1").addClass("count-done");
    FirstTimePressed = false;
})




