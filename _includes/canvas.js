function generate(props){
    props.vertices = [];
    for(let i=0; i<props.verticeCount(); i++){
        x = Math.floor((Math.random() * (props.width-2*props.margin)) + props.margin);
        y = Math.floor((Math.random() * (props.height-2*props.margin)) + props.margin);
        props.vertices.push([x,y]);
    }
    resetCanvas(props, props.vertices);
    setText(props, "Ready!");
}

function resetCanvas(props, vertices){
    if(vertices.length == 0) return;
    props.context.fillStyle = props.background;
    props.context.fillRect(0, 0, props.canvas.width, props.canvas.height);
    addPoint(vertices[0]);
    for(let i=1; i<vertices.length; i++){
        addLine(props, vertices[i-1], vertices[i]);
        addPoint(vertices[i]);
    }
    addLine(props, vertices[vertices.length-1], vertices[0]);
    setText(props, "Ready!");
}

function addPoint(vertice){
    props.context.strokeStyle = '#34CA34';
    props.context.setLineDash([2, 0]);
    props.context.fillStyle = '#34CA34';
    props.context.beginPath();
    props.context.arc(vertice[0], vertice[1], 4, 0, 2 * Math.PI, false);
    props.context.fill();
    props.context.stroke();
    props.context.closePath();
}

function addLine(props, vertice1, vertice2){
    // props.context.strokeStyle = '#C3CEEE';
    props.context.beginPath();
    props.context.strokeStyle = 'white';
    props.context.setLineDash([5, 3]);
    props.context.moveTo(vertice1[0], vertice1[1]);
    props.context.lineTo(vertice2[0], vertice2[1]);
    props.context.stroke();
    props.context.closePath();
}

function setText(props, text){
    props.context.fillStyle = props.background;
    props.context.fillRect(5, props.height-props.fontSize-4, props.width, props.fontSize+4);
    props.context.fillStyle = 'white';
    props.context.fillText(text, 5, props.height-4);
}