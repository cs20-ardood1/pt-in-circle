// Point in Circle

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Variables
let mouseX;
let mouseY;

let blackCircle = newRandomCircle();

// Call draw function once all page resources have loaded
window.addEventListener("load", draw);

function draw() {
  // LOGIC - test if mouse in circles

  if (ptInCircle(mouseX, mouseY, 150, 150, 100)) {
    document.body.style.backgroundColor = "red";
  } else if (ptInCircle(mouseX, mouseY, 475, 125, 60)) {
    document.body.style.backgroundColor = "green";
  } else if (ptInCircle(mouseX, mouseY, 350, 275, 40)) {
    document.body.style.backgroundColor = "blue";
  }
  if (ptInCircle(mouseX, mouseY, blackCircle.x, blackCircle.y, blackCircle.r)) {
    document.body.style.backgroundColor = "white";
    blackCircle = newRandomCircle();
  }
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "red";
  fillCircle(150, 150, 100);

  ctx.fillStyle = "green";
  fillCircle(475, 125, 60);

  ctx.fillStyle = "blue";
  fillCircle(350, 275, 40);

  ctx.fillStyle = "black";
  fillCircle(blackCircle.x, blackCircle.y, blackCircle.r);

  // Redraw
  requestAnimationFrame(draw);
}

// Event Stuff
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(e) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(e.clientX - cnvRect.left);
  mouseY = Math.round(e.clientY - cnvRect.top);
}

// Helper Functions
function fillCircle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

function ptInCircle(x1, y1, x, y, r) {
  // Calculate the distance between the test point and the center of the circle
  let distance = Math.sqrt((x1 - x) ** 2 + (y1 - y) ** 2);

  if (distance <= r) {
    return true;
  }
}

function newRandomCircle() {
  return {
    x: Math.random() * cnv.width,
    y: Math.random() * cnv.height,
    r: Math.random() * 50 + 10,
  };
}
