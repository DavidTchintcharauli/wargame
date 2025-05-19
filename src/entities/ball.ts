export type Direction = 'left' | 'right';
export type BallState = 'idle' | 'walk';

export const ball = {
  x: 100,
  y: 100,
  frameIndex: 0,
  frameTimer: 0,
  frameDelay: 300,
};
