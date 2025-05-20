import './input/keyboard';
import { update } from './systems/update';
import { draw } from './systems/render';
import { generateIfNeeded } from './world/mapManager';
import { loadPlayerSprites } from './assets/loadPlayerSprites';
import { updatePlayer } from './systems/updatePlayer';
import { drawPlayer } from './systems/drawPlayer';

let lastTime = 0;

generateIfNeeded();

loadPlayerSprites().then(() => {
  requestAnimationFrame(gameLoop);
});

function gameLoop(timestamp: number) {
  const delta = timestamp - lastTime;
  lastTime = timestamp;

  updatePlayer(delta);
  drawPlayer();

  update();
  draw();

  requestAnimationFrame(gameLoop);
}
