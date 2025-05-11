import { MapModule } from './types';
import { ctx, canvas } from '../../core/canvas';
import { Tile } from './tileTypes';

const TILE_SIZE = 48;
const COLS = Math.floor(canvas.width / TILE_SIZE);
const ROWS = Math.floor(canvas.height / TILE_SIZE);

function generate(): Tile[][] {
  const data: Tile[][] = [];

  for (let y = 0; y < ROWS; y++) {
    const row: Tile[] = [];
    for (let x = 0; x < COLS; x++) {
      const r = Math.random();
      if (r < 0.3) row.push({ type: 'mountain', elevation: Math.random() * 100 });
      else if (r < 0.6) row.push({ type: 'field', elevation: Math.random() * 50 });
      else row.push({ type: 'valley', elevation: Math.random() * 30 });
    }
    data.push(row);
  }

  return data;
}

function draw(data: Tile[][]): void {
  for (let y = 0; y < data.length; y++) {
    for (let x = 0; x < data[y].length; x++) {
      const tile = data[y][x];
      if (ctx) {
        switch (tile.type) {
          case 'mountain':
            ctx.fillStyle = `hsl(30, 30%, ${30 + tile.elevation * 0.3}%)`;
            break;
          case 'field':
            ctx.fillStyle = `hsl(100, 40%, ${40 + tile.elevation * 0.4}%)`;
            break;
          case 'valley':
            ctx.fillStyle = `hsl(160, 50%, ${50 + tile.elevation * 0.2}%)`;
            break;
        }

        ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      }
    }
  }
}

export const map_0_0: MapModule = { generate, draw };
