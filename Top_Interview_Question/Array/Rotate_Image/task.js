/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let lenM = matrix.length
    let nMatr = []

    for (let i = 0; i < lenM; i++){
        let ar = []
        matrix.map(el => ar.push(el[i]))
        nMatr.push(ar.reverse())
    }
    matrix.length = 0
    nMatr.map(el => matrix.push(el))
};
