function clearErrors() {
    for (var loopCounter = 0; loopCounter < document.forms["betForm"].elements.length; loopCounter++){
        if (document.forms["betForm"].elements[loopCounter].parentElement.parentElement.className.indexOf("has-") != -1){

            document.forms["betForm"].elements[loopCounter].parentElement.parentElement.className = "form-group";
        }
    }
}

function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

function playLuckySevens(){
    var die1 = rollDice();
    var die2 = rollDice();
    return die1 + die2;
}

function bettingResults(startingBid){
    var loopCounter = 0;
    var currentCash = startingBid;
    var mostWon = startingBid;
    var roundMostWon = 0;
    while (currentCash >= 1){
        loopCounter++;
        if (playLuckySevens() == 7){
            currentCash = currentCash + 4;
        } else {
            currentCash = currentCash - 1;
        }
        if (currentCash > mostWon){
            mostWon = currentCash;
            roundMostWon = loopCounter;
        }
    }
    return [startingBid,loopCounter,mostWon,roundMostWon];
}

function validateBet() {
    clearErrors();
    var bet = document.forms["betForm"]["bet"].value;
    if (bet == "" || isNaN(bet) || bet <= 0) {
        alert("Bet must be filled in with a positive number.");
        document.forms["betForm"]["bet"].parentElement.parentElement.parentElement.parentElement.className = "form-group has-error";
        document.forms["betForm"]["bet"].focus();
        return false;
    }
    result = bettingResults(Number(bet));

    document.getElementById("results").style.display = "";
    document.getElementById("submitButton").innerText = "Play Again";
    document.forms["betForm"]["bet"].value = 0;
    document.forms["betForm"]["bet"].focus();
    document.getElementById("startingBet").innerText = result[0];
    document.getElementById("addResult").innerText = result[1];
    document.getElementById("subtractResult").innerText = result[2];
    document.getElementById("multiplyResult").innerText = result[3];
    
    return false;
}