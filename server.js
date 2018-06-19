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

	fs.writeFile('data.txt', jsondata, (err)=>{
        if (err) throw err;

        console.log("file  saved!")
    
    })

	console.log("Test", req.query.Names)

	res.sendFile(path.join(__dirname + "/public/index.html"))

}
app.get('/virusfree', test)

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})
