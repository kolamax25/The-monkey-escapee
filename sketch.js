var gameState = 0
var PLAY = 0
var END = 1
var REDO = 2



var score = 0
var ST = 0
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   //creating monkey
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x) 

  bananasGroup = createGroup();
  obstaclesGroup = createGroup();
}


function draw() {
  
  
  createCanvas(400,400)
  
  background(255);
  if (gameState === PLAY){
    
  spawnObstacles();
  spawnBananas();
  
  
  
  console.log(monkey.y)
  if(ground.x<0) {
    ground.x=ground.width/2;
  }

    if(keyDown("space") && monkey.y > 100) {
      monkey.velocityY = -12;
      
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
   
  
  drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time: "+ ST, 50,50);
  if (frameCount % 40 === 0){
  ST +=1
  }
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: "+ score, 300,50);
  
    for()
    
    if (bananasGroup.isTouching(monkey)){
  score +=1
  bananasGroup.destroyEach();
  }
  
  if (obstaclesGroup.isTouching(monkey)){
      gameState = END
  }
    
    }
  
  if (gameState === END){
    
    stroke("black");
  textSize(30);
  fill("black");
  text("GAME OVER", 100, 200);
    
    
  }
  
    
    
  
}

function spawnObstacles(){
  
  if (frameCount % 90 === 0){
  obstacle = createSprite(440,320,50,50);
  obstacle.scale = 0.2
  obstacle.velocityX = -6
  obstacle.addImage(obstacleImage)
  obstacle.depth = monkey.depth-1
  ground.depth = obstacle.depth - 1
  obstacle.lifetime = 80
  obstaclesGroup.add(obstacle)
  //obstacle.debug = true
  obstacle.setCollider("circle", 0, 0 , 150)
  }
  
}

function spawnBananas(){
  
  if (frameCount % 60 === 0){
  banana = createSprite(440, Math.round(random(120, 200)), 50, 50);
  banana.scale = 0.15
  banana.velocityX = -6
  banana.addImage(bananaImage)
  banana.depth = monkey.depth-500
  banana.lifetime = 80
  bananasGroup.add(banana)
  }  
  
}



