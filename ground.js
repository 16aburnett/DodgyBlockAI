/*

  Program: DodgyBlock
  Author: Amy Burnett
  Date: February 2 2019
  Description: A game 2d runner game 


*/


/*************************************************************************/



/*************************************************************************/

class Ground{


    /*************************************************************************/
    // CTOR
    constructor (){
        
        this.position = createVector(0, 235);
        this.width = width; 
        this.height = height;
        
        // edge values
        this.top = createVector(this.position.x, this.position.y - (this.height / 2));

        this.color = "black";

    }


    /*************************************************************************/
    // 

    update(){



    }


    /*************************************************************************/
    // draws the ground to the screen
    
    show(){
    
        fill(this.color);
        noStroke();
        rect(this.position.x, this.position.y, this.width, this.height);
    
    }
    
    
    
    }
    