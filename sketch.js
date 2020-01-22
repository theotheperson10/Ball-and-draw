var lines;
var ball;
var n=0
var n2=0;
var l=0;
var time=1200
var enemy
var lst;
var n1=0;
var mode="make"
var play=false;
var create=0;
var l=0
var play=false;
var coin=0;
var playmode=false
function setup(){
screen=createSprite(200,200,400,400)
screen.visible=false;
createCanvas(400,400)
ball=createSprite(50,50,15,15)
ball.shapeColor="green"
lines=createGroup();
enemy=createGroup();
ball.setCollider("circle")
wall=createGroup()
wall.add(createSprite(-100,200,10,400))
wall.add(createSprite(500,200,10,400))
wall.add(createSprite(200,-100,400,10))
wall.add(createSprite(200,500,400,10))
lines.add(createSprite(0,0,0,0))
end=createGroup();
}
function draw(){
if (ball.isTouching(wall)){window.alert("You Lost");if(eee==false){}}
ball.velocityX=0
if (ball.isTouching(end)){window.alert("You Won");if(eee==false){}}
ball.bounceOff(wall)
wall[0].x=0;
wall[1].x=400;
wall[2].y=0;
wall[3].y=400;
lines.setVisibleEach(false)
wall.setVisibleEach(false)
background("blue")
if (play==false){
textAlign(CENTER)
textSize(20)
fill("black")
text("Ball Game Maker",200,50)
text("Press p to play",200,200)
if (keyDown("p")){play=true;}
}else{
fill("black")
textSize(20)
screen.overlap(lines,e)
n1++;
if (n1==n){n1=1;}
if (playmode==true){ball.velocityY++;}
drawSprites();
ball.bounceOff(lines)
if (ball.velocityY>5){ball.velocityY=5}
if (playmode==false){
if (keyDown("e")){swap=createSprite(mouseX,mouseY,10,10);swap.shapeColor="green";end.add(swap)}
if (keyDown("d")){
n++;
swap=createSprite(mouseX,mouseY,10,10)
lines.add(swap);}}
if (playmode==true){
if (keyDown("d")){ball.x=ball.x+5}
if (keyDown("w")){if (ball.isTouching(lines)){ball.velocityY=-10;}}
if (keyDown("a")){ball.x=ball.x-5}}
if (keyDown("1")){playmode=true;}
}
function e(screen,lines){
if (lines.life==1){n--;lines.life=0;}
strokeWeight(5)
if (n>1){
if (Math.abs(lst.x-lines.x)<25){}else{
if (Math.abs(lst.y-lines.y)<25){}else{line(lines.x,lines.y,lines.x,lines.y)}}
if (Math.abs(lst.x-lines.x)<30){
if (Math.abs(lst.y-lines.y)<30){
if (n>1){line(lst.x,lst.y,lines.x,lines.y)}}}}
lst=lines
}}
function em(ball,enemy){
coin--;
enemy.destroy();
enemy=createSprite(random(50,350),random(50,350),10,10)
swap.shapeColor="red"
enemy=swap
}
