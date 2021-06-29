class Renderer{
    constructor(){
        this.updateResolution();
        this._initGLData();
    }

    updateResolution(){
        this.resolution = [canvas.width,canvas.height];
        this.aspect_ratio = canvas.width/canvas.height;
        gl.viewport(0,0,gl.canvas.width,gl.canvas.height);
    }

    render() {
        if (scene == null) {
          return;
        }
        //gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.clearColor(scene.bgColor[0],scene.bgColor[1],scene.bgColor[2], 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        
        this._board_render(scene);
        this._robots_goal_render(scene);
    }
}