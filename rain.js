let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

// hard coding in 1080p lol
c.width = 1920;
c.height = 1080;
//c.width = window.innerWidth;
//c.height = window.innerHeight;

// the amount of raindrops
let dropCount = 3000;

// main object, idk why I called it p
let p = {
    width: 2,
    height: 150,
    vel: 0,
    x: c.width/2,
    y: c.height/2,
}

let abc = 0;

function update(ctx, x, y, w, h, vel) {
    //ctx.clearRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, abc, w, h);

    // fills in for y, will keep new value per loop unlike y
    abc += vel;

    //console.log(abc);
}

// loop counter variable
let count = 0;

let levels = [];

// dynamically make varaiblesaw>DFWeTGPOW??R POIJES34AZR5YIUE DA5RIPYHGUJESDIP5UJGYHHNP95RED4SHP[9
let change = 0;

let widths = [1, 2];
let heights = [20, 25, 15];

let speeds = [15, 40]; 

for (let i = 0; i < dropCount; i++) {
    change += Math.round(Math.random() * 20); // spacing between objects

    changeW = Math.round(Math.random() * 2) + 1;


    let current = {name: p, width: 2, height: 25, vel: Math.round(Math.random() * 25) + 10, x: c.width/2, y: c.height/2};
    current.x = change;

    current.width = widths[Math.round(Math.random() * widths.length)];
    current.height = heights[Math.round(Math.random() * heights.length)];

    current.name = "p" + i;
    levels[i] = current;
    //levels[i].x += 100;
    
}

let y = 100;

// changes velocity per object
p.vel = Math.round(Math.random() * 14) + 1; // random from 1-15

let vel2 =  Math.round(Math.random() * 14) + 1; // random from 1-15




function loop() {
    ctx.clearRect(0, 0, c.width, c.height);
    // change some values for the object
    //p.y++;


    /*
    for (let i = 0; i < 200; i++) {
        levels[i].y += levels[i].vel;

        update(ctx, levels[i].x, levels[i].y, levels[i].width, levels[i].height);
        //levels[i].x++;
    }
    */






    ctx.fillStyle = "#404040";


    for (let i = 0; i < dropCount; i++) {
        levels[i].y += levels[i].vel;
        ctx.fillRect(levels[i].x, levels[i].y, levels[i].width, levels[i].height);

        if (levels[i].y > c.height) {
            levels[i].y = Math.floor(Math.random() * ((-3000) - (-100)) + (-100));
            levels[i].x = Math.round(Math.random() * c.width);
        }
    }






    //p.y += p.vel;
    //update(ctx, 100, p.y, 3, 150, p.vel);
    //update(ctx, 110, p.y, 3, 150, p.vel);

/*
    //update(ctx, 100, p.y, 3, 150);

    let yeah = c.width/2;

    for (let i = 0; i < 5; i++) {
        yeah += 2;
        update(ctx, yeah, p.y, 3, 150);
    }
*/

















    // wrap object around screen
    if (p.x > c.width) {
        p.x = 0;
    } else if (p.x < 0) {
        p.x = c.width;
    }
    if (p.y > c.height) {
        p.y = 0;
    } else if (p.y < 0) {
        p.y = c.height;
    }




    count++;
    requestAnimationFrame(loop);
}
loop();