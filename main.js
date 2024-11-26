//Fimd the fist time a character appears more than once in string.
let charstring = "ABCDEFABCDEF";

let charsarr = [];
let checkarr = [];
let founditem = 0;
let finish = false;

charsarr = [...charstring];

for(let key of charsarr) {
    if (checkarr.includes(key)) {
        checkarr.push(key);
    } else {
       console.log("Fist repeated character: ", key);
    }
    return -1;
}