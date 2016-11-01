var fs = require('fs');

(function(){
  exports.csvToJson = function(path,delimiter){
    console.log(delimiter);
    var readbleStream = fs.createReadStream(path);
    var data = '';

    readbleStream.setEncoding('utf8');

    readbleStream.on('data',function(chunk){
      data += chunk;
    });

    readbleStream.on('end',function(){
      console.log(data);
      var headers = data.split('\n')[0];
      var headerValues = headers.split(',');
      var body = data.split('\n');
      for(var i =1 ;i<body.length;i++){
        console.log(body[i].split(','));
      }
      //console.log(values);

    });
  }
}())
