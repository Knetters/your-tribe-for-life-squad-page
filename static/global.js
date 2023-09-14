function toggleDraw() {
  var canvas = document.getElementById("drawing-canvas");
  
  // Get the current value of the pointer-events property
  var currentPointerEvents = canvas.style.pointerEvents || "none";

  // Toggle the pointer-events property
  if (currentPointerEvents === "auto") {
    canvas.style.pointerEvents = "none";
  } else {
    canvas.style.pointerEvents = "auto";
  }
}

// Get the drawing canvas element
const canvas = document.querySelector('.drawing-canvas');
const ctx = canvas.getContext('2d');

// Set the canvas size
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

// Variables
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let brushSize = 3; // You can set the desired default brush size
let brushColor = "#141414"; // Default brush color (black)

function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function draw(e) {
  if (!isDrawing) return;
  const [x, y] = [e.offsetX, e.offsetY];

  // Draw on the client's canvas with circular strokes
  ctx.lineCap = "round"; // Set the line cap to round for circular strokes
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);

  // Set the line thickness and color
  ctx.lineWidth = brushSize;
  ctx.strokeStyle = brushColor;
  ctx.stroke();

  [lastX, lastY] = [x, y];
}

function stopDrawing() {
  isDrawing = false;
}

// Add event listeners to handle drawing
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);