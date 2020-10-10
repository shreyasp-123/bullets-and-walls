var bullet, wall
var speed, weight, thickness

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = color("white")
  thickness = random(22, 83)
  wall = createSprite(1200,200,thickness, height/2);
  speed = random(223,321)
  weight = (30, 52)
}

function draw() {
  background("black"); 
  if(wall.x-bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;
    var deformation = (0.5 * speed * speed * weight)/(thickness * thickness * thickness)
    if(deformation > 10){
      bullet.shapeColor = color(255, 0, 0)
    }
    if(deformation < 10){
      bullet.shapeColor = color(0, 255, 0)
    }
    
  } else {bullet.velocityX = speed}
  drawSprites();
}