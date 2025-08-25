const para=document.querySelector("p");
const btn=document.querySelector("button");
btn.addEventListener("click",function()
{
   para.innerText="Anubhab Sarkar";
})
const body=document.body;
const colors=document.getElementById("changeColor");
colors.addEventListener("click",function()
{
    body.style.backgroundColor=(body.style.backgroundColor==="blue"?"white":"blue");
})

// const newDiv=document.createElement("div") ;
// newDiv.innerText="New Div Box created";
// document.body.append(newDiv);
// const box=document.querySelector("div");
// const butn=document.createElement("button");
// document.box.append("butn");

// const newButton=document.getElementsByClassName("click");
const newSpan=document.querySelector("span");
let counter=0;
newButton.addEventListener("click",function()
{
    counter+=1;
    newSpan.innerText=counter;
})

const inp=document.getElementById("input_box")
const disp=document.getElementById("display")
inp.addEventListener("input",function(event)
{
    disp.innerText=event.target.value;
})