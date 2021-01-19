var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var PLAY=1;
var END=0;
//YOU NEED TO ASSIGN NAME OF PLAY STATE INSTEAD OF VALUE
var gameState=PLAY;
var chance=5;

function preload(){
  
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(500,500);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,360,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
  
 

}

function draw() {
  //*ADDED PLAY STATE
  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
 //boy.x = World.mouseX;
  createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+150;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }
  else if(chance===0) {
    gameState=END;
  
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
    path.velocityY=0;
  }
  if(swordGroup.isTouching(boy)&&chance===5){
    chance=4;
    swordGroup.destroyEach();
  }
   if(swordGroup.isTouching(boy)&&chance===4){
    chance=3;
    swordGroup.destroyEach();
  }
    if(swordGroup.isTouching(boy)&&chance===3){
    chance=2;
    swordGroup.destroyEach();
  }
    if(swordGroup.isTouching(boy)&&chance===2){
    chance=1;
    swordGroup.destroyEach();
  }
    if(swordGroup.isTouching(boy)&&chance===1){
    chance=0;
    swordGroup.destroyEach();
  }

 // background(0);
 
  
  //edges= createEdgeSprites();
  //boy.collide(edges);
  
  //code to reset the background
  //if(path.y > 400 ){
    //path.y = height/2;
//  }
 
   
 
       
        
    
    
      
  }
console.log(gameState)
  drawSprites();
  textSize(21);
  fill(255);
  text("Treasure: "+ treasureCollection,350,30);
  
  textSize(20);
  text("Chance:"+chance,50,30);

}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}