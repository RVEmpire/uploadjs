var fs = require('fs');

(function(){
  exports.csvToJson = function(path){
    fs.readFile(path,'utf8',function(err,data){
      if(err) throw error
      console.log(data);
    });
    console.log(path);
  }
}())
