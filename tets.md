<script src="https://rawgit.com/pedrohfsd/TSP/gh-pages/_includes/canvas.js"></script>
<script src="https://rawgit.com/pedrohfsd/TSP/develop/simulated_annealing.js"></script>

<div style="width:640px; margin:auto">
<canvas id="canvas" width="640px" height="490" style="border:1px solid #000000;"></canvas>
<br/><input id='cityCountId' value='20' size="5"/> - Cities
<br/><input id='temperatureId' value='1000' size="5"/> - Initial Temperature
<br/><input id='dropRateId' value='0.05' size="5"/> - Temperature Drop Rate (in %)
<br/><input id='delayId' value='20' size="5"/> - Delay (in millis)
<br/>
<div style="float:right">
<button onclick="generate(props);">Generate</button>
<button onclick="run(props, document.getElementById('temperatureId').value, document.getElementById('dropRateId').value, document.getElementById('delayId').value);">Run</button>
<button onclick="resetCanvas(props, props.vertices);">Reset</button>
</div></div>

<script>
var props = {canvas:null, context:null
            , width:640
            , height:480
            , margin:20
            , fontSize:14
            , verticeCount:function(){return document.getElementById('cityCountId').value}
            , vertices:[]
            };
props.canvas = document.getElementById('canvas');
props.context = props.canvas.getContext('2d');
props.context.font = (props.fontSize+2)+'px Arial';
props.context.fillText('\'Input\' the number of cities to \'Generate\' the graph and \'Run\'', props.width/2-220, props.height/2);
props.context.font = props.fontSize+'px Arial';

function state_changed(props, event){resetCanvas(props, event.vertices);}
function log(props, text){setText(props, text);}
</script>