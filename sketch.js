var sword1,sword2,fruit1,fruit2,fruit3,fruit4,enemy,enemy2;
var play=1;
var end=0;
var gameState=play;
var gameoverImage,game2;

function preload(){
 sword1=loadAnimation("sword.png")
  fruit1=loadAnimation("fruit1.png")
  fruit2=loadAnimation("fruit2.png")
   fruit3=loadAnimation("fruit3.png")
   fruit4=loadAnimation("fruit4.png")
  enemy2=loadAnimation("alien1.png");
  gameoverImage =loadAnimation("gameover.png");
  game2=loadSound("gameover.mp3");
}
function setup(){
   createCanvas(600, 600);
  sword2=createSprite(300,500)
  sword2.addAnimation("moving",sword1)
  

  
  fruitG=new Group()
  enemyG=new Group()
  
  score=0
}




function draw(){
background("purple");
  
  if(gameState===play){
     sword2.y=World.mouseY;
     sword2.x=World.mouseX;
  var select_item = Math.round(random(1,5));
  if (World.frameCount%100===0){
   if (select_item == 1) {
      fruit11()
    } else if (select_item == 2) {
      enemy()
    } else if (select_item == 3) {
      fruit12()
    } else if (select_item == 4){
      fruit13()
   } else {
      fruit14()
    }
     }
  
if(sword2.isTouching(fruitG)){
     fruitG.destroyEach()
   
    score=score+1
   }
           
    if(sword2.isTouching(enemyG)){
       enemyG.destroyEach()
gameState=end;
       fruitG.destroyEach()
       enemyG.setVelocityXEach(0)
       fruitG.setVelocityXEach(0)
       game2.play();
    sword2.changeAnimation("out",gameoverImage);
      sword2.x=300
      sword2.y=300
       
}
    
     }
  
  
  drawSprites();
   text("Score: "+ score, 500,50)
}
function fruit11(){
  var fruit=createSprite(450,Math.round(random(30,400)),10,10)
  fruit.addAnimation("moving",fruit1)
  fruit.scale=0.2
  fruit.velocityY=6
  fruitG.add(fruit)
}
  
  function fruit12(){
    var fruit22=createSprite(200,Math.round(random(30,400)),10,10)
  fruit22.addAnimation("moving",fruit2)
  fruit22.scale=0.2
  fruit22.velocityY=6
    fruitG.add(fruit22)
  
}
  function fruit13(){
 var fruit33=createSprite(300,Math.round(random(30,400)),10,10)
  fruit33.addAnimation("moving",fruit3)
  fruit33.scale=0.2
  fruit33.velocityY=6
    fruitG.add(fruit33)
}
function fruit14(){
   var fruit44=createSprite(400,Math.round(random(30,400)),10,10)
  fruit44.addAnimation("moving",fruit4)
  fruit44.scale=0.2
  fruit44.velocityY=6
  fruitG.add(fruit44)
}
function enemy(){
  var enemy1=createSprite(500,Math.round(random(30,400)),10,10)
 
 enemy1.addAnimation("moving",enemy2)
 enemy1.scale=1
  enemy1.velocityY=6
enemyG.add(enemy1)
}





