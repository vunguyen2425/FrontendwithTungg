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

// //  end kiểu dữ liệu nguyên thủy
// // Kiểu dữ liệu phức tạp
// // Kiểu Function
//     var a = 10 + 20 + 30;
    
//     function tinhTong(a, b, c) {
//       return a + b + c;
//     }

//     var x = tinhTong(10, 20, 30);
//     console.log(x);

    // S = 3.14 * R;
    var r1 = 20;
    var r2 = 30;
    function tinhDTHT(r) {
      return 3.14 * r;
    }

    var s1 = tinhDTHT(r1);
    console.log(s1);

    var s2 = tinhDTHT(r2);
    console.log(s2);




  // Kiểu Object
    // Object
      var infoUser = {
        fullName: "Đặng Phương Nam",
        age: 18,
        phone: "0123456789"
      };
      console.log(infoUser);
      console.log(infoUser.fullName);
      console.log(infoUser.phone);
      console.log(infoUser.age);


    // Array không có key mà chỉ có value
      var listUser = [
        "Le Van A",
        "Nguyen Thi B",
        "Do Van C"
      ];
      console.log(listUser);
      console.log(listUser[0]);
      console.log(listUser[1]);
      console.log(listUser[2]);
// End Kiểu dữ liệu phức tạp

