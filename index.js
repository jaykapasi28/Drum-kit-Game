// listening click event in JavaScript
var pressedButton;
for(var i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // console.log(this);
        pressedButton = this.innerHTML;
        sound(pressedButton);
        animation(pressedButton)
    });
}

// Listening event When key is pressed on keyboard
document.addEventListener("keypress", function(event) { 
    console.log(event);  // gives the event that triggered the function "function(event)". basically when function is called it creates object of name event and in  that event object all information of event is stored.
    key = event.key;
    sound(key);
    animation(key);
});


// switch case statement in javascript
function sound(keyword) {
    switch (keyword) {
        case "w":
            var audio = new Audio("sounds/kick-bass.mp3");  // play sound in javascript.
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "l":
            var audio =new Audio("sounds/crash.mp3");
            audio.play();
            break;
        
        default:
            alert("Something went wrong");
            break;
}
}


// animation in javaScript

function animation(animate) {
    document.querySelector("." + animate).classList.add("pressed");

    // setTimeOut method in javaScript
    setTimeout(function() {
        document.querySelector("." + animate).classList.remove("pressed")
    }, 100);
}








// Object in javaScript

var houseKeeper = {
    yrOfExp: [12, 3, 4],
    noOfProp: 3,
};
console.log(houseKeeper.yrOfExp[0]);


// Object constructor in javaScript

function HouseKeeper(name, roll, surname) {
    this.name = name;
    this.roll = roll;
    this.surname = surname;
    this.clean = function() {
        alert("Cleaning in progress")
    }
}

var abc = new HouseKeeper("jay", 34, "kapasi");



