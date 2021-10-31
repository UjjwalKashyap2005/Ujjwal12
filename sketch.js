
var trex ,trex_running; 
var ground,Groundimage;                         
function preload(){
  Groundimage = loadImage("ground1.png");
  
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,400)
  
  edges = createEdgeSprites();
  //create a trex sprite

  trex = createSprite(50,350,50,50);
  trex.addAnimation("running",trex_running);
  trex.scale =0.5;

  ground = createSprite(20,380,400,20)
  ground.addImage(Groundimage)
}

function draw(){
  background("lightgrey")

  if(keyDown("space")){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.5; // gravity

  trex.collide(ground);

  
  drawSprites();

}
