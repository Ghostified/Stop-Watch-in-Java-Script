'My name is'
let myVar = 'My name is '
console.log(myVar)
let myName = 'Branson'
console.log(myVar + myName)
let totalCost ='The total cost is:$ ' + (3 + 5);
console.log(totalCost)

/// calculating total with template strings and interpolation 
let total=`The total cost is:$ ${(3+5)}`
console.log(total) 

let coffe = (5.99*100)
let bagel = (2.95 *100)
let output = 'The total cost:$ '
console.log(output + (coffe + bagel)/100)
let total2 = `Total Cost: $ ${(coffe + bagel)/100}`
console.log(total2)
alert(total2 +    `\nThank you come again!`)


