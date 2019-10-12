console.log('este es el controlador de Grafos')
//https://matdisc2018-qvsphbvlpf.now.sh
var xdesde = document.getElementById("inD")
var xhacia = document.getElementById("inH") 

var nodos = [];  
var lineas = [];

function bst(){
    event.preventDefault() 
    var obj = {
        xdesde : inD.value,
        xhacia : inH.value
    }

    let desde = obj.xdesde;
    let hacia = obj.xhacia;

    console.log(obj)
    //console.log(' this nodes::: spread operator ', ...nodos  )
    //console.log(' simple  array show::::::', nodos )
    console.log('simple lines :;;;;;;', lineas )

    //simple for
    for(let i =0; i < lineas.length ; i++ ){
        console.log('deb for', lineas[i]  ) 
    }
    


    nodos.push({ data: { id: desde } });
    nodos.push({ data: { id: hacia } });
    lineas.push({ data: { source: desde, target: hacia } });

 

    window.cy = cytoscape({
        container: document.getElementById('cy'),
        boxSelectionEnabled: false,
        autounselectify: true,
        layout: {
            name: 'dagre'
        },

        style: [
            {
                selector: 'node',
                style: {
                    'content': 'data(id)',
                    'text-opacity': 0.5,
                    'text-valign': 'center',
                    'text-halign': 'right',
                    'background-color': '#11479e'
                }
            },

            {
                selector: 'edge',
                style: {
                    'curve-style': 'bezier',
                    'width': 4,
                    'line-color': '#9dbaea',
                    'target-arrow-color': '#9dbaea'
                }
            }
        ],

        elements: {
            nodes: [...nodos],
            edges: [...lineas]
        },
    });

    $("#inD").val("");
    $("#inH").val("");
} 
