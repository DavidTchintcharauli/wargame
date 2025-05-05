export const player = {
    x: 100,
    y: 100,
    size: 32,
    baseSpeed: 2,
    speedMultiplier: 15,
  
    move(dx: number, dy: number) {
      this.x += dx;
      this.y += dy;
    },
  
    getSpeed(isRunning: boolean): number {
      return isRunning ? this.baseSpeed * this.speedMultiplier : this.baseSpeed;
    }
  };
  