// giống settimeout nhưng nó lặp lại đều đặn sau mỗi ss
// setInterval(function(){
//     console.log('Bạn vừa đợi 5s')
// },5000)
var counter=0;
setInterval(function(){
    console.log(counter);
    counter++;
},5000)
