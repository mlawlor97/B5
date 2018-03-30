import React, {Component} from 'react';



function init() {
//Browser Tetris
//v1.0
//az23
    "use strict";// or run out of loop vars
//globals
    var pf;
    var c;
    var ctx;
    var bricks;
    var next;
    var cur ;
    var gSet ={cellW:10,gridX:10,gridY:10,border:1};
    var game ={level:0,score:0,lines:0,rows:22,cols:10};
    var scores =[0,40,100,300,1200];
    document.onLoad = init(250,260);

    function init(w,h){
        setListeners();
        newPlayfield(game.cols,game.rows);
        bricks =createBricks();
        cur = newBrick();
        next = newBrick();
        createCanvas(w,h);
        draw(w,h);
        doGame();
    }
    function moveLeft(){
        if(canMove(cur,(cur.x)-1,cur.y)){
            cur.x--;
        }
    }
    function moveRight(){
        if(canMove(cur,(cur.x)+1,cur.y)){
            cur.x++;
        }
    }
    function moveDown(){
        if(canMove(cur,cur.x,(cur.y)+1)){
            cur.y++;
        }
    }
    function rotateHook(){
        rotateBrick(cur);
    }
//get key presses
    function setListeners(){
        window.onkeydown = function (e) {
            let key = e.keyCode;
            switch (key) {
                case 37:
                    moveLeft();
                    break;
                case 38:
                    rotateBrick(cur);
                    break;
                case 39://right
                    moveRight();
                    break;
                case 40://down
                    moveDown();
                    break;
            }
        };
    }
//per frame
    function draw(w,h){
        drawPlayField(w,h);
        drawCur();
        drawNext();
        drawStatus();
        setTimeout(draw,33,w,h);
    }

//per gameclock
    function doGame(){
        if(canMove(cur,cur.x,(cur.y +1))){
            cur.y++;
            setTimeout(doGame,300-(game.level*20));
        }
        else{
            if(cur.y>0){
                placeBrick(cur,cur.x,cur.y);
                cur = JSON.parse(JSON.stringify(next));//lel
                next = newBrick();
                setTimeout(doGame,300-(game.level*20));
            }
            else{
                alert("GAME OVER\nYou got " + game.lines + " lines\nScore: "+game.score);
            }
        }
    }
//Define the shapes of the tetronimos
    function createBricks(){
        let bricks = new Array;
        bricks.push({shape:[[1,1],[1,1]],colour:"#FF0000"}); //square
        bricks.push({shape:[[1,1,1,1]],colour:"#00FF00"});   //long
        bricks.push({shape:[[1,1,0],[0,1,1]],colour:"#0000FF"})//S
        bricks.push({shape:[[0,1,1],[1,1,0]],colour:"#FFFF00"})//Z
        bricks.push({shape:[[0,1,0],[1,1,1]],colour:"#FF00FF"})//T
        bricks.push({shape:[[1,1],[0,1],[0,1]],colour:"#00FFFF"})//L
        bricks.push({shape:[[1,1],[1,0],[1,0]],colour:"#FF8000"})//Shit L
        return bricks;
    }

    function newBrick(){
        let r = bricks[Math.floor(Math.random()*7)];
        r.x=4;
        r.y=0;
        for(let i= Math.floor(Math.random()*4);i>0;i--){
            r=rotateBrick(r);
        }

        return r;
    }

//Rotate brick 90degrees (Clockwise)
//rotateBrick(rotateBrick(rotateBrick(brick))) will do ACw
//Swaps rows and columns ie 2x3 array -> 3x2 array
//Read inners backwards
    function rotateBrick(brick){
        let rows = brick.shape.length;
        let cols = brick.shape[0].length;
        let output = new Array;
        for(let i=0; i<cols ; i++){
            //make array, push to output
            let col = new Array;
            for(let j=rows-1; j>=0; j--){
                col.push(brick.shape[j][i]);
            }
            output.push(col);
        }
        let temp ={shape:output};
        if(canMove(temp,brick.x,brick.y)){
            brick.shape = output;
        }
        return brick;
    }


//can a brick be moved to a position?
    function canMove(brick, x,y){
        //playfield bounds check
        if(x<0 || y<0 || x > (pf.length - brick.shape[0].length) || y>(pf[0].length - brick.shape.length)){
            return false;
        }
        //check brick shape and playfield for colisions
        for(let i=0; i<brick.shape.length;i++){ //r
            for(let j=0; j<brick.shape[0].length;j++){// c
                if(brick.shape[i][j] > 0 && pf[x+j][y+i] > 0){
                    return false;
                }
            }
        }
        return true;
    }

//"Land" a brick
    function placeBrick(brick,x,y){
        for(let i=0;i<brick.shape.length;i++){
            for(let j=0;j<brick.shape[0].length;j++){
                if(brick.shape[i][j]>0){
                    pf[x+j][y+i]=1;
                }
            }
        }
        checkLines(y,brick.shape.length);
    }

    function checkLines(height,number){
        let removed =0;
        for(let i=height;i<height+number;i++){
            let full =true;
            for(let j=0; j< pf.length;j++){
                if(pf[j][i]==0){
                    full = false;
                }
            }
            if(full){
                removeLine(i);
                removed++;
                game.lines++;
            }
        }
        game.score += scores[removed]*(game.level+1);
        game.level = Math.floor(game.lines/10);
    }

//remove a line, shift others
    function removeLine(y){
        for(let i=y;i>0;i--){
            for(let j=0;j<pf.length;j++){
                pf[j][i]=pf[j][i-1];
            }
        }
    }

//Empty playfield - init/reset
    function newPlayfield(cols,rows){
        pf = new Array();
        for(let i=0; i<cols; i++){
            let col = new Array(rows);
            for(let j=0;j<col.length; j++){
                col[j] = 0;
            }
            pf.push(col);
        }
    }

//create canvas element to draw to
    function createCanvas(w,h){
        c =  document.createElement('canvas');
        c.width  = w;
        c.style.width  = "60%";
        c.height = h;
        c.style.height = "90%";
        c.style.zIndex=-1;
        ctx = c.getContext("2d");
        document.body.appendChild(c);
    }
//Draw the current brick in play
    function drawCur(){
        ctx.save();
        ctx.translate(gSet.gridX,gSet.gridY);//move to pf
        ctx.translate((gSet.cellW+gSet.border)*cur.x,(gSet.cellW+gSet.border)*cur.y);// move to position
        drawBrick(cur);
        ctx.restore();
    }
    function drawNext(){
        ctx.save();
        ctx.translate((gSet.gridX+(gSet.border+gSet.cellW)*game.cols)+2*(gSet.cellW+gSet.border),(game.rows-5)*(gSet.cellW+gSet.border));
        ctx.fillStyle="#00FF00";
        ctx.font = "15px Helvetica";
        ctx.fillText("NEXT",0,0);
        ctx.translate(0,gSet.border+gSet.cellW);
        drawBrick(next);
        ctx.restore();
    }
    function drawStatus(){
        ctx.save();
        ctx.translate((gSet.gridX+(gSet.border+gSet.cellW)*game.cols)+2*(gSet.cellW+gSet.border),gSet.gridY+gSet.border+gSet.cellW);
        ctx.fillStyle="#00FF00";
        ctx.font = "15px Helvetica";
        ctx.fillText("SCORE",0,0);
        ctx.fillText(""+game.score,0,22);
        ctx.translate(0,44);
        ctx.fillText("LINES",0,0);
        ctx.fillText(""+game.lines,0,22);
        ctx.translate(0,44);
        ctx.fillText("LEVEL",0,0);
        ctx.fillText(""+game.level,0,22);
        ctx.restore();

    }
//draw a brick at current position of ctx
    function drawBrick(brick){
        for(let i=0; i<brick.shape.length;i++){ //r
            ctx.save();
            for(let j=0;j<brick.shape[0].length;j++){//c
                if(brick.shape[i][j]==1){
                    ctx.fillStyle=brick.colour;
                    ctx.fillRect(0,0,gSet.cellW,gSet.cellW);
                }
                ctx.translate(gSet.cellW+gSet.border,0);
            }
            ctx.restore();
            ctx.translate(0,gSet.cellW+gSet.border);
        }
    }

//width,height
    function drawPlayField(w,h){
        ctx.save();
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,w,h);
        drawGrid(gSet.cellW,gSet.cellW,game.cols,game.rows);
        ctx.restore();
    }

//xoffset, yoffset, width, height, rows, cols
    function drawGrid(x,y,r,c){
        ctx.save();
        ctx.translate(x,y); // move to position
        ctx.save();
        for(let i=0; i<r;i++){ // for each row
            ctx.save();
            for(let j=0; j<c;j++){ // for each column
                if(pf[i][j]>0){ctx.fillStyle="#AAAAAA";}
                else{ctx.fillStyle="#444444";}
                ctx.fillRect(0,0,gSet.cellW,gSet.cellW);
                ctx.translate(0,gSet.cellW+gSet.border);
            }
            ctx.restore();
            ctx.translate(gSet.cellW+gSet.border,0)
        }
        ctx.restore();
    }

}


class Tetris extends Component{
    componentDidMount(){
        init()
    }
    render(){
        return(
            <div className={'Tetris'}>


            </div>
        );
    }
}
export default Tetris;