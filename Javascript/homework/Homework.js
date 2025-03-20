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

// const heading=document.createElement("h2");
// heading.innerText="Click below to see the counter";
// const newButton=document.createElement("button");
// newButton.innerText="Click me";
// const newPara=document.createElement("p");
// const container=document.body;
// container.append(heading);
// container.append(newButton);
// container.append(newPara);
// const newSpan=document.createElement("span");
// newSpan.innerText("This is a new span");
// newPara.append(newSpan);
// let counter=0;
// newButton.addEventListener("click",function()
// {
//     counter+=1;
//     newSpan.innerText(counter);
// })