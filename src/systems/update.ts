import { keys, isRunPressed } from '../input/keyboard';
import { canvas } from '../core/canvas';
import { tryChangeMap } from '../world/map';
import { player } from '../entities/player';

export function update() {
  player.state = 'walk';

  const isRight = keys['arrowright'] || keys['d'];
  const isLeft = keys['arrowleft'] || keys['a'];
  const isUp = keys['arrowup'] || keys['w'];
  const isDown = keys['arrowdown'] || keys['s'];

  const speed = isRunPressed() ? 18 : 2;

  if (isRight) {
    player.x += speed;
    player.direction = 'right';
    player.state = 'walk';
  } else if (isLeft) {
    player.x -= speed;
    player.direction = 'left';
    player.state = 'walk';
  }

  if (isUp) {
    player.y -= speed;
    player.state = 'walk';
  } else if (isDown) {
    player.y += speed;
    player.state = 'walk';
  }

  const padding = 4;

  if (player.x < 0 - padding) {
    if (tryChangeMap('left')) player.x = canvas.width - 64;
    else player.x = 0;
  }

  if (player.x + 64 > canvas.width + padding) {
    if (tryChangeMap('right')) player.x = 0;
    else player.x = canvas.width - 64;
  }

  if (player.y < 0 - padding) {
    if (tryChangeMap('up')) player.y = canvas.height - 64;
    else player.y = 0;
  }

  if (player.y + 64 > canvas.height + padding) {
    if (tryChangeMap('down')) player.y = 0;
    else player.y = canvas.height - 64;
  }
}
