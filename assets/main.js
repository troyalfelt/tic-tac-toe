let grid = document.querySelector(".grid");
let gridNodes = grid.childNodes;
let gridBox = document.querySelectorAll(".gridBox");
let displayParagraph = document.querySelector(".display");


for (let index of gridBox) {
  paragraph = document.createElement("p");
  index.appendChild(paragraph);
}

let topLeft = document.querySelector("#topLeft");
let topMiddle = document.querySelector("#topMiddle");
let topRight = document.querySelector("#topRight");
let middleLeft = document.querySelector("#middleLeft");
let middleMiddle = document.querySelector("#middleMiddle");
let middleRight = document.querySelector("#middleRight");
let bottomLeft = document.querySelector("#bottomLeft");
let bottomMiddle = document.querySelector("#bottomMiddle");
let bottomRight = document.querySelector("#bottomRight");

let player = "";
let moves = 0;
let winner = "";

let win = false;

let random = Math.floor(Math.random() * 2);
if (random == 0) {
  player = "X";
} else {
  player = "O"
}

displayParagraph.textContent = ("Current player: " + player);

const draw = function() {
        grid.style.backgroundColor = "yellow";
        displayParagraph.textContent = "Draw!";
};

const checkWin = function () {
  if (topLeft.childNodes[0].textContent.length > 0) {
    if (
      topLeft.childNodes[0].textContent ==
        middleLeft.childNodes[0].textContent &&
      topLeft.childNodes[0].textContent == bottomLeft.childNodes[0].textContent
    ) {
      topLeft.style.backgroundColor = "green";
      middleLeft.style.backgroundColor = "green";
      bottomLeft.style.backgroundColor = "green";
      win = true;
      for (let index of gridNodes) {
        index.removeEventListener("click", clickBox);
      }
        //Sets the display text to say who the winner is
        displayParagraph.textContent = (winner + " is the winner!");

    } else if (
      topLeft.childNodes[0].textContent ==
        topMiddle.childNodes[0].textContent &&
      topLeft.childNodes[0].textContent == topRight.childNodes[0].textContent
    ) {
      topLeft.style.backgroundColor = "green";
      topMiddle.style.backgroundColor = "green";
      topRight.style.backgroundColor = "green";
      win = true;
      for (let index of gridNodes) {
        index.removeEventListener("click", clickBox);
      }
        //Sets the display text to say who the winner is
        displayParagraph.textContent = (winner + " is the winner!");

    } else if (
      topLeft.childNodes[0].textContent ==
        middleMiddle.childNodes[0].textContent &&
      topLeft.childNodes[0].textContent == bottomRight.childNodes[0].textContent
    ) {
      topLeft.style.backgroundColor = "green";
      middleMiddle.style.backgroundColor = "green";
      bottomRight.style.backgroundColor = "green";
      win = true;
      for (let index of gridNodes) {
        index.removeEventListener("click", clickBox);
      }
        //Sets the display text to say who the winner is
        displayParagraph.textContent = (winner + " is the winner!");

    }
  }
  if (middleMiddle.childNodes[0].textContent.length > 0) {
    if (
      middleMiddle.childNodes[0].textContent ==
        topMiddle.childNodes[0].textContent &&
      middleMiddle.childNodes[0].textContent ==
        bottomMiddle.childNodes[0].textContent
    ) {
      middleMiddle.style.backgroundColor = "green";
      topMiddle.style.backgroundColor = "green";
      bottomMiddle.style.backgroundColor = "green";
      win = true;
      for (let index of gridNodes) {
        index.removeEventListener("click", clickBox);
      }
        //Sets the display text to say who the winner is
        displayParagraph.textContent = (winner + " is the winner!");

    } else if (
      middleMiddle.childNodes[0].textContent ==
        middleLeft.childNodes[0].textContent &&
      middleMiddle.childNodes[0].textContent ==
        middleRight.childNodes[0].textContent
    ) {
      middleMiddle.style.backgroundColor = "green";
      middleLeft.style.backgroundColor = "green";
      middleRight.style.backgroundColor = "green";
      win = true;
      for (let index of gridNodes) {
        index.removeEventListener("click", clickBox);
      }
        //Sets the display text to say who the winner is
        displayParagraph.textContent = (winner + " is the winner!");

    } else if (
      middleMiddle.childNodes[0].textContent ==
        bottomLeft.childNodes[0].textContent &&
      middleMiddle.childNodes[0].textContent ==
        topRight.childNodes[0].textContent
    ) {
      middleMiddle.style.backgroundColor = "green";
      bottomLeft.style.backgroundColor = "green";
      topRight.style.backgroundColor = "green";
      win = true;
      for (let index of gridNodes) {
        index.removeEventListener("click", clickBox);
      }
        //Sets the display text to say who the winner is
        displayParagraph.textContent = (winner + " is the winner!");

    }
  }
  if (bottomRight.childNodes[0].textContent.length > 0) {
    if (
      bottomRight.childNodes[0].textContent ==
        bottomMiddle.childNodes[0].textContent &&
      bottomRight.childNodes[0].textContent ==
        bottomLeft.childNodes[0].textContent
    ) {
      bottomRight.style.backgroundColor = "green";
      bottomLeft.style.backgroundColor = "green";
      bottomMiddle.style.backgroundColor = "green";
      win = true;
      for (let index of gridNodes) {
        index.removeEventListener("click", clickBox);
      }
        //Sets the display text to say who the winner is
        displayParagraph.textContent = (winner + " is the winner!");

    } else if (
      bottomRight.childNodes[0].textContent ==
        middleRight.childNodes[0].textContent &&
      bottomRight.childNodes[0].textContent ==
        topRight.childNodes[0].textContent
    ) {
      bottomRight.style.backgroundColor = "green";
      middleRight.style.backgroundColor = "green";
      topRight.style.backgroundColor = "green";
      win = true;
      for (let index of gridNodes) {
        index.removeEventListener("click", clickBox);
      }
        //Sets the display text to say who the winner is
        displayParagraph.textContent = (winner + " is the winner!");

    }
  }


    if (moves == 9 && win == false) {
        return draw();
    };


};



const clickBox = function (evt) {
  let paragraphSymbol = evt.target.childNodes[0];
  paragraphSymbol.textContent = player;
  if (player == "X") {
    player = "O";
  } else {
    player = "X";
  };

  if (winner == "O") {
      winner = "X";
  } else {
      winner = "O"
  };
  displayParagraph.textContent = ("Current player: " + player);
  evt.target.removeEventListener("click", clickBox);
    moves++;
  return checkWin();
};

for (let index of gridNodes) {
  index.addEventListener("click", clickBox);
}
