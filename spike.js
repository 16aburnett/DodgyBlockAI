/*

  Program: DodgyBlock
  Author: Amy Burnett
  Date: February 2 2019
  Description: A game 2d runner game 


*/


/*************************************************************************/



/*************************************************************************/

class Spike{


    /*************************************************************************/
    // CTOR
    constructor (x,y,size){
        
        this.position = createVector(x,y);
        this.velocity = createVector(-5,0);

        if(!size) size = 20;

        this.width = size;
        this.height = size; 

        // Visuals
        this.color = 'black';

    }


    /*************************************************************************/
    // 

    update(){

        this.position.add(this.velocity);

    }

    /*************************************************************************/
    // 

    // if something collides with this, tell it to die lmao

    /*************************************************************************/
    // draws the spike to the screen
    
    show(){
    
        push();

        translate(this.position.x, this.position.y - (this.height / 2));
        fill(this.color);
        triangle(0, -this.height / 2, this.width / 2, this.height / 2, -this.width / 2, this.height / 2);


        // Hit detection block
        // noFill();
        // stroke('red');
        // rect(0,0,this.width, this.height);

        pop();

    }
    
    
    
    }
    