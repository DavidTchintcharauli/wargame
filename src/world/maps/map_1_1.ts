import { MapModule } from './types';
import { ctx, canvas } from '../../core/canvas';
import { Tile } from './tileTypes';

const TILE_SIZE = 8;
const COLS = Math.floor(canvas.width / TILE_SIZE);
const ROWS = Math.floor(canvas.height / TILE_SIZE);

function generate(): Tile[][] {
  const data: Tile[][] = [];

  for (let y = 0; y < ROWS; y++) {
    const row: Tile[] = [];
    for (let x = 0; x < COLS; x++) {
      const r = Math.random();
      if (r < 0.2) {
        row.push({ type: 'mountain', elevation: 60 + Math.random() * 40 });
      } else if (r < 0.5) {
        row.push({ type: 'field', elevation: 30 + Math.random() * 30 });
      } else {
        row.push({ type: 'valley', elevation: 10 + Math.random() * 20 });
      }
    }
    data.push(row);
  }

  return data;
}

function draw(data: Tile[][]): void {
  if (!ctx) return;

  for (let y = 0; y < data.length; y++) {
    for (let x = 0; x < data[y].length; x++) {
      const tile = data[y][x];
      const shade = Math.floor(tile.elevation);

      switch (tile.type) {
        case 'mountain':
          ctx.fillStyle = `hsl(25, 25%, ${25 + shade * 0.4}%)`;
          break;
        case 'field':
          ctx.fillStyle = `hsl(90, 40%, ${35 + shade * 0.3}%)`;
          break;
        case 'valley':
          ctx.fillStyle = `hsl(160, 60%, ${45 + shade * 0.2}%)`;
          break;
      }

      ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }


  ctx.fillStyle = '#666';
  for (let x = 0; x < COLS; x++) {
    ctx.fillRect(x * TILE_SIZE, Math.floor(ROWS / 2) * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }

  ctx.fillStyle = 'maroon';
  for (let i = 0; i < 3; i++) {
    const hx = 2 + i * 3;
    const hy = 3;
    ctx.fillRect(hx * TILE_SIZE, hy * TILE_SIZE, TILE_SIZE * 2, TILE_SIZE * 2);
    ctx.fillStyle = 'orange';
    ctx.fillRect(hx * TILE_SIZE + 2, hy * TILE_SIZE, TILE_SIZE * 2 - 4, TILE_SIZE / 2);
    ctx.fillStyle = 'maroon';
  }

  for (let i = 0; i < 5; i++) {
    const tx = COLS - 10 + Math.floor(Math.random() * 6);
    const ty = ROWS - 8 + Math.floor(Math.random() * 5);
    ctx.fillStyle = 'darkgreen';
    ctx.beginPath();
    ctx.arc(tx * TILE_SIZE + 4, ty * TILE_SIZE + 4, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = '#3bc6ff';
  const riverX = Math.floor(COLS * 0.7);
  for (let y = 0; y < ROWS; y++) {
    ctx.fillRect(riverX * TILE_SIZE, y * TILE_SIZE, TILE_SIZE * 2, TILE_SIZE);
  }
}

export const map_1_1: MapModule = { generate, draw };
