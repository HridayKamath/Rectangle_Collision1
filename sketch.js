
var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);

  //initialising the fixed rectangle
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "yellow";

  //initialising the moving rectangle 
  movingRect = createSprite(200,200,50,100);
  movingRect.shapeColor = "green";


}

function draw() {
  background(105,55,200); 

//position of moving rectangle should be equal to the mouse position
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

//colours of both rectangles should change to red if they touch each other
if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2  && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
      movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
      fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 ){

  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

  
  
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "yellow";
}





  drawSprites();
}