class SnowFlakes{
 constructor(x,y,width,height)  {
  var options={
   restitution:0.5,
   density:0.5,
   friction:0.2,

  } 
  
  this.body=Bodies.rectangle(x,y,width,height,options)
  this.width=width;
  this.height=height;
  this.image=loadImage("snow4.webp")
  World.add(world,this.body)
 }
 
 display(){
 var pos=this.body.position   
 var ang=this.body.angle
 push();
 translate(pos.x,pos.y)
 rotate(ang)
 imageMode(CENTER)
 image(this.image,0,0,this.width,this.height)
 pop(); 
 }
}
