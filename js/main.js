let currentMainText = document.querySelector('.currentMainText');
let currentButtonText = document.querySelector('.currentButtonText');
let currentTextUnderOne = document.querySelector('.currentTextUnderOne');
let currentTextUnderTwo = document.querySelector('.currentTextUnderTwo');
let currentbrButton = document.querySelector('.currentbrButton');
// let biArrowRepeat = document.getElementsByClassName(bi-arrow-repeat);
function currentView(){
    let view = 0;

    let mainText = ["I can read your mind", "Pick a number from 01 - 99", "Add both digits together to get a new number", "Subtract your new number from the original number", "Placeholder for number list", "Placeholder for symbol"];
    let buttonText = ["","Hi", "NEXT"];
    let textUnderOne = ["", "When you have your number click next", "Ex: 14 is 1 + 4 = 5"];
    let textUnderTwo = ["", "", "Click next to proceed"];
    let brButton = ["GO"];


    if (view == 0) {
        currentMainText.innerHTML = mainText[2];
        currentButtonText.innerHTML = buttonText[2];
        currentTextUnderOne.innerHTML = textUnderOne[2];
        currentTextUnderTwo.innerHTML = textUnderTwo[2];
        currentbrButton.innerHTML = brButton[0];
        // biArrowRepeat.style.display ="none";
    }
    // currentbrButton.style.display = "none";

    // Need event listeners to change "view" and need IF/ELSEIF statements to see what view 
    // it is and change current elements accordingly


    // so when page is 5, you want to make the .bi-arrow-repeat class display
    // else you want to hide it and make sure that go is displayed




}
currentView();