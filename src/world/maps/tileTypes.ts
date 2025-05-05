export type TileType = 'mountain' | 'field' | 'valley';

export interface Tile {
  type: TileType;
  elevation: number;
}
