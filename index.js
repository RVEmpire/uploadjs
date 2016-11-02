var uploadjs = require('./upload.js');


var filePath = './csvdata.csv';
var options = {
  'delimiter':',',
  'header':true,
  'headersType':{
    'id':{
      'type': 'string',
      'required': 'true'
    },
    'first_name':{
      'type':'string',
      'required':'true'
    },
    'last_name':{
      'type':'string',
      'required':'false'
    }
  },
  'limit':5,
  'skipEmpty':true
};
uploadjs.csvToJson(filePath,options);
