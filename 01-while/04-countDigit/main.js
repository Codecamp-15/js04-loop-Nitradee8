// ให้เขียนโค้ดเพื่อนับจำนวนหลักเลขโดด  
//     - รับค่าตัวเลขจากผู้ใช้งาน  
//     - แสดงผลลัพธ์เป็นจำนวนหลักของตัวเลข

console.log('Problem 4');

let n = +prompt('Enter number');
    // console.log(n);

    
    // PATTERT RECOGNITION
    // 1150 / 10 => 115 => count = 1;
    // 115 / 10 => 11.5 => count = 2;
    // 11.5 / 10 => 1.15 => count = 3;
    // 1.15 /10 => 0.115 => count = 4;

    let count = 0;
    while (n >= 1) {
        console.log(n);
        count++;
        n = n / 10;
    }

    console.log(count);
