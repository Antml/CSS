function myFunction1(){
    var score1 = 0;
    var x =document.getElementById("one").value;
    if( x.value === "统一建模语言" ){
       score1 += 5;
     }
     return score1 ;
}

function myFunction2(){
    var score2 = 0;
    var x=document.getElementById("two").value;
    var y=document.getElementById("three").value;
    var z= document.getElementById("four").value;
    var answer = [x,y,z];
    var answer1 = ["封装性", "继承性" ,"多态性"];
    for(var i = 0; i<3; i++){
      for(var j = 0; j<3; j++){
      if (answer1[i] === answer[j]){
        score2 += 5;
        break ;
       }
     }
  }

    return score2 ;
}

function myFunction3(){
  var score3 = 0;
  var answer = document.getElementsByName("choice");
  if(answer[1].checked)
  score3 += 10;

return score3;
}

function myFunction4(){
  var score4 = 0;
  var Seven = document.getElementsByName("choice2");
  if(Seven[0].checked){
    score4 +=10;

  }
  return score4;
}

function myFunction5(){
  var score5 = 0;
  var Eight = document.getElementsByName("choice3");
  if(Eight[0].checked && Eight[1].checked && Eight[3].checked && !(Eight[2].checked)){
   score5 += 10;
 }
 return score5;
}

function myFunction6(){
  var score6 = 0;
  var Nine = document.getElementsByName("choice4");
 if(Nine[0].checked && Nine[1].checked && Nine[2].checked && !(Nine[3].checked)){
    score6 += 10;
   return score6;
  }
  return score6;
}

function myFunction7(){
  var score7 = 0;
  var Ten = document.getElementsByName("first");
  if(Ten[0].checked){
    score7 += 10;
  }
  return score7;
}

function myFunction8(){
  var score8 = 0;
  var Eleven = document.getElementsByName("second");
  if(Eleven[1].checked){
    score8 += 10;
  }
  return score8;
}

function myFunction9(){
  var score9 = 0;

  var Final = document.getElementById("0");

  if(Final.value === "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。"){
    score9 += 20;
  }
  return score9;
}

function myBossFunction(){
    var score1 = myFunction1();
    var score2 = myFunction2();
    var score3 = myFunction3();
    var score4 = myFunction4();
    var score5 = myFunction5();
    var score6 = myFunction6();
    var score7 = myFunction7();
    var score8 = myFunction8();
    var score9 = myFunction9();
    var Score = score1 ;
    Score += score2;
    Score += score3;
    Score += score4;
    Score += score5;
    Score += score6;
    Score += score7;
    Score += score8;
    Score += score9;
    var ABC = document.getElementById("OK");

   if(judgeBasicInformation ()){
     ABC.innerHTML = Score + "分";
     ABC.className = "text-danger";
     ABC.size = "10px";
     alert("您本次考试得分：" + Score +"分");
  }
     else {
       alert("请填写基本信息!");
    }
    return Score;

}
//function SingleChoose(name,answer) {
//    this.name = name;
//    this.answer = answer;

//}
//Single.prototype.getStudentchoice = function (name){
  //var studentchoice = document.getElementsByName(name);
  //var
//}

function judgeBasicInformation (){

  var student_name = document.getElementById("inputname");
  var student_Id = document.getElementById("inputcard");
  var student_grade = document.getElementById("inputgrade");
  if (student_name.value){
     var judgement1 = true;
}
else{
    document.getElementById("name").className = "has-error";
}
  if(student_Id.value){
    var judgement2 = true;
  }
  else{
     document.getElementById("card").className = "has-error";
}
 if(student_grade.value){
   var judgement3 = true;
 }
 else{
   document.getElementById("class").className = "has-error";
 }

return judgement1 && judgement2 && judgement3;
 }
//    return judgement ;
//}
//function hasEmptyRequiredInput(inputs) {
//    for (var i = 0; i < inputs.length; i++) {
//        var input = inputs[i];
//        var element = document.getElementsByName(input.name);
//        var divElement = document.getElementById(input.id);
//        if (element[0] && _.isEmpty(element[0].value)) {
//            alert('请输入' + input.text + '！');
//            divElement.className = 'has-error';
//            return true;
  //      }
//        else{
//          divElement.className = 'form control';
//        }
//    }
//    return false;
//}
