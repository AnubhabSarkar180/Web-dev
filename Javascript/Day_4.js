let num=prompt("Enter a number: ");

if(num>0)
{
    console.log("The number is positive");
}
else if(num<0){
    console.log("The number is negative");
}

else{
    console.log("The number is zero");
}


let age=prompt("Enter your age: ");

if(age<=12 && age>=0)
{
    console.log("You are a child");
}
else if(age>=1 && age<=19)
{
    console.log("You are a teenager");
}
else if(age>=20 && age<=59)
{
    console.log("You are an adult");
}
else if(age>=60)
{
    console.log("You are a senior");
}

let color=prompt("Enter your color: ");

switch(color)
{
    case "red":
        console.log("The color is red");
        break;
    case "blue":
        console.log("The color is blue");
        break;
    case "green":
        console.log("The color is green");
        break;
    default:
        console.log("The color is not recognized");
       
}