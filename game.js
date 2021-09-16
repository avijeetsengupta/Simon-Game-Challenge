// randomly select any colour.
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keypress(function(){
    if(!started){

        $("#level-title").text("level " + level);
        nextSequence();
        started = true;
    }
});


// To check which button got clicked.
$(".btn").click(function()  {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
} );

function checkAnswer(currentLevel){
        if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
            console.log("sucsess");
        }else{
            console.log("wrong");
        }
}


function nextSequence() {

    level++;

    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber]; 
    gamePattern.push(randomChosenColour);

// This think works when you press any key basically blinks at stratting. 
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
// To make a sound when pressing color.
    playSound(randomChosenColour);
}

// To match the sound effect from btn to next sequence
function playSound(name) {
    var audio = new Audio("sounds/"+ name + ".mp3");
    audio.play();
}


// To show flash in a button.  
function animatePress(currentColour){
         
    $("#"+currentColour).addClass("pressed");

    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed")
    },100)

}
