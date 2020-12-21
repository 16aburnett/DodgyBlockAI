/*

  Program: DodgyBlock
  Author: Amy Burnett
  Date: February 2 2019
  Description: A game 2d runner game 

  this is the ai bot designed to play this game 


*/


/*************************************************************************/

const JUMP = 0;
const DUCK = 1;
const DO_NOTHING = 2;


/*************************************************************************/

class Bot{

    /*************************************************************************/
    // CTOR
    constructor (){
  
        this.brain = new NeuralNetwork(3,4,3);
        this.epochs = 0;
        this.training_data = [

            // spike 
            {
                inputs: [0.03, 0, 0],
                outputs: [1, 0, 0]
            },
            {
                inputs: [0.7, 0, 0],
                outputs: [0, 0, 1]
            },
            {
                inputs: [1, 0, 0],
                outputs: [0, 0, 1]
            },
            {
                inputs: [0.5, 0, 0],
                outputs: [0, 0, 1]
            },
            {
                inputs: [-0.03, 0, 0],
                outputs: [0, 0, 1]
            },
            {
                inputs: [0, 0, 0],
                outputs: [0, 0, 1]
            },
            {
                inputs: [0.5, 0, 0],
                outputs: [0, 0, 1]
            },
            {
                inputs: [0.1, 0, 0],
                outputs: [1, 0, 0]
            },
            {
                inputs: [0.07, 0, 0],
                outputs: [1, 0, 0]
            },

            // bird

            {
                inputs: [0.03, 1, 1.85],
                outputs: [1, 0, 0]
            },
            {
                inputs: [0.05, 1, 1.85],
                outputs: [1, 0, 0]
            },
            {
                inputs: [0.1, 1, 1.85],
                outputs: [1, 0, 0]
            },
            {
                inputs: [1, 1, 1.85],
                outputs: [0, 0, 1]
            },
            {
                inputs: [0.8, 1, 1.85],
                outputs: [0, 0, 1]
            },
            {
                inputs: [0.1, 1, 1],
                outputs: [0, 0, 1]
            },
            {
                inputs: [0.7, 1, 1],
                outputs: [0, 0, 1]
            },
            {
                inputs: [0.1, 1, 1.5],
                outputs: [0, 1, 0]
            },
            {
                inputs: [0.05, 1, 1.5],
                outputs: [0, 1, 0]
            },
            {
                inputs: [0, 1, 1.5],
                outputs: [0, 1, 0]
            },
            {
                inputs: [-0.03, 1, 1.5],
                outputs: [0, 1, 0]
            },

            
        ];
        
    }

    /*************************************************************************/
    // Trains the bot to play the game
    // study all training_data once (random order)

    trainEpoch (){
        
        shuffle(this.training_data, true);

        for(var i = 0; i < this.training_data.length; ++i){

            this.brain.train(this.training_data[i].inputs, this.training_data[i].outputs);

        }

        ++this.epochs;
        
    }


    /*************************************************************************/
    // attempts to play the game 
    
    play (inputs){
  
        var outputs = this.brain.feedForward(inputs);

        console.log("==================");
        console.log("inputs:");
        console.log(inputs);
        console.log("Outputs:");
        console.log(outputs);

        var i = arrmax(outputs);
        if(i == JUMP){
            game.blockJump();
            console.log("jump");
        } else if(i == DUCK){
            game.blockDuck();
            console.log("duck");
        } else {
            //do nothing 
            console.log("doing nothing");
        }

        
        console.log("==================");
    }
    
    /*************************************************************************/
    //END OF CLASS

}
 

/*************************************************************************/
// UTILITY FUNCTIONS

function arrmax(arr){

    var max = 0; 
    var index = -1;
    for(var i = 0; i < arr.length; ++i){
        if(arr[i] > max){
            max = arr[i];
            index = i;
        }
    }

    return index;
}