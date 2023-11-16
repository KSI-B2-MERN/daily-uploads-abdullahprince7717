//const 

{
    const var1 = "str1"
    console.log(var1)
    {
        const var1 = "str2"
        console.log(var1)
        // const var1 = "str2" // error
    }
    console.log(var1)
}

console.log("=====================================")
//let

{
    let var1 = "str1"
    console.log(var1)
    {
        let var1 = "str2"
        console.log(var1)
        // const var1 = "str2" // error
    }
    console.log(var1)
}

console.log("=====================================")

// var

{
    var var1 = "str1"
    console.log(var1)
    {
        var var1 = "str2"
        console.log(var1)
        // const var1 = "str2"
    }
    console.log(var1)
}

console.log("=====================================")

// Operator Precedence

let a = 6 + 7 * 8 / 9
console.log(a)

a = 6 + 7 / 9 * 8
console.log(a)

a = 6 + 7 * (8 / 9)
console.log(a)


console.log("=====================================")

// Ternary Operator

let age = 18
let result = (age > 18) ? "Adult" : "Child"
console.log(result)

console.log("=====================================")

// Switch Case

let day = 1
switch (day) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid")
}

console.log("=====================================")

// For Loop

for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log("=====================================")

// Function Declarations

function add(a, b) {
    return a + b
}
console.log(add(1, 2));

// Function Expressions

const sub = function (a, b) {
    return a - b
}
console.log(sub(1, 2));


// Default parameters

const mult = function (a, b = 1) {
    return a * b
}
console.log(mult(1, 2));


// Arrow Functions

const mul = (a, b) => {
    return a * b
}
console.log(mul(1, 2));

// Arrow Functions - 2

const div = (a, b) => a / b
console.log(div(1, 2));

// IIFE Functions - Immediately Invoked Function Expression

(function (a, b) {
    console.log(a * b)
})(1, 2)

// Automatically Invoked Function Expression

// ((a, b) => {
//     console.log(a * b)
// })(1, 2)

// Automatically Invoked Function Expression - 2

// ((a, b) => console.log(a * b))(1, 2)


console.log("=====================================")


// Arrays

const arr = [1, 2, 3, 4, 5]
console.log(arr)

// Arrays - 2

const arr2 = [1, 2, 3, 4, 5]
console.log(arr2[0])

// Arrays - 3

const arr3 = [1, 2, 3, 4, 5]
console.log(arr3.length)

// Arrays - 4

const arr4 = [1, 2, 3, 4, 5]
console.log(arr4[arr4.length - 1])

// Arrays - 5

const arr5 = [1, 2, 3, 4, 5]
arr5[0] = 10
console.log(arr5)

// Arrays - 6

const arr6 = [1, 2, 3, 4, 5]
arr6.push(10)
console.log(arr6)

// Arrays - 7

const arr7 = [1, 2, 3, 4, 5]
arr7.pop()
console.log(arr7)

// Arrays - 8

const arr8 = [1, 2, 3, 4, 5]
arr8.shift()
console.log(arr8)

// Arrays - 9

const arr9 = [1, 2, 3, 4, 5]
arr9.unshift(10)
console.log(arr9)

// Arrays - 10

const arr10 = [1, 2, 3, 4, 5]
arr10.splice(2, 1)
console.log(arr10)

// Arrays - 11

const arr11 = [1, 2, 3, 4, 5]
arr11.splice(2, 1, 10)
console.log(arr11)

// Arrays - 12

const arr12 = [1, 2, 3, 4, 5]
arr12.splice(2, 0, 10)
console.log(arr12)

// Arrays - 13

const arr13 = [1, 2, 3, 4, 5]

for (let i = 0; i < arr13.length; i++) {
    console.log(arr13[i])
}

// Arrays - Index of Element

const arr14 = [1, 2, 3, 4, 5]
console.log(arr14.indexOf(3))

//Arrays - Included Element

const arr15 = [1, 2, 3, 4, 5]
console.log(arr15.includes(3))

// Arrays - Included Element - 2

const arr16 = [1, 2, 3, 4, 5]
console.log(arr16.includes(10))

// Arrays - Included Element - 3

const arr17 = [1, 2, 3, 4, 5]
console.log(arr17.includes(10, 2))

// Arrays - Included Element - 4

const arr18 = [1, 2, 3, 4, 5]
console.log(arr18.includes(3, 2))

// Arrays - Included Element - 5

const arr19 = [1, 2, 3, 4, 5]
console.log(arr19.includes(3, -2))

// Arrays - Included Element - 6

const arr20 = [1, 2, 3, 4, 5]
console.log(arr20.includes(3, -4))






