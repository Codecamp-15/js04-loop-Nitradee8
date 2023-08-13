// - ให้คำนวณเงินฝากสะสมโดยปีที่ 1 มีเงินเริ่มต้น 100,000 ธนาคารให้ดอกเบี้ยร้อยละ 2.5 ต่อปี
// - โดยจ่ายดอกเบี้ยปีละครั้ง ดอกเบี้ยที่ได้จะสะสมและทบยอดไปในเงินฝากปีถัดไป
// - เมื่อครบ 10 ปี จะมียอดเงินฝากสะสมเท่าใด (ไม่มีการฝากเพิ่มและถอนออก)

// interrestRate = 2.5
// balance = 100_000

// newBalance = balance + interest
// percent : per-century
// newBalance = balance + (balance * (interestRate/100))

const interrestRate = 2.5; // อัตราดอกเบี้ยร้อยละ 2.5
let balance = 100000; // เงินเริ่มต้น 100,000 บาท

for (let year = 1; year <= 10; year++) {
    const interest = (balance * interrestRate) / 100; // ดอกเบี้ยสะสมปีนี้
    balance += interest; // เพิ่มยอดเงินฝากสะสมด้วยดอกเบี้ย
}

console.log(`ยอดเงินฝากสะสมหลังจบ 10 ปี: ${balance.toFixed(2)} บาท`);
