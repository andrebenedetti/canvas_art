const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const iterations = 200;


let x = 0;
let y = 0;

const rectangleWidth = 1;
const rectangleHeight = 1;


function drawRectangle(iterationOffset) {
  let yDirection;
  for (x = 0; x < iterations; x += 1) {
    for (y = 0; y < iterations; y += 1) {
      const yIterationOffset = 1 * Math.sin(0.1 * iterationOffset);
      const xIterationOffset = 1 * Math.cos(0.01 * iterationOffset)
      const xParam = (x - xIterationOffset) * (x - xIterationOffset);
      const yParam = (y - yIterationOffset) * (y - yIterationOffset)
      const red = 70 + 6 * (xParam + yParam) % 256;
      const green = (22 + 6 * (xParam + yParam) + y) % 256
      const blue = (50 + 6 * (xParam + yParam) + x) % 256
      let alpha = ((0.8 + 0.05 * x - 0.05 * y) * (0.8 + 0.05 * x - 0.05 * y)) % 1;
      if (alpha < 0.8) {
        alpha = 0.8
      }
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

drawRectangleRecursively(0, 0, 200000))