var express = require('express');
var app = express();
var path = require("path")
var fs = require("fs")


app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + "/index.html"));
})



test = function(req, res){
  var data = {
  	names: req.query.Names,
  	url: req.query.URLis
  };
 var jsondata = JSON.stringify(data);

	fs.writeFile('data.txt', jsondata)

	console.log("Test", req.query.Names)

	res.sendFile(path.join(__dirname + "/.html"))

}
app.get('/virusfree', test)

var server = app.listen(80, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})
