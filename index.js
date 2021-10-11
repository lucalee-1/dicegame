var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImage1 = "images/dice"+ randomNumber1 + ".png";
var randomImage2 = "images/dice"+ randomNumber2 + ".png";


document.querySelector(".dice .img1").setAttribute("src", randomImage1);
document.querySelector(".dice .img2").setAttribute("src", randomImage2);

if (randomNumber1>randomNumber2){
document.querySelector(".main-title").textContent = "Player 1 wins!";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector(".main-title").textContent = "Player 2 wins!";
}
else {
  document.querySelector(".main-title").textContent = "Draw!";
}
