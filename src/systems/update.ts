import { keys, isDirectionPressed, isRunPressed } from '../input/keyboard';
import { canvas } from '../core/canvas';
import { tryChangeMap } from '../world/map';
import { player } from '../entities/player';
import { ball } from '../entities/ball';

export function update() {
  
  if (!isDirectionPressed()) return;

  const speed = player.getSpeed(isRunPressed());

  if (keys['arrowup'] || keys['w']) player.move(0, -speed);
  if (keys['arrowdown'] || keys['s']) player.move(0, speed);
  if (keys['arrowleft'] || keys['a']) player.move(-speed, 0);
  if (keys['arrowright'] || keys['d']) player.move(speed, 0);

  const padding = 4;

  if (player.x < 0 - padding) {
    if (tryChangeMap('left')) player.x = canvas.width - player.size;
    else player.x = 0;
  }

  if (player.x + player.size > canvas.width + padding) {
    if (tryChangeMap('right')) player.x = 0;
    else player.x = canvas.width - player.size;
  }

  if (player.y < 0 - padding) {
    if (tryChangeMap('up')) player.y = canvas.height - player.size;
    else player.y = 0;
  }

  if (player.y + player.size > canvas.height + padding) {
    if (tryChangeMap('down')) player.y = 0;
    else player.y = canvas.height - player.size;
  }
}
