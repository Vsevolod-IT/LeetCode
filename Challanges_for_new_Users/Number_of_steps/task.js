/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0;
    while(num){
        if((num & 1) == 0){
            num = num / 2;
            steps++;
            continue;
        }
        num--;
        steps++;
    }
    return steps;
};
