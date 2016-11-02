var fs = require('fs');

  exports.csvToJson = function(path,options){
    //initilizing limit and delimiter options
    var limit = options.limit;
    var delimiter = options.delimiter || ',';
    var readbleStream = fs.createReadStream(path);
    var data = '';
    var finalData=[];
    readbleStream.setEncoding('utf8');

    readbleStream.on('data',function(chunk){
      data += chunk;
    });

    readbleStream.on('end',function(){
      //function to get headers
      var getHeaders = function(headerData){
        //split the first line of data after \n
        var headers = headerData.split('\n')[0];
        var headerValueArr = headers.split(delimiter);
        //return array of headers.
        return headerValueArr;
      };
      var combineData = function(header,rawData){
        //store data in result object.
        var result = {};
        //split the data afte , and return a array.
        var bodyData = rawData.split(delimiter);
         for(var i=0;i < header.length;i++){
           //maping header with body data.
           result[header[i]]=bodyData[i];
         }
         //pushing result object into array.
         finalData.push(result);
      };

      var rawData = data.split('\n');
      //checking for limit options.
      if(limit){
        limit = limit+1;
      } else {
        limit = rawData.length-1;
      }
      for(var i =1 ;i<limit;i++){
        // extract headers from entire data.
        var header = getHeaders(data);
        //create a object maping heades to data
        var formatedData= combineData(header,rawData[i]);
      };
      console.log(finalData);
    });
  };
