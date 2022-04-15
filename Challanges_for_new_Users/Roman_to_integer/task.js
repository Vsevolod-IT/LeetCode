/**
 * @param {string} s
 * @return {number}
 * 1 attemp */
var romanToInt = function(s) {
const obj = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    }
let tmp;
let res = s.split('').reverse().reduce((prev, curr) => {
  if(prev === 0){
    return prev = tmp = obj[curr]
  }
  if (tmp > obj[curr] ) {
    return prev = prev  - obj[curr]
  }
  tmp = obj[curr]
  return prev = obj[curr] + prev
},0)

return res
};
