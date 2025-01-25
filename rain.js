let canvas = document.getElementById("main");
let ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

console.log(window.outerHeight, window.outerWidth);

let drops = [];

const ClampingSpeed = 1.1;


const defaultvelocity = 0;

function DoDropletRain(index, drop) {
	// the modulus of even number and 2 is always going to be zero.
	let modulus = index%2;
	
	if (modulus == 0) {
		drop.y += drop.velocity * ClampingSpeed;
		// drop.x = Math.floor(Math.random() * canvas.width);
	}
	else { 
		drop.y += drop.velocity;

		// drop.x = Math.floor(Math.random() * canvas.width);
	};
};



function startAnimation(dropCount, velocity, width, minHeight, maxHeight) {
	drops = [];
	
	for (i = 0; i < dropCount; i++) {
		let current = {
			name: "p" + i,
			width: width,
			height: Math.floor((Math.random() * maxHeight) + minHeight),
			velocity: velocity,
			x: Math.floor(Math.random() * canvas.width),
			y: Math.floor(Math.random() * canvas.height),
		};
		drops[i] = current;
	}

	function loop() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#4a4a4a";
		// scrolls the rain down on the y axis according to the velocity
		for (i = 0; i < drops.length; i++) {


			DoDropletRain(i, drops[i])

			if(drops[i].x > canvas.width) {
				drops[i].x = 0;
			}

			if(drops[i].y > canvas.height) drops[i].y = 0;

			ctx.fillRect(drops[i].x, drops[i].y, drops[i].width, drops[i].height);
		}
		
		if(dropCount != drops.length)return;
		if(velocity != drops[0].velocity)return;
		if(width != drops[0].width)return;
		
		requestAnimationFrame(loop);
	}
	loop();
}

function callAnimation() {
	let dropCount = parseInt(document.getElementById("dropCount").value);
	let velocity = parseInt(document.getElementById("velocity").value);
	let width = parseInt(document.getElementById("width").value);
	let Height = parseInt(document.getElementById("Height").value);
	
	document.getElementById("dropLabel").innerHTML = dropCount;
	document.getElementById("velocityLabel").innerHTML = velocity;
	document.getElementById("widthLabel").innerHTML = width;
	document.getElementById("HeightLabel").innerHTML = Height;

	startAnimation(dropCount, velocity, width, Height, Height + 15); 
}
callAnimation();
