// ให้เขียนโค้ดเพื่อหาผลรวมของเลขโดด  
//     - รับค่าตัวเลขจากผู้ใช้งาน
//     - แสดงผลลัพธ์เป็นผลรวมของเลขแต่ละหลัก

// <!-- 4596 === 4+5+9+6 -->
// 1152 => (115 * 10) + 2


    n = int(input("กรุณาป้อนตัวเลข: "));
    let sum = 0;
    
    while (n > 0);
        remainder = n % 10
        n = (n - remainder)
        sum += remainder
    
    print("ผลรวมของเลขโดดคือ:", sum);