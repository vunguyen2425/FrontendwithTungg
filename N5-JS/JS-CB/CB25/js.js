
    // const div = document.createElement("div");
    // div.innerHTML = "Quảng cáo...";
    // console.log(div);

    // setInterval(() => {
    //     const divAds = document.querySelector("#ads");
    //     divAds.appendChild(div);
    // }, 3000);

    // const text = document.createTextNode("Quarng ca 2"); 


    const buttonadd= document.querySelector("#buttonADD");
    const menu =document.querySelector("#menu");
    // const newItem=document.createElement("li");
    // newItem.innerHTML = "Item Moi";
    buttonadd.onclick= function(){
        const newItem=document.createElement("li");
        newItem.innerHTML = "Item Moi";
        menu.appendChild(newItem);
        // menu.insertBefore(newItem,firstElement);
    }
const listItem=menu.querySelectorAll("li");
listItem.forEach(item => {
    item.onclick=function(){
        // menu.removeChild(item);
        const newItem=document.createElement("li");
        newItem.innerHTML = "Item Moi";
        menu.replaceChild(newItem,item);
    }
});
