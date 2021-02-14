var ghost,ghostImage,tower,towerImage,door,doorImage,climber,climberImage;

var doorsGroup,climbersGroup;

var gameState="play"
function preload(){
//spookySound=loadSound("spooky.wav")
towerImage=loadImage("tower.png");
doorImage=loadImage("door.png")
climberImage=loadImage("climber.png")
ghostImage=loadImage("ghost-standing.png")
}
function setup(){
createCanvas(600,600)
tower=createSprite(300,300)
tower.addImage(towerImage)
tower.velocityY=1
doorsGroup = new Group(); 
climbersGroup = new Group();
invisibleBlockGroup = new Group();
ghost = createSprite(200,200,50,50);
ghost.scale = 0.3;
ghost.addImage("ghost", ghostImage);
}
function draw(){
background("black"); 
if(gameState==="play"){
//spookySound.play();
if(tower.y > 400)
{ tower.y = 300;
} 
if(keyDown("left_arrow"))
{ ghost.x = ghost.x - 3; } 
if(keyDown("right_arrow"))
{ ghost.x = ghost.x + 3; }
if(keyDown("space"))
{ ghost.velocityY = -5; } 
ghost.velocityY = ghost.velocityY + 0.8;
if(climbersGroup.isTouching(ghost))
{ghost.velocityY = 0; }
if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600)
{ ghost.destroy();
gameState="end"
}
drawSprites();
}
if(gameState==="end"){
fill("yellow");
textSize(30);
text("GAMEOVER",210,300)
}
}
function spawnDoors() { 
//write code here to spawn the doors in the tower 
if (frameCount % 20 === 0) 
{ var door = createSprite(200, -50); 
door.addImage(doorImage);
var climber = createSprite(200,10);
climber.addImage(climberImage);
var invisibleBlock = createSprite(200,15); 
invisibleBlock.width = climber.width;
invisibleBlock.height = 2; 
door.x = Math.round(random(120,400));
door.velocityY = 1;
climber.x = door.x; 
climber.velocityY = 1;
invisibleBlock.x = door.x;
invisibleBlock.velocityY = 1;
//assign lifetime to the variable 
door.lifetime = 800;
 climber.lifetime = 800; 
invisibleBlock.lifetime = 800;
//add each door to the group
doorsGroup.add(door); 
 climbersGroup.add(climber);
invisibleBlock.debug = true; 
 invisibleBlockGroup.add(invisibleBlock);
ghost.depth = door.depth; ghost.depth +=1; }
}

