// Palindrome ny builtin methods
// let a = prompt("Enter the number");
// let b = a.split().reverse("").join();
// if (a == b) {
//   console.log("given number is palindrome");
// } else {
//   console.log("given number is not a palindrome");
// }

// Palindrome without builtin methods
// let a = prompt("enter the number");
// function palindrome(str) {
//   let len = a.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       console.log("given number is not a palindrome");
//     }
//   }
//   console.log("given num is palindrome");
// }
// palindrome(a);

// Prime Number
let prime = parseInt(prompt("enter the number"));

let isPrime = true;

if (number === 1) {
  console.log("given number is either prime or composite number");
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % 2 == 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("given number is prime number");
} else {
  console.log("give number is not a number");
}

// Even or Prime
let even = parseInt(prompt("enter the number"));

if (number % 2 == 0) {
  console.log("given number is even number");
} else {
  console.log("given number is odd number");
}
// fibanocci
let a = 0;
let b = 1;
let c;
for (let i = 0; i < 5; i++) {
  c = a + b;
  a = b;
  b = c;

  console.log(c);
}
