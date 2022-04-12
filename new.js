// var myArr = [[20, 30, 40], [1, 2, 3],[5,6,7]];
// var dataA = myArr[1][1];
// console.log(dataA);
// // var newArr = myArr[2];
// // myArr[1] = 10;
// // console.log(newArr);
// // array method push
// // myArr.push(["hello world"]);
// // console.log(myArr);

// for (i = 1; i <= 4; i++) {
//   remain = "";
//   for (j = 4; j >= 4; j--) {
//     if (i %2!=0) {
//       remain += i;
//     } else {
//       remain += j;
//       }
//     }
//     console.log(remain);
// }

// var row = prompt("enter no of rows");
// var col = prompt("enter no of cols");
// var e = col;
// for (i = 1; i <= row; i++) {
//   let l = e;
//   let o = 1;
//   for (var j = 1; j <= col; j++) {
//     if (i % 2 == 0) {
//       if (i == j) {
//         document.write("*");
//           l--
//       } else document.write(l--);
//     } else {
//       if (i == j) {
//         document.write("*");
//        o++
//       } else document.write(o++);
//     }
//   }
//   document.write("<br/>");
// }

//? for 101 pyramid

// var row = prompt();
// var col = prompt();
// spac = row - 1;
// str = 1;
// for (let i = 1; i <= row; i++) {
//   for (let k = 1; k <= spac; k++) {
//     document.write("&nbsp;");
//   }
//   spac--;

//   for (let l = 1; l <= str; l++) {
//     if (l % 2 != 0) {
//       document.write("1");
//     } else {
//       document.write("0");
//     }
//   }
//   str = str + 2;
//   document.write("<br/>");
// }

// ? for 1123 pyramid
// let rows = parseInt(prompt("enter the rows"));
// let colums = parseInt(prompt("enter the colums"));

// let space = rows - 1;
// let star = 1;
// for (let i = 1; i <= rows; i++) {
//   for (let k = 1; k <= space; k++) {
//     document.write("&nbsp");
//   }
//   space = space - 1;
//   for (let l = 1; l <= star; l++) {
//     document.write(l)
//   }
//   star = star + 2;

//   document.write("<br/>");
// }

// ?repeated values in a string
// let a = "hello";
// let c = a.split("");
// let v = new Set(c);
// for (i of v) {
//   let count = 0;
//   for (j of c) {
//     if (i == j) count++;
//   }
//   if (count > 1) {
//     document.write(`${i}-${count}`);
//     document.write(`<br/>`);
//   }
// }

// ?array values
// a1 = [5, 4, 3, 2, 1];
// a2 = [1, 6, 5, 9, 1];

// for (i of a1) {
//   for (j of a2) {
//     if (i + j == 10) {
//       document.write(`${i}+${j}=10`);
//       document.write(`<br/>`);
//     }
//   }
// }

// for (i of a1) {
//   for (j of a1) {
//     if (i + j !== 10) {
//       if (i + j == 10) {

//       }
//     }
//   }
// }

// ?pushin random numbers in to array
// let a1 = [1, 2, 3, 4];
// let a2 = [5, 6, 7, 8];
// let a3 = [];
// let j = 0;
// let k = 0;
// for (let i = 0; i < a1.length + a2.length; i++) {
//   if (k < a1.length) {
//     a3.push(a1[k]);
//     k++;
//   }
//   if (j < a2.length) {
//     a3.push(a2[j]);
//     j++;
//   }
// }
// console.log(a3);

//? even r oddnumber
// let i = 5;
// if (i % 2 == 0) {
//   console.log(`given ${i} is a even number`);
// } else {
//   console.log(`given ${i} is a odd number`);
// }

//? fibanocci series

// let n1 = 0;
// let n2 = 1;
// let nextTerm;
// for (let i = 1; i <= 5; i++) {
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm;
// }

// let Employees = [
//   {
//     emp_id: "typ1",
//     emp_name: "smith",
//     emp_salary: "20000",
//   },
//   {
//     emp_id: "typ2",
//     emp_name: "king",
//     emp_salary: "2000",
//   },
//   {
//     emp_id: "typ3",
//     emp_name: "blake",
//     emp_salary: "30000",
//   },
//   {
//     emp_id: "typ4",
//     emp_name: "rohan",
//     emp_salary: "40000",
//   },
//   {
//     emp_id: "typ5",
//     emp_name: "applesiri",
//     emp_salary: "100000",
//   },
// ];

// let salary = Employees.sort((val, ind) => {
//   return val.emp_salary - ind.emp_salary;
// });
//  console.log(salary);

//  ?permutations

// str = "ABC";
// rem = "";
// function call(str, rem) {
//   if (str.length === 0) {
//     console.log(rem);
//   }
//   for (let i = 0; i < str.length; i++) {
//     newstr = str[i];
//     newrem = str.slice(0, i) + str.slice(i + 1);
//     call(newrem, rem + newstr);
//   }
// }
// call(str, rem);

// ? requirement question
// let arr1 = [9, 2, 4, 4, 9, 7, 3];
// let arr2 = [...new Set(arr1)];
// let arr3 = [];
// for (i of arr2) {
//   arr3.push(i);
// }
// arr3 = arr3.sort((a, b) => b - a);
// let key = prompt("enter the key");
// for (i = 0; i < key; i++) {
//   console.log(arr3[i]);
// }

// ?no of words in sentence
// let str = "hello hi good evening";
// let str1 = "";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (
//     (i == 0) && (str.charAt(i) != "") ||
//     (str.charAt(i) != " ") && (str.charAt(i - 1) == " "))
//   {
//     str1+=str.charAt(i).toUpperCase()
//     count++;
//   } else {
//     str1+=str.charAt(i).toLowerCase()
//   }
// }
// document.write(count);
// document.write(`<br/>`)
// document.write(str1)

// let m = prompt("enter the bag size and different weights in the mars");

// let earth = prompt("Enter similar stones on the earth");
// let mars = [];
// for (let i = 1; i <= m; i++) {
//   mars.push(i);
// }

// for (let i = 0; i < m; i++) {
//   for (j of earth) {
//     if (mars[i] == j) {
//       mars.splice(i, 1);
//     }
//   }
// }

// let sum = 0;
// for (let i = 0; i < mars.length; i++) {
//   sum += mars[i];
//   if (sum > m) {
//     sum = i;
//     break;
//   }
// }

// for (let i = 0; i < sum; i++) {
//   document.write(mars[i]);
// }

// let num = 6;
// let fact

// let a1 = [29, 45, 60, 90];

// for (let i = 0; i <= a1.length; i++) {
//   if (a1[i] < a1[i + 1]) {
//     for (let j = a1[i]; j < a1[i + 1]; j++) {
//       if (j % 2 == 0) {
//         console.log(j);
//       }
//     }
//   } else {
//     for (let j = a1[i]; j > a1[i + 1]; j--) {
//       console.log(j);
//     }
//   }
// }

let data = ["123a", "123", "123ayur", "abcd", "abc123"];
for (i of data) {
  // let d = false;
  // let a = false;

  for (let j = 0; j < i.length; j++) {
    // if ((i.charCodeAt(j) >= 65 && i.charCodeAt(j) <= 90)) {
    //   // a = true;
    //   console.log(i);
    // }
    if (typeof i === "number") {
      // d = true;
      console.log(i);
    }
  }
  // if (a == d) {
  //   console.log(i);
  // }
}

// let obj = [
//   {
//     name: "dhana",
//     place: "ap",
//   },
//   {
//     name: "kuladeep",
//     place: "ap",
//   },
//   {
//     name: "govi",
//     place: "chennai",
//   },
//   {
//     name: "ramana",
//     place: "banglore",
//   },
// ];
// let a = [];
// for (e of obj) {
//   a.push(e.place);
// }

// let s = new Set(a);
// for (k of s) {
//   let count = 0;
//   for (l of obj) {
//     if (k == l.place) count++;
//   }
//   console.log(`the ${k} count is ${count}`);
// }

