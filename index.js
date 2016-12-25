var uploadjs = require('./upload.js');

var filePath = './csvdata.csv';
var options = {
  'delimiter':',',
  'header':true,
  'limit':5,
  'skipEmpty':true
};

var test = uploadjs.csvToJson(filePath,options);
console.log(test);