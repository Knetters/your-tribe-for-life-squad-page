// Get the drawing canvas element
const page = document.querySelector('.page');
const canvas = document.querySelector('.drawing-canvas');
const ctx = canvas.getContext('2d');

// Set the canvas size
canvas.width = page.innerWidth;
canvas.height = page.innerHeight;

// Variables
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let brushSize = 3; // You can set the desired default brush size
let brushColor = "#141414"; // Default brush color (black)

function changeBrushColor(color) {
  brushColor = color;
}

function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];

  // Save the initial point for undo purposes
  drawingHistory.push({ x: lastX, y: lastY });
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

  // Save the new point for undo purposes
  drawingHistory.push({ x: lastX, y: lastY });
}

function stopDrawing() {
  isDrawing = false;
}

// Add event listeners to handle drawing
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);