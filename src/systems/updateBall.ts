import { ball } from '../entities/ball';

export function updateBall(delta: number) {
  ball.frameTimer += delta;
  if (ball.frameTimer >= ball.frameDelay) {
    ball.frameTimer = 0;
    ball.frameIndex = (ball.frameIndex + 1) % 2;
  }
}
