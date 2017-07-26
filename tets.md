# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text
<canvas id="canvas" width="640" height="490" style="border:1px solid #000000;">
</canvas>
<script>
var n = 20;
var width = 640;
var height = 480;
var margin = 20;
var fontSize = 14;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.font = fontSize+"px Arial";

var vertices = [];
var i;
ctx.fillText("Initializing graph ...", 5,height);
for(i=0; i<n; i++){
    x = Math.floor((Math.random() * (width-2*margin)) + margin);
    y = Math.floor((Math.random() * (height-2*margin)) + margin);
    vertices.push([x,y]);
    ctx.fillRect(x,y,5,5);
}
ctx.clearRect(5,height-fontSize,200,200);
ctx.fillText("Running ...", 5,480);
</script>
