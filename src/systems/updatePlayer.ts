import { isRunPressed, isAttackHeld, keys } from '../input/keyboard';
import { player } from '../entities/player';
import { getPlayerFrames } from '../assets/loadPlayerSprites';

export function updatePlayer(delta: number) {
  const isRight = keys['arrowright'] || keys['d'];
  const isLeft  = keys['arrowleft']  || keys['a'];
  const isUp    = keys['arrowup']    || keys['w'];
  const isDown  = keys['arrowdown']  || keys['s'];
  const isMoving = isRight || isLeft || isUp || isDown;
  const speed = isRunPressed() ? 8 : 2;

  if (!isMoving && !isAttackHeld()) {
    player.state = 'walk';
    player.frameIndex = 0;
    return;
  }

  if (isRight) {
    player.x += speed;
    player.direction = 'right';
  } else if (isLeft) {
    player.x -= speed;
    player.direction = 'left';
  }

  if (isUp) player.y -= speed;
  if (isDown) player.y += speed;

  if (isAttackHeld()) {
    player.state = 'attack';
  } else {
    player.state = 'walk';
  }

  player.frameTimer += delta;
  const frames = getPlayerFrames()[player.state]?.[player.direction];
  const frameCount = frames?.length || 1;

  if (player.frameTimer >= player.frameDelay) {
    player.frameTimer = 0;
    player.frameIndex = (player.frameIndex + 1) % frameCount;
  }
}
