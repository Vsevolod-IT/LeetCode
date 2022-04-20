/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
let out = 0;
let ar= [];
let obj = {};
while(out < mat.length){
    let inner = 0;
    let count = 0;
    while(inner < mat[0].length){
        if(mat[out][inner]){
            count++;
            inner++;
        } else{
            break
        }
    }
    ar.push(count)
    obj[out] = count;
    out++;
}

const sor = Object.entries(obj)
    .sort(([,a],[,b]) => a-b)
    .map(el => Number(el[0]))
return sor.splice(0,k)
};
