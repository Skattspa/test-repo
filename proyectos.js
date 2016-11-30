
//how to calculate area//

var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// area method 
square.calcArea = function(){
    return this.sideLength * this.sideLength;
    
    };

var p = square.calcPerimeter();
var a = square.calcArea();

//RABBITS//

// array counter//
function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit ("fluffy");
var rabbit2 = new Rabbit ("happy");
var rabbit3 = new Rabbit ("sleepy");

//array for print the rabbits
var rabbits = [rabbit1, rabbit2, rabbit3];

for(var i = 0; i < rabbits.length; i++) {
   rabbits[i].describeMyself();
}
