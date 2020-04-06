var noOfColors = 6;
var dificultyLevelButton = document.getElementsByClassName("difficulty");
var colors = getRandColor(noOfColors);
var squares = document.querySelectorAll(".square");
var h1 = document.getElementsByTagName("h1");
var message = document.getElementById("message");
var pickedColor = colors[Math.floor(Math.random() * noOfColors)];
var colorDisplay = document.getElementById("pickedColor");
var newColor = document.getElementById("newcolor");
colorDisplay.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
init();

function init() {
  for (var i = 0; i < noOfColors; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        message.textContent = "Correct";
        h1[0].style.backgroundColor = pickedColor;
        newColor.textContent = "Play Again?";
        for (var i = 0; i < noOfColors; i++) {
          squares[i].style.backgroundColor = pickedColor;
        }
      } else {
        message.textContent = "Try Again";
        this.style.backgroundColor = "#232323";
      }
    });
  }

  for (var i = 0; i < dificultyLevelButton.length; i++) {
    dificultyLevelButton[i].addEventListener("click", function() {
      dificultyLevelButton[0].classList.remove("selected");
      dificultyLevelButton[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent == "Easy") noOfColors = 3;
      else noOfColors = 6;
      colors = getRandColor(noOfColors);
      reset();
      if (this.textContent == "Easy") {
        for (var i = noOfColors; i < squares.length; i++) {
          squares[i].style.display = "none";
        }
      } else {
        for (var i = 0; i < squares.length; i++) {
          squares[i].style.display = "block";
        }
      }
    });
  }

  newColor.addEventListener("click", function() {
    // return location.reload();
    colors = getRandColor(noOfColors);
    reset();
  });
}

function reset() {
  h1[0].style.backgroundColor = "rgb(100, 100, 250)";
  pickedColor = colors[Math.floor(Math.random() * noOfColors)];
  colorDisplay.textContent = pickedColor;
  message.textContent = null;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  this.textContent = "New Color";
}

function randColor() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function getRandColor(size) {
  var arr = [];
  for (var i = 0; i < size; i++) {
    arr.push(randColor());
  }
  return arr;
}
