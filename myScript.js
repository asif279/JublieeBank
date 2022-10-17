   
    
   
    //login button event handler
var logs=document.getElementById("LoginButton");
logs.addEventListener("click",function(){

var loginArea = document.getElementById("sec");
loginArea.style.display ="none";

var trans = document.getElementById("transection");
trans.style.display ="block";
})

//deposit withdraw event handler
var depositTo= document.getElementById("bu");
depositTo.addEventListener("click",function(){


var depositAmount =document.getElementById("to").value;
var depoNum =parseFloat(depositAmount);
// var wthNum =getInput("currentDeposit");


document.getElementById("to").value= "";



 updateSpan("currentDeposit",depoNum);
 updateSpan("currentBalance",depoNum);

})
////withdraw amoutn handler
var wBtn = document.getElementById("addWithdraw");
wBtn.addEventListener("click",function(){

var wthd =getInput("withdrawAm");
updateSpan("withDraw",wthd);
updateSpan("currentBalance",-1*wthd);
document.getElementById("withdrawAm").value= "";

}) 

function getInput(id){
var inputWith = document.getElementById(id).value;
var wthd = parseFloat(inputWith);
return wthd;


}

function updateSpan(id,depoNum){
var bal= document.getElementById(id).innerText;
var bal1 = parseFloat(bal);
var total1 =depoNum +bal1;
document.getElementById(id).innerText= total1;

}


