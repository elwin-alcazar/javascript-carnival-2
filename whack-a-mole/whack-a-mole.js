  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

// The ability to store or get references to the cells in the HTML table.
// A function to randomly select which cell should show the mole.
// A way to show a mole in the chosen cell.

// stretch
// Add a counter to the page that counts how many times you have whacked the mole!

// Add a timer to the page that gives you 10 seconds to whack as many moles as possible, and then pops up your score as a Javascript alert.

// Add a high score field that stores your highest score and replaces it if a new, higher score is achieved. *Note: for now, this score will be reset when you refresh your browser. For it to last, you would need some form of database, which we cover later during bootcamp.

// Rewrite your random index function so it can't give you the same index twice in a row.

//Initiate variables here
var moleBoard = document.getElementsByClassName('cell');
var count = 0;
var timeleft = 0;
var topscore = 0;
displayMessage("moles whacked: " + 0, "counter")
displayMessage("top score: " + 0, "topscore")

//////////////////////////////////////////////////////////////////////////////  

function startGame() {
  playAudio('background')
  if (timeleft <=0){  
    document.getElementById("countdown").innerHTML = "Whack as many moles as you can in 10 seconds!"
    timeleft = 10;
    count = 0;
    //clearInterval(myVar);
    for (i=0; i<moleBoard.length; i++) {
      removeMole(moleBoard, i);
    }
    // var myVar = setInterval(function (){
    //   showMole(moleBoard)}, 500);
    showMole(moleBoard);
    countdownTimer();
    }
  }

function showMole (x) {
  if(timeleft > 0){
    var i = randomIntFromInterval(0, moleBoard.length-1);
    x[i].classList.add("mole");
    x[i].src = "mole.png";
    setTimeout(function(){removeMole(x, i)}, randomIntFromInterval(1000, 2000));
  }
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function removeMole(x, i) {
  if(timeleft > 0){
    x[i].classList.remove("mole");
    x[i].src = "";
  }
}

function whackMole(x, i) {
  if(timeleft > 0){
    playAudio('whack');
    removeMole(x, i);
    count++;
    displayMessage("moles whacked: " + count, "counter")
    topscore = Math.max(count, topscore);
    displayMessage("top score: " + topscore, "topscore")
    showMole(moleBoard)
  }
}

function displayMessage (msg, id) {
  document.getElementById(id).innerHTML = '<p>' + msg + '</p>'
}

function molesWhacked() {
  count++;
  return count;
}

function playAudio(id) {
  document.getElementById(id).play()
}

function countdownTimer() {
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    if (topscore === count) {
      displayMessage ("Finished. Congratulations! You've got the top score!", "countdown");
      playAudio('highscore')
    } 
    else { 
      displayMessage ("Finished. Better luck next time.", "countdown");
      playAudio('fail')
    }
    document.getElementById("startButton").style.visibility = "visible"
  } 
  else {
    displayMessage (timeleft + " seconds remaining", "countdown")
    document.getElementById("startButton").style.visibility = "hidden"
    showMole(moleBoard)
  
  }
  timeleft -= 1;
}, 1000);
}