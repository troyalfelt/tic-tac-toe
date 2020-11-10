let grid = document.querySelector(".grid");
let gridNodes = grid.childNodes;

let gridBox = document.querySelectorAll(".gridBox");

    for (let index of gridBox) {
        paragraph = document.createElement("p");
        index.appendChild(paragraph);
    };

let topLeft = document.querySelector("#topLeft");
let topMiddle = document.querySelector("#topMiddle");
let topRight = document.querySelector("#topRight");
let middleLeft = document.querySelector("#middleLeft");
let middleMiddle = document.querySelector("#middleMiddle");
let middleRight = document.querySelector("#middleRight");
let bottomLeft = document.querySelector("#bottomLeft");
let bottomMiddle = document.querySelector("#bottomMiddle");
let bottomRight = document.querySelector("#bottomRight");

let player = "X";

const checkWin = function() {
   if (topLeft.childNodes[0].textContent) {
     if (topLeft.childNodes[0].textContent == middleLeft.childNodes[0].textContent
     && topLeft.childNodes[0].textContent == bottomLeft.childNodes[0].textContent) {
     topLeft.style.backgroundColor = 'green';
     middleLeft.style.backgroundColor = 'green';
     bottomLeft.style.backgroundColor = 'green';
         
         for (let index of gridNodes) {
             index.removeEventListener("click", clickBox);
         };
         
    };
  };
};

const clickBox = function(evt) {
  let paragraphSymbol = evt.target.childNodes[0]
  paragraphSymbol.textContent = player;
  if (player == "X") {
    player = "O";
  } else {
    player = "X";
  };
  evt.target.removeEventListener("click", clickBox);
  return checkWin();
};

 for (let index of gridNodes) {
     index.addEventListener("click", clickBox)
 };
