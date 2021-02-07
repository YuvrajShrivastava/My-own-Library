var fixedRect,movingRect
var fixRect1,movRect1


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,30);
  fixRect1 = createSprite(200,100,50,80);

}

function draw() {
  background(0); 
 movingRect.y=World.mouseY
 movingRect.x=World.mouseX
  movingRect.shapeColor="green";
  fixedRect.shapeColor="yellow";
  fixRect1.shapeColor="blue";
 console.log(movingRect.x-fixedRect.x);
if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="red"
  fixedRect.shapeColor="red"
}else {
  movingRect.shapeColor="orange"
  fixedRect.shapeColor="orange"
}

 
  drawSprites();
}

