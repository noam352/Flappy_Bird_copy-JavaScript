function bird(x,y,w,h){
  this.body = Bodies.rectangle(x, y, w, h);
  this.w=h;
  this.h=h;


  World.add(world,this.body);
  this.show = function(){
    fill(255);
    rect(this.body.position.x, this.body.position.y, this.w,this.h);
  }
  this.update=function(){
    Body.setVelocity(this.body, {x:0,y:-6});
  }
}

function ground(x,y,w,h){
  this.body = Bodies.rectangle(x, y, w, h,{ isStatic: true });
  World.add(world,this.body);
  this.w=w;
  this.h=h;

  this.show = function(){
    fill('yellow');
    rect(this.body.position.x, this.body.position.y, this.w,this.h,);
  }
}

function wall(x){
  this.h=floor(random(100,height-200));
  this.x=x;
  //console.log(typeof this.x);
  this.width=20;
  this.space=75;
  this.speed=2.5;
  this.show=function(){
    fill(51);
    rect(this.x-this.width,0,this.width,this.h-this.space);
    fill(51);
    rect(this.x-this.width,this.h+this.space, this.width, height-this.h-this.space);
  }
  this.update =function(){
    this.x=this.x-this.speed;
    if (this.x===0){
      this.x=width;
      this.h=floor(random(100,height-100));
      scorey.update();
    }
  }
}

function score(){
  this.score=0;
  this.update=function(){
    this.score=this.score+1;
    this.show();
  }
  this.show=function(){
    console.log("your score is "+this.score);
  }
}
