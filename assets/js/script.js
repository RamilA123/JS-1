"use strict"

// Task 1
// let n = prompt("Enter the number: ");
// if (n % 3 == 0 && n % 7 == 0){
//     console.log("Divided by 3 and 7.");
// }
// else
// {
//     console.log("Not divided by 3 and 7.");
// }



// Task 2
// let n = prompt("Enter the first number: ");
// let m = prompt("Enter the second number: ");
// let result;
// if (n % 2 == 0 && m % 2 == 0){
//     result = Number(n) + Number(m);
//     console.log(result);
// }
// else{
//     result = n - m;
//     console.log(result);
// }



// Task 3
// let n = prompt("Enter the first number: ");
// let m = prompt("Enter the second number: ");
// let count = 0;
// for (let i=Number(n); i<Number(m); i++)
// {
//     if(i % 2 == 1){
//         count++;
//     }
// }
// console.log(`Count of odd numbers between ${n} and ${m} = ${count}`);



// Task 4
// let n = prompt("Enter the first number: ");
// let m = prompt("Enter the second number: ");
// let sum = 0;
// for (let i=Number(n); i<Number(m); i++)
// {
//     if(i % 2 == 1){
//         sum+=i;
//     }
// }
// console.log(`Sum of odd numbers between ${n} and ${m} = ${sum}`);



// Task 5
// let n = prompt("Enter the first number: ");
// let m = prompt("Enter the second number: ");
// console.log("Odd numbers");
// for (let i=Number(n); i<Number(m); i++)
// {
//     if(i % 2 == 1){
//         console.log(i);
//     }
// }



// Practice 1 - 1 method
// let num = prompt("Enter the number: ");
// let count=0;
// if (num == 0 || num == 1){
//     console.log("Neither prime nor composite number.");
// }
// else if(num<0){
//     console.log("It is a negative number.");
// }
// else{
//     for (let i = 2; i<num; i++) {
//         if (num % i == 0){
//             count++;
//             break;
//         }  
//     }
//     if (count==0){
//         console.log("It is a prime number.");
//     }
//     else{
//         console.log("It is a composite number.");
//     }
// }



// Practice 1 - 2 method
// let num = prompt("Enter the number: ");
// if (num == 0 || num == 1){
//     console.log("Neither prime nor composite number.");
// }
// else if(num<0){
//     console.log("It is a negative number.");
// }
// else{
//     for (var i = 2; i<num; i++) {
//         if (num % i == 0){
//             console.log("Is is a composite number.");
//             break;
//         }  
//     }
//    if (i==num){
//     console.log("It is a prime number.");
//    }
// }



// Practice 2
// let count=0;
// for(let i=1; i<=100; i++)
// {
//     if(i % 2 == 1){
//         count++;
//     }
// }
// console.log("Count = ",count);



// Practice 3
// let temp = prompt("Enter the temperature: ");
// if (temp<0)
// {
//     console.log("Soyuqdur.");
// }

// else if (temp>=0 && temp<20)
// {
//     console.log("Serindir.");
// }

// else if (temp>=20 && temp<=40)
// {
//     console.log("Istidir.");
// }

// else
// {
//     console.log("Çox istidir.");
// }

