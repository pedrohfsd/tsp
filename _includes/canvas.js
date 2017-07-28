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
    props.context.fillStyle = 'black'; // #9ea7b8
    props.context.fillRect(0, 0, props.canvas.width, props.canvas.height);
    props.context.fillStyle = 'red';
    props.context.fillRect(vertices[0][0], vertices[0][1], 8, 8);
    for(let i=1; i<vertices.length; i++){
        addLine(props, vertices[i-1], vertices[i]);
        props.context.fillRect(vertices[i][0], vertices[i][1], 8, 8);
    }
    addLine(props, vertices[vertices.length-1], vertices[0]);
    setText(props, "Ready!");
}

function addLine(props, vertice1, vertice2){
    // props.context.strokeStyle = '#C3CEEE';
    props.context.beginPath();
    props.context.strokeStyle = 'white';
    props.context.setLineDash([5, 3]);
    props.context.moveTo(vertice1[0], vertice1[1]);
    props.context.lineTo(vertice2[0], vertice2[1]);
    props.context.closePath();
    props.context.stroke();
}

function setText(props, text){
    props.context.fillStyle = 'black';
    props.context.fillRect(5, props.height-props.fontSize-4, props.width/1.2, props.fontSize+4);
    props.context.fillStyle = 'white';
    props.context.fillText(text, 5, props.height-4);
}