// module aliases
var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies;
var engine;

var height;
var width;

var birdy;
var ground;
var walls=[];
//var wally;
//var wally2;
var scorey;
var checker=false;

function setup(){
  height= 700;
  width= 1000;
  createCanvas(width,height);

  engine = Engine.create();
  world=engine.world;
  Engine.run(engine);

  birdy=new bird(width/4,height/4,30,30);
  ground=new ground(0,height-60,width,60);
  for(var i=3;i<7;i=i+1){
    walls[i-3]=new wall(floor(i*width)/4);
  }
  //wally=new wall(width);
  //wally2=new wall(floor((3*width)/4));
  //frameRate(20);
  scorey=new score();
}
function keyPressed(){
  if (dist(0,birdy.body.position.y,0,ground.body.position.y)<61){

  }else if (keyCode===32){
    birdy.update();
  }
}

function draw(){
  if (dist(0,birdy.body.position.y,0,ground.body.position.y)< 61){
    Body.setStatic(birdy.body,true);
    background('red');
    scorey.show();
    checker = true;

  }
  for (var b=0;b<walls.length;b=b+1){
    if ((walls[b].x-birdy.body.position.x === 0) && (((birdy.body.position.y) <= walls[b].h-walls[b].space)||(birdy.body.position.y >= walls[b].h+walls[b].space-30)) ){
      checker=true;
      break;
    }
  }
  if (checker === false){
    background(55,255,255);
    birdy.show();
    ground.show();
    for (var i=0; i<walls.length;i=i+1){
      walls[i].show();
      walls[i].update();
    }
  }
}
