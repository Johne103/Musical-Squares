$(function() {
  console.log('js loaded');
  //$('div').one('click', function() {
  //document.addEventListener('DOMContentLoaded', function () {



  var cpuSquares = [
    {
      audioSrc: 'sounds/after.wav',
      audioId: 'userSquareAudio0',
      imageSrc: 'images/record_player.jpg',
      imageId: 'cpuSquareImage0'
    },
    {
      audioSrc: 'sounds/better.wav',
      audioId: 'userSquareAudio1',
      imageSrc: 'images/accordion.jpg',
      imageId: 'cpuSquareImage1'
    },
    {
      audioSrc: 'sounds/do_it.wav',
      audioId: 'userSquareAudio2',
      imageSrc: 'images/audio_waveform.jpg',
      imageId: 'cpuSquareImage2'
    },
    {
      audioSrc: 'sounds/ever.wav',
      audioId: 'userSquareAudio3',
      imageSrc: 'images/laptop_music_player.jpg',
      imageId: 'cpuSquareImage3'
    },
    {
      audioSrc: 'sounds/faster.wav',
      audioId: 'userSquareAudio4',
      imageSrc: 'images/music_cd.jpg',
      imageId: 'cpuSquareImage4'
    },
    {
      audioSrc: 'sounds/harder.wav',
      audioId: 'userSquareAudio5',
      imageSrc: 'images/music_keys.jpg',
      imageId: 'cpuSquareImage5'
    },
    {
      audioSrc: 'sounds/hour.wav',
      audioId: 'userSquareAudio6',
      imageSrc: 'images/music_player_buttons.jpg',
      imageId: 'cpuSquareImage6'
    },
    {
      audioSrc: 'sounds/make_it.wav',
      audioId: 'userSquareAudio7',
      imageSrc: 'images/music_roll.jpg',
      imageId: 'cpuSquareImage7'
    },
    {
      audioSrc: 'sounds/makes_us.wav',
      audioId: 'userSquareAudio8',
      imageSrc: 'images/portable_music.jpg',
      imageId: 'cpuSquareImage8'
    },
    {
      audioSrc: 'sounds/do_it.wav',
      audioId: 'userSquareAudio9',
      imageSrc: 'images/slah9',
      imageId: 'cpuSquareImage9'
    },
    {
      audioSrc: 'sounds/ever.wav',
      audioId: 'userSquareAudio10',
      imageSrc: 'images/slah10',
      imageId: 'cpuSquareImage10'
    },
    {
      audioSrc: 'sounds/faster.wav',
      audioId: 'userSquareAudio11',
      imageSrc: 'images/slah11',
      imageId: 'cpuSquareImage11'
    },
    {
      audioSrc: 'sounds/harder.wav',
      audioId: 'userSquareAudio12',
      //imageSrc: 'images/slah12',
      imageId: 'cpuSquareImage12'
    },
    {
      audioSrc: 'sounds/hour.wav',
      audioId: 'userSquareAudio13',
      //imageSrc: 'images/slah13',
      imageId: 'cpuSquareImage13'
    },
    {
      audioSrc: 'sounds/make_it.wav',
      audioId: 'userSquareAudio14',
      //imageSrc: 'images/slah14',
      imageId: 'cpuSquareImage14'
    },
    {
      audioSrc: 'sounds/makes_us.wav',
      audioId: 'userSquareAudio15',
      //imageSrc: 'images/slah15',
      imageId: 'cpuSquareImage15'
    }
  ];

  console.log(cpuSquares);

  var userSquares = [
    {
      audioSrc: 'sounds/after.wav',
      audioId: 'userSquareAudio0',
    },
    {
      audioSrc: 'sounds/better.wav',
      audioId: 'userSquareAudio1',
    },
    {
      audioSrc: 'sounds/do_it.wav',
      audioId: 'userSquareAudio2',
    },
    {
      audioSrc: 'sounds/ever.wav',
      audioId: 'userSquareAudio3',
    },
    {
      audioSrc: 'sounds/faster.wav',
      audioId: 'userSquareAudio4',
    },
    {
      audioSrc: 'sounds/harder.wav',
      audioId: 'userSquareAudio5',
    },
    {
      audioSrc: 'sounds/hour.wav',
      audioId: 'userSquareAudio6',
    },
    {
      audioSrc: 'sounds/make_it.wav',
      audioId: 'userSquareAudio7',
    },
    {
      audioSrc: 'sounds/makes_us.wav',
      audioId: 'userSquareAudio8',
    },
    {
      audioSrc: 'sounds/do_it.wav',
      audioId: 'userSquareAudio9',
    },
    {
      audioSrc: 'sounds/ever.wav',
      audioId: 'userSquareAudio10',
    },
    {
      audioSrc: 'sounds/faster.wav',
      audioId: 'userSquareAudio11',
    },
    {
      audioSrc: 'sounds/harder.wav',
      audioId: 'userSquareAudio12',
    },
    {
      audioSrc: 'sounds/hour.wav',
      audioId: 'userSquareAudio13',
    },
    {
      audioSrc: 'sounds/make_it.wav',
      audioId: 'userSquareAudio14',
    },
    {
      audioSrc: 'sounds/makes_us.wav',
      audioId: 'userSquareAudio15',
    }
  ];

  console.log(userSquares);

  var playBtn = document.getElementById("play");
  var selectLevel1 = document.getElementById("level1");
  var selectLevel2 = document.getElementById("level2");
  var selectLevel3 = document.getElementById("level3");
  var resetBtn = document.getElementById("reset");
  var quitBtn = document.getElementById("quit");
  var playSound = document.getElementById("soundToPlay");

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

  document.addEventListener('DOMContentLoaded', function() {
    var playSound = document.getElementById("soundToPlay");

    for (var i = 0; i < userSquares.length; i++) {
      userSquares[i].addEventListener('click', function() {
        console.log('switch ' + this.id);
        switch (this.id) {
        case 'userSquareAudio0':
          playSound.src = audioSrc;
          break;
        case 'userSquareAudio1':
          playSound.src = audioSrc;
          break;
        case 'userSquareAudio2':
          playSound.src = audioSrc;
          break;
        }

        playSound.play();
      });
    }
  });


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
    var noOfCpuSquares = (cpuSquares.length - 7);
    var cpuSquaresContainerObj = document.getElementById('cpuSquares');
    var cpuSquareObj;
    var imageObj;
    var cpuAudioObj;

    for (var i = 0; i<noOfCpuSquares; i++) {
      cpuSquareObj = document.createElement('div');
      imageObj = document.createElement('img');
      cpuAudioObj = document.createElement('audio');


      console.log(cpuSquareObj);

      imageObj.setAttribute('src', cpuSquares[i].imageSrc);
      imageObj.setAttribute('id', cpuSquares[i].imageId);
      imageObj.setAttribute('class', 'cpu-square-image');
      cpuAudioObj.setAttribute('src', cpuSquares[i].audioSrc);
      cpuSquareObj.setAttribute('class', 'cpu-square');
      cpuSquareObj.appendChild(imageObj);
      cpuSquaresContainerObj.appendChild(cpuSquareObj);
    }
  }

  function initialiseUserSquares() {
    var noOfUserSquares = (userSquares.length - 7);
    var userSquaresContainerObj = document.getElementById('userSquares');

    var userSquareObj;
    var userAudioObj;
    var userButtons = document.querySelectorAll("#userSquares");

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

  // function initaliseEventListeners() {
  //   for (var i = 0; i < userSquares.length; i++) {
  //     userSquares[i].addEventListener("click", playSound);
  //   }
  // }





  var gameLevel = getLevel(userLevel);
  console.log("level " + gameLevel);




  initialiseCpuSquares();

  initialiseUserSquares();

  //initaliseEventListeners();




});
