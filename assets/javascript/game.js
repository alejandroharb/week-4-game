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
    var wins=0;
    var score=0;
    var losses=0;
    roundReset();
    //returns random number within range
    function randomRange(max, min) {
        return Math.floor(Math.random()*(max-min +1))+ min;
    }
    function roundReset(){
        score = 0;
        compNum = randomRange(120,19);
        crystal1 = randomRange(12,1);
        crystal2 = randomRange(12,1);
        crystal3 = randomRange(12,1);
        crystal4 = randomRange(12,1);
        $("#computerNumber, #score").empty();
    }
    function clickEvents (id, crystal){
        $(id).on('click', function(){
            score += crystal;
        });
    }

    clickEvents('#crystal1',crystal1);
    clickEvents('#crystal2',crystal2);
    clickEvents('#crystal3',crystal3);
    clickEvents('#crystal4',crystal4);
    $('#score').text(score);
        console.log("score inside clickEvent function: "+score)


    $('#computerNumber').text(compNum);
    if(score == compNum){
        alert("win!");
        wins ++;
        $("#wins").text(wins);
        roundReset();
    }
    if(score > compNum){
        alert("lose!");
        losses ++;
        $("#losses").text(losses);
        roundReset();
    }
    console.log("crystal 1: "+ crystal1);
    console.log("crystal 2: "+ crystal2);
    console.log("crystal 3: "+ crystal3);
    console.log("crystal 4: "+ crystal4);
    console.log("global compNumb: "+ compNum)
    console.log("wins: "+wins);
    console.log("losses: "+losses);
    console.log("global score variable: "+score);
});

//need to get the global score variable from the functions