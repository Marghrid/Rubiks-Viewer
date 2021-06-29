var gl, renderer;

function setup(){
    
    canvas = document.getElementById("c");
    gl = canvas.getContext("webgl2",);
    if(!gl){
        error("No WEBGL");
    }
    renderer = new renderer();
    
    let cube = new Cube();

    //NOTE: This is necessary for init
    toggle_quality();
}

function update(delta){
    
}


function animate(){
    
    delta = clock.getDelta();
    update(delta);
    renderer.render();
    requestAnimationFrame(animate);
}

function main(){
    
    setup();
    requestAnimationFrame(animate);
}

//main();
cube.update_view();