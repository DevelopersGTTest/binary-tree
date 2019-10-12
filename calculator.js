const express = require('express')
const app = express()

app.post('/pre/orden', (req, res)=>{
    result = []

   var nodo1 = new Nodo(`${req.body.elements[0].nodo1}`)
   var nodo2 = new Nodo(`${req.body.elements[1].nodo2}`)
   var nodo3 = new Nodo(`${req.body.elements[2].nodo3}`)
   var nodo4 = new Nodo(`${req.body.elements[3].nodo4}`)
   var nodo5 = new Nodo(`${req.body.elements[4].nodo5}`, nodo1, nodo2 )
   var nodo6 = new Nodo(`${req.body.edges[0].nodo6}`, nodo3, nodo4 )  
   var nodo7 = new Nodo(`${req.body.edges[1].nodo7}`, nodo5, nodo6 )

    preOrden(nodo7)

    //console.log('esta tdo', result )
    res.send({ response : result   })
})
  
app.post('/in/orden', (req, res)=>{
    resultIn = []

    var nodo1 = new Nodo(`${req.body.elements[0].nodo1}`)
    var nodo2 = new Nodo(`${req.body.elements[1].nodo2}`)
    var nodo3 = new Nodo(`${req.body.elements[2].nodo3}`)
    var nodo4 = new Nodo(`${req.body.elements[3].nodo4}`)
    var nodo5 = new Nodo(`${req.body.elements[4].nodo5}`, nodo1, nodo2 )
    var nodo6 = new Nodo(`${req.body.edges[0].nodo6}`, nodo3, nodo4 )  
    var nodo7 = new Nodo(`${req.body.edges[1].nodo7}`, nodo5, nodo6 )

    inOrden(nodo7)
    res.send({ response : resultIn   })
})

app.post('/post/orden', (req, res)=>{
    resultPost = []
    console.log(req.body.elements[0].nodo1)

    var nodo1 = new Nodo(`${req.body.elements[0].nodo1}`)
    var nodo2 = new Nodo(`${req.body.elements[1].nodo2}`)
    var nodo3 = new Nodo(`${req.body.elements[2].nodo3}`)
    var nodo4 = new Nodo(`${req.body.elements[3].nodo4}`)
    var nodo5 = new Nodo(`${req.body.elements[4].nodo5}`, nodo1, nodo2 )
    var nodo6 = new Nodo(`${req.body.edges[0].nodo6}`, nodo3, nodo4 )  
    var nodo7 = new Nodo(`${req.body.edges[1].nodo7}`, nodo5, nodo6 )

    postOrden(nodo7)
    res.send({ response : resultPost   })
})

  

function Nodo (val, izq, der  ){
    this.val = val;
    this.izq = izq;
    this.der = der
}

//Pre-Orden
var result = []
function preOrden(node){
    if( node == undefined ){
        return
    } 
    result.push( node.val )  
    //console.log('busc', result)

    preOrden( node.izq );
    preOrden( node.der );
}

//In-Orden
var resultIn = []
function inOrden(node){
    if( node == undefined ){
        return
    } 
    
    //console.log('busc', result)
    inOrden( node.izq );
    resultIn.push( node.val )  
    inOrden( node.der );
}

//Post-Orden
var resultPost = []
function postOrden(node){
    if( node == undefined ){
        return
    } 
    
    //console.log('busc', result)
    postOrden( node.izq );
    postOrden( node.der );
    resultPost.push( node.val )  
}



module.exports = app