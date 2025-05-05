import { Tile } from "./tileTypes";

export interface MapModule {
  generate(): Tile[][];
  draw(data: Tile[][]): void;
}
