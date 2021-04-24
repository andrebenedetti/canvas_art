const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let i = 0;
const iterations = 255;


let x = 0;
let y = 0;

const rectangleWidth = 2;
const rectangleHeight = 2;

const xOffsetBase = 3;
const yOffsetBase = 3;


function drawRectangle(iterationOffset) {
  let yDirection;
  for (x = 0; x < iterations; x += 1) {
    const alpha = 0.7
    for (y = 0; y < iterations; y += 1) {
      const yIterationOffset = 1 * Math.sin(0.1 * iterationOffset);
      const xIterationOffset = 1 * Math.cos(0.01 * iterationOffset)
      const xParam = (x - xIterationOffset) * (x - xIterationOffset);
      const yParam = (y - yIterationOffset) * (y - yIterationOffset)
      const red = 56 + 6 * (xParam + yParam) % 256;
      const green = 60 + 6 * (xParam + yParam) % 256
      const blue = 30 + 6 * (xParam + yParam) % 256
      ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha}`;
      ctx.fillRect(x, y, rectangleWidth, rectangleHeight)
    }
  }
}


function drawRectangleRecursively(iterationOffset, currentDuration, limitMs) {
  const intervalMiliseconds = 6;

  drawRectangle(iterationOffset)

  if (currentDuration > limitMs) {
    return;
  }

  setTimeout(() => {
    drawRectangleRecursively(iterationOffset + 1, currentDuration + intervalMiliseconds, limitMs)
  })
}

drawRectangleRecursively(0, 0, 200000)