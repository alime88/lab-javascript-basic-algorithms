// Iteration 1: Names and Input

let hacker1 = "Carlo";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Achraf";
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters and his name is ${hacker1}.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters and his name is ${hacker2}.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// Iteration 3.1

let result = '';
for (let i = 0; i < hacker1.length; i++) {
    result += hacker1[i].toUpperCase();
    if (i < hacker1.length - 1) {
        result += ' ';
    }
}
console.log(result);

//Iteration 3.2
let reverseName = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i];
}
console.log(reverseName);

//Iteration 3.3
if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}


