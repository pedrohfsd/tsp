## Genetic Algorithm
<script src="https://rawgit.com/pedrohfsd/TSP/gh-pages/_includes/canvas.js"></script>
<script src="https://rawgit.com/pedrohfsd/TSP/develop/genetic_algorithm.js"></script>

<div style="width:640px; margin:auto">
<canvas id="canvas" width="640px" height="490" style="border:1px solid #000000;"></canvas>
<br/><br/><input id='cityCountId' value='40' size="5"/> - Cities
<br/><input id='populationId' value='100' size="5"/> - Population Size
<br/><input id='generationsId' value='200' size="5"/> - Max Generations
<br/><input id='mutationRateId' value='0.005' size="5"/> - Mutation Rate
<br/><input id='delayId' value='20' size="5"/> - Delay (in millis)
<br/><input type="checkbox" id="elitismId" style="margin-left: 0px"/> - Use Elitism
<div style="float:right">
<br/><button onclick="generate(props);">Generate</button>
<button onclick="run(props, props.vertices, document.getElementById('populationId').value, document.getElementById('generationsId').value, document.getElementById('mutationRateId').value, document.getElementById('elitismId').checked, document.getElementById('delayId').value);">Run</button>
<button onclick="resetCanvas(props, props.vertices);">Reset</button>
</div></div>
<script>
var props = {canvas:null, context:null
            , width:640
            , height:490
            , margin:30
            , fontSize:14
            , verticeCount:function(){return document.getElementById('cityCountId').value}
            , vertices:[]
            , background:'#5F636C'
            };
props.canvas = document.getElementById('canvas');
props.context = props.canvas.getContext('2d');
props.context.font = (props.fontSize+2)+'px Arial';
props.context.fillStyle = props.background;
props.context.fillRect(0, 0, props.width, props.height);
props.context.fillStyle = 'white';
props.context.fillText('\'Input\' the number of cities to \'Generate\' the graph and \'Run\'', props.width/2-220, props.height/2);
props.context.font = props.fontSize+'px Arial';

function state_changed(props, event){resetCanvas(props, event.vertices);}
function log(props, text){setText(props, text);}
</script>
