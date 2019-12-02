var fs = require('fs');
// var input = require('./input/input.txt');
var content;
fs.readFile("input\\input.txt", "utf-8", function(err, data) {

    if(err) {
        return console.log(err);
    }
    content = data;
    content = content.split('\n');
    //console.log(content[1]);
    var totalPerFuel = [];
    for (var i = 0; i < content.length; i++) {
        //console.log(parseInt(content[i]));
        var massParsed = parseInt(content[i]);
        for (massParsed; massParsed >= 0; massParsed-1) {
            massParsed = (Math.floor(massParsed / 3)) - 2;
            if(massParsed >= 0) {
                //console.log(massParsed);
                totalPerFuel.push(massParsed);
            }
        }
    }
    totalPerFuel = totalPerFuel.reduce(function(total, num) {
        return total + num;
    })
    console.log(totalPerFuel);
}); 