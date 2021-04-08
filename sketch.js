var ball, database;
var position;

var form;

var gamestate = 0

var control

var player

var playerCount;

var distance = 0


var car1, car2, car3, car4, cars






var playersInfo

function preload(){
    trackImg = loadImage("images/track.jpg")
    car1img = loadImage("images/car1.png")
    car2img = loadImage("images/car2.png")
    car3img = loadImage("images/car3.png")
    car4img = loadImage("images/car4.png")
}

function setup(){
    canvas = createCanvas(displayWidth - 50, displayHeight-20);
    database = firebase.database();
    //createCanvas(500,500);


    control = new Control()
    control.gameStart()
    control.readState()
}

function draw(){
    background("white");

   if(playerCount === 4){
       control.updateState(1)
   }

   
   if(gamestate === 1){
       clear()
       control.play()
       //console.log(gamestate) 
       
   }

   if(gamestate === 2){
       control.end()
   }





    
}





