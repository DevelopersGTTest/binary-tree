const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//CORS-CONFIG
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","POST, GET, PUT, DELETE, OPTIONS"); 
    next();
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 
// parse application/json
app.use(bodyParser.json())

//Mapping a static folder
app.use( express.static( __dirname + '/public'))
 
//Mapping End-Points
app.use('/api/v1', require('./calculator'))

let PORT = process.env.PORT  || 3007

app.listen( PORT ,()=>{
    console.log(`
        Server on port Listen ${ PORT }
    `)
})