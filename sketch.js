/*

  Program: DodgyBlock
  Author: Amy Burnett
  Date: February 2 2019
  Description: A game 2d runner game 


*/

/*************************************************************************/
// Global Variables

var game;
var bot;
const BIRD = 1;
const SPIKE = 0;
var epochCount;

/*************************************************************************/


function setup() {

    createCanvas(400, 400);
    ellipseMode(CENTER,CENTER);
    rectMode(CENTER,CENTER);
    frameRate(60);
    epochCount = 0;

    game = new Game();

    bot = new Bot();

    for(var i = 0; i < 1000; ++i){
        bot.trainEpoch();
    }

}


/*************************************************************************/


function draw() {

    //background(100,150,255);
    background('grey');
    translate(width / 2, height / 2);

    game.update();
    game.show();


    // preparing data
    // distance to next enemy
    var distance = (game.nextEnemy.position.x + (game.nextEnemy.width / 2)) - (game.block.position.x - (game.block.width / 2));
    var normalized_dist = distance / game.enemy_frequency;
    var type = game.nextEnemy instanceof Bird ? BIRD : SPIKE;
    var bird_height = game.nextEnemy.position.y - (game.ground.position.y - game.ground.height);
    var normalized_bird_height = bird_height / 100;
    if(type != BIRD)
        normalized_bird_height = 0;

    var inputs = [normalized_dist, type, normalized_bird_height];

    //console.log(inputs);

    // Bot is taught continuously 
    // Note: this is still supervised learning 
    // just done in a way that you can see the progress
    for(var i = 0; i < 10; ++i)
    bot.trainEpoch();
    //console.log("EpochCount: " + ++epochCount);

    bot.play(inputs);

    
    document.getElementById("epoch").innerHTML = bot.epochs;


}


/*************************************************************************/

function keyPressed(){

    // Space bar
    if(keyCode == UP_ARROW || key == " "){

        game.blockJump();

    } else if(keyCode == DOWN_ARROW){

        game.blockDuck();

    } else if(key == "R"){

        game.reset();

    }


}

function keyReleased(){

    if(keyCode == DOWN_ARROW){

        game.blockUnduck();

    }

}