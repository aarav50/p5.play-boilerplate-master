var space
var      mkp
var        fc
var blablabla
var blablablablablabla
var blablablablablablablablablablablabla
var blablablablablablablablablablablablablablablablablablablablablablablabla
var blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
function preload() {
  mkp=loadImage("spacebg.jpg")
  blablablablablabla=loadImage("spacecraft1.png")
  blablablablablablablablablablablabla=loadImage("spacecraft2.png")
  blablablablablablablablablablablablablablablablablablablablablablablabla=loadImage("spacecraft3.png")
  blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla=loadImage("spacecraft4.png")




fc=loadImage("iss.png")




}

function setup() {

  createCanvas(800,400);
space=createSprite(400, 200);
space.addImage(fc)
blablabla=createSprite(400,350)

blablabla.addImage(blablablablablabla)
blablabla.scale=0.2

}

function draw() {
  background(mkp);  

if(keyDown(UP_ARROW)) {
  blablabla.y=blablabla.y-1
  blablabla.addImage(blablablablablablablablablablablabla)
}
if(keyDown(RIGHT_ARROW)) {
  blablabla.x=blablabla.x+1
  blablabla.addImage(blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla)
}
if(keyDown(LEFT_ARROW)) {
  blablabla.x=blablabla.x-1
  blablabla.addImage(blablablablablablablablablablablablablablablablablablablablablablablabla)
}
if(keyDown(DOWN_ARROW)) {
  blablabla.y=blablabla.y+1
  blablabla.addImage(blablablablablabla)
}
if(blablabla.x===337&&blablabla.y===277){
  textSize(30)
  fill("#00ffff")
  text("dock complete",600,200)
}
console.log(blablabla.x+":"+blablabla.y)
  drawSprites();
}
