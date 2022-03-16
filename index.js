//document.getElementById("count-el").innerText = 5;

// let firstBatch = 5;
// let secondBatch = 15;
// let count = firstBatch + secondBatch;
// console.log(count);

// let myAge = 35;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 100;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// function increment() {
//     console.log("The button was clicked!")

// }

// function sampleCount() {
//     console.log(42);
// }
// sampleCount();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function lapCounter() {
//     let count = lap1 + lap2 + lap3;
//     console.log(count);
// }
// lapCounter();

// let lapsCompleted = 0;
// function lapCounter() {
//     lapsCompleted = lapsCompleted + 1;    
// }
// lapCounter();
// console.log(lapsCompleted);
// lapCounter();
// console.log(lapsCompleted);
// lapCounter();
// console.log(lapsCompleted);

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countSeparator = count + ' - ';
    saveEl.textContent += countSeparator;
    console.log(count);
    count = 0;
    countEl.textContent = count;
}

