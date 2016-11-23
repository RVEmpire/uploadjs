# UPLOAD JS
Install `uploadjs` through `npm`

include `upload.js` and to Convert `CSV TO JSON` call
```sh
$ csvToJson(filePath,options);
```
filePath is the loaction of `file`. For now the file should be local only :(

options take following input:-

```sh
   'delimiter':',',       Default value is ','
   'header':true/false,   Default value is true
   'limit':5,             Default value 'No Limit'
   'skipEmpty':true/false Default value False
```
# For Testing

to start the application (for testing purpose only!)
```sh
$ node index.js
```
