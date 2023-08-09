var randomNumber1= Math.random();
randomNumber1=randomNumber1*6+1;
randomNumber1=Math.floor(randomNumber1);

var randomImages1 = "dice"+ randomNumber1 + ".png";

var iamgeSource1 = "./images/" + randomImages1;

var iamge1= document.querySelectorAll("img")[0];
iamge1.setAttribute("src",iamgeSource1);

var randomNumber2= Math.random();
randomNumber2=randomNumber2*6+1;
randomNumber2=Math.floor(randomNumber2);

var randomImages2 = "dice"+ randomNumber2 + ".png";

var iamgeSource2 = "./images/" + randomImages2;

var iamge2= document.querySelectorAll("img")[1];
iamge2.setAttribute("src",iamgeSource2);

if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="DRAW";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="first winner";
}
else{
    document.querySelector("h1").innerHTML="second winner";
}
