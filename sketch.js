var lines;
var ball;
var n=0
var n2=0;
var l=0;
var lst;
var n1=0;
var mode="make"
var play=false;
var create=0;
function setup(){
screen=createSprite(200,200,400,400)
screen.visible=false;
createCanvas(400,400)
ball=createSprite(50,50,15,15)
ball.shapeColor="green"
lines=createGroup();
ball.setCollider("circle")
ball.velocityY=12
wall=createGroup()
wall.add(createSprite(-100,200,10,400))
wall.add(createSprite(500,200,10,400))
wall.add(createSprite(200,-100,400,10))
wall.add(createSprite(200,500,400,10))
lines.add(createSprite(0,0,0,0))
coins=createGroup();
while l>5){}
swap=createSprite(random(50,350),random(50,350),10,10)
swap.shapeColor="yellow"
coins.add(swap)
}
function draw(){
ball.bounceOff(wall)
wall[0].x=0;
wall[1].x=400;
wall[2].y=0;
wall[3].y=400;
lines.setVisibleEach(false)
wall.setVisibleEach(false)
background("blue")
screen.overlap(lines,e)
n1++;
if (n1==n){n1=1;}
drawSprites();
ball.bounceOff(lines)
if (ball.velocityY>6){ball.velocityY=6}
if (keyDown("d")){
n++;
swap=createSprite(mouseX,mouseY,10,10)
swap.life=15
lines.add(swap);}
}
function e(screen,lines){
if (lines.life==1){n--;lines.life=0;}
strokeWeight(5)
if (n>1){
if (Math.abs(lst.x-lines.x)<5){}else{
if (Math.abs(lst.y-lines.y)<5){}else{line(lines.x,lines.y,lines.x,lines.y)}}
if (Math.abs(lst.x-lines.x)<30){
if (Math.abs(lst.y-lines.y)<30){
if (n>1){line(lst.x,lst.y,lines.x,lines.y)}}}}
lst=lines
}