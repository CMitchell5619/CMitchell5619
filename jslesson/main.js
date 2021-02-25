

// can't change a const

// primitive datatypes are passed by value, complex are passed by reference

let string = 'always use single quotes'

if (true){
    console.log("It true, dog")
} else { }





 


for (let num = 0; num <= 10; num++) {
 console.log(num)
}

// return will end a function or loop or whatever //

// while loops are good when you don't know how many times you'll interate. 

let number = 1

while (number < 11) {
    console.log(number)
    number++
}

// DoWhile is good for video games where you always want a thing to happen at least once. Happens on the first run

let number1 = 0

do {
    console.log(number1)
    number1++
} while (number1 < 9)

function greet(parameter) {
    parameter // refer //
}

greet(//argument)
)

let apple = 4

let fruit = [
    {
        name: 'apple',
        cost: 3
    },
    {
        name: 'orange',
        cost: 4
    }
]

fruit[1][0]

let userChoice = window.prompt("Sup, bb?")
console.log(fruit[0][userChoice])

let userInput = window.prompt("Pick an action and an option; Actions: (G)o, (L)ook;")
userInput = userInput.split(" ")
let userAction = userInput[0]

switch (userAction) {
    case 'g':
    case 'G':
        move(userAction)
        break;
    case 'look':
        console.log('you look around')
}

for (let i = 0; i < array.length; i++) {
    const element = array i];
    
}

for


function move(direction) {
    console.log('you move to the ', direction)
}