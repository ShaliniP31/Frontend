
let count = 0;
console.log(count);

count = 1;
console.log(count);

const PI = 3.14
// PI = 4
console.log(PI)


let x = 5
const b = 1213231312313132344324344343423432432n;

console.log(typeof x)

let name = 'Jane';

let isTrue = true;

let y = null;

let z;

let person = {
    name: 'John',
    age: 30

}

console.log(typeof person)

let a = Symbol('id')
console.log(a)

let fruits = ['apples', 7, 'bananas']
console.log(fruits[1])

fruits.push(10);
console.log(fruits[3])

console.log(fruits)
fruits.pop()
console.log(fruits)

let str = "Hello World"
console.log(str.length)
console.log(str[6])

let str1 = 'Hello'
let str2 = 'World'
let res1 = str1 + ' ' + str2
console.log(res1)
console.log(str1.concat(" ", str2))

console.log(res1.slice(6, 11))
console.log(res1.substring(4))


let age = 25
if (age < 18) {
    console.log("Child")
} else {
    console.log("Adult")
}

let day = 2;
switch (day) {
    case 1:
        console.log("Case 1")
        break;
    case 2:
        console.log("Case 2")
        break;
    default:
        console.log("Bad value")
        break;
}

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let i = 0
while (i < 5) {
    console.log(i++)
}

i = 0
do {
    console.log(i++)
} while (i < 0)


function add(n1, n2) {
    let sum = n1 + n2
    return sum
}

s = add(10, 5)
console.log(s)



var x1 = 5;
let y1 = 10;
const z1 = 15;

if (true) {
    var x1 = 20;
    let y1 = 25;
    const z1 = 30;
}

console.log(x1)
console.log(y1)
console.log(z1)