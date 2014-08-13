/**
 * Created by zhangyun on 14-8-13.
 */
function Singlechoose(name) {
    this.name = name;

}
Singlechoose.prototype.getValue = function () {
    var choice = document.getElementsByName(this.name)
    for (var i = 0; i < choice.length; i++) {
        var value = '';
        if (choice[i].checked == true) {
            value = choice[i].value;
            break;
        }
    }
    return value;
}
//Singlechoose.prototype.getScore = function (value ,name,answer,quantity) {
//    var score = 0;
//    var singlechoice = new Topic(name,answer,quantity);
//    if (value === singlechoice.answer)
//    score += 10;
//    return score;
//
//}

