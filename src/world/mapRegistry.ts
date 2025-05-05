import { map_0_0 } from './maps/map_0_0';
import { MapModule } from './maps/types';
import { map_1_1 } from './maps/map_1_1';


type CoordKey = `${number}_${number}`;

export const mapRegistry: Record<CoordKey, MapModule> = {
  '0_0': map_0_0,
  '1_1': map_1_1,
};
