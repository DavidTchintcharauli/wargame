import { ctx, canvas } from '../core/canvas';
import { player } from '../entities/player';
import { drawMiniMap } from '../ui/minimap';
import { drawCurrentMap } from '../world/mapManager';

export function draw() {
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // ახალი კოდი — დახატე ნამდვილი რუკა ცალკე ფაილიდან
  drawCurrentMap();

  // მოთამაშე
  ctx.fillStyle = 'white';
  ctx.fillRect(player.x, player.y, player.size, player.size);

  drawMiniMap();
}
