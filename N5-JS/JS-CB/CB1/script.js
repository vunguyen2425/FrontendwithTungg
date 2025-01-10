// var button = document.querySelector("button");
// button.onclick = function () {
//   alert("Hello World!");
// }

// var a = 10;
// var b = 20;
// var c = a + b;

// console.log(c);

// var hoVaTen = "Đặng Phương Nam";



// 3.1. Arithmetic (Toán tử số học)
  var a = 10;
  var b = 3;
  var fullName = "Nam Dang";

  var c = a + b;
  console.log(c);

  // var d = a + fullName; // 10 + "Nam Dang" --> "10Nam Dang"
  // console.log(d);

  // var e = b - a;
  // console.log(e);

  // var f = a * b;
  // console.log(f);

  // var g = a / b;
  // console.log(g);

  // var h = a / b;
  // console.log(h);

  // var i = a * b;
  // console.log(i);

  // var k = a ** b;
  // console.log(k);

  // var l = a % b;
  // console.log(l);

  // var m = ++a; // cộng trước rồi mới gán giá trị
  // console.log(m);

  // var m = a++; // gán giá trị xong mới cộng cho a
  // console.log(m);

  // var n = --a; // trừ trước rồi mới gán giá trị
  // console.log(n);

  // var n = a--; // gán giá trị xong mới trừ cho a
  // console.log(n);

  // Ví dụ 1
  // var a = 20;
  // var b = a++ - --a + ++a;
  //   // =  20  -  20 +  21
  //   // =  21
  // console.log(b);

  // Ví dụ 2
  // var a = 20;
  // var b = a++ - a-- + --a * 3;
  //   //  = 20  - 21  +  19 * 3
  //   //  = 56
  // console.log(b);

  // Ví dụ 3
  // var a = 20;
  // var b = --a - ++a + --a - a++ + a-- * 2;
  //   //  =  19 -  20 +  19 - 19  + 20*2
  //   //  =  39
  // console.log(b); // 39

  // Ví dụ 4
  // var a = 20;
  // var b = --a - a++ + a++ - --a + a++ * 2;
  //   //  =  19 - 19  + 20  -  20 + 20*2
  //   //  = 40
  // console.log(b); // 40











// 3.2. Assignment (Toán tử gán)
  // var a = 10;
  // var b = a;
  // console.log(b);


  // var a = 10;
  // var b = 20;
  // b += a; // b = b + a = 20 + 10 = 30
  // console.log(b);


  // var a = 10;
  // var b = 20;
  // b -= a; // b = b - a = 20 - 10 = 10
  // console.log(b);


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





// 3.3. Comparison (Toán tử so sánh)
  // var a = 20;
  // var b = "20";
  // var c = a !== b;
  // console.log(c);




// 3.4. Logical (Toán tử logic)
  // var a = 10;
  // var b = 20;
  // var c = 30;
  // var d = 40;
  // // var e = a > b && c < d;
  // var e = a > b || c < d;

  // console.log(e);
  // console.log(!e);




// 4.1. Kiểu dữ liệu nguyên thủy (Primitive Data)
  // Kiểu Number
    // var a = 10; // Số nguyên
    // var b = 10.5; // Số thực
    // var c = Infinity; // Số dương vô cùng
    // var d = -Infinity; // Số âm vô cùng
    // var e = 10 / "a"; // NaN
    // console.log(e);

  // Kiểu String
    // var msg1 = 'Đây là string dùng dấu nháy đơn';
    // var msg2 = "Đây là string dùng dấu nháy kép";
    // var msg3 = `Đây là string dùng dấu backtick`; // template string trong ES6

  // Kiểu Boolean
    // var isDarkMode = true; // Chế độ dark mode
    // var isDarkMode = false; // Chế độ light mode


  // Kiểu Undefined
    //   var a;
    //   console.log(a);

  // Kiểu Null
    // var a = null;
    // console.log(a);







// 4.2. Dữ liệu phức tạp (Complex Data)
  // Kiểu Function
    // var a = 10 + 20 + 30;
    
    // function tinhTong(a, b, c) {
    //   return a + b + c;
    // }

    // var x = tinhTong(10, 20, 30);
    // console.log(x);

    // S = 3.14 * R;
    // var r1 = 20;
    // var s1 = 3.14 * r1;

    // var r2 = 30;
    // var s2 = 3.14 * r2;

    // function tinhDTHT(r) {
    //   return 3.14 * r;
    // }

    // var s1 = tinhDTHT(r1);
    // console.log(s1);

    // var s2 = tinhDTHT(r2);
    // console.log(s2);
