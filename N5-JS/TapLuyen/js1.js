// // string
// var myString=' Bố mày là Vũ. Nguyễn Trọng Vũ, nhìn cái lồn! ';
// console.log(myString.length);
// console.log(myString.indexOf('Tôi'));
// console.log(myString.indexOf('lồn'));
// console.log(myString.indexOf('Vũ',3));
// console.log(myString.indexOf('Vũ',20));
// console.log(myString.indexOf('Vũ',40));
// console.log(myString.lastIndexOf("Tôi", 10)); 
// console.log(myString.lastIndexOf("lồn", 45)); 
// console.log(myString.lastIndexOf("Vũ", 10)); 
// console.log(myString.lastIndexOf("Vũ", 9)); 
// console.log(myString.slice(10, 21))
// console.log(myString.slice(-1)); // . (Lấy ký tự cuối cùng của chuỗi)
// console.log(myString); // Vẫn giữ nguyên chuỗi gốc
// console.log(myString.replace("lồn", "Đầu Buồi"));
// console.log(myString.replace(/Vũ/g, "Vũ- tên Tục")); // Regex là gì?. chữ g là đại diện cho global.:Thay toàn cục
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());
// console.log(myString);
// console.log(myString.trim());
// console.log(myString.charAt());
// console.log(myString.charAt(0)); // Lấy ký tự đầu tiên ĐĐ
// console.log(myString.charAt(1)); // Lấy ký tự thứ 2
// console.log(myString.charAt(myString.length - 3));
// console.log(myString.charAt(myString.length - 1)); // Lấy ký tự cuối cùng

// var myString = `HTML5, CSS3, Javascript`;
// console.log(myString.split()); // Cả string là 1 phần tử
// console.log(myString.split("")); // Mỗi ký tự là 1 phần tử
// console.log(myString.split(", ")); // Mỗi từ là 1 phần tử
// console.log(myString.split(", ", 2)); // Mỗi từ là 1 phần tử, lấy tối đa 2 phần tử
// // end replace()
// // end string
// // number
// var a=10;
// var b='10';
// var c=a/b;
// var d=a+b;
// console.log(typeof c);
// if(isNaN(c)) {
//     console.log("Số này bị lỗi!");
//   } else {
//     console.log("Đây là số " + c);
//   }
//   console.log(typeof d);
// if(isNaN(d)) {
//     console.log("Số này bị lỗi!");
//   } else {
//     console.log("Đây là số " + d);
//   }

//   var m = 12.3456;
//   console.log(m.toFixed()); // Trả về 12
//   console.log(m.toFixed(0)); // Trả về 12
//   console.log(m.toFixed(1)); // Trả về 12.3
//   console.log(m.toFixed(2)); // Trả về 12.35
//   console.log(m.toFixed(3)); // Trả về 12.346

// var e = (10).toString();
// console.log(e.indexOf('0'));
// // end number
// aray
 var list=['HTML','CSS','Javascript','java'];
//  console.log(list.toString());
//  console.log(list.join());
//  console.log(list.join(''));
//  console.log(list.join('-'));
//  console.log(list.join('test'));
//  console.log(list.pop());
//  console.log(list);
//  console.log(list.push());
//  console.log(list.push('ditconmemay'));
//  console.log(list.shift());
//  console.log(list.unshift("Bootstrap 4", "ReactJS")); // Trả về: 5
//  console.log(list);
//  splice
        // console.log(list.splice(2, 0, "Bootstrap 4", "ReactJS"));
        // console.log(list);
        console.log(list.splice(2, 1, "Bootstrap 4", "ReactJS"));
        console.log(list);
// end splice
// var list1 = ["HTML5", "CSS3", "Javascript"];
// var list2 = ["Bootstrap 4", "ReactJS"];
// var list3 = list1.concat(list2);
// console.log(list3);


var list = ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"];
console.log(list.slice(3)); // Trả về: ["Bootstrap 4", "ReactJS"]
console.log(list.slice(1, 3)); // Trả về: ["CSS3", "Javascript"]
console.log(list.slice(-3, -1)); // Trả về: ["Javascript", "Bootstrap 4"]
console.log(list);
console.log(list.slice(2))
// end aray