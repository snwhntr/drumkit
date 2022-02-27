var buttons = document.querySelectorAll(".drum").length;

for (var i=0; i<buttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function websitePress () {

    var buttonHTML = this.innerHTML;

    switch (buttonHTML) {
        case "w":
        var tom1 = new Audio ("sounds/tom-1.mp3");
        tom1.play(); 
        break;

        case "a":
        var tom2 = new Audio ("sounds/tom-2.mp3");
        tom2.play(); 
        break;

        case "s":
        var tom3 = new Audio ("sounds/tom-3.mp3");
        tom3.play(); 
        break;

        case "d":
        var tom4 = new Audio ("sounds/tom-4.mp3");
        tom4.play(); 
        break;

        case "j":
        var crash = new Audio ("sounds/crash.mp3");
        crash.play(); 
        break;

        case "k":
        var snare = new Audio ("sounds/snare.mp3");
        snare.play(); 
        break;

        case "l":
        var kickbass = new Audio ("sounds/kickbass.mp3");
        kickbass.play(); 
        break;

    default: console.log();
        break;
    }

    buttonAnimation(buttonHTML);

    })


}

document.addEventListener ("keydown", function(event) {

    buttonAnimation(event.key);

    switch (event.key) {
        case "w":
        var tom1 = new Audio ("sounds/tom-1.mp3");
        tom1.play(); 
        break;

        case "a":
        var tom2 = new Audio ("sounds/tom-2.mp3");
        tom2.play(); 
        break;

        case "s":
        var tom3 = new Audio ("sounds/tom-3.mp3");
        tom3.play(); 
        break;

        case "d":
        var tom4 = new Audio ("sounds/tom-4.mp3");
        tom4.play(); 
        break;

        case "j":
        var crash = new Audio ("sounds/crash.mp3");
        crash.play(); 
        break;

        case "k":
        var snare = new Audio ("sounds/snare.mp3");
        snare.play(); 
        break;

        case "l":
        var kickbass = new Audio ("sounds/kickbass.mp3");
        kickbass.play(); 
        break;

    default: console.log();
        break;
    }
  
    })

    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
        
        setTimeout (function() {
            activeButton.classList.remove("pressed");
        }, 100);

    }
