// Timers are cool
let blockX = 0;  // Define blockX
let blockY = 0;  // Define blockY
let drawTimer;
const speed = 10;
const distance = 2;
let blockColor = [255, 255, 0];

function setup() {
    createCanvas(500, 500);
    background(255, 105, 180);  // Set background color here
}

function drawBlock(x, y, color) {
    fill(color || [255, 255, 0]);  // Default color is yellow (box)
    rect(x, y, 50, 50);
}

function keyTyped() {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)) {
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    console.log('converted number', keyToNumber);
    
    if (keyToNumber % 2 === 0) {
        blockColor = [57, 255, 20];  // background color change (Pink)
    } else {
        blockColor = [255, 255, 0];  // change color of boxes (Yellow)
    }
}
window.setTimeout(() => {
    drawTimer = window.setInterval(() => {
        if (blockY + 50 <= height) {
            drawBlock(blockX, blockY, blockColor);
            blockY += distance;
        } else {
            blockY = 0;
            blockX += 50;
        }
        if (blockY - 50 > height || blockX - 50 > width) {
            // cancels timer
            window.clearInterval(drawTimer);
            // when timer stops, page says "Complete"
            alert('Complete');
        }
    }, speed);
}, 1500);