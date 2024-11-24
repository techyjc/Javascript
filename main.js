let charstring = "ABCDEFABCDEF";

let charsarr = Array();
let checkarr = Array();
let founditem = 0;
let finish = false;

charsarr = [...charstring];

charsarr.forEach((key) => {
    founditem = checkarr.includes(key);
    if (founditem) {
        if (!finish) {
            finish = true;
            console.log(key);
            console.log('Found');
            return;
        }
    } else {
        checkarr.push(key);
    }
});
console.log(checkarr);