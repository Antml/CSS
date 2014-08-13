/**
 * Created by zhangyun on 14-8-13.
 */
function FillBlank(id) {
    this.id = id;
}
FillBlank.prototype.matchOne = function () {
    var fillBlank1 = new Topic("fillblank1", ['统一建模语言'], 1);
    var score = 0;
    var x = document.getElementById(this.id).value;
    if (x === fillBlank1.answer[0]) {
        score += 5;
        }
    return score;
}
