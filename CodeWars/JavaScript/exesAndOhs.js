function XO(str) {
    var x = 0, 
        o = 0;

    for (let i = 0; i < str.length; i++) { 
        if (str[i].toLowerCase() === "x") {
            x++;
        } else if (str[i].toLowerCase() === "o") {
            o++;
        }
    }
    return x === o;

}
