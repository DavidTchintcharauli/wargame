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

  const houseWidth = TILE_SIZE * 4;
  const houseHeight = TILE_SIZE * 3;
  const centerX = Math.floor((COLS * TILE_SIZE - houseWidth) / 2);
  const centerY = Math.floor((ROWS * TILE_SIZE - houseHeight) / 2);

  ctx.fillStyle = '#8B4513';
  ctx.fillRect(centerX, centerY, houseWidth, houseHeight);

  ctx.fillStyle = '#b22222';
  ctx.beginPath();
  ctx.moveTo(centerX - 10, centerY); 
  ctx.lineTo(centerX + houseWidth / 2, centerY - TILE_SIZE); 
  ctx.lineTo(centerX + houseWidth + 10, centerY); 
  ctx.closePath();
  ctx.fill();

  const doorWidth = TILE_SIZE;
  const doorHeight = TILE_SIZE * 1.5;
  const doorX = centerX + houseWidth / 2 - doorWidth / 2;
  const doorY = centerY + houseHeight - doorHeight;

  ctx.fillStyle = '#654321'; 
  ctx.fillRect(doorX, doorY, doorWidth, doorHeight);

  ctx.fillStyle = 'gold';
  ctx.beginPath();
  ctx.arc(doorX + doorWidth - 10, doorY + doorHeight / 2, 4, 0, Math.PI * 2);
  ctx.fill();

  const windowSize = TILE_SIZE * 0.8;

  const windowPositions = [
    [centerX + TILE_SIZE * 0.5, centerY + TILE_SIZE * 0.5],
    [centerX + TILE_SIZE * 2.5, centerY + TILE_SIZE * 0.5],
  ];

  ctx.fillStyle = '#87CEEB';
  for (const [wx, wy] of windowPositions) {
    ctx.fillRect(wx, wy, windowSize, windowSize);

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(wx + windowSize / 2, wy);
    ctx.lineTo(wx + windowSize / 2, wy + windowSize);
    ctx.moveTo(wx, wy + windowSize / 2);
    ctx.lineTo(wx + windowSize, wy + windowSize / 2);
    ctx.stroke();
  }
}

export const map_1_1: MapModule = { generate, draw };
