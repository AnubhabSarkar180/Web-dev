const inputBox= document.getElementById("inputBox");

const listContainer= document.getElementById("listContainer");
const btn= document.getElementById("btn");

const cross=document.getElementsByTagName("i");

btn.addEventListener("click",function()
{
    if(inputBox.value==="")
    {
        alert("Enter something");
    }
    else{
    let li= document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);    
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    }
    inputBox.value="";
})

const span= document.getElementsByTagName("span");
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
    }
},false)