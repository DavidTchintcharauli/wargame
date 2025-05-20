import { ctx } from '../core/canvas';
import { player } from '../entities/player';
import { getPlayerFrames } from '../assets/loadPlayerSprites';

export function drawPlayer() {
  if (!ctx) return;

  const frames = getPlayerFrames();
  const sprite = frames[player.state]?.[player.direction]?.[player.frameIndex];

  if (!sprite?.complete) return;
  console.log('state:', player.state, 'frameIndex:', player.frameIndex);


  ctx.drawImage(sprite, player.x, player.y, player.size, player.size);
}
