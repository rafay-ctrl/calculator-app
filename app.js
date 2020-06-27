function getnum(num){
    var result=document.getElementById("result")
    result.value +=num;
}
function Clearresult(){
    var result=document.getElementById("result");
    result.value=""
}
function getResult(result){
    var result=document.getElementById("result");
    result.value=eval(result.value);
    
}