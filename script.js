var r=Math.random()*6;
r=Math.floor(r)+1;
var b=Math.random()*6;
b=Math.floor(b)+1;

var image1=document.querySelector("#img1");
var image2=document.querySelector("#img2");

image1.setAttribute("src","images/dice"+r+".png");
image2.setAttribute("src","images/dice"+b+".png");

if(r>b)
document.querySelector("h1").innerHTML="Player1 won";
else if(b>r)
document.querySelector("h1").innerHTML="Player2 won";
else
document.querySelector("h1").innerHTML="Draw";
      