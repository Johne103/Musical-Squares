//WDI-idn-23 integer project 1. created by John Evans release 1.0 12 October 2016.
//First project to create a game in order to develop an improved understanding of the approach required to create and deploy for general use a viable working web based game.

//Musical Squares is a 1 or 2 player game that tests the visual and auditory response times of users.

//There is potential for application within the medical arena to measure an individuals capacity to responde to visual and auditory stimuation and abliity to concentrate over a short time period.

//A random grid of images and sounds are presented to the players with the aim of capturing a square that is the process of being removed from the grid.

//The game has 3 levels of easy, medium and hard with corresponding reductions in reaction times at 5 seconds, 3 seconds and 1 second.

//The player with the most captured images of the 8 possible turns each; wins. As a 1 player game the user would play against the board with the aim of capturing as many squares as possible.

//Instructions for playing the game: Click on either the EASY, MEDIUM or HARD buttons to start the game. Click RESET to restart.

//Take turns to click on the image on the right hand grid before the corresponding image and sound. disapears on the left hand grid. Score points when you correctly click the correct image on the right before the image on the left disapears completely.

//If you click on the wrong image it will be removed from the grid and you will lose your turn.

//Known bugs: Computer may at times freeze part way through the game.
//On reset the computer may record and additional click when only one click was intended. Issue resolved with use of listener off function $userSquares.off().on('click', function() {


function shuffle(a) {                                         //Randomise the image and the sounds for the cpu grid.
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

$(function() {                                                        //Initialise the variables
  const $cpuSquares = $('#cpuSquares div');
  const $userSquares = $('#userSquares div');
  const audio = $('#soundToPlay')[0];
  const $score1 = $('#score1');
  const $score2 = $('#score2');
  const $result = $('#result');
  const $playerTurn = $('#playerTurn');
  let currentIndex = 0;
  let user1Score = 0;
  let user2Score = 0;
  let clickCounter = 0;
  let fadeCounter = 0;
  // const whosTurn = '';
  const $easyBtn = $('#easy');
  const $medBtn = $('#medium');
  const $hardBtn = $('#hard');
  const $resetBtn = $('#reset');
  let responseTime = 5000;
  let timers;

                                                                      //Set the listener for clicking
                                                                      //the control buttons.
  $easyBtn.on('click', setEasy);
  $medBtn.on('click', setMed);
  $hardBtn.on('click', setHard);
  $resetBtn.on('click', resetGame);

  $playerTurn.text('LET\'S PLAY');
                                                                      //corresponding button.
                                                                      //5 secs starting the game using the
                                                                      //Set the response times to 1, 3 or

  function setEasy () {
    responseTime = 5000;
    $(this).addClass('active');
    playGame();
  }
  function setMed () {
    var responseTime = 3000;
    $(this).addClass('active');
    playGame();
  }
  function setHard () {
    responseTime = 1000;
    $(this).addClass('active');
    playGame();
  }

  function getWinner() {                                         //Get player scores and diplay winners.
    if (user1Score > user2Score) {
      $result.text('Player 1 Wins');
      console.log('player1 win');
    } else if (user1Score < user2Score)  {
      $result.text('Player 2 Wins');
      console.log('Player2 win');
    } else {
      $result.text('It\'s a Draw');
      console.log('draw');
    }
  }
                                                                   //Reinitialise variables and settings
  function resetGame () {
    console.log('reset pressed');

    $playerTurn.text('LET\'S PLAY AGAIN');

    clickCounter = 0;
    fadeCounter = 0;

    user1Score = 0;
    user2Score = 0;

    $score1.text(user1Score);
    $score2.text(user2Score);

    $('button').removeClass('active');

    timers.forEach(function(timerId) {                            //Function to reset left grid array.
      clearTimeout(timerId);
    });

    $cpuSquares
      .stop(true, false)                                          //Stop timers on grid.
      .css({ opacity: 1 });                                       //Restore opacity to show image.

    $userSquares
      .removeAttr('style')                                        //Remove background color red or green.
      .css({ opacity: 1});                                        //Restore opacity to show image.

    $result.text('');
  }

  function playGame() {                                           //Start the game

    $score1.text(user1Score);                                     //Display initial player scores
    $score2.text(user1Score);


    $playerTurn.text('Player 1 to Start');                        //Clear text area showing player turn

    shuffle($cpuSquares);                                         //Shuffle the left hand grid

    timers = $cpuSquares.toArray().map(function(square, i) {      //Create a holding array for shuffled
      var parent = $('#cpuSquares');                              //left grid to map correct sounds to
      return setTimeout(function() {                              //to rerranged index elements, and
        currentIndex = i;                                         //manage timings for fading images.
        audio.src = 'sounds/' + $(square).data('filename') + '.wav';
        console.log(audio.src);
        audio.play();                                             //Play ramdomly selected square with audio.
        fadeCounter++;
        if(fadeCounter === $cpuSquares.length) getWinner();
        console.log('fade ' + fadeCounter + $cpuSquares.length);
        $(square).fadeTo(responseTime, 0);                        //Fade randomly selected square with image.
      }, i * responseTime);
    });


    $userSquares.off().on('click', function() {                   //Limit number of clicks to one on
                                                                  //right hand grid for each player turn.
      clickCounter++;                                             //Count the total number of click for
                                                                  //current game session.

      console.log('clickCounter ' + clickCounter);
      var parent = $('#userSquares');                             //Identify square clicked on right grid,
      var filename = $(this).data('filename') + '.wav';           //and build file name for sound played.
      var fileBeingPlayed = audio.src.split('/').slice(-1)[0];
      if(filename === fileBeingPlayed) {                          //Compare sound on right & left grid
        $cpuSquares.eq(currentIndex).stop(true, false);           //If sounds is matched stop fade out
        if (clickCounter%2 !== 0) {                               //Check if player 1 turn.
          user1Score++;                                           //Increment player 1 score.
          console.log('user1 ' + user1Score);
          $score1.text(user1Score);                               //and display.
          $(this).css({background: 'red'});
          $playerTurn.toggleClass('green');                       //Show player 2 as green -default red.
          $playerTurn.text('Player 2 to Play');
        } else {
          user2Score++;                                           //Increment player 2 score.
          console.log('user2 ' + user2Score);
          $score2.text(user2Score);
          $(this).css({ background: 'green' });
          $playerTurn.text('Player 1 to Play');
        }
      } else {
        $(this).css({ opacity: 0 });                              //If no hit then hide right grid tile.
        if (clickCounter%2 === 0) {                               //Check turn if player 1 or player 2.
          $playerTurn.toggleClass('green');                       //Show player 2 as green -default red.
          $playerTurn.text('Player 2 to Play');
        } else {
          $playerTurn.text('Player 1 to Play');
        }
      }
    });
  }
});
