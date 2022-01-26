let c = document.getElementById("main");
let ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

let drops = [];

function startAnimation(dropCount, velocity, width) {
	drops = [];

	let minHeight = 10;
	let maxHeight = 25;
	
	for (i = 0; i < dropCount; i++) {
		let current = {
			name: "p" + i,
			width: width,
			height: Math.floor((Math.random() * maxHeight) + minHeight),
			velocity: velocity,
			x: Math.floor(Math.random() * c.width),
			y: Math.floor(Math.random() * c.height),
		};
		drops[i] = current;
	}
	
	function loop() {
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.fillStyle = "#4a4a4a";
	
		for (i = 0; i < drops.length; i++) {
			drops[i].y += drops[i].velocity;

			if (drops[i].y > c.height) {
				drops[i].y = -maxHeight - 5;
				drops[i].x = Math.floor(Math.random() * c.width);
			}
			if (drops[i].x > c.width) {
				drops[i].x = 0;
			}

			ctx.fillRect(drops[i].x, drops[i].y, drops[i].width, drops[i].height);
		}
		
		if (dropCount != drops.length) { return; }
		if (velocity != drops[0].velocity) { return; }
		if (width != drops[0].width) { return; }
		
		requestAnimationFrame(loop);
	}
	loop();
}

function callAnimation() {
	document.getElementById("dropLabel").innerHTML = document.getElementById("dropCount").value;
	document.getElementById("velocityLabel").innerHTML = document.getElementById("velocity").value;
	document.getElementById("widthLabel").innerHTML = document.getElementById("width").value;

	let dropCount = parseInt(document.getElementById("dropCount").value);
	let velocity = parseInt(document.getElementById("velocity").value);
	let width = parseInt(document.getElementById("width").value);

	startAnimation(dropCount, velocity, width); 
}
callAnimation();