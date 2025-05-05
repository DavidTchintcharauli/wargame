import './input/keyboard';
import { update } from './systems/update';
import { draw } from './systems/render';
import { generateIfNeeded } from './world/mapManager';

generateIfNeeded(); // ⚠️ ეს უნდა გაეშვას პირველივე frame-ამდე
gameLoop();

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}
