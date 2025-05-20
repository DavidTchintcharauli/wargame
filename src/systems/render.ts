import { ctx, canvas } from '../core/canvas';
import { drawMiniMap } from '../ui/minimap';
import { drawCurrentMap } from '../world/mapManager';
import { drawPlayer } from './drawPlayer';

export function draw() {
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCurrentMap();
  drawPlayer();

  drawMiniMap();
}
