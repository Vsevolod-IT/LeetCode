/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (magazine.length < ransomNote.length) { return false};

    let i = 0;
    let long = magazine.length;
    let tmp;
    while(i <= long) {
        if(ransomNote.length === 0) {return true}
        tmp = ransomNote.indexOf(magazine[i])
        if(tmp < 0) {
            i++;
            continue;
        }
        ransomNote = ransomNote.replace(ransomNote[tmp], '');
        i++;
    }
    return false
};
