// ให้เขียนโค้ดแสดงสูตรคูณตั้งแต่ แม่ 2 ถึง แม่ 12 โดยแสดงผลออกมาใน console  
// 2 x 1 = 2  
// 2 x 2 = 4  
// ...  
// หมายเหตุ : คำสั่งขึ้นบรรทัดใหม่ใน console ให้ใช้ \n

for (let i = 2; i <= 3; i++) {
    console.log('สูตรคูณ ${i}');
    for (let j = 1; j <= 12; j++) {
        console.log('${i} * ${j} = ${i * j}');
    }
    console.log('\n');
}
console.log('end...');