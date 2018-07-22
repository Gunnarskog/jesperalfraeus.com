/*Dependecies*/
var express = require("express");
var app = express();

/*Style*/
app.use(express.static("public"));
/*EJS*/
app.set("view engine", "ejs");

/*Homepage*/
app.get("/", function(req, res){
	res.render("home");
});

app.get("/colorgame", function(req, res){
	res.render("colorgame");
});
/*Colorgame*/

var server = app.listen(80, function(res, req){
   var host = server.address().address
   var port = server.address().port
   console.log("Server listening at http://%s:%s", host, port)
})