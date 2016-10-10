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
  var $score = $('#score');
  var $feedback = $('#feedback');
  var currentIndex = 0;
  var userScore = 0;
  var feedBack = "";

  $score.text(userScore);

  shuffle($cpuSquares);

  $cpuSquares.each(function(i, square) {
    var parent = $("#cpuSquares");
    setTimeout(function() {
      currentIndex = i;
      audio.src = "sounds/" + $(square).data('filename') + ".wav";
      console.log(audio.src);
      audio.play();
      $(square).fadeTo(2000, 0);
    }, i * 2000);
  });

  $userSquares.one('click', function() {
    var parent = $("#userSquares");
    var filename = $(this).data('filename') + ".wav";
    var fileBeingPlayed = audio.src.split('/').slice(-1)[0];
    if(filename === fileBeingPlayed) {
      $cpuSquares.eq(currentIndex).stop(true, false);
      userScore++;
      console.log(userScore);
      $score.text(userScore);
      $(this).css({background: "red"});
    }
    else {
      $(this).css({ opacity: 0 });
    }
  });
});
