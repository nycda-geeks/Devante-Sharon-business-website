// touch app.js
// git init -y
// npm install express --save


var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// app.get( '/', function(request, response){
// 	response.send('hi')
// } )

app.use(express.static('.'));

app.use(bodyParser.urlencoded({extended:true}))



app.listen(3000)