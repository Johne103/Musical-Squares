
function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

$(function() {
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


  $easyBtn.on("click", setEasy);
  $medBtn.on("click", setMed);
  $hardBtn.on("click", setHard);
  $resetBtn.on("click", resetGame);

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

  function playGame() {

    $score1.text(user1Score);
    $score2.text(user1Score);

    $playerTurn.text(whosTurn);

    shuffle($cpuSquares);

    timers = $cpuSquares.toArray().map(function(square, i) {
      var parent = $("#cpuSquares");
      return setTimeout(function() {
        currentIndex = i;
        audio.src = "sounds/" + $(square).data('filename') + ".wav";
        console.log(audio.src);
        audio.play();
        $(square).fadeTo(responseTime, 0);
      }, i * responseTime);
    });

    $userSquares.one('click', function() {

      clickCounter++;
      $playerTurn.toggleClass("green");
      console.log('clickCounter ' + clickCounter);
      var parent = $("#userSquares");
      var filename = $(this).data('filename') + ".wav";
      var fileBeingPlayed = audio.src.split('/').slice(-1)[0];
      if(filename === fileBeingPlayed) {
        $cpuSquares.eq(currentIndex).stop(true, false);
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
