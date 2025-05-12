import { map_0_0 } from './maps/map_0_0';
import { MapModule } from './maps/types';
import { map_1_1 } from './maps/map_1_1';
import { map_0_1 } from './maps/map_0_1';
import { map_1_0 } from './maps/map_1_0';
import { map_2_2 } from './maps/map_2_2';
import { map_1_2 } from './maps/map_1_2';

type CoordKey = `${number}_${number}`;

export const mapRegistry: Record<CoordKey, MapModule> = {
  '0_0': map_0_0,
  '0_1': map_0_1,
  '1_1': map_1_1,
  '1_0': map_1_0,
  '2_2': map_2_2,
  '1_2': map_1_2,
};
