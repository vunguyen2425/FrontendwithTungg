// function tinhtong(a,b){
//     return(a+b);
// }
// let ketQua=tinhtong(10,20);
// console.log(ketQua);
// Viêts nhiều như thế sex khá phức tạp nên sữ dụng arguments
// function tinhtong(){
//     console.log(arguments);
// }
// let ketQua=tinhtong(10,20);
function tinhTong(){
    let tong=0;
    for(item of arguments){
        tong+=item;
        console.log(item);
    }
    return tong;
}
let ketQua=tinhTong(10,20,30,40,50,60);
console.log (ketQua);