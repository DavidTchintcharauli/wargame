import { ctx } from '../core/canvas';
import { player } from '../entities/player';
import { ball } from '../entities/ball';

export function drawBall(frames: HTMLImageElement[]) {
  if (!ctx) return;
  const sprite = frames[ball.frameIndex];
  if (!sprite?.complete) return;

  const w = sprite.width;
  const h = sprite.height;

  ctx.drawImage(sprite, player.x, player.y, w, h);
}
