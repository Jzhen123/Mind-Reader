let currentMainText = document.querySelector('.currentMainText');
let currentButtonText = document.querySelector('.currentButtonText');
let currentTextUnderOne = document.querySelector('.currentTextUnderOne');
let currentTextUnderTwo = document.querySelector('.currentTextUnderTwo');
let currentbrButton = document.querySelector('.currentbrButton');
// let middleButton = document.getElementById("middleButton");
// let bottomButton = document.getElementById('bottomButton');
let biArrowRepeat = document.getElementById("bi-arrow-repeat");

let view = 1;

document.getElementById("middleButton").addEventListener("click", function(){ view++;});
document.getElementById("bottomButton").addEventListener("click", function(){ 
    if (view == 0){
        view++;
    } else if (view > 0) {
        view = 0;
    }
});

setInterval(currentView, 100);
function currentView(){

    let mainText = ["I can read your mind", "Pick a number from 01 - 99", "Add both digits together to get a new number", "Subtract your new number from the original number", "Placeholder for number list", "Placeholder for symbol"];
    let buttonText = ["", "NEXT", "REVEAL"];
    let textUnderOne = ["", "When you have your number click next", "Ex: 14 is 1 + 4 = 5", "Ex: 14 - 5 = 9", "Find your new number", "Your symbol is:"];
    let textUnderTwo = ["", "Click next to proceed", "Note the symbol beside the number", "Placeholder for symbol"];
    let brButton = ["GO", ""];

    if (view == 0) {
        currentMainText.innerHTML = mainText[0];
        currentButtonText.innerHTML = buttonText[0];
        currentTextUnderOne.innerHTML = textUnderOne [0];
        currentTextUnderTwo.innerHTML = textUnderTwo[0];
        currentbrButton.innerHTML = brButton[0];
        middleButton.style.display ="none";
        biArrowRepeat.style.display ="none";
    } else if (view == 1) {
        currentMainText.innerHTML = mainText[1];
        currentButtonText.innerHTML = buttonText[1];
        currentTextUnderOne.innerHTML = textUnderOne [1];
        currentTextUnderTwo.innerHTML = textUnderTwo[0];
        currentbrButton.innerHTML = brButton[1];
        middleButton.style.display ="block";
        biArrowRepeat.style.display ="block";
    } else if (view == 2) {
        currentMainText.innerHTML = mainText[2];
        currentButtonText.innerHTML = buttonText[1];
        currentTextUnderOne.innerHTML = textUnderOne [2];
        currentTextUnderTwo.innerHTML = textUnderTwo[1];
        currentbrButton.innerHTML = brButton[1];
    } else if (view == 3) {
        currentMainText.innerHTML = mainText[3];
        currentButtonText.innerHTML = buttonText[1];
        currentTextUnderOne.innerHTML = textUnderOne [3];
        currentTextUnderTwo.innerHTML = textUnderTwo[1];
        currentbrButton.innerHTML = brButton[1];
    } else if (view == 4) {
        currentMainText.innerHTML = mainText[4];
        currentButtonText.innerHTML = buttonText[2];
        currentTextUnderOne.innerHTML = textUnderOne [4];
        currentTextUnderTwo.innerHTML = textUnderTwo[2];
        currentbrButton.innerHTML = brButton[1];
    } else if (view == 5) {
        currentMainText.innerHTML = mainText[5];
        middleButton.style.display ="none";
        currentTextUnderOne.innerHTML = textUnderOne [5];
        currentTextUnderTwo.innerHTML = textUnderTwo[3];
        currentbrButton.innerHTML = brButton[1];
    }
}
