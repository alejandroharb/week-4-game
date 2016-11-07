$(document).ready(function(){
    /*
    variables: computerNumber (random 19-120), 4 crystals (random number 1-12), counter, score
    random number generated at start of game(variable)
    4 crystals contain a random number(1-12) generated at start of game. number remains same until end of game
    click on crystal adds its number to score (score counter)
    win if score = random number
    lose if score > random number
    game restarts (reset)
        wins/loses updated
        score reset to zero
        score counter reset
    */
    var compNum;
    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;
    var counter;
    var score;
    var win;
    var losses;
    var gameEnd = false;
    //returns random number within range
    function randomRange(max, min) {
        return Math.floor(Math.random()*(max-min +1))+ min;
    }
    // resets game variables
    function roundReset(){
        score = 0;
        counter = 0;
        compNum = randomRange(120,19);
        crystal1 = randomRange(12,1);
        crystal2 = randomRange(12,1);
        crystal3 = randomRange(12,1);
        crystal4 = randomRange(12,1);
        $("#computerNumber, #score").empty();
    }

    function gameStart() {
        roundReset();
        $('#computerNumber').text(compNum);
        if(!gameEnd){
            //click event for crystals
            $('#crystal1').on('click', function(){
                score += crystal1;
                $('#score').text(score);
            });
            $('#crystal2').on('click', function(){
                score += crystal2;
                $('#score').text(score);
            });
            $('#crystal3').on('click', function(){
                score += crystal3;
                $('#score').text(score);
            });
            $('#crystal4').on('click', function(){
                score += crystal4;
                $('#score').text(score);
            });
        }

    }
    gameStart();
})