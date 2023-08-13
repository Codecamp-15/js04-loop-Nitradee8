// ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี
// let result = 1+2+3+4+5+6+7+8+9+10....

// 1.หาผลรวมตัวเลขทุกตัว

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     sum = 0;
//     sum = sum + i;
//     // sum = 0 + 1 => 1
//     // sum = 1 + 2 => 3
//     // sum = 3 + 3 => 6
//     // sum = 6 + 4 => 7
// } 

// console.log(sum);

// 2.หาผลรวมเฉพาะเลขคู่ และ ผลรวมเฉพาะเลขคี่

let sumEven = 0;
let sumOdd = 0;
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
    if (i % 2 == 0) sumEven += i;
    else sumOdd += i;
}

console.log(sumEven, sum - sumEven, sumOdd);

// 3.หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)

// let sumEvenSquare = 0;
// let sumThirdSquare = 0;

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         // console.log('${i}^2');
//         sumEvenSquare = sumEvenSquare + i ** 2; 
//     }

//     if (i % 3 === 0) {
//         // console.log('${i}^2');
//         sumThirdSquare = sumThirdSquare + i ** 2; 
//     }
// }

// console.log('sumEvenSQ : ${sumEvenSquare}');
// console.log('sumThirdSQ : ${sumThirdSquare}');
// console.log('Result is : ${sumEvenSquare - sumThirdSquare}');


// // ตย.1
// // let sum = 0

// for (let j = 1; j <= 100; j++) {
//     // console.log(j); 
//   if (j % 2 === 0) {console.log(j)}
//   if (j % 3 === 0) {console.log('divide3=0', j)
//     // console.log(j)
//   }
//   else {
//     console.log('odd',j)
//   }
//   // sum = sum + j
// } 



// 3 หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)

let sumEvenSquare = 0;
let sunThirdSquare = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        // console.log('${i}^2');
        sumEvenSquare = sumEvenSquare + i ** 2;
    }
}

console.log('sumEvenSQ : ${sumEvenSquare}');
console.log('sumThirdSQ : ${sumThirdSquare}');
console.log('Result is : ${sumEvenSquare - sumThirdSquare}');