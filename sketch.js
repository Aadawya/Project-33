const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg,bg
var engine,world 
var snow=[]
function preload(){
  backgroundImg=loadImage("Ice golem.jpg")
 
}

function setup() {
  
  createCanvas(displayWidth,displayHeight);
  engine=Engine.create();
  
  world=engine.world;
  
}

function draw() {
  background(backgroundImg);
  Engine.update(engine)  
  if(frameCount%30===0){
   snow.push(new SnowFlakes(random(width-2000,width),random(10,300),100,100)) 
  }
  for(var i=0;i<snow.length;i++){
   snow[i].display() 
  }
  drawSprites();
}