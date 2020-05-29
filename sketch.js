const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world
var canvas
var player, ground, ball
var balls = []

function setup(){
    canvas = createCanvas(displayWidth, displayHeight);

    engine = Engine.create();
    world = engine.world;
    player = new Player(500, height-70);
    ground = new Ground(width/2, height, width);
    dot= new Dot(100,height-70,20)
    
}   

function draw(){
  background("black");
    Engine.update(engine);

    player.display();
    dot.display();


    if(keyDown(RIGHT_ARROW)){
  Matter.Body.translate(player.body, {x:2, y:0})
   }

  if(keyDown(LEFT_ARROW)){
     Matter.Body.translate(player.body,{x:-2, y:0})
   }

  
    ground.display();
    

   if(frameCount%50 === 0){
     ball = new Ball(random(width), -10);
     balls.push(ball);
  
   }

   for(var i=0; i<balls.length; i++ ){ //starting point, ending point, incrememts 
      balls[i].display();
   }
var collision  = Matter.SAT.collides(player.body,dot.body)
if(collision.collided){
  console.log("xyz")
  Matter.Body.applyForce(dot.body,dot.body.position,{x:85,y:-85});
}
   // collision call
  // if(balls[i].hits(player)){
    //console.log("xyz")
  //  balls.splice(i,1)
    
  //}

}


