
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
  var $feedback = $('#feedback');
  var currentIndex = 0;
  var user1Score = 0;
  var user2Score = 0;
  var clickCounter = 0;
  var feedBack = "";
  var responseTime = 500;
  var easyBtn = document.getElementById("easy");
  var medBtn = document.getElementById("medium");
  var hardBtn = document.getElementById("hard");
  var resetBtn = document.getElementById("reset");


  easyBtn.addEventListener("click", setEasy);
  medBtn.addEventListener("click", setMed);
  hardBtn.addEventListener("click", setHard);
  resetBtn.addEventListener("click", resetGame);

  function timer (b) {
    return b;
  }

  function setEasy () {
    var responseTime = timer(5000);
    console.log("responseTime " + responseTime);
    playGame();
   }

  function setMed () {
     var responseTime = timer(3000);
     console.log("responseTime " + responseTime);
     playGame();
    }

  function setHard () {
      var responseTime = timer(1000);
      console.log("responseTime " + responseTime);
      playGame();
     }

  function resetGame () {
    playGame ();
  }

  function playGame () {

  $score1.text(user1Score);
  $score2.text(user1Score);


  shuffle($cpuSquares);

  $cpuSquares.each(function(i, square) {
    var parent = $("#cpuSquares");
    setTimeout(function() {
      currentIndex = i;
      audio.src = "sounds/" + $(square).data('filename') + ".wav";
      console.log(audio.src);
      audio.play();
      $(square).fadeTo(5000, 0);
    }, i * 5000);
  });

  $userSquares.one('click', function() {


      clickCounter++;
      console.log('clickCounter ' + clickCounter);
    var parent = $("#userSquares");
    var filename = $(this).data('filename') + ".wav";
    var fileBeingPlayed = audio.src.split('/').slice(-1)[0];
    if(filename === fileBeingPlayed) {
      $cpuSquares.eq(currentIndex).stop(true, false);
      if (clickCounter%2 === 0) {


        user1Score++;
        console.log(user1Score);
        $score1.text(user1Score);
        $(this).css({background: "red"});}
      else {
        user1Score++;
        console.log(user2Score);
        $score2.text(user2Score);
        $(this).css({background: "green"});
      }
    }
    else {
      $(this).css({ opacity: 0 });
    }
  });
}
});
