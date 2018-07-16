var express = require('express');
var app = express();
var path = require("path")
var fs = require("fs")


app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + "/index.html"));
})


/*
test = function(req, res){
  var URLKey = req.query.URLis;
  var namesArr = req.query.Names.split(",");
  var data = {
  URLkey: {attendees: namesArr.map(b=> {
    return {
      names: b,
      nr_beer:  0,
      nr_wine: 0,
      nr_liquor: 0
    }})
}
}

 var jsondata = JSON.stringify(data);

	fs.writeFile('data.json', jsondata, (err)=>{
        if (err) throw err;
        console.log("file saved!")
    })

	console.log("Test", req.query.Names)

	res.sendFile(path.join(__dirname + "/public/subpages/strecklista.html"))

}

app.get('/virusfree', test)*/

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})
