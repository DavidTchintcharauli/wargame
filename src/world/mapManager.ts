import { mapRegistry } from './mapRegistry';
import { currentMap } from './map';
import { Tile } from './maps/tileTypes';

const tileCache: Record<string, Tile[][]> = {};

export function generateIfNeeded(): boolean {
  const key = `${currentMap.x}_${currentMap.y}` as const;

  if (!tileCache[key]) {
    const module = mapRegistry[key];

    if (!module) {
      console.warn(`map is not loading: ${key}`);
      return false;
    }

    tileCache[key] = module.generate();
    return true;
  }

  return true;
}

export function drawCurrentMap() {
  const key = `${currentMap.x}_${currentMap.y}` as const;
  const module = mapRegistry[key];
  const data = tileCache[key];

  if (module && data) {
    module.draw(data);
  } else {
    console.warn(`map is not loading: ${key}`);
  }
}
