const express = require('express')
const app = express()

app.post('/pre/orden', (req, res)=>{
    let auxElement = []

    console.log('preee')
    console.log( req.body.elements )
    console.log( req.body.edges )

    /*let obj = {
        "G" : G,
        "E" : E,
        "A" : A,
        "B" : B,
        "F" : F,
        "C" : C,
        "D" : D
    }*/

    res.send({  result : `G,E,A,B,F,C,D`  })
})
  
app.post('/in/orden', (req, res)=>{
    console.log('innn')
})

app.post('/post/orden', (req, res)=>{
    console.log('postorden')
})

module.exports = app