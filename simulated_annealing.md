![](http://icons.iconarchive.com/icons/graphicloads/100-flat/16/home-icon.png) [TSP Home](https://pedrohfsd.github.io/TSP/)

## Simulated Annealing

<script src="https://rawgit.com/pedrohfsd/TSP/gh-pages/_includes/canvas.js"></script>
<script src="https://rawgit.com/pedrohfsd/TSP/develop/simulated_annealing.js"></script>

<div style="width:640px; margin:auto">
<canvas id="canvas" width="640px" height="490" style="border:1px solid #000000;"></canvas>
<br/><br/><input id='cityCountId' value='20' size="5"/> - Cities
<br/><input id='temperatureId' value='1000' size="5"/> - Initial Temperature
<br/><input id='dropRateId' value='0.05' size="5"/> - Temperature Drop Rate (in %)
<br/><input id='delayId' value='20' size="5"/> - Delay (in millis)
<div style="float:right">
<br/><button onclick="generate(props);">Generate</button>
<button onclick="run(props, document.getElementById('temperatureId').value, document.getElementById('dropRateId').value, document.getElementById('delayId').value);">Run</button>
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

<div id="disqus_thread" style="margin-top: 100px;"></div>
<script>
var disqus_config = function () {
this.page.url = 'https://pedrohfsd.github.io/TSP/simulated_annealing';
this.page.identifier = 'SIMULATED_ANNEALING';
};
(function() {
var d = document, s = d.createElement('script');
s.src = 'https://tsp-1.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
