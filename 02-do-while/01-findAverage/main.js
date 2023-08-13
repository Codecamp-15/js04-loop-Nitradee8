// - ให้เขียนโค้ดเพื่อรับ input มาเป็นตัวเลข
// - โดยให้รับมาเรื่อยๆ จนกว่า ผู้ใช้จะพิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเลข
// - ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา

/*
GET : Input
CHECK : number
IF number
    ADD number to sum
    ADD 1 to count
    BACK TO LINE 7 
ELSE 
    PRINT sum
    PRINT average
*/ 


let sum = 0;
let count = 0;

while (true) {
    let input = prompt("Enter a number:");
    if (input === null || input === "" || input === "0" || isNaN(input)) {
        break;
    }
    let number = parseFloat(input);
    if (!isNaN(number)) {
        sum += number;
        count++;
    }
}

if (count > 0) {
    let average = sum / count;
    console.log("Sum:", sum);
    console.log("Average:", average);
} else {
    console.log("No valid numbers entered.");
}
