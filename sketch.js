const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var object;

function setup() {
  createCanvas(800,400);
  //create your engine
  engine=Engine.create();

  //create your world
  world=engine.world;

  //create your bodies

  var b_options={
    restitution:1
  }
  object=Bodies.circle(100,160,46,b_options)
  //add them to the world
  World.add(world,object)
  console.log(object)

  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(400,390,800,30,options)
  World.add(world,ground)
}

function draw() {
  Engine.update(engine)
  background(0);  
  
  ellipseMode(RADIUS)
  fill("red")
  ellipse(object.position.x,object.position.y,46,46);
 
  rectMode(CENTER)
  fill("green")
  rect(ground.position.x,ground.position.y,800,30);
}