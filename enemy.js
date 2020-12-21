/*

  Program: DodgyBlock
  Author: Amy Burnett
  Date: February 2 2019
  Description: A game 2d runner game 

    this can either be a spike or a bird 

*/


/*************************************************************************/



/*************************************************************************/

class Enemy{


    /*************************************************************************/
    // CTOR
    constructor (x,y,s){
        
        this.badie = new Spike(x,y,s);

    }


    /*************************************************************************/
    // 

    update(){

        this.badie.update();

    }


    /*************************************************************************/
    // draws the enemy to the screen
    
    show(){
    
        this.badie.show();

    }
    
    
    
    }
    