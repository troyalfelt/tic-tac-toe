let gridBox = document.querySelector(".gridBox")
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

const clickBox = function(evt) {
  let symbol = document.createElement("p");
  symbol.textContent = player;
  if (player == "X") {
    player = "O";
  } else {
    player = "X";
  }
  evt.target.appendChild(symbol);
  evt.target.removeEventListener("click", clickBox);
};

topLeft.addEventListener("click", clickBox);
topMiddle.addEventListener("click", clickBox);
topRight.addEventListener("click", clickBox);
middleLeft.addEventListener("click", clickBox);
middleMiddle.addEventListener("click", clickBox);
middleRight.addEventListener("click", clickBox);
bottomLeft.addEventListener("click", clickBox);
bottomMiddle.addEventListener("click", clickBox);
bottomRight.addEventListener("click", clickBox);
