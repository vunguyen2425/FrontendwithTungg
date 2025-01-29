// if
  // var a = 10;
  // var b = 20;

  // if(a > b) {
  //   console.log("a lớn hơn b");
  // } else {
  //   console.log("a nhỏ hơn hoặc bằng b");
  // }
// end if
// 1.3
  // var diemThi = 4;
  // if (diemThi >= 9) {
  //   console.log("Xuất sắc");
  // } else if (diemThi < 9 && diemThi >= 8) {
  //   console.log("Giỏi");
  // } else if (diemThi < 8 && diemThi >= 6.5) {
  //   console.log("Khá");
  // } else {
  //   console.log("Trung bình");
  // }


  // var diemToan = 6.5;
  // var diemTin = 5.5;

  // if(diemToan != null && diemTin != null) {
  //   var diemTrungBinh = (diemToan + diemTin) / 2;

  //   if (diemTrungBinh >= 9) {
  //     console.log("Xuất sắc");
  //   } else if (diemTrungBinh < 9 && diemTrungBinh >= 8) {
  //     console.log("Giỏi");
  //   } else if (diemTrungBinh < 8 && diemTrungBinh >= 6.5) {
  //     console.log("Khá");
  //   } else {
  //     console.log("Trung bình");
  //   }
  // } else {
  //   console.log("Chưa có điểm toán hoặc tin.");
  // }


// 1.4
  // var age = 16;

  // // var check = "";
  // // if(age >= 18) {
  // //   check = "Đã đủ tuổi!";
  // // } else {
  // //   check = "Chưa đủ tuổi!";
  // // }

  // var check = age >= 18 ? "Đã đủ tuổi!" : "Chưa đủ tuổi!";

  // console.log(check);


// 2
var number = 0;

// switch (number) {
//   case 0:
//     console.log("Đây là số 0");
//     break;
//   case 1:
//     console.log("Đây là số 1");
//     break;
//   case 2:
//     console.log("Đây là số 2");
//     break;
//   default:
//     console.log("Không thỏa mãn!");
//     break;
// }


// switch (number) {
//   case 0:
//   case 1:
//     console.log("Đây là số 0 hoặc 1");
//     break;
//   case 2:
//     console.log("Đây là số 2");
//     break;
//   default:
//     console.log("Không thỏa mãn!");
//     break;
// }


// var string = "Hello";
// switch (string) {
//   case "Hello":
//   case"Hi":
//     console.log("Xin chào");
//     break;
//   case "Bye":
//     console.log("Tạm biệt");
//     break;
//   default:
//     console.log("Không thỏa mãn!");
//     break;
// }


// 3
// for(var i = 0; i < 10; i++) {
//   console.log(i);
// }

// for(var i = 9; i >= 0; i--) {
//   console.log(i);
// }

// for(var i = 0; i < 10; i+=2) {
//   console.log(i);
// }

// for(var i = 9; i >= 0; i-=3) {
//   console.log(i);
// }

// for(var i = 1; i <= 10; i++) {
//   for(var j = 1; j <= 10; j++) {
//     console.log(`Hàng ${i} Cột ${j}`);
//   }
// }


// 4
// var infoUser = {
//   fullName: "Đặng Phương Nam",
//   email: "namtest@gmail.com",
//   phone: "0123456789"
// };

// for(key in infoUser) {
//   console.log(key);
//   console.log(infoUser[key]);
// }

// var key = "fullName";
// console.log(infoUser.fullName);
// console.log(infoUser.key);
// console.log(infoUser[key]);


// 5
// var list = ["HTML5", "CSS3", "Javascript"];

// console.log(list);
// console.log(list.length);

// for(var i = 0; i < list.length; i++) {
//   console.log(i);
//   console.log(list[i]);
// }

// for (var item of list) {
//   console.log(item);
// }



// var string = "Đặng Phương Nam";

// for(var i = 0; i < string.length; i++) {
//   console.log(i);
//   console.log(string[i]);
// }

// for (var char of string) {
//   console.log(char);
// }


// 6.1
// var i = 1;
// while(i <= 10) {
//   console.log(i);

//   i++;
// }

// var list = ["HTML5", "CSS3", "Javascript"];
// var i = 0;
// while(i < list.length) {
//   console.log(list[i]);
//   i++;
// }


// 6.2
// var i = 20;
// while(i <= 10) {
//   console.log(i);

//   i++;
// }


// var i = 20;
// do {
//   console.log(i);

//   i++;
// } while(i <= 10);


// 7
// for(var i = 0; i < 10; i++) {
//   console.log(i);
//   if(i == 5) {
//     console.log("Vòng lặp bị dừng.");
//     break;
//   }
// }


// 8
// for(var i = 0; i < 10; i++) {
//   if(i == 5) {
//     continue;
//   }
//   console.log(i);
// }


// 9
// Từ khóa var
  // var a = 10;

  // if(a == 10) {
  //   var b = 20;
  //   console.log(b);
  // }

  // if(true) {
  //   var b = 30;
  //   console.log(b);
  // }

  // console.log(b);







// Từ khóa let
  // var a = 10;
  
  // if(a == 10) {
  //   let b = 20;
  //   b = 30;
  //   console.log(b);
  // }

  // if(true) {
  //   let b = 30;
  //   console.log(b);
  // }

  // console.log(b);




// Từ khóa const
  // var a = 10;

  // if(a == 10) {
  //   const b = 20;
  //   // b = 30;
  //   console.log(b);
  // }

  // console.log(b);






  // if(true) {
  //   const PI = 3.14;
  //   // PI = 5; // Gán lại giá trị là sai
  //   console.log(PI);
  // }






  // let a = 10;

  // if(true) {
  //   a = 20;
  // }

  // console.log(a);






  // var a = 1;
  // let b = 2;

  // if(true){
  //     var a = 3;
  //     let b = 4;
  // }

  // console.log(a)
  // console.log(b)




// Khai báo biến không cần dùng từ khóa
  // Không nên:
    // a = 10;
    // console.log(a);


  // Nên dùng
    // var b = 5;
    // b = 10;
    // console.log(b);