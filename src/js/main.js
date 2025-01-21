var box = document.querySelectorAll(".box");
var boxOne = document.querySelector(".change-color");
var boxTwo = document.querySelector(".toggle-color");
var boxThree = document.querySelector(".trigger");
var boxFour = document.querySelector(".target");
var boxFive = document.querySelector(".trigger-all");
var boxSix = document.querySelector(".trigger-all-self");

var changeColor = function () {
  boxOne.classList.add("blue");
};

var toggleColor = function () {
  boxTwo.classList.toggle("red");
};

var trigger = function () {
  boxFour.classList.toggle("is-inactive");
};

var triggerAll = function () {
  boxOne.classList.toggle("blue");
  boxTwo.classList.toggle("red");
};

var triggerAllSelf = function () {
  boxOne.classList.toggle("blue");
  boxTwo.classList.toggle("red");
  boxSix.classList.toggle("green");
};

boxOne.addEventListener("click", changeColor);
boxTwo.addEventListener("click", toggleColor);
boxThree.addEventListener("click", trigger);
boxFive.addEventListener("click", triggerAll);
boxSix.addEventListener("click", triggerAllSelf);
