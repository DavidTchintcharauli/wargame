export type Direction = 'left' | 'right';
export type PlayerState = 'attack' | 'walk'

export const player = {
  x: 100,
  y: 100,
  frameIndex: 0,
  frameTimer: 0,
  frameDelay: 200,
  direction: 'right' as Direction,
  state: 'attack' as PlayerState,
  size: 164,
};
