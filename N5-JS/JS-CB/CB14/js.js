// isNaN()
// Dùng để kiểm tra một biến có phải là NaN không.
var a = 10;
var b = "Test";
var result = a / b;
console.log(result); // Trả về NaN
console.log(typeof result);
if(typeof result == "number") {
  console.log("Đây là số " + result);
}
console.log(isNaN(result)); //  Trả về true
if(isNaN(result)) {
  console.log("Số này bị lỗi!");
} else {
  console.log("Đây là số " + result);
}
// end isNaN()
// toString()
var a = 10;
var b = a.toString();
var c = (10).toString();
console.log(a); // Trả về số 10
console.log(typeof a); // Trả về kiểu number
console.log(b); // Trả về chuỗi 10
console.log(typeof b); // Trả về kiểu string
console.log(c); // Trả về chuỗi 10
console.log(typeof c); // Trả về kiểu string
// end toString()
// toFixed()
var a = 12.3456;
console.log(a.toFixed()); // Trả về 12
console.log(a.toFixed(0)); // Trả về 12
console.log(a.toFixed(1)); // Trả về 12.3
console.log(a.toFixed(2)); // Trả về 12.35
console.log(a.toFixed(3)); // Trả về 12.346
// end toFixed()
