import { mapRegistry } from './mapRegistry';
import { currentMap } from './map';
import { Tile } from './maps/tileTypes';

const tileCache: Record<string, Tile[][]> = {};

export function generateIfNeeded() {
  const key = `${currentMap.x}_${currentMap.y}` as const;
  if (!tileCache[key]) {
    console.log('Generating new map for:', key);
    tileCache[key] = mapRegistry[key]?.generate();
  }
}

export function drawCurrentMap() {
  const key = `${currentMap.x}_${currentMap.y}` as const;
  const module = mapRegistry[key];
  const data = tileCache[key];

  if (module && data) {
    module.draw(data);
  }
}
