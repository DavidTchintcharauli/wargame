import { keys, isRunPressed } from '../input/keyboard';
import { canvas } from '../core/canvas';
import { tryChangeMap } from '../world/map';
import { ball } from '../entities/ball';

export function update() {
  ball.state = 'idle';

  const isRight = keys['arrowright'] || keys['d'];
  const isLeft = keys['arrowleft'] || keys['a'];
  const isUp = keys['arrowup'] || keys['w'];
  const isDown = keys['arrowdown'] || keys['s'];

  const speed = isRunPressed() ? 18 : 2;

  if (isRight) {
    ball.x += speed;
    ball.direction = 'right';
    ball.state = 'walk';
  } else if (isLeft) {
    ball.x -= speed;
    ball.direction = 'left';
    ball.state = 'walk';
  }

  if (isUp) {
    ball.y -= speed;
    ball.state = 'walk';
  } else if (isDown) {
    ball.y += speed;
    ball.state = 'walk';
  }

  const padding = 4;

  if (ball.x < 0 - padding) {
    if (tryChangeMap('left')) ball.x = canvas.width - 64;
    else ball.x = 0;
  }

  if (ball.x + 64 > canvas.width + padding) {
    if (tryChangeMap('right')) ball.x = 0;
    else ball.x = canvas.width - 64;
  }

  if (ball.y < 0 - padding) {
    if (tryChangeMap('up')) ball.y = canvas.height - 64;
    else ball.y = 0;
  }

  if (ball.y + 64 > canvas.height + padding) {
    if (tryChangeMap('down')) ball.y = 0;
    else ball.y = canvas.height - 64;
  }
}
