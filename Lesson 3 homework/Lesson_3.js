// 1
let input = prompt("Enter any number: ");
if (input > 0) {
    console.log(1);
} else if(input < 0) {
    console.log(-1);
} else {
    console.log(0);
}

//2
let result = (a+b > 4) ? "Мало" : "Много";

// 3
for (let i = 2; i <= 40; i+=2) {
    console.log(i);
}

// 4
let product = 1;
for (let i = 2; i <= 30; i++) {
    product *= i;
    
}

// 5
let count = 2;
let sum = 0;
while (count <= 40) {
    sum += count;
    count+=2;
}

// 6
let counter = 1;
while (counter<=40) {
    if (counter%7===0) {
        console.log(counter);
    }
    counter++;
}

// 7
let prdct = 1;
for (let i = 2; i <= 60; i++) {
    if(i%6===0){
        prdct *= i;
    }
    
}