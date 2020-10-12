function setup() {
  createCanvas(1200,800);
  createSprite(400, 200, 50, 50);
  ground = new Ground(600,height,1200,20);
}

function draw() {
  background("black");  
  ground.display();
}