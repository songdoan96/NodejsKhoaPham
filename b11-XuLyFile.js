var fs = require("fs");
var ndung = fs.readFileSync(__dirname+"/xulyfile.txt");
console.log(ndung);
console.log(ndung.toString());
console.log(ndung.toJSON());
