/**
 * Created by zhangyun on 14-8-13.
 */
function FillBlankThree(id1, id2, id3) {
    this.id1 = id1;
    this.id2 = id2;
    this.id3 = id3;
}
FillBlankThree.prototype.matchThree = function () {
    var score = 0;
    var fillBlank2 = new Topic('fillblank2', ['继承性', '多态性', '封装性'], 3);
    var y = [];
    y.push(document.getElementById(this.id1).value);
    y.push(document.getElementById(this.id2).value);
    y.push(document.getElementById(this.id3).value);
    for (var i = 0; i < fillBlank2.answer.length; i++) {
        for (var j = 0; j < y.length; j++) {
            if (fillBlank2.answer[i] == y[j]) {
                score += 5;
                break;
            }

        }

    }
    return score;
}