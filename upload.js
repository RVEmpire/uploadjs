var fs = require('fs');

var internals = {};

internals.getHeaders = function(headerData,delimiter){
  //split the first line of data after \n
  var headers = headerData.split('\n')[0];
  var headerValueArr = headers.split(delimiter);
  //return array of headers.
  return headerValueArr;
};

internals.combineData = function(header,rawData,delimiter,headValue,finalData){
      //store data in result object.
      var result = {};
      //split the data afte , and return a array.
      var bodyData = rawData.split(delimiter);
      // check if header value is true, if true then set limit to haeder length.
      if(headValue){
        limit = header.length;
      } else {
        //if header value is false, set limit to bodyData length
        limit = bodyData.length;
      }
       for(var i=0;i < limit;i++){
        if(headValue){
          //maping header with body data with header option is true.
          result[header[i]]=bodyData[i];
        } else {
          //maping body data if header option is false.
            result[i] = bodyData[i];
        }
       }
       //pushing result object into array.
       finalData.push(result);
};

internals.parseData = function(path,options){
    var limit = options.limit;
    var delimiter = options.delimiter || ',';
    var headValue = options.header || true;
    var readbleStream = fs.createReadStream(path);
    var data = '';
    var finalData=[];
    readbleStream.setEncoding('utf8');

    readbleStream.on('data',function(chunk){
      data += chunk;
    });
    readbleStream.on('end',function(){
        var rawData = data.split('\n');

        if(limit){
          limit = limit+1;
        } else {
          limit = rawData.length-1;
        }

        for(var i =1 ;i<limit;i++){
          //check headvale from options true||false
          if(headValue)
          {
          // extract headers from entire data.
          var header = internals.getHeaders(data,delimiter);
          } else {
            //if header is false send balnk array.
          header = [];
          }
          //create a object maping heades to data
          var formatedData= internals.combineData(header,rawData[i],delimiter,headValue,finalData);
        };
        console.log(finalData);
    });
};

exports. csvToJson = function(path,options){
      internals.parseData(path,options);
};
