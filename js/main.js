let currentMainText = document.querySelector('.currentMainText');
let currentButtonText = document.querySelector('.currentButtonText');
let currentTextUnderOne = document.querySelector('.currentTextUnderOne');
let currentTextUnderTwo = document.querySelector('.currentTextUnderTwo');
let currentbrButton = document.querySelector('.currentbrButton');
let biArrowRepeat = document.getElementById("bi-arrow-repeat");

let view = 0;

document.getElementById("middleButton").addEventListener("click", function(){ 
    view++;
    currentView();

});
document.getElementById("bottomButton").addEventListener("click", function(){ 
    if (view == 0){
        view++;
        currentView()
    } else if (view > 0) {
        view = 0;
        currentView()
    }
});
let icon;

function currentView(){

    let mainText = ["I can read your mind", "Pick a number from 01 - 99", "Add both digits together to get a new number", "Subtract your new number from the original number", "Placeholder for number list", "Placeholder for symbol"];
    let buttonText = ["", "NEXT", "REVEAL"];
    let textUnderOne = ["", "When you have your number click next", "Ex: 14 is 1 + 4 = 5", "Ex: 14 - 5 = 9", "Find your new number", "Your symbol is: "];
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
        currentMainText.innerHTML = "";
        let iconArray = ["!", "@", "#", "$", "%", "^", "&", "*", "+"]
        let iconList = [];
        let num = Math.floor(Math.random() * Math.floor(8));
        
        icon = iconArray[num];
        iconArray.splice(num, 1);
    
        
        for (let i = 0; i < 99; i++) {
            if (i == 0 || i % 9 == 0) {
                iconList.push(i + " - " + icon + "\n");
            } else {
                iconList.push(i + " - " + iconArray[Math.floor(Math.random() * Math.floor(7))] + "\n");
            }
            let item = document.createElement("div"); // Creates <div></div>
            item.innerHTML = iconList[i];             // Updates innerHTML <div>Some Icon</div>
            currentMainText.append(item);
        }
        currentButtonText.innerHTML = buttonText[2];
        currentTextUnderOne.innerHTML = textUnderOne [4];
        currentTextUnderTwo.innerHTML = textUnderTwo[2];
        currentbrButton.innerHTML = brButton[1];
    } else if (view == 5) {
        currentMainText.innerHTML = icon;
        middleButton.style.display ="none";
        currentTextUnderOne.innerHTML = textUnderOne [5];
        currentTextUnderTwo.innerHTML = icon;
        currentbrButton.innerHTML = brButton[1];
    }
}
currentView();
