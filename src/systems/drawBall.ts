import { ctx } from '../core/canvas';
import { ball } from '../entities/ball';
import { getBallFrames } from '../assets/loadBallSprites';

export function drawBall() {
  if (!ctx) return;

  const frames = getBallFrames();
  const sprite = frames[ball.direction][ball.frameIndex];
  console.log('ball:', ball.x, ball.y, ball.direction, ball.state, ball.frameIndex);


  if (!sprite?.complete) return;

  ctx.drawImage(sprite, ball.x, ball.y, ball.size, ball.size);

}
