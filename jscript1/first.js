let inp=document.querySelector("input");
let btn=document.querySelector("button");
let lis=document.querySelector("li");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    console.log(inp.value);

    let del=document.createElement("button");
    del.classList.add("button");
    del.innerText="Delete";
    item.appendChild(del);

});
ul.addEventListener("click" , function(){
    console.log("Element clicked");
    
})

// let delBtns=document.querySelectorAll(".delete");
// for(debtn of delBtns){
// debtn.addEventListener("click",function(){
//     let par=this.parentNode;
//     par.remove();
// })
// }