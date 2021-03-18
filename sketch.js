
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground
var survivalTime
var bg1
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  bg1 = loadImage("bg.png")
  FoodGroup= new Group()
  obstacleGroup= new Group()
  
}



function setup() {
  createCanvas(670, 400);
  score=0
  survivalTime=0
  bg = createSprite(330,200,670,400)
  bg.addImage("hahah",bg1 )
  bg.scale = 0.7
  bg.velocityX = -2 
  ground=createSprite(0,400,1500,10)
  ground.visible = false
   
   monkey=createSprite(90,370,10,10)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1
  
  
  

  }
function draw() {
  background("green")
  
  if(keyDown("space")&&monkey.y >= 350){
    monkey.velocityY=-11
  }
  monkey.velocityY = monkey.velocityY + 0.36
  monkey.collide(ground)
  
  
  ground.velocityX = -7 
 ground.x = ground.width/2;
    
 if(World.frameCount%200===0){
    fruits()
 }
  
  if(World.frameCount%300===0){
    stones()
 }
  
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+1
      }
  if(monkey.isTouching(obstacleGroup)){
     text("Game Over",335,200)
    monkey.lifetime = 1
    bg.velocityX = 0
    obstacleGroup.destroyEach()
    FoodGroup.destroyEach()
    fill("black")
   
    
   // survivalTime.destroy()
    
    
  }
 
 
 if(bg.x <  200){
   bg.x = bg.width/3
 }
 drawSprites()
  fill("white") 
  text("Score: "+ score, 500,50);
   survivalTime=Math.round(frameCount  /2);
   fill("black")
   text("Survival Time: "+ survivalTime,350,50)
 
  
  
}

function fruits(){
  banana=createSprite(670,Math.round(random(170,230)),10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-3
  FoodGroup.add(banana)
}

function stones(){
  obstacle=createSprite(670,380,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-3
  obstacle.scale=0.2
  obstacleGroup.add(obstacle)
  if(monkey.isTouching(obstacleGroup)){
    obstacle.velocityX = 0
  }
}







