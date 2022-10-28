var player1,player2,player3,player4
var player1R,player2R,player3R,player4R
var bankImg,BulletImg,BulletrImg,ShootingImg,ShootingrImg,VanImg,VanrImg

function preload(){
  player1=loadImage("p-1.png")
  player1R=loadImage("p-1R.png")
  player2=loadImage("p2.png")
  player2R=loadImage("p2R.png")
  player3=loadImage("p3.png")
  player3R=loadImage("p3R.png")
  player4=loadImage("p4.png")
  player4R=loadImage("p4R.png")
  
  bankImg=loadImage("BANK.png")
  BulletImg=loadImage("BULLET.png")
  BulletrImg=loadImage("BULLETR.png")
  ShootingImg=loadImage("SHOOTING.png")
  ShootingrImg=loadImage("SHOOTINGR.png")
  
  VanImg=loadImage("VAN.png")
  VanrImg=loadImage("VANR.png")
}

function setup() {
  createCanvas(1000,800);
  player=createSprite(700, 400, 50, 50);
  player.addImage("player",ShootingrImg)
  bank=createSprite(200,150,10,10)
  bank.scale=0.5
  bank.addImage("bank",bankImg)
  van=createSprite(200,650,40,40)
  van.addImage("van",VanImg)
  van.scale=0.6
  

}

function draw() {
  background(255,255,255); 
  
 

  drawSprites();
}