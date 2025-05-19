import './input/keyboard';
import { update } from './systems/update';
import { draw } from './systems/render';
import { generateIfNeeded } from './world/mapManager';
import { loadBallSprites, getBallFrames } from './assets/loadBallSprites';
import { updateBall } from './systems/updateBall';
import { drawBall } from './systems/drawBall';

let lastTime = 0;

generateIfNeeded();

loadBallSprites().then(() => {
  requestAnimationFrame(gameLoop);
});

function gameLoop(timestamp: number) {
  const delta = timestamp - lastTime;
  lastTime = timestamp;

  updateBall(delta);
  drawBall();

  update();
  draw();

  requestAnimationFrame(gameLoop);
}
