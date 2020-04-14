let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

// hard coding in 1080p lol
c.width = 1920;
c.height = 1080;
//c.width = window.innerWidth;
//c.height = window.innerHeight;

let dropCount = 3000; // the total amount of raindrops to spawn in

let levels = []; // array for drops, idk why I called it levels
let widths = [1, 2];
let heights = [20, 25, 15];

let spacing = 0;

for (let i = 0; i < dropCount; i++) {
    spacing += Math.round(Math.random() * 20); // spacing rule between raindrops

    let current = {name: "p", width: 2, height: 25, vel: Math.round(Math.random() * 25) + 10, x: c.width/2, y: c.height/2};
    current.x = spacing;

    current.width = widths[Math.round(Math.random() * widths.length)];
    current.height = heights[Math.round(Math.random() * heights.length)];

    current.name = "p" + i;
    levels[i] = current;
}

function loop() {
    ctx.clearRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#404040";

    for (let i = 0; i < dropCount; i++) {
        levels[i].y += levels[i].vel;
        ctx.fillRect(levels[i].x, levels[i].y, levels[i].width, levels[i].height);

        if (levels[i].y > c.height) {
            levels[i].y = Math.floor(Math.random() * ((-3000) - (-100)) + (-100));
            levels[i].x = Math.round(Math.random() * c.width);
        }
    }
    requestAnimationFrame(loop); // fancy for repeat 60 times a second
}
loop(); // initial loop call
