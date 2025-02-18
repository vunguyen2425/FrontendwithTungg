// DOM là viết tắt của Document object Model
// DOM là viết tắt của chữ Document Object Model, dịch ra là mô hình các đối tượng trong tài liệu HTML.
// Thông qua mô hình DOM ta có thể truy xuất đến các thẻ HTML một cách dễ dàng.
// DOM gồm 3 thành phần: Element, Attribute, Text

// Dom Document.Chứa toàn bọo tài liệuliệu
// console.log(document)
// end dom document

// dom element
// const icon=document.getElementById("icon");
// icon.classList.add("background");
// console.log(icon);

// const listH2= document.getElementsByTagName("h2");
// console.log(listH2);
// console.log(listH2[0]);
// console.log(listH2[2]);

// const tIu= document.getElementsByClassName("inner-title");
// console.log(tIu);

// const khe= document.querySelector(".box-1 .box-2 h2 .link");
// khe.classList.add("active");
// console.log(khe);

// const tieu=document.querySelectorAll(".link");
// console.log(tieu);
// // end dom element

// // dom html
// // láy nội dung và thay đổi 
// const boxnw=document.getElementById("icon");
// console.log(boxnw);
// console.log(boxnw.innerHTML);
// listH2.innerHTML="TEST";
// console.log(listH2.innerHTML);

// const contenth21= boxnw.innerText;
// console.log(contenth21);
// const contenth22= boxnw.textContent;
// console.log(contenth22);


// const productList=document.querySelectorAll(".product-item");
// console.log(productList);
// [...productList].forEach(item => {
//     console.log(item);
// });
// [...productList].forEach(item => {
//     const data=item.getAttribute("data-id");
//     console.log(data);
// });
// let cart=[];
// [...productList].forEach(item => {
//     const data=item.getAttribute("data-id");
//     cart.push(data);
// });
// console.log(cart);

// [...productList].forEach(item => {
//     item.setAttribute("data-category","234");
//     item.setAttribute("class","product-item product-test")
// });

// const h3=document.querySelector("#heo");
// console.log(h3);
// h3.style.color="red";
// h3.style.fontSize="50px";
// h3.style.fontWeight="bold";
// h3.style.backgroundColor="blueViolet";
// end dom html
// dom css
// end dom css
