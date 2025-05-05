import { ctx, canvas } from '../core/canvas';
import { currentMap } from '../world/map';
import { player } from '../entities/player';

const TILE_SIZE = 100;
const MAP_GRID = 3;
const MINI_MAP_SIZE = TILE_SIZE * MAP_GRID;
const PADDING = 10;

export function drawMiniMap() {
  if (!ctx) {
    console.error('Canvas rendering context is not available.');
    return;
  }

  const startX = canvas.width - MINI_MAP_SIZE - PADDING;
  const startY = canvas.height - MINI_MAP_SIZE - PADDING;

  for (let y = 0; y < MAP_GRID; y++) {
    for (let x = 0; x < MAP_GRID; x++) {
      const colorHue = (x + y * MAP_GRID) * 40;
      ctx.fillStyle = `hsl(${colorHue}, 60%, 20%)`;
      ctx.fillRect(startX + x * TILE_SIZE, startY + y * TILE_SIZE, TILE_SIZE, TILE_SIZE);

      if (currentMap.x === x && currentMap.y === y) {
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.strokeRect(startX + x * TILE_SIZE, startY + y * TILE_SIZE, TILE_SIZE, TILE_SIZE);

        const px = startX + x * TILE_SIZE + (player.x / canvas.width) * TILE_SIZE;
        const py = startY + y * TILE_SIZE + (player.y / canvas.height) * TILE_SIZE;
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}
