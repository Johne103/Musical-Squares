$(function() {
  console.log('js loaded');
  //$('div').one('click', function() {
  //document.addEventListener('DOMContentLoaded', function () {



  var cpuSquares = [
    {
      audioSrc: 'sounds/after.wav',
      audioId: 'userSquareAuio0',
      //imageSrc: 'images/slah0',
      imageId: 'cpuSquareImage0'
    },
    {
      audioSrc: 'sounds/better.wav',
      audioId: 'userSquareAuio1',
      //imageSrc: 'images/slah1',
      imageId: 'cpuSquareImage1'
    },
    {
      audioSrc: 'sounds/do_it.wav',
      audioId: 'userSquareAuio2',
      //imageSrc: 'images/slah2',
      imageId: 'cpuSquareImage2'
    },
    {
      audioSrc: 'sounds/ever.wav',
      audioId: 'userSquareAuio3',
      //imageSrc: 'images/slah3',
      imageId: 'cpuSquareImage3'
    },
    {
      audioSrc: 'sounds/faster.wav',
      audioId: 'userSquareAuio4',
      //imageSrc: 'images/slah4',
      imageId: 'cpuSquareImage4'
    },
    {
      audioSrc: 'sounds/harder.wav',
      audioId: 'userSquareAuio5',
      //imageSrc: 'images/slah5',
      imageId: 'cpuSquareImage5'
    },
    {
      audioSrc: 'sounds/hour.wav',
      audioId: 'userSquareAuio6',
      //imageSrc: 'images/slah6',
      imageId: 'cpuSquareImage6'
    },
    {
      audioSrc: 'sounds/make_it.wav',
      audioId: 'userSquareAuio7',
      //imageSrc: 'images/slah7',
      imageId: 'cpuSquareImage7'
    },
    {
      audioSrc: 'sounds/makes_us.wav',
      audioId: 'userSquareAuio8',
      //imageSrc: 'images/slah8',
      imageId: 'cpuSquareImage8'
    },
    {
      audioSrc: 'sounds/do_it.wav',
      audioId: 'userSquareAuio9',
      //imageSrc: 'images/slah9',
      imageId: 'cpuSquareImage9'
    },
    {
      audioSrc: 'sounds/ever.wav',
      audioId: 'userSquareAuio10',
      //imageSrc: 'images/slah10',
      imageId: 'cpuSquareImage10'
    },
    {
      audioSrc: 'sounds/faster.wav',
      audioId: 'userSquareAuio11',
      //imageSrc: 'images/slah11',
      imageId: 'cpuSquareImage11'
    },
    {
      audioSrc: 'sounds/harder.wav',
      audioId: 'userSquareAuio12',
      //imageSrc: 'images/slah12',
      imageId: 'cpuSquareImage12'
    },
    {
      audioSrc: 'sounds/hour.wav',
      audioId: 'userSquareAuio13',
      //imageSrc: 'images/slah13',
      imageId: 'cpuSquareImage13'
    },
    {
      audioSrc: 'sounds/make_it.wav',
      audioId: 'userSquareAuio14',
      //imageSrc: 'images/slah14',
      imageId: 'cpuSquareImage14'
    },
    {
      audioSrc: 'sounds/makes_us.wav',
      audioId: 'userSquareAuio15',
      //imageSrc: 'images/slah15',
      imageId: 'cpuSquareImage15'
    }
  ];

  console.log(cpuSquares);

  var userSquares = [
    {
      audioSrc: 'sounds/after.wav',
      audioId: 'userSquareAuio0',
    },
    {
      audioSrc: 'sounds/better.wav',
      audioId: 'userSquareAuio1',
    },
    {
      audioSrc: 'sounds/do_it.wav',
      audioId: 'userSquareAuio2',
    },
    {
      audioSrc: 'sounds/ever.wav',
      audioId: 'userSquareAuio3',
    },
    {
      audioSrc: 'sounds/faster.wav',
      audioId: 'userSquareAuio4',
    },
    {
      audioSrc: 'sounds/harder.wav',
      audioId: 'userSquareAuio5',
    },
    {
      audioSrc: 'sounds/hour.wav',
      audioId: 'userSquareAuio6',
    },
    {
      audioSrc: 'sounds/make_it.wav',
      audioId: 'userSquareAuio7',
    },
    {
      audioSrc: 'sounds/makes_us.wav',
      audioId: 'userSquareAuio8',
    },
    {
      audioSrc: 'sounds/do_it.wav',
      audioId: 'userSquareAuio9',
    },
    {
      audioSrc: 'sounds/ever.wav',
      audioId: 'userSquareAuio10',
    },
    {
      audioSrc: 'sounds/faster.wav',
      audioId: 'userSquareAuio11',
    },
    {
      audioSrc: 'sounds/harder.wav',
      audioId: 'userSquareAuio12',
    },
    {
      audioSrc: 'sounds/hour.wav',
      audioId: 'userSquareAuio13',
    },
    {
      audioSrc: 'sounds/make_it.wav',
      audioId: 'userSquareAuio14',
    },
    {
      audioSrc: 'sounds/makes_us.wav',
      audioId: 'userSquareAuio15',
    }
  ];

  console.log(userSquares);

  var playBtn = document.getElementById("play");
  var selectLevel1 = document.getElementById("level1");
  var selectLevel2 = document.getElementById("level2");
  var selectLevel3 = document.getElementById("level3");
  var resetBtn = document.getElementById("reset");
  var quitBtn = document.getElementById("quit");

  var userLevel = "";

  var clickCounter = 0;





  // document.addEventListener("click", setLevel());
  //
  // function setLevel(n) {
  //   var setLevel = this.id;
  // }

  playBtn.addEventListener("click", playGame);
  selectLevel1.addEventListener("click", setUserLevel);
  selectLevel2.addEventListener("click", setUserLevel);
  selectLevel3.addEventListener("click", setUserLevel);
  resetBtn.addEventListener("click", resetGame);
  quitBtn.addEventListener("click", quitGame);

  function playGame () {
    var playStart = this.id;
  }

  function setUserLevel() {
    var userLevel = this.id;
    console.log("user " + userLevel);
  }

  function resetGame () {
    clickCounter = 0;
    for(var i=0;i<squares.length; i++) {
      squares[i].textContent = "";
    }
  }
  function quitGame () {
    var playQuit = this.id;
  }

  function getLevel(a) {
    if (a == "level1") {
         return 12;
    }
    else if (a == "level2") {
          return 7;
    }
    else {
         return 0;
    }
  }

  // var gameLevel = getLevel(userLevel);
  // console.log("level " + gameLevel);


  function initialiseCpuSquares() {
    var noOfCpuSquares = (cpuSquares.length - 12);
    var cpuSquaresContainerObj = document.getElementById('cpuSquares');
    var cpuSquareObj;
    var imageObj;

    for (var i = 0; i<noOfCpuSquares; i++) {
      cpuSquareObj = document.createElement('div');
      imageObj = document.createElement('img');

      console.log(cpuSquareObj);

      imageObj.setAttribute('src', cpuSquares[i].imageSrc);
      imageObj.setAttribute('id', cpuSquares[i].imageId);
      imageObj.setAttribute('class', 'cpu-square-image');
      cpuSquareObj.setAttribute('class', 'cpu-square');
      cpuSquareObj.appendChild(imageObj);
      cpuSquaresContainerObj.appendChild(cpuSquareObj);
    }
  }

  function initialiseUserSquares() {
    var noOfUserSquares = (userSquares.length - 12);
    var userSquaresContainerObj = document.getElementById('userSquares');
    var userSquareObj;
    var audioObj;

    for (var i = 0; i<noOfUserSquares; i++) {
      userSquareObj = document.createElement('div');
      audioObj = document.createElement('audio');

      console.log(userSquareObj);

      audioObj.setAttribute('src', userSquares[i].audioSrc);
      audioObj.setAttribute('id', userSquares[i].audioId);
      audioObj.setAttribute('class', 'user-square-audio');
      userSquareObj.setAttribute('class', 'user-square');
      userSquareObj.appendChild(audioObj);
      userSquaresContainerObj.appendChild(userSquareObj);
    }
  }

// function hideCpuSquare (){
//   $(function(){
//     cpuSquareObj[2]
//       $(this).hide();
//   });
// });
// }

  var gameLevel = getLevel(userLevel);
  console.log("level " + gameLevel);

  initialiseCpuSquares();

  initialiseUserSquares();



  var playSound = document.getElementById("soundToPlay");

    // var playSound =  document.addEventListener("click", function(){
    //     var noiseMaker = document.getElementById("noise-maker");
    //     noiseMaker.src = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Eastern_Whipbird.ogg";
    //     noiseMaker.muted = true;
    //     noiseMaker.play();
    // });

    // noiseMaker.controls = true;

    var playButton = document.getElementById("play");
    //
    playButton.addEventListener('click', function(){
        playSound.src = "/sounds/after.wav";
        playSound.play();
      });

      // $(function(){
      //   $('ol').on("click", "button", function(){
      //     var $level = (this.id);
      //   });
      // });





// });
// });

});
