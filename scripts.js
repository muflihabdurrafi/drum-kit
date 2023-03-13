let buttons = []; //buttons array initialization
let audio = [];

// for loop
for (let i = 0; i < 7; i++) {
    //querySelector
    buttons[i] = document.querySelectorAll(".drum")[i];
    //add click event listener
    buttons[i].addEventListener("click", function () {
        buttons[i].classList.add("pressed");
        //if else statement for the different sounds
        if (buttons[i] == buttons[0]) {
            audio[i] = new Audio("./sounds/tom-1.mp3");
        } else if (buttons[i] == buttons[1]) {
            audio[i] = new Audio("./sounds/tom-2.mp3");
        } else if (buttons[i] == buttons[2]) {
            audio[i] = new Audio("./sounds/tom-3.mp3");
        } else if (buttons[i] == buttons[3]) {
            audio[i] = new Audio("./sounds/tom-4.mp3");
        } else if (buttons[i] == buttons[4]) {
            audio[i] = new Audio("./sounds/snare.mp3");
        } else if (buttons[i] == buttons[5]) {
            audio[i] = new Audio("./sounds/crash.mp3");
        } else if (buttons[i] == buttons[6]) {
            audio[i] = new Audio("./sounds/kick.mp3");
        }
        audio[i].play();
        //set 100 ms delay for the removal of "pressed" class
        setTimeout(function () {
            buttons[i].classList.remove("pressed");
        }, 100);
    });
}

//keydown event listener
document.addEventListener("keydown", (e) => {
    if (e.key == "w") {
        buttons[0].click();
    } else if (e.key == "a") {
        buttons[1].click();
    } else if (e.key == "s") {
        buttons[2].click();
    } else if (e.key == "d") {
        buttons[3].click();
    } else if (e.key == "j") {
        buttons[4].click();
    } else if (e.key == "k") {
        buttons[5].click();
    } else if (e.key == "l") {
        buttons[6].click();
    }
});
