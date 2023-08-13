// ให้เขียนเกมส์ทายตัวเลขสำหรับผู้เล่นสองคน โดยมีเงื่อนไขดังนี้

// 1- ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนแรกพิมพ์เลข ที่อยู่ระหว่าง 1 ถึง 99 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
// 2- ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนที่สองทายเลข จนกว่าจะถูก
// 3- ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
// 4- หากพิมพ์ถูกให้แสดงคำว่าถูกต้อง และให้แสดงจำนวนครั้งที่ทาย

// Program 1- : Input User --V.1***
// let ansNumber = prompt('Enter your magic number'); // => null, string : "", ".....", "qweqeq", "12"

// // let isNull = ansNumber === null;
// // let isEmpty = ansNumber.trim() ===''
// // let isNan = isNan(ansNumber)

// let isValid = ansNumber == null || ansNumber.trim() ==='' || isNan(ansNumber);
// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
// let isInRange = Number(ansNumber) >= 1 && Number(ansNumber) <= 99;

// if (isValid) {
//     alert('Invelid Input');
// } else if ('outOfRange');
//     alert('Invalid Range');
// } else if

// Program 1- : รับ Input ได้เรื่อยๆ จนกว่าจะพิมพ์ถูก / แต่ให้กด ESC เพื่อจบโปรแกรม --V.2***
                          
// let ansNumber = ''
// let isEmpty;
// let isNan;
// let outOfRange;

do {
    ansNumber = prompt('Enter your magic number') || ''; // null
    isEmpty = ansNumber.trim() === '';
    isNan = isNan(ansNumber);
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
    if(isEmpty || isNan) {
        alert('Invalid Input. Try 1-99');
    } else if (outOfRange) {
        alert('Invaild Range, Try 1-99');
    }

} while(isEmpty || isNan);


// Program 2 : Guess
// -ทายซ้ำ
// -Hint OutOfRange
// -Hint Invalid Range
// -Hint Too High, Too Low
let gussNumber;

do {
    guessNumber = prompt('Enter your answer') || '';
    isEmpty = guessNumber.trim() === '';
    isNan = isNan(guessNumberr);
    outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;
    if(isEmpty || isNan) {
        alert('Invalid Input. Try 1-99');
    } else if (outOfRange) {
        alert('Invaild Range, Try 1-99');
    } else if (+guessNumber >+ansNumber) {
        alert('Too High');
    } else if (+guessNumber >+ansNumber) {
        alert('Too Low');
    } else if (+guessNumber === +ansNumber) {
        alert('Correct');
    }
} while(+gussNumber != +ansNumber);