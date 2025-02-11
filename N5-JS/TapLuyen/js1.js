// string
var myString=' Bố mày là Vũ. Nguyễn Trọng Vũ, nhìn cái lồn! ';
console.log(myString.length);
console.log(myString.indexOf('Tôi'));
console.log(myString.indexOf('lồn'));
console.log(myString.indexOf('Vũ',3));
console.log(myString.indexOf('Vũ',20));
console.log(myString.indexOf('Vũ',40));
console.log(myString.lastIndexOf("Tôi", 10)); 
console.log(myString.lastIndexOf("lồn", 45)); 
console.log(myString.lastIndexOf("Vũ", 10)); 
console.log(myString.lastIndexOf("Vũ", 9)); 
console.log(myString.slice(10, 21))
console.log(myString.slice(-1)); // . (Lấy ký tự cuối cùng của chuỗi)
console.log(myString); // Vẫn giữ nguyên chuỗi gốc
console.log(myString.replace("lồn", "Đầu Buồi"));
console.log(myString.replace(/Vũ/g, "Vũ- tên Tục")); // Regex là gì?. chữ g là đại diện cho global.:Thay toàn cục
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString);
console.log(myString.trim());
console.log(myString.charAt());
console.log(myString.charAt(0)); // Lấy ký tự đầu tiên ĐĐ
console.log(myString.charAt(1)); // Lấy ký tự thứ 2
console.log(myString.charAt(myString.length - 3));
console.log(myString.charAt(myString.length - 1)); // Lấy ký tự cuối cùng

var myString = `HTML5, CSS3, Javascript`;
console.log(myString.split()); // Cả string là 1 phần tử
console.log(myString.split("")); // Mỗi ký tự là 1 phần tử
console.log(myString.split(", ")); // Mỗi từ là 1 phần tử
console.log(myString.split(", ", 2)); // Mỗi từ là 1 phần tử, lấy tối đa 2 phần tử
// end replace()
// end string