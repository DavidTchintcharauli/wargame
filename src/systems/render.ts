import { ctx, canvas } from '../core/canvas';
import { drawMiniMap } from '../ui/minimap';
import { drawCurrentMap } from '../world/mapManager';
import { drawBall } from './drawBall';
import { getBallFrames } from '../assets/loadBallSprites';

export function draw() {
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCurrentMap();
  drawBall();

  drawMiniMap();
}
