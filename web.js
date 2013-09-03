var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html', function read(err, data){
    if (err) {
      throw err;
    }
    content = data;

  //response.send('Hello World 2!');
  response.send(content.toString());
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
