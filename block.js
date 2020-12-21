/*

  Program: DodgyBlock
  Author: Amy Burnett
  Date: February 2 2019
  Description: A game 2d runner game 


*/


/*************************************************************************/



/*************************************************************************/

class Block{


    /*************************************************************************/
    // CTOR
    constructor (x, y, size){
        
        this.position = createVector(x,y);
        this.velocity = createVector(0,0);
        this.acceleration = createVector(0,0);

        this.width = size;
        this.height = size * 2;
        
        this.rotation = 0;

        this.isGrounded = false;
        this.isJumping = false;
        this.isDucking = false;

        this.normalHeight = size * 2;
        this.duckHeight = size * 2 / 2;

        // Visuals
        this.color = 'magenta';

        
    }


    /*************************************************************************/
    // Applies physics to block 

    update(ground, spikes){

        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);

        // Gravity 
        this.isGrounded = this.collidingWith(ground);
        if(!this.isGrounded){   
            this.acceleration = createVector(0, 1);
        } else {
            this.acceleration = createVector(0, 0);
            this.velocity.y = 0;
            this.position.y = ground.position.y - (ground.height / 2) - (this.height / 2);
            this.rotation = (this.rotation > PI - 0.001) ? PI : 0; // ensures the block lands flat
            this.isJumping = false; // completed jump if was jumping
        }

        // Rotation while jumping
        if(this.isJumping){
            this.rotation += PI / 35;
            this.rotation %= TWO_PI;
        }

        // Ducking 
        if(this.isDucking){
            this.height = this.duckHeight;
        } else {
            this.height = this.normalHeight;
        }
        
            
        for(var i = 0; i < spikes.length; ++i){

            if(this.collidingWith(spikes[i])){
                game.reset();
            }

        }

        

    }
 
    /*************************************************************************/
    // Accelerates the block upwards

    jump(){

        if(this.isGrounded){
            this.acceleration = createVector(0,-18);
            this.isJumping = true;
            this.isDucking = false;
        }

    }

    
    /*************************************************************************/
    // Shrinks the height of this block

    duck(){

       this.isDucking = true;

    }

    unDuck(){

        this.isDucking = false;

    }

    /*************************************************************************/
    // Returns whether this block is colliding with ground or not

    collidingWith(object){

        // left being the left of the given object
        // tests if the right of this is past the left of the given 
        var left_bounds = this.position.x + (this.width / 2) >= object.position.x - (object.width / 2);
        var right_bounds = this.position.x - (this.width / 2) <= object.position.x + (object.width / 2);
        var top_bounds = this.position.y + (this.height / 2) >= object.position.y - (object.height / 2);
        var bottom_bounds = this.position.y - (this.height / 2) <= object.position.y + (object.height / 2);
        
        var collision = top_bounds && bottom_bounds && left_bounds && right_bounds;

        return collision;

    }
   
    
    
    /*************************************************************************/
    // draws the block to the screen 
    
    show(){
    
        push();

        fill(this.color);
        noStroke();
        strokeWeight(3);
        translate(this.position.x, this.position.y);
        rotate(this.rotation);
        rect(0, 0, this.width, this.height);

        // debugging 
        // fill('red');
        // ellipse(0, -this.height / 2, 4,4);
        // fill('lime');
        // ellipse(0, this.height / 2, 4,4);
        // fill('yellow');
        // ellipse(this.width / 2, 0, 4,4);
        // fill('blue');
        // ellipse(-this.width / 2,0, 4,4);
        // fill('black');
        // ellipse(0,0, 4,4);
        
        pop();

    }
    
    
    
    }
    