$(function() {
  console.log('js loaded');
  $('div').one('click', function() {
//document.addEventListener('DOMContentLoaded', function () {



  var cpuSquares = [
    {
      audioSrc: 'sounds/after.wav',
      //imageSrc: 'images/slah0',
      imageId: 'cpuSquareImage0'
    },
    {
      audioSrc: 'sounds/better.wav',
      //imageSrc: 'images/slah1',
      imageId: 'cpuSquareImage1'
    },
    {
      audioSrc: 'sounds/do_it.wav',
      //imageSrc: 'images/slah2',
      imageId: 'cpuSquareImage2'
    },
    {
      audioSrc: 'sounds/ever.wav',
      //imageSrc: 'images/slah3',
      imageId: 'cpuSquareImage3'
    },
    {
      audioSrc: 'sounds/faster.wav',
      //imageSrc: 'images/slah4',
      imageId: 'cpuSquareImage4'
    },
    {
      audioSrc: 'sounds/harder.wav',
      //imageSrc: 'images/slah5',
      imageId: 'cpuSquareImage5'
    },
    {
      audioSrc: 'sounds/hour.wav',
      //imageSrc: 'images/slah6',
      imageId: 'cpuSquareImage6'
    },
    {
      audioSrc: 'sounds/make_it.wav',
      //imageSrc: 'images/slah7',
      imageId: 'cpuSquareImage7'
    },
    {
      audioSrc: 'sounds/makes_us.wav',
      //imageSrc: 'images/slah8',
      imageId: 'cpuSquareImage8'
    }
  ];

console.log(cpuSquares);

  var userSquares = [
    {
      audioSrc: 'sounds/after.wav',
    },
    {
      audioSrc: 'sounds/better.wav',
    },
    {
      audioSrc: 'sounds/do_it.wav',
    },
    {
      audioSrc: 'sounds/ever.wav',
    },
    {
      audioSrc: 'sounds/faster.wav',
    },
    {
      audioSrc: 'sounds/harder.wav',
    },
    {
      audioSrc: 'sounds/hour.wav',
    },
    {
      audioSrc: 'sounds/make_it.wav',
    },
    {
      audioSrc: 'sounds/makes_us.wav',
    }
  ];

  console.log(userSquares);

  var n = 5;
  var m = 5;

  var clickCounter = 0;

  function resetButton () {
    clickCounter = 0;
    for(var i=0;i<squares.length; i++) {
      squares[i].textContent = "";
    }
  }

  function initialiseCpuSquares() {
    var noOfCpuSquares = (cpuSquares.length - n);
    var squaresContainerObj = document.getElementById('cpuSquares');
    var squareObj;
    var imageObj;

    for (var i = 0; i<noOfCpuSquares; i++) {
      squareObj = document.createElement('div');
      imageObj = document.createElement('img');

      console.log(squareObj);

      imageObj.setAttribute('src', cpuSquares[i].imageSrc);
      imageObj.setAttribute('id', cpuSquares[i].imageId);
      imageObj.setAttribute('class', 'cpu-square-image');
      squareObj.setAttribute('class', 'cpu-square');
      squareObj.appendChild(imageObj);
      squaresContainerObj.appendChild(squareObj);
    }
  }

  function initialiseUserSquares() {
    var noOfUserSquares = (userSquares.length - m);
    var squaresContainerObj = document.getElementById('userSquares');
    var squareObj;
    var imageObj;

    for (var i = 0; i<noOfUserSquares; i++) {
      squareObj = document.createElement('div');
      imageObj = document.createElement('img');

      console.log(squareObj);

      imageObj.setAttribute('src', userSquares[i].imageSrc);
      imageObj.setAttribute('id', userSquares[i].imageId);
      imageObj.setAttribute('class', 'user-square-image');
      squareObj.setAttribute('class', 'user-square');
      squareObj.appendChild(imageObj);
      squaresContainerObj.appendChild(squareObj);
    }
  }

  initialiseCpuSquares();

  initialiseUserSquares();

  $(function() {
      $('li').on('click', function() {
        var $lis = $(this).parent().children();
        $.each($lsi, function(i, li) {
          $(li).fadeOut(300 * i+1);
        });
      });
  });
});
});
