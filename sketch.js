var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(600, 200);
  monkey=createSprite(50,150,5,5);
  monkey.addAnimation("running",monkey_running)
   monkey.scale = 0.1;
  
  ground=createSprite(200,210,400,20);
  //ground
  ground.x = ground.width /2;
  ground.visible = false;
  
  obstacleGroup=new Group()
  Food=new Group()
    score = 0
  

  
}


function draw() {
   background(180);
   monkey.collide(ground); 
  
    if(keyDown("space")&& monkey.y >= 100) {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
   
  if (Food.isTouching(monkey)) 
  {
    Food.destroyEach();
   // arrowGroup.destroyEach();
    score=score+2  
  }
  
   
  if(gameState === PLAY){
    
   
    
    
     
    if(obstacleGroup.isTouching(monkey)){
      
        gameState = END;
          monkey.velocityY = 0;  
        
      
    }
  }
   else if (gameState === END) {
            monkey.velocityY = 0; 
           obstacleGroup.setVelocityXEach(0); 
           Food.setVelocityXEach(0);
      obstacleGroup.setLifetimeEach(-1);
     Food.setLifetimeEach(-1);
  
   }  
  
      
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
      
  createbanana()
  createrock()
  
  drawSprites();
fill("red")
  text("Score:"+score,230,30)
  
}

function createbanana(){
 
   if (frameCount % 80 === 0) {
     
  banana=createSprite(300,150,20,50);
  banana.addImage( bananaImage );
  banana.scale=0.1
   banana.y = Math.round(random(80,120));
    banana.velocityX = -3
   banana.lifetime = 200;  
      Food.add(banana);
     
   }  
}

function createrock(){
  
  if (frameCount % 150 === 0){
    
    obstacle= createSprite(600,165,10,40);
    obstacle.addImage( obstaceImage)
       obstacle.scale = 0.2;
    obstacle.velocityX = -3
    
     obstacleGroup.add(obstacle)
    
  }  
}