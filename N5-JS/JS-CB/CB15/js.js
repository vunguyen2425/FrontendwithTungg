 // tostring
var list=['HTML','JS','css'];
console.log(list.toString());
// end tostring
// join Dải phân cách
var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.join()); // Trả về: "HTML5,CSS3,Javascript"
console.log(list.join(",")); // Trả về: "HTML5,CSS3,Javascript"
console.log(list.join("")); // Trả về: "HTML5CSS3Javascript"
console.log(list.join(", ")); // Trả về: "HTML5, CSS3, Javascript"
console.log(list.join(" - ")); // Trả về: "HTML5 - CSS3 - Javascript"
console.log(list.join(" test "));
// end join
// pop
var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.pop()); // Trả về: "Javascript"
console.log(list); // Trả về: ["HTML5", "CSS3"]
// end pop
// push
var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.push("Bootstrap 4", "ReactJS")); // Trả về: 5
console.log(list);
// Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
// end push
// shift
var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.shift()); // Trả về: "HTML5"
console.log(list); // Trả về: ["CSS3", "Javascript"]
// end shift
// unshift
var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.unshift("Bootstrap 4", "ReactJS")); // Trả về: 5
console.log(list);
// Trả về: ["Bootstrap 4", "ReactJS", "HTML5", "CSS3", "Javascript"]
// end unshift
// splice
// Ví dụ 1: Chèn phần tử mới vào mảng
var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.splice(2, 0, "Bootstrap 4", "ReactJS")); // Trả về: []
console.log(list);
// Trả về: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS", "Javascript"]

// Ví dụ 2: Xóa phần tử trong mảng
var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.splice(1, 1)); // Trả về: ["CSS3"]
console.log(list); // Trả về: ["HTML5", "Javascript"]

// Ví dụ 3: Xóa phần tử và chèn phần tử mới vào mảng
var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.splice(2, 1, "Bootstrap 4", "ReactJS"));
// Trả về: ["Javascript"]
console.log(list);
// Trả về: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS"]
// end splice
// concat
var list = ["HTML5", "CSS3", "Javascript"];
var list2 = ["Bootstrap 4", "ReactJS"];
var list3 = list.concat(list2);
console.log(list3);
// Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
console.log(list);
// // Trả về: ["HTML5", "CSS3", "Javascript"]
// end concat
// slice
var list = ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"];
console.log(list.slice(3)); // Trả về: ["Bootstrap 4", "ReactJS"]
console.log(list.slice(1, 3)); // Trả về: ["CSS3", "Javascript"]
console.log(list.slice(-3, -1)); // Trả về: ["Javascript", "Bootstrap 4"]
console.log(list);
// Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
// end slice