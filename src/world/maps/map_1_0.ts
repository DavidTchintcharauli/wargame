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
      row.push({ type: 'field', elevation: 40 });
    }
    data.push(row);
  }

  return data;
}

function draw(data: Tile[][]): void {
  if (!ctx) return;

  ctx.fillStyle = 'hsl(90, 40%, 50%)';
  for (let y = 0; y < data.length; y++) {
    for (let x = 0; x < data[y].length; x++) {
      ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }

  const houseWidth = TILE_SIZE * 3;
  const houseHeight = TILE_SIZE * 2.5;
  const centerX = Math.floor((COLS * TILE_SIZE - houseWidth) / 2);
  const centerY = Math.floor((ROWS * TILE_SIZE - houseHeight) / 2);

  ctx.fillStyle = '#f5f5f5';
  ctx.fillRect(centerX, centerY, houseWidth, houseHeight);

  ctx.fillStyle = '#444';
  ctx.fillRect(centerX - 4, centerY - TILE_SIZE / 4, houseWidth + 8, TILE_SIZE / 4);

  const doorWidth = TILE_SIZE * 0.8;
  const doorHeight = TILE_SIZE * 1.2;
  const doorX = centerX + houseWidth / 2 - doorWidth / 2;
  const doorY = centerY + houseHeight - doorHeight;

  ctx.fillStyle = '#333';
  ctx.fillRect(doorX, doorY, doorWidth, doorHeight);

  ctx.fillStyle = 'gold';
  ctx.beginPath();
  ctx.arc(doorX + doorWidth - 8, doorY + doorHeight / 2, 4, 0, Math.PI * 2);
  ctx.fill();

  const windowSize = TILE_SIZE * 0.6;
  const windowGap = TILE_SIZE * 0.4;

  const wx1 = centerX + TILE_SIZE * 0.4;
  const wx2 = centerX + houseWidth - TILE_SIZE * 0.4 - windowSize;
  const wy = centerY + TILE_SIZE * 0.4;

  ctx.fillStyle = '#add8e6';
  ctx.fillRect(wx1, wy, windowSize, windowSize);
  ctx.fillRect(wx2, wy, windowSize, windowSize);

  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;

  if (!ctx) {
  console.error('Canvas rendering context is not available.');
  return;
  }

  const c = ctx;
  c.fillStyle = 'hsl(90, 40%, 50%)';
  [wx1, wx2].forEach((wx) => {
    c.beginPath();
    c.moveTo(wx + windowSize / 2, wy);
    c.lineTo(wx + windowSize / 2, wy + windowSize);
    c.moveTo(wx, wy + windowSize / 2);
    c.lineTo(wx + windowSize, wy + windowSize / 2);
    c.stroke();
  });
}

export const map_1_0: MapModule = { generate, draw };
