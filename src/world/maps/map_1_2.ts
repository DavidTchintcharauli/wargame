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
      row.push({ type: 'field', elevation: 0 });
    }
    data.push(row);
  }
  return data;
}

let image: HTMLImageElement | null = null;
let loaded = false;

function draw(): void {
  if (!ctx) return;

  const imagePath = '../../assets/maps/map_1_2.png';

  if (!image) {
    image = new Image();
    image.src = imagePath;

    image.onload = () => {
      loaded = true;
      if (ctx) {
        ctx.drawImage(image!, 0, 0, canvas.width, canvas.height);
      }
    };

    image.onerror = () => {
      console.error(`map is not loading: ${imagePath}`);
    };

    return;
  }

  if (loaded) {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  } else {
    ctx.fillStyle = '#222';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.font = '24px sans-serif';
    ctx.fillText('Loading map_2_2...', 20, 40);
  }
}

export const map_1_2: MapModule = { generate, draw };
