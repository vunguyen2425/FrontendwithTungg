// các hàm làm việc cùng string

// Length- trả về độh dài của chuỗichuỗi
var fullName = `Le Van A`;
console.log(fullName.length);
// end Length

// indexOf()-trả về vị trí xuất hiện lần đầu tiên. Bắt đầu chuỗi là 0; tính cả khoảng trống
// nếu không tìm thấy sẽ trả về -1
var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
console.log(myString.indexOf("Tôi")); // Trả về 10
// console.log(myString.indexOf("Hải")); // Trả về -1
// console.log(myString.indexOf("Nam")); // Trả về 18
// console.log(myString.indexOf("nam")); // Trả về -1
// console.log(myString.indexOf("Tôi", 11)); // Trả về 23
var myString = `latoilaconlonlatoilaconlon`;
console.log(myString.indexOf("toi"));  // Trả về 22
// Kết hợp cả fromIndex
const text = "Hello, Hello, Hello!";
console.log(text.indexOf("Hello", 7)); // Output: 7
// end indexOf()

// lastIndexOf() trả về vị trí xuất hiện cuôí cùng
// Cú pháp:
// javascript
// string.lastIndexOf(searchValue, fromIndex)
// searchValue (bắt buộc): Chuỗi con cần tìm.
// fromIndex (tùy chọn): Vị trí bắt đầu tìm kiếm ngược từ phải sang trái. Mặc định là độ dài chuỗi - 1 (tức tìm từ cuối chuỗi).

// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.length)
// console.log(myString.lastIndexOf("Tôi", 24)); // Trả về 23
// console.log(myString.lastIndexOf("Tôi", 22)); // Trả về 10
// console.log(myString.lastIndexOf("Tôi", 10)); // Trả về 10
// console.log(myString.lastIndexOf("Tôi", 9)); // Trả về -1
// // end lastIndexOf()

// slice()
// string.slice(startIndex, endIndex)
// startIndex (bắt buộc): Vị trí bắt đầu (0-based). Chuỗi được cắt từ vị trí này.
// endIndex (tùy chọn): Vị trí kết thúc (0-based). Chuỗi được cắt sẽ không bao gồm ký tự tại vị trí này. Nếu không cung cấp, slice sẽ cắt đến cuối chuỗi.
var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
console.log(myString.slice(10, 21)); // Tôi tên Nam
console.log(myString.slice(0)); // Lấy toàn bộ chuỗi
console.log(myString.slice(0, 1)); // X (Lấy ký tự đầu tiên của chuỗi)
console.log(myString.slice(-1)); // . (Lấy ký tự cuối cùng của chuỗi)
console.log(myString); // Vẫn giữ nguyên chuỗi gốc
// end slice()

// replace()
// string.replace(searchValue, newValue)
// searchValue: Chuỗi con hoặc biểu thức chính quy (RegEx) cần thay thế.
// newValue: Chuỗi thay thế.

var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
console.log(myString.replace("Tôi", "Mình"));
// Thay thế hoàn toagn chữ tôi thành chứ MìnhMình
console.log(myString.replace(/Tôi/g, "Mình")); // Regex là gì?
// end replace()

//  toUpperCase() và toLowerCase()
var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
// end  toUpperCase() và toLowerCase()

// trim()
// Xóa khoảng trắng đầu và cuối nhưng không ảnh hưởng đến khoảng trắng ở giữagiữa
var myString = `  Xin chào! Tôi tên Nam.  Tôi năm   nay 18 tuổi.  `;
console.log(myString);
console.log(myString.trim());
// end trim()

// charAt()
// lấy các kí tự theo thứ tựtự
var myString = `Đặng Phương Nam`;
console.log(myString.charAt()); // Lấy ký tự đầu tiên
console.log(myString.charAt(0)); // Lấy ký tự đầu tiên ĐĐ
console.log(myString.charAt(1)); // Lấy ký tự thứ 2
console.log(myString.charAt(myString.length - 1)); // Lấy ký tự cuối cùng
// end charAt()

// split()
// string.split(separator, limit)
// string: Chuỗi mà bạn muốn tách.
// separator (tùy chọn): Ký tự hoặc chuỗi con dùng làm dấu phân tách. Nếu không cung cấp, toàn bộ chuỗi sẽ được coi là một phần tử duy nhất trong mảng.
// limit (tùy chọn): Số lượng phần tử tối đa mà bạn muốn lấy từ kết quả.
var myString = `HTML5, CSS3, Javascript`;
console.log(myString.split()); // Cả string là 1 phần tử
console.log(myString.split("")); // Mỗi ký tự là 1 phần tử
console.log(myString.split(", ")); // Mỗi từ là 1 phần tử
console.log(myString.split(", ", 2)); // Mỗi từ là 1 phần tử, lấy tối đa 2 phần tử
// end split()

