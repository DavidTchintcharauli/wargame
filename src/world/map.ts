import { generateIfNeeded } from './mapManager';

export type MapCoord = { x: number; y: number };

const WORLD_WIDTH = 3;
const WORLD_HEIGHT = 3;

export let currentMap: MapCoord = { x: 1, y: 1 };

export function tryChangeMap(direction: 'left' | 'right' | 'up' | 'down'): boolean {
  const newMap = { ...currentMap };

  if (direction === 'left') newMap.x -= 1;
  if (direction === 'right') newMap.x += 1;
  if (direction === 'up') newMap.y -= 1;
  if (direction === 'down') newMap.y += 1;

  const isValid =
    newMap.x >= 0 && newMap.x < WORLD_WIDTH &&
    newMap.y >= 0 && newMap.y < WORLD_HEIGHT;

  if (isValid) {
    currentMap = newMap;

    generateIfNeeded();
    console.warn(`map is not loading: ${newMap.x}_${newMap.y}`);

    return true;
  }

  return false;
}
