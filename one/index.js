var fs = require('fs');
// var input = require('./input/input.txt');
var content;
fs.readFile("input\\input.txt", "utf-8", function(err, data) {

    if(err) {
        return console.log(err);
    }
    content = data;
    content = content.split('\n');
    // console.log(content[1]);
    var fuelValues = [];
    for (var i = 0; i < content.length; i++) {
        //console.log(parseInt(content[i]));
        var massParsed = parseInt(content[i]);
        var fuelRequired = Math.floor(massParsed / 3) - 2;
        //console.log(fuelRequired);
        fuelValues.push(fuelRequired);
    }
    //console.log(fuelValues);
    var total = fuelValues.reduce(function(total, num) {
        return total + num;
    })
    console.log(total);
}); 