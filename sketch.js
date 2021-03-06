const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var ground;

var platform1, platform2;

var player;

var rope;

var bg;

var score = 0;

// bottom level variables of platform 1
var box1, box2, box3, box4, box5, box6;
// 2nd level variables
var box7, box8, box9, box10, box11;
// 3rd level
var box12, box13, box14, box15;
// 4th level
var box16, box17, box18;

// bottom level variables of platform 2
var cube1, cube2, cube3, cube4, cube5;
// 2nd level variables
var cube6, cube7, cube8, cube9;
// 3rd level
var cube10;

function setup(){
    createCanvas(1400, 600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700, 580, 1400, 20);

    platform1 = new Ground(680, 500, 400, 20);
    platform2 = new Ground(1100, 300, 400, 20);

    player = new Player();

    // bottom level _ platform 1 _ purple boxes
    box1 = new PBox(520, 480);
    box2 = new PBox(580, 480);
    box3 = new PBox(640, 480);
    box4 = new PBox(700, 480);
    box5 = new PBox(760, 480);
    box6 = new PBox(820, 480);

    // level 2 _ platform 1 _ cyan boxes
    box7 = new CBox(550, 350);
    box8 = new CBox(610, 350);
    box9 = new CBox(670, 350);
    box10 = new CBox(730, 350);
    box11 = new CBox(790, 350);

    // level 3 _ platform 1 _ orange boxes
    box12 = new OBox(580, 270);
    box13 = new OBox(640, 270);
    box14 = new OBox(700, 270);
    box15 = new OBox(760, 270);

    // level 4 _ platform 1 _ lime boxes
    box16 = new LBox(610, 200);
    box17 = new LBox(670, 200);
    box18 = new LBox(730, 200);

    // bottom level _ platform 2 _ cyan boxes
    cube1 = new OBox(950, 280);
    cube2 = new OBox(1010, 280);
    cube3 = new OBox(1070, 280);
    cube4 = new OBox(1130, 280);
    cube5 = new OBox(1190, 280);

    // 2nd level _ platform 2 _ purple boxes
    cube6 = new PBox(980, 180);
    cube7 = new PBox(1040, 180);
    cube8 = new PBox(1100, 180);
    cube9 = new PBox(1160, 180);

    cube10 = new CBox(1070, 80);

    rope = new Rope(player.body, {x:200, y:300});

    getTime();
}

function draw(){
    background("brown");

    noStroke();
    textSize(35);
    fill("white");
    text("score: " + score, width - 300, 50);

    if(score === 560){
        fill("blue");
        text("You Won!", width - 500, 50);
    }

    Engine.update(engine);

    stroke(3);

    ground.display();

    platform1.display();
    platform2.display();

    player.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();

    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box16.display();
    box17.display();
    box18.display();

    cube1.display();
    cube2.display();
    cube3.display();
    cube4.display();
    cube5.display();

    cube6.display();
    cube7.display();
    cube8.display();
    cube9.display();

    cube10.display();

    // scoring
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();

    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();

    box12.score();
    box13.score();
    box14.score();
    box15.score();

    box16.score();
    box17.score();
    box18.score();

    cube1.score();
    cube2.score();
    cube3.score();
    cube4.score();
    cube5.score();

    cube6.score();
    cube7.score();
    cube8.score();
    cube9.score();

    cube10.score();

    rope.display();

    textSize(20);
    stroke(236, 98, 130);
    fill(181, 236, 98);
    text("Drag the hexagonal stone and release it towards the blocks", 100, 50);
}

function mouseDragged(){
    Body.setPosition(player.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if(keyCode === 32){
        rope = new Rope(player.body, {x:200, y:300});
    }
}

// I tried to make the mechanism of the changing background
// But that didnt work well due to the some error of the website
async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var responseType = await response.json();

    var dt = responseType.datetime;

    var hour = dt.slice(11, 13);

    if(hour > 6 && hour < 18){
        bg = color(250, 255, 117);
    }
    else{
        bg = color(88, 88, 82);
    }
}