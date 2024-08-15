// 'My name is'
// let myVar = 'My name is '
// console.log(myVar)
// let myName = 'Branson'
// console.log(myVar + myName)
// let totalCost ='The total cost is:$ ' + (3 + 5);
// console.log(totalCost)

// /// calculating total with template strings and interpolation 
// let total=`The total cost is:$ ${(3+5)}`
// console.log(total) 

// let coffe = (5.99*100)
// let bagel = (2.95 *100)
// let output = 'The total cost:$ '
// console.log(output + (coffe + bagel)/100)
// let total2 = `Total Cost: $ ${(coffe + bagel)/100}`
// console.log(total2)
// alert(total2 +    `\nThank you come again!`)

let [seconds,minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if (minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds: seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart(){
    if (timer != null)
    {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,10);
}

function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}





