var river, riverImg;
var restBackground;
var restBackImg;

var player;
var playerImg;

var fish;
var fishImg;
var fishGroup;

var gameState = 1;

var messageImg, message;
var messageFish, messageFishImg;

var apple, appleImg;

var bottle, bottleImg;


function preload(){
riverImg = loadAnimation("river2.png");
restBackImg = loadAnimation("rest background.png");
playerImg = loadImage("boat.png");
fishImg = loadImage("fish.png");
messageImg = loadImage("message.png");
messageFishImg = loadImage("messageFish.png");
appleImg = loadImage("apple.png");
bottleImg = loadImage("bottle.png");

}


function setup() {
  createCanvas(700,300);

  
  river = createSprite(200,400,400,800);
  river.addAnimation("river", riverImg);
  river.scale = 2;

 
  player = createSprite(175, 550, 50,70);
  player.addImage("boat", playerImg);
  player.scale = 0.35;
  player.debug = true;
  player.setCollider("circle", 0,-15,100);





  restBackground = createSprite(300,300,700,350);
  restBackground.addAnimation("background", restBackImg);
  
  

  fishGroup = new Group();
  appleGroup = new Group();
  bottleGroup = new Group();
}

function draw() {
  background("black"); 

  // GAMESTATE 0
  if(gameState === 0){

    

  if(keyDown("space") && gameState === 0){
  restBackground.velocityY = -1.5;
  }
 
  console.log(restBackground.y);

  if(restBackground.y < 20){
    restBackground.velocityY = 0;

    message = createSprite(350,60,40,100);
    message.addImage("message", messageImg);
    message.scale = 0.4;

    messageFish = createSprite(620, 150, 40,40);
    messageFish.addImage("fishImg", messageFishImg);
    messageFish.scale = 0.2;

  }

  if(keyDown("space") && restBackground.y < 20){
    gameState = 1;
  }

  }
  // GAMESTATE 1
  if(gameState === 1){
  
    restBackground.visible = false;
    restBackground.velocityY = 0;

    createCanvas(350,600);
  
 
  river.velocityY = +5;

  
  if(keyDown("UP_ARROW")){
    player.y = player.y -3;
  }
  
  if(keyDown("DOWN_ARROW")){
    player.y = player.y +3.5;
  }
  
  if(keyDown("LEFT_ARROW")){
    player.x = player.x - 3.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    player.x = player.x + 3.5;
  }

  if(river.y > 300){
    river.y = 120;
  }

  spawnFish();
  spawnApple();
  spawnBottle();

  

  if(player.isTouching(fishGroup)){
    fish.visible = false;
  }

  if(player.isTouching(appleGroup)){
    apple.visible = false;
  }

  if(player.isTouching(bottleGroup)){
    bottle.visible = false;
  }

 
}
  drawSprites();
}

function spawnFish(){
  if (frameCount % 250 === 0){
    fish = createSprite(300,10,50,50);
    fish.setCollider("circle", 0,-20,0);
    fish.x = Math.round(random(40,300));
    fish.addImage("fish", fishImg);
    fish.scale = 0.3;

    fish.velocityY = +5;

    fish.lifetime = 200;

    fish.debug = true;
    fishGroup.add(fish);
  }
}

function spawnApple(){
  if (frameCount % 100 === 0){
    apple = createSprite(300,10,50,50);
    apple.x = Math.round(random(40,300));
    apple.addImage("apple", appleImg);
    apple.scale = 0.3;

    apple.velocityY = +5;

    apple.lifetime = 200;

    apple.debug = true;
   appleGroup.add(apple);
  }
}

function spawnBottle(){
  if (frameCount % 180 === 0){
    bottle = createSprite(300,10,50,50);
    bottle.x = Math.round(random(40,300));
    bottle.addImage("bottle", bottleImg);
    bottle.scale = 0.3;

    bottle.velocityY = +5;

    bottle.lifetime = 200;

    bottle.debug = true;
   bottleGroup.add(bottle);
}
}