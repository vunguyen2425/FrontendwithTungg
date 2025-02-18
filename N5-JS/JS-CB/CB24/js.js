function hamMot(){
    console.log('viec 1');
}
function hamHai(){
    console.log('viec 2');
}
const button = document.querySelector("#button");
// button.onclick =function(){
//     hamMot();
//     hamHai();
// }
// button.onclick =function(){
//     hamMot();
  
// }
// button.onclick =function(){
  
//     hamHai();
// }
// button.addEventListener("click",function(){
//     hamMot();
// })
// button.addEventListener("click",function(){
//     hamHai();
// })
button.addEventListener("click",hamMot);

button.addEventListener("click",hamHai);
setTimeout(()=>{
    button.removeEventListener("click",hamHai);
},5000)