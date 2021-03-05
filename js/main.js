let currentMainText = document.querySelector('.currentMainText');
let currentButtonText = document.querySelector('.currentButtonText');
let currentTextUnderOne = document.querySelector('.currentTextUnderOne');
let currentTextUnderTwo = document.querySelector('.currentTextUnderTwo');
let currentbrButton = document.querySelector('.currentbrButton');
let biArrowRepeat = document.getElementById("bi-arrow-repeat");
// Defaults view to 0 or the Start
let view = 0;
//  Event Listener for the middle button that adds 1 to view every time it is clicked to cycle through each view
document.getElementById("middleButton").addEventListener("click", function () {
    view++;
    currentView();

});
// Event Listener for the bottom right button that "restarts" by setting view back to 0
document.getElementById("bottomButton").addEventListener("click", function () {
    if (view == 0) {
        view++;
        currentView()
    } else if (view > 0) {
        view = 0;
        currentView()
    }
});
let icon;

// Function Containing what content will be shown depending on what value view is
function currentView() {

    // Multiple Arrays to be able to cycle through different views
    let mainText = ["I can read your mind", "Pick a number from 01 - 99", "Add both digits together to get a new number", "Subtract your new number from the original number", "Placeholder for number list", "Placeholder for symbol"];
    let buttonText = ["", "NEXT", "REVEAL"];
    let textUnderOne = ["", "When you have your number click next", "Ex: 14 is 1 + 4 = 5", "Ex: 14 - 5 = 9", "Find your new number", "Your symbol is: "];
    let textUnderTwo = ["", "Click next to proceed", "Note the symbol beside the number", "Placeholder for symbol"];
    let brButton = ["GO", ""];
    // View 1
    if (view == 0) {
        currentMainText.innerHTML = mainText[0];
        currentButtonText.innerHTML = buttonText[0];
        currentTextUnderOne.innerHTML = textUnderOne[0];
        currentTextUnderTwo.innerHTML = textUnderTwo[0];
        currentbrButton.innerHTML = brButton[0];
        middleButton.style.display = "none"; // Hides Middle Button
        biArrowRepeat.style.display = "none"; // Hides An arrow that also shares the same space as GO
        // View 2
    } else if (view == 1) {
        currentMainText.innerHTML = mainText[1];
        currentButtonText.innerHTML = buttonText[1];
        currentTextUnderOne.innerHTML = textUnderOne[1];
        currentTextUnderTwo.innerHTML = textUnderTwo[0];
        currentbrButton.innerHTML = brButton[1];
        middleButton.style.display = "block"; // Hides Middle Button
        biArrowRepeat.style.display = "block"; // Hides An arrow that also shares the same space as GO
        // View 3
    } else if (view == 2) {
        currentMainText.innerHTML = mainText[2];
        currentButtonText.innerHTML = buttonText[1];
        currentTextUnderOne.innerHTML = textUnderOne[2];
        currentTextUnderTwo.innerHTML = textUnderTwo[1];
        currentbrButton.innerHTML = brButton[1];
        // View 4
    } else if (view == 3) {
        currentMainText.innerHTML = mainText[3];
        currentButtonText.innerHTML = buttonText[1];
        currentTextUnderOne.innerHTML = textUnderOne[3];
        currentTextUnderTwo.innerHTML = textUnderTwo[1];
        currentbrButton.innerHTML = brButton[1];
        // View 5    
    } else if (view == 4) {
        currentMainText.innerHTML = "";
        let iconArray = ["!", "@", "#", "$", "%", "^", "&", "*", "+"] // Array containing my choice of icons
        let iconList = []; // Creates empty array that will be displayed in this view
        let num = Math.floor(Math.random() * Math.floor(8)); // Set num to a random number between 0-8

        icon = iconArray[num]; // Set a special icon set aside for numbers divisble by 9 and 0
        iconArray.splice(num, 1); // Remove the icon from the array so it won't be reused by the other numbers


        for (let i = 0; i < 99; i++) { // For loop for assigning icons to numbers 1-99
            if (i == 0 || i % 9 == 0) {
                iconList.push(i + " - " + icon + "\n"); // Assigns and pushes number 0 and numbers divisble by 9 the "special" icon
            } else {
                iconList.push(i + " - " + iconArray[Math.floor(Math.random() * Math.floor(7))] + "\n"); // Assigns and pushes random icons to all the other numbers
            }
            let item = document.createElement("div"); // Creates <div></div>
            item.innerHTML = iconList[i];             // Updates innerHTML <div>Some Icon</div>
            currentMainText.append(item);             // Adds it to the section currentMainText
        }
        currentButtonText.innerHTML = buttonText[2];
        currentTextUnderOne.innerHTML = textUnderOne[4];
        currentTextUnderTwo.innerHTML = textUnderTwo[2];
        currentbrButton.innerHTML = brButton[1];
        // View 6
    } else if (view == 5) {
        currentMainText.innerHTML = icon;
        middleButton.style.display = "none";
        currentTextUnderOne.innerHTML = textUnderOne[5];
        currentTextUnderTwo.innerHTML = icon;
        currentbrButton.innerHTML = brButton[1];
    }
}
currentView();
