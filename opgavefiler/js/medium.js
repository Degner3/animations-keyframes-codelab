/* Opgave 1*/

let myBall=document.getElementById('ballOne');
let myBuhButton=document.getElementById('buhOneButton');

myBuhButton.addEventListener('click', () => {

    myBall.classList.toggle('animateRight');
});


/*opgave 2*/

let myBalls=document.getElementsByClassName('balls');
let myBuhTwoButton=document.getElementById('buhTwoButton');

myBuhTwoButton.addEventListener('click', () => {

    for (const myBall of myBalls) {
        myBall.classList.toggle('animateRight')
    }
});

/*opgave 3*/


let myhardballs = document.getElementsByClassName('hardBalls');
let myBuhThreeButton = document.getElementById('buhThreeButton');

myBuhThreeButton.addEventListener('click', () => {

    let myDiraction = "Right";
    for (let myBall of myhardballs) {

        if (myDiraction == "Right") {
            myBall.classList.toggle('loopRight');
            myDiraction = "Left";
        }
        else {
            myBall.classList.toggle('loopLeft');
            myDiraction = "Right";
        }


    }
});



