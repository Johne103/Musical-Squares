//WDI-idn-23 integer project 1. created by John Evans release 1.0 12 October 2016.
//First project to create a game in order to develop an improved understanding of the approach required to create and deploy for general use a viable working web based game.

//Musical Squares is a 2 player game that tests the visual and auditory response times of users. A random grid of images and sounds are presented to the players with the aim of capturing a square that is the process of being removed from the grid.

//The game has 3 levels of easy, medium and hard with corresponding reductions in reaction times at 5 seconds, 3 seconds and 1 second.

//The player with the most captured images of the 8 possible turns each; wins.

//Instructions for playing the game: Click on either the EASY, MEDIUM or HARD buttons to start the game. Click RESET to restart.

//Take turns to click on the image on the right hand grid before the corresponding image and sound. disapears on the left hand grid. Score points when you correctly click the correct image on the right before the image on the left disapears completely.

//If you click on the wrong image it will be removed from the grid and you will lose your turn.


function shuffle(a) {                             //Randomise the image and the sounds for the left grid.
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

$(function() {                                    //Initialise the variables
  var $cpuSquares = $('#cpuSquares div');
  var $userSquares = $('#userSquares div');
  var audio = $('#soundToPlay')[0];
  var $score1 = $('#score1');
  var $score2 = $('#score2');
  var $result = $('#result');
  var $playerTurn = $('#playerTurn');
  var currentIndex = 0;
  var user1Score = 0;
  var user2Score = 0;
  var clickCounter = 0;
  var fadeCounter = 0;
  var whosTurn = "";
  var $easyBtn = $("#easy");
  var $medBtn = $("#medium");
  var $hardBtn = $("#hard");
  var $resetBtn = $("#reset");
  var responseTime = 5000;
  var timers;

                                                  //Set the listener for clicking the control buttons.
  $easyBtn.on("click", setEasy);
  $medBtn.on("click", setMed);
  $hardBtn.on("click", setHard);
  $resetBtn.on("click", resetGame);
                                                  //Set the response times to 1, 3 or 5 secs before starting the game using the corresponding button.
  function setEasy () {
    responseTime = 5000;
    console.log("responseTime " + responseTime);
    $(this).addClass("active");
    playGame();
  }

  function setMed () {
     var responseTime = 3000;
     console.log("responseTime " + responseTime);
     $(this).addClass("active");
     playGame();
    }

  function setHard () {
    responseTime = 1000;
    console.log("responseTime " + responseTime);
    $(this).addClass("active");
    playGame();
  }
                                                                //Reinitialise variables and settings
  function resetGame () {
    console.log('reset pressed');

    clickCounter = 0;
    fadeCounter = 0;

    user1Score = 0;
    user2Score = 0;

    $score1.text(user1Score);
    $score2.text(user2Score);

    whosTurn = "";

    $("button").removeClass('active');

    $playerTurn.text(whosTurn);

    timers.forEach(function(timerId) {
      clearTimeout(timerId);
    });

    $cpuSquares
      .stop(true, false)
      .css({ opacity: 1 });

    $userSquares
      .removeAttr("style")
      .css({ opacity: 1});

    $result.text("");
  }

  function playGame() {                                           //Start the game

    $score1.text(user1Score);                                     //Display initial player scores
    $score2.text(user1Score);

    $playerTurn.text(whosTurn);                                   //Clear text area showing player turn

    shuffle($cpuSquares);                                         //Shuffle the left hand grid

    timers = $cpuSquares.toArray().map(function(square, i) {      //Create a holding array for shuffled
      var parent = $("#cpuSquares");                              //left grid to map correct sounds to
      return setTimeout(function() {                              //to rerranged index elements, and
        currentIndex = i;                                         //manage timings for fading images.
        audio.src = "sounds/" + $(square).data('filename') + ".wav";
        console.log(audio.src);
        audio.play();
        $(square).fadeTo(responseTime, 0);                        //Play audio and fade image of selected
      }, i * responseTime);                                       //image.
    });

    $userSquares.one('click', function() {                        //Limit number of clicks to one on
                                                                  //right hand grid for each player turn.
      clickCounter++;                                             //Count the total number of click for
                                                                  //current game session.
      $playerTurn.toggleClass("green");                           //Show player 2 as green -default red.
      console.log('clickCounter ' + clickCounter);
      var parent = $("#userSquares");                             //Identify sound played on right grid,
      var filename = $(this).data('filename') + ".wav";           //and build file name for sound played.
      var fileBeingPlayed = audio.src.split('/').slice(-1)[0];
      if(filename === fileBeingPlayed) {                          //Compare sound on right & left grid
        $cpuSquares.eq(currentIndex).stop(true, false);           //If sounds is matched stop fade out
        if (clickCounter%2 === 0) {

          $playerTurn.text('Player 1 to Play');

          user1Score++;
          console.log(user1Score);
          $score1.text(user1Score);
          $(this).css({background: "red"});
        } else {
          $playerTurn.text('Player 2 to Play');

          user2Score++;
          console.log(user2Score);
          $score2.text(user2Score);
          $(this).css({ background: "green" });
        }
      } else {
        $(this).css({ opacity: 0 });
        if (clickCounter%2 === 0) {
          $playerTurn.text('Player 1 to Play');
        } else {
          $playerTurn.text('Player 2 to Play');
        }
      }

      if(clickCounter === $userSquares.length) getWinner();

    });

    function getWinner() {
      if (user1Score > user2Score) {
        $result.text("Player 1 Wins");
        console.log("player1");
      } else if (user1Score < user2Score)  {
        $result.text("Player 2 Wins");
        console.log("Player2");
      } else {
        $result.text("It's a Draw");
        console.log("draw");
      }
    }

  }

//}
});
