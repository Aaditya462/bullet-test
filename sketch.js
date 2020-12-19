var car;
var wall;
var speed,weight,thickness;



function setup() {
  createCanvas(1200,600);

  speed=random(23,121);
  weight=random(30,52);
  thickness=random(22,83);

  car = createSprite(200, 300, 70, 10);
  wall=createSprite(1000,300,thickness,400)
  wall.shapeColor=("black");

  
}

function draw() {
  background("orange");  


  car.velocityX=speed;
  if(isTouching(car,wall)){
  car.velocityX=0;
  
  var damage=0.5*speed*speed*weight/thickness*thickness*thickness;
  if(damage>10000)
  {
  wall.shapeColor=color(230,0,0);
  }
  if(damage<10000)
  {
  wall.shapeColor=color(0,230,0);
  }

  
 




  }




  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x- object2.x<object1.width/2+object2.width/2&&
    object2.x-object1.x<object1.width/2+object2.width/2
    &&
    object1.y-object2.y<object1.height/2+object2.height/2&&
    object2.y-object1.y<object1.height/2+object2.height/2 )
    {
      return true
    }
      else{
      return false
      }
}