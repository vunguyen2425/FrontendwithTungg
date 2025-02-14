


// 2
// const a = 10;

// try {
//   console.log("a = " + a);
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("Luôn chạy vào đây");
// }

// try {
//   console.log("a = " + a);
// } catch (error) {
//   console.log(error);
// }

// console.log("Đây là đoạn code của chương trình khác.");

// 3
// let infoUser = {
//   name: "Đặng Phương Nam",
//   password: "123456"
// };

// // console.log(infoUser);

// infoUser.phone = "0123456789";
// // infoUser.email = "namtest@gmail.com";

// const key = "email";
// // infoUser["email"] = "namtest@gmail.com";
// infoUser[key] = "namtest@gmail.com";

// delete infoUser.password;

// console.log(infoUser);

// 4.1
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;

// numbers.forEach((item) => {
//   sum += item;
// });

// console.log(sum);

// numbers.forEach((item, index) => {
//   numbers[index] = item + 1;
// });

// console.log(numbers);

// numbers.forEach((_, index) => {
//   console.log(index);
// });

// 4.2
// const monHoc = [
//     {
//       ten: "Toán",
//       diem: 8.6,
//     },
//     {
//       ten: "Lý",
//       diem: 9.2,
//     },
//     {
//       ten: "Hóa",
//       diem: 8.5,
//     },
//     {
//       ten: "Tin",
//       diem: 7.8,
//     },
//     // {
//     //   ten: "Tin",
//     //   diem: 9
//     // },
//   ];
  
  // const hocSinhGioi = monHoc.every((item) => {
  //   return item.diem >= 8;
  // });
  
  // if(hocSinhGioi === true) {
  //   console.log("Đây là học sinh giỏi!");
  // } else {
  //   console.log("Đây không là học sinh giỏi!");
  // }
  
  // 4.3
  // const oLaiLop = monHoc.some((item) => {
  //   return item.diem < 4;
  // });
  
  // if(oLaiLop === true) {
  //   console.log("Ở lại lớp!");
  // } else {
  //   console.log("Được lên lớp!");
  // }
  
  // 4.4
  // const monTin = monHoc.find((item) => {
  //   return item.ten === "Tin";
  // });
  
  // console.log(monTin);
  // console.log(monTin.diem);
  
  // const monSinh = monHoc.find((item) => {
  //   return item.ten === "Sinh";
  // });
  
  // console.log(monSinh);
  
  // 4.5
  // const monTin = monHoc.filter((item) => {
  //   return item.ten === "Tin";
  // });
  
  // console.log(monTin);
  
  // 4.6
  // console.log(monHoc);
  
  // const mangMoi = monHoc.map((item) => {
  //   return item.ten;
  // });
  
  // console.log(mangMoi);
  
  // So sánh forEach với map
  // console.log(monHoc);
  
  // const test1 = monHoc.forEach((item) => {
  //   return item.name;
  // });
  // console.log(test1);
  
  // const mangMoi = monHoc.map((item) => {
  //   return item.ten;
  // });
  // console.log(mangMoi);
  
  // 4.7
  // const numbers = [1, 2, 3, 4];
  
  // const sum = numbers.reduce((total, item) => {
  //   console.log(total);
  //   console.log(item);
  //   console.log("---------");
  //   return total + item;
  // }, 5);
  
  // console.log(sum);
  
  // let tongDiem = 0;
  
  // monHoc.forEach(item => {
  //   tongDiem += item.diem;
  // });
  
  // console.log(tongDiem);
  
  // let tongDiem = monHoc.reduce((total, item) => {
  //   return total + item.diem;
  // }, 0);
  
  // console.log(tongDiem);
  
  // let diemTrungBinh = monHoc.reduce((average, item) => {
  //   return average + item.diem/monHoc.length;
  // }, 0);
  
  // console.log(diemTrungBinh);
  








