let bubble; // Declare the variable for holding the Bubble instances

function setup() {
    createCanvas(600, 400);
    bubble = new Bubble(); // Create a new instance of the Bubble class here for reminder
}

function draw() {
    background(255, 20, 147); // Set the background color here to whatever color we want to use
    bubble.move();
    bubble.show();
}

class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
    }

    move() {
        this.x = this.x + random(-5, 5); // Move the bubble in random directions or have it static here within the ranges
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255); // Set the stroke color here (change/customize here)
        strokeWeight(4); // Set the stroke weight
        noFill(); // No fill for the bubble (you can add fill if needed)
        ellipse(this.x, this.y, 24, 24); // Draw the ellipse using this.x and this.y (look at the beginning code for refrence)
    }
}