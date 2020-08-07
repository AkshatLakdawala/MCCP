var bullet,speed, weight;
var wall, thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 10);
  //bullet.shapeColor = "white";
  bullet.velocityX = 15;

  thickness = random (22,83);
  
  wall = createSprite (1200,200,thickness,200);

  speed = random(223,321);
  weight = random(30,52);

}

function draw() {
  background(255,255,255);  
  if (hasCollided (bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if (damage > 10) {
      wall.shapeColor = "red";
    }

    if (damage < 10) {
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}

function hasCollided(object1,object2) {
  object1RightEdge = object1.x + object1.width
  object2LeftEdge = object2.x
  
  if (object1RightEdge>= object2LeftEdge) {
   return true;
  }
  else {
    return false;
  }
}