// arguments: Chỉ sử dụng được trong hàm và trả về một mảng
// function tinhTong(){
//   console.log(arguments);
// }
// let ketQua=tinhTong(10,20,30,40); 
// [10,20,30,40]
// end arguments

// ứng dụng arguments
// function tinhTong(){
//   let tong=0;
//   for (item of arguments){
//     tong +=item;
//   }
//   return tong;
// }
// let ketQua=tinhTong(10,20,30,40,50,60); 
// console.log(ketQua);
// end ứng dụng arguments

// return:Từ khóa return: sẽ trả về kết quả nằm ở bên phải của chữ return. Những dòng code ở bên dưới return sẽ không hoạt động.

// Nếu đặt trùng tên hàm khi ta gọi hàm thì việc gọi hàm này sẽ chạy vào hàm cuối cùng.
// Nếu một biến được định nghĩa ở trong function thì biến đó chỉ sử dụng được ở trong function đó thôi (Kể cả biến var). Nhưng khai báo biến var trong if else thì bên ngoài vẫn gọi được.
// Nếu hàm A nằm trong hàm B thì hàm A chỉ gọi được ở trong hàm B thôi, không gọi được ở bên ngoài hàm B.

// hàm định nghĩa: Có tính hoisting (tức là gọi được hàm trước lúc khai báo hàm đó).
// let ketQua=tinhTong(10,20,30,40,50,60); 
// console.log(ketQua);
  
// function tinhTong(){
//   let tong=0;
//   for (item of arguments){
//     tong +=item;
//   }
//   return tong;
// }
// end hàm tính tổng

// Expression function (Hàm biểu thức)
// Không có tính hoisting (Nếu gọi hàm trước lúc khai báo hàm thì sẽ gặp lỗi).
//  const tinhTong=function(){
//   let tong=0;
//   for (item of arguments){
//     tong +=item;
//   }
//   return tong;
// }
// let ketQua=tinhTong(10,20,30,40,50,60); 
// console.log(ketQua);
// end hàm biểu thức

// Arrow function  (Hàm mũi tên)
// Không có tính hoisting (Nếu gọi hàm trước lúc khai báo hàm thì sẽ gặp lỗi).không có cả tính arguments
// var tinhTong=(...test) => {
//   let tong=0;
//   for(item of test){
//     tong +=item;
//   }
//   return tong;
// }
// let ketQua=tinhTong(10,20,30,40,50);
// console.log(ketQua);
// // end hàm mũi tên

// 1.3
// Ví dụ 1
// const mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const tongSoChan = (array) => {
//   let tong = 0;

//   for(let i = 0; i < array.length; i++) {
//     if(array[i] % 2 == 0) {
//       tong += array[i];
//     }
//   }

//   return tong;
// }

// const result = tongSoChan(mang);
// console.log(result);

// Ví dụ 2: bieuThuc = 1/n + 2/n + 3/n + ... + n/n
// const bieuThuc = (n) => {
//   let result = 0;

//   for(let i = 1; i <= n; i++) {
//     result += i/n;
//   }

//   return result;
// }

// let n;
// do {
//   n = parseInt(prompt("Nhập n:"));
//   if(n <= 0) {
//     console.log('Vui lòng nhập số lớn hơn 0!');
//   } else {
//     const result = bieuThuc(n);
//     console.log(result);
//   }
// } while (n <= 0);