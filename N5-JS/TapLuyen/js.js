// var a=10,b=5,c="10";
// var d0=a+b;
// var d1=a-b;
// var d2=a*b;
// var d3=a/b;
// var d4=a%b;
// var d5=a**b;
// var d6=a+c;
// var d7=a+c;
// var d7=a-c;
// var d8=a*c;
// var d9=a/c;
// var d10=a%c;
// var d11=a**c;
// console.log(d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11)
// var e= a++ - --a+ ++a;
// console.log(e);
// toán tử gán
// var a = 10;
// var b = 20;
// b *= a; // b = b * a = 20 * 10 = 200
// console.log(b);


// var a = 10;
// var b = 20;
// b *= a; // b = b * a = 20 * 10 = 200
// console.log(b);


// var a = 10;
// var b = 20;
// b /= a; // b = b / a = 20 / 10 = 2
// console.log(b);


// var a = 10;
// var b = 21;
// b %= a; // b = b % a = 20 % 10 = 0
// console.log(b);
// end toán tử gán
// Toán Tử So sánh
// var a=10;
// var b="10";
// if (a==b){
//     console.log("a giống hình thức b");
// }
// else if(a===b){
//     console.log("a giống b tuyệt đốiđối")
// }
// end toán tử so sánh
// Toán tử logic
// var a = 10;
// var b = 20;
// var c = 30;
// var d = 40;

// var e = a > b || c < d;

// console.log(e);
// console.log(!e);

// if (a>b||d>c){
//   console.log("True")
// }
// else{
//   console.log("False")
// }

// if (a>b&&d>c){
//   console.log("True")
// }
// else{
//   console.log("False")
// }
// end toán tử logiclogic
// Kiểu dữ liệu nguyên thủy(Giá trị không thy đổi được)

// Có 6 kiểu Number, String,Boolean,Underfiend,Null,Symbol
// // Kiểu Number
//     var a = 10; // Số nguyên
//     var b = 10.5; // Số thực
//     var c = Infinity; // Số dương vô cùng
//     var d = -Infinity; // Số âm vô cùng
//     var e = 10 / "a"; // NaN
//     console.log(e);

//   // Kiểu String
//     var msg1 = 'Đây là string dùng dấu nháy đơn';
//     var msg2 = "Đây là string dùng dấu nháy kép";
//     var msg3 = `Đây là string dùng dấu backtick`; // template string trong ES6

//   // Kiểu Boolean
//     var isDarkMode = true; // Chế độ dark mode
//     var isDarkMode = false; // Chế độ light mode


//   // Kiểu Undefined
//       var a;
//       console.log(a);

//   // Kiểu Null
//     var a = null;
//     console.log(a);

// //  end kiểu dữ liệu nguyên thủyf
//  kiểu dữ liệu phức tạp
// // function
// var r1=20,r2=10;
// function tinhDTHT(r){
//     return 3.14*r;
// }
// var s1=tinhDTHT(r1);
// console.log(s1);
// // end function
// // object
// var inforuser={
//     fullname:"Nguyen Trong Vu",
//     age:18,
//     phone: "012345",
// }
// console.log(inforuser.fullname)
// // end object
// // array
// var listUser=[
//     "Nguyen Tronbg Vu",
//     "Le Thi A",
// ]
// console.log(listUser[1]);
// // end array
// end kiểu dữ liệu phức tạp
// Một số hàm bulkt-in
// var result=confirm('Bạn đã pham tội, Bạn đủ 18 tuổi chưa?');
// if (result=== true){
//     alert ('Vào tù thôi!')
// }
// else{
//     alert ('Vào tại giáo dưỡng nàoo!')
// }
// setTimeout(function () {
//     console.log("Bạn VỪA MẤT 5S ĐỂ SỐNG");
//   }, 55000);
// var counter=0;
// setInterval(function(){
//     console.log(counter);
//     counter++;
// },5000)
// end một số hàm bult-in
// TYPEOF
// var a=10;
// console.log(typeof a);
// END TYPEOF