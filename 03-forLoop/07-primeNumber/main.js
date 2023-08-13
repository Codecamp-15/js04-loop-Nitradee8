// ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100
// - Program : จำนวนที่กำหนดให้เป็นจำนวนเฉพาะหริอป่าว?



// // หาจำนวนเฉพาะ 1 ตัวเลข
// let n = 5;
// let isPrime = true; // flag
//     // 5/1
//     // 5/2
//     // 5/3
//     // 5/4
//     // 5/5

// for(let divider = 2; divider < n; divider++) {
//     // divider 2,3,4...,n-1
//     if(n % divider == 0) isPrime = false;
//     // n=2   5/2 = 2.5 => isPrime =true
//     // n=3   5/3 = 1.6 => isPrime =true
//     // n=4   5/4 = 1.25 => isPrime =true
//     // n=5  
// }
// if (isPrime) console.log('number ${n} is prime number');
// else console.log('number ${n} not prime number')



// หาจำนวนเฉพาะตั้งแต่ 1 ถึง 100
for (let n = 2; n <= 100; n++);
let isPrime = true;
for (let divider = 2; divider < n; divider++) {
    if(n % divider == 0) isPrime = false;
}
if (isPrime) console.log('n');