const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let i = 0;
const iterations = 255;


const rectangleWidth = 2;
const rectangleHeight = 2;

const xOffsetBase = 3;
const yOffsetBase = 3;


function drawRectangle(iterationOffset) {
  for (let x = 0; x < iterations; x += 1) {
    const alpha = 0.5
    for (let y = 0; y < iterations; y += 1) {
      const red = (x + y + iterationOffset) % 256;
      const green = (y + iterationOffset) % 256
      const blue = (x + iterationOffset) % 256
      ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha}`;
      ctx.fillRect(0 + x * (xOffsetBase), 0 + y * (yOffsetBase), rectangleWidth, rectangleHeight)
    }
  }
}


function drawRectangleRecursively(iterationOffset, currentDuration, limitMs) {
  const intervalMiliseconds = 10;

  drawRectangle(iterationOffset)

  if (currentDuration > limitMs) {
    return;
  }

  setTimeout(() => {
    drawRectangleRecursively(iterationOffset + 1, currentDuration + intervalMiliseconds, limitMs)
  })
}

drawRectangleRecursively(0, 0, 20000)