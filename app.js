var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(express.static('.'));

app.use(bodyParser.urlencoded({extended:true}))



app.listen(3000)