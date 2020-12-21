/*

  Program: DodgyBlock
  Author: Amy Burnett
  Date: February 2 2019
  Description: A game 2d runner game 


*/


/*************************************************************************/



/*************************************************************************/

class Game{


    /*************************************************************************/
    // CTOR
    constructor (){

        this.block = new Block(-100, 26, 30);
        this.ground = new Ground();
        this.enemies = [];

        this.enemy_frequency = 300;
        this.game_speed = 1;
        this.bird_frequency = 0.20;

        for(var i = 0; i < 10; ++i){
            this.addEnemy();
        }
        this.nextEnemy = this.enemies[0];
        

        this.score = 0;

    }

    /*************************************************************************/ 
    // 

    reset(){

        this.block = new Block(-100, 26, 30);
        this.ground = new Ground();
        this.enemies = [];

        this.enemy_frequency = 300;
        this.game_speed = 1;
        this.bird_frequency = 0.20;

        for(var i = 0; i < 10; ++i){
            this.addEnemy();
        }
        this.nextEnemy = this.enemies[0];
        

        this.score = 0;

        console.log("game reset");


    }


    /*************************************************************************/

    update(){

        // update block
        this.block.update(this.ground, this.enemies);
        
        // update enemies
        for(var i = 0; i < this.enemies.length; ++i){
            this.enemies[i].update();
            //this.enemies[i].color = 'black';
        }
        //this.nextEnemy.color = 'red';

        // remove enemies that go offscreen left
        if(this.enemies[0].position.x < -width){
            this.enemies.splice(0,1);
            this.addEnemy();
        }

        // next enemy 
        if(this.nextEnemy.position.x + (this.nextEnemy.width / 2) < this.block.position.x - (this.block.width / 2)){
            this.nextEnemy = this.enemies[1];
            ++this.score;
        }

        // update score display 
        document.getElementById("score").innerHTML = this.score;

    }



    /*************************************************************************/
    // adds a new enemy to the game 

    addEnemy(){
        if(this.enemies.length > 0){
            var lastEnemy = this.enemies[this.enemies.length - 1];
            var x = lastEnemy.position.x + random(50) + this.enemy_frequency;
            this.enemies.push(this.generateEnemy(x));
        } 

        // adding brand new enemy 
        else {
            var x = this.enemy_frequency;
            this.enemies.push(this.generateEnemy(x));
        }
    }

    generateEnemy(x){

        var enemy; 

        // Pick enemy type 
        // Bird
        if(random(1) <= this.bird_frequency) {
            var y;

            // determining y height 
            var rand = random(1);
            if(rand >= 0.75){
                y = this.ground.top.y - 100;
            } else if (rand >= 0.25) {
                y = this.ground.top.y - 50;
            } else {
                y = this.ground.top.y - 15;
            }
            enemy = new Bird(x,y);
        } 
        
        // Spike 
        else {
            enemy = new Spike(x, this.ground.top.y);
        }

        return enemy;
    }

    /*************************************************************************/

    blockJump(){

        this.block.jump();

    }

    /*************************************************************************/

    blockDuck(){

        this.block.duck();

    }

    blockUnduck(){

        this.block.unDuck();

    }

    /*************************************************************************/


    show(){

        this.block.show();
        this.ground.show();

            
        for(var i = 0; i < this.enemies.length; ++i){

            this.enemies[i].show();

        }


    }



}
